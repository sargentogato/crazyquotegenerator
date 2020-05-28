const array = [
    {
    a: "your words control your life"
    },

    {
    a: "your progress, your results"
    },

    {
    a: "even your mental and physical health"
    },

    {
    a: "You cannot talk"
    },

    {
    a: "makes strong people weak"
    },

    {
    a: "blinds people who can sees"
    },

    {
    a: "saddens happy people"
    },

    {
    a: "turns brave people into cowards"
    },

    {
    a: "but I am so glad"
    },

    {
    a: "is not my final story"
    },

    {
    a: "I gave my life to Jesus "
    }
]

const array2 = [
    {
    b:"like a failure and"
    },

    {
    b:"you have to let go of memories"
    },

    {
    b:"expect to be successful"
    },

    {
    b:"that are holding "
    },

    {
    b:"the power of"
    },

    {
    b:"robs a genius of their brilliance"
    },

    {
    b:"causes rich people to think poorly"
    },

    {
    b:"limits the achievements"
    },

    {
    b:"in this journey of life"
    },

    {
    b:"even though we may"
    },

    {
    b:"times and places"
    }
]

const array3 = [
    {
    c:"you in order to make space"
    },

    {
    c:" waiting to enter yourlife"
    },

    {
    c:" you are blocking "
    },

    {
    c:"your future by sticking to the past"
    },

    {
    c:"in your present"
    }, 

    {
    c:"of that great person"
    }, 

    {
    c:"living inside us"
    }, 

    {
    c:"I didn't come from a succes"
    },

    {
    c:"paths cross with others"
    },

    {
    c:"that we may share our love"
    },

    {
    c:"compassion, observationsa"
    }
]

let numberArray = array.length
let numberArray2 = array2.length
let numberArray3 = array3.length

/******* Drawing Quotes*********/
function drawQuote (){
    let azarNumber_1 = Math.floor(Math.random() * numberArray)
    let azarNumber_2 = Math.floor(Math.random() * numberArray2)
    let azarNumber_3 = Math.floor(Math.random() * numberArray3)

    let textNumber_1 = azarNumber_1
    let textNumber_2 = azarNumber_2
    let textNumber_3 = azarNumber_3
  
    let textA = array[textNumber_1].a
    let textB = array2[textNumber_2].b
    let textC = array3[textNumber_3].c
   
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

/***********Cleaning Quotes********/
function cleanDivs(){
    document.getElementById('quote-text').innerHTML = '';
  } 

/*********************Trigger event to draw quotes*/
let boton = document.getElementById('click-text')

boton.addEventListener('click', ()=>{
  cleanDivs()
  for(let i= 1; i < 2; i++){
      drawQuote()
    }
})


