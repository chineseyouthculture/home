const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product p");

search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    productName.forEach(function(product) {
        const item = product.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
            console.log(0);
        } else {
            item.style.display = "none";
        }
    })
}