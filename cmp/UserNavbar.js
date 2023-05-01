class UserNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `
        <nav>
            <a href = "index.html"><img src="images/Logo.png" alt="Logo"></a>
            <ul>
                <li><a href="cartelera.html">Cartelera</a></li>
            </ul>
            <ul>
                <li><a href="index.html">Inicio de Sesión</a></li>
            </ul>
            <form>
                <input type="text" placeholder="Buscar">
                <input type="submit" value="Buscar">
            </form>
        </nav>

        `;
    }
}

customElements.define("userNavbar", UserNavbar);
