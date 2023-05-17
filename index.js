const Main = require('');

(async () => {
  const bot = new Main();

  await bot.init();
  await bot.goTo();
})();