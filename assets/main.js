'use strict'
{
    const slide=document.getElementById("slide");
    const prev=document.getElementById("prev");
    const next=document.getElementById("next");
    const indicator = document.getElementById('indicator');
    const lists=document.querySelectorAll(".list");
    const totalSlides=lists.length;
    let count=0;
    let autoPlayInterval;

    function nextClick() {
        slide.classList.remove( `slide${count % totalSlides + 1}` );
        count++;
        slide.classList.add( `slide${count % totalSlides + 1}` );
      }
      function prevClick() {
        slide.classList.remove( `slide${count % totalSlides + 1}` );
        count--;
        if (count < 0) count = totalSlides - 1;
        slide.classList.add( `slide${count % totalSlides + 1}` );
      }

      next.addEventListener('click',()=>{
        nextClick();
      })
      prev.addEventListener('click',()=>{
        prevClick();
      })
}