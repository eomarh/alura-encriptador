var contentFromTextarea = document.getElementById('txa-frase')
var contentToTextarea = document.getElementById('txa-frase-decrypt')
var undecrypt = document.getElementById('undecrypt-text')
var decrypt = document.getElementById('decrypt-text')

function btnEncriptar () {
   if(contentFromTextarea.value !== '') {
      //Display content
      undecrypt.style.display = 'none'
      decrypt.style.display = 'inline'
      
      //Resto de accion
      const encryptedText = encrypt(contentFromTextarea.value)
      contentToTextarea.value = encryptedText
      contentFromTextarea.value = ''
   }
   else{
      //Display content
      undecrypt.style.display = 'inline'
      decrypt.style.display = 'none'
   }
}

function btnDecrypt() {
   if(contentFromTextarea.value !== '') {
      //Display content
      undecrypt.style.display = 'none'
      decrypt.style.display = 'inline'

      //Resto de accion
      const decryptedText = decrypted(contentFromTextarea.value)
      contentToTextarea.value = decryptedText
      contentFromTextarea.value = ''
   }
   else{
      //Display content
      undecrypt.style.display = 'inline'
      decrypt.style.display = 'none'
   }
}

function encrypt (phrase) {
   let matrizReemplazo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']]
   phrase = phrase.toLowerCase()

   for(let i = 0; i < matrizReemplazo.length; i++){
      if(phrase.includes(matrizReemplazo[i][0])){
         phrase = phrase.replaceAll
         (matrizReemplazo[i][0],matrizReemplazo[i][1])
      }
   }
   return phrase
}

function decrypted (phrase) {
   let matrizReemplazo = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']]
   phrase = phrase.toLowerCase()

   for(let i = 0; i < matrizReemplazo.length; i++){
      if(phrase.includes(matrizReemplazo[i][1])){
         phrase = phrase.replaceAll
         (matrizReemplazo[i][1],matrizReemplazo[i][0])
      }
   }
   return phrase  
}

function copy(){
   contentToTextarea.select()
   navigator.clipboard.writeText(contentToTextarea.value)
   contentToTextarea.value = ''
   alert('Texto copiado')
}