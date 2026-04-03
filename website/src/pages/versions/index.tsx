import Layout from "@theme/Layout";
import React from "react";

import { versionsConfig } from "../../config/versions";
import { VersionBannerType } from "../../types/version-banner";
import { VersionGroups } from "../../types/versions";
import { VersionSection } from "../../components/versions/VersionSection";

/**
 * Main versions page component that displays all available specification versions
 *
 * Groups versions by their banner type (work-in-progress, maintained, unmaintained)
 * and displays them in organised sections. Includes a legend explaining the
 * suitability badges and automatically sorts versions within each group.
 *
 * The page:
 * - Groups versions from versionsConfig by their banner type
 * - Sorts versions within each group by version number (newest first)
 * - Displays a legend for Production/Pilots/Testing badges
 * - Renders each group in its own VersionSection
 */
export default function VersionsPage() {
  // Group versions by type
  const versionGroups: VersionGroups = {
    wip: [],
    maintained: [],
    unmaintained: [],
  };

  Object.entries(versionsConfig).forEach(([version, config]) => {
    const bannerType =
      version === "current" ? VersionBannerType.WIP : config.bannerType;

    // Combine latest and maintained under "maintained"
    if (bannerType === VersionBannerType.LATEST) {
      versionGroups.maintained.push({ version, config });
    } else if (versionGroups[bannerType]) {
      versionGroups[bannerType].push({ version, config });
    }
  });

  // Sort each group appropriately
  Object.keys(versionGroups).forEach((type) => {
    versionGroups[type].sort((a: any, b: any) => {
      if (type === VersionBannerType.WIP) return 0; // WIP should only have one item

      // Sort by version number (descending - newer first)
      const versionA = a.version.replace(/\./g, "");
      const versionB = b.version.replace(/\./g, "");
      return parseInt(versionB) - parseInt(versionA);
    });
  });

  return (
    <Layout
      title="Documentation Versions"
      description="All available versions of the UN Transparency Protocol documentation"
    >
      <div
        style={{ maxWidth: "1140px", margin: "0 auto", padding: "3rem 1rem" }}
      >
        <header style={{ marginBottom: "5rem", textAlign: "center" }}>
          <h1>Documentation Versions</h1>
          <p style={{ fontSize: "1.25rem", fontWeight: 300 }}>
            Choose the version that best fits your needs.
          </p>

          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span className="badge badge--success">Production</span>
                <span style={{ textAlign: "left" }}>
                  Ready for production use
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span className="badge badge--info">Pilots</span>
                <span style={{ textAlign: "left" }}>
                  Suitable for pilot implementations
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span className="badge badge--warning">Testing</span>
                <span style={{ textAlign: "left" }}>
                  For testing and evaluation only
                </span>
              </div>
            </div>
          </div>
        </header>

        <VersionSection
          title="Work in Progress"
          description="Latest development version with cutting-edge features. May change before release."
          versions={versionGroups.wip}
        />

        <VersionSection
          title="Maintained"
          description="Stable releases that receive security updates and critical bug fixes."
          versions={versionGroups.maintained}
        />

        <VersionSection
          title="Unmaintained"
          description="Legacy versions no longer supported. Consider upgrading to a newer version."
          versions={versionGroups.unmaintained}
        />
      </div>
    </Layout>
  );
}
