function updateVisitorCount() {
    // Ambil jumlah kunjungan dari localStorage
    let count = localStorage.getItem('visitorCount');

    // Jika belum ada, inisialisasi dengan 0
    if (!count) {
        count = 0;
    } else {
        count = parseInt(count);
    }

    // Tambah jumlah kunjungan
    count += 1;

    // Simpan kembali ke localStorage
    localStorage.setItem('visitorCount', count);

    // Tampilkan jumlah kunjungan
    document.getElementById('visitor-count').innerText = count;
}

// Update count saat halaman dimuat
window.onload = updateVisitorCount;