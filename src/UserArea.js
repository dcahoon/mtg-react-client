import { useState, useEffect } from "react"
import SearchDisplay from "./SearchDisplay"
import DecksDisplay from "./DecksDisplay"
import ListOfCards from "./ListOfCards"


export default function UserArea() {

    const [decks, setDecks] = useState([])
    const [currentDeckId, setCurrentDeckId] = useState("")
    const [currentDeck, setCurrentDeck] = useState("")

    useEffect(() => {

        async function getDecksFromApi() {
            try {
                const response = await fetch("https://safe-fortress-24111.herokuapp.com/decks/1")
                const decksFromApi = await response.json()
                setDecks(decksFromApi.data)
            } catch (error) {
                throw error
            }
        }
        getDecksFromApi()

    }, [])

    return (
        <div>
            <h1>User Area</h1>
            <div className="row">
                <div className="col-3">
                    <DecksDisplay 
                        decks={decks} 
                        setCurrentDeck={setCurrentDeck}
                        setCurrentDeckId={setCurrentDeckId} 
                    />
                </div>
                <div className="col-3">
                    <ListOfCards 
                        currentDeck={currentDeck} 
                        setCurrentDeck={setCurrentDeck} 
                        currentDeckId={currentDeckId} 
                    />
                </div>
                <div className="col-6">
                    <SearchDisplay 
                        currentDeck={currentDeck} 
                        setCurrentDeck={setCurrentDeck} 
                    />
                </div>
            </div>
        </div>
        
    )
}
