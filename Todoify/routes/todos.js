"use strict";
// import express  from 'express';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
// const router = express.Router()
const router = (0, express_1.Router)();
router.get('/todo', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
router.get('/todo/:id', (req, res, next) => {
    const todo = todos.find(todo => todo.id === req.params.id);
    if (todo) {
        res.status(200).json({ message: "Todo not found", todo: todo });
    }
    else
        res.status(404).json({ message: "Todo not found" });
});
router.put('/todo/:id', (req, res, next) => {
    const todoIndex = todos.findIndex(todo => todo.id === req.params.id);
    if (todoIndex >= 0) {
        todos[todoIndex] = Object.assign(Object.assign({}, todos[todoIndex]), { text: req.body.text });
        res.status(200).json({ message: "Todo Updated", todo: todos[todoIndex] });
    }
    else {
        res.status(404).json({ message: "Todo not found" });
    }
});
router.delete('/:id', (req, res, next) => {
    const todoIndex = todos.findIndex(todo => todo.id === req.params.id);
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        res.status(200).json({ message: "Todo deleted" });
    }
    else
        res.status(404).json({ message: "Todo not found" });
    // todos = todos.filter((todoItem) => todoItem.id !== req.params.id);
    //not prefered cause it doesnt check todo is available and we have to change const type of todos..
});
// module.exports=router;
exports.default = router;
