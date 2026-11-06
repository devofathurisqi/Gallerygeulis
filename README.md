# GalleryGeulis

Geulis-Glowing-Modis. Katalog dan dashboard mandiri berbasis React 19, Vite, dan Supabase. Branch produksi: **PROD**.

## Kompatibilitas upload Safari/iPhone - 6 November 2026

Encoder WebP native tidak selalu tersedia walau browser dapat menampilkan WebP. Jika canvas menghasilkan PNG/null atau melempar error, aplikasi kini memuat encoder libwebp WebAssembly dari asset deployment sendiri, lalu melanjutkan optimasi otomatis. Tidak meminta pengguna mengganti browser. Codec cadangan memakai build non-SIMD satu thread tanpa SharedArrayBuffer/COOP/COEP dan hanya dimuat saat diperlukan. Worker dibangun sebagai ES module agar chunk codec lazy dapat dimuat.

Target output 950.000 byte, aman di bawah 1 MB desimal dan bucket 1 MiB; input tetap tanpa batas byte/megapiksel aplikasi. Kualitas 90/86/82, orientasi dan alpha dipertahankan. Tidak ada perubahan database, bucket, tenant atau format URL foto. API tetap mengirim WebP asli ke folder toko. Notice dependency tersedia pada public/legal.

Validasi: 39 unit test dan production build lulus. Engine yang identik diverifikasi melalui Chrome desktop/Android, WebKit mobile, jalur HTML Image tanpa Worker/OffscreenCanvas/createImageBitmap, native PNG/encoder exception, WASM build produksi, foto asli klien, foto 60 MB/80 MP, alpha, penyesuaian resolusi dan retry setelah download WASM gagal. WebKit berjalan pada Windows; kondisi encoder PNG dipaksakan untuk menguji fallback iPhone. Ini bukan klaim pengujian iPhone fisik. Rincian: [qa/UPLOAD-SAFARI-2026-11-06.md](qa/UPLOAD-SAFARI-2026-11-06.md).

## Upload foto otomatis — 5 November 2026

Dashboard menerima foto asli JPG, PNG, dan WebP tanpa batas ukuran file atau megapiksel yang ditetapkan aplikasi. Klien tidak perlu mengompres manual. Berlaku untuk galeri produk dan foto setiap varian warna; jumlah galeri tetap delapan foto per produk.

Optimasi berada di aplikasi sebelum transfer ke Supabase, menggunakan background worker jika didukung dan jalur native browser sebagai cadangan. Header dibaca terlebih dahulu agar decoder dapat mengecilkan foto besar; orientasi kamera, rasio aspek dan transparansi dipertahankan. Target sisi terpanjang 2.048 px tanpa memperbesar foto kecil. Encoder mencoba kualitas WebP 90/86/82%; jika masih berat, resolusi disesuaikan otomatis dengan tetap memakai sumber decode yang sama. Browser/perangkat tetap harus mampu membaca file aslinya.

Hanya hasil WebP maksimal 1 MiB yang dikirim ke bucket catalog-images, sehingga batas internal Storage tidak menjadi pekerjaan klien. Tidak ada perubahan database/RLS, bucket, data toko, foto lama, atau master Vuyama. Path UUID baru dan cache satu tahun tetap dipakai. Dashboard menampilkan status penyiapan/pengunggahan dan menahan penyimpanan produk sampai upload selesai.

Engine: src/image-metadata.js, src/image-optimizer.js, src/image-worker.js, src/image-upload.js. Integrasi: src/api.js dan src/Admin.jsx. Uji regresi: tests/image-upload.test.mjs. Lihat [verifikasi upload](qa/UPLOAD-2026-11-05.md).

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
