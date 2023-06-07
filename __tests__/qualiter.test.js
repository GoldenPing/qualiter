const sumSmallNumbers = require('../math')

describe('sumSmallNumber Test', () => {
    test('Normal issue', () => {
        expect(sumSmallNumbers(1, 2)).toBe(3);
    })
    describe('Limit input fonction', ()=>{
        test('Number < 0', ()=>{
            expect(() => {sumSmallNumbers(-1,9)}).toThrow(new Error("Your are cheating !"))
        })
        test('Number > 9', ()=>{
            expect(() => {sumSmallNumbers(0,10)}).toThrow(new Error("Your are cheating !"))
        })
    })
  })
