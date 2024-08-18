// design an application that checks jamb score of candidates
// so a new user, comes to the application, puts in his score for the 4 subjects 
// if the user inputs a score more than 100, you console log, score is higher than designated input
// after they input the score, you add it all up and check if its is above the cutoff mark, 300, if he doesn't pass the cutoff, we console log that you didn't pass the cutoff, else, we console log that he passes the cutoff

const engResultInput = document.querySelector ('.engResult')
console.log('engResultInput');

const matResultInput = document.querySelector ('.matResult')
console.log('matResultInput');

const cheResultInput = document.querySelector ('.cheResult')
console.log('cheResultInput');

const phyResultInput = document.querySelector ('.phyResult')
console.log('phyResultInput');

const buttonInput = document.querySelector ('.login')
console.log('buttonInput');

buttonInput.addEventListener ('click', function collectDetails
(){
    let engResultInputValue = Number(engResultInput.value)
    let matResultInputValue = Number(matResultInput.value)
    let cheResultInputValue = Number(cheResultInput.value)
    let phyResultInputValue = Number(phyResultInput.value)

    if (engResultInputValue > 400 || matResultInputValue > 400 || cheResultInputValue > 400 || phyResultInputValue > 400 ){
        console.log('Wrong Score')
    } else {
        console.log('Valid Score')
    }

      let totalScore = (engResultInputValue + matResultInputValue + cheResultInputValue + phyResultInputValue)

        if (totalScore === 400 || totalScore > 300){
            console.log('You Passed the Cutoff Mark')
            } else {
                console.log('You Failed to Pass the Cutoff Mark')
            }
})