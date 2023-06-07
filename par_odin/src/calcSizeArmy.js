const  mage  = require('./mage')
const traitre = require('./traitre')

/**
 * test each 
 * expect.arrayConntaining
 */
const DICE_TYPE = {
    'hero' : 3, 
    'captain' : 2, 
    'soldat' : 1, 
    'traitre' : (army) => { return traitre(army)}, 
    'mage' :(army) => { return mage(army)}, 
    'maudit' : -1, 
}


function calcSizeArmy(army) {
    if(army.length > 7){
        throw new Error('Out of range, try again Billy !!!')
    }
    let powaaaa = 0
    const armyActual = army
    army.map((pawns) => {
        if(typeof pawns  !== 'string'){
            throw new Error('he must be a Array of string, try again Billy !!!')
        }
        let modifier = 0
        if(pawns === 'traitre'){
            modifier = 1 
        }else if (pawns === 'mage'){
           modifier = DICE_TYPE.mage(armyActual)
        }else{
            modifier = DICE_TYPE[pawns]
        }
        powaaaa += modifier
    })
    
    const nbHero =  army.filter((value)=>{return value === 'hero'}).length
    const traitre =  army.filter((value)=>{return value === 'traitre'}).length

    if( nbHero > 0 && traitre > 0){
       powaaaa -= Math.min(traitre,nbHero) * 3 ; 
    }
    return powaaaa
}

module.exports = calcSizeArmy    
