const describe = (desc, fn) => {
  console.log(desc)
  fn()
};

describe('Outer', () => {

  describe('inner', () => {

  });

});

const it = (desc, fn) => describe(' ' + msg, fn)

const expect = (value) => { return };

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) => {
      cosole.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
});
