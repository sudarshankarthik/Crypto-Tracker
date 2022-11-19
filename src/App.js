import React from "react";
import Nav from "./files/nav";
import Hero from "./files/hero";
import Explore from "./files/explore";
import './index.css'
import Signup from "./files/signup";

import {useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change


  return (
    
    

    <div>
      <Nav />
      <div className="app">
         <div className="hero" id="hero"><Hero /></div>
         <div className="explore" id="explore"><Explore /></div>
         <div className="signup" id="signup"><Signup /></div>         
      </div>
    </div>
  );
}

export default App;
