// Input jumlah penjualan
var penjualan = 600000; // Ganti dengan jumlah penjualan yang sesuai

// Inisialisasi variabel jasa dan komisi
var jasa = 0;
var komisi = 0;

// Menghitung komisi berdasarkan jumlah penjualan
if (penjualan <= 200000) {
    jasa = 10000;
    komisi = penjualan * 0.1;
} else if (penjualan > 200000 && penjualan <= 500000) {
    jasa = 20000;
    komisi = penjualan * 0.15;
} else if (penjualan > 500000) {
    jasa = 30000;
    komisi = penjualan * 0.20;
}

// Menghitung total pendapatan salesman
var totalPendapatan = jasa + komisi;

// Menampilkan hasil
console.log("Jumlah Penjualan: Rp. " + penjualan);
console.log("Uang Jasa: Rp. " + jasa);
console.log("Uang Komisi: Rp. " + komisi);
console.log("Total Pendapatan: Rp. " + totalPendapatan);