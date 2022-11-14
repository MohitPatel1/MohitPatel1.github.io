document.addEventListener("DOMContentLoaded" , () => {
    
    const dynamicContent = document.querySelector("#dynamic-text");
    console.log(dynamicContent);
    const phrases = ["Student..." , "Developer..." , "Sport person..." ];
    let letterInx = 0 ;
    function printLetters(phrase){
        if (letterInx < phrase.length){
                dynamicContent.textContent += phrase.charAt(letterInx);
                letterInx += 1;
                setTimeout(function () {
                    console.log(1)
                    printLetters(phrase);
            } , 300)
        }
        if(letterInx==phrase.length){
            console.log(2)
            clearLetters(phrase)
        }
    }
    function clearLetters(phrase){
        if (letterInx > 0) {
            console.log(3)
            dynamicContent.textContent -= phrase.charAt(letterInx);
            letterInx -= 1;
            setTimeout(function () {
                console.log(4)
                clearLetters(phrase);
            } , 300)
        }
    }
    
    printLetters(phrases[0])
    

    


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