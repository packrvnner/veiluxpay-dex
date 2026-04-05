import { describe, expect, it } from 'vitest'
import { detectBaseMiniAppHost } from '../runtime'

describe('detectBaseMiniAppHost', () => {
  it('returns false outside mini app', () => {
    expect(detectBaseMiniAppHost({ host: 'pancakeswap.finance', isInMiniApp: false })).toBe(false)
  })

  it('returns true on pancakeswap.finance inside mini app', () => {
    expect(detectBaseMiniAppHost({ host: 'pancakeswap.finance', isInMiniApp: true })).toBe(true)
  })

  it('returns true on launchpad host inside mini app', () => {
    expect(detectBaseMiniAppHost({ host: 'launchpad.pancakeswap.finance', isInMiniApp: true })).toBe(true)
  })

  it('normalizes hosts with ports', () => {
    expect(detectBaseMiniAppHost({ host: 'launchpad.pancakeswap.finance:3000', isInMiniApp: true })).toBe(true)
  })

  it('returns false for unsupported hosts even inside mini app', () => {
    expect(detectBaseMiniAppHost({ host: 'example.com', isInMiniApp: true })).toBe(false)
  })
})
