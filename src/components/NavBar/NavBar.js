import CartWidget from '../CartWidget/CartWidget'

function NavBar(){
    return(
        <div className='hero is-primary'>
            <div className='is-flex mb-3 is-justify-content-space-around'>
                <div>
            <h1 className='title has-text-white has-text-weight-bold has-text-centered is-size-1'>La Cocina</h1>
            <p className='subtitle' > Come como en casa</p>
                </div>
                <div>
            <CartWidget />
                </div>
            </div>
            <nav className='navbar'>
            <div className='navbar-menu is-flex is-justify-content-space-around mt-3'>
                <a href='' className='navbar-item has-text-weight-bold is-size-5'>Hamburguesas</a>
                <a href='' className='navbar-item has-text-weight-bold is-size-5'>Pizzas</a>
                <a href='' className='navbar-item has-text-weight-bold is-size-5'>Empanadas</a>
                <a href='' className='navbar-item has-text-weight-bold is-size-5'>Media Lunas</a>
                <a href='' className='navbar-item has-text-weight-bold is-size-5'>Cafe</a>
                <a href='' className='navbar-item has-text-weight-bold is-size-5'>Bebidas</a>
            </div>
            </nav>
        </div>
    )
}

export default NavBar