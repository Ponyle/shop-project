
let path = require('path')
let resolve = str => path.resolve(__dirname,'src',str)

module.exports = {
    devServer:{
        proxy:'http://localhost'
    },
    // devServer:{
    //     port:6666
    // },
    lintOnSave: "warning",
    chainWebpack:config=>{
        config.plugin('html').tap(args =>{
            args[0].title = "乐乐"
            return args
        })
        config.resolve.alias
            .set('~',resolve('components'))

            .set('@',resolve('views'))
            .set('assets',resolve('assets'))
    }
}