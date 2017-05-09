/**
 * Created by Administrator on 2017/5/9.
 */
const mongoose = require('mongoose');
//创建模型
const kittySchema = mongoose.Schema({
    name:String//定义字段
})
//将这个模型应用到集合里面去,这个数据库会自动生成kittens集合
const kitten = mongoose.model('kitten',kittySchema);
module.exports =  kitten;


