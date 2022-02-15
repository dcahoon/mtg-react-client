import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { readDeck } from "./utils/api"

/**
 * Parents: UserArea
 * @param {*} param0 
 * @returns 
 */
export default function ListOfCards({ currentDeckId }) {

    const [deck, setDeck] = useState({ cards: [] })
    const [error, setError] = useState(null)
    const [cardList, setCardList] = useState([])

    useEffect(() => {
        loadDeck(currentDeckId)
        console.log("deck in list of cards", deck)
    }, [currentDeckId])

    function loadDeck(currentDeckId) {
        setError(null)
        const abortController = new AbortController()
        readDeck(currentDeckId, abortController.signal).then(setDeck).catch(setError)
        return () => abortController.abort()
    }
    
    return (
        <div>
            <p>List of cards</p>
        </div>
    )

}
