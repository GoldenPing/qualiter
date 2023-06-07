var winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});
const sumSmallNumbers = require('./math')

function add(a, b) {
    logger.info('Etape 0 test cas easy')

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Are you serious ????')
    }
    if (Math.abs(a) === Math.abs(b) && a < 0 ^ b < 0) {
        return 0
    }
    if (a < 0 ^ b < 0) {
        throw new Error('proccess in cours plz wait')
    }
    if (a < 0 && b < 0) {
        return - add(-a, -b)
    }
    if(a === 0 || b === 0){
        return (a === 0) ? b : a
    }

    logger.info('Etape 1 Split to array')
    let arrayA = a.toString().split('').filter(e => e !== '-')
    let arrayB = b.toString().split('').filter(e => e !== '-')
    // logger.info(arrayA)
    // logger.info(arrayB)


    logger.info('Etape 2 fix size Array')
    const diffSizeArray = arrayA.length - arrayB.length
    if(diffSizeArray < 0 ){
        // logger.info(arrayA)     
        // logger.info(arrayB)     
        const arrayFixSize = Array(Math.abs(diffSizeArray)).fill("0")
        // logger.info(arrayFixSize)
        arrayA = [...arrayFixSize,...arrayA]
        // logger.info(arrayA)     
        // logger.info(arrayB)         
    }else if (diffSizeArray > 0){
        const arrayFixSize = Array(Math.abs(diffSizeArray)).fill("0")
        arrayB = [...arrayFixSize,...arrayB]

    }
    // logger.info(arrayA)     
    // logger.info(arrayB) 

    logger.info('Etape 3 Summing time')
    // for (let i = arrayA.length -1 ; i <=0; i -- ){
    //     logger.info(i)
    //     logger.info(sumSmallNumbers(arrayA[i],arrayB[i]))
    // }


    return a + b;
};
module.exports = add
