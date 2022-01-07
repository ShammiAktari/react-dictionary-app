import React from "react";

export default function Meaning(props){
    console.log(props.meaning);
    return (
        <div className="meaning">
            <h3 className="mt-4 text-decoration-underline"> {props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <br/>
                       <em>{definition.example}</em> 
                    </div>
                )
            })}
            

        </div>
    );
    
}