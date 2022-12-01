const maxImg = document.querySelector(".img img");
const minImgs = document.querySelectorAll(".slider-img");
const iconStarts = document.querySelectorAll(".bi-star");
const textRatings = document.querySelector(".starts span");

minImgs.forEach(minImg => {
    minImg.addEventListener("click", () => {
        maxImg.src = minImg.src
    })
})

let numStart = 0;

checkStart();

function checkStart() {
    iconStarts.forEach(start => {
        start.addEventListener("click", () => {
            if(start.classList.contains("bi-star")) {
               start.classList.replace("bi-star", "bi-star-fill");
               numStart += 50;
               textRatings.innerText = `(${numStart} ratings)`;
            } else {
                start.classList.replace("bi-star-fill", "bi-star");
                numStart -= 50;
                textRatings.innerText = `(${numStart} ratings)`;
            }
        })
    })
}