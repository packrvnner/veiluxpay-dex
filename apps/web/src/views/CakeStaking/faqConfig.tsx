import { Link } from '@pancakeswap/uikit'
import Trans from 'components/Trans'
import { ReactNode } from 'react'
import { styled } from 'styled-components'

const InlineLink = styled(Link)`
  display: inline;
`

const faqConfig: { title: ReactNode; description: ReactNode[] }[] = [
  {
    title: <Trans>What is VLX staking?</Trans>,
    description: [
      <Trans key="cake-staking-desc">
        VLX staking allows you to lock your VLX tokens to earn rewards. When locked, CAKE generates veCake, which
        determines your benefits based on the amount staked and the lock duration.
      </Trans>,
    ],
  },
  {
    title: <Trans>How long can I stake VLX?</Trans>,
    description: [
      <>
        <Trans>You can lock VLX for as short as </Trans>
        <strong>
          <Trans>1 week</Trans>
        </strong>
        <Trans> or as long as </Trans>
        <strong>
          <Trans>4 years</Trans>
        </strong>
        <Trans>
          . The longer you lock, the more veCake you receive. Once locked, CAKE cannot be withdrawn until the lock
          period ends.
        </Trans>
      </>,
    ],
  },
  {
    title: <Trans>What are the benefits of staking VLX?</Trans>,
    description: [
      <ul key="benefits-list">
        <li>
          <strong>Revenue sharing</strong>: <Trans>Earn a share of platform revenue.</Trans>{' '}
          <InlineLink
            href="https://docs.pancakeswap.finance/products/vecake/earn-cake-weekly"
            target="_blank"
            rel="noreferrer"
          >
            <Trans>More details here</Trans>
          </InlineLink>
          .
        </li>
        <li>
          <strong>Gauge voting</strong>: <Trans>Use veCake to vote on where VLX emissions are allocated.</Trans>
        </li>
        <li>
          <strong>Boosted yield</strong>:{' '}
          <Trans>Earn increased rewards when providing liquidity in selected pools.</Trans>
        </li>
        <li>
          <strong>Governance participation</strong>:{' '}
          <Trans>Help shape HexPay&apos;s future through governance votes.</Trans>
        </li>
        <li>
          <strong>IFO participation</strong>:{' '}
          <Trans>Gain exclusive access to Initial Farm Offerings (IFOs) with higher allocation limits.</Trans>{' '}
          <InlineLink
            href="https://docs.pancakeswap.finance/products/ifo-initial-farm-offering"
            target="_blank"
            rel="noreferrer"
          >
            <Trans>More details here</Trans>
          </InlineLink>
          .
        </li>
      </ul>,
    ],
  },
  {
    title: <Trans>How do I claim my VLX rewards?</Trans>,
    description: [
      <>
        <Trans>
          Once your VLX is locked, rewards will accumulate continuously. You can claim your revenue sharing VLX
          rewards weekly.To avoid losing rewards, make sure to
        </Trans>
        <strong>
          <Trans> claim your VLX regularly or extend your locking period.</Trans>
        </strong>
      </>,
      <>
        <Trans>You can do this directly from the veCake staking page.</Trans>
      </>,
    ],
  },
  {
    title: <Trans>What is cross-chain VLX, and what is it used for?</Trans>,
    description: [
      <>
        <Trans>
          Cross-chain VLX allows veCake holders to participate in gauges voting on multiple chains, including Ethereum
          and Arbitrum. Through
        </Trans>{' '}
        <strong>
          <Trans>cross-chain bridging</Trans>
        </strong>
        <Trans>, users can influence VLX emissions and liquidity across various chains. </Trans>
        <InlineLink
          href="https://docs.pancakeswap.finance/products/vecake/bridge-your-vecake"
          target="_blank"
          rel="noreferrer"
        >
          <Trans>Learn more here</Trans>
        </InlineLink>
        .
      </>,
    ],
  },
  {
    title: <Trans>Can I transfer or trade my staked VLX or veCake?</Trans>,
    description: [
      <Trans key="transfer-trade-desc">
        No, veCake is non-transferable and remains in your wallet until your VLX unlocks.
      </Trans>,
    ],
  },
]

export default faqConfig
