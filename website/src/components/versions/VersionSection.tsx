import React from "react";

import { Version } from "../../types/versions";
import { VersionItem } from "./VersionItem";

interface VersionSectionProps {
  title: string;
  description: string;
  versions: Array<{
    version: string;
    config: Version;
  }>;
}

/**
 * Renders a section containing a group of related versions
 *
 * Groups versions by their type (e.g., maintained, unmaintained, work-in-progress)
 * and displays them in a styled container with a title and description.
 */
export function VersionSection({
  title,
  description,
  versions,
}: VersionSectionProps) {
  if (versions.length === 0) return null;

  const sectionId = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div style={{ marginBottom: "3rem" }} id={sectionId}>
      <div style={{ marginBottom: "2rem" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div
        style={{
          backgroundColor: "var(--ifm-background-surface-color)",
          border: "1px solid var(--ifm-color-emphasis-300)",
          borderRadius: "8px",
          padding: "24px",
        }}
      >
        {versions.map(({ version, config }, index: number) => (
          <VersionItem
            key={version}
            config={config}
            isLast={index === versions.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
