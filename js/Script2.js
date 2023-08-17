var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var addbtn = document.getElementById("addbtn");
var searchValue = document.getElementById("searchValue");
var currentIndex = 0;

var productsContainer;
if (localStorage.getItem("myProducts") != null) {
  productsContainer = JSON.parse(localStorage.getItem("myProducts"));
  displayProducts(productsContainer);
} else {
  productsContainer = [];
}

addbtn.addEventListener("click", function () {
  if (addbtn.innerHTML == "Add Product") {
    addProduct();
  } else {
    updated();
  }
  clearProducts();
  displayProducts(productsContainer);
});

function addProduct() {
  if (validationProductName() == true && productNameInput.value && productPriceInput.value && pproductCategoryInput.value && productDescInput.value ) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      desc: productDescInput.value,
    };
    productsContainer.push(product);
    localStorage.setItem("myProducts", JSON.stringify(productsContainer));
  } else {
    alert("Product name invalid");
  }
}

function clearProducts() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescInput.value = "";
}

function displayProducts(arrList) {
  var cartona = ``;
  for (var i = 0; i < arrList.length; i++) {
    cartona += `<tr>
        <td>${i}</td>
        <td>${arrList[i].name}</td>
        <td>${arrList[i].price}</td>
        <td>${arrList[i].category}</td>
        <td>${arrList[i].desc}</td>
        <td><button onclick="setUpdate(${i})" id="update" class="btn btn-sm btn-danger">Update</button></td>
        <td><button onclick="deleteProducts(${i})" class="btn btn-sm btn-success">Delete</button></td>
    </tr>`;
  }
  document.getElementById("body").innerHTML = cartona;
}

function search(termSearch) {
  let containerSearch = [];
  for (let i = 0; i < productsContainer.length; i++) {
    if (
      productsContainer[i].name.toLowerCase().includes(termSearch.toLowerCase()) == true) {
      containerSearch.push(productsContainer[i]);
    }
  }
  displayProducts(containerSearch);
}

function deleteProducts(indexdelete) {
  productsContainer.splice(indexdelete, 1);
  localStorage.setItem("myProducts", JSON.stringify(productsContainer));
  displayProducts(productsContainer);
}

function setUpdate(indexUpdate) {
  currentIndex = indexUpdate;
  productNameInput.value = productsContainer[indexUpdate].name;
  productPriceInput.value = productsContainer[indexUpdate].price;
  productCategoryInput.value = productsContainer[indexUpdate].category;
  productDescInput.value = productsContainer[indexUpdate].desc;
  addbtn.innerHTML = "Update Product";
}

function updated() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  productsContainer[currentIndex] = product;
  localStorage.setItem("myProducts", JSON.stringify(productsContainer));
  addbtn.innerHTML = "Add Product";
}

// function validationProductName() {
//   var regx = /^[A-Z][a-z]{3,8}$/;
//   if (regx.test(productNameInput.value) == true) {
//     productNameInput.classList.replace("is-invalid", "is-valid");
//     return true;
//   } else {
//     productNameInput.classList.add("is-invalid");
//     return false;
//   }
// }

// var user = {
//     name : 'abdo',
//     age : 18 ,
//     salary : 2000,
//     work :function(){
//         window.alert(`Abdel-Rahman Fathy`)
//     },
//     child:{
//         name:'Fathy',
//         age:50,
//     }

// }
// console.log(user.name + " " + user.child.name)
// user.work();
// document.getElementById()

// var colors=["red" , "black" ,"blue"];
// var ages=[25,26,30];
// console.log(colors[10]);
// var employee=["abdo","ahmed","ali","mohamed","abdo"];
// employee.includes();
// console.log(employee)

// var ProductNameInput = document.getElementById('ProductName');
// var ProductPriceInput = document.getElementById('ProductPrice');
// var ProductCategoryInput = document.getElementById('ProductCategory');
// var ProductDescriptionInput = document.getElementById('ProductDescription');
// var clickbtn = document.getElementById('btn');
// var products = [];

// clickbtn.onclick = function(){
//         addProduct();
//         display();

// }
// function addProduct(){
//     if(validation()){
//         var product=
//         {
//             name: ProductNameInput.value,
//             price: ProductPriceInput.value,
//             category: ProductCategoryInput.value,
//             desc: ProductDescriptionInput.value
//         }
//         products.push(product);
//     }
//     else{
//         alert("No")
//     }

// }
// function display(){
//     var count='';
//     for(var i=0;i<products.length;i++)
//     {
//         count+=`
//         <tr>
//         <td> ${products[i].name}</td>
//         <td>${products[i].price}</td>
//         <td>${products[i].category}</td>
//         <td>${products[i].desc}</td>
//         </tr>`;
//     }
//     document.getElementById('TableBody').innerHTML = count;
// }

// function validation(){
//     var regx=/^[A-Z][a-z]{3,6}$/;
//     if(regx.test(ProductNameInput.value)){

//         ProductNameInput.classList.replace('is-invalid','is-valid');
//         return true;
//     }
//     else{
//         ProductNameInput.classList.add('is-invalid');
//         return false;
//     }
// }
