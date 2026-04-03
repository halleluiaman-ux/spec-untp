import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

import { Version, VersionSuitableFor } from "../../types/versions";

const suitableForMap = {
  [VersionSuitableFor.PRODUCTION]: "success",
  [VersionSuitableFor.PILOTS]: "info",
  [VersionSuitableFor.TESTING]: "warning",
};

interface VersionItemProps {
  config: Version;
  isLast: boolean;
}

/**
 * Renders a single version item with label, badge, banner message, and view docs link
 */
export function VersionItem({ config, isLast }: VersionItemProps) {
  const versionUrl = config.path
    ? useBaseUrl(`/docs/${config.path}/specification`)
    : useBaseUrl("/docs/specification");

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", minWidth: "200px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "4px",
              flexWrap: "wrap",
            }}
          >
            <h4 style={{ marginBottom: 0 }}>{config.label}</h4>
            {config.suitableFor && (
              <span
                className={`badge badge--${
                  suitableForMap[config.suitableFor] ?? "warning"
                }`}
              >
                {config.suitableFor}
              </span>
            )}
          </div>
          {config.bannerMessage && (
            <p style={{ marginBottom: 0 }}>{config.bannerMessage}</p>
          )}
        </div>
        <Link
          className="button button--primary"
          to={versionUrl}
          style={{ flexShrink: 0 }}
        >
          View Docs
        </Link>
      </div>
      {!isLast && <hr style={{ marginTop: "1rem" }} />}
    </div>
  );
}
