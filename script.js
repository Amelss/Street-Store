const button = document.getElementById('checkout-btn')
const card = document.getElementById('visa')
const paypal = document.getElementById('payp')

button.addEventListener("click", function(){
    button.style.backgroundColor ='rgb(34, 214, 195)'
    console.log('button is clicked')
})

card.addEventListener("click", function(){
    card.style.backgroundColor = 'rgb(219, 219, 219)'
})

paypal.addEventListener("click", function(){
    paypal.style.backgroundColor = 'rgb(219, 219, 219)'
})