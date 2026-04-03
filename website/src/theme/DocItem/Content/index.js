import OriginalDocItemContent from '@theme-original/DocItem/Content';
import React from 'react';

import VersionBanner from '../../../components/VersionBanners';

export default function DocItemContentWrapper(props) {
  return (
    <>
      <VersionBanner />
      <OriginalDocItemContent {...props} />
    </>
  );
}
