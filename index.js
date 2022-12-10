const adv_count = document.querySelector("#advice-counter")
const bt = document.querySelector("#shuffle-advice")
let count = 0
const request = new XMLHttpRequest();
request.onload = function (){
    if (request.status == 200 && request.DONE){
        const resp = request.responseText
        const arr = resp.split('"')
        const qq = arr[arr.length-2]
        adv_count.innerHTML = ++count
        document.querySelector("#advice-text").innerHTML = '"'+qq+'"'
        setTimeout(() => {bt.disabled = false}, 2000)
    }
}
request.onerror = function(){
    bt.disabled = true
    document.querySelector("#advice-text").innerHTML = "A problem occurs ! Please kindly verify your connection and reload the page!"
}
function makeRequest(){
request.open('GET', 'https://api.adviceslip.com/advice', true)
request.send()
}

makeRequest();
 
bt.onclick = function (e){
    e.currentTarget.disabled = true
    makeRequest()
}
