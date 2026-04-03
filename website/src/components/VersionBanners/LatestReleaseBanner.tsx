import Admonition from "@theme/Admonition";
import React from "react";

import { VersionBannerProps } from "../../types/version-banner";

/**
 * LatestReleaseBanner component that displays a banner for the latest release version.
 *
 * This banner informs users they are viewing the most recent release and provides
 * a link to check out the Work in Progress version for upcoming changes.
 */
export default function LatestReleaseBanner({
  siteTitle,
  customMessage,
  customAdmonitionType,
  actionLink,
}: VersionBannerProps) {
  const defaultMessage = `You're viewing the latest release of the ${siteTitle}.`;
  const defaultAdmonitionType = "info";

  const message = customMessage || defaultMessage;
  const type = customAdmonitionType || defaultAdmonitionType;

  return (
    <Admonition type={type} title={"Latest"}>
      <div>
        {message}
        <br />
        For upcoming changes, check out the{" "}
        <a href={actionLink}>latest Work in Progress.</a>
      </div>
    </Admonition>
  );
}
