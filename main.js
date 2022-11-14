// document.addEventListener("DOMContentLoaded" , () => {

    const dynamicContent = document.querySelector("#dynamic-text");
    const phrases = ["Student..." , "Developer..." , "Sport person..." ];
    let letterInx = 0 ;

    function printLetters(phrase) {
        console.log(phrase.length);
        if (letterInx < phrase.length){
            dynamicContent.textContent += phrase.charAt(letterInx);
            letterInx += 1;
            setTimeout(function () {
                printLetters(phrase);
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