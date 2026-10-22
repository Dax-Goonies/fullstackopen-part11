const express = require('express')
const app = express()

// Get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// Health check
app.get('/health', (req, res) => {
  res.send('ok')
})

// Port of the app
const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
