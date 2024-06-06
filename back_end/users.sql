SET NAMES UTF8;
DROP DATABASE IF EXISTS back_stage_management; #删库
CREATE DATABASE back_stage_management CHARSET=UTF8; #创建数据库
USE back_stage_management; #进入数据库
# 创建一个表（users）
CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, #这是用户的id,是用户的唯一标识，由系统自动生成
    username VARCHAR(32),  #这是用户名
    userpassword VARCHAR(32)  #这是用户密码，最后一列不能有逗号否则会报错
);
INSERT INTO users (id, username, userpassword) VALUES (null, '!Qq11111', '!Qq11111');
#还没有插入数据

# 创建一个表（product_list）
CREATE TABLE product_list(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  #这是用户id，是用户的唯一标识，由系统自动生成
    product_name VARCHAR(32),  #这是商品名称
    price VARCHAR(32)  #这是商品价格
);
INSERT INTO product_list (id, product_name, price) VALUES
(null, '鼠标', '108元'),
(null, '键盘', '208元'),
(null, 'U盘', '208元'),
(null, '内存卡', '208元'),
(null, '机械硬盘', '808元'),
(null, '固态硬盘', '808元'),
(null, '内存条', '408元'),
(null, '杀毒软件', '1080元')