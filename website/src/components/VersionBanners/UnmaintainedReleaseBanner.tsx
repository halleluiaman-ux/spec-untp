import Admonition from "@theme/Admonition";
import React from "react";

import { VersionBannerProps } from "../../types/version-banner";

/**
 * UnmaintainedReleaseBanner component that displays a banner for unmaintained/legacy release versions.
 *
 * This banner warns users they are viewing an older, unsupported version and encourages them
 * to migrate to a maintained release. These versions are no longer receiving updates or support.
 */
export default function UnmaintainedReleaseBanner({
  versionLabel,
  siteTitle,
  customMessage,
  customAdmonitionType,
  actionLink,
}: VersionBannerProps) {
  const defaultMessage = `You're viewing an older version of the ${siteTitle} (v${versionLabel}).`;
  const defaultAdmonitionType = "danger";

  const message = customMessage || defaultMessage;
  const type = customAdmonitionType || defaultAdmonitionType;

  return (
    <Admonition type={type} title={"Outdated"}>
      <div>
        {message}
        <br />
        Please consider migrating to a{" "}
        <a href={actionLink}>maintained release.</a>
      </div>
    </Admonition>
  );
}
