document.getElementById('option1').addEventListener('click', function() {
    alert("Thông điệp B");
});

document.getElementById('option2').addEventListener('mouseenter', function() {
    this.style.position = 'absolute';
    this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
    this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
});
