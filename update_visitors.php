<?php
$file = 'visitors.txt';

// Cek apakah file ada, jika tidak buat file dan isi dengan 0
if (!file_exists($file)) {
    file_put_contents($file, 0);
}

// Ambil jumlah kunjungan dari file
$count = file_get_contents($file);

// Update jumlah kunjungan
$new_count = $count + 1;
file_put_contents($file, $new_count);

echo $new_count;
?>