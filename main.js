document.addEventListener("DOMContentLoaded" , () => {
    
    let dynamicContent = document.querySelector("#dynamic-text");
    console.log(dynamicContent);
    const phrases = ["Student..." , "Developer..." , "Sport person..." ];
    let phraseIndex = 0
    let letterInx = 0 ;
    let typingSpeed = 150;
    let erasingSpeed = 100
    function printLetters(phrase){
        if(letterInx === phrase.length){ 
            clearLetters(phrase);
        }
        else if (letterInx <= phrase.length){
                dynamicContent.textContent += phrase.charAt(letterInx);
                letterInx += 1;
                setTimeout(function () {
                    console.log(1)
                    printLetters(phrase);
            } , 200)
        }
    }

    function clearLetters(phrase){
        if (letterInx == -1){
            phraseIndex = (phraseIndex + 1) % phrases.length;
            letterInx=0;
            printLetters(phrases[phraseIndex]);
        }
        else if (letterInx > -1) {
            dynamicContent.textContent = dynamicContent.textContent.substring(0 ,dynamicContent.textContent.length - 1);
            console.log(dynamicContent.textContent)
            letterInx -= 1;
            setTimeout(function () {
                clearLetters(phrase);
            } , 100)
        }
    }
    
    printLetters(phrases[phraseIndex]);
    

    


    //     for(let letterInx = phrase.length; letterInx>0 ; letterInx--){
    //         setTimeout( () => {
    //         dynamicContent.textContent -= phrase.charAt(letterInx);
    //         } , 300);
    //     }
    // }
    
    // for(let inx= 0 ; inx<5; inx++){
        //     letterInx = 0;
        //     printLetters(phrases[inx % phrases.length]);
        // }
        // })
        
        // const typeWriterEffect = (mySelfArray) => {
            //     let length = mySelfArray.length;
//     console.log(length);

// } ;
//  const phrases = ["Student..." , "Developer..." , "Sport person..." ];
//  let letterIndex = 0;

//  function printLetters (phrase) {
    //      if (letterIndex < phrase.length) {
        //          dynamicContent.textContent += phrase.charAt(letterIndex);
        //          letterIndex += 1;
        //          setTimeout(function () {
            //             printLetters(phrase)
            //          },300)
//     }
// }

// printLetters(phrases[0]);

})