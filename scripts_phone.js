let msg = ""
let phoneNo = ""


document.querySelector("#phones").addEventListener("change",function(){
    phoneNo = phones.value
    console.log("inumu")

})

document.querySelector("#code").addEventListener("submit",function(e){
    e.preventDefault()
    console.log("inum")
    phoneNoChecker()

})
function phoneNoChecker(){
    re = /(\+)?(8{2})?01[3-9][0-9]{8}$/;
    let answer = re.test(phoneNo)
    phones.value = ""
    console.log("inu")

    showMessage(answer)
}

function showMessage(answer){
    msg = document.querySelector('#phone-result')
    msg.style.display = "block"
    console.log("in")
    if(answer){
        msg.innerHTML = "Valid phone number"
    }
    else{
        msg.innerHTML = "Invalid phone number"
    }
    setTimeout(()=>{
        msg.style.display = 'none'
    },1000)
}