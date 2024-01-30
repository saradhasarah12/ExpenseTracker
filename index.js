const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/',(reeq,res)=>{
    res.send('hello World')
})

app.listen(port,()=>{
    console.log(`Example app${port}`)
})