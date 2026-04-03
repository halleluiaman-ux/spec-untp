import Admonition from "@theme/Admonition";
import React from "react";

import { VersionBannerProps } from "../../types/version-banner";

/**
 * WIPBanner component that displays a banner for Work in Progress (development) versions.
 *
 * This banner warns users they are viewing the latest development version which is under
 * active development and may change before release. It advises using maintained releases.
 */
export default function WIPBanner({
  siteTitle,
  customMessage,
  customAdmonitionType,
  actionLink,
}: VersionBannerProps) {
  const defaultMessage = `This is the latest Work in Progress for the ${siteTitle}. The content of this version is under active development and may change before release.`;
  const defaultAdmonitionType = "warning";

  const message = customMessage || defaultMessage;
  const type = customAdmonitionType || defaultAdmonitionType;

  return (
    <Admonition type={type} title="Work in Progress">
      <div>
        {message}
        <br />
        It's advised to use the latest maintained release from the list of{" "}
        <a href={actionLink}>maintained releases.</a>
      </div>
    </Admonition>
  );
}
