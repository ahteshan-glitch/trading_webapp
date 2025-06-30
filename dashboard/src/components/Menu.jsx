import React,{useState} from "react";
import { Link } from "react-router-dom";



const Menu = () => {
  const [menu,setMenu]=useState(0)
const [profile,setProfile]=useState(false)

const menuClick=(index)=>{
  setMenu(index)
}

const profileClick=()=>{
  setProfile(!profile)
}
const menuClass="menu";
const activeMenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="../logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link onClick={()=>menuClick(0)} to="/" style={{textDecoration:"none"}}><p className={menu===0?activeMenuClass:menuClass} >Dashboard</p></Link>
          </li>
          <li>
            <Link onClick={()=>menuClick(1)} to="/orders" style={{textDecoration:"none"}}><p className={menu===1?activeMenuClass:menuClass} >Orders</p></Link>
          </li>
          <li>
            <Link onClick={()=>menuClick(2)} to="/holdings" style={{textDecoration:"none"}}><p className={menu===2?activeMenuClass:menuClass} >Holdings</p></Link>
          </li>
          <li>
            <Link onClick={()=>menuClick(3)} to="/positions" style={{textDecoration:"none"}}><p className={menu===3?activeMenuClass:menuClass} >Positions</p></Link>
          </li>
          <li>
            <Link onClick={()=>menuClick(4)} to="/funds" style={{textDecoration:"none"}}><p className={menu===4?activeMenuClass:menuClass} >Funds</p></Link>
          </li>
          <li>
            <Link onClick={()=>menuClick(5)} to="/apps" style={{textDecoration:"none"}}><p className={menu===5?activeMenuClass:menuClass} >Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={profileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
