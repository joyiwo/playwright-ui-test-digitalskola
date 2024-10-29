// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '.env') })

module.exports = defineConfig({
  testDir: './tests',
  snapshotPathTemplate: 'tests/snapshots/{arg}{ext}',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  reporter: [
    ['list'],
    ['html']
  ],

  projects: [
    {
      name: 'desktop-smoke-test',
      use: { ...devices['Desktop Chrome'] },
      grep: /@smoke/
    },
    {
      name: 'mobile-device',
      use: { ...devices['Pixel 7'] },
      grep: /@mobile/,
      ignoreSnapshots: true
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
    
  ],

  use: {
    trace: 'on-first-retry',
  },

  // Merujuk ke file global-teardown.js
  globalTeardown: './global-teardown.js',
});
