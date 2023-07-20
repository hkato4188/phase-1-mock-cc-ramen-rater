// write your code here
//see all ramen images in the div with the id of ramen-menu
//1. request the data from the server to get all ramen objects
//2. display image for each ramen in img tag inside #ramen-menu div
//Add event listener to each image in #ramen-menu div when clicked
//1. Render all info about ramen inside #ramen-detail div
//2. Rendered info should reflect comments and rating?
//Create a new ramen after submitting new-ramen form
//1. Prevent form default
//2. Add event listener to create button
//3. No post request because ramen does not persist... the browser eats it lol?

const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const url = "http://localhost:3000/ramens";
let displayedRamen = null

renderRamenMenu();
addRamenSubmitListener()
addEditListener()


function renderRamenMenu() {
  //getRamenObjects from API
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((menu) => {
        for (let ramen in menu) {
        createRamen(menu[ramen]);
      }
      displayRamen(menu[0])
    });
}

function createRamen(ramen) {
  //Renders ramen images in div #ramen-menu
  const imgElement = document.createElement("img");
  
  imgElement.src = ramen.image;
  imgElement.alt = ramen.name;
  imgElement.classList.add("detail-image");
  ramenMenu.appendChild(imgElement);
  //add event listener to each image in here
  imgElement.addEventListener("click", () => {
    displayRamen(ramen);
  });
  
}

function displayRamen(ramen) {
    displayedRamen = ramen
  let detailImg = document.getElementById("ramen-detail-image");
  detailImg.src = ramen.image;
  detailImg.alt = ramen.name;
  //   //create h2 title
  const ramenTitle = document.getElementById("ramen-detail-name");
  ramenTitle.innerText = ramen.name;
  //create h3 for restuarant
  const restaurant = document.getElementById("ramen-detail-restaurant");
  restaurant.innerText = ramen.restaurant;
  //append elements into ramen-detail div
  ramenDetail.appendChild(ramenTitle, restaurant);
  //display rating
  let ratingDisplayElement = document.getElementById("rating-display");
  ratingDisplayElement.innerText = ramen.rating;
  //display comment
  let commentDisplayElement = document.getElementById("comment-display");
  commentDisplayElement.innerText = ramen.comment;
}

//create new ramen after submitting new-ramen form
function addRamenSubmitListener() {
    const newRamenForm = document.getElementById("new-ramen");
    newRamenForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newRamenRestaurant = document.getElementById("new-restaurant").value;
        const newRamenName = document.getElementById("new-name").value;
        const newRamenImage = document.getElementById("new-image").value;
        const newRamenRating = document.getElementById("new-rating").value;
        const newRamenComment = document.getElementById("new-comment").value;


        const newRamen = {
            name: newRamenName,
            restaurant: newRamenRestaurant,
            image: newRamenImage,
            rating: newRamenRating,
            comment: newRamenComment
        }
        createRamen(newRamen)
        
//Post: to persist data
        // fetch(url, {
        // method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        //     'Accept': "application/jason",
        // },
        // body: JSON.stringify({
        //     name: newRamenName,
        //     restaurant: newRamenRestaurant,
        //     image: newRamenImage,
        //     rating: newRamenRating,
        //     comment: newRamenComment,
        // }),
        // })
        // .then((res) => res.json())
        // .then((data) => createRamen(data));
    });
}

function addEditListener(){
    const editRamenForm = document.getElementById('edit-ramen')
    editRamenForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        const newRating = document.getElementById('edit-rating').value
        const newComment = document.getElementById('edit-comment').value
        displayedRamen.rating = newRating;
        displayedRamen.comment = newComment
        displayRamen(displayedRamen)
    })
    

}