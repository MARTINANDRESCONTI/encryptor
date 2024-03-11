function encrypt(){
  let text = document.getElementById('text-input').value 
  foo = document.getElementById('text-output')
   
  
  if(!text){
    return alert("Writte your text")
    }else {
      if(foo.hasChildNodes()){
      clean()
      }     
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
   paragraphtext.setAttribute('class', 'p')
   textOutputContainer.appendChild(paragraphtext) 
   
   }  
   document.getElementById('text-input').value = "";
};

function clean (){  
  textOut = document.getElementById('text-output')
  textOut.removeChild(textOut.firstElementChild)    
}

function arrowPaste (){
  textOut = document.querySelectorAll("p")[0].innerText  
  document.getElementById('text-input').value = textOut  
  clean()
}

function unencrypt(){
  let text = document.getElementById('text-input').value
  foo = document.getElementById('text-output')

  if(!text){
      return alert("Writte your text")
  }else {
      if(foo.hasChildNodes()){
      clean()
      }    
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
  textOut = document.getElementById('text-output')
  textOut.removeChild(textOut.firstElementChild)
  textOutputContainer = document.getElementById('text-output')
  textOutputContainer.style.display = 'none'
  logoOutput = document.getElementById('logo-output')
  logoOutput.style.display = 'flex'  
}


