'use strict';
 const tag = document.querySelector('.tag');
 const one = document.querySelector('nav ul .home-2')
 const two = document.querySelector('nav ul .home-3');
 const three = document.querySelector('nav ul .home-4');
 const four = document.querySelector('nav ul .home-5');
 const five = document.querySelector('nav ul .home-6');
 const six = document.querySelector('nav ul .home-1');
 const nav = document.querySelector('nav');
 const first = document.querySelector('nav ul .first');
 const second = document.querySelector('nav ul .second');
 const third = document.querySelector('nav ul .third');
 const ul = document.querySelector('nav ul li');
 const li = document.querySelector('nav ul li a');
 

 let count=2;
 tag.addEventListener('click', ()=> {
    count++;
 
 
    if(count%2 === 0 && window.innerWidth < 800 ){
        
        
        
    one.style.display = 'inline';
    two.style.display = 'inline';
    three.style.display = 'inline';
    four.style.display = 'inline';
    five.style.display = 'inline';
    six.style.display = 'inline';}
    else if(count%2 === 1 && window.innerWidth < 700){
        
        one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';
    six.style.display = 'none';

    } else if ( window.innerWidth > 900){
        one.style.display = 'inline';
        two.style.display = 'inline';
        three.style.display = 'inline';
        four.style.display = 'inline';
        five.style.display = 'inline';
        six.style.display = 'inline';
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