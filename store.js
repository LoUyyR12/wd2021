if (document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded', ready)
} else ready()

ready()
{
    var removeCartButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++)
    {
    var button = removeCartButtons[i]
    button.addEventListener('click', RemoveCartItem)
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++)
    {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
}

function RemoveCartItem(event)
{
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    UpdateCardTotal()
}

function quantityChanged(event)
{
    var input = event.target
    if (isNaN(input.value) || input.value <= 0)
    {
        input.value = 1;
    }
    UpdateCardTotal()
}

function UpdateCardTotal()
{
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++)
    {
        var total = 0
        var cartRow = cartRows[i]
        var priceElevent = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parceFloat(priceElevent.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$'+ total
}