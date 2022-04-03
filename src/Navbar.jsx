import React from 'react'
import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
        
        <div className="logo">
            <h2>Wheel of Life React App</h2>
            <i class="bi bi-bullseye"></i>
        </div>
        <div className="itens">
            <div className="row">
                    <h3>Conteúdos Uteis</h3>
            </div>
            <div className="row">
                <h3>Sobre</h3>
            </div>
        </div>

    </div>
  )
}
