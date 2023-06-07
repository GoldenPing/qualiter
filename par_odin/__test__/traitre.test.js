const traitre = require('../src/traitre')

describe('Normal issue a army of traitre',()=>{
    test('Normal issue a army of 1 traitre', ()=>{
        const arr = new Array(1).fill('traitre')
        expect(traitre(arr)).toBe(1);
    })
    test('Normal issue a army of 1 traitre + héro', ()=>{
        const arr = ['hero','traitre']
        expect(traitre(arr)).toBe(-2);
    })

    test('Normal issue a army of 1 traitre + héro + captain', ()=>{
        const arr = ['hero', 'hero','traitre']
        expect(traitre(arr)).toBe(-2);
    })
    test('Normal issue a army of 1 traitre + héro + captain', ()=>{
        const arr = ['hero', 'traitre','traitre']
        expect(traitre(arr)).toBe(-2);
    })
})