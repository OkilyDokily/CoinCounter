class CoinCounter {

  recursiveCounter(amount, builder = {}) {
    let coinObject =
    {
      25: "quarter",
      5: "nickel",
      10: "dime",
      1: "penny"
    };
    let keys = [1, 5, 10, 25];//ordered list of coin values
    //get highest coin
    const reducer = function (accumulator, currentValue) {
      if (amount >= currentValue) {
        return currentValue;
      }
      else {
        return accumulator;
      }
    };

    let value = keys.reduce(reducer, 0);

    if (value == 0) return builder;
    let coin = coinObject[value];

    builder[coin] = (builder[coin] || 0) + 1;

    return this.recursiveCounter(amount - value, builder);
  }

  OuterFunction(amount) {
    return function (change) {
      return (function recursiveCounter2(amount) {
        let coinObject =
        {
          "quarter": 25,
          "nickel": 5,
          "dime": 10,
          "penny": 1
        };
        let value = coinObject[change];
        if (amount >= value) {
          return 1 + recursiveCounter2(amount - value);
        }
        return 0;
      })(amount);
    };
  }
}
export default CoinCounter;