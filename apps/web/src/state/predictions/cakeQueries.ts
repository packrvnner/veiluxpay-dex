import { BetResponse, RoundResponse, UserResponse } from './responseType'

export interface UserResponseVLX extends UserResponse<BetResponseCAKE> {
  totalVLX: string
  totalVLXBull: string
  totalVLXBear: string
  averageVLX: string
  totalVLXClaimed: string
  netVLX: string
}

export interface BetResponseCAKE extends BetResponse {
  claimedVLX: string
  claimedNetVLX: string
  user?: UserResponseVLX
  round?: RoundResponseVLX
}

export type RoundResponseVLX = RoundResponse<BetResponseCAKE>

/**
 * Base fields are the all the top-level fields available in the api. Used in multiple queries
 */

export const betBaseFields = `
  id
  hash
  amount
  position
  claimed
  claimedAt
  claimedHash
  claimedBlock
  claimedVLX
  claimedNetVLX
  createdAt
  updatedAt
`

export const userBaseFields = `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalVLX
  totalVLXBull
  totalVLXBear
  totalBetsClaimed
  totalVLXClaimed
  winRate
  averageVLX
  netVLX
`
