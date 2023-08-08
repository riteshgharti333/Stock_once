import { useState , useEffect } from "react";
import "./homePage.scss";
import {useCrypto } from "../crptoContext/cryptoContect"
import { useParams } from "react-router-dom";

const HomePage = () => {

  const { id } = useParams();
  const [stock, setStocks] = useState(null);
  const { selectedCrypto } = useCrypto();
  
  useEffect(() => {
    const fetchSingleStock = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/stock/${id}`);
        // setStocks(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("Error fetching single stock:", error.message);
      }
    };

    fetchSingleStock();
  }, [id]);

  return (
    <div className="home">
      <div className="cryptoPrice">
        <p>Best Price to Trade</p>
        <h1>₹ 26,39,388</h1>
        <p>Average BTC/INR net price including commission</p>
      </div>

      <div className="cryptoName">
        <h1>BTC/INR</h1>
      </div>
  <div className="table">
      <table>
        <thead>
          <tr>
            <th>{selectedCrypto ? selectedCrypto.base_unit : "N/A"}</th>
            <th>Last Traded Price</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
            <th>volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>btc</td>
            <td>2514700</td>
            <td>2490001</td>
            <td>2514700</td>
            <td>5.18229</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default HomePage;
