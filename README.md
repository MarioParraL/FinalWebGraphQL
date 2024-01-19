# FinalWebGraphQL
# Mutation:
# addContact
*Nombres y apellidos, tipo: “Alberto Romero Sanz”
Número de teléfono incluyendo prefijo nacional, tipo: “+34645543345”
# deleteContact 
cuyo parámetro debe ser el id generado por mongo y que devuelve verdadero o false en función de si el contacto se ha borrado satisfactoriamente o no.
# updateContact 
cuyo parámetro debe ser el id generado por mongo y los nuevos datos del contacto, se puede modificar tanto el nombre como el teléfono o ambos (pero no es obligatorio que sean ambos). Devuelve los datos del nuevo contacto.

# Query
# getContact
cuyo parámetro debe ser el id generado por mongo y que devuelve:
Nombres y apellidos.
Número de teléfono
País de residencia
Hora actual de la capital del país de residencia.
# getContacts
que devuelve todos los contactos, con los campos arriba mencionados.
