var isstatus = document.querySelector("h5")

var addfriend = document.querySelector("#add")
var removefriend = document.querySelector("#remove")
 addfriend.addEventListener("click",function( ) {
       isstatus.innerHTML="friends"
       isstatus.style.color="green"  
    })
    
    removefriend.addEventListener("click",function( ) {
        isstatus.innerHTML="strangers"
        isstatus.style.color="conflowerblue"  
     })
