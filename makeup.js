let bag = []
let container = document.querySelector('.products-container')
let count = 0

fetch('https://63999e5329930e2bb3d93298.mockapi.io/makeup-products')
    .then((fromResolve) => fromResolve.json())
    .then((data) => {
        // console.log(data)
        bag = data
        displayCard(data)
    })

function displayCard(data) {
    container.innerHTML = null;
    document.querySelector('#cart-count').innerHTML = null
    data.forEach(e => {
        let divs = document.createElement('div')
        divs.setAttribute('id', 'each-product')

        let image = document.createElement('img')
        image.setAttribute('src', e.image)
        image.setAttribute('id', 'makeup-img')

        // let brand = document.createElement('h1')
        // brand.textContent = e.brand

        let name = document.createElement('p')
        name.textContent = e.name

        let price = document.createElement('p')
        price.textContent = '$' + e.price

        let cartBtn = document.createElement('button')
        cartBtn.textContent = 'Add to cart'
        cartBtn.addEventListener('click', () => {
            count++
            document.querySelector('#cart-count').textContent = count
            localStorage.setItem('cart-count',count)

            cartBtn.textContent = "Added to cart"
            let addedData = JSON.parse(localStorage.getItem('products-in-cart')) || []
            addedData.push(e)
            localStorage.setItem('products-in-cart', JSON.stringify(addedData))
        })

        divs.append(image, name, price, cartBtn)
        container.append(divs)
    })
    let getCartCount = localStorage.getItem('cart-count')
    document.querySelector('#cart-count').textContent = getCartCount
}

function search() {
    event.preventDefault()
    let a = document.querySelector('#search').value
    // console.log(a)
    let searchData = bag.filter(function (e) {
        return e.name.toLowerCase().includes(a.toLowerCase())
    })
    displayCard(searchData)
}

function sortbyname() {
    let selected = document.querySelector('#option-sort').value
    if (selected == "LTH") {
        bag.sort((a, b) => {
            return a.price - b.price
        })
    }
    if (selected == "HTL") {
        bag.sort((a, b) => {
            return b.price - a.price
        })
    }
    console.log(bag)
    displayCard(bag)
}

function nav_register() {
    location.assign('./signup.html')
}
function nav_login() {
    location.assign('./login.html')
}

