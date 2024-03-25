const drop = document.getElementsByClassName('drop');
let nav = true;

// console.log(drop);

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



