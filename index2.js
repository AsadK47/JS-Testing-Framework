var describe = function describe(desc, fn) {
  console.log(desc);
  return fn();
};

describe('Outer', function() {

  describe('inner', function() {


  });

});

var it = function it(msg, fn) {
  return describe(' ' + msg, fn);
};

// const expect = (value) => { return };

var matchers = function matchers(exp) {
  return {
    toBe: function toBe(assertion) {
      if (exp === assertion) {
        console.log('pass');
        return true;
      } else {
        console.log('fail');
        return false;
      }
    }
  };
};

var expect = function expect(exp) {
  return matchers(exp);
}

function findAreaOfSquare(a) {
  return a * a;
}

describe('findAreaOfSquare', function() {

  it('can find the area of a square', function() {
    var result = findAreaOfSquare(10);
    expect(result).toBe(100);
  });

});
