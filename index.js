const describe = (desc, fn) => {
  console.log(desc)
  fn()
};

describe('Outer', () => {

  describe('inner', () => {

  });

});
