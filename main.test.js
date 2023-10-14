// import { reverse } from './main';
// import whichMotorway from './index.js';

// describe('reverse function tests', () => {
//   it('[1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1]', () => {
//     const data = [1, 2, 3, 4, 5];

//     expect(reverse(data)).toEqual([5, 4, 3, 2, 1]);
//   });
//   it('[1, 2, 3, [1, 2]] -> [[1, 2], 3, 2, 1]', () => {
//     const data = [1, 2, 3, [1, 2]];

//     expect(reverse(data)).toEqual([[1, 2], 3, 2, 1]);
//   });
//   it('[1, 2, 3, { a: 1 }] -> [{ a: 1 }, 3, 2, 1]', () => {
//     const data = [1, 2, 3, { a: 1 }];

//     expect(reverse(data)).toEqual([{ a: 1 }, 3, 2, 1]);
//   });
//   it('should return a new reversed array', () => {
//     const data = [1, 2, 3, 4, 5];

//     const result1 = reverse(data);
//     expect(result1 === data).toBe(false);
//   });
// });

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
test('It should return an empty array', () => {
  // Arrange
  // Act 
    // call the function
  // Assert
    // check the result
  const resultOfMotorway = whichMotorway();
  expect(resultOfMotorway).toEqual([]);
});
});


