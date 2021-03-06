import React, { useContext,useEffect,useRef } from 'react'
import ContactContext from '../../Context/contact/contactContext'

const CreateFilter = () => {
    const contactContext=useContext(ContactContext)
    const {filterContacts,clearFilter,filtered}=contactContext
    const text=useRef('')
    useEffect(()=>{
        if(filtered===null){
            text.current.value='' ;
        }
    })
    const onChange=e=>{
        if(text.current.value!==''){
            filterContacts(e.target.value)
        }
        else {
            clearFilter()
        }
    }

    return (
        <form>
        <input ref={text} type="text" placeholder='filter contacts..' onChange={onChange} /> 
        </form>
    )
}

export default CreateFilter
