function times(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Are you serious ????')
    }
    if (a < 0 ^ b < 0) {
        return - times(Math.abs(a),Math.abs(b))
    }
    if (a === 0 ^ b === 0) {
        return 0
    }

    if(a === 1 || b === 1){
        return (a === 1) ? b : a
    }

    return a*b
}

module.exports = times 