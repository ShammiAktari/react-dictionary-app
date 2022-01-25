import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionay(props){
    const [keyword, setKeyword] = useState (props.defaultKeyword);
    const [results, setResults] = useState (null);
    const [loaded,setLoaded] = useState(false);
    const [photos,setPhotos] = useState(false)

    
    

    function getDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function getPexelsResponse(response){
        setPhotos(response.data.photos); 
    }

    
    function search(){
//Dictionary API from https://dictionaryapi.dev/
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

axios.get(apiUrl).then(getDictionaryResponse);


let pexelsApiKey = "563492ad6f91700001000001cd1a90bd142a4437a3761bf90fe26d59";
let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
let headers = { Authorization: `Bearer ${pexelsApiKey}`};

axios.get(pexelsApiUrl, { headers: headers }).then(getPexelsResponse);
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
            <Photos photos={photos}/>
        </div>
       
        
        
    );
}else{
    load();
    return "Loading..."
}
}
    