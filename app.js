const fastify = require('fastify')()
const cors = require('cors')
const longestWord = require('./longest-word')
const firstFactorial = require('./first-factorial')
const firstReverse = require('./first-reverse')
const letterChanges = require('./letter-changes')
const simpleAdding = require('./simple-adding')
const letterCapitalise = require('./letter-capitalise')

fastify.use(cors())

fastify.post('/longest-word', (req, res) => { res.send(longestWord(req.query.input)) })
fastify.post('/first-factorial', (req, res) => { res.send(firstFactorial(req.query.input)) })
fastify.post('/first-reverse', (req, res) => { res.send(firstReverse(req.query.input)) })
fastify.post('/letter-changes', (req, res) => { res.send(letterChanges(req.query.input)) })
fastify.post('/simple-adding', (req, res) => { res.send(simpleAdding(req.query.input)) })
fastify.post('/letter-capitalise', (req, res) => { res.send(letterCapitalise(req.query.input)) })

fastify.listen(3000, (err, address) => {
    if (err) throw err
    console.log(`server listening on ${address}`)
})