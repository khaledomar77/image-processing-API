import supertest from 'supertest'
import app from '../main'

const request=supertest(app)

describe('test the main get / endpoint', ()=>{
    it('should return OK response',async()=>{
       const response= await request.get('/')
       console.log(`API status code:${response.statusCode}`)
    })
})


describe('test the image processing get resize/ endpoint',()=>{
    it('should return OK response',async () => {
        const response=await request.get('/resize')
        console.log(`API status code:${response.statusCode}`)
    })
})