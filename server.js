const app = require('express')()
const port = process.env.port || 8888

app.get('/*',(req, res)=>{
    res.json({
        message: req.url
    })
    res.status(200)
})
app.listen(port,()=>console.log(`server is  running on port is ${port}`))
module.exports = app