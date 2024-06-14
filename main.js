document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        addContact(name, phone);
        document.getElementById('contactForm').reset();
    }
});

function addContact(name, phone) {
    const contactTable = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
    const newRow = contactTable.insertRow();

    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);

    nameCell.textContent = name;
    phoneCell.textContent = phone;
    actionCell.innerHTML = '<button onclick="removeContact(this)">Remover</button>';
}

function removeContact(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
