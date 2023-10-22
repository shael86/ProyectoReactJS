import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar
    = () => {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="ecommerce">E-commerce</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/cpu">CPU</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/mouseyteclado">Mouse y teclado.</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/auriculares">Auriculares.</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/accesorios">accesorios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/carrito"><CartWidget/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

export default NavBar