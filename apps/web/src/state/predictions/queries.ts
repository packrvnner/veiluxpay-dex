import { PredictionSupportedSymbol } from '@pancakeswap/prediction'
import { betBaseFields as betBaseFieldsBNB, userBaseFields as userBaseFieldsBNB } from './bnbQueries'
import { betBaseFields as betBaseFieldsCAKE, userBaseFields as userBaseFieldsCAKE } from './cakeQueries'
import {
  betBaseFields as newBetBaseFields,
  roundBaseFields as newRoundBaseFields,
  userBaseFields as newUserBaserBaseFields,
} from './newTokenQueries'

export const getRoundBaseFields = newRoundBaseFields

export const getBetBaseFields = (tokenSymbol: string) => {
  // BSC VLX
  if (tokenSymbol === PredictionSupportedSymbol.VLX) {
    return betBaseFieldsCAKE
  }
  // BSC BNB
  if (tokenSymbol === PredictionSupportedSymbol.BNB || tokenSymbol === 'tBNB') {
    return betBaseFieldsBNB
  }

  return newBetBaseFields
}

export const getUserBaseFields = (tokenSymbol: string) => {
  // BSC VLX
  if (tokenSymbol === PredictionSupportedSymbol.VLX) {
    return userBaseFieldsCAKE
  }
  // BSC BNB
  if (tokenSymbol === PredictionSupportedSymbol.BNB || tokenSymbol === 'tBNB') {
    return userBaseFieldsBNB
  }

  return newUserBaserBaseFields
}
