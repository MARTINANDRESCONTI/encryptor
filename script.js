function encrypt(){
  let text = document.getElementById('text-input').value        
  
  if(!text){
     return alert("Writte your text!")
   } else {
      text = text.split('').map(e => { 
         // let replaceVocal = (vocal, replacer) => {
         //    if(e === vocal){
         //    return e.replace(vocal, replacer);
         //    } 
         // }

         // replaceVocal('e', 'enter')
         // replaceVocal('i', 'imes')
         // replaceVocal('a', 'ai')
         // replaceVocal('o', 'ober')
         // replaceVocal('u', 'ufat')
         // return e

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
  let findReplace = (encript, desencript) => {
      for(let i = 0; i < text.length; i++){
      text = text.replace(encript, desencript)}
  }

   if(!text){
      return alert("Writte some thin! Asshoul...")
   }else {
      findReplace('enter', 'e')
      findReplace('imes', 'i')
      findReplace('ai', 'a')
      findReplace('ober', 'o')
      findReplace('ufat', 'u')

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

function copy(){
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

 

 


//   text = document.getElementById('text-input')
  
//   text.innerText =textOutputContainer
//   text.appendChild(textOutputContainer)  
//   document.getElementById('text-output') = "";
  
};



