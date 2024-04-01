
import Fastify from 'fastify'
import { request, Server } from 'http'
import routesIndex from './routes/routesIndex.js'

const apiServer = Fastify({
    logger:true
})


//아래 url에서 ts-node 에러 확인하기
//https://www.inflearn.com/course/lecture?inst=7c7a50f4&courseSlug=%EC%B0%A8%EC%84%B8%EB%8C%80-%EB%85%B8%EB%93%9C-%EB%B0%B1%EC%97%94%EB%93%9C-%EC%84%9C%EB%B2%84-%EA%B0%9C%EB%B0%9C&unitId=204790&tab=community&category=questionDetail&q=1182979
const serverStart = async () => {
    try {
        await apiServer.listen({port:8083})
        console.log('Server Start!!')
    } catch (error) {
        apiServer.log.error(error)
        process.exit(1)
    }
}

apiServer.register(routesIndex)

serverStart()
