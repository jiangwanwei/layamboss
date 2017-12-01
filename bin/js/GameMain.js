// 程序入口
var Handler = Laya.Handler;
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 1000, Laya.WebGL);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        // Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.bgColor = '#200d07';
        var resArray = [
            { url: 'res/atlas/ui.atlas', type: Laya.Loader.ATLAS },
            { url: 'ui/bg.jpg', type: Laya.Loader.IMAGE },
            { url: 'ui/rule.png', type: Laya.Loader.IMAGE },
        ];
        Laya.loader.load(resArray, Handler.create(this, this.resLoadComplete), Handler.create(this, this.resLoadProgress));
    }
    // 资源加载进度
    GameMain.prototype.resLoadProgress = function (num) {
        console.log(num);
    };
    // 资源加载完毕
    GameMain.prototype.resLoadComplete = function () {
        var home = new HomeView(), rule = new RuleDialog();
        Laya.stage.addChild(home);
        Laya.stage.addChild(rule);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map