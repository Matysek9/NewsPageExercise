import React from "react";
import styles from "./Navigation.module.css";
import { useState } from "react";
import "./NavigationSide.css"

const Navigation = () => {
  const [state, setState] = useState(false)
  const [active, setActive] = useState("")

  function show(){
   if (state){
     setState(false)
     setActive("")
     console.log("act")
    
   }
   else{
     setState(true)
     setActive("active")
   } 
    
  }

  return (
    <div className={styles.navBar}>
      <div className={`sideMenu ${active} `} id="menu">
        <img src="assets/images/icon-menu-close.svg" alt="close" className="closeBtn" onClick={show} />
        <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul></div>
      <img src="/assets/images/logo.svg" alt="logo" className={styles.smallerIcon}/>
      <img src="/assets/images/icon-menu.svg" alt="menu" className={styles.menu} onClick={show}/>
      <ul className={styles.menuFullList}>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </div>
  );
};

export default Navigation;
