
const express = require('express')
const app = express()
const port = 5000

// Static Files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/events', (req, res) => {
    res.sendFile(__dirname + '/views/events.html')
})

app.get('/sponsors', (req, res) => {
    res.sendFile(__dirname + '/views/coming-soon.html')
})

app.get('/registration', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})

app.get('/team', (req, res) => {
    res.sendFile(__dirname + '/views/team.html')
})

// app.get('/ContactUs', (req, res) => {
//   res.sendFile(__dirname + '/views/team.html')
// })

// app.get('/TechExpo', (req, res) => {
//   res.sendFile(__dirname + '/views/tech.html')
// })

// app.get('/ReachUs', (req, res) => {
//   res.sendFile(__dirname + '/views/reachus.html')
// })

// app.get('/CAportal', (req, res) => {
//   res.sendFile(__dirname + '/views/caportal.html')
// })

// app.get('/Register', (req, res) => {
//   res.sendFile(__dirname + '/views/caform.html')
// })

app.listen(process.env.PORT || 3000)

