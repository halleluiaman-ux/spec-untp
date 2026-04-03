import { VersionOptions as DocusaurusVersionOptions } from "@docusaurus/plugin-content-docs";
import {
  VersionBannerConfig,
  VersionBannerType,
} from "../types/version-banner";
import { Version, VersionSuitableFor } from "../types/versions";

/**
 * Complete version configuration for the project
 * Users only need to specify label, path, and custom banner configuration
 */
export const versionsConfig: Record<string, Version> = {
  current: {
    label: "Work in Progress",
    path: "",
    bannerType: VersionBannerType.WIP,
    suitableFor: VersionSuitableFor.TESTING,
  },
  "0.6.0": {
    label: "0.6.0",
    path: "0.6.0",
    bannerType: VersionBannerType.LATEST,
    suitableFor: VersionSuitableFor.PILOTS,
  },
};

/**
 * Extract Docusaurus-compatible version configuration
 * Sets all banners to 'none' since we handle banners through our custom banner system
 */
export function getDocusaurusVersions(): Record<
  string,
  DocusaurusVersionOptions
> {
  const docusaurusVersions = {};

  Object.entries(versionsConfig).forEach(([versionName, config]) => {
    docusaurusVersions[versionName] = {
      label: config.label,
      path: config.path,
      banner: "none",
    };
  });

  return docusaurusVersions;
}

/**
 * Get custom banner configuration for a specific version
 */
export function getBannerConfig(
  versionName: string
): VersionBannerConfig | null {
  const config = versionsConfig[versionName];
  if (!config) return null;

  return {
    bannerType: config.bannerType,
    message: config.bannerMessage,
    admonitionType: config.admonitionType,
    suitableFor: config.suitableFor,
  };
}
