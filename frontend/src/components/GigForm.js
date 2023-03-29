import { useState } from "react"
import { useGigsContext } from '../hooks/useGigsContext'

const GigForm = () => {
    const { dispatch } = useGigsContext()
    const DEFAULT_DATE = '1990-01-01T00:00'
    const [name, setName] = useState('')
    const [dateTime, setDateTime] = useState(DEFAULT_DATE) //Date.now()
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [details, setDetails] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const gig = {
            name,
            dateTime,
            city,
            zip,
            details
        }

        const response = await fetch('/api/gigs', { //must add address somehow!
            method: 'POST',
            body: JSON.stringify(gig), // you need to change this into a JSON string
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setName('')
            setDateTime(DEFAULT_DATE)
            setStreet('')
            setCity('')
            setZip('')
            setDetails('')
            setError(null)
            setEmptyFields([])
            console.log('new gig added', json)
            dispatch({type: 'CREATE_GIG', payload: json}) //dispatch an action to keep the fronend in sync with the backend
            //json is the response that the browser sends back
        }

    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Create a New Gig</h3>
            <label>Gig Title</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Date and Time</label>
            <input
                type="datetime-local"
                onChange={(e) => setDateTime(e.target.value)}
                value={dateTime}
            />
            <label>Address</label>
            <input
                type="text"
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                placeholder="Street"
            />
            <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
            />
            <input
                type="text"
                onChange={(e) => setZip(e.target.value)}
                value={zip}
            />
            <label>Details</label>
            <input
                type="textarea"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
            />
            <button type='submit'>Create Gig</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default GigForm