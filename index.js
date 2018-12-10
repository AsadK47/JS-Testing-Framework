const describe = (desc, fn) => {
  console.log(desc)
  fn()
};

describe('Outer', () => {

  describe('inner', () => {

  });

});

const it = (desc, fn) => describe(' ' + msg, fn)

const expect = (value) => { return }
