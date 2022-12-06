const express = require('express')
let { people } = require("../data.js")
const router = express.Router()

router.get("/", (req, res) => {
    res.status(201).json({ success: true, data: [...people] })
})

router.post("/", (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: "please provide name value" })
    }
    res.status(201).json({ success: true, person: name })
})

router.put("/:id", (req, res) => {
    const { id } = req.params
    const { name } = req.body

    // check if person exists
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no peson with id ${id}` })
    }
    // updating person's name
    people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(201).json({ success: true, data: [...people] })
})

router.delete("/:id", (req, res) => {
    const {id} = req.params
    // check if person exists
    const person =people.find((person) => person.id === Number(id) )
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no peson with id ${id}` })
    }
    // deleting person
    people = people.filter((person) => person.id !== Number(id))
    res.status(201).json({ success: true, data: [...people] })
})

module.exports = router