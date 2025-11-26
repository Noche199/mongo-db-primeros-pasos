use("BaseDeDatosPrueba");
db.Carros.updateOne(
{_id:ObjectId("691e159abd139ff36b3391e6")},
{$set: {Modelo:"370Z"}}
)
db.Carros.updateOne(
{_id:ObjectId("691e159abd139ff36b3391e7")},
{$set: {Modelo:"AE86"}}
)
db.Motos.updateOne(
{_id:ObjectId("691e16609a09b4ab6149b260")},
{$set: {Año:"2020"}}
)
db.Motos.updateOne(
{_id:ObjectId("691e16609a09b4ab6149b260")},
{$set: {Año:"2019"}}
)
db.Bebidas.updateOne(
{_id:ObjectId("69207b3c9fea8c759899b8c4")},
{$set: {Color:"Amarillo"}}
)
db.Bebidas.updateOne(
{_id:ObjectId("69207b3c9fea8c759899b8c4")},
{$set: {Color:"Rosa"}}
)
db.Perros.updateOne(
{_id:ObjectId("69207ab4d45b17ac5ec4a50a")},
{$set: {Edad: "4"}}
)
db.Perros.updateOne(
{_id:ObjectId("69207ab4d45b17ac5ec4a50b")},
{$set: {Edad: "3"}}
)
db.Gatos.updateOne(
{_id:ObjectId("69207a551121912921801c53")},
{$set: {Nombre:"Carlitos"}}
)
db.Gatos.updateOne(
{_id:ObjectId("69207a551121912921801c54")},
{$set: {Nombre:"Ñoño"}}
)