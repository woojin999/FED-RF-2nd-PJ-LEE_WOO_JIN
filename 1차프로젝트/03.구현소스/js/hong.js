let openHam = document.querySelector('.open-ham');
let closeHam = document.querySelector('.close-ham');
let hamMenu = document.querySelector('.ham-menu');

openHam.addEventListener('click',function () {
    hamMenu.classList.add('on');
});

closeHam.addEventListener('click', function () {
    hamMenu.classList.remove('on');
});

let evtbtn = document.querySelectorAll('.evtbtn');
// let eventbtn2 = document.querySelector('.eventbtn2');
let eventslide =document.getElementById('eventslide');
console.log(eventslide);

let prot = false;

for (let x of evtbtn) {
    x.onclick = evtGoSlide;
  }

function evtGoSlide(){

    // 광클 금지
    if (prot) return; 
    prot = true; 
    setTimeout(() => {
      prot = false; 
    }, 500);

    let isEventRbtn = this.classList.contains('eventbtn2')
    console.log(isEventRbtn);
    if (isEventRbtn) {
        
        
        eventslide.style.left ="-33.333%";
        eventslide.style.transition = ".5s ease-in-out";
        
        setTimeout(() => {
            eventslide.appendChild(eventslide.querySelectorAll("li")[0]);
            eventslide.style.left = "0";
            eventslide.style.transition = "none";
        }, 600);
    }else{
        let list = eventslide.querySelectorAll("li");
        eventslide.insertBefore(list[list.length - 1], list[0]);
        eventslide.style.left ="-33.333%";
        eventslide.style.transition = "none";

        setTimeout(() => {
            eventslide.style.left = "0";
            eventslide.style.transition = ".5s ease-in-out";
        }, 500);
    }
}
