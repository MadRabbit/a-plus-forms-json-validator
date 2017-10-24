import Validator from '../src';

describe('Validator', () => {
  const schema = {
    type: 'object',
    properties: {
      email: { type: 'string', format: 'email' },
      password: { type: 'string' }
    },
    required: ['email', 'password']
  };

  const validator = new Validator(schema);

  describe('#validate(data)', () => {
    it('returns undefined if there is no errors', () => {
      const goodData = { email: 'nikolay@rocks.com', password: 'Ba(k0n!' };
      expect(validator.errorsFor(goodData)).to.equal(null);
    });

    it('returns some errors if the data is borked', () => {
      const badData = { email: 'blah!' };
      expect(validator.errorsFor(badData)).to.eql({
        email: 'must be a valid email',
        password: 'is required'
      });
    });
  });
});
