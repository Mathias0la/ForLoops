/*
const names = ["Tom", "Eric", "Jessica","Scott","Anna","Carl","Elisabeth","Benny"]


const greeter = (name) => `Hello ` + (name) + ", have a good day!";

//for loop

for(let i = 0; i < names.length; i++) {
    console.log(`Hello, ` + names[i]) 
} 
/*
for (let i = 0; i < names.length; i++) {
    console.log(greeter(names[i]))
}*/

//
/*
for(let name_value of names) {
    console.log(greeter(name_value));
}

const myString = "Hei på deg";
/*
for (let i = 0; i < myString.length; i++) {
    console.log(myString[i]);
}*/
//While loops
 /*   let x = 0;
    while (x < 10) {
        x++;
        console.log(greeter(names[x]))
    } */
      /*  Skriv en funksjon som heter wordCleaner, som tar i mot en string, og returnerer stringen med whitespace
        fjernet fra begynnelse og slutten, og gjør alt om til små bokstaver.
        
        Skriv en loop som looper gjennom wordArr og kjører wordCleaner på hvert ord, og pusher
        dette ordet inn i cleanedArr
        
        Tilslutt, kombiner cleanedArr sammen til en string, og konsoll logg denne.
        
        Konsoll loggen skal se sånn ut:
        
        "dette er tekst som må ryddes opp i"
    */
        const wordArr = [
            " deTTe",
            "er  ",
            " tekST ",
            "som",
            "må",
            "rydDES   ",
            "Opp",
            "   i   ",
          ];
          
          const cleanedArr = [];
          //Går gjennom hvert ord i wordArr og pusher det inni cleanedArr trim på hvert ord for å fjerne blank space og toLowerCase for å gjøre teksten til owerCase
         for(let word of wordArr) {
            cleanedArr.push(word.trim().toLowerCase())
          }
          let fullText = cleanedArr.join(" ")
          console.log(fullText);


          function wordCleanerArr(arr) {
            
            for (word of arr) {
                console.log(word);
                cleanedArr.push(word.trim().toLowerCase());

            }
            return cleanedArr;
          }

          console.log(wordCleanerArr(cleanedArr))

          let result = "";
          let i = 0;

          do {
            i = i +1;
            result = result + i;
          } while (i < -2);

          console.log(result);


          function findMax(arr){
            let maxNumber = arr[0];
            for (let i =1; i < arr.length; i++) {
                if(arr[i] > maxNumber) {
                    maxNumber = arr[i]
                }
            }
            return maxNumber
          }

          const numbers = [1,5,2,9,1,6,-2]
          console.log(findMax(numbers))


          //Math.floor

          console.log(Math.random())

          function makeNumberArray(size,maxNum) {
            let numArray = []
            for(let i = 0; i < size; i ++){
                numArray.push(Math.ceil(Math.random() * maxNum))
            }
            return numArray;
          }

        
          console.log(makeNumberArray(5,6))