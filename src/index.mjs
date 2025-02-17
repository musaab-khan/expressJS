import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(request,response)=>{
    response.status(200).send(
        {'msg':'Hello!'}
    )
})

app.get('/api/users',(request,response)=>{
    response.status(200).send([
        {'id':1,'name':'Musaab','fatherName':'Shahzad Ur Rehman'},
        {'id':2,'name':'Umair','fatherName':'Hamid Gujjar'},
        {'id':3,'name':'Saim','fatherName':'Aziz Bhatti'}
    ])
})

app.get('/',(request,response)=>{
    response.status(200).send({'msg':'Hello!'})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})