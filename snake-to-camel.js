function snakeToCamel(string) {
    result = []
    for (let i=0; i<string.length;i++){
        if (string[i] == '_'){
            result.push(string[i+1].toUpperCase())
            i++
        } else {
            result.push(string[i])
        }
    }
    return result.join('')
}

