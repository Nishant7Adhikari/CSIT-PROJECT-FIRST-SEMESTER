let filter = document.getElementById("filter")
let containerNode = document.querySelector(".container");

inject("all")

filter.addEventListener("click", (e) =>{
    let trgt = e.target
    if (trgt.tagName !== 'SPAN') return;
    let parm = trgt.id
    containerNode.innerHTML = '';
    inject(parm);
})

// Modal logic
const applyModal = document.getElementById('apply-modal-wrapper');
const registerModal = document.getElementById('register-modal-wrapper');

containerNode.addEventListener('click', (e) => {
    const btn = e.target.closest('.apply-btn');
    if (!btn) return;

    const category = btn.getAttribute('data-category');
    const title = btn.getAttribute('data-title');

    if (category === 'Event') {
        document.getElementById('register-modal-title').innerText = `Register for ${title}`;
        document.getElementById('register-item-title').value = title;
        registerModal.style.display = 'flex';
    } else {
        document.getElementById('apply-modal-title').innerText = `Apply for ${title}`;
        document.getElementById('apply-item-title').value = title;
        applyModal.style.display = 'flex';
    }
});

// Close buttons
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    });
});

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-wrapper')) {
        e.target.style.display = 'none';
    }
});

// Form submissions
document.getElementById('apply-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('apply-item-title').value;
    alert(`Application submitted successfully for: ${title}`);
    applyModal.style.display = 'none';
    e.target.reset();
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('register-item-title').value;
    alert(`Registration successful for: ${title}`);
    registerModal.style.display = 'none';
    e.target.reset();
});
