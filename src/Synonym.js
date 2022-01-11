import React from "react";

export default function Synonym (props){
    console.log(props.synonyms);
    if(props.synonyms){

        return(
            <div className="synonyms">
            {props.synonyms.map(function(synonym, index){
                return (<li key={index}>{synonym}</li>)
            })}
            </div>
        );
    }else{
        return null;
    }
}