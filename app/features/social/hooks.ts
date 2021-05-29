import { useState, useEffect } from 'react';

import { getShareLinkWithUser, DEFAULT_URL, ShareLinkProps } from './helpers';

export function useGetShareLinkWithUser({ user, campaign, offer }: ShareLinkProps) {
  const [isLoading, setLoading] = useState(true);
  const [shareLink, setShareLink] = useState(DEFAULT_URL);

  useEffect(() => {
    const getLink = async () => {
      const result = await getShareLinkWithUser({ user, campaign, offer });
      setShareLink(result);
      setLoading(false);
    };
    getLink();
  }, [user, campaign, offer]);

  return { shareLink, isLoading };
}

