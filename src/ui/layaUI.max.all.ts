
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class HomeViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":600,"height":1000},"child":[{"type":"Image","props":{"y":0,"x":3,"skin":"ui/bg.jpg"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HomeViewUI.uiView);

        }

    }
}

module ui {
    export class LoadingUI extends Dialog {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"Dialog","props":{"width":200,"height":40},"child":[{"type":"Label","props":{"y":0,"x":0,"width":200,"text":"loading","height":40,"fontSize":25,"color":"#ffffff","align":"center"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"text":[{"value":"loading","tweenMethod":"linearNone","tween":false,"target":2,"key":"text","index":0},{"value":"loading .","tweenMethod":"linearNone","tween":false,"target":2,"key":"text","index":20},{"value":"loading . .","tweenMethod":"linearNone","tween":false,"target":2,"key":"text","index":40},{"value":"loading . . .","tweenMethod":"linearNone","tween":false,"target":2,"key":"text","index":60},{"value":"loading ","tweenMethod":"linearNone","tween":false,"target":2,"key":"text","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoadingUI.uiView);

        }

    }
}

module ui {
    export class RuleDialogUI extends Dialog {
		public btn_begin:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":600,"height":1000},"child":[{"type":"Image","props":{"y":236,"x":2,"skin":"ui/rule.png"}},{"type":"Image","props":{"y":26,"x":205,"skin":"ui/bad-guy.png"}},{"type":"Image","props":{"y":843,"x":18,"skin":"ui/rewards-box.png"}},{"type":"Label","props":{"y":840,"x":183,"width":242,"var":"btn_begin","height":43}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RuleDialogUI.uiView);

        }

    }
}
