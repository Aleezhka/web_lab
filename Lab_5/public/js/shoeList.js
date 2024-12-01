async function fetchShoes(searchQuery = '', sortBySize = false) {
    try {
        const response = await fetch('/shoes');
        if (response.ok) {
            let shoes = await response.json();

            if (searchQuery) {
                shoes = shoes.filter(shoe => shoe.name.toLowerCase().includes(searchQuery.toLowerCase()));
            }

            if (sortBySize) {
                shoes.sort((a, b) => a.size - b.size);
            }

            const shoeList = document.getElementById('shoeList');
            shoeList.innerHTML = '';

            shoes.forEach(shoe => {
                shoeList.innerHTML += `
                    <div class="shoe-item">
                        <h3>${shoe.name}</h3>
                        <p>Price: $${shoe.price}</p>
                        <p>Size: ${shoe.size}</p>
                        <button onclick="editShoe('${shoe._id}')">Edit</button>
                        <button onclick="deleteShoe('${shoe._id}')">Delete</button>
                    </div>
                `;
            });
        } else {
            console.error('Failed to fetch shoes');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function calculateTotalPrice() {
    let totalPrice = 0;
    const shoeItems = document.querySelectorAll('.shoe-item');
    shoeItems.forEach(item => {
        const priceText = item.querySelector('p:nth-child(2)').textContent;
        const price = parseFloat(priceText.replace('Price: $', ''));
        totalPrice += price;
    });

    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

document.getElementById('search').addEventListener('input', (e) => {
    const searchQuery = e.target.value.trim();
    fetchShoes(searchQuery, false);
});

document.getElementById('sortBtn').addEventListener('click', () => {
    const searchQuery = document.getElementById('search').value.trim();
    fetchShoes(searchQuery, true);
});

document.getElementById('calcPriceBtn').addEventListener('click', calculateTotalPrice);

fetchShoes();
