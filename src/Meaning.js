import React from "react";
import Synonym from "./Synonym";

export default function Meaning(props){
    console.log(props.meaning);
    return (
        <div className="meaning">
            <h3 className="mt-4 text-decoration-underline"> {props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <p><strong>Definition:</strong>{definition.definition}
                        <br/>
                       <em><strong>Example:</strong>{definition.example}</em> 

                       <Synonym synonyms = {definition.synonyms}/>
                       </p>
                    </div>
                )
            })}
            

        </div>
    );
    
}