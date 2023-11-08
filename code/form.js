// Executing this in a form on the browser



const pizzaTypes = {
    pizza1: {
      name: "Vegetarian",
      price: 80,
    },
    pizza2: {
      name: "Pepperoni",
      price: 90,
    },
    pizza3: {
      name: "Hawaiian",
      price: 95,
    },
};

function menuCheck(pizzaName) {
    return (
        pizzaName.toLowerCase() === pizzaTypes.pizza1.name.toLowerCase() ||
        pizzaName.toLowerCase() === pizzaTypes.pizza2.name.toLowerCase() ||
        pizzaName.toLowerCase() === pizzaTypes.pizza3.name.toLowerCase()
    );
}

function priceCalculation(pizzaName, orderQuantity) {
    if (pizzaName.toLowerCase() === pizzaTypes.pizza1.name.toLowerCase()) {
        return pizzaTypes.pizza1.price * orderQuantity;
    } else if (pizzaName.toLowerCase() === pizzaTypes.pizza2.name.toLowerCase()) {
        return pizzaTypes.pizza2.price * orderQuantity;
    } else if (pizzaName.toLowerCase() === pizzaTypes.pizza3.name.toLowerCase()) {
        return pizzaTypes.pizza3.price * orderQuantity;
    } else {
        return 0; 
    }
}

function cookingTime(orderQuantity) {
    if (orderQuantity >= 1 && orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return 15;
    } else {
        return 20;
    }
}

function orderProcess() {
    const pizzaName = document.getElementById("pizzaType").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const orderResult = document.getElementById("orderResult");

    if (menuCheck(pizzaName)) {
        const orderPrice = priceCalculation(pizzaName, quantity);
        const orderCookingTime = cookingTime(quantity);

        orderResult.innerHTML = `You ordered ${quantity} ${pizzaName} pizza(s). The total price is $${orderPrice} and the estimated cooking time is ${orderCookingTime} minutes. Enjoy your meal!`;
    } else {
        orderResult.innerHTML = "Invalid pizza name. Please choose a pizza from the menu.";
    }
}
// Add an event listener to the form to handle the submission and get a response
const pizzaForm = document.getElementById("pizzaForm");
pizzaForm.addEventListener("submit", orderProcess);