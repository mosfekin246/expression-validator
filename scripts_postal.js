let msg = ""
let postalCode = ""


document.querySelector("#postal").addEventListener("change",function(){
    postalCode = postal.value
})

document.querySelector("#code").addEventListener("submit",function(e){
    e.preventDefault()
    postalCodeChecker()

})
function postalCodeChecker(){
    re = /^[0-9]{4}$/;
    let answer = re.test(postalCode)
    postal.value = ""
    showMessage(answer)
}

function showMessage(answer){
    msg = document.querySelector('#postal-result')
    msg.style.display = "block"
    if(answer){
        msg.innerHTML = "Valid postal code"
    }
    else{
        msg.innerHTML = "Invalid postal code"
    }
    setTimeout(()=>{
        msg.style.display = 'none'
    },1000)
}
