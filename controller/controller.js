import Questions from "../model/questionSchema.js";
import Result from "../model/resultSchema.js";
import question ,{ answers } from '../database/data.js'
//get all questions
export async function getQuestions(req,res){
    try{
 const q =await Questions.find();
 res.json(q)
    } catch(error){
        res.json({ error })
    }
}

//insert all questions
export async function insertQuestions(req,res){
    try{
Questions.insertMany({ questions : question,answers :answers} ,function(err,data){
    res.json({msg:"data saved succes fully"})
})
    }
    catch(error){
res.json({ error })
    }
}
//delete all questions
export async function dropQuestions(req,res){
   try{
  await Questions.deleteMany();
  res.json({msg:"Question deleted succesfully"})
   } catch(error){
    res.json({error})
   }
}
//get alll result
export async function getResult(req,res){
try{
const r=await Result.find();
res.json(r)
}catch(error){
    res.json({error})
}
}
//post all result
export async function storeResult(req,res){
   try{
const {username,result,attempts,points,achived}= req.body;
if(!username && !result) throw new Error('Data Not Provided...');
Result.create({username,result,attempts,points,achived},function(err,data){
    res.json({msg:"Result saved successfully"})
})
   }catch(error){
    res.json({error})
   }
}
//delet al result
export async function dropResult(req,res){
   try{
await Result.deleteMany();
res.json({msg : "result Deleted SuccessFullt"})
   }catch(error){
    res.json({error})
   }
}