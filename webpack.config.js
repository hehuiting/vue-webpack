const path=require('path')  //path是node.js里面的一个基本包
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //安装vue-loader时需要的插件
const HTMLPlugin=require('html-webpack-plugin')   //生成html页面的插件
const webpack=require('webpack')

const isDev=process.env.NODE_ENV==='development'  //isDev判断是否为开发环境
//main.js中的文件进行打包
const config={
    target:'web',
    entry:path.join(__dirname,'./src/main.js'),  //__dirname为当前项目的根目录
    output:{
        filename:'boundle.js',
        path:path.join(__dirname,'dist')  //输入路径及文件名称
    },
   
    module:{
        rules:[
            {
                test:/.vue$/,  //检测文件类型
                loader:'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'                  //处理jsx文件
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
              },
             
              {
                test: /\.styl(us)?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true,
                        }
                    },
                    'stylus-loader',
                ]
              },
              {
                  test:/\.(gif|png|jpg|svg)$/,
                  use:[
                      {
                          loader:'url-loader',
                          options:{
                              limit:1024,
                              name:'[name]-hht.[ext]'
                          }
                      }
                  ]
              }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDev?'"development"':'"production'
            }
        }),
        new HTMLPlugin(),
        new VueLoaderPlugin()
    ]
}
if(isDev){
    // 方便代码调试
    config.devtool='#cheap-module-eval-source-map'
    //服务访问地址
    config.devServer={
        port:8091,
        // host:'localhost',
        overlay:{
            errors:true, //定位错误
        },
        // open:true  //自动在浏览器中打开
        hot: true  //实现热加载，代码更改后实现页面的局部更新
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()      
    )
}
module.exports=config