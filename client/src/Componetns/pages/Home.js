import React, { useContext, useEffect } from 'react'
import AuthContext from '../../Context/auth/authContext'
import ContactForm from '../contacts/ContactForm'
import Contacts from '../contacts/Contacts'
import CreateFilter from '../contacts/CreateFilter'


const Home = () => {

   const  authContext=useContext(AuthContext)
    const {loadUser}=authContext
    useEffect(() => {
      loadUser()  
      // eslint-disable-next-line
    },[])

    return (
        <div className='grid-2'>
            <div>
            <ContactForm />
            </div>
            <div>
            <CreateFilter />
            <Contacts />
            </div>
        </div>
    )
}

export default Home
