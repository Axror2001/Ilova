document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("add-product");

    addBtn.addEventListener("click", function(e) {
       console.log("salom")

       const productContainer = document.getElementById("product-space")
       const inputGroup = document.createElement("div");
       inputGroup.className = "product-space"
       inputGroup.innerHTML = `
        <select name="product" id="product-1">
                <option value="mahsulot-1">Mahsulot-1</option>
                <option value="mahsulot-2">Mahsulot-2</option>
            </select>

            <input type="number" placeholder="Mahsulot miqdorini kiriting">
            <input type="number" placeholder="Mahsulot summasi">
            <button class="remove-btn" id="remove-product">-</button>
       `;
       productContainer.appendChild(inputGroup);

        document.getElementById("product-space").addEventListener("click", function (e) {
            if (e.target.classList.contains("remove-btn")) {
            e.target.parentElement.remove();
            }
        });
    });
});





// fetch('baza.json')
//     .then(resposne => resposne.json())
//     .then(data => {
//         console.log("JSON data", data);
//     })




// a = prompt("Habar yozung");
// console.log("Salom" + " " + a )
// console.log(1 + 2)
// console.log(2 * 3)
// console.log(8 / 2)
// console.log(10 - 2)

// a = alert("Salom siz hozir 18 yoshdan kattamisiz!")

// a = confirm("Siz saytda qolmoqchimisiz")
a = Number (prompt("Yoshingiz nechida ?"));
console.log( a )
