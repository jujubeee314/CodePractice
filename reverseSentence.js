(function() {

    //Function takes in a sentence string and returns the sentence reversed.
    const reverseSentence = (sentence) => {

        let sentenceArray = sentence.split(' ');
        let reverseSe = [];

        //Starts at the end of the array strings and pushes the strings into a new string in reverse order.
        for(let i = sentenceArray.length-1; i >= 0; i--) {
            reverseSe.push(sentenceArray[i]);
        }

        //Joins the reverse string array into one string.
        return reverseSe.join(' ');

    };

}());