document.getElementById('addShoeForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const price = parseFloat(document.getElementById('price').value);
    const size = parseInt(document.getElementById('size').value);

    const shoeData = { name, price, size };

    try {
        const response = await fetch('/shoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(shoeData),
        });

        if (response.ok) {
            alert('Shoe added successfully!');
            window.location.href = '/';
        } else {
            alert('Failed to add shoe');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
