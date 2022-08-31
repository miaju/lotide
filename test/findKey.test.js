const _ = require("../index");
const expect = require("chai").expect;


const result1 = _.findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
const result2 = _.findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);

const result3 = _.findKey({
  paid: true,
  amount: 13.87,
  cardType: 'Visa'
}, x => x === false);


describe("testing findKey", () => {
  it("should return the key of whose value returns a truthy value from the callback function", () => {
    expect(result1).to.equal("noma");
  });
  it('should return undefined if callback always gives falsy', () => {
    expect(result3).to.be.undefined;
  });
  it("should return the first truthy value if more than one will return true", () => {
    expect(result2).to.equal("Akaleri");
  });
});

