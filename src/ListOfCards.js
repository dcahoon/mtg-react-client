import { useEffect } from "react"

/**
 * Parents: UserArea
 * @param {*} param0 
 * @returns 
 */
export default function ListOfCards({ currentDeck, setCurrentDeck, currentDeckId }) {

    let content = "No Cards found"

    useEffect(() => {
        console.log("deck in listofcards", currentDeck)
        if (currentDeck.length) {
            content = currentDeck.map((card, index) => (
                <p>{card.name}</p>
            ))
            console.log("content", content)
        }
    }, [])

    if (currentDeck.length) {
        return (
            <div>
                {content}
            </div>
        )
    } else {
        return "No cards found."
    }

}
