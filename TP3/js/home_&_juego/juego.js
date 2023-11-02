"use strict"
const likeContainer = document.querySelector("#comentario_like");
const span = likeContainer.querySelector("span");
const like = likeContainer.querySelector("img");

let isLiked = false;

likeContainer.addEventListener("click", () => {
    if (!isLiked) {
        span.textContent = "4 me gusta";
        like.src = "images/logo/like_aplicado.png";
        isLiked = true;
    }else{
        span.textContent = "3 me gusta";
        like.src = "images/logo/like.png";
        isLiked = false;
    }
});