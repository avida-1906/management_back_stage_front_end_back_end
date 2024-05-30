    var express = require('express');
    const router=express.Router();
    var cors = require('cors')  //这个模块是用来解决跨域问题的
    var app = express();

    //跨域白名单
    // var whitelist = ['http://localhost:5173']
    //参数
    // var corsOptions = {
    //     credentials: true, //允许客户端携带验证信息
    //     origin: function (origin, callback) { 
    //         console.log(origin,'444444444444444')
    //         if (origin) return callback(null, true)
    //         callback(new Error('Not allowed by CORS'));
    //     }
    // } 
      
    //这是第一个路由
    // app.get('/', function (req, res) {
    //     res.send('又教你搭建了一次，你要记住下次怎么搭建了的');
    // })
    //这是第二个路由
    // app.get('/user_list', function (req, res) {
    //     res.send('这是用户列表');
    // })

    //第二个实参是解决跨域的不给cors()传参就是允许所有源
    app.get("/", cors(), (req,res)=>{
        console.log(req.query, '99999999999999999')
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
                console.log(result, '这里执行了')
                if ( result.length === 0 ) { 
                    res.json( { message:"用户名或密码错误！！！" } );
                 } else {
                    // res.send('请求成功');
                    res.json( { message:"登陆成功！！！" } );
                } 
            },5000)
            
            /*res.writeHead(200,{
                "Access-Control-Allow-Origin":
                "*"
            });
            res.write(JSON.stringify(result));
            res.end();*/
            }
        })
    })



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

