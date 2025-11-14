use("escuela")
db.createCollection("alumnos");
db.alumnos.insertOne({
    nombre: "Samuel Mendoza",
    edad: 20,
    Direccion: {
        Calle:"Av.Constituyentes", 
        Numero: "123",
        Ciudad:"Queretaro"

    },
    telefono: "1234567890" 
});