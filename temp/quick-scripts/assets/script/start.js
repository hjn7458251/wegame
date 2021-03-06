(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/start.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0a5b7AKRBlFk5KS7xji4dzn', 'start', __filename);
// script/start.js

'use strict';

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
            default: null
        },
        exit: {
            type: cc.Node,
            default: null
        },
        begin: {
            type: cc.Node,
            default: null
        },
        bgmAudio: {
            type: cc.AudioClip,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
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
    bgmSound: function bgmSound() {
        cc.audioEngine.playMusic(this.bgmAudio, false);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=start.js.map
        