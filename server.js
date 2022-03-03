const app = require('express')()
const port = process.env.PORT || 8888
console.log(process.env)
app.get('/*',(req, res)=>{
    res.json({
        message: req.url
    })
    res.status(200)
})
app.listen(port,()=>console.log(`server is  running on port is ${port}`))
module.exports = app

