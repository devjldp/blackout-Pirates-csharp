// Importar el namespace para trabajar con los controladores.
using Microsoft.AspNetCore.Mvc; 

// Importar los modelos para usar la clase User
using blackoutBackend.Models;  

namespace blackoutBackend.Controllers
{
    // Marca la clase como un controlador de API
    [ApiController] 
   
    // Define la ruta base para este controlador
    [Route("api/[controller]")] 
    public class UsersController : ControllerBase  // Método que maneja solicitudes POST para crear un nuevo usuario
    {
        [HttpPost] // Atributo que especifica que esta acción manejará solicitudes POST
        public IActionResult CreateUser([FromBody] User user)
        {
            // Aquí recibirás los datos del formulario o la solicitud (usualmente en JSON)
            // El atributo [FromBody] indica que los datos provienen del cuerpo de la solicitud

            // Lógica para crear el usuario (en este caso, solo imprimimos en consola)
            Console.WriteLine($"Usuario recibido: {user.UserName}, Contraseña: {user.Password}");

            // Devolver una respuesta (puede ser un mensaje de éxito, un código HTTP, etc.)
             return Ok(new { message = "Usuario creado con éxito" });
        }
    }
}