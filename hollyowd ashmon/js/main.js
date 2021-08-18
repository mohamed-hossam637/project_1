"use strict" ;
window.addEventListener("load" , function(){
    let loadingBar = document.querySelector(".loadingBar") ;
    loadingBar.style.display = "none" ;
})
// create slide image
let images = ["erik-mclean-nEyoVzqqZvY-unsplash" ,
                "lidya-nada-MD_ha01Bk7c-unsplash" ,
                "thomas-ae-295NLwGdrKM-unsplash",
                "vitor-pinto-azuT-J9e5sA-unsplash"] ;
let backgroundElement = document.querySelector(".main-section") ;

// create randome image function
setInterval(function randomImage(){
    let randomNum = Math.floor(Math.random() * images.length) ;
    backgroundElement.style.backgroundImage = `url(../images/background/${images[randomNum]}.jpg)` ;
} , 10000);


// show mobile links
let bars = document.querySelector(".mobile-menu-icon") ,
    mobileMenu = document.querySelector(".mobile-menu") ;
bars.addEventListener("click" , function (){
    mobileMenu.classList.toggle("open") ;
})

// book now 
let bookNowBtn = document.querySelectorAll(".links .book-now") ,
    bookNowBox = document.querySelector(".book-now-section") ;
bookNowBtn.forEach((ele) =>{
    ele.addEventListener("click" , function(){
        bookNowBox.classList.add("open-now")
    })
})
let closeBtn = document.querySelector(".close-btn") ;
closeBtn.addEventListener("click" , function(){
    bookNowBox.classList.remove("open-now")
})
let photographerStatus = document.querySelectorAll(".Photographer-status li input")  ,
    exPhotographer = document.querySelector(".extirnal-photographer") ;
    photographerStatus.forEach((ele)=>{
        ele.addEventListener("click" , function(){
            if(ele.id == "no"){
                exPhotographer.style.display = "block" ;
            }else{
                exPhotographer.style.display = "none"
            }
        })
    })


window.addEventListener("scroll" , function(){
    let header = document.querySelector(".main-section div");
    let pcLinks = document.getElementById("pcLinks") ;
    if(window.scrollY >= 300){
        header.classList.add("fixed-header") ;
        pcLinks.classList.add("fixed-btn");
    }else{
        header.classList.remove("fixed-header") ;
        pcLinks.classList.remove("fixed-btn");
    }
})

// image slide

let img = ["inseid1.jpg" ,
        "inseid2.jpg" , 
        "inseid3.jpg" , 
        "inseid4.jpg" ,
        "background1.jpg" ,
        "background2.jpg" ,
        "background3.jpg" ,
        "background4.jpg"] , 
    nextBtn = document.querySelector(".next") ,
    prevBtn = document.querySelector(".prev") ,
    imageSlide = document.querySelector(".image-container img") ,
    slideNumber = document.querySelector(".slide-number") ,
    num = 0 ;
    checker();

nextBtn.onclick = function(){
    if(num >= img.length - 1){
        num = img.length - 1 ;
    }else{
        num++ ;
        checker()
    }
 }

prevBtn.onclick = function(){
    if(num == 0){
        num = 0 ;
    }else{
        num--;
        checker()
    }
}

function checker(){
    imageSlide.src = `../images/inseid/${img[num]}` ;
    slideNumber.textContent = `${num+1} / ${img.length}`
}

// check personal number input
let input = document.getElementById("personal-number") ,
    err = document.querySelector(".number_err") ;
input.addEventListener("input" , function(){
    if(this.value > 5){
        err.style.display = "block" ;
    }else{
        err.style.display = "none" ;
    }
})