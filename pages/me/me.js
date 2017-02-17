var base64 = require("../images/base64")
var app = getApp()

Page({
    data: {
        userInfo: {}
    },
    onLoad: function () {
        var that = this
        app.getUserInfo(function (userInfo) {
            console.log(userInfo)
            that.setData({
                userInfo: userInfo,
                icon20: base64.icon20,
                icon60: base64.icon60
            })
        })
    }
})