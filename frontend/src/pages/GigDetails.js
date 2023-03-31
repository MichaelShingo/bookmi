import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GigDetails = () => {
    //get the gig ID from the request

    const { gigId } = useParams()
    const [gig, setGig] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchGig = async () => {
            const response = await fetch(`/api/gigs/${gigId}`)
            const json = await response.json()

            if (response.ok) {
                setGig(json)
                setIsLoading(false)
                
            }
    
        }

        fetchGig()

    }, [])

    return (
        <div>
            {!isLoading && 
                <div className="all-details">
                    <h2>{gig.name}</h2>
                    <p>Location: {gig.location}</p>
                    <p>Amount: {gig.amount}</p>
                    <p>Date:{gig.dateTime}</p>
                    <p>Details: {gig.details}</p>
                    <p>Created: {gig.createdAt}</p>
                </div>
            }
       
        </div>

    )


}

export default GigDetails