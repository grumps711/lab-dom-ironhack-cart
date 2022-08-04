// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerHTML; //step1 //step2
  let quantity = product.querySelector('.quantity input').value; //!

  subtotalprice = price * quantity; //step3

  product.querySelector('.subtotal span').innerHTML = subtotalprice; //step4

  return subtotalprice; //step5
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  //Iteration 1 code
  /**const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);**/
  
  // end of test

  // ITERATION 2

  const manyProducts = document.querySelectorAll('tbody > tr');

  manyProducts.forEach((product) => {
    updateSubtotal(product);
  });

  let total = 0;

  manyProducts.forEach((product) => {
     total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerHTML = total;
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener(
  'load', //función que cuando le das al "calculate prices" te lleva a /**la función calculateAll()**/

  () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
  }
);
