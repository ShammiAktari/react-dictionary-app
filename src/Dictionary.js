import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionay(){
    const [keyword, setKeyword] = useState ("");

function search(event){
    event.preventDefault();
    alert(`Searching for "${keyword}"`);
}

function handelKeywordChange(event){
    setKeyword(event.target.value);
}

    return(
        <div className="dictionary">
            <form onSubmit={search}>
            <h4>What word do you want to look up?</h4>
                <input type="search" placeholder="Search for a word" onChange={handelKeywordChange}/>

            </form>
        </div>
    );
}