let msg = ""
let email = ""

document.querySelector("#mails").addEventListener("change",function(){
    email = mails.value
})

document.querySelector("#code").addEventListener("submit",function(e){
    e.preventDefault()
    emailChecker()

})
function emailChecker(){
    re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ; 
    let answer = re.test(email)
    mails.value = ""
    showMessage(answer)
}

function showMessage(answer){
    msg = document.querySelector('#email-result')
    msg.style.display = 'block'
    if(answer){
        msg.innerHTML = "Valid Email Address"
    }
    else{
        msg.innerHTML = "Invalid Email Address"
    }
    setTimeout(()=>{
        msg.style.display = 'none'
    },1000)
    
}
