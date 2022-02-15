import { useState, useEffect } from "react"
import SearchDisplay from "./SearchDisplay"
import DecksDisplay from "./DecksDisplay"
import ListOfCards from "./ListOfCards"
import { listDecks } from "./utils/api"
import { Link } from "react-router-dom"


export default function UserArea() {

    const [decks, setDecks] = useState([])
    const [currentDeckId, setCurrentDeckId] = useState("")
    const [currentDeck, setCurrentDeck] = useState("")
    const [error, setError] = useState(null)

    /* useEffect(() => {

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

    }, []) */

    useEffect(() => {
        setError(null)
        const abortController = new AbortController()
        listDecks(abortController.signal)
            .then((decksFromApi) => setDecks(decksFromApi)).catch(setError)
        return () => abortController.abort()
    }, [])

    /* useEffect(() => {
        async function getCardsInDeck() {
            if (currentDeckId) {
                try {
                    console.log("deckid", currentDeckId)
                    const response = await fetch(`http://localhost:5000/decks-cards/1`)
                    const cardsInDeck = await response.json()
                    console.log("cards in deck", cardsInDeck)
                    setCurrentDeck(() => cardsInDeck)
                    console.log("currentdeck in useEffect", currentDeck)
                } catch (error) {
                    throw error
                }
            } else {
                return
            }
        }
        getCardsInDeck()
    }, [currentDeckId]) */

    const listOfDecks = decks.map((deck, index) => (
        <Link
            key={index}
            to={`/users/1/${deck.deck_id}`}
            className="btn"
            onClick={() => setCurrentDeckId(deck.deck_id)}
        >
            <h4>{deck.deck_name}</h4>
        </Link>
    ))

    return (
        <div>
            <h1>User Area</h1>
            <div className="row">
                <div className="col-3">
                    {listOfDecks}
                    {/* <DecksDisplay 
                        decks={decks} 
                        setCurrentDeck={setCurrentDeck}
                        setCurrentDeckId={setCurrentDeckId} 
                    /> */}
                </div>
                <div className="col-3">
                    <ListOfCards 
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
