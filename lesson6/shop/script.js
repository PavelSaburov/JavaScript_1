var numberPosition = 1,
    summ = 0,
    buttons = document.querySelectorAll(".product__item button"),
    basket = document.querySelector(".basket__list"),
    itog = document.querySelector(".itog");
buttons.forEach(function (item) {
  item.addEventListener("click", addProductToBascet);
})
function addProductToBascet (event) {
  var product = event.target.parentNode;
  // console.log(product);
  var title = product.querySelector(" .title").innerText;
  var price = parseFloat(product.querySelector(" .price").innerText);
  console.log(price);
  if (numberPosition === 1) {
    basket.style.display = "table";
    document.querySelector(".basket h2").innerText = "Ваши продукты";
  }
  basket.insertRow(numberPosition);
  basket.rows[numberPosition].insertCell(0);
  basket.rows[numberPosition].cells[0].innerText = numberPosition;
  basket.rows[numberPosition].insertCell(1);
  basket.rows[numberPosition].cells[1].innerText = title;
  basket.rows[numberPosition].insertCell(2);
  basket.rows[numberPosition].cells[2].innerText = price;
  summ += price;
  itog.innerText = summ;
  numberPosition++;
}

