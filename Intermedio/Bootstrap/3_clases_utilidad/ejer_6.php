<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Gestión de Tareas</title>
    <style>
      
                  

        h4 {
            font-size: 1.5rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    </style>
</head>

<body>
    <div class="container">
        <form action="guardar.php" method="post" enctype="multipart/form-data" class="row mt-3 g-3 needs-validation" novalidate>
            <h1 class="text-center">Gestión de tareas pendientes</h1>
            <div class="mb-3 col-12">
                <label for="nombre" class="form-label">Nombre:</label>
                <input type="text" name="nombre" id="nombre" class="form-control" required>
                <div class="valid-feedback">Todo bien.</div>
                <div class="invalid-feedback">Por favor ingresa el nombre  de la tarea.</div>
            </div>

            <div class="mb-3 col-12">
                <label for="descripcion" class="form-label">Descripcion:</label>
                <input type="text" name="descripcion" id="descripcion" class="form-control" required>
                <div class="valid-feedback">Todo bien.</div>
                <div class="invalid-feedback">Por favor ingresa la descripcion.</div>
            </div>

            <div class="mb-3 col-12">
                <label for="fecha" class="form-label">Fecha limite:</label>
                <input type="date" min="2018-01-01" name="fecha" id="fecha" class="form-control" min="0" required>
                <div class="valid-feedback">Todo bien.</div>
                <div class="invalid-feedback">Por favor ingresa una Fecha limite válida.</div>
            </div>

          

            <button type="submit" class="btn btn-primary  ">Guardar Tarea</button>

            <?php if (!empty($_SESSION['mensaje'])) : ?>
        <p><?php echo $_SESSION['mensaje']; ?></p>
        <?php unset($_SESSION['mensaje']); ?>
    <?php endif; ?>
        </form>
    </div>

    

    <section class="feature justify-content-center">
        <h2 class=" mt-5 text-center">Tarea Guardada</h2>
        <div class="container ">
            <div class="row ">
            <?php if (isset($_SESSION['tareas']) && !empty($_SESSION['tareas'])) : ?>
                <?php foreach ($_SESSION['tareas'] as $tarea) : ?>
                        <div class="col-sm-12 col-md-6 col-lg-4 mt-4  ">
                            <div class="card">
                               
                                <div class="card-body">
                                    <h4 class="text-center"><?php echo $tarea['nombre']; ?></h4>
                                    <h6>Descripcion:</h6>
                                    <p class="card-text"><?php echo $tarea['descripcion']; ?></p>
                                    <div class="card-footer text-center">
                                    <p class="card-text"><?php echo  $tarea['fecha']; ?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
            </div>
        <?php else : ?>
            <p>No hay Tareas guardadas en la sesión.</p>
        <?php endif; ?>
        </div>
    </section>
    <script>
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function() {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function(form) {
                    form.addEventListener('submit', function(event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        })()
    </script>
</body>
<footer class="bg-body-tertiary text-center">
  <!-- Grid container -->
  <div class="container p-4"></div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2020 Copyright:
    <a class="text-body" href="#">GestionTareas.com</a>
  </div>
  <!-- Copyright -->
</footer>
</html>