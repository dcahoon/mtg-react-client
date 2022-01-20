import './App.css';

export default function DecksDisplay({ decks, setCurrentDeck, setCurrentDeckId }) {
    
    
    function handleClick(deckId) {
        setCurrentDeckId(deckId)
        console.log("currentDeckId set to:", deckId)
        setCurrentDeck(() => {
            const matchingDeck = decks.find((deck) => deck.deck_id === deckId)
            console.log("deck:", matchingDeck)
            console.log("cards", matchingDeck.deck_cards)
            return matchingDeck.deck_cards
        })
    }

    if (decks.length > 0) {
        return (
            <div>
                <h3 className="p-2">Decks</h3>
                {decks.map((deck, index) => (
                    <button 
                        className="deck-list-item p-2 m-0 btn btn-secondary row col-12" 
                        key={index}
                        onClick={()=> handleClick(deck.deck_id)}
                    >
                        {deck.deck_name}
                    </button>
                ))}
            </div>
        )
    }

    return "Problem loading decks..."

}