let count = 0;

const CountLabel = document.getElementById('CountLabel');
const Increasebtn = document.getElementById('Increasebtn');
const Decreasebtn = document.getElementById('Decreasebtn');
const Resetbtn = document.getElementById('Resetbtn');

const updateButtons = () => {
    Decreasebtn.disabled = count <= 0; 
};

Increasebtn.onclick = () => {
    count += 1;
    CountLabel.innerHTML = count;
    updateButtons();
};

Decreasebtn.onclick = () => {
    count -= 1;
    CountLabel.innerHTML = count;
    updateButtons();
};

Resetbtn.onclick = () => {
    count = 0;
    CountLabel.innerHTML = count;
    updateButtons();
};

updateButtons(); 
