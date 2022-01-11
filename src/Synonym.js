import React from "react";

export default function Synonym (props){
    
    if(props.synonyms){

        return(
            <div className="Synonyms">
            {props.synonyms.map(function(synonym, index){
                return (<li key={index}>{synonym}</li>)
            })}
            </div>
        );
    }else{
        return null;
    }
}