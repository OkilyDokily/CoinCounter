import CoinCounter from './../src/coin-counter.js';

describe('CoinCounter', () => {
  test('should return correct values for quarters etc', () => {
    const coinCounter = new CoinCounter();
    let builder = coinCounter.recursiveCounter(169);
    expect(builder["quarter"]).toEqual(6);
    expect(builder["dime"]).toEqual(1);
    expect(builder["nickel"]).toEqual(1);
    expect(builder["penny"]).toEqual(4);
  })

  test('should return correct values on closed functions', () => {
    const coinCounter = new CoinCounter();
    let builder = coinCounter.OuterFunction(169);
    expect(builder("quarter")).toEqual(6);
    expect(builder("dime")).toEqual(16);
    expect(builder("nickel")).toEqual(33);
    expect(builder("penny")).toEqual(169);
  })
});