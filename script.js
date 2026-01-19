var products = [
    {name : 'Minimalist Arm Chair', headline : 'Cozy corner Arm Chair', price : '20,000', image : 'https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'Office Chair', headline : 'Ergonomic office chair', price : '15,000', image : 'https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?q=80&w=978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'Relaxation Chair', headline : 'Comfortable relaxation chair', price : '18500', image : 'https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
];
var popular = [
    {name : 'Study Chair', headline : 'School Chair', price : '2,000', image : 'https://images.unsplash.com/photo-1640938776314-4d303f8a1380?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'Office Chair', headline : 'Ergonomic office chair', price : '15,000', image : 'https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?q=80&w=978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'Relaxation Chair', headline : 'Comfortable relaxation chair', price : '18500', image : 'https://plus.unsplash.com/premium_photo-1680112806039-244731d88d45?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
];
var cart = [];

function showProducts () {
    var clutter = "";
    products.forEach(function (product, index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                            <img src="${product.image}" alt="" class="w-full h-full object-cover rounded-xl">
                        </div>
                        <div class="data w-full px-2 py-5">
                            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                            <div class="flex justify-between w-full items-center mt-2">
                            <div class="w-1/2">
                                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                                <h4 class="font-semibold mt-2">&#x20b9; ${product.price}</h4>
                            </div>
                            <button data-index = '${index}' class="add w-10 h-10 rounded-full shader text-yellow-400"><i
                                data-index = '${index}' class="add ri-add-line"></i></button>
                        </div>
                    </div>
                </div>`
    })
    document.querySelector('.products').innerHTML = clutter;    
}
function showPopular () {
    var clutter = "";
    popular.forEach(function (product) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20 whitespace-normal">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#x20b9; ${product.price}</h4>
                    </div>
                </div>`
    })
    document.querySelector('.populars').innerHTML = clutter;
}
function addToCart() {
    document.querySelector('.products').addEventListener('click', function (details) {
        if(details.target.classList.contains('add')) {
            cart.push(products[details.target.dataset.index]);
        }
    })
}
function showCart() {
    document.querySelector('.carticon').addEventListener('click', function () {
        document.querySelector('.cartexpnd').style.display = 'block';
        var clutter = "";
        cart.forEach(function (product, index) {
            clutter += `<div class = "flex gap-2 bg-white p-2 rounded-lg">
                            <div class = "w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                                <img class = "w-full h-full object-cover" src = "${product.image}" alt = "">
                            </div>
                            <div>
                                <h3 class = "font-semibold">${product.name}</h3>
                                <h5 class = "text-sm font-semibold opacity-80">&#x20b9; ${product.price}</h5>
                            </div>
                        </div>`
        })
        document.querySelector('.cartexpnd').innerHTML = clutter;
    })

}

showProducts();
showPopular();
addToCart();
showCart();