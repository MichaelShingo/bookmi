import { useGigsContext } from "../hooks/useGigsContext"
import { Link } from 'react-router-dom'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const GigPreview = ({ gig }) => {
    const { dispatch } = useGigsContext() //get gig info

    //const address = await gig.address

    const handleClick = async () => {
        const response = await fetch('/api/gigs/' + gig._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_GIG', payload: json})
        }

    }

    const handleUpdate = async () => {
        //route to gig update page
    }
    return (
        <Link to={`/gigdetails/${gig._id}`}>
            <div className="gig-details">
                <h4>{gig.name}</h4>
                <p>Date: {gig.dateTime}</p>
                <p>{formatDistanceToNow(new Date(gig.dateTime), { addSuffix: true })}</p>
                <p>Location:</p>
                <p>Client: {gig.clientID}</p>
                <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
                <span className="material-symbols-outlined" onClick={handleUpdate}>edit</span>
            </div>
        </Link>
    )
}

export default GigPreview