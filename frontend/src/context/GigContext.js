import { createContext, useReducer } from 'react'

export const GigsContext = createContext()

export const gigsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GIGS':
            return {
                gigs: action.payload //this will update the state in GigsContextProvider (this file) function useReducer....
            }
        case 'CREATE_GIG':
            return {
                gigs: [action.payload, ...state.gigs] //add the new one, then spread the previous ones 
            }
        case 'DELETE_GIG':
            return {
                gigs: state.gigs.filter((gig) => gig._id != action.payload._id)
            }
        default:
            return state
    }
}

export const GigsContextProvider = ({ children }) => {
    //children represents the App component that you wrapped in index.js
    const [state, dispatch] = useReducer(gigsReducer, { //THIS IS WHERE THE STATE IS
        gigs: null
    })

    //dispatch({type: 'SET_GIGS', payload: []})

    return (
        <GigsContext.Provider value={{...state, dispatch}}>
            { children }
        </GigsContext.Provider>
    )
}

