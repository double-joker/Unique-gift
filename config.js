// 
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "主角登场",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "送礼物",  // 同上...
        "今天是你的生日",
        "这是我认识你的",
        "第一个生日！",
        "这段时间以来，我见过你",
        "毕业的样子",
        "一本正经的样子",
        "吃饭都不忘摆拍的样子",
        "都是独一无二的样子",
        "对了，礼物收全了吗？",
        "今年要吃好好的！",
        "耍好好的！",
        "然后才能更好的练琵琶",
        "和~",
        "再次祝你生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "主角登场": "./imgs/2.jpg",
        "送礼物": "./imgs/3.jpg",
        "今天是你的生日": "./imgs/shengri.jpeg",
        "这是我认识你的": "./imgs/4.jpg",
        "第一个生日！": "./imgs/5.jpg",
        "这段时间以来，我见过你": "./imgs/yangzi.jpeg",
        "毕业的样子": "./imgs/6.jpg",
        "一本正经的样子": "./imgs/7.jpg",
        "吃饭都不忘摆拍的样子": "./imgs/8.jpg",
        "都是独一无二的样子": "./imgs/9.jpg",
        "对了，礼物收全了吗？": "./imgs/chuo.gif",
        "今年要吃好好的！": "./imgs/chihaodian.jpeg",
        "耍好好的！": "./imgs/10.jpg",
        "然后才能更好的练琵琶": "./imgs/11.jpg",
        "和~": "./imgs/12.jpg",
        "再次祝你生日快乐~~": "./imgs/13.jpg"
    },

    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "上点特色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐呀～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '送给李慧敏好友友！'
};
