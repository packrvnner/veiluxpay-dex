import { ChainId } from '@pancakeswap/chains'
import IfoHistoryCard from './components/IfoHistoryCard'
import { IfoV2Provider } from './contexts/IfoV2Provider'
import { useLaunchpadBaseExperience } from './hooks/useCakepadBaseExperience'
import { useIfoConfigs } from './hooks/useIfoConfigs'

const HistoryIfos: React.FC = () => {
  const isLaunchpadBaseRoute = useLaunchpadBaseExperience()
  const { data: filteredIfoConfigs } = useIfoConfigs({ chainId: isLaunchpadBaseRoute ? ChainId.BASE : undefined })

  if (!filteredIfoConfigs) {
    return null
  }

  if (!filteredIfoConfigs.length) {
    return null
  }

  return (
    <>
      {filteredIfoConfigs.map((ifo) => (
        <IfoV2Provider id={ifo.id} key={ifo.id}>
          <IfoHistoryCard />
        </IfoV2Provider>
      ))}
    </>
  )
}

export default HistoryIfos
