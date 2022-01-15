import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionay(props){
    const [keyword, setKeyword] = useState (props.defaultKeyword);
    const [results, setResults] = useState (null);
    const [loaded,setLoaded] = useState(false);
    function getDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function search(){
//Dictionary API from https://dictionaryapi.dev/
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
console.log(apiUrl);
axios.get(apiUrl).then(getDictionaryResponse);
    }

function handleSearch(event){
    event.preventDefault();

    search();
}

function handelKeywordChange(event){
    setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}

if (loaded){
    return(
        <div className="Dictionary">
            <section>
            <form onSubmit={handleSearch}> 
            <h4>What word do you want to look up?</h4>
                <input type="search" placeholder="Search for a word" onChange={handelKeywordChange}
                defaultValue={props.defaultKeyword}/>
                
            </form>
            <div className="hint">
                i.e. star, planet, cloud, weather 
            </div>
            
            </section>
            <Results results={results}/>
        </div>
       
        
        
    );
}else{
    load();
    return "Loading..."
}
}
    