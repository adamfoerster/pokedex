import { app } from './app.po';

it('should display welcome message', async () => {
  await app.getBrowserPage();
  await app.sleep(2000);
  await app.screenshot('pokedex.png');
  await app.waitForSelector('.mat-toolbar span');
  const title = await app.getText('.mat-toolbar span');
  expect(title).toEqual('Pokedex');
});
