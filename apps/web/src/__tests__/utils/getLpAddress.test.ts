import { ERC20Token } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import getLpAddress from 'utils/getLpAddress'

const VLX_AS_STRING = '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'
const BUSD_AS_STRING = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
const VLX_AS_TOKEN = new ERC20Token(ChainId.BSC, VLX_AS_STRING, 18, 'VLX')
const BUSD_AS_TOKEN = new ERC20Token(ChainId.BSC, BUSD_AS_STRING, 18, 'BUSD')
const VLX_BUSD_LP = '0x804678fa97d91B974ec2af3c843270886528a9E6'

describe('getLpAddress', () => {
  it('returns correct LP address, both tokens are strings', () => {
    expect(getLpAddress(VLX_AS_STRING, BUSD_AS_STRING)).toBe(VLX_BUSD_LP)
  })
  it('returns correct LP address, token1 is string, token 2 is Token', () => {
    expect(getLpAddress(VLX_AS_STRING, BUSD_AS_TOKEN)).toBe(VLX_BUSD_LP)
  })
  it('returns correct LP address, both tokens are Token', () => {
    expect(getLpAddress(VLX_AS_TOKEN, BUSD_AS_TOKEN)).toBe(VLX_BUSD_LP)
  })
  it('returns null if any address is invalid', () => {
    expect(getLpAddress('123', '456')).toBe(null)
    expect(getLpAddress(undefined, undefined)).toBe(null)
    expect(getLpAddress(VLX_AS_STRING, undefined)).toBe(null)
    expect(getLpAddress(undefined, BUSD_AS_TOKEN)).toBe(null)
    expect(getLpAddress(VLX_AS_STRING, '456')).toBe(null)
    expect(getLpAddress('123', BUSD_AS_TOKEN)).toBe(null)
  })
})
