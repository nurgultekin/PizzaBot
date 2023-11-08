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

// Checks if the user input exists in the menu. It is case insensitive.
function menuCheck(pizzaName) {
  return (
    pizzaName.toLowerCase() === pizzaTypes.pizza1.name.toLowerCase() ||
    pizzaName.toLowerCase() === pizzaTypes.pizza2.name.toLowerCase() ||
    pizzaName.toLowerCase() === pizzaTypes.pizza3.name.toLowerCase()
  );
}

// Calculates the bill by taking two variables 
//if the pizza name entered is correct and is in the object, it returns the multiplation of its price with order quantity

function priceCalculation(pizzaName, orderQuantity) {
  if (pizzaName.toLowerCase() === pizzaTypes.pizza1.name.toLowerCase()) {
    return pizzaTypes.pizza1.price * orderQuantity;
  } else if (pizzaName.toLowerCase() === pizzaTypes.pizza2.name.toLowerCase()) {
    return pizzaTypes.pizza2.price * orderQuantity;
  } else if (pizzaName.toLowerCase() === pizzaTypes.pizza3.name.toLowerCase()) {
    return pizzaTypes.pizza3.price * orderQuantity;
  } else {
    return 0; // Invalid pizza name, return 0 or handle it as needed
  }
}

// Then calculate the waiting time

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

// Finally, the main function which incorporates all the previous functions and carries out the order process

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

  orderProcess(); // Calling the orderProcess function here, after the DOM is fully loaded