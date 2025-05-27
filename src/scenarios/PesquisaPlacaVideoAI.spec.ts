import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Pesquisar por "placa de video" com ZeroStep AI', async ({ page }) => {
  await page.goto('https://www.pichau.com.br/');

  const aiArgs = { page, test }; // test vem do escopo do Playwright

  await ai('Digite "placa de video" na barra de pesquisa', aiArgs);
  await ai('Pressione Enter', aiArgs);

  await page.waitForLoadState('networkidle');

  // Valida que foi redirecionado para a busca
  await expect(page).toHaveURL(/placa-de-video|placa/i);
});
