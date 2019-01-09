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
        chose: {
            type: cc.Node,
            default: null,
        },
        exit: {
            type: cc.Node,
            default: null,
        },
        begin: {
            type: cc.Node,
            default: null,
        },
        bgmAudio: {
            type: cc.AudioClip,
            default: null,
        },
    },


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.begin.on('touchstart', function (event) {
            this.bgmSound();
            cc.director.loadScene('lvl-1');
        }, this);
        this.exit.on('touchstart', function (event) {
            cc.game.end();
        }, this);
        this.chose.on('touchstart', function (event) {
            this.bgmSound();
            cc.director.loadScene('select');
        }, this);
    },

    bgmSound() {
        cc.audioEngine.playMusic(this.bgmAudio, false);
    },
    start() {

    },

    // update (dt) {},
});
