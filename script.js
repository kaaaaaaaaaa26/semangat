document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form submit default
    const name = document.getElementById('nameInput').value;
    localStorage.setItem('userName', name); // Simpan nama di localStorage
    window.location.href = 'semangat.html'; // Arahkan ke halaman penyemangat
});
