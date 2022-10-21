$(document).ready(function()
{
    $('.counter').counterUp({
        delay:20,
        time:1200
    })
})


const header = document.getElementsByClassName("head-parent-container")[0];
document.getElementsByClassName("nav-bar")[0].addEventListener("click", function(){
    header.classList.toggle("open");
})










// const matchesMade = document.getElementsByClassName("stats-child2-container")[0];
// // matchesMade.innerText = "hello";

// const speed = 70;
// const updateCount = () =>{
//          // const target = +matchesMade.getAttribute("data-target");
//          const target = 6000000;
//          const count = matchesMade.innerText.replace(/\D/g,'');
//          const count2 = parseInt(count);
   
//          const inc = target/speed;
      
//          if(count2 < target){
   
//             matchesMade.innerText = (count2+inc).toLocaleString();
//             setTimeout(updateCount, 30);
   
//          } else{
//             count.innerText=target;
//          }
//       }

// updateCount();