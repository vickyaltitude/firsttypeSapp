"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/', (req, res, next) => {
    const todoRec = {
        id: new Date().toString(),
        value: req.body.text
    };
    todos.push(todoRec);
    res.status(201).json({ msg: 'todos inserted successfully' });
});
router.patch('/:id', (req, res, next) => {
    const paramsId = req.params.id;
    const ind = todos.findIndex(val => {
        return val.id = paramsId;
    });
    if (ind) {
        todos[ind].value = req.body.text;
        res.status(200).json({ msg: "todos edited successfully", todosL: todos });
    }
    else {
        res.status(404).json({ msg: "something went wrong" });
    }
});
router.delete('/:id', (req, res, next) => {
    const paramsId = req.params.id;
    todos = todos.filter(val => {
        return val.id !== paramsId;
    });
    res.status(200).json({ msg: 'deleted successfully', todosL: todos });
});
exports.default = router;
