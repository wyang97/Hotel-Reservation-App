import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export const Rooms = () => {
    return (<Hero hero='roomHero'>
        <Banner title='our rooms'>
            <Link to='/' className='btn-primary'>Return Home</Link>
        </Banner>
    </Hero>
    )
};
export default Rooms