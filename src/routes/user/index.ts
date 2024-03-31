import { FastifyPluginAsync } from 'fastify'
import {userSchema, typeBoxSchema} from './schema.js'



const testSchema = {
    schema: {
        body : {
            type : 'object',
            properties : {
                id: {
                    type:'string'
                },
                name : {type:'string'},
                password : {type : 'string'},
            }
        },
    }
}




const userRoute: FastifyPluginAsync = async (fastify) => {
    fastify.get('/test', async () => {
        return "it's working!"
    })

    fastify.post('/test1', testSchema, async () => {
        return "it's working 1!"
    })

    fastify.post('/test2', { schema: typeBoxSchema }, async () => {
        
        return "it's working 2!"
    })

    fastify.post('/test3', { 
        schema: {
            body : {
                type : 'object',
                properties: {
                    username: {type:'string'}
                }
            }
        } 
        
    }, async () => {
        
        return "it's working 3!"
    })
}
  
  export default userRoute