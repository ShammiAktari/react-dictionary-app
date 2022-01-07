import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionay(){
    const [keyword, setKeyword] = useState ("");

    function getDictionaryResponse(response){
        console.log(response.data[0]);
    }

function search(event){
    event.preventDefault();

    //Dictionary API from https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(getDictionaryResponse);
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