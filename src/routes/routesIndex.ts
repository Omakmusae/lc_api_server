import { FastifyPluginAsync } from 'fastify'
import userRoute from './user/index.js' //

const routesIndex: FastifyPluginAsync = async (fastify) => {
  fastify.register(userRoute, {prefix: '/api' })

  //service 추가 시, route에 추가
  //fastify.register(apiIndex, {prefix: '/api' })
}


export default routesIndex