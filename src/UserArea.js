import { useState, useEffect } from "react"
import SearchDisplay from "./SearchDisplay"
import DecksDisplay from "./DecksDisplay"
import ListOfCards from "./ListOfCards"
const axios = require("axios")


export default function UserArea() {

    const [decks, setDecks] = useState([])
    const [currentDeckId, setCurrentDeckId] = useState("")
    const [currentDeck, setCurrentDeck] = useState("")

    useEffect(() => {

        async function getDecksFromApi() {
            try {
                const response = await fetch("http://localhost:5000/decks")
                const decksFromApi = await response.json()
                console.log(decksFromApi)
                setDecks(decksFromApi.data)
            } catch (error) {
                throw error
            }
        }
        getDecksFromApi()

    }, [])

    useEffect(() => {
        async function getCardsInDeck() {
            if (currentDeckId) {
                try {
                    console.log("deckid", currentDeckId)
                    const response = await fetch(`http://localhost:5000/decks-cards/1`)
                    const cardsInDeck = await response.json()
                    console.log("cards in deck", cardsInDeck)
                    setCurrentDeck(cardsInDeck)
                } catch (error) {
                    throw error
                }
            } else {
                return
            }
        }
        getCardsInDeck()
    }, [currentDeckId])

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
