    const express = require("express")
    const app = express()
    const PORT = process.env.PORT || 3000
    const path = require("path")

    const todos = []


    // Set the buildt-in middleware
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    // Create logger middleware
    const logger = (req, res, next) => {
        console.log(`${req.originalUrl}`)
        next()
    }

    // Init logger middleware
    app.use(logger)

    // Template for pages
    app.set('view engine', 'ejs');

    // Render the index page
    app.get("/", (req, res) => {
        res.render("index", { todos: todos })
    })

    // Add todo
    app.post("/todo", (req, res) => {
        if (req.body.atodo !== "") {
            const todo = req.body
            todos.push(todo)
            res.redirect("/")
        } else {
            console.log("Write something!")
            res.redirect("/")
        }
    })

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
