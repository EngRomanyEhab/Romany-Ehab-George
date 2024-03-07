const reviewsdata = [{
    id:1,
    name:"X URBAN",
    review:"A Juicy Burger Patty With Cheddar Cheese,Beef Bacon, Crispy Onion Rings with BBQ Sauce,..",
    imgURL:"images/1.png"
   // price:"170$"
},
{
    id:2,
    name:"CHICKEN BUSTER",
    review:"Chicken Strips With Buffalo Sauce And Melted Cheddar Cheese.",
    imgURL:"images/2.png"
   // price:"200$"
},

]
let reviewElement = document.querySelector(".review")
let nameElement = document.querySelector(".person p")
//let price = document.querySelector(".person b")
let imgElement = document.querySelector(".person img")
let prevBtn = document.querySelector(".prav")
let nextBtn = document.querySelector(".next")
let currentItem =0;
let updateUI =()=>{
const item = reviewsdata[currentItem]
reviewElement.textContent=item.review
nameElement.textContent=item.name
imgElement.src=item.imgURL
}
updateUI()
nextBtn.addEventListener("click",()=>{
currentItem++
if(currentItem>reviewsdata.length-1)currentItem=0
updateUI()
})
prevBtn.addEventListener("click",()=>{
currentItem--
if(currentItem<0)currentItem=reviewsdata.length-1
updateUI();
});