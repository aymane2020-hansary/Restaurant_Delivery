//const { finished } = require('node:stream');

let carts = document.querySelectorAll('.g-width-100');

let products = 
	[
		{
			produitName : 'Produit_1',
			tag : 'https://image.freepik.com/free-photo/english-breakfast-dish_1203-9633',
			produitPrice : 20,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_2',
			tag : 'https://img.freepik.com/free-photo/top-view-avocado-toast-with-radish-seeds-tray_23-2148749085',
			produitPrice : 30,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_3',
			tag : 'https://image.freepik.com/free-photo/delicious-healthy-asian-food-white-background_24972-1026',
			produitPrice : 35,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_4',
			tag : 'https://img.freepik.com/free-photo/flat-lay-pita-with-avocado-spread-fried-egg-cutting-board_23-2148749147',
			produitPrice : 15,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_5',
			tag : 'https://image.freepik.com/free-photo/top-view-oatmeal-bowl-with-raspberries-blueberries_23-2148891798',
			produitPrice : 40,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_6',
			tag : 'https://image.freepik.com/free-photo/delicious-healthy-snack-with-various-fruit_23-2148825013',
			produitPrice : 63,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_7',
			tag : 'https://image.freepik.com/free-photo/top-view-composition-breakfast-goodies_23-2148826891',
			produitPrice : 55,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
        {
			produitName : 'Produit_8',
			tag : 'https://image.freepik.com/free-photo/maki-sushi-isolated-white_2829-5653',
			produitPrice : 20,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_9',
			tag : 'https://image.freepik.com/free-photo/grilled-chicken-fillet-fresh-vegetable-salad-tomatoes-red-onion-arugula-chicken-meat-salad-healthy-food_2829-6942',
			produitPrice : 30,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_10',
			tag : 'https://image.freepik.com/free-photo/vegan-farfalle-pasta-with-spinach-sauce-with-fried-chickpeas_2829-18272',
			produitPrice : 35,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_11',
			tag : 'https://image.freepik.com/free-photo/indian-bread_74658-91',
			produitPrice : 15,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_12',
			tag : 'https://img.freepik.com/free-photo/fresh-raw-food-with-fork-plate_23-2147870988',
			produitPrice : 40,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_13',
			tag : 'https://image.freepik.com/free-photo/close-up-burgers-with-fries-plate_23-2148262913',
			produitPrice : 63,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_14',
			tag : 'https://img.freepik.com/free-photo/side-view-pizza-with-chopped-pepper-board-cookware_176474-3183',
			produitPrice : 55,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
        {
			produitName : 'Produit_15',
			tag : 'https://image.freepik.com/free-photo/grilled-chicken_144627-17511',
			produitPrice : 20,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_16',
			tag : 'https://image.freepik.com/free-photo/maki-sushi-isolated-white_2829-5653',
			produitPrice : 30,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_17',
			tag : 'https://img.freepik.com/free-photo/salmon-sashimi_74190-2864',
			produitPrice : 35,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_18',
			tag : 'https://img.freepik.com/free-photo/flat-lay-slice-pepperoni-pizza-plate_23-2148765310',
			produitPrice : 15,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_19',
			tag : 'https://image.freepik.com/free-photo/top-view-plate-with-grilled-chicken-skewers_23-2148632619',
			produitPrice : 40,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_20',
			tag : 'https://img.freepik.com/free-photo/seafood-spaghetti-close-up_23-2148393725',
			produitPrice : 63,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_21',
			tag : 'https://image.freepik.com/free-photo/homemade-marinara-pasta-sauce-white-bowl_53876-96865',
			produitPrice : 55,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    }
        ,
		{
			produitName : 'Produit_22',
			tag : 'https://image.freepik.com/free-photo/delicious-banana-milkshake_144627-5649',
			produitPrice : 12,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_23',
			tag : 'https://img.freepik.com/free-photo/glass-cocktail-drink-with-lemon-slice-against-pink-background_23-2148102098',
			produitPrice : 10,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_24',
			tag : 'https://image.freepik.com/free-photo/top-view-hot-latte-coffee-white-cup-isolated-white-background_1253-977',
			produitPrice : 20,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    },
		{
			produitName : 'Produit_25',
			tag : 'https://image.freepik.com/free-photo/milkshake-table_144627-27527',
			produitPrice : 30,
			produitRecette : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inCart : 0
	    }
	];

for(let i=0 ; i < carts.length; i++)
{
	carts[i].addEventListener('click', () => {
		cartNumbers(products[i]);
        totalCost(products[i]);
        
        var productName = products[i].produitName;
        var productprice = products[i].produitPrice;
        alert(productName, productprice);
        
	})
}

function onLoadCartNumbers()
{
	let productNumbers = localStorage.getItem('cartNumbers');
	
	if(productNumbers){
		   document.querySelector('.badge').textContent = productNumbers;
	}
}

function cartNumbers(products)
{
	console.log("the product clicked is", products);
	let productNumbers = localStorage.getItem('cartNumbers');
	
	productNumbers = parseInt(productNumbers);

	if(productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.badge').textContent = productNumbers + 1;
	}
	else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.badge').textContent = 1;
	}
	
	SetItems(products);
}

function SetItems(products)
{
	let cartItems = localStorage.getItem('productsInCart'); // li ghadi ndir howa ghadi indir wahed loop for b cartItems.lenght o ghadi ndir if cartItems[products.tag] != z
	console.log("My cartItems are", cartItems);            // ghadi n stocki f wahed var type table hodok productsInCart likikhalfo 'z' li baghi namsa7 and ghadi nakhwi productsInCart  
	cartItems = JSON.parse(cartItems);                    // localStorage o n3awed n3amro b hadak l var li created
    
	if(cartItems != null){
		if(cartItems[products.tag] == undefined){
		   	  cartItems = {
				  ...cartItems,
				  [products.tag]: products
			  }
		   }
		cartItems[products.tag].inCart += 1;
	}
	else
		{
			products.inCart = 1;
			cartItems = {
			[products.tag]: products
		}

	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products)
{
    // console.log("The product price is ", products.produitPrice);
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.produitPrice);
    }
    else{
        localStorage.setItem("totalCost", products.produitPrice);
    }
}

 // -------------------------------------------------------------------------------------
function displayCart()
{   var cartCost = localStorage.getItem('totalCost');
    
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    
    console.log(cartItems);
    if(cartItems && productContainer){
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => { // class="products" id="products"  // This is was in <table ...
                productContainer.innerHTML += `
                    <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 100%; display:block; overflow:auto; width: 600px;">
                      <tr style="padding: 10px" class="tr_">
                        <th scope="col" class="cart-img" style="width: 100px"><img style=" Width: 100px; padding: 10px" src = "${item.tag}.jpg"></th>
                        <th scope="col" class="cart-name" style="width: 200px; padding: 10px auto 10px auto;">${item.produitName}</th>
                        <th scope="col" class="cart-price" style="width: 250px; padding: 10px auto 10px auto; text-align: center;">${item.produitPrice}.00 DH</th>
                        <th scope="col" class="cart-quantity" style="width: 200px; padding: 10px auto 10px auto; text-align: center;"><i class="fa fa-arrow-circle-left"></i>${item.inCart}</td><i class="fa fa-arrow-circle-right"></i>
                        <th scope="col" class="cart-total" style="width: 200px; padding: 10px auto 10px auto; text-align: right;"><span>${item.inCart * item.produitPrice}.00 DH</span></th>
                        <th scope="col" class="cart-trash"><i class="fa fa-trash"></i></th>
                      </tr>
                    </table>
                `;
            });
        
            productContainer.innerHTML += `
                <div class = "basketTotalContainer" style="width: 600px; border-bottom: 1px solid lightgrey; border-top: 1px solid lightgrey;">
                    <p class="basketTotalTitle">
                        Total :
                    </p>
                    <p class="basketTotal">
                        ${cartCost}.00 DH
                    </p>
                </div>
                `;
       }
}
        function updateCartTotal(){
            var cartItemContainer = document.getElementsByClassName('products')[0]
            var cartRows = cartItemContainer.getElementsByClassName('tr_')
            
            for(var i=0; i < cartRows.length; i++)
            {
                var cartRow = cartRows[i]
                var priceElemnt = cartRow.getElementsByClassName('cart-price')[0]
                var quantityElemnt = cartRow.getElementsByClassName('cart-quantity')[0]
                console.log(priceElemnt, quantityElemnt)
            }
        }

function displayCarts()
{
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContaine = document.querySelector(".product");
    
    //console.log(cartItems);
    if(cartItems && productContaine){
            productContaine.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContaine.innerHTML += 
                 `
                    <p style="color: darkgrey"><span style="padding: 10px 0px;">${item.produitName}</span>
                    <span style="padding: 0 0 0 75px;">x</span><span style="padding: 10px 30px 10px 5px;"> ${item.inCart}</span>
                    <span style="Width: 80px; padding: 10px 0 10px 0px;">${item.inCart * item.produitPrice}</span><span>,00</span><span>DH </span></p>
                `;
            });
        
        let cartCost = localStorage.getItem('totalCost');
                productContaine.innerHTML += `
                    <p style=" float: right; color: darkgrey">
                        <span>total: </span>
                        <span><span><span>${cartCost}</span><span>,00</span><span  style="padding-right: 15px"> DH</span></span>
                    </p>
                `;
       }
}

/* ----------- Alert Function ----------- */
function alert(productName, productPrice)
{
    document.getElementById("alert").style.display='block';
    document.getElementById("alert").style.display='block';
    document.getElementById("productName").innerHTML= productName;
    document.getElementById("productPrice").innerHTML= productPrice;
    setTimeout(function()
               {
                    document.getElementById("alert").style.display='none';
               }, 2000);
}

onLoadCartNumbers();
displayCart();
displayCarts();

// *******************  Button Commander  ******************* //
const Nom_Complé = document.getElementById('Nom_Complé');
const Téléphone = document.getElementById('Téléphone');
const Adresse = document.getElementById('Adresse');
const Ville = document.getElementById('Ville');

const Commande_Btn = document.getElementById('Commande_Btn');

let Commande_Client = localStorage.getItem('Commande_Client');
let Prix_Total = localStorage.getItem('totalCost');

const database = firebase.database();
const rootRef = database.ref('orders');

/********* Date De La Commande ***********/
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

today = dd + '/' +  mm+ '/' + yyyy +' '+ timeNow;
/******************************************/

//userRef.child('mike').update({'dateOfBirth': 1});

//var Ord = firebase.database().ref().child("orders").orderByChild("Order_Number").value;
//console.log(leadsRef);
	
	Commande_Btn.addEventListener('click', (e) => {
		if(Ville.value == '' || Ville.value == 'Ville*'){
			console.log('...');
		}else{
		e.preventDefault();
		
		
		const autoId = rootRef.push().key
		
		rootRef.child(autoId).set({
			Nom_Complé: Nom_Complé.value,
			Téléphone: Téléphone.value,
			Adresse: Adresse.value,
			Ville: Ville.value,
			Status: 'Envoyer',   //Envoyer  //Annulé
			Commande_Client: Commande_Client.replace('\n                        ', '').replace('\n                        ', '').replace('\n                        ', '').replace('\n                        ', '').replace('\n                        ', '').replace('\n                        ', '').replace('\n                        ', '').replace('\n                        ', '').replace('\n                        ', '').replace('\n                        ', ''),
			Prix_Total: Prix_Total + 'DH',
			Date: today
		});

		Nom_Complé.value = '';
        Téléphone.value = '';
        Adresse.value = '';
        Ville.value = 'Ville*';
		
		localStorage.clear();
		document.getElementById('badge').innerHTML="0";
	
		window.location.href = "../Html/Remerciement.html";
}
});
	
// ********************* //
document.getElementById("Nom_Complé").attributes["required"] = "";