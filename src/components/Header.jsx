import { UserButton, useUser, SignInButton } from '@clerk/clerk-react';
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom'

function Header() {
    const {user,isSignedIn} = useUser();
    return (
        <div className='flex justify-between items-center shadow-sm p-5'>
            <img src="/logo.jpg" width={150} height={100}/>
            <ul className='hidden md:flex gap-16'>
                <Link to="/">
                    <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
                </Link>
                <Link to="/shopping">
                    <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Buscar</li>
                </Link>
                <Link to="/shopping">
                    <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Novedades</li>
                </Link>
                <Link to="/shopping">
                    <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Nosotros</li>
                </Link>

            </ul>
            {isSignedIn? 
            <div className='flex items-center gap-5'>
                <UserButton/>
                <Link to='/profile'>
                    <Button>Una lista</Button>
                </Link>
            </div>
            :
                <SignInButton mode='modal' forceRedirectUrl='/'>
                    <Button>Iniciar sesión</Button>
                </SignInButton>
            }
        </div>
    );
}

export default Header;