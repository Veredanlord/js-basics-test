import exo1Data from './exo1Data.js';

/* JS basic problems */
/* Try to use ES6 since it simplifies a lot of code */

/* Exo 1 */
/* 
Problem:
  You have a list of objects in input (see the objects here : "./inputs/exo1.json") that will represent a database
  You will use the list called exo1Data already inported
  If there is no data, return undefined when searching a single object or an empty list when there are multiple possible results.
  You can create as many handy functions as you feel the need to
  You need to fill the following functions:
*/

export function getCarById(id) {
  return {};
}

export function getCarByIds(ids) { // ids is a list of id
  return [];
}

export function getAllCars() {
  return {};
}

/* params example
const exampleParams = {
  brand: 'Peugeot',
  model: '208_bps',
  modified: true,
  roadLegal: false,
  km: 200000,
  color: 'white'
}
/!\ BE CAREFUL : all fields could be undefined and the params object is mostly going to be like this:
cont exampleParams = {
  brand: 'Volvo',
  roadLegal: false
}
*/
export function getCarsThatMatchParams(params) {
  return [];
}

export function updateCar(carToUpdate) { // the car object is the same form as in the list
  return {}; // By convention, the function should return the updated object
}

export function addCar(carToAdd) { // the car object is the same form as in the list
  return {}; // By convention, the function should return the created object, or undefined if it already exists
}

export function deleteCarById(id) {
  return {}; // By convention, the function should return the deleted object or undefined if it doesn't exist
}
