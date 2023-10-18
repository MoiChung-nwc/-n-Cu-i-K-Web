const addressbtn = document.querySelector('#address-form')

const addressclose = document.querySelector('#address-close')

//console.log(rightbtn)


addressbtn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "flex"
})

addressclose.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "none"
})

//slider-------------------------------------------------
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')

const imgNumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0


rightbtn.addEventListener("click", function() {
    index = index + 1
    if(index > imgNumber.length - 1) {
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
})

leftbtn.addEventListener("click", function() {
    index = index - 1
    if(index <= 0) {
        index = imgNumber.length - 1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
})

//-----------------slider 1-----------------------------------
const imgNumberli = document.querySelectorAll('.slider-content-left-bottom li')

imgNumberli.forEach(function(image, index) {
    image.addEventListener("click", function() {
        removeActive()
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
        image.classList.add("active")
    })
})

function removeActive() {
    let imgActive = document.querySelector('.active')
    imgActive.classList.remove("active")
}

//------------------slider 2-------------------------------------
function imgAuto() {
    index = index + 1
    if(index > imgNumber.length - 1) {
        index = 0
    }
    removeActive()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    imgNumberli[index].classList.add("active")
}
setInterval(imgAuto, 5000)
//--------------sider-product---------------------
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items')
//console.log(rightbtntwo)
//console.log(leftbtntwo)
rightbtntwo.addEventListener("click", function() {
    index = index + 1
    if(index > imgNumbertwo.length - 1) {
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})

leftbtntwo.addEventListener("click", function() {
    index = index - 1
    if(index <= 0) {
        index = imgNumbertwo.length - 1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})

