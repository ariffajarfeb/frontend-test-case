const BASE_URL = "https://jsonplaceholder.typicode.com";

async function ambilData(endpoint, pesanError) {
  const respon = await fetch(`${BASE_URL}${endpoint}`);

  if (!respon.ok) {
    throw new Error(pesanError);
  }

  return respon.json();
}

export function ambilArtikel() {
  return ambilData("/posts", "Gagal mengambil data artikel.");
}

export function ambilPengguna() {
  return ambilData("/users", "Gagal mengambil data pengguna.");
}

export function ambilDetailPengguna(id) {
  return ambilData(`/users/${id}`, "Gagal mengambil detail pengguna.");
}
