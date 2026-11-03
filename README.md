# GalleryGeulis

Geulis-Glowing-Modis. Katalog dan dashboard mandiri berbasis React 19, Vite, dan Supabase. Branch produksi: **PROD**.

## Menjalankan

Node.js 22+ diperlukan. Dari root repository:

```powershell
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Katalog: http://127.0.0.1:4185/. Dashboard: /admin. Username **gallerygeulis**; password yang diminta pemilik sudah diset dan diverifikasi melalui Supabase Auth. Password dan secret key tidak disimpan di repository atau frontend.

## Data online

Tenant: `1efbba45-f966-4a22-9122-c7f18f565735`. Slug: `gallerygeulis`. Kontak pemesanan: **+6282343508606**. 6 produk blouse dari 7 foto asli GalleryGeulis, ditambah 4 listing Vuyama dengan 130 pilihan warna: Pashmina Bamboo Spandex, Zoya Instan, Paris Jadul, dan Pashmina Modal Viscose.

Dua foto Embroidered Denim Blouse menjadi satu produk dengan dua foto galeri. Harga, ukuran dan ketersediaan blouse belum diberikan, sehingga perlu konfirmasi admin. New Zoya Instan, Paris Voile Square, dan Cotton Viscose tidak dimasukkan sesuai arahan pemilik ketika sumber tidak tersedia.

Satu project Supabase dipakai bersama. Akun ini hanya menjadi anggota tenant sendiri; RLS menjaga draft, perubahan data, dan upload. Master/foto Vuyama tetap disimpan satu kali di library bersama. Listing menyimpan referensi, harga, stok, status dan override lokal; tidak mengunggah ulang foto supplier. Jangan menjalankan ulang migration/seed Novola.

## Alur belanja dan dashboard

Pencarian produk/bahan/warna, kategori, filter, urutan, favorit, detail lazy-loaded, foto per warna, pencarian warna, keranjang tersimpan per toko, jumlah, catatan, dan checkout WhatsApp. Harga, stok dan produk diperiksa kembali sebelum membuka draft WhatsApp. Harga belum pasti tidak dianggap gratis. Pesan belum dikirim otomatis; stok, pengiriman dan pembayaran dikonfirmasi admin.

Dashboard menyediakan ringkasan, CRUD produk/kategori, upload galeri/foto warna, stok, draft/publikasi, duplikasi, konflik revisi, aktivitas, pengaturan nama/tagline/WhatsApp, dan picker Katalog Vuyama. Produk dari picker dimulai sebagai draft.

## Brand

Soft pink dominan, aksen rose dan berry, motif bunga, foto editorial bertumpuk, dan logo lingkaran asli pengguna. Katalog GalleryGeulis diprioritaskan, dilengkapi hijab Vuyama yang dipilih pemilik.

Revisi 3 November 2026: warna pink utama **#F6B2BD** diambil dari sampel klien dan diterapkan pada navbar, hero toko, kartu sambutan dashboard, serta panel login. Foto depan memakai model **Zoya Instan** dan **Pashmina Bamboo Spandex** dari library Vuyama yang sudah digunakan toko. Foto model utama juga tampil di kartu sambutan dan login dashboard. Detail pemeriksaan: [qa/REVISION-2026-11-03.md](qa/REVISION-2026-11-03.md).

## Deployment Vercel

Import repository ini, pilih branch produksi **PROD**, root **.**, preset **Vite**, build **npm run build**, output **dist**. Rewrite untuk /admin sudah ada di vercel.json. Konfigurasi publik project bersama tersedia di src/backend-config.js agar deploy awal dapat berjalan. Override opsional: VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY, VITE_STORE_SLUG=gallerygeulis. Jangan menaruh secret/service-role key pada variabel VITE.

Perubahan katalog dari admin langsung tersimpan online tanpa deploy ulang. Kode yang di-push tidak otomatis membuktikan hosting Vercel sudah aktif.

## Verifikasi dan sumber

Lihat [hasil pemeriksaan](qa/RESULTS.md), [sumber produk](docs/SOURCES.md), dan [panduan admin](docs/PANDUAN-ADMIN.md). Mode ?preview=1 memakai fixture lokal; /admin?preview=1 hanya mengubah memori sesi. Pemakaian normal tidak memerlukan mode preview.
