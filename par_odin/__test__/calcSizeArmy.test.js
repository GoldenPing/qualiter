const calcSizeArmy = require('../src/calcSizeArmy')

describe('CalcSizeArmy test',()=>{
    
    describe('Good Input', () =>{
        test('Normal issue a army of 1 soldier', ()=>{
            expect(calcSizeArmy(new Array(1).fill('soldat'))).toBe(1);
        })

        test('Normal issue a army of 1 captain', ()=>{
            expect(calcSizeArmy(new Array(1).fill('captain'))).toBe(2);
        })

        test('Normal issue a army of 1 hero', ()=>{
            expect(calcSizeArmy(new Array(1).fill('hero'))).toBe(3);
        })

        test('Normal issue a army of 1 hero and 1 maudit', ()=>{
            const arr = ['hero', 'maudit']
            expect(calcSizeArmy(arr)).toBe(2);
        })

        test('Normal issue a army of 1 maudit', ()=>{
            const arr = new Array(1).fill('maudit')
            expect(calcSizeArmy(arr)).toBe(-1);
        })

        describe('Normal issue a army of traitre',()=>{
            test('Normal issue a army of 1 traitre', ()=>{
                const arr = new Array(1).fill('traitre')
                expect(calcSizeArmy(arr)).toBe(1);
            })
            test('Normal issue a army of 1 traitre + héro', ()=>{
                const arr = ['hero','traitre']
                expect(calcSizeArmy(arr)).toBe(1);
            })

            test('Normal issue a army of 1 traitre + héro + captain', ()=>{
                const arr = ['hero', 'captain','traitre']
                expect(calcSizeArmy(arr)).toBe(3);
            })

            test('Normal issue a army of 1 traitre + héro + traitre', ()=>{
                const arr = ['hero','traitre','traitre']
                expect(calcSizeArmy(arr)).toBe(2);
            })
        })

        describe('Normal issue a army of mage',()=>{
            test('Normal issue a army of 1 mage', ()=>{
                const arr = new Array(1).fill('mage')
                expect(calcSizeArmy(arr)).toBe(0);
            })
            test('Normal issue a army of 1 mage + héro', ()=>{
                const arr = ['hero','mage']
                expect(calcSizeArmy(arr)).toBe(4);
            })

            test('Normal issue a army of 1 mage + héro + mage', ()=>{
                const arr = ['hero','mage','mage']
                expect(calcSizeArmy(arr)).toBe(5);
            })
        })
    })

    describe('Bad Input',()=>{
        test('out of range',()=>{
            expect(()=> {calcSizeArmy(new Array(8))}).toThrow(new Error('Out of range, try again Billy !!!'))
        })
        test('out of range',()=>{
            expect(()=> {calcSizeArmy(new Array(7).fill(5))}).toThrow(new Error('he must be a Array of string, try again Billy !!!'))
        })
    })
})