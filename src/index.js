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


const ramenMenu = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")


//getRamenObjects from API
const url = "http://localhost:3000/ramens";
fetch(url)
.then(res => {return res.json()})
.then(data => {
    for(let ramen in data){
        const ramenName = data[ramen].name
        const restaurantName = data[ramen].restaurant
        const imageUrl = data[ramen].image
        const ratingInfo = data[ramen].rating
        const ramenComment = data[ramen].comment

        //Renders ramen images in div #ramen-menu
        const imgElement = document.createElement('img')
        imgElement.src = imageUrl
        imgElement.classList.add("detail-image")
        ramenMenu.appendChild(imgElement)
        
        
        //add event listener to each image in here
        imgElement.addEventListener("click", (e) => {
            let detailImg = document.getElementById('ramen-detail-image')
            
            detailImg.src = e.target.src = ("http://127.0.0.1:5500" + imageUrl.slice(1))
            detailImg.alt = e.target.alt = String(ramenName)
            
            


            //create h2 title
            const ramenTitle = document.getElementById('ramen-detail-name')
            ramenTitle.innerText = ramenName
            //create h3 for restuarant
            const restaurant = document.getElementById('ramen-detail-restaurant')
            restaurant.innerText = restaurantName
            //append elements into ramen-detail div
            ramenDetail.appendChild(ramenTitle, restaurant, )
            
            //display rating
            let ratingDisplayElement = document.getElementById("rating-display")
            ratingDisplayElement.innerText = ratingInfo

            //display comment
            let commentDisplayElement = document.getElementById("comment-display")
            commentDisplayElement.innerText = ramenComment

        })
        
    }
})

//create new ramen off of form
//save form element into var to reference
//prevent default and put event listener on submit form
//take values from the input field after event is executed
//create new ramen "card" and populate values based on input
//append to the menu
//sorry ran out of time