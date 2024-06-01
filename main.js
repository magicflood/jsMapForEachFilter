
let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
let container = document.querySelector('body');

let elements = data.map(num => {
    let element = document.createElement('div');
    element.textContent = num;

    if (num > 50) {
        element.style.backgroundColor = 'green';
        element.style.textAlign = 'center';
        element.style.fontSize = '20px';
        element.style.paddingTop = '10px';
        element.style.paddingBottom = '10px';
    } else {
        element.style.backgroundColor = 'red';
        element.style.textAlign = 'center';
        element.style.fontSize = '20px';
        element.style.paddingTop = '10px';
        element.style.paddingBottom = '10px';
    }
    container.appendChild(element)
});





