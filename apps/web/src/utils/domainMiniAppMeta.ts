export const CAKEPAD_HOST = 'launchpad.pancakeswap.finance'
export const PANCAKESWAP_HOST = 'pancakeswap.finance'

export const BASE_APP_ID_BY_HOST: Record<string, string> = {
  [CAKEPAD_HOST]: '698194b61672d70694e293ea',
  [PANCAKESWAP_HOST]: '69bcf00a8d299162030cdffd',
}

export const MINI_APP_EMBED_BY_HOST: Record<string, string> = {
  [CAKEPAD_HOST]: JSON.stringify({
    version: '1',
    imageUrl: 'https://assets.pancakeswap.finance/web/og/ifo.jpg',
    button: {
      title: 'Open Launchpad',
      action: {
        type: 'launch_frame',
        name: 'Launchpad (VLX.PAD)',
        url: 'https://launchpad.pancakeswap.finance',
        splashImageUrl: 'https://pancakeswap.finance/logo.png',
        splashBackgroundColor: '#0f1220',
      },
    },
  }),
  [PANCAKESWAP_HOST]: JSON.stringify({
    version: '1',
    imageUrl: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg',
    button: {
      title: 'Open HexPay',
      action: {
        type: 'launch_frame',
        name: 'HexPay',
        url: 'https://pancakeswap.finance',
        splashImageUrl: 'https://pancakeswap.finance/logo.png',
        splashBackgroundColor: '#0f1220',
      },
    },
  }),
}

export const normalizeHost = (host?: string | string[]) =>
  (Array.isArray(host) ? host[0] : host)?.split(':')[0]?.toLowerCase()
