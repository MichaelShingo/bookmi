import { useEffect, useState } from 'react'
import GigForm from '../components/GigForm'
import { useGigsContext } from '../hooks/useGigsContext'
import { Link } from 'react-router-dom'

// components
import GigPreview from '../components/GigPreview'

const Gigs = () => {

    const {gigs, dispatch} = useGigsContext()
    const [isLoading, setIsLoading] = useState(true)

    //const [gigs, setGigs] = useState(null) //old state
    useEffect(() => {     // fire once when the component first renders to fetch gigs
        // need async function, but you can't make useEffect callback async
        const fetchGigs = async () => {
            const response = await fetch('/api/gigs')
            const json = await response.json()

            if (response.ok) { //after fetching data from database, set the gig context
                dispatch({type: 'SET_GIGS', payload: json}) //updates the context/state, type defines what action to take in GigContext.js
                //payload is the data from the database, this runs gigsReducer in GigContext.js >>>>>
                setIsLoading(false)
            }
            else {
                console.log('gigs not found')
            }
        }


        fetchGigs()

        
    }, [dispatch])

    return (
        <div>
            <h2>My Gigs</h2>

            <div className="home">
            {isLoading && <p>Loading your gigs...</p>}
            <Link to='/gigdetails/'>
            
                <div className="gigs">
                    {gigs && gigs.map((gig) => (
                        <GigPreview key={gig._id} gig={gig} />
                    ))}
                </div>
            </Link>
                <GigForm />
            </div>
        </div>

    )
}

export default Gigs