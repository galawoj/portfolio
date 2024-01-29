document.addEventListener('scroll',()=>{
    
    window.innerWidth>980 ? header.style.backgroundPosition=`left ${-0.05*window.scrollY}px` : header.style.backgroundPosition=null
})

