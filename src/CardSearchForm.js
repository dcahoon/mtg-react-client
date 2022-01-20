/* 
    Parent: SearchDisplay
*/

import { useState } from "react"
import axios from "axios"

export default function CardSearchForm({ results, setResults }) {
    
    const [formValue, setFormValue] = useState("")
    
    function findMatches(formValue) {
        axios.get(
            'https://api.magicthegathering.io/v1/cards',
            {
                params: { name: formValue }
            })
        .then(function (response) {
            const cardsWithImages = response.data.cards.filter((match) => match.imageUrl)
            setResults(cardsWithImages)
        })
        .catch()
    }

    const handleChange = (event) => {
        const nameString = event.target.value
        setFormValue(nameString)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        findMatches(formValue)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="cardName"></label>
                    <input 
                        id="cardName"
                        name="cardName"
                        type="text"
                        value={formValue}
                        onChange={handleChange}
                    />   
                    <button htmlFor="submit" className="btn btn-primary btn-sm">
                        Search
                    </button>     
                </div>
            </form>
        </div>
    )

}


// https://api.magicthegathering.io/v1/cards