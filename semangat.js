window.onload = function() {
    const name = localStorage.getItem('userName'); // Ambil nama dari localStorage
    if (name) {
        document.getElementById('greeting').textContent = `Tetap Semangat, ${name}!`;
    }
}
