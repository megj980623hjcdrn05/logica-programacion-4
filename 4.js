function numerosfibonacci(n) {
    const numerosFiigo = nDeNumeros => {
        const figos = [0, 1]
        
        for (let i = 2; i <= nDeNumeros; i++) {
            figos[i] = figos[i-2] + figos[i-1]
        }
       return figos[nDeNumeros]
    }
    for (let i = 0; i < n; i++) {
    
        console.log(numerosFiigo(i));  
    }
}
let n = prompt("numero de numeros fibos que quieres obtener")
while(isNaN(n)) {
    n = prompt(`${n} no es un numero, inténtelo denuevo`);
}
numerosfibonacci(n)



    
   

