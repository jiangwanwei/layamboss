var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var HomeViewUI = /** @class */ (function (_super) {
        __extends(HomeViewUI, _super);
        function HomeViewUI() {
            return _super.call(this) || this;
        }
        HomeViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HomeViewUI.uiView);
        };
        HomeViewUI.uiView = { "type": "View", "props": { "width": 600, "height": 1000 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 3, "skin": "ui/bg.jpg" } }] };
        return HomeViewUI;
    }(View));
    ui.HomeViewUI = HomeViewUI;
})(ui || (ui = {}));
(function (ui) {
    var RuleDialogUI = /** @class */ (function (_super) {
        __extends(RuleDialogUI, _super);
        function RuleDialogUI() {
            return _super.call(this) || this;
        }
        RuleDialogUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RuleDialogUI.uiView);
        };
        RuleDialogUI.uiView = { "type": "Dialog", "props": { "width": 600, "height": 1000 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/bg.jpg" } }, { "type": "Image", "props": { "y": 236, "x": 2, "skin": "ui/rule.png" } }, { "type": "Image", "props": { "y": 26, "x": 205, "skin": "ui/bad-guy.png" } }, { "type": "Image", "props": { "y": 843, "x": 18, "skin": "ui/rewards-box.png" } }, { "type": "Label", "props": { "y": 840, "x": 183, "width": 242, "var": "btn_begin", "height": 43 } }] };
        return RuleDialogUI;
    }(Dialog));
    ui.RuleDialogUI = RuleDialogUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map