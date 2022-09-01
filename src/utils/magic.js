import { Magic } from 'magic-sdk'
// import { OAuthExtension } from '@magic-ext/oauth'

// Create client-side Magic instance
const createMagic = (key) => {
  return typeof window != 'undefined' && new Magic(key)
}

export const magic = createMagic(
  process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY,
  { testMode: process.env.NODE_ENV === 'development' ? true : false }
)
