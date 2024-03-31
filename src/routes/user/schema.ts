import { FastifySchema } from 'fastify'

import { Type } from '@sinclair/typebox'
import { Nullable } from '../../lib/typebox.js'

export const userSchema : FastifySchema = {
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

export const typeBoxSchema = Type.Object({
    id:Type.String(),
    username: Type.String(),
    password: Type.String(),
    address:Nullable(Type.String())
})
  