//dark
var dark=document.querySelector(".light .moon")
dark.addEventListener("click", function(e){
    document.body.classList.toggle("dark");
    e.target.classList.toggle("bx-sun");
})

// start
var aniEle=document.querySelectorAll(".scroll");
var move_top=document.querySelector(".move_icon");
function checkView(element){
    var rect=element.getClientRects()[0];
    var heightScr=window.innerHeight;  
    if(!(rect.bottom <0 || rect.top>heightScr)){
        element.classList.add("start");
    }
    else{
        element.classList.remove('start');
    }
}
function check(){
    aniEle.forEach(function(ele){
        checkView(ele);
    })
}
window.addEventListener("scroll", check);


//move top
document.addEventListener("scroll", function(){
    if (window.scrollY>400)
        move_top.classList.add("move_up");
    else
        move_top.classList.remove("move_up");
})
move_top.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})


// inform
var text="Chào mừng lễ kỉ niệm 60 năm xây dựng và phát triển Trường Đại Học Sư Phạm Kỹ Thuật Đà Nẵng (1962-2022)"
let chiso=0;
const writeText= () =>{
    document.querySelector(".inform").innerHTML=text.slice(0,chiso);
    chiso++; 
    var i=0
    if (chiso==text.length-1){
        delayText()
    }
    function delayText(){
        const a=setInterval(function(){
            chiso=text.length
            i++
            if (i==40){
                clearInterval(a);
                chiso=0
            }
        },80)
    }
}
setInterval(writeText,80)


// banner
var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// head scroll
window.onload = function() {
    const easeInCubic = function (t) { return t*t*t } 
    const scrollElems = document.getElementsByClassName('head_scroll');
    const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
        const runtime = stamp - start;
        let progress = runtime / duration;
        const ease = easeInCubic(progress);  
        progress = Math.min(progress, 1);
        const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
        window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
        if(runtime < duration){
          requestAnimationFrame((timestamp) => {
            const stamp = new Date().getTime();
            scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
          })
        }
      }
    
    for(let i=0; i<scrollElems.length; i++){
      const elem = scrollElems[i];
      elem.addEventListener('click',function(e) {
        e.preventDefault();
        const scrollElemId = e.target.href.split('#')[1];
        const scrollEndElem = document.getElementById(scrollElemId);
        const anim = requestAnimationFrame(() => {
          const stamp = new Date().getTime();
          const duration = 1200;
          const start = stamp;        
          const startScrollOffset = window.pageYOffset;
          const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;               
          scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
          })
        })
      }
    }
    