if (!sessionStorage.getItem('adminLoggedIn')) {
    window.location.href = 'login.html';
}

const form = document.getElementById('addForm');
const itemsList = document.getElementById('itemsList');
const addBtn = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');
const formSection = document.getElementById('formSection');
const logoutBtn = document.getElementById('logoutBtn');

const saved = localStorage.getItem('opportunities');
if (saved) {
    data = JSON.parse(saved);
}

addBtn.addEventListener('click', () => {
    formSection.classList.toggle('hidden');
});

cancelBtn.addEventListener('click', () => {
    formSection.classList.add('hidden');
    form.reset();
});

logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('adminLoggedIn');
    window.location.href = 'login.html';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newItem = {
        id: Date.now().toString(),
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        organization: document.getElementById('organization').value,
        description: document.getElementById('description').value,
        deadline: document.getElementById('deadline').value,
        location: document.getElementById('location').value,
        time: '',
        fee: document.getElementById('fee').value,
        payment: document.getElementById('payment').value,
        imagePath: '',
        link: document.getElementById('link').value,
    };

    data.push(newItem);
    localStorage.setItem('opportunities', JSON.stringify(data));
    form.reset();
    formSection.classList.add('hidden');
    renderItems();
});

function renderItems() {
    if (data.length === 0) {
        itemsList.innerHTML = '<div class="empty-message">No items yet</div>';
        return;
    }

    itemsList.innerHTML = data.map(item => `
        <div class="item-card">
            <h3>${item.title}</h3>
            <div class="item-info"><strong>Category:</strong> ${item.category}</div>
            <div class="item-info"><strong>Organization:</strong> ${item.organization}</div>
            <div class="item-info"><strong>Deadline:</strong> ${item.deadline}</div>
            <div class="item-info"><strong>Location:</strong> ${item.location}</div>
            <div class="item-actions">
                <button class="delete-btn" onclick="deleteItem('${item.id}')">Delete</button>
            </div>
        </div>
    `).join('');
}

function deleteItem(id) {
    if (confirm('Delete this item?')) {
        data = data.filter(item => item.id !== id);
        localStorage.setItem('opportunities', JSON.stringify(data));
        renderItems();
    }
}

renderItems();