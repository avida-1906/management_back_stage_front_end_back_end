const jwt = require('jsonwebtoken')

const jwt_token_sign = 'jwt_token_sign'  //签名

//生成token
const setToken = (user_name, user_id) => {
    return new Promise( (resolve, reject)=>{
        //expiresln 设置token过期的时间
        //{ user_name: user_name, user_id: user_id } 传入需要解析的值（ 一般为用户名，用户id 等）
        const token = jwt.sign( { user_name, user_id }, jwt_token_sign, { expiresIn: 120 } )
        resolve(`Bearer ${token}`)
    } )
}

//各个接口需要验证token的方法
const getToken = (token) => {  //获取前端请求头带过来的token
    return new Promise( (resolve, reject)=>{
        if (!token) {
            console.log('token是空的')
            reject({
                error: 'token是空的'
            })
        } else {
            const info = jwt.verify(token.split(' ')[1], jwt_token_sign)
            resolve(info)
        }
    } )
}

module.exports = { setToken, getToken }