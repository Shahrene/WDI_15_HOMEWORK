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
                      "Your ability to fall asleep, regardless of location and comfort, is something I greatly admire.",
                      "If I had 100 wishes, 'spend more time with you' would be around wish number 5.",
                      "Sometimes it feels like you're the only person who truly understands my random shouting.",
                      "You're smarter than Google and Mary Poppins combined.",
                      "You are so beautiful I would certainly steal your photos, make a fake account and impress people online.",
                      "I can't take my eyes off of you. Unless you notice me, then I'll quickly look away and act like it never happened.",
                      "You're the cheese to my macaroni.",
                      "You could survive a zombie apocalypse.",
                      "You are awkward, in a cute way. Like an elevator ride, but with puppies.",
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
                      "You inspire me. And strangers, probably. Also, friends and stalkers. You are the inspiration to many.",
                      "Every day is just blah, when I don't see you."
                      ]
  const colors =  ["#FFBF00", "#0080FF", "#07f743", "#FF0080", "#c300ff", "#00ff2e", "#ff9d00", "#e081b9", "#d883f7", "#f2a4e9", "#a5e1ff"]
  const text = ["#3a0487", "#032f7a", "#470160", "#670289", "#7a221c", "#0e1875", "#a0038e" ]
  const data = {
    randCompliment: _.sample(compliments),
    randColor: _.sample(colors),
    randText: _.sample(text)
  }

  res.render('home', data)
})
