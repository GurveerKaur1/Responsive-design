'use strict';
 const tag = document.querySelector('.tag');
 const one = document.querySelector('nav ul .home-2')
 const two = document.querySelector('nav ul .home-3');
 const three = document.querySelector('nav ul .home-4');
 const four = document.querySelector('nav ul .home-5');
 const five = document.querySelector('nav ul .home-6');
 const six = document.querySelector('.six');
 const nav = document.querySelector('nav');
 
 const section = document.querySelector('.rows');
 const h2 = document.querySelector('h2');
 const act = document.querySelector('nav ul li a');
 

 let count=2;
 tag.addEventListener('click', ()=> {
    count++;
 
 
    if(count%2 === 0 && window.innerWidth < 800 ){
    //body.style.background='white';  
    h2.style.display='none'; 
    section.style.display='none';    
    one.style.display = 'flex';
    two.style.display = 'flex';
    three.style.display = 'flex';
    four.style.display = 'flex';
    five.style.display = 'flex';
    six.style.display = 'flex';
}
    else if(count%2 === 1 && window.innerWidth < 700){
        h2.style.display='grid';
        section.style.display = 'grid';
        one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';
    six.style.display = 'none';

    } 
;});

/*let number = 1;
foot.addEventListener('click', () => {
    number++;
    if(number%2===0){
        first.style.display = 'inline';
        second.style.display = 'inline';
        third.style.display = 'inline';
    }
})*/


/*function myFunction(x){
    if(x.matches){

    }
}

let x = window.matchMedia("(max-width : 800px")
myFunction(x)
x.addListener(myfunction)*/

//window.addEventListener('resize', addEventListener);