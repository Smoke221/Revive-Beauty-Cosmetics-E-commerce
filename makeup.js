let container = document.querySelector('.products-container')

fetch('https://63999e5329930e2bb3d93298.mockapi.io/makeup-products')
.then((fromResolve) => fromResolve.json())
.then((data) =>{
    console.log(data)
    displayCard(data)
})

function displayCard(data){
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
        price.textContent = e.price

        let cartBtn = document.createElement('button')
        cartBtn.textContent = 'Add to cart'

        divs.append(image,name,price,cartBtn)
        container.append(divs)
    })
}