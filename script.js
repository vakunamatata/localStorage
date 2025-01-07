const nameInput = document.getElementById('nameInput');
const saveNameButton = document.getElementById('saveNameButton');

saveNameButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        localStorage.setItem('userName', name);
        res.textContent = ` ${name}`;
        nameInput.value = ''; 
    }
});

