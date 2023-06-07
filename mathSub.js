function sub(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Are you serious ????')
    }   

    if(Math.abs(a)===0){
        return - b 
    }

    if(Math.abs(a)===0){
        return a 
    }

    if(b===a){
        return 0 
    }

    // mock pour faire passer les tests 
    return a - b
}

module.exports = sub
