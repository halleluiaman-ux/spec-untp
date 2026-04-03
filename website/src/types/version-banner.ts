import { VersionSuitableFor } from "./versions";

export interface VersionBannerProps {
  siteTitle: string;
  versionLabel: string;
  customMessage?: string;
  customAdmonitionType?: VersionAdmonitionType;
  actionLink: string;
}

export interface VersionBannerConfig {
  bannerType: VersionBannerType;
  message?: string;
  admonitionType?: VersionAdmonitionType;
  suitableFor: VersionSuitableFor;
}

export enum VersionBannerType {
  WIP = "wip",
  LATEST = "latest",
  MAINTAINED = "maintained",
  UNMAINTAINED = "unmaintained",
}

export enum VersionAdmonitionType {
  INFO = "info",
  WARNING = "warning",
  DANGER = "danger",
  CAUTION = "caution",
}
