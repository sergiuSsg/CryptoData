import React from "react"


function Header({handleChange}) {
    return (
        <header className='header-container'>
                <h1 className='header-h1'>CRYPTO DATA</h1>
                <form className='header-form'>  
                    <input 
                    type='text' 
                    placeholder="Search"
                    className='header-input'
                    onChange={handleChange}
                    />
                </form>
        </header>
    )
}

export default Header
