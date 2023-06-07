const mage = require('../src/mage')

describe('Normal issue a army of mage',()=>{
    test('Normal issue a army of 1 mage', ()=>{
        const arr = new Array(1).fill('mage')
        expect(mage(arr)).toBe(0);
    })
    test('Normal issue a army of 1 mage + héro', ()=>{
        const arr = ['hero','mage']
        expect(mage(arr)).toBe(1);
    })

    test('Normal issue a army of 1 traitre + mage + mage', ()=>{
        const arr = ['mage', 'mage','traitre']
        expect(mage(arr)).toBe(1);
    })
})