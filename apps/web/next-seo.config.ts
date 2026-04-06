import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | HexPay',
  defaultTitle: 'HexPay',
  description: 'Trade, stake, and earn on the multi-chain decentralized exchange',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@HexPay',
    site: '@HexPay',
  },
  openGraph: {
    title: 'HexPay — Multi-Chain DEX',
    description: 'Trade, stake, and earn on the multi-chain decentralized exchange',
    images: [],
  },
}
