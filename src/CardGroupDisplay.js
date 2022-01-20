
import CardView from "./CardView"

export default function CardGroupDisplay({ results, setCurrentDeck, currentDeck }) {

    if (results.length > 0) {
        
        const haveImages = results.filter((match) => match.imageUrl)
        
        return (
            <div className="d-flex flex-wrap justify-content-around">
                {haveImages.map((card, index) => (
                    <CardView 
                        key={index}
                        card={card}
                        setCurrentDeck={setCurrentDeck}
                        currentDeck={currentDeck}
                    />
                ))}
            </div>
        )

    }

    return <p>No Matches</p>

}