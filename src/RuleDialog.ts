class RuleDialog extends ui.RuleDialogUI {
    num:number = 0;
    constructor() {
        super();
        this.btn_begin.on(Laya.Event.CLICK, null, () => {
            console.log(this.num += 1);
        })
    }
}