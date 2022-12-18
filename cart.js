let getData = JSON.parse(localStorage.getItem('products-in-cart')) || []
let getCartCount = localStorage.getItem('cart-count')
let container = document.querySelector('#products')
let amountToPay = document.querySelector('#amount-to-pay')
let quantity = 1
let total = 0;


function displayCard(data) {
    container.innerHTML = null



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
        total += quantity * e.price
        amountToPay.textContent = total


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
                sub_total.textContent = '$' + quantity * e.price
                total -= quantity * e.price
                amountToPay.textContent = total
                localStorage.setItem('to-pay',total)
                // localStorage.setItem('total-amount',amount)
                // amountToPay.textContent = amount
                // console.log(amount2)
                // localStorage.getItem('total-cart-value')
                // localStorage.setItem('total-cart-value',(e.quantity*e.price))
                // total-=(e.quantity*e.price)
                // amountToPay.textContent = total-(e.quantity*e.price)
            }
        })

        let qtyInc = document.createElement('button')
        qtyInc.textContent = '+'
        qtyInc.addEventListener('click', () => {
            if (quantity >= 1) {
                quantity++;
                total += quantity * e.price
                amountToPay.textContent = total
                localStorage.setItem('to-pay',total)
                qty.textContent = quantity
                sub_total.textContent = '$' + quantity * e.price

                // localStorage.setItem('total-amount',amount2)
                // amountToPay.textContent = amount2
                // console.log(amount2+amount)
                // localStorage.setItem('total-cart-value', (e.quantity*e.price))
                // total+=(e.quantity*e.price)
                // amountToPay.textContent = total+(e.quantity*e.price)
                // console.log(total)
            }
        })

        let removeBtn = document.createElement('button')
        removeBtn.setAttribute('id', 'remove-from-cart')
        removeBtn.textContent = 'X'
        removeBtn.addEventListener('click', () => {
            getCartCount--
            document.querySelector('#cart-count').textContent = getCartCount
            localStorage.setItem('cart-count', getCartCount)

            getData.splice(index, 1)
            localStorage.setItem('products-in-cart', JSON.stringify(getData))
            displayCard(getData)
        })
        // console.log(count);
        let sub_total = document.createElement('p')
        sub_total.textContent = '$' + (e.quantity * e.price)
        // localStorage.setItem('value',sub_total.textContent)

        let line = document.createElement('hr')

        divs2.append(qtyDec, qty, qtyInc)
        divs.append(image, name, price, divs2, sub_total, removeBtn)
        container.append(divs, line);


        // amountToPay.textContent = amount2
    })
}
displayCard(getData)

document.querySelector('#cart-count').textContent = getCartCount

let checkout = document.querySelector('#checkout')
checkout.addEventListener('click', () =>{
    window.location.href = 'payment.html'
})