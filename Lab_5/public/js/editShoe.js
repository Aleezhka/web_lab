document.addEventListener('DOMContentLoaded', async () => {
    const id = new URLSearchParams(window.location.search).get('id');
    
    if (id) {
        try {
            const response = await fetch(`/shoes/${id}`);
            if (response.ok) {
                const shoe = await response.json();
                document.getElementById('name').value = shoe.name;
                document.getElementById('price').value = shoe.price;
                document.getElementById('size').value = shoe.size;
            } else {
                alert('Failed to fetch shoe data');
                window.location.href = 'index.html';
            }
        } catch (error) {
            console.error('Error:', error);
            window.location.href = 'index.html';
        }
    } else {
        alert('No shoe ID found');
        window.location.href = 'index.html';
    }

    document.getElementById('editShoeForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const price = parseFloat(document.getElementById('price').value);
        const size = parseInt(document.getElementById('size').value, 10);

        if (id && name && !isNaN(price) && !isNaN(size)) {
            try {
                const response = await fetch(`/shoes/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, price, size })
                });
                
                if (response.ok) {
                    alert('Shoe updated successfully!');
                    window.location.href = './';
                } else {
                    alert('Failed to update shoe');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert('Please provide valid inputs!');
        }
    });
});
