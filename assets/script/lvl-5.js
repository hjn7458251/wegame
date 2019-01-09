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
        star: {
            type: cc.Node,
            default: null,
        },
        bg: {
            type: cc.Node,
            default: null,
        },
        obs1: {
            type: cc.Node,
            default: null,
        },
        obs2: {
            type: cc.Node,
            default: null,
        },
        obs3: {
            type: cc.Node,
            default: null,
        },
        obs4: {
            type: cc.Node,
            default: null,
        },
        return: {
            type: cc.Node,
            default: null,
        },
        speed: 500,
        dir: 0,
        count: 2,
        spacemAudio: {
            type: cc.AudioClip,
            default: null,
        },
        jumpAudio: {
            type: cc.AudioClip,
            default: null,
        },
        nextAudio: {
            type: cc.AudioClip,
            default: null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.return.on('touchstart', function (event) {
            cc.director.loadScene('start');
        }, this);
        this.rigidBody = this.getComponent(cc.RigidBody);
        cc.director.getPhysicsManager().enabled = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_pairBit |
        //     cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit;
    },

    jump() {
        this.rigidBody.linearVelocity = cc.v2(0, 650);
    },
    changeSound() {
        cc.audioEngine.playEffect(this.spacemAudio, false);
    },
    jumpSound() {
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },
    nextSound() {
        cc.audioEngine.playEffect(this.nextAudio, false);
    },

    onKeyDown(event) {
        var playState = this.getComponent(cc.Animation);
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                if (this.obs1.getComponent(cc.RigidBody).active == false) {
                    playState.play("leftwhite");
                }
                if (this.obs1.getComponent(cc.RigidBody).active == true) {
                    playState.play("leftblack");
                }
                this.dir = 1;
                break;
            case cc.macro.KEY.d:
                if (this.obs1.getComponent(cc.RigidBody).active == false) {
                    playState.play("rightwhite");
                }
                if (this.obs1.getComponent(cc.RigidBody).active == true) {
                    playState.play("rightblack");
                }
                this.dir = 2;
                break;
            case cc.macro.KEY.w:
                this.jumpSound();
                if (this.rigidBody.linearVelocity.y == 0) {
                    this.jump();
                }
                break;
            case cc.macro.KEY.space:
                this.changeSound();
                playState.play("rightblack");
                this.star.color = cc.color(0, 0, 0);
                this.bg.color = cc.color(255, 255, 255);
                this.obs1.color = cc.color(0, 0, 0);
                this.obs2.color = cc.color(85, 85, 85);
                this.obs3.color = cc.color(0, 0, 0);
                this.obs4.color = cc.color(85, 85, 85);
                this.obs1.getComponent(cc.RigidBody).active = true;
                this.obs2.getComponent(cc.RigidBody).active = false;
                this.obs3.getComponent(cc.RigidBody).active = true;
                this.obs4.getComponent(cc.RigidBody).active = false;
                if (this.count == 1) {
                    playState.play("rightwhite");
                    this.star.color = cc.color(255, 255, 255);
                    this.bg.color = cc.color(51, 51, 51);
                    this.obs1.color = cc.color(85, 85, 85);
                    this.obs2.color = cc.color(255, 255, 255);
                    this.obs3.color = cc.color(85, 85, 85);
                    this.obs4.color = cc.color(255, 255, 255);
                    this.obs1.getComponent(cc.RigidBody).active = false;
                    this.obs2.getComponent(cc.RigidBody).active = true;
                    this.obs3.getComponent(cc.RigidBody).active = false;
                    this.obs4.getComponent(cc.RigidBody).active = true;
                }
                break;
        }
    },
    onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.dir = 0;
                break;
            case cc.macro.KEY.d:
                this.dir = 0;
                break;
            case cc.macro.KEY.space:
                this.count--;
                if (this.count == 0) {
                    this.count = 2;
                }
                break;
        }
    },
    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.node.name == 'star') {
            this.nextSound();
            cc.director.loadScene('clear');
        }
        if (otherCollider.node.name == 'pd') {
            cc.director.loadScene('lvl-5');
        }
    },
    start() {
        this.obs1.getComponent(cc.RigidBody).active = false;
        this.obs2.getComponent(cc.RigidBody).active = true;
        this.obs3.getComponent(cc.RigidBody).active = false;
        this.obs4.getComponent(cc.RigidBody).active = true;
    },

    update(dt) {
        if (this.dir == 1) {
            this.node.x -= this.speed * dt;

        } else if (this.dir == 2) {
            this.node.x += this.speed * dt;
        }

    },
});
