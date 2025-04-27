function calcular(){
 
   let soma = 0, acaoSocial, homenagem, leite, kit, equipe, suplemento, pontosKitSupl, sangue = 0 
   
   acaoSocial = document.getElementById("acaoSocial").value
   soma = soma + Number(acaoSocial)
   
   homenagem = document.getElementById("homenagem").value
   soma = soma + Number(homenagem)
 
   leite = document.getElementById("leite").value
   soma = soma + (2 * Number(leite))
   
   kit = Number(document.getElementById("kit").value)
   
   equipe = document.getElementById("equipe").value

   suplemento = document.getElementById("suplemento").value
   pontosKitSupl = 0 
   if (equipe == "Laranja"){
       
       if (kit >= 97 && suplemento >= 49) {
           pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
       }
       else if (kit >= 78){
           pontosKitSupl = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
       }
       else if (kit >= 49) {
           pontosKitSupl = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
       }
       else if (kit >= 19){
           pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
       }
       else {
           pontosKitSupl = (kit * 30)
       }
   }

   if (equipe == "Preto" ){

      if (kit >= 103 && suplemento >= 52 ){ 
        pontosKitSupl = 5000 + ((kit -103) * 30) + ((suplemento - 52 ) * 15)
      }

      else if (kit >=82 ) {
        pontosKitSupl = 4000 + ((kit - 82) * 30 ) + ((suplemento - 42 ) * 15)
      }

      else if (kit >=52 ) {
        pontosKitSupl = 2500 + ((kit - 52) * 30 ) + ((suplemento - 26 ) * 15)
      }

      else if (kit >=21 ) {
        pontosKitSupl = 1000 + ((kit - 21) * 30 ) + ((suplemento - 10 ) * 15)
      }
}
  
   if (equipe == "Roxo"){ 
    
    if (kit >= 102 && suplemento >= 51 ){ 
        pontosKitSupl = 5000 + ((kit -102) * 30) + ((suplemento - 51 ) * 15)
      }

    else if (kit >=82 ) {
        pontosKitSupl = 4000 + ((kit - 82) * 30 ) + ((suplemento - 41 ) * 15)
      }

      else if (kit >=51 ) {
        pontosKitSupl = 2500 + ((kit - 51) * 30 ) + ((suplemento - 26 ) * 15)
      }

      else if (kit >=20 ) {
        pontosKitSupl = 1000 + ((kit - 20) * 30 ) + ((suplemento - 10 ) * 15)
      }
   }

   if (equipe == "Verde"){ 
    
    if (kit >= 88 && suplemento >= 44 ){ 
        pontosKitSupl = 5000 + ((kit -88) * 30) + ((suplemento - 44 ) * 15)
      }

    else if (kit >=70 ) {
        pontosKitSupl = 4000 + ((kit - 70) * 30 ) + ((suplemento - 35 ) * 15)
      }

      else if (kit >=44 ) {
        pontosKitSupl = 2500 + ((kit - 44) * 30 ) + ((suplemento - 22 ) * 15)
      }

      else if (kit >=18 ) {
        pontosKitSupl = 1000 + ((kit - 18) * 30 ) + ((suplemento - 9 ) * 15)
      }
   }

   if (equipe == "Vermelho"){ 
    
    if (kit >= 93 && suplemento >= 47 ){ 
        pontosKitSupl = 5000 + ((kit -93) * 30) + ((suplemento - 47 ) * 15)
      }

    else if (kit >=74 ) {
        pontosKitSupl = 4000 + ((kit - 74) * 30 ) + ((suplemento - 38 ) * 15)
      }

      else if (kit >=47 ) {
        pontosKitSupl = 2500 + ((kit - 47) * 30 ) + ((suplemento - 24 ) * 15)
      }

      else if (kit >=18 ) {
        pontosKitSupl = 1000 + ((kit - 19) * 30 ) + ((suplemento - 9 ) * 15)
      }
   }
    sangue = Number(document.getElementById("sangue").value)

    if (equipe == "Laranja") {
        if(sangue >= 49){
            pontosSangue = 2500 + (sangue - 49) * 20
        }
    } 

    else if (equipe == "Preto") {
        if (sangue >= 52){
            pontosSangue = 2500 + (sangue - 52) * 20
     }
     else {
        pontosSangue = sangue * 20
     }
    } 

    else if (equipe == "Roxo") {
        if (sangue >= 51){
            pontosSangue = 2500 + (sangue - 51) * 20
     }
     else {
        pontosSangue = sangue * 20
     }
    } 

    else if (equipe == "Verde") {
        if (sangue >= 44){
            pontosSangue = 2500 + (sangue - 44) * 20
     }
     else {
        pontosSangue = sangue * 20
     }
    } 

    else if (equipe == "Preto") {
        if (sangue >= 47){
            pontosSangue = 2500 + (sangue - 47) * 20
     }
     else {
        pontosSangue = sangue * 20
     }
    } 


    
    
    
    
    


   alert(pontosKitSupl)
   soma = soma + pontosKitSupl
  
   // devolve o resultado para o HTML
   document.getElementById("soma").innerHTML = soma.toFixed(2)
}