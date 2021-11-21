let bg=document.querySelector("#main");
let snm=document.getElementById("snm");
let bga=snm.getElementsByTagName("A");
let bgData=[
    {bgImg:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80"},
    {bgImg:"https://images.unsplash.com/photo-1567337710282-00832b415979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1030&q=80"},
    {bgImg:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80"},
    {bgImg:"https://images.unsplash.com/photo-1630409349416-24884761a307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"}
]
for(let i=0;i<bga.length;i++){
    bga[i].addEventListener("click",function(d){
        // console.log(d);
        bg.style.background=`url(${bgData[i].bgImg})`;
        bg.style.backgroundRepeat="no-repeat";
    bg.style.backgroundSize="cover";

    })
   
}
var i=0;
function slideBg(){

        
        bg.style.background=`url(${bgData[i].bgImg})`;
        bg.style.backgroundRepeat="no-repeat";
    bg.style.backgroundSize="cover";
    i = (i + 1) % bga.length;
    
}
// setInterval(slideBg,5000);

//Search Section
let srchBx=document.getElementById("srchSec");
let srch=document.getElementById("srch");
let flag=1;
let media=window.matchMedia("(max-width:500px)")
srch.addEventListener("click",function(){
    if(srchBx.style.height){
        srchBx.style.height=null;
        // srchBx.style.display="initial";
        srch.style.transform="initial"
        srch.style.left="6%";
        srch.style.zIndex="1";

       
    
    }
    else{
        srchBx.style.height="60vh";
       
        if(media.matches){
        
        }
        else{
            srch.style.zIndex="99";

             srch.style.left="50%";
            srch.style.transform="translate(-50%,0) scale(2)";
        }
        
        
    }
})



// logIN
let logBx=document.getElementById("Users");
let logBtn=document.querySelector("#nicons i:nth-child(2)");
let clseBtn=document.querySelector("#lcontent>i");
clseBtn.style.cursor="pointer";
logBtn.style.cursor="pointer";
logBtn.addEventListener("click",function(){
    if(media.matches){
        logBx.style.width="100vw";
        logBx.style.backdropFilter="blur(20px)"
    }
    else{
        logBx.style.width="30vw";
        logBx.style.backdropFilter="blur(5px)"
    }
    
    document.getElementById("lcontent").style.display="initial";

})
clseBtn.addEventListener("click",function(){
    document.getElementById("lcontent").style.display="none";
    logBx.style.width="0";
})


// LogIn and SignUp 
let cbtn=document.querySelector("#lbtn a");
let lbx=document.getElementById("logIn");
let lbtn=document.querySelector("#sbtn a");
let sbx=document.getElementById("signUp");
cbtn.addEventListener("click",function(){
lbx.style.left="-100%";
sbx.style.right="0";
})
lbtn.addEventListener("click",function(){
    sbx.style.right="-100%";
    lbx.style.left="0";
})


// best rasoi
// let bstR=document.getElementById("bstR");
// let bst=document.getElementById("bst");
// let bstBtn=document.querySelector("#nlft a:nth-child(2)");
// bstBtn.addEventListener("click",function(){
//     if(flag===1){
//         bstR.style.width="50vw";
//         flag=0;
//     }
//     else{
//         bstR.style.width="0";
//         flag=1;
//     }

// })

let tbtn=document.querySelectorAll("#nlft a");
let tab=document.getElementsByClassName("tab");
let tabC=document.getElementsByClassName("tabC")
for(let i=1;i<tbtn.length-1;i++){
    tbtn[i].addEventListener("click",function(){
        if(flag===1){
            tab[i].style.width="50vw";
            tabC[i].style.display="initial";
            flag=0;
        }
        else{
            tab[i].style.width="0";
            tabC[i].style.display="none";
            flag=1;
        }
    })
}
tbtn[3].addEventListener("click",function(){
    if(flag===1){
            tabC[2].style.display="initial";
            tab[2].style.width="50vw";
        flag=0;
    }
    else{
            tabC[2].style.display="none";
            tab[2].style.width="0";
        flag=1;
    }
})