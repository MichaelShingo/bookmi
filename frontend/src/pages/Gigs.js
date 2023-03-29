import { useEffect, useState } from 'react'
import GigForm from '../components/GigForm'
import { useGigsContext } from '../hooks/useGigsContext'

// components
import GigDetails from '../components/GigDetails'

const Gigs = () => {

    const {gigs, dispatch} = useGigsContext()
    //const [gigs, setGigs] = useState(null) //old state
    useEffect(() => {     // fire once when the component first renders to fetch gigs
        // need async function, but you can't make useEffect callback async
        console.log('useEffect ran')
        const fetchGigs = async () => {
            const response = await fetch('/api/gigs')
            const json = await response.json()
            console.log('got a response from server')

            if (response.ok) { //after fetching data from database, set the gig context
                dispatch({type: 'SET_GIGS', payload: json}) //updates the context/state, type defines what action to take in GigContext.js
                //payload is the data from the database, this runs gigsReducer in GigContext.js >>>>>

                console.log('response ok')
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
                <div className="gigs">
                    {gigs && gigs.map((gig) => (
                        <GigDetails key={gig._id} gig={gig} />
                    ))}
                </div>
                <GigForm />
            </div>
        </div>

    )
}

export default Gigs