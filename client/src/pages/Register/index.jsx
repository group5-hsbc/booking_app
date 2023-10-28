import React from "react";

const Register = () => {
  return (
    <section className="container w-full mx-auto py-10">
      <div className="md:w-full">
        <h1 className="text-center text-lg font-black p-10">
          Selamat Datang Silahkan Daftar
        </h1>
        <div className="max-w-full border border-slate-200 rounded-md mx-auto p-5">
          <form action="register" method="POST" className="flex flex-col">
            <label htmlFor="name">
              <span className="block text-lg font-semibold mb-1">Nama</span>
              <input
                type="text"
                id="name"
                placeholder=""
                className="px-3 py-2 border shadow w-full "
              />
            </label>
            <label htmlFor="email">
              <span className="block text-lg font-semibold mb-1 mt-5">
                Email
              </span>
              <input
                type="email"
                id="email"
                placeholder=""
                className="px-3 py-2 border shadow w-full "
              />
            </label>
            <label htmlFor="password">
              <span className="block text-lg font-semibold mb-1 mt-5">
                Password
              </span>
              <input
                type="password"
                id="password"
                placeholder=""
                className="px-3 py-2 border shadow w-full "
              />
            </label>
            <label htmlFor="phone">
              <span className="block text-lg font-semibold mb-1 mt-5">
                Telephone
              </span>
              <input
                type="number"
                id="number"
                placeholder=""
                className="px-3 py-2 border shadow w-full "
              />
            </label>
            <label htmlFor="alamat">
              <span className="block text-lg font-semibold mb-1 mt-5">
                Alamat
              </span>
              <textarea
                type="text"
                id="text"
                placeholder=""
                className="px-3 py-2 border shadow w-full h-64"
              />
            </label>
            <button className="flex-none w-24 bg-white text-sky-400 font-semibold border border-sky-500 rounded-sm px-5 py-2 mt-2  hover:underline sm:self-start md:self-end lg:self-end">
              Daftar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
