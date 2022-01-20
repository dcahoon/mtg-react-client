import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Home() {
    
    const [sets, setSets] = useState([])
    const [currentSet, setCurrentSet] = useState("")
    
    useEffect(() => {
        async function getSetsFromApi() {
            const response = await fetch("https://api.magicthegathering.io/v1/sets")
            const setsFromApi = await response.json()
            const sortedSets = setsFromApi.sets.sort((setA, setB) => setA.releaseDate > setB.releaseDate ? -1 : 1)
            setSets(sortedSets)
        }
        getSetsFromApi()
    }, [])

    if (currentSet === "") {

        return (
           <div> 
                <p>home page content here</p>
                <Link to="/users/1">Sign In</Link>
                <br/><br/>
                <h3 className="d-flex p-1">Recent Sets</h3>
                {sets.map((set, index) => (
                    <div key={index} className="d-flex p-1">
                        <div className="btn btn-secondary btn-sm">{set.name}</div>
                    </div>
                ))}
            </div> 
        )
    }

    return (
        <div></div>
    )
        
}