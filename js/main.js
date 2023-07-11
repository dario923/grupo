document.getElementById("header").innerHTML=`<nav class="navbar navbar-expand-sm navbar-light bg-light">
      <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
            <div class="container-fluid">
                <img  class="navbar-brand logo_header" id="logo" src="./img/favicon.ico" alt="Logo">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="index.html">New's Digital</a>
                <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="productos.html" class="nav-link active">| Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a href="productos.html" class="nav-link active">| Lista De Productos</a>
                        </li>
                        <li class="nav-item">
                            <a href="producto_nuevo.html" class="nav-link active">| Alta Producto</a>
                        </li>
                        <li class="nav-item">
                            <a href="producto_editar.html" class="nav-link active">| Actualizar Producto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> <!-- fin del BOOSTRAP NAVBAR -->
      <form class="d-flex my-2 my-lg-0">
          <input class="form-control me-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
  </div>
</div>
</nav>`