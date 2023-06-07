const times = require('../mathTime')

describe('times Test',()=>{
    describe('Good Input',()=>{
        test('Normal issue', ()=> {
            expect(times(1,2)).toBe(2);
        })
        test('Normal issue with one negative', ()=> {
            expect(times(-2,1)).toBe(-2);
        })
        test('Normal issue with one negative', ()=> {
            expect(times(1,-2)).toBe(-2);
        })

        test('Normal issue with one 10 multiply', ()=> {
            expect(times(10,2)).toBe(20);
        })
     
        test('Normal issue with one 10 multiply', ()=> {
            expect(times(2,10)).toBe(20);
        })

        test('Normal issue with one 0', ()=> {
            expect(times(0,2)).toBe(0);
        })
     
        test('Normal issue with one 0', ()=> {
            expect(times(2,0)).toBe(0);
        })
    })

    describe('Bad input',()=>{
        test('a must be a number', ()=>{
            expect(()=> {times('yoloLesPatesaLo',0)}).toThrow(new Error("Are you serious ????"))
        })
        test('b must be a number', ()=>{
            expect(()=> {times(0,'drPepper')}).toThrow(new Error("Are you serious ????"))
        })
    })
    
})
