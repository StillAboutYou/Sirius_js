function reverseString(string) {
    return string.split('').reverse().join('')
}

console.log(reverseString('string'))

function removeVowels(string) {
    const vowels = 'аеёиоуыэюяaeiouy'
    let result = ''
    string.split('').forEach(letter => {
        if (!vowels.includes(letter.toLowerCase())) {
            result += letter
        }
    })
    return result
}

console.log(removeVowels('Фомин Иван'))