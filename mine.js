let btnOne = document.querySelector('.btn1');
let btnTwo = document.querySelector('.btn2');
let btnThree = document.querySelector('.btn3');
let icon1 = document.querySelector('.myicon1');
let icon2 = document.querySelector('.myicon2');
let icon3 = document.querySelector('.myicon3');


btnOne.addEventListener('click', function(){
    if(btnOne.classList.toggle('first')){
        icon1.classList.add('newicon1')  
        btnTwo.classList.remove('second')
        icon2.classList.remove('newicon2')
        icon3.classList.remove('newicon3')
        btnThree.classList.remove('third')
    }  else{
        icon1.classList.remove('newicon1') 
    }  
} );
btnTwo.addEventListener('click', function(){
    if(btnTwo.classList.toggle('second')){
        icon2.classList.add('newicon2')
        btnOne.classList.remove('first')
        btnThree.classList.remove('third')
        icon1.classList.remove('newicon1') 
        icon3.classList.remove('newicon3')
    }  else{
        icon2.classList.remove('newicon2') 

    }
    
})
btnThree.addEventListener('click', function(){
    if(btnThree.classList.toggle('third')){
        icon3.classList.add('newicon3')
        btnTwo.classList.remove('second')
        btnOne.classList.remove('first')
        icon1.classList.remove('newicon1') 
        icon2.classList.remove('newicon2')
    } else {
        icon3.classList.remove('newicon3') 

    } 
})




