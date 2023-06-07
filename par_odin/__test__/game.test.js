const game = require('../src/game')

describe('CalcSizeArmy test',()=>{
    
    describe('Good Input',()=>{
        test.each([
            [
                ["hero","soldat","soldat","hero","traitre","mage","mage"],
                [
                    ["hero","soldat","soldat"],
                    ["hero","traitre","mage","mage"]
                ]
            ],
            [
                ["maudit","soldat","mage","maudit","mage","mage","mage"],
                [
                    ["maudit","mage","mage","mage"],
                    ["maudit","soldat","mage"]
                ]
            ],
            [
                ["hero","captain","captain","maudit","mage","mage","mage"],
                [
                    ["captain","captain","mage"],
                    ["hero","maudit","mage",'mage']
                ]
            ],
            [
                ["hero","captain","captain","maudit","mage","mage","mage"],
                [
                    ["captain","captain","mage"],
                    ["hero","maudit","mage",'mage']
                ]
            ],
          ])('.add(%i, %i)', (a, b ,expected) => {
            expect(a + b).toEqual(expect.arrayContening(expected));
          });
    })
    

    describe('Bad Input',()=>{
        test('out of range',()=>{
            expect(()=> {game(new Array(8))}).toThrow(new Error('Out of range, try again Billy !!!'))
        })
        test('out of range',()=>{
            expect(()=> {game(new Array(7).fill(5))}).toThrow(new Error('he must be a Array of string, try again Billy !!!'))
        })
    })
})