const calculateSum = ( numbersArr, targetNumber) => {
    if( typeof numbersArr !== 'string' ) console.warn('Please write a list of numbers separated by dots. for instance: 1,2...');
    if( typeof targetNumber !== 'number') console.warn('Please write a number');

    const data = _transformData(numbersArr);
    const pairs = _getPairsSum( targetNumber, data );

    pairs.map( item => console.log(`+ ${item['item']}, ${item['pair']}`) );

}

const _transformData = ( numbersArr ) => numbersArr.split(',').map(item=>parseInt(item));

const _getPairsSum = ( targetNumber, data ) => {
    let arrCombinations=[];
    
    for( const item in data){
        const pair = targetNumber - data[item];
        if( data.includes(pair) ){
            arrCombinations.push({ 'item': data[item],'pair' : pair });
            const index = data.indexOf(pair);
            data.splice(index, 1);
        }
    }
    return arrCombinations;
}

calculateSum('1,9,5,0,20,-4,12,16,7', 12);