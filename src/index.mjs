import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(request,response)=>{
    response.status(200).send(
        {'msg':'Hello!'}
    )
})

const mockUsers=[
    {'id':1,'name':'Musaab','fatherName':'Shahzad Ur Rehman'},
    {'id':2,'name':'Umair','fatherName':'Hamid Gujjar'},
    {'id':3,'name':'Saim','fatherName':'Aziz Bhatti'}
]

app.get('/api/users',(request,response)=>{
    console.log(request.query);
    const {
        query:{filter, value}
    } = request;

    if(filter && value) return response.send(mockUsers.filter((user)=>{
        return user[filter].includes(value);
    }));
    return response.send(mockUsers);
})

app.get('/api/users/:id',(request,response)=>{
    
    const  parsedId= parseInt(request.params.id);

    if (isNaN(parsedId)) {
        return response.status(400).send({msg:'Bad Request. Invalid ID'});
    }

    const user=mockUsers.find((user)=>(user.id===parsedId));

    if(user){
        return response.status(200).send(user);
    }
    else{
        return response.status(404).send({msg:'User not found'});
    }

})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})