window.addEventListener("resize",()=>{
    console.log(window.innerWidth)  
    if(innerWidth>=1000){
        document.getElementById("footer").style.display="flex"
        document.getElementById("foot").style.display="none"
        document.getElementById("responsive_upper").style.display="none"
    }
    else{
        document.getElementById("footer").style.display="none"
        document.getElementById("foot").style.display="block"
        document.getElementById("responsive_upper").style.display="block"
       
    }
    
})
if(innerWidth>=1000){
    document.getElementById("footer").style.display="flex"
    document.getElementById("foot").style.display="none"
    document.getElementById("responsive_upper").style.display="none"
}
else{
    document.getElementById("footer").style.display="none"
    document.getElementById("foot").style.display="block"
}


