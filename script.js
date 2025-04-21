
let menu_bar = document.querySelector("#bar");
let navbar = document.querySelector(".navbar");

menu_bar.onclick = () => {
  menu_bar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};


window.onscroll = ()=>{
  menu_bar.classList.remove("fa-times");
  navbar.classList.remove("active");
}

document.querySelector("#search_bar").onclick = ()=>{
    document.querySelector("#search-form").classList.toggle("active");
}

let close = document.querySelector("#close");
close.addEventListener("click",function(){
    document.querySelector("#search-form").classList.remove("active");
})

// swiper


var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

document.querySelector(".orderFormBtn").addEventListener("click",()=>{
  alert("Order submitted");
})

// favourites

let favBtns = document.querySelectorAll(".fav-btn");
let showFavBtn = document.querySelector("#show-fav");
let dishes = document.querySelectorAll(".dishes .box");

let favSet = new Set();

favBtns.forEach(btn=>{
  btn.addEventListener("click",function(){
    let id = btn.getAttribute("data-id");

    btn.classList.toggle("active");

    if(favSet.has(id)){
      favSet.delete(id);
      this.style.color = "";
    }
    else{
      favSet.add(id);
      this.style.color = "red";
    }
  });

});

showFavBtn.addEventListener("click",()=>{

  dishes.forEach(dish =>{
    let btn = dish.querySelector(".fav-btn");
    let id = btn.getAttribute("data-id");

    if(favSet.has(id)){
      dish.style.display = "block";
    }
    else{
      dish.style.display = "none";
    }
  });

});

document.getElementById("dishes_nav").addEventListener("click",()=>{
  dishes.forEach(dish =>{
    dish.style.display = "block";
  })
})

// cart 

let cartBtns = document.querySelectorAll(".btn");
let showCartBtn = document.getElementById("show-cart");
let menu = document.querySelectorAll(".menu .box");

let cartSet = new Set();

cartBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    let id = btn.getAttribute("data-id");
    btn.classList.toggle("active");

     if(cartSet.has(id)){
      cartSet.delete(id);
     }
     else{
      cartSet.add(id);
     }

  });
});
  



showCartBtn.addEventListener("click",()=>{
  menu.forEach(dish =>{
    let btn = dish.querySelector(".btn");
    let id = btn.getAttribute("data-id");

    if(cartSet.has(id)){
      dish.style.display = "block";
    }
    else{
      dish.style.display = "none";
    }
  });
});

document.getElementById("menu_nav").addEventListener("click",()=>{
   menu.forEach(dish=>{
    dish.style.display = "block";
   });
});
