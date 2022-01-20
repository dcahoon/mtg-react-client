import React from "react"

export default function ListOfCards({ currentDeck, setCurrentDeck, currentDeckId }) {
    
/*     if (currentDeck) {
        return (
            <div>
                <h3 className="p-2">Cards</h3>
                {currentDeck.map((card, index) => (
                    <h6>{card.name}</h6>
                ))}
            </div>
        )
    } */

    return (
        <div>
            <h3 className="p-2">Cards</h3>
            <h6>No cards found</h6>
        </div>
    )

}
