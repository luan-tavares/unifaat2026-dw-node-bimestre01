function map(array, callback) {
    if (!Array.isArray(array) || typeof callback !== 'function') {
        throw new Error('Argumentos inválidos');
    }
    const result = [];
    for (const item of array) {
        result.push(callback(item));
    }
    return result;
}

// Example usage
const numeros = [1, 2, 3, 4];
const squared = map(numeros, (item) => {
    return item ** 2;
});
console.log(squared);