import { renderHook } from '@testing-library/react-hooks';

import { ShareLinkProps } from './helpers';

describe('social hooks', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('useGetShareLinkWithUser', () => {
    it('should return the share link for the user', async () => {
      const socialHelpers = await import('./helpers');
    
      // const mockGetShareLinkWithUser = jest
      //   .spyOn(socialHelpers, 'getShareLinkWithUser')
      //   .mockImplementation(() => Promise.resolve('mockResolve'));

      socialHelpers.getShareLinkWithUser = jest.fn()
      .mockReturnValueOnce(Promise.resolve('mockResolve'));
    
      const hooks = await import('./hooks');
    
      const props: ShareLinkProps = {
        user: { id: 1, profileImage: 'some', firstName: 'test' },
        campaign: 'GIFT',
        offer: 'Gift'
      };
    
      const { result, waitForNextUpdate } = renderHook(() => hooks.useGetShareLinkWithUser(props));
    
      expect(result.current.shareLink).toBe('https://default/url');
      expect(result.current.isLoading).toBe(true);
    
      await waitForNextUpdate();
    
      expect(result.current.shareLink).toBe('mockResolve');
      expect(result.current.isLoading).toBe(false);
    });
  });
});
