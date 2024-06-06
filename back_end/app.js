    var express = require('express');
    // const router=express.Router();
    var cors = require('cors')  //这个模块是用来解决跨域问题的
    let vertoken = require('./utils/token.ts') 
    var expressJwt =  require('express-jwt')
    const { expressjwt } = expressJwt

    // const my_path =  require('path')
    // const { path } = my_path


    var app = express();

    app.use(cors());  //每个请求发过来都会执行这个函数

    /* 
        这些app.use()一定要写在那些app.get()/app.post()的上面，因为nodejs是从上往下执行的。
    */
    //解析token获取用户信息---前端请求头传过来的token
    app.use( (req, res, next) => {
        var token = req.headers['authorization'];
        if (!token) {
            console.log('因为是登录，所以token为空')
            next();
        } else {
            vertoken.getToken(token).then((data) => {
                console.log(data, '前端请求头带过来的token')
                next();
            }).catch((error) => {  //token过期也会走这一块
                console.log(error,'解析token出错')
                next();
            })
        }
    });

    //验证token是否过期并规定那些路由不需要验证
    app.use(expressjwt({
        secret: 'jwt_token_sign',
        algorithms: ['HS256']  //算法
    }).unless({
        //'/login',
        path: [ '/login', '/register']   //不需要验证的接口名称
    }))

    //token失效返回信息
    app.use( ( err, req, res, next )=>{
        console.log(err, 'token失效')
        if ( err.status === 401 ) {
            return res.status(401).send('token失效');
            //可以设置返回json 形式  res.json({message:'token失效'})
        }
        next()
    } )




      
    //这是第一个路由
    app.get('/', function (req, res) {
        // res.send('又教你搭建了一次，你要记住下次怎么搭建了的');
        // vertoken.setToken([req.query.username, req.query.userpassword]).then(token => {
        // vertoken.setToken(['!Qq11111', '!Qq11111']).then(token => {
        //     console.log(token,4444444444);
        //     res.json({
        //         code: 200,
        //         message: '登录成功',
        //         token: token
        //         //前端获取token后存储在localStroage中,
        //         //**调用接口时 设置axios(ajax)请求头Authorization的格式为`Bearer ` +token
        //     })
        // })
    })

    //这是登录路由
    app.get("/login", (req,res)=>{
        let a,b;
        a = req.query.username;
        b = req.query.userpassword;
        var sql=` SELECT * FROM users WHERE username='${a}' AND userpassword='${b}' `;
        connection.query(sql,[],(err,result)=>{
            if( err ){  //当查表不成功就会走这一块
                res.send( err );
                console.log( '出错啦',err );
            }else{
                setTimeout(function(){  //搞个定时器模拟一下网络延迟的效果
                    if ( result.length === 0 ) {
                        res.json( { message:"用户名或密码错误！！！" } );
                    } else {
                        // res.send('请求成功');
                        //登录成功生成token
                        vertoken.setToken( a, b ).then(token => {
                            res.json({
                                code: 200,
                                message: '登录成功',
                                token: token
                                //前端获取token后存储在localStroage中,
                                //**调用其它接口时 设置axios(ajax)请求头Authorization的格式为`Bearer +token` 
                            })
                        })
                        // const x = JSON.stringify(result[0])
                        // const obj = JSON.parse(x)
                        // for ( key in obj ) {
                        //     console.log( !(key === 'message') )
                        //     if ( key === 'userpassword' ) {
                        //         delete obj[key]
                        //     } else if ( !(key === 'message') ) {
                        //         obj['message'] = '登录成功！！！'
                        //     }
                        // }
                        // res.json( obj )
                    } 
                },1000)
            }
        })
    })


    //这是商品列表路由
    app.get( '/product_list', ( req, res )=>{
        console.log('走的这里，product_list')
        var sql=` SELECT * FROM product_list`;
        connection.query(sql,[],(err,result)=>{
            if( err ){  //当查表不成功就会走这一块
                res.send( err );
                console.log( '出错啦',err );
            }else{
                setTimeout(function(){  //搞个定时器模拟一下网络延迟的效果
                    if ( result.length === 0 ) {
                        res.json( { message:"查表出错！！！" } );
                    } else {
                        // console.log('查表成功', result)
                        res.json( result )
                    } 
                },2000)
            }
        })
    } )

    var server = app.listen(8081, function () {
    
        var host = server.address().address
        var port = server.address().port
    
        console.log("应用实例，访问地址为 http://localhost:8081/")
    })

    var mysql = require('mysql2');  //一定要装mysql2这个版本的
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'back_stage_management'
    });
    
    connection.connect();
    
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });

