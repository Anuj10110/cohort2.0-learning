var arr = [
    {name : 'Famingos', image : 'https://images.unsplash.com/photo-1767811330901-dd9724b99812?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'Food Truck', image : 'https://images.unsplash.com/photo-1767972658753-b06d7a3eec4d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'Cabin Interior', image : 'https://plus.unsplash.com/premium_photo-1764260244682-4081893375b5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'CityScape in Japan', image : 'https://images.unsplash.com/photo-1758964114278-5123b0a6feb8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {name : 'Temple in Thailand', image : 'https://images.unsplash.com/photo-1767274546827-edd330df7879?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {name : 'Skateboarder', image : 'https://images.unsplash.com/photo-1765219266739-d953cabd06cb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'Tree Bark', image : 'https://images.unsplash.com/photo-1767895655116-5eaa98e3a05f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
]

function showCards () {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
                        <img src="${obj.image}" alt="" class="cursor-pointer">
                        <div class="caption">Lorem ipsum</div>
                    </div>`
    })
    
    document.querySelector('.container').innerHTML = clutter;
}

function handleSearch() {
    let searchInput = document.querySelector('#searchinput');

    searchInput.addEventListener('focus', function () {
        document.querySelector('.overlay').style.display = 'block';
    })

    searchInput.addEventListener('blur', function () {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.searchdata').style.display = 'none';
    })

    searchInput.addEventListener('input', function () {
        const filteredArr = arr.filter(obj => obj.name.toLowerCase().startsWith(searchInput.value));
        var clutter = "";
        filteredArr.forEach(function (obj) {
            clutter += `<div class="res flex px-8 py-3">
                            <i class="ri-search-line font-semibold mr-5"></i>
                            <h3 class="font-semibold">${obj.name}</h3>
                        </div>`
        })
        document.querySelector('.searchdata').style.display = 'block';
        document.querySelector('.searchdata').innerHTML = clutter;
    })
}

handleSearch();
showCards();