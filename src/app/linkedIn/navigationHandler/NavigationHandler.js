class NavigationHandler {
    constructor(page) {
      this.page = page;
      this.baseURL = 'https://www.linkedin.com/';
    }
  
    async goTo() {
      await this.page.goto(`${this.baseURL}`);
    }
  }
  
  module.exports = NavigationHandler;