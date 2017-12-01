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
var RuleDialog = /** @class */ (function (_super) {
    __extends(RuleDialog, _super);
    function RuleDialog() {
        var _this = _super.call(this) || this;
        _this.num = 0;
        _this.btn_begin.on(Laya.Event.CLICK, null, function () {
            console.log(_this.num += 1);
        });
        return _this;
    }
    return RuleDialog;
}(ui.RuleDialogUI));
//# sourceMappingURL=RuleDialog.js.map