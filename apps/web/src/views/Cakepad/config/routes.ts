import { WalletIds } from '@pancakeswap/ui-wallets'
import { WalletRuntimeEnv } from 'wallet/runtime'

export const CAKEPAD_URL = '/launchpad'
export const CAKEPAD_DEPOSIT_URL = `${CAKEPAD_URL}/deposit`
export const CAKEPAD_HISTORY_URL = `${CAKEPAD_URL}/history`
export const CAKEPAD_BASE_CHAIN_QUERY = 'base'
export const CAKEPAD_HOST = 'launchpad.pancakeswap.finance'

const normalizeChainQuery = (chain?: string | string[]) => (Array.isArray(chain) ? chain[0] : chain)?.toLowerCase()
const normalizeHost = (host?: string | string[]) => (Array.isArray(host) ? host[0] : host)?.split(':')[0]?.toLowerCase()

export const withLaunchpadBaseChainQuery = (path: string, isBaseExperience: boolean) =>
  isBaseExperience ? `${path}?chain=${CAKEPAD_BASE_CHAIN_QUERY}` : path

export const isLaunchpadHost = (host?: string | string[]) => normalizeHost(host) === CAKEPAD_HOST

export const isLaunchpadRoute = ({ pathname, host }: { pathname?: string; host?: string | string[] }) =>
  Boolean((pathname?.startsWith(CAKEPAD_URL) ?? false) || isLaunchpadHost(host))

export const isLaunchpadBaseExperience = ({
  pathname,
  chain,
  env,
  wallet,
}: {
  pathname?: string
  chain?: string | string[]
  env?: WalletRuntimeEnv | null
  wallet?: WalletIds | null
}) =>
  Boolean(
    ((pathname?.startsWith(CAKEPAD_URL) ?? false) && normalizeChainQuery(chain) === CAKEPAD_BASE_CHAIN_QUERY) ||
      (env === 'wallet_app' && wallet === WalletIds.BaseApp),
  )
