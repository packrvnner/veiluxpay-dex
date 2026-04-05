import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | VeiluxPay',
  defaultTitle: 'VeiluxPay',
  description: 'Trade, stake, and earn on the multi-chain decentralized exchange',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@VeiluxPay',
    site: '@VeiluxPay',
  },
  openGraph: {
    title: 'VeiluxPay — Multi-Chain DEX',
    description: 'Trade, stake, and earn on the multi-chain decentralized exchange',
    images: [],
  },
}
