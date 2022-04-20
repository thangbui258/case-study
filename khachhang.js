class SanPham {
    constructor(_type, _name, _price, _image) {
        this.type = _type;
        this.name = _name;
        this.price = _price;
        this.image = _image
        this.index = -1;
    }

    getHtml() {
        let html = `<div class="card">
                      <img src="${this.image}" alt="${this.image}" style="width:100%">
                      <h3>${this.name}</h3>
                      <p class="price">${this.price}</p>
                      <p><button onclick="addCart(${this.index})">Them vao gio hang</button></p>
                    </div>`;
        return html;

    }
}

let list = loadLocalStorage('listFood')
console.log(list)
let products = [];
for (let i = 0; i < list.length; i++) {
    let sanPham = new SanPham(list[i]._type, list[i]._name, list[i]._price, list[i]._image);
    sanPham.index = i;
    products.push(sanPham);
}


function showList() {
    let tab_banhMi = ``;
    let tab_xoiRan = ``;
    let tab_xoiXeo = ``;


    for (let i = 0; i < products.length; i++) {
        if (list[i]._type == '1') {
            tab_banhMi += products[i].getHtml()
        }
        if (list[i]._type == '2') {
            tab_xoiRan += products[i].getHtml()
        }
        if (list[i]._type == '3') {
            tab_xoiXeo += products[i].getHtml()
        }
    }

    document.getElementById('mi').innerHTML = tab_banhMi;
    document.getElementById('ran').innerHTML = tab_xoiRan;
    document.getElementById('xeo').innerHTML = tab_xoiXeo;
}


function addCart(index) {
    let product = {
        name: products[index].name,
        price: products[index].price
    }
    let cart = loadLocalStorage('listPayment');
    if (!cart) {
        let listCart = [];
        listCart.push(product);
        saveLocalStorage('listPayment', listCart);
    } else {
        cart.push(product);
        saveLocalStorage('listPayment', cart)
    }

    showCart()
}

function showCart() {
    let cart_1 = loadLocalStorage('listPayment')
    let a = '';
    for (let i = 0; i < cart_1.length; i++) {
        a += `<tr>`
        a += `<td>${cart_1[i].name}:</td>`
        a += `<td>${cart_1[i].price}</td>`
        a += `<td><button class="btn" onclick="deleteCart(${i})">Delete</button></td>`
        a += `</tr>`
    }
    let sum = 0;
    for (let i = 0; i<cart_1.length;i++) {
        sum += +cart_1[i].price
    }
    a += `<hr>`
    a += `<tr>`
    a += `<th>Tổng tiền</th>`
    a += `<th>${sum}</th>`
    a += `</tr>`
    document.getElementById('payment').innerHTML = a;
}

function deleteCart(n) {
    let cart_1 = loadLocalStorage('listPayment')
    cart_1.splice(n,1);
    saveLocalStorage('listPayment',cart_1)
    showCart()
}

showList()
showCart()