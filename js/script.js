document.addEventListener('DOMContentLoaded', function () {
    // Meminta input nama dari pengguna
    const userName = prompt("Masukkan nama Anda:");
    if (userName && userName.trim() !== "") {
        // Mengganti teks nama di elemen dengan ID name
        document.getElementById('greeting').innerText = userName;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Mengatur tanggal saat ini
    const today = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short'
    };
    const formattedDate = today.toLocaleDateString('en-US', options).replace(',', '');

    document.getElementById('result-current').innerText = formattedDate;
});

document.querySelector('.btn').addEventListener('click', function () {
    // Mengambil nilai input
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('pesan').value;

    let isValid = true;

    // Validasi input
    if (!name) {
        document.getElementById('error-name').innerText = 'Nama tidak boleh kosong';
        isValid = false;
    } else {
        document.getElementById('error-name').innerText = '';
    }

    if (!date) {
        document.getElementById('error-date').innerText = 'Tempat lahir tidak boleh kosong';
        isValid = false;
    } else {
        document.getElementById('error-date').innerText = '';
    }

    if (!gender) {
        document.getElementById('error-gender').innerText = 'Jenis gender tidak boleh kosong';
        isValid = false;
    } else {
        document.getElementById('error-gender').innerText = '';
    }

    if (!message) {
        document.getElementById('error-message').innerText = 'Pesan tidak boleh kosong';
        isValid = false;
    } else {
        document.getElementById('error-message').innerText = '';
    }

    // Jika semua input valid, tampilkan hasil
    if (isValid) {
        document.getElementById('result-name').innerText = name;
        document.getElementById('result-date').innerText = date;
        document.getElementById('result-gender').innerText = gender ? gender.value : '';
        document.getElementById('result-pesan').innerText = message;

        // Reset form
        document.getElementById('form-message').reset();
    }
});