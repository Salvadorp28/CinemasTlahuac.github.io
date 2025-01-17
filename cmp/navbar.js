    class UserNavbar extends HTMLElement {
        connectedCallback() {
            this.innerHTML = /* html */
                `
                <nav class="navbar navbar-expand-lg navbar-light my-nav-bg">
                <!-- Container wrapper -->
                <div class="container-fluid">
                    <!-- Toggle button -->
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                  </button>
        
                    <!-- Collapsible wrapper -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Navbar brand -->
                        <a class="navbar-brand mt-2 mt-lg-0" href="#">
                            <img src="./img/logo.png" height="50" alt="Cinemas Tláhuac" loading="lazy" />
                        </a>
                        <!-- Left links -->
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">CARTELERA</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">INICIAR SESIÓN</a>
                            </li>
                        </ul>
                        <!-- Left links -->
                    </div>
                    <!-- Collapsible wrapper -->
                </div>
                <!-- Container wrapper -->
            </nav>
            `;
        }
    }

    customElements.define("user-navbar", UserNavbar);