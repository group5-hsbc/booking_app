import React from "react";
import { Banner, Container } from "../../components";
const Tentang = () => {
  return (
    <>
      <Banner page={"Detail"} />
      <Container>
        <div className="flex justify-between px-4 mb-5">
          <h1 className="text-lg font-semibold">Tentang</h1>
          <ul>
            <li className="text-blue-900 hover:text-black cursor-pointer text-lg">
              Selengkapnya
            </li>
          </ul>
        </div>
        <div className="px-4">
          <form>
            <p>
              Berlokasi sejauh 10 menit dari Paskal Hyper Square, Lenora Hotel
              menawarkan penginapan bintang 2 yang menyediakan area longue
              bersama dan fasilitas parkir gratis. Selama menginap, kamu bisa
              mengakses WIFI gratis yang tersedia di seluruh area hotel agar
              tetap terhubung. Didekorai dengan desain yang minimalis dari
              perabotan kayu berwarna cerah, kamar ber-ACnya dilengkapi dengan
              TV layar datar dan meja kerja.
            </p>
          </form>
        </div>
        <div className="flex flex-col px-4 py-5">
          <div className="w-full mb-2">
            <p>Tanggal Pemesanan</p>
          </div>
          <input
            type="date"
            placeholder="Full name"
            className="h-10 bg-gray-100 px-2 rounded-md mb-5"
          />

          <div className="w-full mb-2">
            <p>Jumlah Tamu</p>
          </div>
          <input
            type="Number"
            placeholder="Number"
            className="h-10 bg-gray-100 px-2 rounded-md mb-5"
          />

          <button
            type="submit"
            className="flex-none self-end text-center w-32 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          >
            Pesan
          </button>
        </div>
      </Container>
    </>
  );
};

export default Tentang;
