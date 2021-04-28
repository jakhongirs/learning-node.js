const { ApolloServer } = require("apollo-server")

//typeDefs - bu bizni APImizda nima bo'lishini aytamiz.
const typeDefs = `
	type Book {
		id: Int!
		name: String!
		price: String!
	}

	type Query {
		greeting: String!

		books: [Book]!
	}
`

//resolvers - bu APImiz qanday ishlashini aytamiz.
const resolvers = {
	//Query ichidagi greetinga murojat qilinsa shu funksiya ishlasin deyilyapti:
	Query: {
		greeting: () => "Hello",
		greeting: () => "Hello",
	},
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
})
	
	server.listen(4000)