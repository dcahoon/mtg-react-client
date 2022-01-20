/* 
    Children: CardSearchForm, CardGroupDisplay
*/
import { useState } from "react"
import CardSearchForm from "./CardSearchForm"
import CardGroupDisplay from "./CardGroupDisplay"

export default function SearchDisplay({ setCurrentDeck, currentDeck }) {
    
    const [results, setResults] = useState({})
    
    return (
        <div>
            <CardSearchForm results={results} setResults={setResults} />
            <CardGroupDisplay results={results} setCurrentDeck={setCurrentDeck} currentDeck={currentDeck} />
        </div>
    )
}