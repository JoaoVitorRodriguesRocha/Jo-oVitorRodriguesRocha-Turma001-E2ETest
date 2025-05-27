import { test } from '@playwright/test';
import PromocaoPage from '../support/pages/PromocaoPage';

test.describe('Banner de promoção - Pichau', () => {
  let promocaoPage: PromocaoPage;

  test.beforeEach(async ({ page }) => {
    promocaoPage = new PromocaoPage(page);
    await promocaoPage.acessarHome();
  });

  test('Clicar no banner e validar redirecionamento para a promoção', async () => {
    await promocaoPage.clicarNoBanner();
    await promocaoPage.validarRedirecionamento();
  });
});
