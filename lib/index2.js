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

function stackTrace() {
  var err = new Error();
  return err.stack;
}

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
