import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto py-10 my-20">
      <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-10">
        <div className="bg-red-500 sm:w-full md:w-1/2 lg:w-1/2">
          <h1 className="text-xl text-white font-bold text-center mt-20">
            Belum Punya Akun?
          </h1>
          <p className="text-lg text-white font-medium text-center px-32 mt-10">
            Jika anda belum mempunyai akun mohon mendaftar terlebih dahulu
          </p>
          <div className="mt-5 text-center py-10">
            <a
              href="register"
              className="inline-block px-5 py-5 mt-20 h-16 text-white rounded-lg shadow-lg font-semibold border border-white hover:underline"
            >
              BUAT AKUN
            </a>
          </div>
        </div>
        {/* login form start */}
        <div className=" sm:w-full md:w-1/2 lg:w1/2">
          <div className="mt-20 mb-10 mx-auto">
            <p className="text-3xl text-center font-semibold">Selamat Datang</p>
            <p className="text-3xl text-center font-semibold">Silahkan Login</p>
          </div>
          <form action="login" method="GET" className="my-5">
            <label htmlFor="name">
              <span className="block text-lg font-semibold mb-2">Nama</span>
              <input
                type="text"
                id="name"
                placeholder="Masukan Nama"
                className="px-3 py-2 mb-5 border rounded-md w-full h-14"
              />
            </label>
            <label htmlFor="password">
              <span className="block text-lg font-semibold mb-2">Password</span>
              <input
                type="password"
                id="password"
                placeholder="Masukan Password"
                className="px-3 py-2 mb-5 border rounded-md w-full h-14"
              />
            </label>
            <button className="px-3 py-2 w-full h-14 mt-10 mb-8 text-sky-600 text-lg font-semibold border border-blue-600 rounded-md hover:underline ">
              MASUK
            </button>
          </form>
        </div>
        {/* login form end */}
      </div>
    </div>
  );
};

export default Login;
