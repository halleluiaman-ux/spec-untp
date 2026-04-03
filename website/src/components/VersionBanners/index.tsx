import { useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";

import { getBannerConfig } from "../../config/versions";
import { VersionBannerType } from "../../types/version-banner";
import LatestReleaseBanner from "./LatestReleaseBanner";
import MaintainedReleaseBanner from "./MaintainedReleaseBanner";
import UnmaintainedReleaseBanner from "./UnmaintainedReleaseBanner";
import WIPBanner from "./WIPBanner";

/**
 * VersionBanner component that displays contextual version banners
 * based on the current page's version context.
 *
 * This component automatically detects which version of the documentation the user
 * is viewing by analysing the URL path and displays an appropriate banner:
 * - WIP (Work in Progress): For development versions under active development
 * - Latest: For the most recent release
 * - Maintained: For supported but not latest versions
 * - Unmaintained: For legacy versions no longer supported
 *
 * The banner type, styling, and messages are determined by the version configuration
 * in the versions config file. Each banner provides contextual information and
 * navigation links to help users find the appropriate version for their needs.
 */
export default function VersionBanner() {
  const location = useLocation();
  const { globalData } = useDocusaurusContext();

  const docsData = globalData?.["docusaurus-plugin-content-docs"]
    ?.default as any;
  const versions = docsData?.versions ?? [];

  // Extract version from URL path (e.g., /docs/0.7.0/specification -> 0.7.0)
  const activeVersion = versions.find((v) => {
    // For current version (path: "/docs"), check if pathname starts with /docs/ but has no version
    if (v.path === "/docs") {
      return (
        location.pathname.startsWith("/docs/") &&
        !location.pathname.match(/^\/docs\/\d+\.\d+\.\d+/)
      );
    }
    // For versioned paths (e.g., path: "/docs/0.7.0"), check if pathname starts with that path
    return (
      location.pathname.startsWith(v.path + "/") || location.pathname === v.path
    );
  });

  const wipVersion = versions.find((v) => v.name === "current");

  const wipActionLink = `${useBaseUrl(
    wipVersion?.path ?? "/docs"
  )}/specification`;
  const maintainedVersionsActionLink = `${useBaseUrl("/versions")}#maintained`;

  if (!activeVersion) return null;

  const {
    label: versionLabel,
    isNext,
    isLast,
    name: versionName,
  } = activeVersion;

  // Use long name
  const siteTitle = "United Nations Transparency Protocol";

  // Get custom banner configuration
  const customBannerConfig = getBannerConfig(versionName);

  if (!customBannerConfig) {
    console.warn("No custom banner config found for version", versionName);
    return null;
  }

  // Extract custom properties from config file
  const bannerMessage = customBannerConfig?.message;
  const admonitionType = customBannerConfig?.admonitionType;

  // Determine banner type with fallbacks
  const bannerType =
    customBannerConfig?.bannerType ||
    (isNext
      ? VersionBannerType.WIP
      : isLast
      ? VersionBannerType.LATEST
      : undefined);

  const bannerComponents = {
    [VersionBannerType.WIP]: WIPBanner,
    [VersionBannerType.LATEST]: LatestReleaseBanner,
    [VersionBannerType.MAINTAINED]: MaintainedReleaseBanner,
    [VersionBannerType.UNMAINTAINED]: UnmaintainedReleaseBanner,
  };

  const BannerComponent = bannerComponents[bannerType];
  if (!BannerComponent) return null;

  const commonProps = {
    siteTitle,
    versionLabel,
    customMessage: bannerMessage,
    customAdmonitionType: admonitionType,
  };

  const bannerProps = {
    [VersionBannerType.WIP]: { actionLink: maintainedVersionsActionLink },
    [VersionBannerType.LATEST]: { actionLink: wipActionLink },
    [VersionBannerType.MAINTAINED]: {
      actionLink: maintainedVersionsActionLink,
    },
    [VersionBannerType.UNMAINTAINED]: {
      actionLink: maintainedVersionsActionLink,
    },
  };

  return <BannerComponent {...bannerProps[bannerType]} {...commonProps} />;
}
