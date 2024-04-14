const drop = document.getElementsByClassName('drop');
let nav = true;

// Logo refresh -------------->

const logo = document.querySelector('.logo');
logo.onclick = () => {document.location.reload()};


drop[0].addEventListener("click", () => {
    // document.body.style = "background-color: red";
    let clnav = document.querySelector('.collapsed-nav');
    let ele = document.querySelectorAll('.nav-element');
    let navlist = document.querySelector('.nav-col-list');

    if(nav) {
    
    clnav.style = "max-height: 200px;";
    navlist.style = "display: block;"
    

    nav = false;
    } else {
        
        clnav.style = "max-height: 0;";

        setTimeout(()=> {
            navlist.style = "display: none;"
        },1000)

        nav = true;
    }
    
});

// -------------------->

// document.querySelector('.num-boxes').style = "background-color: #ff523b";

const nextBoxes = document.querySelectorAll('.num-boxes');
let  cl = 1;

console.log(nextBoxes);

nextBoxes.forEach((next) => {
    addEventListener('click', (e) => {
        
        // if(e.target.id === 'nx-next')
        // {   
        //     console.log(`nx-${cl}`);
        //     document.getElementById(`nx-${cl}`).style = "background-color: white";
        //     // console.log(one);
        //     document.getElementById(`nx-${cl}`).style = "background-color: #ff523b";
        // } else 
        {
            console.log(e.target.id);
        next.style = "background-color: white";
        document.getElementById(e.target.id).style = "background-color: #ff523b";
        }
        
        
    })
    // cl++;
});

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

// let img = document.querySelectorAll('.ftr-box');
// console.log(img);

// let cards = document.querySelectorAll('.card');

// cards.forEach((val) => {
//     val.addEventListener('mouseover', () => {
//         val.style = "position: relative; bottom: 5px;";
//     });
// });

// cards.forEach((val) => {
//     val.addEventListener('mouseout', () => {
//         val.style = "position: relative; top: 5px;";
//     });
// });


// img.forEach((val) => {
//     val.addEventListener('mouseover', () => {
//         val.style = "position: relative; bottom: 5px;";
//     });
// });

// img.forEach((val) => {
//     val.addEventListener('mouseout', () => {
//         val.style = "position: relative; top: 5px;";
//     });
// });



