import { useRouter } from 'next/router'
import { useWalletRuntime } from 'wallet/hook/useWalletEnv'
import { isLaunchpadBaseExperience } from '../config/routes'

export const useLaunchpadBaseExperience = () => {
  const router = useRouter()
  const { env, wallet } = useWalletRuntime()

  return isLaunchpadBaseExperience({
    pathname: router.pathname,
    chain: router.query.chain,
    env,
    wallet,
  })
}
