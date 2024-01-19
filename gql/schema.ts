//GraphQL schema
export const typeDefs = `#graphql

type Contact {
    id: ID!
    nombreCompleto: String!
    telefono: String!
    pais: String!
    horaActual: String!
}

type Query {
    getContacts: [Contact!]!
    getContact(id:ID!): Contact! 
}

type Mutation {
    addContact(nombreCompleto: String!, telefono: String!): Contact!
    deleteContact(id:ID!): Contact!
    updateContact(id: ID!, nombreCompleto: String, telefono: String, pais: String, horaActual: String): Contact!
}
`;