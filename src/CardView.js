
import './App.css';

export default function CardView({ card, setCurrentDeck, currentDeck }) {


    const handleClick = () => {
        setCurrentDeck([...currentDeck, card])
        console.log(currentDeck)
    }
    
    
    
/*     const handleClick = () => {
        console.log("button clicked")
            setCurrentDeck(() => {
                console.log(currentDeck)
                return [...currentDeck, card]
            })        
    } */

    // check to make sure there is a current deck before allowing user to add cards
    

    return (
        <div className="p-3">
            <img className="card-display" src={card.imageUrl} alt={card.name} />
            <div className="">
                <h3>{card.set}</h3>
                <button className="btn btn-primary btn-sm" onClick={handleClick}>
                    Add Card to Deck
                </button>
            </div>
        </div>
    )

}

/* 
    name
    artist
    cmc
    foreignNames
    id
    imageUrl
    layout
    legalities
    manaCost
    multiverseId
    number
    originalText
    originalType
    power
    printings
    rarity
    rulings
    set
    setName
    subtypes
    text
    toughness
    type
    types 
*/