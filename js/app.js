$(document).ready(()=>{
  /**NAVBAR NAVIGATION LINK */
    const homeBtn =$('#homeBtn');
    const quiSommeNousBtn = $('#quiSommeNousBtn');
    const nosTravauxBtn = $('#nosTravauxBtn');
    const lientUtilesBtn = $('#lientUtilesBtn');
    const contactBtn = $('#contactBtn');
  
/**section to display */
 let firstCard = $('#firstCard'); 
 let mission  = $('#mission');
 let nosTravauxSec =  $('#nos-travaux');
 let lientUtilesSec =  $('#lient-utiles');
 let contactSec = $('#contact');

 
window.sr = ScrollReveal();
sr.reveal('header',{
  duration:500,
  origin:'top',
  distance:'250px',
  easing: 'linear'
 });
 sr.reveal('.slogan',{
     duration:500,
     origin:'top', 
     distance:'350px',
     easing: 'linear'
   });
   homeBtn.on('click',()=>{ 
       sr.reveal(firstCard,{
         duration:500,
         origin:'right', 
         distance:'-150px',
         easing: 'linear'
       });
     });
     homeBtn.on('click',()=>{ 
         sr.reveal(secondCard,{
           duration:500,
           origin:'left', 
           distance:'-100px',
           easing: 'linear'
         });
       });
       homeBtn.on('click',()=>{ 
           sr.reveal(mission,{
             duration:500,
             origin:'left', 
             distance:'-100px',
             easing: 'linear'
           });
           });
  $(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname ==
        this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});
/** les femmes françaises votaient*/
const toggleNavPanel =((x) =>{
    let panel = document.getElementById(x),
       navarrow = document.getElementById("navarrow"),
       firstTime  = document.querySelector('#firstTime'),
       maxH = "800px";
     if (panel.style.height == maxH) {
       firstTime.style.display = "none";
       panel.style.display = "none";
       panel.style.height = "0px";
       navarrow.innerHTML = "&#9662;";
     } else {
       firstTime.style.display = "block";
      panel.style.display = "block";
       panel.style.marginTop="50px";
       panel.style.marginBottom="50px";
       panel.style.height = maxH;
       navarrow.innerHTML = "&#9652;";
     }
   });
   /**btn actions antèrieures (tableaux )*/
   const toggleTableauPanel  =((x) =>{
    let tableaux = document.querySelector(x),
    navarrowTab = document.querySelector("#navarrowTab"),
    tableauxAnterieurs = document.querySelector('.hideTableaux'),
    maxHeight = "auto";
    if (tableaux.style.height == maxHeight) {
      tableauxAnterieurs.style.display = "none";
      tableaux.style.height = "0px";
      navarrowTab.innerHTML = "&#9662;";
    }else{
      tableauxAnterieurs.style.display = "block"; 
      tableaux.style.display = "block";
      tableaux.style.height = maxHeight;
      navarrowTab.innerHTML = "&#9652;";

    }
   });


   //  Button header responsive
     const navbars974 = document.querySelector('#navbars974');
     navbars974.addEventListener('click',(e)=>{
       let sidebar = document.querySelector('#mySidebar');
        if(window.innerWidth >= 768 ){
        sidebar.style.marginTop = "-235px";
       }else{
         sidebar.style.marginTop = "-369px";
       }
       if(window.innerWidth >= 375){
        sidebar.style.marginTop = "-369px";
       }
       
        
       openSidebar();
       console.log(window.innerWidth)    
     });
      // Script to open and close sidebar
     const openSidebar=(()=> {
      document.getElementById("mySidebar").style.display = "block";
     
    });
 
    const closeSidebar =(()=> {
     document.getElementById("mySidebar").style.display = "none";
    
       });
