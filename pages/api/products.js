import daftarProduk from "../../data/products.json";

export default function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", ["GET"]);
    return response.status(405).json({
      success: false,
      message: `Method ${request.method} tidak diizinkan. Gunakan GET.`,
    });
  }

  const hasil = {
    success: true,
    count: daftarProduk.length,
    data: daftarProduk,
  };

  response.setHeader("Content-Type", "text/plain; charset=utf-8");
  return response.status(200).send(JSON.stringify(hasil, null, 2));
}
