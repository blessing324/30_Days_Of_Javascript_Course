let variable = '30 Days Of JavaScript'
console.log(variable)
// to get character length of 'variable'
console.log(variable.length)
// uppercase and lowercase functions
console.log(variable.toUpperCase())
console.log(variable.toLowerCase())
// slicing out the first word in 'variable' using the substr and substring functions
console.log(variable.substr(0,2))
console.log(variable.substring(0,2))
console.log(variable.substring(3,21))
//checking the character number of 't'
console.log(variable[20])
//checking for 'Script' in 'variable'
console.log(variable.includes('Script'))
// using the split() function to split strings
console.log(variable.split(' '))
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))
// checking out the positions of various characters
console.log(variable.charAt(15))
console.log(variable.charCodeAt('J'))
console.log(variable.indexOf('a'))
console.log(variable.lastIndexOf('a'))
// checking out the positions of words in sentence 'variable'
let sentence = 'You cannot end a sentence with because because because is a conjuction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
//trimming out the whitespace in the sentence variable
console.log(variable.trim())
console.log(variable.startsWith(3))
console.log(variable.endsWith('t'))
//locatig all the a's in sentence
console.log(variable.match('a'))
let firstPart = '30 Days Of'
console.log(firstPart.concat('JavaScript'))
console.log(variable.repeat(2))
