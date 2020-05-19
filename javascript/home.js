var x = document.querySelector('.navigation')
document.querySelector(".icon").addEventListener('click',()=>{
    if(x.className === 'navigation'){
        x.className += ' responsive';
    }else{
        x.className = 'navigation'
    }
})