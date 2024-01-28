document.addEventListener('scroll',()=>{
    
    window.innerWidth>980 ? header.style.backgroundPosition=`left ${-0.04*window.scrollY}px` : header.style.backgroundPosition=null
})

console.log(window.innerWidth)

