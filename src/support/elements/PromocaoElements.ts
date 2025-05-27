import { Locator, Page } from '@playwright/test';

export default class PromocaoElements {
  constructor(private page: Page) {}

  getBannerPromocao(): Locator {
    return this.page.locator('a[title="Promoção Pichau"]');
  }
}
