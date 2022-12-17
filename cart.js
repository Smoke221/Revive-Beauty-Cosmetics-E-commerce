let getData = JSON.parse(localStorage.getItem('products-in-cart')) || []
let getCartCount = localStorage.getItem('cart-count')
let container = document.querySelector('#products')
let quantity = 1;

function displayCard(data) {
    container.innerHTML = []
    data.forEach((e, index) => {
        let divs = document.createElement('div')
        divs.setAttribute('id', 'cart-prod-cont')

        let image = document.createElement('img')
        image.setAttribute('src', e.image)
        image.setAttribute('id', 'img')

        let name = document.createElement('p')
        name.textContent = e.name

        let price = document.createElement('p')
        price.textContent = '$' + e.price

        let divs2 = document.createElement('div')
        divs2.setAttribute('id', 'quantity-info')

        let qty = document.createElement('p')
        qty.textContent = quantity

        let qtyDec = document.createElement('button')
        qtyDec.textContent = '-'
        qtyDec.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                qty.textContent = quantity
            }
        })

        let qtyInc = document.createElement('button')
        qtyInc.textContent = '+'
        qtyInc.addEventListener('click', () => {
            if (quantity >= 1) {
                quantity++;
                qty.textContent = quantity
            }
        })

        let removeBtn = document.createElement('button')
        removeBtn.setAttribute('id','remove-from-cart')
        removeBtn.textContent = 'X'
        removeBtn.addEventListener('click', () => {
            // count-=1
            // document.querySelector('#cart-count').textContent = getCartCount
            // localStorage.setItem('cart-count',count)

            getData.splice(index, 1)
            localStorage.setItem('products-in-cart', JSON.stringify(getData))
            displayCard(getData)
        })
        // console.log(count);
        let sub_total = document.createElement('p')
        sub_total.textContent = '$' + (quantity * e.price)

        let line = document.createElement('hr')

        divs2.append(qtyDec, qty, qtyInc)
        divs.append(image, name, price, divs2, sub_total, removeBtn)
        container.append(divs, line)
    })
}
displayCard(getData)

document.querySelector('#cart-count').textContent = getCartCount
