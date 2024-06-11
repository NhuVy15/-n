document.getElementById('tourForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const tourId = document.getElementById('tourId').value;
    const destination = document.getElementById('destination').value;
    const price = document.getElementById('price').value;
    const imageFile = document.getElementById('image').files[0];

    const newRow = document.createElement('tr');
    
    const idCell = document.createElement('td');
    idCell.textContent = tourId;
    
    const destinationCell = document.createElement('td');
    destinationCell.textContent = destination;
    
    const priceCell = document.createElement('td');
    priceCell.textContent = price;
    
    const imageCell = document.createElement('td');
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(imageFile);
    imageCell.appendChild(imageElement);
    
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        newRow.remove();
    });
    actionCell.appendChild(deleteButton);
    
    newRow.appendChild(idCell);
    newRow.appendChild(destinationCell);
    newRow.appendChild(priceCell);
    newRow.appendChild(imageCell);
    newRow.appendChild(actionCell);
    
    document.getElementById('tourList').appendChild(newRow);
    
    document.getElementById('tourForm').reset();
});
