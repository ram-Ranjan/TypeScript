// import express  from 'express';

import { Router } from 'express';
//Only import what we need

import {Todo} from '../models/todo';
import { todo } from 'node:test';

const todos:Todo[] = [];

// const router = express.Router()
const router = Router();

router.get('/todo',(req,res,next) => {
    res.status(200).json({todos:todos})

})

router.post('/todo',(req,res,next) => {
    const newTodo :Todo ={
        id:new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});


router.get('/todo/:id',(req,res,next) => {
    const todo = todos.find(todo => todo.id === req.params.id);
    if(todo)
        {
            res.status(200).json({message:"Todo not found",todo:todo})
        }
    else
        res.status(404).json({message:"Todo not found"})

})

router.put('/todo/:id',(req,res,next) => {
    const todoIndex = todos.findIndex(todo => todo.id === req.params.id);
    if(todoIndex>=0){
        todos[todoIndex] = {...todos[todoIndex], 
            text:req.body.text}
            res.status(200).json({message:"Todo Updated",todo:todos[todoIndex]});
    }
    else{
        res.status(404).json({message:"Todo not found"})
    }
});

router.delete('/:id',(req,res,next) => {
    const todoIndex = todos.findIndex(todo => todo.id === req.params.id);
    if(todoIndex >=0){
        todos.splice(todoIndex,1);
        res.status(200).json({message:"Todo deleted"});
    }
    else
        res.status(404).json({message:"Todo not found"})

   // todos = todos.filter((todoItem) => todoItem.id !== req.params.id);
       //not prefered cause it doesnt check todo is available and we have to change const type of todos..

});




// module.exports=router;
export default router;

