// main function that either takes an input to return coreateing deck or returns a randomly shuffled deck.

function stackedDeck(cheatCode){

    var shuffledDeck = [];
    var initialShuffle = true;

    var deckFactory = function (){

      /* object cards represent a deck of standard playing cards. Suit is lower case
        (i.e. 1s represents '1 of spade'). Jokers are not included. */

      var cards = {
          1: "1s",
          2: "2s",
          3: "3s",
          4: "4s",
          5: "5s",
          6: "6s",
          7: "7s",
          8: "8s",
          9: "9s",
          10: "Js",
          11: "Qs",
          12: "Ks",
          13: "As",
          14: "1c",
          15: "2c",
          16: "3c",
          17: "4c",
          18: "5c",
          19: "6c",
          20: "7c",
          21: "8c",
          22: "9c",
          23: "Jc",
          24: "Qc",
          25: "Kc",
          26: "Ac",
          27: "1h",
          28: "2h",
          29: "3h",
          30: "4h",
          31: "5h",
          32: "6h",
          33: "7h",
          34: "8h",
          35: "9h",
          36: "Jh",
          37: "Qh",
          38: "Kh",
          39: "Ah",
          40: "1d",
          41: "2d",
          42: "3d",
          43: "4d",
          44: "5d",
          45: "6d",
          46: "7d",
          47: "8d",
          48: "9d",
          49: "Jd",
          50: "Qd",
          51: "Kd",
          52: "Ad"
        }

      /* function that'll take existing array and randomized its order.
       https://bost.ocks.org/mike/shuffle/ */

      var shuffleDeck = function(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);

          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }

        return array;
      }

        /* function that'll create an array of consisting of numbers
        1-52   */
      var deckMaker = function(){

        count = 52;
        deck =[];
        while(count){
          deck.push(count);
          count--;
        }

      return(deck);

      }

      // replace number with card values using the object 'cards'.
    var faceSwap = function(deck,faces){
      var playingCards = [];
      for(var i = 51; i >= 0; i--){
        playingCards.push(faces[deck[i]]);
      }

      return(playingCards);
      }

      //returns shuffled deck of cards

      return(faceSwap(shuffleDeck(deckMaker()),cards));

    }


    /* When the function is first initialized, it will create
      99 decks and store them in an array. These decks can be access
      by entering a value for 'cheatCode' when the function is called */

    if(initialShuffle === true){
      for(var j = 0; j < 99; j++){
        shuffledDeck.push(deckFactory());
      }
      initialShuffle = false;
    }

    // Checks to see if the user wants a cheaters deck or a uniqe shuffled deck.

    if(cheatCode != undefined){
      return(shuffledDeck[cheatCode]);
    }
    else{return(deckFactory());}
}

 console.log(stackedDeck(20));
