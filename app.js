function transposeTwoStrings(arr){
//your code here

//function to perform the transposing
var transposer = function(arr){
  var stringSequence = '';

  for(var i = 0; i < wordCount; i++){
      debugger;
      if(arr[0].charAt(i) != ''){
        stringSequence = stringSequence.concat(arr[0].charAt(i));
      }
      else{ stringSequence = stringSequence + " ";}
      stringSequence = stringSequence +" ";
      if(arr[1].charAt(i) != ''){
        stringSequence = stringSequence.concat(arr[1].charAt(i));
      }
      else{ stringSequence = stringSequence + " ";}

      if( i === wordCount -1){break}

      stringSequence = stringSequence + "\n";
  }
  return(stringSequence);
}

// test to see if strings are blank
if(arr[0] == '' && arr[1] == ''){return('')};

// test to see which word is longer

var wordCount = 0;

if(arr[0].length > arr[1]. length){ wordCount = arr[0].length}else{wordCount = arr[1].length}

console.log(transposer(arr));

}




transposeTwoStrings(['cat','']);
