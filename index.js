const express = require('express')
const fileUpoad = require('express-fileupload')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const port = 3000


app.use(fileUpoad({
  createParentPath: true
}))
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(420).send('Enhace Your Calm')
})

app.post('/', (req, res) => {
    try {
        if (req.query.key === "digitala") {
            if(!req.files) {
                res.status(418).send("418 I'm a teapot - 1")
                return
            } else {
                const audioFile = req.files.file
                res.json({
                "Prompt": req.query.prompt,
                "Language": req.query.lang,
                "Task": req.query.task,
                "file_name": audioFile.name,
                "Transcript": "Lorem ipsum dolor sit amet.",
                "Fluency": {
                    "score": 3.00,
                    "mean_f1": 0.19,
                    "speech_rate": 3.12,
                },
                "TaskAchievement": 0.40,
                "Accuracy": {
                    "score": 2.00,
                    "lexical_profile": 3.12,
                    "nativeity": 0.40,
                },
                "Holistic": 2.40,
                })
            }
        } else {
            res.status(418).send("418 I'm a teapot - 2")
        }
    } catch (err) {
        res.status(418).send("418 I'm a teapot - 3")
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
