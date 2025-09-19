document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("products-container");

    container.addEventListener("click", function(e) {
        if (e.target.classList.contains("add-product")) {
            e.preventDefault();

            const newProduct = document.createElement("div");
            newProduct.classList.add("product-space");
            newProduct.innerHTML = `
                <select name="product">
                    <option value="mahsulot-1">Mahsulot-1</option>
                    <option value="mahsulot-2">Mahsulot-2</option>
                </select>

                <input type="number" placeholder="Mahsulot miqdorini kiriting">
                <input type="number" placeholder="Mahsulot summasi">
                <button class="remove-product">-</button>
            `;
            container.appendChild(newProduct);
        }

        if (e.target.classList.contains("remove-product")) {
            e.preventDefault();
            e.target.parentElement.remove();
        }
    });
});