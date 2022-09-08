
function dataselc0(){
    var Categoryname=document.getElementById("CategorySelect").value;
   
    var SearchByCategory=`?product_category=${Categoryname}`;
    
    getData(SearchByCategory);
}

function dataselc(){
    var brandname=document.getElementById("BrandSelect").value;
   
    var SearchByBrand=`?brand=${brandname}`;
    
    getData(SearchByBrand);
}

function dataselc2(){
    var Productname=document.getElementById("ProductSelect").value;
    
    var SearchByProduct=`?product_type=${Productname}`;
   
    getData(SearchByProduct);
}


var Start=()=>{
    getData("");
}


async function getData(searchValue){
    
    try{
        console.log("i am in");
        var res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json${searchValue}`);
        var data=await res.json();
       
         
        appendData(data);
        
    }
    catch(err){
        console.log("err",err);
    }
}






let current_page=1;
let rows=12;
var card=document.getElementById("rc-3");


async function  appendData(data){
    console.log("in append function");
   
    var pagination_element=document.getElementById("PaginationPart");
    var shoeTotalres=document.getElementById("shoeTotalres");
    shoeTotalres.innerText=`Total Result :${data.length}`;
    
    DispalyPAge(data,card,rows,current_page);
    setupPagination(data,pagination_element,rows);

}





async function DispalyPAge(items,wrapper,rows,page){
    wrapper.innerHTML="";
    page--;

    let Start=rows * page;
    let end=Start+rows;

    let paginatedItems=items.slice(Start,end);
    


    let childString=``;
    for(let i=0; i<paginatedItems.length; i++){
        let elm=paginatedItems[i];
        childString +=`<div class="rc3-card">
            <div class="rc3-card-d1">
            <img src=${elm.image_link} class="rc3-img" alt=""> 
            </div>
            <div class="rc3-card-d2">
            <span id="p1name">${elm.name}</span><br>
            <span id="p2type">${elm.product_type}</span><br>
            <p id="p3price">Price:-$${elm.price}</p><br>
            </div>
            
            <button class="button-87" role="button">Add to cart</button>
            </div>
            `
            wrapper.innerHTML=childString;
    }
}



async function setupPagination(items,wrapper,rows_per_page){
    wrapper.innerHTML="";
    let page_count=Math.ceil(items.length / rows_per_page);
    for(let i=1; i<page_count +1; i++){
        let btn=PaginationButton(i,items);
        wrapper.appendChild(btn);
    }
}


 function PaginationButton(page,items){
    
    let button=document.createElement("button");
    button.innerText=page;
     
    if(current_page==page) button.classList.add('active');

    button.addEventListener("click",function(){
        current_page=page;
        DispalyPAge(items,card,rows,current_page);
        
        let current_btn=document.querySelector("#PaginationPart button.active");
        current_btn.classList.remove('active');
        button.classList.add('active');
        
    })
    return button;
}