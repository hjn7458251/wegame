// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        one: {
            type: cc.Node,
            default: null,
        },
        two: {
            type: cc.Node,
            default: null,
        },
        three: {
            type: cc.Node,
            default: null,
        },
        four: {
            type: cc.Node,
            default: null,
        },
        five: {
            type: cc.Node,
            default: null,
        },
        ret: {
            type: cc.Node,
            default: null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.one.on('touchstart', function (event) {
            cc.director.loadScene('lvl-1');
        }, this);
        this.two.on('touchstart', function (event) {
            cc.director.loadScene('lvl-2');
        }, this);
        this.three.on('touchstart', function (event) {
            cc.director.loadScene('lvl-3');
        }, this);
        this.four.on('touchstart', function (event) {
            cc.director.loadScene('lvl-4');
        }, this);
        this.five.on('touchstart', function (event) {
            cc.director.loadScene('lvl-5');
        }, this);
        this.ret.on('touchstart', function (event) {
            cc.director.loadScene('start');
        }, this);
    },

    start () {

    },

    // update (dt) {},
});
