use("BaseDeDatosPrueba")

db.Carros.deleteOne({_id: ObjectId('691e159abd139ff36b3391e4')});
db.Carros.deleteOne({_id: ObjectId('691e159abd139ff36b3391e5')});

db.Motos.deleteOne({_id: ObjectId('691e16609a09b4ab6149b25e')});
db.Motos.deleteOne({_id: ObjectId('691e16609a09b4ab6149b25f')});

db.Gatos.deleteOne({_id: ObjectId('69207a551121912921801c51')});
db.Gatos.deleteOne({_id: ObjectId('69207a551121912921801c52')});

db.Perros.deleteOne({_id: ObjectId('69207ab4d45b17ac5ec4a508')});
db.Perros.deleteOne({_id: ObjectId('69207ab4d45b17ac5ec4a509')});

db.Bebidas.deleteOne({_id: ObjectId('69207b3c9fea8c759899b8c2')});
db.Bebidas.deleteOne({_id: ObjectId('69207b3c9fea8c759899b8c3')});