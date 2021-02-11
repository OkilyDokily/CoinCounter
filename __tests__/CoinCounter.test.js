import CoinCounter from './../src/coin-counter.js';

describe('CoinCounter', () => {
  test('should return correct values for quarters etc', () => {
    const coinCounter = new CoinCounter();
    let builder = coinCounter.recursiveCounter(169);
    expect(builder["quarter"]).toEqual(6);
    expect(builder["dime"]).toEqual(1);
    expect(builder["nickel"]).toEqual(1);
    expect(builder["penny"]).toEqual(4);
})});