
function principal(){
   var res=(Math.floor(Math.random()*10))+1
   var cadena=""+res
   var aux
   for (let i = 0; i < 10; i++) {
      var operacion = (Math.floor(Math.random()*4))+1
      switch (operacion) {
         case 1:
            aux=calculoValor()
            res=res+aux
            cadena=cadena+" +"+aux
            break;
         case 2:
            aux=calculoValor()
            res=res-aux
            cadena=cadena+" -"+aux
            break;
         case 3:
            aux=calculoValor()
            res=res*aux
            cadena=cadena+" x"+aux
            break;
         case 4:
            do {
               aux=calculoValor()
            } while (res%aux != 0);
            res=res/aux
            cadena=cadena+" /"+aux
            break;
         default:
            alert("Error en el switch")
            break;
      }
   }
   document.getElementById("ecuacion").value=cadena
   sleep(5000).then(() => {
      document.getElementById("resultado").value=res
  });
   //document.getElementById("resultado").value=res
}
function calculoValor(){
   return (Math.floor(Math.random()*10))+1
}
function sleep (time) {
   return new Promise((resolve) => setTimeout(resolve, time));
 }