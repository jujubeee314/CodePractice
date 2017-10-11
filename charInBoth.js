(function() {

    //Function checks the characters of two strings and returns a string containing only the characters found in both strings.
    const charInBoth = (a,b) => {

        let chars = [];

        //Sets the shortest word and longest word.
        let shortest = (a.length <= b.length) ? a : b;
        let longest = (a.length > b.length) ? a : b; 

        //Traverses both strings and compares the characters. If the character is in the string, then it adds it to the array. 
        for(let i = 0; i < shortest.length; i++) {
            for(let k = 0; k < longest.length; k++) {
                if(shortest[i] === longest[k]) chars.push(shortest[i]); 
            }
        }

        //Joins array of characters into a string and returns a string. 
        return chars.join();
    }

}());