/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Fresher","FrontEnd Developer","Programmer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 1000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 1000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

const hireBtn=document.getElementById("hire");

hireBtn.addEventListener("click",function(){
  document.getElementById("contact").scrollIntoView({ behavior: 'smooth'});
});

const VRes=document.getElementById("view-res");

VRes.addEventListener("click", function() {
  window.open('https://drive.google.com/file/d/1U1uszJIM_n4K1Ei16pIAeApq0SyA6-mM/view?usp=drive_link', '_blank');
});

const insta=document.getElementById("ins-icon");

insta.addEventListener("click",()=>{
  window.open('https://www.instagram.com/_anand_09___/','_blank');
});

const instaf=document.getElementById("ins-icon2");

instaf.addEventListener("click",()=>{
  window.open('https://www.instagram.com/_anand_09___/','_blank');
});

const linIcon=document.getElementById("lin-icon");

linIcon.addEventListener("click",()=>{
  window.open('https://www.linkedin.com/feed/','_blank');
});


const linIconf=document.getElementById("lin-icon2");

linIconf.addEventListener("click",()=>{
  window.open('https://www.linkedin.com/feed/','_blank');
});

const GitIcon=document.getElementById("git-icon");

GitIcon.addEventListener("click",()=>{
  window.open('https://github.com/AnandKumarSarika','_blank');
});

const GitIconf=document.getElementById("git-icon2");

GitIconf.addEventListener("click",()=>{
  window.open('https://github.com/AnandKumarSarika','_blank');
});

const Logo=document.getElementById('logo');

Logo.addEventListener("click",()=>{
  window.location.href='index.html';
});

// Download
const Down=document.getElementById("Dcv");

Down.addEventListener("click",()=>{
  window.location.href='https://drive.usercontent.google.com/u/2/uc?id=1U1uszJIM_n4K1Ei16pIAeApq0SyA6-mM&export=download';
});


const Downa=document.getElementById("Dcv2");

Downa.addEventListener("click",()=>{
  window.location.href='https://drive.usercontent.google.com/u/2/uc?id=1U1uszJIM_n4K1Ei16pIAeApq0SyA6-mM&export=download';
});


// Project Links

const Mern=document.getElementById("mern");
const Movie=document.getElementById("movie");
const Weather=document.getElementById("weather");
const Unsplash=document.getElementById("unsplash");
const College=document.getElementById("college");
const Game=document.getElementById("game");

Mern.addEventListener('click',()=>{
  window.open('https://github.com/AnandKumarSarika/SHOPCART-Ecommerce-Website','_blank');
})

Movie.addEventListener('click',()=>{
  window.open('https://github.com/AnandKumarSarika/Frontend-Projects/tree/main/Movie%20Guide%20App','_blank');
})

Weather.addEventListener('click',()=>{
  window.open('https://github.com/AnandKumarSarika/Frontend-Projects/tree/main/Weather%20App','_blank');
})

Unsplash.addEventListener('click',()=>{
  window.open('https://github.com/AnandKumarSarika/Frontend-Projects/tree/main/Image%20Generator','_blank');
})

College.addEventListener('click',()=>{
  window.open('https://github.com/AnandKumarSarika/Legacy-College-Website-','_blank');
})

Game.addEventListener('click',()=>{
  window.open('https://github.com/AnandKumarSarika/Frontend-Projects/tree/main/TIC-TAC-TOE','_blank');
})