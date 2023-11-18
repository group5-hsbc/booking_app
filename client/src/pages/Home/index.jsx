import { Container, CardHotel, CardPromo } from "@components";
import HeaderBanner from "./components/HeaderBanner";
const Home = () => {
  return (
    <>
      <HeaderBanner />
      <Container>
        <div className="w-full flex flex-col mt-20">
          <div className="w-full flex justify-center">
            <h1 className="text-xl font-semibold">Promo</h1>
          </div>
          <div className="w-full flex gap-10 overflow-x-scroll py-10">
            {Array.from({ length: 3 }, (_, index) => {
              return (
                <div key={index}>
                  <CardPromo />
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full flex flex-col mt-20">
          <div className="w-full flex justify-center">
            <h1 className="text-xl font-semibold">Hotel Lenora</h1>
          </div>
          <div className="w-full flex gap-10 overflow-x-scroll py-10">
            {Array.from({ length: 10 }, (_, index) => {
              return <CardHotel />;
            })}
          </div>
        </div>
        <div className="w-full flex flex-col mt-20">
          <div className="w-full flex justify-center">
            <h1 className="text-xl font-semibold">Hotel Malaka</h1>
          </div>
          <div className="w-full flex gap-10 overflow-x-scroll py-10">
            {Array.from({ length: 10 }, (_, index) => {
              return <CardHotel />;
            })}
          </div>
        </div>
        <div className="w-full flex flex-col mt-20">
          <div className="w-full flex justify-center">
            <h1 className="text-xl font-semibold">Hotel Iblis</h1>
          </div>
          <div className="w-full flex gap-10 overflow-x-scroll py-10">
            {Array.from({ length: 10 }, (_, index) => {
              return <CardHotel />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
