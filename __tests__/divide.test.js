describe('divide Test',()=>{

    describe('Good input', ()=>{
        test('Normal Issue', ()=>{
            expect(times(10,5)).toBe({
                quotien : 2,
                reste: 0
            });
        })
        
        test('Normal Issue same number', ()=>{
            expect(times(10,10)).toBe({
                quotien : 1,
                reste: 0
            });
        })
        
        test('Normal Issue with a 1', ()=>{
            expect(times(10,1)).toBe({
                quotien : 10,
                reste: 0
            });
        })
        
        test('Normal Issue with a 1', ()=>{
            expect(times(1,10)).toBe({
                quotien : 0,
                reste: 10
            });
        })

        test('Normal Issue with a = 0', ()=>{
            expect(times(0,10)).toBe({
                quotien : 0,
                reste: 10
            });
        })
        
    })

    describe('Bad input',()=>{
        test('a must be a number', ()=>{
            expect(()=> {divide('yoloLesPatesaLo',5)}).toThrow(new Error("Are you serious ????"))
        })
        test('b must be a number', ()=>{
            expect(()=> {divide(0,'drPepper')}).toThrow(new Error("Are you serious ????"))
        })
        test('b mustn t be a 0',() =>{
            expect(()=> {divide(5,0)}).toThrow(new Error("Are you serious ????"))
        })
    })
    
})
