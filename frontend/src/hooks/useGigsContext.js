import { GigsContext } from '../context/GigContext'
import { useContext } from 'react'

export const useGigsContext = () => {
    const context = useContext(GigsContext) //useContext and passing in the GigContext gets you the values in the GigContext

    //check that you're in the scope of the context
    if (!context) {
        throw Error('useGigsContext must be used inside a GigsContextProvider')
    }

    return context
}