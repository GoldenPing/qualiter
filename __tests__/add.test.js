const add = require('../mathAdd')

describe('add Test',()=>{
    describe('Good Input',()=>{
        test('Normal issue', ()=> {
            expect(add(1,2)).toBe(3);
        })
        test('Normal issue with retenue', ()=> {
            expect(add(2,9)).toBe(11);
        })
        test('Normal issue with double retenue', ()=> {
            expect(add(99,1)).toBe(100);
        })
        test('Normal issue equals value and opposite', ()=> {
            expect(add(-1,1)).toBe(0);
        })
        test('Normal issue equals value and opposite', ()=> {
            expect(add(1,-1)).toBe(0);
        })
        test('Normal issue full negative', ()=> {
            expect(add(-1,-1)).toBe(-2);
        })
        test('Normal issue not same length', ()=>{
            expect(add(1000,1)).toBe(1001);
        })
        test('Normal issue not same length', ()=>{
            expect(add(1,1000)).toBe(1001);
        })
        test('Normal issue 0 case', ()=>{
            expect(add(1,0)).toBe(1);
        })
        test('Normal issue 0 case 2 le retour', ()=>{
            expect(add(0,1)).toBe(1);
        })
    })

    describe('Bad input',()=>{
        test('a must be a number', ()=>{
            expect(()=> {add('yoloLesPatesaLo',0)}).toThrow(new Error("Are you serious ????"))
        })
        test('b must be a number', ()=>{
            expect(()=> {add(0,'drPepper')}).toThrow(new Error("Are you serious ????"))
        })
        test('a must be a positive number', ()=>{
            expect(()=> {add(-1,0)}).toThrow(new Error("proccess in cours plz wait"))
        })
        test('b must be a positive number', ()=>{
            expect(()=> {add(0,-1)}).toThrow(new Error("proccess in cours plz wait"))
        })
    })
    
})