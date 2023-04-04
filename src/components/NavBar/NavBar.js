import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Proyecto Ecommerce</h3>
            <div>
                <button>Camperas</button>
                <button>Anillos</button>
                <button>Cascos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar