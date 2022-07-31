import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./Hooks/useFetch";

function App() {
  const [city, setCity] = useState("");
  const url = `https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=${city}`;
  const [data, fetchData] = useFetch(url);
  // let flag = false;
  // if (city !== "") {
  //   flag = true;
  // } else {
  //   flag = false;
  // }

  useEffect(() => {
    fetchData();
  }, [city]);

  console.log(data);
  return (
    <div className="App">
      <div className="inputArea">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button onClick={() => fetchData()}>Search City</button>
      </div>
      {data.location ? (
        <>
          <div className="Card">
            <div className="upper">
              <div className="first">
                <h1>{data.location && data.location.name}</h1>
                <p className="para-1">
                  {data.location && data.location.localtime}
                </p>
                <img src={data.current && data.current.condition.icon} alt="" />
                <p className="para-2">
                  {data.current && data.current.condition.text}
                </p>
              </div>
              <div className="second">
                <p className="para-3">
                  {data.current && data.current.temp_c} °C
                  <p className="para-4">
                    /{data.current && data.current.temp_f} °F
                  </p>
                </p>
              </div>
            </div>
            <div className="lower">
              <div className="details">
                <section className="items">
                  <h6 className="details-para">NOW</h6>
                  <img
                    src={data.current && data.current.condition.icon}
                    alt=""
                  />
                  <h6 className="details-para">
                    {data.current && data.current.temp_c} °C
                  </h6>
                </section>
                <section className="items">
                  <h6 className="details-para">11AM</h6>
                  <img
                    src={
                      data.forecast &&
                      data.forecast.forecastday[0].hour[11].condition.icon
                    }
                    alt=""
                  />
                  <h6 className="details-para">
                    {data.forecast &&
                      data.forecast.forecastday[0].hour[11].temp_c}
                    °C
                  </h6>
                </section>
                <section className="items">
                  <h6 className="details-para">12PM</h6>
                  <img
                    src={
                      data.forecast &&
                      data.forecast.forecastday[0].hour[12].condition.icon
                    }
                    alt=""
                  />
                  <h6 className="details-para">
                    {data.forecast &&
                      data.forecast.forecastday[0].hour[12].temp_c}{" "}
                    °C
                  </h6>
                </section>
                <section className="items">
                  <h6 className="details-para">1PM</h6>
                  <img
                    src={
                      data.forecast &&
                      data.forecast.forecastday[0].hour[13].condition.icon
                    }
                    alt=""
                  />
                  <h6 className="details-para">
                    {data.forecast &&
                      data.forecast.forecastday[0].hour[13].temp_c}{" "}
                    °C
                  </h6>
                </section>
                <section className="items">
                  <h6 className="details-para">2PM</h6>
                  <img
                    src={
                      data.forecast &&
                      data.forecast.forecastday[0].hour[14].condition.icon
                    }
                    alt=""
                  />
                  <h6 className="details-para">
                    {data.forecast &&
                      data.forecast.forecastday[0].hour[14].temp_c}{" "}
                    °C
                  </h6>
                </section>
                <section className="items">
                  <h6 className="details-para">3PM</h6>
                  <img
                    src={
                      data.forecast &&
                      data.forecast.forecastday[0].hour[15].condition.icon
                    }
                    alt=""
                  />
                  <h6 className="details-para">
                    {data.forecast &&
                      data.forecast.forecastday[0].hour[15].temp_c}{" "}
                    °C
                  </h6>
                </section>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="Card">
            <h3
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "white",
                fontSize: "2rem",
              }}
            >
              No data found !
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
