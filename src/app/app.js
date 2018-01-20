/**
 * Created by bnz on 1/20/18.
 */
var appName = 'MuzkatMap';
var mainComponent = 'muzkatMap';

Ext.define(appName + '.MainApplication', {
    extend: 'Ext.container.Container',

    layout: 'fit',

    // TODO: dynamic from config
    items: [{
        xtype: mainComponent
    }]
});

Ext.application({
    name: appName,
    mainView: appName + '.MainApplication',
    launch: function () {
        Ext.log(appName + ' booted!');
    }
});

