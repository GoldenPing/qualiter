const smallNumberSubstraction = require('../mathSmallSub')
const sub = require('../mathSub')


describe('add Test', () => {
    describe('Good Input', () => {
        test('Normal issue', () => {
            expect(smallNumberSubstraction(2, 1)).toBe(1);
        })

        test('Normal issue a = 0', () => {
            expect(sub(0, 1)).toBe(-1);
        })

        test('Normal issue b = 0', () => {
            expect(sub(1, 0)).toBe(1);
        })

        test('Normal issue a=b', () => {
            expect(sub(1, 1)).toBe(0);
        })

        test('Normal issue hard way', () => {
            expect(sub(43, 19)).toBe(24);
        })

        test('Normal issue twisted-hard way', () => {
            expect(sub(19, 43)).toBe(-24);
        })

    })
    describe('Bad input', () => {
        test('a must be a number', () => {
            expect(() => { sub('yoloLesPatesaLo', 0) }).toThrow(new Error("Are you serious ????"))
        })
        test('b must be a number', () => {
            expect(() => { sub(0, 'drPepper') }).toThrow(new Error("Are you serious ????"))
        })


        test('a must be higher than b', () => {
            expect(() => { smallNumberSubstraction(0, 2) }).toThrow(new Error("sorry you can't substract to get a negative result"))
        })

        test('result out range', () => {
            expect(() => { smallNumberSubstraction(24, 1) }).toThrow(new Error("you are cheating tring to substract big numbers here"))
        })
    })
})