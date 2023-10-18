import test from "../../assets/images/banner-home-1.svg";
const Home = () => {
  return (
    <section className="w-full h-max">
      <div
        style={{
          backgroundImage: `url(${test})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="h-[800px] flex w-full flex-col justify-center items-center gap-8"
      >
        <h1 className="text-[3rem] lg:text-[4.5rem] font-bold text-white text-center max-w-[1200px] shadow-sm">
          Welcome To The Continental Hotel
        </h1>
        <div>
          <button className="px-5 py-2 rounded-full bg-[#148EFF] text-white font-medium shadow-md tracking-wide">
            Order Here
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
