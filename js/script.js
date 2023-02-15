const searchForm=document.querySelector(".search-form")
const searchBtn=document.querySelector("#search-btn")

searchBtn.addEventListener("click",()=>{
    searchForm.classList.toggle("active")
    Cart.classList.remove("active")
    loginForm.classList.remove("active")
    navBarLogo.classList.remove("active")
})


const Cart=document.querySelector(".cart")
document.querySelector("#cart-btn").addEventListener("click",()=>{
    Cart.classList.toggle("active")
    searchForm.classList.remove("active")
    loginForm.classList.remove("active")
    navBarLogo.classList.remove("active")
})

const loginForm=document.querySelector(".login-form")

document.querySelector("#login-btn").addEventListener("click",()=>{
    loginForm.classList.toggle("active")
    Cart.classList.remove("active")
    searchForm.classList.remove("active")
    navBarLogo.classList.remove("active")
})

const navBarLogo=document.querySelector(".navbar-logo")

document.querySelector("#menu-btn").onclick=function(){
    navBarLogo.classList.toggle("active")
    loginForm.classList.remove("active")
    Cart.classList.remove("active")
    searchForm.classList.remove("active")
}


window.addEventListener("scroll",()=>{
    loginForm.classList.remove("active")
    Cart.classList.remove("active")
    searchForm.classList.remove("active")
    navBarLogo.classList.remove("active")
})