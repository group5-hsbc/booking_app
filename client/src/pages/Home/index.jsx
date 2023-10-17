const Home = () => {
  const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;
  return (
    <div className="text-red-500">
      Home
      <h1>{BASE_URL_API}</h1>
    </div>
  );
};

export default Home;
