function saveLocalStorage(data1,data2) {
    localStorage.setItem(data1, JSON.stringify(data2));
}

function loadLocalStorage(data1) {
    if(localStorage.hasOwnProperty(data1))
        return JSON.parse(localStorage.getItem(data1))
    return [];
}