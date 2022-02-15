import './App.css';
import { Link, useRouteMatch } from "react-router-dom"

export default function DecksDisplay({ decks, setCurrentDeck, setCurrentDeckId }) {
    
    const { url } = useRouteMatch()
    
    /* function handleClick(deckId) {
        setCurrentDeckId(deckId)
        console.log("currentDeckId set to:", deckId)
        setCurrentDeck(() => {
            const matchingDeck = decks.find((deck) => deck.deck_id === deckId)
            console.log("deck:", matchingDeck)
            console.log("cards", matchingDeck.deck_cards)
            return matchingDeck.deck_cards
        })
    } */

    if (decks.length > 0) {
        return (
            <div>
                <h3 className="p-2">Decks</h3>
                {decks.map((deck, index) => (
                    <Link 
                        key={index}
                        to={`${url}/${deck.deck_id}`} 
                        className="deck-list-item p-2 m-0 btn btn-secondary row col-12"
                        onClick={setCurrentDeckId(deck.deck_id)}
                    >
                        {deck.deck_name}
                    </Link>
                ))}
            </div>
        )
    }

    return "Problem loading decks..."

}