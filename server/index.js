const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('../resolvers')
const { prisma } = require('../records/src/generated/prisma-client')
const server = new GraphQLServer({
  typeDefs: './server/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma,
  })
})

// 消息服务 刷新 access_token
const options = { port: 5000 }
server.start(options, ({ port }) => console.log('Server is running on http://localhost:5000'));

