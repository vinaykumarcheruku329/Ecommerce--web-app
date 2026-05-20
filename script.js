let count = 0;

let total = 0;

function addToCart(product, price) {

    count++;

    total += price;

    document.getElementById("cart-count")
    .innerText = count;

    document.getElementById("total")
    .innerText = total;

    let li = document.createElement("li");

    li.innerText =
    product + " - ₹" + price;

    document.getElementById("cart-items")
    .appendChild(li);
}