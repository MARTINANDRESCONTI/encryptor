function encrypt(){
  let text = document.getElementById('text-input').value        
  
  if(!text){
    return alert("Writte your text")
    }else {
      text = text.split('').map(e => { 
      if(e === 'e'){
      return e.replace('e', 'enter');
      }else if(e === 'i'){
      return e.replace('i', 'imes');
      }else if(e === 'a'){
      return e.replace('a', 'ai');
      }else if(e === 'o'){
      return e.replace('o', 'ober');
      }else if(e === 'u'){
      return e.replace('u', 'ufat');
      }else {
      return e}

      }).join('') 

   logoOutput = document.getElementById('logo-output')
   logoOutput.style.display = 'none'  

   textOutputContainer = document.getElementById('text-output')
   textOutputContainer.style.display = 'flex'

   paragraphtext = document.createElement("p")
   paragraphtext.innerText = text
   textOutputContainer.appendChild(paragraphtext) 
   
   }  
   document.getElementById('text-input').value = "";
};


function unencrypt(){
  let text = document.getElementById('text-input').value

  if(!text){
      return alert("Writte your text")
  }else {
      let textArray = text.split('')
      for(let i = 0; i < textArray.length; i++){
        if(textArray[i] == 'e'){
          textArray.splice(i+1, 4)
        }else if(textArray[i] == 'i'){
          textArray.splice(i+1, 3)
        }else if(textArray[i] == 'a'){
          textArray.splice(i+1, 1)
        }else if(textArray[i] == 'o'){
          textArray.splice(i+1, 3)
        }else if(textArray[i] == 'u'){
          textArray.splice(i+1, 3)
        }
      }
        text = textArray.join('')

   logoOutput = document.getElementById('logo-output')
   logoOutput.style.display = 'none'  

   textOutputContainer = document.getElementById('text-output')
   textOutputContainer.style.display = 'flex'

   paragraphtext = document.createElement("p")
   paragraphtext.innerText = text
   textOutputContainer.appendChild(paragraphtext)  
   }
   document.getElementById('text-input').value = "";
};

function copyeee(){
//   textOutputContainer = document.getElementsByTagName("p")[0].innerText
//   console.log (textOutputContainer)
//   document.getElementById('text-input').value = textOutputContainer;
//   document.getElementsByTagName("p")[0].innerHTML = ''

      let del = 0
  

      // textOutputContainer = document.querySelector("p").innerText
      textOutputContainer = document.getElementsByTagName("p")//[0].innerText
      console.log (textOutputContainer[textOutputContainer.length -1].innerText)
      // document.getElementById('text-input').value = textOutputContainer;
      // document.querySelector("p").innerText = ''
   
      document.getElementById('text-input').value = textOutputContainer[textOutputContainer.length -1].innerText;
 

      document.querySelectorAll("p")[0].innerText = ''
      del++

      // deleteinput = document.querySelector("p")
      //    document.querySelector("p")[0].innerText = ''
      
      console.log(textOutputContainer)

      // logoOutput = document.getElementById('logo-output')
      // logoOutput.style.display = 'flex' 

 

 


//   text = document.getElementById('text-input')
  
//   text.innerText =textOutputContainer
//   text.appendChild(textOutputContainer)  
//   document.getElementById('text-output') = "";
  
};
const copy = async () => {
   textOut = document.querySelectorAll("p")[0].innerText
    try {
      await navigator.clipboard.writeText(textOut);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }

function del(){
   textOutputContainer = document.getElementById('text-output')
   textOutputContainer.style.display = 'none'
   document.querySelectorAll("p")[0].innerText = ''
   logoOutput = document.getElementById('logo-output')
   logoOutput.style.display = 'flex'  

}


