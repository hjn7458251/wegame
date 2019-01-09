"use strict";
cc._RF.push(module, 'cbc8dNWL9NFnpqguhaA/nfW', 'clear');
// script/clear.js

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
        again: {
            type: cc.Node,
            default: null
        },
        exit: {
            type: cc.Node,
            default: null
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.again.on('touchstart', function (event) {
            cc.director.loadScene('start');
        }, this);
        this.exit.on('touchstart', function (event) {
            cc.game.end();
        }, this);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();