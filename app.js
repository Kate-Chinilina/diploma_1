//первая кнопка
function scrollTo(element){
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior:'smooth'
    })
}
const buttonBig = document.querySelector('.button-big');
const mainDays= document.querySelector('.main_days');

buttonBig.addEventListener('click', ()=>{
    scrollTo(mainDays);
})

//расписание

const tabsBtn=document.querySelectorAll(".button_day");
const tabsItems=document.querySelectorAll(".tab-day");

tabsBtn. forEach(function(item){
item.addEventListener('click',function(){
    let currentBtn =item;
    let tabId= currentBtn.getAttribute("data-tab");
    // console.log(tabId);
    let currenTab= document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')){
        tabsBtn.forEach(function(item){
        item. classList.remove('active');
        })

        tabsItems.forEach(function(item){
        item. classList.remove('active');
        })

        currentBtn.classList.add('active');
        currenTab.classList.add('active');
    }
})
});
document.querySelector('.button_day').click();


//валидация формы
"use strict"; //строгий режим
document.addEventListener("DOMContentLoaded", ()=>{

    const form=document. querySelector("form");

    const validateElem = (elem) =>{
        if(elem.name === "username"){

        }
    }


    form.addEventListener ("submit",(even)=>{
        even.preventDefault();

        for(let elem of form.elements){
            if(elem.tagName !== "BUTTON"
            ){
                if(elem.value === ""){
                    elem.nextElementSibling. textContent= "Данное поле не заполнено";
                }else{
                    elem. nextElementSibling. textContent="";
                }
            }
        }
    });
});






