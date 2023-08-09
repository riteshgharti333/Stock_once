import { useEffect, useState } from "react";
import "./homePage.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [stock, setStock] = useState("");

  useEffect(() => {
    const getStock = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/stocks/" + path);
        setStock(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getStock();
  }, [path]);

  return (
    <div className="home">
      <div className="cryptoPrice">
        <p>Best Price to Trade</p>
        <h1>{stock.buy}</h1>
        <p>Average BTC/INR net price including commission</p>
      </div>

      <div className="cryptoName">
        <h1>{stock.name}</h1>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Traded Price</th>
              <th>Buy Price</th>
              <th>Sell Price</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stock.base_unit}</td>
              <td>{stock.last}</td>
              <td>{stock.buy}</td>
              <td>{stock.sell}</td>
              <td>{stock.volume}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
