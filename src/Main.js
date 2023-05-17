const Browser = require('');
const NavigationHandler = require('');

class Main {
  async init() {
    this._browser = new Browser();

    await this._initBrowser()
   
    console.log('- Iniciando...');

    this.navigation = new NavigationHandler(this.page);
  }

  async _initBrowser() {
    this.page = await this._browser.browserInit();
  }

  async goTo() {
    console.log('- Acessando o site...');

    await this.navigation.goTo();
  }
}

module.exports = Main;