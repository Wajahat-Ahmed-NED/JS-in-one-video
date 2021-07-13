// learning string

// var str='Wajahat Wajahat is a good boy good'
// console.log(str.indexOf('good'))
// console.log(str.lastIndexOf('good'))
// d=str.replace('Wajahat','ali')
// d=str.replaceAll('Wajahat','ali')
// console.log(d)

// let myDate=new Date();
// console.log(myDate.getTime())
// console.log(myDate)
// console.log(myDate.getFullYear())
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getMinutes())
// console.log(myDate.getHours())
// console.log(myDate.getMonth())


// DOM Manipulation
// let elem = document.getElementById('clicked');
// console.log(elem);
// // alert("hy")
// let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);//tag ke andar jo html ha wo aegi
// console.log(elem.innerText); //andar ka content aega

// console.log(elemClass[0].innerHTML);//tag ke andar ki sari html dega
// console.log(elemClass[0].innerText); //andar ka content dega


// tn = document.getElementsByTagName('div')
// console.log(tn)
// var createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);//aesa krne se div ke andar new tag chala jaega
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// tn[0].appendChild(createdElement)
// tn[0].removeChild(createdElement2);// ---> removes an element
 
// Selecting using Query
// sel = document.querySelector('.container')//pehla container uthaega
// console.log(sel)
// sel = document.querySelectorAll('.container')//sare container uthalega
// console.log(sel)

        //Events

function clicked(){
        alert('Your response is recorded successfully')
}
// window.onload= function (){
//         console.log('The document was loaded')
// }
// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')
// }

// window.onload=function(){
//         console.log("window was loaded")
// }
// firstContainer.addEventListener('click',function(){
//         console.log('Clicked on div')
// })
// firstContainer.addEventListener('mouseover',function(){
//         console.log('Mouse on div')
// })
// firstContainer.addEventListener('mouseout',function(){
//         console.log('Mouse out of on div')
// })
// firstContainer.addEventListener('mouseup',function(){
//         console.log('Mouse up  of on div')
// })
// firstContainer.addEventListener('mousedown',function(){
//         console.log('Mouse down  of on div')
// })

let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
document.addEventListener('mouseup',function(){
        document.querySelectorAll('.container')[1].innerHTML=prevHTML;
        console.log('Mouse up event occur')
})
document.addEventListener('mousedown',function(){
        document.querySelectorAll('.container')[1].innerHTML="<b>This is bold</b>"
        console.log('Mouse Down event occur')
})