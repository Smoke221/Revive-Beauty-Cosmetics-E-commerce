let bag=[]
let container = document.querySelector('.products-container')

fetch('https://63999e5329930e2bb3d93298.mockapi.io/makeup-products')
.then((fromResolve) => fromResolve.json())
.then((data) =>{
    // console.log(data)
    bag = data
    displayCard(data)
})

function displayCard(data){
    container.innerHTML = null;
    data.forEach(e => {
        let divs = document.createElement('div')
        divs.setAttribute('id','each-product')

        let image = document.createElement('img')
        image.setAttribute('src',e.image)
        image.setAttribute('id','makeup-img')

        // let brand = document.createElement('h1')
        // brand.textContent = e.brand

        let name=document.createElement('p')
        name.textContent = e.name

        let price = document.createElement('p')
        price.textContent = '$' + e.price

        let cartBtn = document.createElement('button')
        cartBtn.textContent = 'Add to cart'
        cartBtn.addEventListener('click', () => {
            let addedData = JSON.parse(localStorage.getItem('products-in-cart')) || []
            addedData.push(e)
            localStorage.setItem('products-in-cart',JSON.stringify(addedData))
        })

        divs.append(image,name,price,cartBtn)
        container.append(divs)
    })
}

function search(){
    event.preventDefault()
    let a = document.querySelector('#search').value 
    // console.log(a)
    let searchData = bag.filter(function (e) {
        return e.name.toLowerCase().includes(a.toLowerCase())
    })
    displayCard(searchData)
}

function sortbyname(){
    let selected = document.querySelector('#option-sort').value 
    if(selected === "Low To High"){
        bag.sort((a,b) => {
            return a.price-b.price
        })
    }
    if(selected === "High To Low"){
        bag.sort((a,b) => {
            return b.price-a.price
        })
    }
    console.log(bag)
    displayCard(bag)
}

function nav_register(){
    location.assign('./signup.html')
}
function nav_login(){
    location.assign('./login.html')
}