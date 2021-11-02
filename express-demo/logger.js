// logger 就是一个模块
const logger = (message) => {
    return (request, response, next) => {
        console.log(`${message} : ${request.url}`);
        next();
    }
}

module.exports = logger