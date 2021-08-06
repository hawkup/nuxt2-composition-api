import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const title = await page.innerText('h2')
  expect(title).toBe('Welcome to your Nuxt Application')
})
