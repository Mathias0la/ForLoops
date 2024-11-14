
/*Task 1 - Finn det laveste nummeret i et array
Skriv en funksjon findMin som tar i mot en array med nummer og returnerer det laveste nummeret. Lag denne uten bruk av Math */

let numArray = [1, 6, 2, 8, -1]

function findMin(arr){
 let minNumber = arr[0]
 for (let i =1; i < arr.length; i++) {
    if(arr[i] < minNumber){
        minNumber = arr[i]
    }
 }
 return minNumber
}

console.log(findMin(numArray))
console.log(findMin([-100,-500,-300,-505,400,500]))

//findMin([1, 6, 2, 8, -1]) // skal returnere -1
// Prøv med flere test cases!


//Task 2 - Tell vokaler i en string
//Skriv en funksjon countVowels som tar i mot en string og returnerer antall vokaler i stringen



function countVowels(str){
    let vowels = ["a", "e", "i", "o", "u", "y", "æ", "ø", "å"]
    let vowelCount = 0;

    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(countVowels("Hei på deg"))// skal returnere 4
console.log(countVowels("This is super confusing")) //Returnerer 7

// Prøv med flere test cases!


function sumRange(start, end) {
    let sum = 0 ; //Variabel for å lagre sum
    for (let i = start; i <= end; i++) { 
        sum += i;
    }
    return sum;
}

console.log(sumRange(1,5)) // skal returnere 15
console.log(sumRange(1,10)) // 55
console.log(sumRange(1,20)) // 210

// Prøv med flere test cases!


//Task 4 -Tell hvor mange ganger en bokstav kommer opp i en string
//Skriv en funksjon countOccurences som tar i mot en string og en bokstav, og returner antall ganger som bokstaven er i stringen

function countOccurences(str, char){
    const stringArray =  str.toLowerCase().split("")
    let occurences = 0;
    for(let i = 0; i < stringArray.length; i++) {

        if(stringArray[i] === char){
            occurences++;
        }
    }
    return occurences


}

console.log(countOccurences("Hello World!", "l")) // skal returnere 3
console.log(countOccurences("Hello World!", "æ")) // skal returnere 0
console.log(countOccurences("Øystein har blitt strandet på en øde øy", "ø")) //Skal returnere 3
console.log(countOccurences("Martin måler meter med mais.", "m"))//Skal returnere 5
// Prøv med flere test cases!

/*Task 5 - Fjern duplicates fra en array
Skriv en funksjon removeDuplicates som tar i mot en array, og returner et nytt array med duplikatene fjernet

Tips: Bruk et array unique, og sjekk !unique.includes(verdi)*/

function removeDuplicates(arr) {
    let unique = [];

    for(let i = 0; i < arr.length; i++) {
        if(!unique.includes(arr[i])) { //Sjekker om verdien i arrayet allerede eksisterer, om den ikke gjør det pushes verdien inn i arrayet, derfor vil det ikke bli duplicates
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // skal returnere: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["Harald", "Håkon", "Harald", "Bjarne", "Grethe"])); // skal returnere: ["Harald", "Håkon", "Bjarne", "Grethe"]
console.log(removeDuplicates(["Mango","Mango","Mango","Mango","Mango","Pear","Apple","Pear","Orange"])) // Returnerer [ 'Mango', 'Pear', 'Apple', 'Orange' ]
// Prøv med flere test cases!