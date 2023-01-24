 function submitTemp(){
    const number = document.getElementById('number')
    const res = document.getElementById('res')
    const options1 = document.getElementsByName("options1")
    const options2 = document.getElementsByName("options2")
    
    if(number.value.length == 0){
        window.alert("Campo principal em branco!")
    }else{   
        if((options1[0].checked && options2[0].checked) || (options1[1].checked && options2[1].checked) || (options1[2].checked && options2[2].checked)){
            res.innerHTML = `Essa foi fácil, a resposta é ${number.value}`
        }
        else if(options1[0].checked && options2[1].checked){
            res.innerHTML = `A resposta é ${((number.value * (9/5)) + 32).toFixed(1)} Fahrenheit!`
        }
          else if(options1[0].checked && options2[2].checked){
            res.innerHTML = `A resposta é ${(Number.parseFloat(number.value) + 273.15).toFixed(2)} Kelvin!`
        }
         else if(options1[1].checked && options2[0].checked){
            res.innerHTML = `A resposta é ${((Number.parseFloat(number.value) - 32) * (5/9)).toFixed(2)} Celsius`
        }
        else if(options1[1].checked && options2[2].checked){
            res.innerHTML = `A resposta é ${((Number.parseFloat(number.value) - 32) * (5/9) + 273.15).toFixed(2)} Kelvin`
        }  
        else if(options1[2].checked && options2[0].checked){
            res.innerHTML = `A resposta é ${((Number.parseFloat(number.value) - 273.15)).toFixed(2)} Celsius`
        }
        else{
            res.innerHTML = `A resposta é ${((Number.parseFloat(number.value) - 273.15) * (9/5) + 32).toFixed(2)} Fahrenheit`
        }  
    }
 }
