import { Bet, PredictionUser } from 'state/types'
import { transformRoundResponseToken, transformUserResponseToken, transformBetResponseToken } from './tokenTransformers'

export const transformBetResponseCAKE = (betResponse): Bet => {
  const baseBet = transformBetResponseToken(betResponse)
  const bet = {
    ...baseBet,
    claimedBNB: betResponse.claimedVLX ? parseFloat(betResponse.claimedVLX) : 0,
    claimedNetBNB: betResponse.claimedNetVLX ? parseFloat(betResponse.claimedNetVLX) : 0,
  } as Bet

  if (betResponse.user) {
    bet.user = transformUserResponseCAKE(betResponse.user)
  }

  if (betResponse.round) {
    bet.round = transformRoundResponseToken(betResponse.round, transformBetResponseCAKE)
  }

  return bet
}

export const transformUserResponseCAKE = (userResponse): PredictionUser => {
  const baseUserResponse = transformUserResponseToken(userResponse)
  const { totalVLX, totalVLXBull, totalVLXBear, totalVLXClaimed, averageVLX, netVLX } = userResponse || {}

  return {
    ...baseUserResponse,
    totalBNB: totalVLX ? parseFloat(totalVLX) : 0,
    totalBNBBull: totalVLXBull ? parseFloat(totalVLXBull) : 0,
    totalBNBBear: totalVLXBear ? parseFloat(totalVLXBear) : 0,
    totalBNBClaimed: totalVLXClaimed ? parseFloat(totalVLXClaimed) : 0,
    averageBNB: averageVLX ? parseFloat(averageVLX) : 0,
    netBNB: netVLX ? parseFloat(netVLX) : 0,
  }
}
