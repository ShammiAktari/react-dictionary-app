import React from "react";
import Meaning from "./Meaning";

export default function results(props){
    if(props.results){
    return(
<div className="results">
<h2 className="mt-4 fw-bolder">{props.results.word}</h2>
<br/>
{props.results.meanings.map(function(meaning, index){
    return(
      <div key={index}> 
          <Meaning meaning = {meaning} />
      </div>
        
    );
})}
        </div>
);
        }else{
            return null;
        }
        
}