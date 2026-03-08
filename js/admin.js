let editingId = null;

function login() {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;
    if (u === 'admin' && p === 'admin123') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        loadOpp();
    } else alert('Invalid credentials!');
}

function logout() {
    if (confirm('Logout?')) {
        document.getElementById('login').style.display = 'flex';
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('user').value = '';
        document.getElementById('pass').value = '';
    }
}

function loadOpp() {
    const search = document.getElementById('search').value.toLowerCase();
    const cat = document.getElementById('cat').value;
    const filtered = data.filter(item => 
        item.title !== '' && 
        (item.title.toLowerCase().includes(search) || item.org.includes(search)) &&
        (!cat || item.category === cat)
    );
    
    document.getElementById('list').innerHTML = filtered.map(item => `
        <div class="card">
            <h3>${item.title}</h3>
            <p><b>${item.category}</b> | ${item.organization}</p>
            <p>${item.description.substring(0, 80)}...</p>
            <p> ${item.location} | 📅 ${item.deadline}</p>
            <div class="card-actions">
                <button class="edit-btn" onclick="editOpp('${item.id}')">Edit</button>
                <button class="delete-btn" onclick="delOpp('${item.id}')">Delete</button>
            </div>
        </div>
    `).join('');
}

function editOpp(id) {
    const item = data.find(i => i.id === id);
    if (!item) return;
    editingId = id;
    document.getElementById('title').value = item.title;
    document.getElementById('category').value = item.category;
    document.getElementById('org').value = item.organization;
    document.getElementById('description').value = item.description;
    document.getElementById('deadline').value = item.deadline;
    document.getElementById('location').value = item.location;
    document.getElementById('fee').value = item.fee;
    document.getElementById('payment').value = item.payment;
    document.getElementById('modal').classList.add('show');
}

function openForm() {
    editingId = null;
    document.getElementById('modal').classList.add('show');
    formReset();
}

function closeForm() {
    document.getElementById('modal').classList.remove('show');
    formReset();
}

function formReset() {
    document.querySelectorAll('input[type="text"], select, textarea').forEach(el => el.value = '');
    document.getElementById('modalTitle').textContent = 'Add Opportunity';
}

function save() {
    const form = {
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        organization: document.getElementById('org').value,
        description: document.getElementById('description').value,
        deadline: document.getElementById('deadline').value,
        location: document.getElementById('location').value,
        fee: document.getElementById('fee').value,
        payment: document.getElementById('payment').value,
        time: '',
        imagePath: '',
        link: ''
    };
    
    if (editingId) {
        const idx = data.findIndex(i => i.id === editingId);
        if (idx !== -1) data[idx] = { ...data[idx], ...form };
    } else {
        data.push({ id: 'id_' + Date.now(), ...form });
    }
    
    saveDataToLocalStorage();
    closeForm();
    loadOpp();
    alert('Saved!');
}

function delOpp(id) {
    if (confirm('Delete?')) {
        data = data.filter(i => i.id !== id);
        saveDataToLocalStorage();
        loadOpp();
    }
}
