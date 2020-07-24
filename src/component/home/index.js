import React, { useState } from "react";
import './style.css';


function Home(props) {
    const [search, setSearch] = useState(false);
    const openSearch = () => { setSearch(true); }
    const searchClass = search ? 'searchinput' : 'searchinput hide';
    return (
        <div style={{ backgroundColor: "blue" }}>
            <h1>hello i am chloe
                {props.children} 
            </h1>
            <form onSubmit={()=>{alert("check")}}> 
                <input className={searchClass} type="text" palceholder="checkcheckcheck" />
                <img className="icon" onClick={openSearch}   alt="hello" src={require("../../assets/lovepeach.png")}></img>
            </form>
       
        </div>
        
)
}
export default Home;