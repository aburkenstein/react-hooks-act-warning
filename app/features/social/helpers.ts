import { Offer, Campaign } from './types';

export const DEFAULT_URL = 'https://default/url';


export function getShareLink(options) {
  
  //stand-in for the production promise
  const shareLinkPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve(options);
    }, 300);
  });
  return shareLinkPromise;
}

export type ShareLinkProps = {
  user: {
    id: number;
    profileImage: string;
    firstName: string;
  };
  campaign: Campaign;
  offer: Offer;
};
export async function getShareLinkWithUser({ user, campaign, offer }: ShareLinkProps) {
  try {
    return await getShareLink(offer);
  } catch (e) {
    console.log(e);
  }
  return DEFAULT_URL;
}