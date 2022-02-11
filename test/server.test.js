const app = require('../server')
const chai = require("chai");
const chaiHttp = require("chai-http");

const {expect} = chai
chai.use(chaiHttp)
describe('Server',()=>{
    it('welcomes user to api', done=>{
        const url = '/user'
        chai
            .request(app)
            .get(url)
            .end((err, res)=>{
                console.log('-->>',res.body)
                expect(res).to.have.status(200)
                expect(res.body.message).to.equals(url)
                done();
            })
    })
})