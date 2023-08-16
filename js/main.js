let img = document.querySelector('.main .img-fluid') ; 
let images = document.querySelectorAll('.img-product .img-fluid') ; 
let body = document.querySelector('body') ; 

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (e) {
        let imgSrc = e.target.getAttribute('src') ; 
        img.setAttribute ('src' , imgSrc ) ; 

        document.body.style.backgroundColor = e.target.getAttribute('color') ; 

    })
} 
