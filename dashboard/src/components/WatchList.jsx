import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import DoughNutGraph from "./DoughGraph"
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext"; // 👈 import context
const labels=watchlist.map((subArray)=>subArray["name"])
const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data:watchlist.map((stock)=>stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
        <DoughNutGraph data={data}/>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [watchListAction, setWatchListAction] = useState(false);

  const enter = () => setWatchListAction(true);
  const leave = () => setWatchListAction(false);

  return (
    <li onMouseEnter={enter} onMouseLeave={leave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
      </div>

      <div className="itemInfo">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDown className="down" />
        ) : (
          <KeyboardArrowUp className="up" />
        )}
        <span className="price">{stock.price}</span>
      </div>

      {watchListAction && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext); // ✅ access context

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={() => openBuyWindow(uid)}>Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};

export default WatchList;
