document.getElementById("header").innerHTML=`<nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
  <!--<a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="productos.html">Productos</a>
                  <a class="dropdown-item" href="#">Action 2</a>
              </div>
          </li>
      </ul>-->
      <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
            <div class="container-fluid">
                <img  class="navbar-brand logo_header" id="logo" src="./img/favicon.ico" alt="Logo">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="index.html">Tecno</a>
                <div class="collapse navbar-collapse nav justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link active">| Inicio</a>
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