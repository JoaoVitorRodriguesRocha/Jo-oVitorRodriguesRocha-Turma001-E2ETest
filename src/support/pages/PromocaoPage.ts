import { expect, Page } from '@playwright/test';
import PromocaoElements from '../elements/PromocaoElements';

export default class PromocaoPage {
  private elements: PromocaoElements;

  constructor(private page: Page) {
    this.elements = new PromocaoElements(page);
  }

  async acessarHome(): Promise<void> {
    await this.page.goto('https://www.pichau.com.br/');
  }

  async clicarNoBanner(): Promise<void> {
    await this.elements.getBannerPromocao().click();
    await this.page.waitForLoadState('networkidle');
  }

  async validarRedirecionamento(): Promise<void> {
    await expect(this.page).toHaveURL(/\/promocao\/nerd/);
  }
}
