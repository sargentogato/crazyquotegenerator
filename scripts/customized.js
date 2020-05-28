/**************************************************** Función para recorrer los inputs */
function reviewRadio (){  
  const captureRadioBox = document.forms.radioBox.radios
  let typeQuote;
  if(captureRadioBox.length > 0){
      let i = 0
      while(i < captureRadioBox.length){
          if(captureRadioBox[i].checked){
              typeQuote = captureRadioBox[i].value
              break
          }
          i++
      }
  }
  return typeQuote
}

function reviewNumberRadio (){  
  const captureNumberRadio = document.forms.radioNumberBox.radios

  let numberQuote;
  if(captureNumberRadio.length > 0){
      let i = 0
      while(i < captureNumberRadio.length){
          if(captureNumberRadio[i].checked){
              numberQuote = captureNumberRadio[i].value
              break
          }
          i++
      }
  }
  return numberQuote
}

/************************************************************* Función para limpiar los divs  */

function cleanDivs() {
  document.getElementById("quote-text").innerHTML = "";
}

/************************************************************ Captura del boton */
const boton = document.getElementById('triggerQuote')

/************************************************************ Escucha del boton y ejecución */

boton.addEventListener('click', ()=>{
//Limpiando los divs (ejecutando función)
  cleanDivs()
  /* Arrays motivation y life */
const motivation = [
    [
    {
      q: "your words control your life"
    },
    {
      q: "your progress, your results"
    },
    {
      q: "even your mental and physical health. "
    },
    {
      q: "You cannot talk "
    },
    {
      q: "like a failure and"
    },
    {
      q: "expect to be successful"
    },
    {
      q:"robs a genius of their brilliance"
    },
    {
      q:"causes rich people to think poorly"
    },
    {
      q:"limits the achievements"
    }
    ],

    [ 
    {
      q: "you have to let go of memories "
    },
    {
      q: "that are holding "
    },
    {
      q:"you in order to make space "
    },
    {
      q:"waiting to enter yourlife"
    },
    {
      q:"you are blocking "
    },
    {
      q:"your future by sticking to the past "
    },
    {
      q:"of that great person"
    },
    {
      q:"living inside us"
    },
    {
      q:"I didn't come from a succes"
    },
    {
      q:"but I am so glad "
    }          
  ],

  [
    {
      q:"in your present"
    },
    {
      q:"the power of"
    },
    {
      q:"makes strong people weak"
    },
    {
      q:"blinds people who can sees"
    },

    {
      q:"saddens happy people"
    },
    {
      q:"turns brave people into cowards"
    },
    {
      q:"is not my final story "
    },
    {
      q:"I gave my life to Jesus "
    },
    {
      q:"God interrupted my story"
    },
    {
      q:"because when twelve years back"
    },
    {
      q:" life in service "
    }
  ]
] //end motivation array 


const life = [
    [ 
      {
      q: "It's funny how"
    },
    {
      q:"in this journey of life"
    },
    {
      q: "even though we may"
    },
    {
      q:"times and places"
    },
    {
      q:"paths cross with others "
    },
    {
      q:"that we may share our love"
    },
    {
      q:"compassion, observationsa"
    },
    {
      q:"This is a design "
    },
    {
      q:"I appreciate and cherish"
    },
    {
      q:"If you don't live a of a greater good"
    }
  ],

  [ 
    {
      q:"at least die a death in service "
    },
    {
      q:"And I fear that I won't"
    },
    {
      q:"get either a life or a death "
    },
    {
      q:"that means anyth"
    },
    {
      q:"you knowing"
    },
    {
      q:"You want to play house"
    },
    {
      q:"you got to have a job"
    },
    {
      q:"You want to play very nice"
    },
    {
      q:"very sweet house"
    },
    {
      q:"then you got to have a job"
    }
  ],

  [
    {
      q:"This is the way ninety-eight"
    },
    {
      q:"you don't like"
    },
    {
      q:"the people work things out"
    },
    {
      q:"you've got nothing to apologize for"
    },
    {
      q:"The saddest people"
    },
    {
      q:"I've ever met in life"
    },
    {
      q:"are the ones who don't care deeply"
    },
    {
      q:"because there's nothing "
    },
    {
      q:"satisfaction go hand in hand"
    },
    {
      q:"any happiness is only temporary"
    }
  ]
] //end life array

  /* Capture function*/
  let evaluationTypeQuote = reviewRadio()

  /*  Evaluation captured in evaluationTypeQuote */

  switch (evaluationTypeQuote) {
    case "motivation":
      var arr = motivation
      var numberArray =  arr[0].length
      var numberArray2 = arr[1].length
      var numberArray3 = arr[2].length  
      break;

    case "life":
      var arr = life
      var numberArray =  arr[0].length
      var numberArray2 = arr[1].length
      var numberArray3 = arr[2].length  
      break;

    default:
      break;
  }

  function drawQuote (){
      let azarNumber_1 = Math.floor(Math.random() * numberArray)
      let azarNumber_2 = Math.floor(Math.random() * numberArray2)
      let azarNumber_3 = Math.floor(Math.random() * numberArray3)

      let textNumber_1 = azarNumber_1
      let textNumber_2 = azarNumber_2
      let textNumber_3 = azarNumber_3
    
      const array = arr[0]
      const array2 = arr[1]
      const array3 = arr[2]

      let textA = array[textNumber_1].q
      let textB = array2[textNumber_2].q
      let textC = array3[textNumber_3].q
    
    const newElement = document.createElement('div')
    const newElement2 = document.createElement('div')
    const newElement3 = document.createElement('div')

    const contenedores = document.getElementById('quote-text')

    newElement.textContent = textA
    newElement2.textContent = textB
    newElement3.textContent = textC
   
  return contenedores.appendChild(newElement),
         contenedores.appendChild(newElement2),
         contenedores.appendChild(newElement3)
  }

function breakLine() {
  let newElement = document.createElement("BR");
  let separador = document.getElementById("quote-text");
  return separador.appendChild(newElement);
}

if (evaluationTypeQuote !== undefined) {
  if (reviewNumberRadio() !== undefined) {
    for (let i = 1; i <= reviewNumberRadio(); i++) {
      for (let j = 1; j < 2; j++) {
        drawQuote();
      }
      breakLine();
    }
  } else {
    alert(
      "You have to choose the number of quotes you would like to generate it"
    );
  }
} else {
  alert('You should have to select one choise between "Motivation" and "Life"');
}

}) //end addEventListener



