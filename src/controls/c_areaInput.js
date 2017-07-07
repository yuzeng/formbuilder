/**
 * Created by jun on 2017/6/8.
 */
define(function (require, exports, module) {
    var baseControl=require('./base');
    var txtEditor=require('../editors/e_txt');
    module.exports = baseControl({
        key:'areaInput',
        view:"<p>{{txt}}：</p><textarea v-bind:name='field_name'></textarea>",
        model:{txt:'Text'},
        editor: new txtEditor(["请输入标题:txt:1"])
    });
})