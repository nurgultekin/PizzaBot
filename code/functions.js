// Thought it is more efficient to store all the data in an object and call them in prompts and alerts

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

  /* alert(
    `Hey! Happy to serve your pizza. On our menu we have ${pizzaTypes.pizza1.name}, ${pizzaTypes.pizza2.name}, and ${pizzaTypes.pizza3.name}.`
  ); */

function menuCheck(pizzaName) {
  return (
    pizzaName === pizzaTypes.pizza1.name.toLowerCase() ||
    pizzaName === pizzaTypes.pizza2.name.toLowerCase() ||
    pizzaName === pizzaTypes.pizza3.name.toLowerCase()
  );
}


function priceCalculation(pizzaName, orderQuantity) {
  if (pizzaName === pizzaTypes.pizza1.name) {
    return pizzaTypes.pizza1.price * orderQuantity;
  } else if (pizzaName === pizzaTypes.pizza2.name) {
    return pizzaTypes.pizza2.price * orderQuantity;
  } else if (pizzaName === pizzaTypes.pizza3.name) {
    return pizzaTypes.pizza3.price * orderQuantity;
  } else {
    return 0; // Invalid pizza name, return 0 or handle it as needed
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


// The main function which incorporates all the above functions and carries out the order process

function orderProcess() {
  alert(
    `Hey! Happy to serve your pizza. On our menu we have ${pizzaTypes.pizza1.name}, ${pizzaTypes.pizza2.name}, and ${pizzaTypes.pizza3.name}.`
  );

  const pizzaName = prompt("Enter the name of the pizza you want to order");

  if (menuCheck(pizzaName)) {
    const orderQuantity = parseInt(prompt("Enter the quantity you want to order"));
    const orderPrice = priceCalculation(pizzaName, orderQuantity);
    const orderCookingTime = cookingTime(orderQuantity);

    alert(
      `You ordered ${orderQuantity} ${pizzaName} pizza(s). The total price is ${orderPrice} and the estimated cooking time is ${orderCookingTime} minutes. Enjoy your meal!`
    );
  } else {
    alert("Invalid pizza name. Please choose a pizza from the menu.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  orderProcess(); // Call the orderProcess function here, after the DOM is fully loaded
});
