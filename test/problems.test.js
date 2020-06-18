import * as exo1 from '../exercices/problems/exo1/exo1.js';
import * as exo2 from '../exercices/problems/exo2/exo2.js';
import assert from 'assert';
import exo1Data from '../exercices/problems/exo1/exo1Data.js';

describe('Problems', function () {
  describe('Exo 1', function () {
    it('Gets the "a1c" id car', function () {
      const expected = {
        id: "a1c",
        brand: "Peugeot",
        model: "208_bps",
        modified: true,
        roadLegal: true,
        km: 5000,
        color: "white"
      };
      assert.deepEqual(exo1.getCarById('a1c'), expected);
    });

    it('Gets the "a1c" and the "b2c" id cars', function () {
      const expected = [
        {
          id: "a1c",
          brand: "Peugeot",
          model: "208_bps",
          modified: true,
          roadLegal: true,
          km: 5000,
          color: "white"
        },
        {
          id: "b2c",
          brand: "Renault",
          model: "clio_4_rs",
          modified: false,
          roadLegal: true,
          km: 10000,
          color: "white"
        }
      ];
      assert.deepEqual(exo1.getCarByIds(['a1c', 'b2c']), expected);
    });

    it('Gets the "z88c" id car', function () {
      const expected = undefined;
      assert.deepEqual(exo1.getCarById('a1c'), expected);
    });

    it('Gets all cars', function () {
      const expected = exo1Data;
      assert.deepEqual(exo1.getAllCars(), expected);
    });

    it('Gets matching cars', function () {
      const expected = [
        {
          id: "a1c",
          brand: "Peugeot",
          model: "208_bps",
          modified: true,
          roadLegal: true,
          km: 5000,
          color: "white"
        },
        {
          id: "c3c",
          brand: "Peugeot",
          model: "208_bps",
          modified: false,
          roadLegal: true,
          km: 80000,
          color: "orange"
        }
      ];
      const params = {
        brand: 'Peugeot',
      }
      assert.deepEqual(exo1.getCarsThatMatchParams(params), expected);
    });

    it('Gets matching cars with multiple params', function () {
      const expected = [
        {
          id: "a1c",
          brand: "Peugeot",
          model: "208_bps",
          modified: true,
          roadLegal: true,
          km: 5000,
          color: "white"
        }
      ];
      const params = {
        brand: 'Peugeot',
        modified: true
      }
      assert.deepEqual(exo1.getCarsThatMatchParams(params), expected);
    });

    it('Gets matching cars with no match', function () {
      const expected = [];
      const params = {
        brand: 'Volvo',
      }
      assert.deepEqual(exo1.getCarsThatMatchParams(params), expected);
    });

    it('Updates the "a1c" car', function () {
      const carToUpdate = {
        id: "a1c",
        brand: "Peugeot",
        model: "208_bps",
        modified: true,
        roadLegal: false,
        km: 5200,
        color: "red"
      };
      assert.deepEqual(exo1.updateCar(carToUpdate), exo1Data.find(car => car.id === "a1c"));
    });

    it('Updates a non existing car', function () {
      const carToUpdate = {
        id: "8c2",
        brand: "Peugeot",
        model: "208_bps",
        modified: false,
        roadLegal: false,
        km: 50000,
        color: "metalic_grey"
      };
      assert.deepEqual(exo1.updateCar(carToUpdate), exo1Data.find(car => car.id === "8c2"));
    });

    it('Creates the "e5c" car', function () {
      const carToCreate = {
        id: "e5c",
        brand: "Ford",
        model: "mustang_boss",
        modified: false,
        roadLegal: true,
        km: 5200,
        color: "red"
      };
      assert.deepEqual(exo1.addCar(carToCreate), exo1Data.find(car => car.id === "e5c"));
    });

    it('Tries to create the "a1c" car but it already exists', function () {
      const carToCreate = {
        id: "a1c",
        brand: "Ford",
        model: "mustang_boss",
        modified: false,
        roadLegal: true,
        km: 5200,
        color: "red"
      };
      assert.deepEqual(exo1.addCar(carToCreate), undefined);
    });
    
    it('deletes the "a1c" car', function () {
      const expected = exo1Data.find(c => c.id === 'a1c')
      assert.deepEqual(exo1.deleteCarById('a1c'), expected);
    });

    it('Tries to delete the "h8c" car but it doesn\'t exists', function () {
      assert.deepEqual(exo1.deleteCarById('h8c'), undefined);
    });
  });

  describe('Exo 2', function () {
    it('Generates an id', function () {
      const id = exo2.idGenerator();
      assert.equal(id.length === 8, true);
      assert.equal(id.match('^(?=.*[a-zA-Z])(?=.*[0-9])') !== null, true);
    });
  });
});
