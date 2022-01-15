import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";


export default function Meaning(props){
   console.log(props.meaning);
    return (
        <div className="Meaning">
                <section>
            <h3 className="text-decoration-underline"> 
                {props.meaning.partOfSpeech}
                </h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <div className="definition">
                        {definition.definition}</div>
                        <div className="example">
                      <em> {definition.example}</em></div>
                       

                       <Synonym synonyms = {definition.synonyms}/>
                    </div>
                );
            })}
            </section>
            
        </div>
    );
    
}
            