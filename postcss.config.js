const autoprefixer=require('autoprefixer')

module.exports={
    plugins:[
        autoprefixer()
    ]
}

//PostCss会对CSS代码进行优化
//主要是解决不同浏览器识别码的问题
//-ms代表【ie】内核识别码
//-moz代表火狐【firefox】内核识别码
//-webkit代表谷歌【chrome】/苹果【safari】内核识别码
//-o代表欧朋【opera】内核识别码