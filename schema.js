const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require("graphql");

const User = new GraphQLObjectType({
  name: "User",
  fields: {
    name: {
      name: "Name",
      type: GraphQLString
    },

    username: {
      name: "Username",
      type: GraphQLString
    },

    email: {
      name: "Email",
      type: GraphQLString,
    }
  }

}); 


const HelloType = {
  type: GraphQLString,
  resolve(parentValue, args, context) {
    return "world";
  }
}

const UserType = {
  type: User,
  resolve(parentValue, args, context) {
    return {
      name: "Marco",
      username: "marcoroganovic",
      email: "marcoroganovic@gmail.com"
    }
  }
}

const QueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    hello: HelloType,
    user: UserType,
  }
});

module.exports = new GraphQLSchema({
  query: QueryType
});
