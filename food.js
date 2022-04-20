class Food {
    constructor(type, name, price, image) {
        this._type = type;
        this._name = name;
        this._price = price;
        this._image = image;
    }

    getType() {
        return this._type;
    }

    getName() {
        return this._name;
    }

    getPrice() {
        return this._price;
    }

    getImage() {
        return this._image;
    }
}

function addFood() { //tao ra 1 nut bam onclick vao day voi id: addFood
    let type = document.getElementById('mySelect').value
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;
    let food = new Food(type, name, price, image);
    let currentData = loadLocalStorage('listFood');
    if (!currentData) {
        let arr = [];
        arr.push(food);
        saveLocalStorage('listFood',arr)
    } else {
        if (currentIndex == -1) {
            currentData.push(food);
            saveLocalStorage('listFood',currentData)
        } else {
            currentData[currentIndex] = food;
            saveLocalStorage('listFood',currentData);
            currentIndex = -1;
        }
    }
    showFood()
    clear()
}

function showFood() {
    let data = loadLocalStorage('listFood');
    let a = `<tr>
                <th>Bánh Mì</th>
            </tr>`
    let b = `<tr>
                <th>Xôi Rán</th>
            </tr>`
    let c = `<tr>
                <th>Xôi Xéo</th>
            </tr>`
    if (data) {
        let arr = []
        for (let i = 0; i < data.length; i++) {
                let food = new Food(data[i]._type, data[i]._name, data[i]._price, data[i]._image);
                arr.push(food);
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].getType() == '1') {
                a += '<tr>'
                a += `<td class="stt">${i + 1}</td>`
                a += `<td class="name-sp">${arr[i].getName()}</td>`
                a += `<td class="price-sp">${arr[i].getPrice()}</td>`
                a += `<td><img class="img-sp" src="${arr[i].getImage()}" alt=""></td>`
                a += `<td><button class="btn" onclick="deleteFood(${i})">Delete</button></td>`
                a += `<td><button class="btn" onclick="editFood(${i})">Edit</button></td>`
                a += '</tr>'
            }
            if (arr[i].getType() == '2') {
                b += '<tr>'
                b += `<td class="stt">${i + 1}</td>`
                b += `<td class="name-sp">${arr[i].getName()}</td>`
                b += `<td class="price-sp">${arr[i].getPrice()}</td>`
                b += `<td><img class="img-sp" src="${arr[i].getImage()}" alt=""></td>`
                b += `<td><button class="btn" onclick="deleteFood(${i})">Delete</button></td>`
                b += `<td><button class="btn" onclick="editFood(${i})">Edit</button></td>`
                b += '</tr>'
            }
            if (arr[i].getType() == '3') {
                c += '<tr>'
                c += `<td class="stt">${i + 1}</td>`
                c += `<td class="name-sp">${arr[i].getName()}</td>`
                c += `<td class="price-sp">${arr[i].getPrice()}</td>`
                c += `<td><img class="img-sp" src="${arr[i].getImage()}" alt=""></td>`
                c += `<td><button class="btn" onclick="deleteFood(${i})">Delete</button></td>`
                c += `<td><button class="btn" onclick="editFood(${i})">Edit</button></td>`
                c += '</tr>'
            }
        }
    }
        document.getElementById('banhMi').innerHTML = a;
        document.getElementById('xoiRan').innerHTML = b;
        document.getElementById('xoiXeo').innerHTML = c;
}

function deleteFood(index) {
    let data = loadLocalStorage('listFood');
    data.splice(index, 1);
    saveLocalStorage('listFood',data)
    showFood()
}

let currentIndex = -1;

function editFood(index) {
    let data = loadLocalStorage('listFood');
    currentIndex = index;
    document.getElementById('mySelect').value = data[index]._type
    document.getElementById('name').value = data[index]._name
    document.getElementById('price').value = data[index]._price
    document.getElementById('image').value = data[index]._image
    document.getElementById('them').innerHTML = 'Edit'
}


function clear() {
    document.getElementById('name').value = "";
    document.getElementById('price').value = "";
    document.getElementById('image').value = "";
    document.getElementById('them').innerHTML = 'Thêm'
}

showFood()
function showBill() {
    let cart_1 = loadLocalStorage('listPayment')
    let d = '';
    for (let i = 0; i < cart_1.length; i++) {
        d += `<tr>`
        d += `<td>${cart_1[i].name}:</td>`
        d += `<td>${cart_1[i].price}</td>`
        d += `</tr>`

    }
    let sum = 0;
    for (let i = 0; i<cart_1.length;i++) {
        sum += +cart_1[i].price
    }
    d += `<tr>`
    d += `<th>Tổng tiền</th>`
    d += `<th>${sum}</th>`
    d += `</tr>`
    document.getElementById('payment').innerHTML = d;
}
showBill()

function truyCap(){
    window.location.href = "khachhang.html"
}


