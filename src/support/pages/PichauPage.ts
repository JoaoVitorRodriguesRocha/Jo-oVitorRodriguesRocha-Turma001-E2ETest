import { Page, expect } from '@playwright/test';
import PichauElements from '../elements/PichauElements';

export default class PichauPage {
  private elements: PichauElements;

  constructor(private page: Page) {
    this.elements = new PichauElements(page);
  }

  async toggleModoEscuro(): Promise<void> {
    await this.elements.getBotaoModoEscuro().click();
  }

  async validarModoEscuroAtivado(): Promise<void> {
    await expect(this.elements.getTagHtml()).toHaveClass(/dark/);
  }
}
