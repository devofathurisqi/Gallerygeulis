# Hasil pemeriksaan GalleryGeulis

Tanggal: 1 November 2026 (Asia/Jakarta).

- **24 tes otomatis lulus**: validasi data, jumlah/stok/varian, harga eceran dan seleksi produk, keranjang campuran harga diketahui/belum pasti, WhatsApp, harga berubah, produk ditarik, dan sparse override master.
- **Production build lulus**, termasuk pemeriksaan aset responsive, seluruh referensi master/shared assets, tidak ada salinan foto supplier pada deployment, SDK Auth tidak di-preload pelanggan, dan tidak ada password/secret dalam bundle.
- Akun admin yang diminta berhasil login melalui Supabase Auth dan form browser /admin. Dashboard menampilkan data aktual: **10 produk / 4 kategori / 130 pilihan warna**.
- Pengujian backend online: CRUD produk/kategori, draft tidak dapat dibaca anonim atau toko lain, update/delete lintas tenant ditolak, konflik revision ditolak, kategori terpakai terlindungi, upload foto folder sendiri berhasil, upload lintas tenant ditolak, dan audit tersedia. Record/foto QA sementara dibersihkan. Rincian: hosted-results.json.
- Browser desktop dan HP: logo, hero, kategori, harga, pilihan warna dan keranjang diperiksa. Pencarian Bamboo Spandex → Blush berhasil; varian yang dipilih masuk keranjang dengan harga **Rp75.000**.
- Checkout nyata berhasil membuka halaman draft api.whatsapp.com ke **6282343508606**, berisi nama brand, produk, warna, jumlah, harga dan subtotal, serta catatan. Tidak ada pesan yang dikirim. Keranjang dan sesi login uji sudah dikosongkan/keluar.
- Editor produk GalleryGeulis memuat master dan seluruh 20 warna Bamboo Spandex. Dashboard kedua brand menggunakan palet dan kontak masing-masing.
- Novola dan master bersama tidak diubah oleh onboarding; masing-masing admin hanya memiliki membership toko sendiri.

## Bukti visual

- home-desktop.jpg
- home-mobile.jpg
- admin-mobile.jpg
- cart-mobile.jpg

## Batas operasional

Enam blouse belum memiliki harga/ukuran resmi; pelanggan diminta konfirmasi admin. New Zoya Instan, Paris Voile Square, dan Cotton Viscose dikeluarkan sesuai arahan pemilik karena sumber tidak tersedia.

Seluruh stok awal perlu konfirmasi admin. Checkout WhatsApp tidak mereservasi stok atau menerima pembayaran. Pemeriksaan ini tidak mengklaim skor Lighthouse atau sinkronisasi stok pemasok secara otomatis. Push GitHub bukan bukti deployment hosting; petunjuk Vercel ada di README.

Pemeriksaan responsif terukur: 360, 768, dan 1366 px. Ketiga lebar tidak memiliki overflow horizontal atau gambar rusak pada gambar yang telah dimuat. Lihat responsive-results.json.
