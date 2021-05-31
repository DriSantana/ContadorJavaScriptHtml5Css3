

let num = document.querySelector('input#inputType')
let lista = document.querySelector('select#input2')
let res = document.querySelector('div#res')
let valores = []



function isNumber(number){
    if(Number(number)>= 1 && Number(number) <= 100){
        return true
    }else{
        return false
    }
}

function inList(number, list){
    if(list.indexOf(Number(number)) != -1){
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if(!inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text=`Valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML =''
       
        
    }else{
        window.alert('Valor already exist')
    }


num.value =''
num.focus()
}



function finalizar(){
    if (valores.length == 0){
        window.alert('Type some number before finished it')
    }else{
        let tot = valores.length
        let maior = valores[0] 
        let menor = valores[0]
        let sum = 0
        let media = 0

        for ( let pos in valores){
            sum += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = sum / tot
        res.innerHTML = ''
        res.innerHTML += `<p> The total is ${tot} numbers </p>`


        res.innerHTML += `<p> The higher number os the list is ${maior}</p>`
        res.innerHTML += `<p> The lower number of the list is ${menor}</p>`
        res.innerHTML += `<p> The total of the numbers is ${sum}</p>`
        res.innerHTML += ` The media of the numbers is ${media}`
    }


}


