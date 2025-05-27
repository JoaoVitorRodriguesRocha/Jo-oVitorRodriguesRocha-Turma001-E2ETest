import { Locator, Page } from '@playwright/test';

export default class PichauElements {
  constructor(private page: Page) {}

  getBotaoModoEscuro(): Locator {
    // Seleciona o ícone do botão de modo escuro com base no data-testid do SVG
    return this.page.locator('svg[data-testid="Brightness7Icon"]');
  }

  getTagHtml(): Locator {
    return this.page.locator('html');
  }
}
