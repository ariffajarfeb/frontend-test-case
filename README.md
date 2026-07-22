# Test Case Frontend

Project front-end test case menggunakan Next.js Pages Router. Implementasi mencakup static generation, daftar pengguna, dynamic route, form dengan React state, galeri gambar menggunakan `next/image`, dan API Route produk.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## Route

| Route | Keterangan |
| --- | --- |
| `/articles` | Soal 1 - artikel dengan Static Generation |
| `/` | Soal 2 - daftar pengguna |
| `/users/[id]` | Detail pengguna dengan Dynamic Route dan SSR |
| `/soal-3` | Halaman produk dari API Route lokal |
| `/api/products` | API Route produk |
| `/register` | Soal 4 - form pendaftaran dengan React state |
| `/gallery` | Soal 5 - galeri gambar dengan `next/image` |

## Struktur folder

- `pages/` berisi route Next.js dan data fetching.
- `features/` berisi tampilan utama per soal.
- `components/layout/` berisi komponen layout yang dipakai lintas halaman.
- `lib/api/` berisi fungsi request ke JSONPlaceholder.
- `lib/data/` berisi data statis kecil untuk UI.
- `data/` berisi data JSON untuk API Route lokal.
- `styles/` berisi CSS Module dan CSS global.

## Script

```bash
npm run dev
npm run lint
npm run build
npm start
```
