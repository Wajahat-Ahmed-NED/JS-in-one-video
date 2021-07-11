let elem=document.getElementById('click')
console.log(elem)

let elem1=document.getElementsByClassName('container')
console.log(elem1)

elemClass[0].style.background='yellow'
elemClass[0].classList.add='bg-color'
elemClass[0].classList.add='text-success'


console.log(elem.innerHTML)
console.log(elem.innerText)


console.log(elemClass[0].innerText)
console.log(elemClass[0].innerText)

tn=document.getElementsByTagName('div')
console.log(tn)

var createdElement=document.createElement('p')
createdElement.innerText='This is the bvest para in the world'
tn[0].appendChild(createdElement)
// tn[0].appendChild(createElement)
var createdElement2=document.createElement('b')
createdElement2.innerText('This is the bold one')
tn[0].replaceChild(createdElement2,createdElement)//ye p tag ko replace krdega

tn[0].removeChild(createdElement2)//ye remove krdega tag ko

// selecting using query

sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll('.container')
console.log(sel)