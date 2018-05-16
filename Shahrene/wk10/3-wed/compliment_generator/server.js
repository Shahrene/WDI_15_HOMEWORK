const express = require('express')

const app = express()

const _ = require('lodash')

const PORT = 4567;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})


app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public'))



app.get('/', (req, res) => {
  const compliments = ["If someone based an Internet meme on you, it would have impeccable grammar.",
                      "You could survive a zombie apocalypse.",
                      "I like you more than a Star Wars geek likes to talk about how much they dislike the prequel trilogy.",
                      "Sometimes when someone is talking, I almost immediately lose interest. That rarely happens with you, though",
                      "I bet you do crossword puzzles in ink.",
                      "Defenseless animals are drawn to you.",
                      "You have cute elbows. For real.",
                      "If you were a box of crayons, you\'d be the big industrial name-brand one with a built-in sharpener.",
                      "You\’re a great person to do a group project with.",
                      "I would go on an 18 hour road trip with you, I like you that much.",
                      "You\'re so good looking, you could be the 'After' picture in any number of infomercials.",
                      "Your sneezes sound like a chorus of angels giggling.",
                      "You inspire me. And strangers, probably. Also, friends and stalkers. You are the inspiration to many."
                      ]
  const colors =  ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080", "#c300ff", "#00ff2e", "#ff9d00", "#0019ff"]
  const randCompliment = _.sample(compliments)
  const randColor = _.sample(colors)

  res.render('home', {randCompliment: randCompliment, randColor: randColor})

})
