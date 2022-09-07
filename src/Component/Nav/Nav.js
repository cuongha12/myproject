import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <NavLink to={'form'} >
                form
            </NavLink>
            <NavLink to={'login'} >
                login
            </NavLink>
        </div>
    )
}

export default Nav