import "./App.css";
import data from "./data.json";
function App() {
  return (
    <>
      <div className="w-full flex flex-col gap-5 p-6 ">
        {data.map((phoneDetails, index) => (
          <div key={index} className="flex bg-[#282828] p-6 rounded-lg">
            {/* image */}
            <div className="w-1/4 flex items-center justify-center">
              <img src={phoneDetails.image} alt=" " />
            </div>
            {/*  details */}
            <div className="flex-1">
              <h1>{phoneDetails.title}</h1>
              <p className="my-1">
                {phoneDetails.rating} | {phoneDetails.reviews}
                <ul className="my-3">
                  {phoneDetails.details.map((item, index) => (
                    <li className="list-disc ml-6" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-green-500">
                  {phoneDetails.offers.exchangeOffer}
                </p>
                <p className="text-green-300 mt-2">
                  {phoneDetails.offers.bankOffer}
                </p>
              </p>
            </div>
            {/*  pricing */}
            <div className="flex flex-col items-end">
              <p className="text-2xl font-bold">{phoneDetails.price}</p>
              <p className="line-through text-xl">
                {phoneDetails.originalPrice}
              </p>
              <p className="text-green-500 text-lg">{phoneDetails.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
