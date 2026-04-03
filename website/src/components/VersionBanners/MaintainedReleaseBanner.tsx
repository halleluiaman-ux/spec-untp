import Admonition from "@theme/Admonition";
import React from "react";

import { VersionBannerProps } from "../../types/version-banner";

/**
 * MaintainedReleaseBanner component that displays a banner for maintained release versions.
 *
 * This banner informs users they are viewing a maintained (but not latest) version and provides
 * a link to see all maintained releases. These versions are still supported but not the newest.
 */
export default function MaintainedReleaseBanner({
  versionLabel,
  siteTitle,
  customMessage,
  customAdmonitionType,
  actionLink,
}: VersionBannerProps) {
  const defaultMessage = `You're viewing a maintained version of the ${siteTitle} (v${versionLabel}).`;
  const defaultAdmonitionType = "warning";

  const message = customMessage || defaultMessage;
  const type = customAdmonitionType || defaultAdmonitionType;

  return (
    <Admonition type={type} title={`Maintained`}>
      <div>
        {message}
        <br />
        For the latest release, see the list of{" "}
        <a href={actionLink}>maintained releases.</a>
      </div>
    </Admonition>
  );
}
