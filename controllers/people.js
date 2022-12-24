
let { people } = require("../data.js")


const getPeople = (req, res) => {
    res.status(201).json({ success: true, data: [...people] })
}

const createPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: "please provide name value" })
    }
    res.status(201).json({ success: true, person: name })
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson,
}