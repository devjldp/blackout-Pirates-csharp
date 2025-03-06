var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(); // Agregar este servicio para controlar las solicitudes HTTP

builder.Services.AddOpenApi(); // Esto sigue siendo útil si usas OpenAPI para documentación

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors(policy =>
{
    policy.AllowAnyOrigin()  // Allow requests from tall origin
          .AllowAnyHeader()                    // Allow any headers
          .AllowAnyMethod();                   // Allow any HTTP method (GET, POST, etc.)
});


app.MapControllers(); // Esto mapea las rutas de los controladores

app.Run();
