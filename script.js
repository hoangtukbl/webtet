document.getElementById('option1').addEventListener('click', function() {
    alert("Thông điệp B");
});

document.getElementById('option2').addEventListener('click', function() {
    moveButton();
});

document.getElementById('option2').addEventListener('touchstart', function() {
    moveButton();
});

function moveButton() {
    var button = document.getElementById('option2');
    button.style.position = 'absolute';
    button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';
    button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';
}
