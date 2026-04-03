import { VersionAdmonitionType, VersionBannerType } from "./version-banner";

export interface Version {
  label: string;
  path: string;
  bannerType: VersionBannerType;
  bannerMessage?: string;
  admonitionType?: VersionAdmonitionType;
  suitableFor: VersionSuitableFor;
}

export enum VersionSuitableFor {
  PRODUCTION = "Production",
  PILOTS = "Pilots",
  TESTING = "Testing",
}

export interface VersionGroup {
  version: string;
  config: Version;
}

export interface VersionGroups {
  wip: Array<VersionGroup>;
  maintained: Array<VersionGroup>;
  unmaintained: Array<VersionGroup>;
}
