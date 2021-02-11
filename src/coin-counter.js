class CoinCounter {

  recursiveCounter(number, builder = {}) {
    if (number >= 25) {
      builder["quarter"] = (builder["quarter"] || 0) + 1;
      return this.recursiveCounter(number - 25, builder);
    }
    else if (number >= 10) {
      builder["dime"] = (builder["dime"] || 0) + 1;
      return this.recursiveCounter(number - 10, builder);
    }
    else if (number >= 5) {
      builder["nickel"] = (builder["nickel"] || 0) + 1;
      return this.recursiveCounter(number - 5, builder);
    }
    else if (number >= 1) {
      builder["penny"] = (builder["penny"] || 0) + 1;
      return this.recursiveCounter(number - 1, builder);
    }
    else if (number <= 0) {
      return builder;
    }
  }
}
export default CoinCounter;