const _ = require("../index");
const expect = require("chai").expect;

const ab = {
  a: "1",
  b: "2"
};

const abc = {
  a: "1",
  b: "2",
  c: "3"
};

const ba = {
  b: "2",
  a: "1"
};

const cd = {
  c: "1",
  d: ["2", 3]
};

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};

const gh = {
  g: {
    id: 'g',
    position: 7
  },

  h: {
    id: "h",
    position: 8
  }
};

const gh2 = {
  g: "g",
  h: {
    id: "h",
    position: 8
  }
};

const long = {
  a: {
    b: {
      c: "c"
    }
  },
  d: {
    e: {
      f: 'f'
    }
  }
};

const long2 = {
  a: {
    b: {
      c: "c"
    }
  },
  d: {
    e: {
      f: 'h'
    }
  }
};

describe("testing eqObjects", () => {
  
  it("should be false if the objects don't have the same number of keys", () => {
    expect(_.eqObjects(ab, abc)).to.be.false;
  });
  it("should be true if the objects have the same values for the same keys", () => {
    expect(_.eqObjects(ab, ba)).to.be.true;
  });
  it("should work if the values are arrays", () => {
    expect(_.eqObjects(cd, cd2)).to.be.false;
  });
  it("should work even if one or more of the values are objects themselves", () => {
    expect(_.eqObjects(gh, gh2)).to.be.false;
  });
  it("should work on many nested objects being the same", () => {
    expect(_.eqObjects(long,long)).to.be.true;
  });
  it("should work on many nested objects being different", () => {
    expect(_.eqObjects(long,long2)).to.be.false;
  });
});

