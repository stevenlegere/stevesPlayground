const whichMotorway = require('./whichMotorway');

describe('whichMotorway function tests', () => {
  test('it should return and array of motorways', () => {
    // Arrange (Empty, as function doesn't require input)
    // Act
    const resultOfMotorway = whichMotorway();
    // Assert
    expect(resultOfMotorway).toEqual([
      {
          "motorway": "M1",
      },
      {
          "motorway": "M25",
      },
      {   
          "motorway": "M4",
      },
  ])
});

// test for empty array
xtest('It should return an empty array', () => {
  // Arrange
  // Act 
    // call the function
  // Assert
    // check the result
  const resultOfMotorway = whichMotorway();
  expect(resultOfMotorway).toEqual([]);
});
});

// Test array of objects in materialsForWardrobe.js

const materialsForWardrobe = require('./materialsForWardrobe');

describe('materialsForWardrobe function tests', () => {
  test('it should return an array of materials', () => {
    // Arrange
    // Act
    const resultOfMaterials = materialsForWardrobe();
    // Assert
    expect(resultOfMaterials).toEqual([
      {
          "material": "plywood",
          "price": 10,
          "quantity": 5,
      },
      {
          "material": "screws",
          "price": 15,
          "quantity": 200,
      },
      {
          "material": "oil",
          "price": 25,
          "quantity": 1,
      },
  ])
  })
});

// Test array of objects in woodForWardrobes.js
const woodForWardrobes = require('./materialsForWardrobe');

describe('woodForWardrobes function tests', () => {
  test('it should return an array of materials', () => {
    // Arrange
    // Act
    const materials1 = woodForWardrobes();
    // Assert
    expect(Array.isArray(materials1)).toBe(true);
    expect(materials1).toEqual([
      {
      "material": "birch plywood",
      "price": 15,
      "quantity": 50,
    },
    {
      "material": "hex screws",
      "price": 25,
      "quantity": 200,
    }
  ]);
  });
});


