// 程序入口
import LayaHandler = Laya.Handler;
class GameMain{
    constructor(){
        Laya.init(600, 1000, Laya.WebGL);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        // Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        
        var resArray:Array<any> = [
            {url: 'res/atlas/ui.atlas', type: Laya.Loader.ATLAS},
            {url: 'ui/bg.jpg', type: Laya.Loader.IMAGE},
            {url: 'ui/rule.png', type: Laya.Loader.IMAGE},
        ]
        Laya.loader.load(
            resArray, 
            LayaHandler.create(this, this.resLoadComplete), 
            LayaHandler.create(this, this.resLoadProgress)
        )
    }
    // 资源加载进度
    resLoadProgress(num: number):void {
        console.log(num)
    }
    // 资源加载完毕
    resLoadComplete():void {
        var home:HomeView = new HomeView(),
            rule:RuleDialog = new RuleDialog();
        Laya.stage.addChild(home);
        Laya.stage.addChild(rule);
    }
}
new GameMain();