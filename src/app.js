const fastify = require('fastify')()
const cors = require('cors')
const longestWord = require('./longest-word')
const firstFactorial = require('./first-factorial')
const firstReverse = require('./first-reverse')
const letterChanges = require('./letter-changes')
const simpleAdding = require('./simple-adding')
const letterCapitalise = require('./letter-capitalise')

fastify.register(require('point-of-view'), { engine: { ejs: require('ejs') } })

fastify.use(cors())

fastify.get('/', (req, reply) => { reply.view('./public/index.html') })

fastify.post('/longest-word', (req, reply) => { reply.send(longestWord(req.query.input)) })
fastify.post('/first-factorial', (req, reply) => { reply.send(firstFactorial(req.query.input)) })
fastify.post('/first-reverse', (req, reply) => { reply.send(firstReverse(req.query.input)) })
fastify.post('/letter-changes', (req, reply) => { reply.send(letterChanges(req.query.input)) })
fastify.post('/simple-adding', (req, reply) => { reply.send(simpleAdding(req.query.input)) })
fastify.post('/letter-capitalise', (req, reply) => { reply.send(letterCapitalise(req.query.input)) })

fastify.listen(3000, (err, address) => {
    if (err) throw err
    console.log(`server listening on ${address}`)
})