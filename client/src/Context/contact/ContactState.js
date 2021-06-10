import React,{useReducer} from 'react'
import axios from 'axios'
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import {
    GET_CONTACTS,
    CLEAR_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR,
} from '../Types'

const ContactState = props => {
    const intialState = {
        contacts:null,
        current:null,
        filtered:null,
        error:null
    }

    const [state,dispatch] = useReducer(ContactReducer,intialState)

    // Get contact
    const getContacts = async contact => {
        try {
            const res=await axios.get('/api/contacts')
            dispatch({type:GET_CONTACTS,payload:res.data}) ;
        } catch(err) {
             dispatch({type:CONTACT_ERROR,payload:err.response})
        } 
    }

    // Add contact
    const addContact = async contact => {
        const config= {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res=await axios.post('/api/contacts',contact,config)
            dispatch({type:ADD_CONTACT,payload:res.data}) ;
        } catch(err) {
             dispatch({type:CONTACT_ERROR,payload:err.response})
        } 
    }

    


    // Delete contact
     const deleteContact = async  id => {
         try {
            const res=await axios.delete(`/api/contacts/${id}`)
            dispatch({type:DELETE_CONTACT,payload:id}) ;
        } catch(err) {
             dispatch({type:CONTACT_ERROR,payload:err.response})
        } 
    }

    // Set Current Contact
     const setCurrent = contact => {
        dispatch({type:SET_CURRENT,payload:contact }) ;
    }

    // Clear Current Contact
     const clearCurrent = () => {
        dispatch({type:CLEAR_CURRENT}) ;
    }

    // Clear Contacts
    const clearContacts = () => {
        dispatch({type:CLEAR_CONTACTS})
    }
    
    // Update contact
    const updateContact = async contact => {
        const config= {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res=await axios.put(`/api/contacts/${contact._id}`,contact,config)
            dispatch({type:UPDATE_CONTACT,payload:res.data}) ;
        } catch(err) {
             dispatch({type:CONTACT_ERROR,payload:err.response})
        } 
    }

    // Filter Contacts
    const filterContacts = text => {
        dispatch({type:FILTER_CONTACTS,payload:text }) ;
    }
    // Clear Filter
     const clearFilter= () => {
        dispatch({type:CLEAR_FILTER}) ;
    }

    return (
         <ContactContext.Provider 
        value={{
            contacts:state.contacts,
            current:state.current,
            filtered:state.filtered,
            error:state.error,
            addContact,
            deleteContact,
            updateContact,
            setCurrent,
            clearCurrent,
            filterContacts,
            clearFilter ,
            getContacts,
            clearContacts
        }}
         >
         {props.children}
         </ContactContext.Provider>
    )
}

export default ContactState