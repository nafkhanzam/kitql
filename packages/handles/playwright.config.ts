import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run preview',
    port: 4173,
  },
  testMatch: /(.+\.)?(e2e)\.[jt]s/,
  use: {
    baseURL: 'http://localhost:4173',
  },
}

export default config