import utils from "./app.utils";

describe('util class', () => {
  describe('add function', () => {
    it('adds two numbers', () => {
      expect(utils.add(1, 2)).toBe(3);
    });
  });
});
