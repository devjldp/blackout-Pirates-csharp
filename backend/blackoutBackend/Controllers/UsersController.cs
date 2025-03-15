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
        // Atributo que especifica que esta acción manejará solicitudes POST
        [HttpPost] 
         // Aquí recibirás los datos del formulario o la solicitud (usualmente en JSON)
        public void CreateUser([FromBody] User user)
        {
            // El atributo [FromBody] indica que los datos provienen del cuerpo de la solicitud
            Console.WriteLine($"Usuario recibido: {user.UserName}, Contraseña: {user.Password}");
        }
    }
}