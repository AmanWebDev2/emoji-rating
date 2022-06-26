const starsElement = document.querySelectorAll('.fa-star');
const emojisElement = document.querySelectorAll('.far');
const colorsArray = ['red','orange','lightblue','lightgreen','green'];
starsElement.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        updateRating(index);
    })
})

function updateRating(index){
    starsElement.forEach((star,idx)=>{
        if(idx<index+1){
            star.classList.add('active');
        }else{
            star.classList.remove('active');
        }
    })
    emojisElement.forEach((emoji)=>{
        emoji.style.transform = `translateX(-${index*50}px)`
        emoji.style.color = colorsArray[index]
    })
}