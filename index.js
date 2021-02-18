
const { ApolloServer, gql } = require('apollo-server')

const db = require('better-sqlite3')('postgresql.db');

// Preparo le query SQL

//ESEMPIO --> const nomeQuery = db.prepare('...query SQL...') <-- ? per passare i parametri (in ordine)

// Definisco lo schema

/* ESEMPIO  
const typeDefs = gql`
  type nomeSchema {
  attributo1: Int, String, ...
  attributo2: Int, String, ...
  }
  
  type Query {
    query1: tipoReturn,
    query2(parametro o limit: tipoParametro!): tipoReturn <-- (nomeSchema o Int o Float o ...)
  }

  type Mutation {
    nomeMutation(param1: tipoParam, param2: tipoParam, ...): Boolean
  }

`; */


// Definisco i resolvers

/* ESEMPIO
const resolvers = {
  Query: {
    random: () => Math.random(),
    query1: (_, { limit }) => nomeQuery.all(limit),
    query2: (_, { attributo }) => nomeQuery.get(attributo)
  },
  Mutation: {
    nome
  }

  Query: {
    random: () => Math.random(),
    notizie: (_, { limit }) => ultime10notizie.all(limit),
    notizia: (_, { id }) => notiziaX.get(id)
  },
	Mutation: {
		nomeMutation: (_, { param1, param2, ... }) => {
        nomeQuery.run({param1, param2, ... })
      return true
    },
    ...
  }
} */

// Creo il server
const server = new ApolloServer({ typeDefs, resolvers });

// Lo metto in ascolto
server.listen().then(({ url }) => {
  console.log(`> Running on: https://nome-repl.username-repl.repl.co/`);
});
