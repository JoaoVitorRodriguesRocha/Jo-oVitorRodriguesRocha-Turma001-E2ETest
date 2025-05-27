import { test } from '@playwright/test';
import PichauPage from '../support/pages/PichauPage';

test.describe('Pichau - Teste do botão de modo escuro', () => {
  let pichauPage: PichauPage;

  test.beforeEach(async ({ page }) => {
    pichauPage = new PichauPage(page);
    await page.goto('https://www.pichau.com.br/');
  });

  test('Deve ativar o modo escuro ao clicar no botão', async () => {
    await pichauPage.toggleModoEscuro();
    await pichauPage.validarModoEscuroAtivado();
  });
});
