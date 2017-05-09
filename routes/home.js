/**
 * Created by Administrator on 2017/5/9.
 */
//首页的所有请求都写在这里
exports.index = (req,res,next) => {
    res.render('index',{
        title:"我的首页",
    })
}