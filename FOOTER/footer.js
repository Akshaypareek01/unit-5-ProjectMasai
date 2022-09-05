
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


///////for the 
document.querySelector(".baby_foot1").style.display="none"
document.getElementById("plus").addEventListener("click",()=>{
    console.log("i ma clicked")
    document.querySelector(".baby_foot1").style.display="flex"; 
   
    document.querySelector("#plus").innerText="-"
    document.getElementById("plus").addEventListener("click",()=>{
        document.querySelector(".baby_foot1").style.display="none"; 
        document.querySelector("#plus").innerText="+"
    })

})
document.querySelector(".baby_foot2").style.display="none"
document.getElementById("plus1").addEventListener("click",()=>{
    console.log("i ma clicked")
    document.querySelector(".baby_foot2").style.display="flex"; 
    document.querySelector("#plus1").innerText="-"
    document.getElementById("plus1").addEventListener("click",()=>{
        document.querySelector(".baby_foot2").style.display="none"; 
        document.querySelector("#plus1").innerText="+"
    })

})

document.querySelector(".baby_foot3").style.display="none"
document.getElementById("plus2").addEventListener("click",()=>{
    console.log("i ma clicked")
    document.querySelector(".baby_foot3").style.display="flex"; 
    document.querySelector("#plus2").innerText="-"
    document.getElementById("plus2").addEventListener("click",()=>{
        document.querySelector(".baby_foot3").style.display="none"; 
        document.querySelector("#plus2").innerText="+"
    })

})

document.querySelector(".baby_foot4").style.display="none"
document.getElementById("plus3").addEventListener("click",()=>{
    console.log("i ma clicked")
    document.querySelector(".baby_foot4").style.display="flex"; 
    document.querySelector("#plus3").innerText="-"
    document.getElementById("plus3").addEventListener("click",()=>{
        document.querySelector(".baby_foot4").style.display="none"; 
        document.querySelector("#plus3").innerText="+"
    })

})

