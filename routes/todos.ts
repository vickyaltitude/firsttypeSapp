import { Router } from "express";
import {Todos} from '../models/todoInter';

const router = Router();

type reqBody = {text : string}
type reqParams = {id : string}
let todos: Todos[] = [];

router.get('/',(req,res,next)=>{
   res.status(200).json({todos:todos})
})

router.post('/',(req,res,next)=>{
    const body = req.body.text as reqBody
    const todoRec: Todos = {
        id: new Date().toISOString(),
        value: body.text 
    }
    todos.push(todoRec)
    res.status(201).json({msg:'todos inserted successfully'})
 })

 router.patch('/:id',(req,res,next)=>{
    const body = req.body.text as reqBody
    const paramsId = req.params as reqParams;
    const ind = todos.findIndex(val =>{
        return val.id = paramsId.id;
    })
    if(ind){
        todos[ind].value = body.text;
        res.status(200).json({msg:"todos edited successfully" , todosL: todos})
    }else{
        res.status(404).json({msg:"something went wrong" })
    }
    
    
 })

 router.delete('/:id',(req,res,next)=>{
    const paramsId = req.params as reqParams;
    todos = todos.filter(val =>{
        return val.id !== paramsId.id
    })
    res.status(200).json({msg: 'deleted successfully',todosL: todos})
 })
export default router;