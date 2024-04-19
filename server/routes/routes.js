// server directly response to http
export default defineEventHandler((event) => {
    return {
      hello: 'world'
    }
  })