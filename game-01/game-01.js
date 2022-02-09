function firstCoincidenceSumAtArray(array, num){
    for(let j = 0; j < array.length; j++){
        for (let i = 1; i < array.length; i++) {
            if (array[j]+array[i]=== num) return [array[j], array[i]]
        }
    }
}