import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div>
            <header>Auth Header</header>

            <main>{children}</main>

            <footer>Auth Footer</footer>
        </div>
    )
}

export default AuthLayout