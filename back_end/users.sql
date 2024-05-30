SET NAMES UTF8;
DROP DATABASE IF EXISTS back_stage_management; #删库
CREATE DATABASE back_stage_management CHARSET=UTF8; #创建数据库
USE back_stage_management; #进入数据库
# 创建一个表（users）
CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, #这是用户的id,是用户的唯一标识，由系统自动生成
    username VARCHAR(32), #这是用户名
    userpassword VARCHAR(32), #这是用户密码，最后一列不能有逗号否则会报错
    token VARCHAR(255) #这是用户登陆成功后返回的token
);
INSERT INTO users (id, username, userpassword, token) VALUES (null, '!Qq11111', '!Qq11111', 'JUsBZjpIujDFgJVpIXU5WW0glYrNptNjyR6aXw4eEqKcPUXbpK3Xd18YZm2nxOUXdoPsmfdp3Ti6tY7YnHXBgf89gFmL9hcBThDW8QJzCoVHrUtVya9rxIctlz3mfVOlUGc=')
#还没有插入数据