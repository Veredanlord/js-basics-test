import { exo1, exo2, exo3 } from '../exercices/basics/basics.js';
import assert from 'assert';

describe('Lists', function () {
  describe('Exo 1', function () {
    
    it('With the input list : [1, 5, 6, -5, -2, 0, 19]', function () {
      assert.deepEqual(exo1([1, 5, 6, -5, -2, 0, 19]), ([1, 5, 6, 0, 19]));
    });
    
    it('With the input list : [1, 5, 6, 5, 2, 0, 19]', function () {
      assert.deepEqual(exo1([1, 5, 6, 5, 2, 0, 19]), ([1, 5, 6, 5, 2, 0, 19]));
    });

    it('With the input list : [-1,- 5, -6, -2, 0, -19]', function () {
      assert.deepEqual(exo1([-1, -5, -6, -2, 0, -19]), ([0]));
    });

    it('With the input list : [155, 684, 88, -512, -28, 0, 19, 582, -1000]', function () {
      assert.deepEqual(exo1([155, 684, 88, -512, -28, 0, 19, 582, -1000]), ([155, 684, 88, 0, 19, 582]));
    });
  });

  describe('Exo 2', function () {
    
    it('With the input list : [1, 1, 12, 4, 5, -5, 0, 12]', function () {
      assert.deepEqual(exo2([1, 1, 12, 4, 5, -5, 0, 12]), ([1, 12, 4, 5, -5, 0]));
    });
    
    it('With the input list : [1, 5, 5, 1, 0, 19, -19]', function () {
      assert.deepEqual(exo2([1, 5, 5, 1, 0, 19, -19]), ([1, 5, 0, 19, -19]));
    });

    it('With the input list : [-1,- 5, -6, -2, 0, -19]', function () {
      assert.deepEqual(exo2([-1, -5, -6, -2, 0, -19]), ([-1, -5, -6, -2, 0, -19]));
    });

    it('With the input list : [155, 684, 88, -512, -28, 0, 19, 582, -1000]', function () {
      assert.deepEqual(exo2([155, 684, 88, -512, -28, 0, 19, 582, -1000]), ([155, 684, 88, -512, -28, 0, 19, 582, -1000]));
    });
  });

  describe('Exo 3', function () {
    
    it('With the input list : [1, 12, 4, 5, -5, 0, 12]', function () {
      assert.deepEqual(exo3([1, 12, 4, 5, -5, 0, 12]), ([1, 12, 4, 5, 5, 0, 12]));
    });
    
    it('With the input list : [-1, -5, -4]', function () {
      assert.deepEqual(exo3([-1, -5, -4]), ([1, 5, 4]));
    });
  });
});
