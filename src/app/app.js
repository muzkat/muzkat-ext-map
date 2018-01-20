var appDescriptor = {
    name: undefined,
    mainComponent: undefined
};

var app = {
    appDescriptor: undefined,
    app: undefined,
    launchApp: function (descriptor) {
        this.appDescriptor = descriptor;
        this.defineBaseClass(appDescriptor.name, appDescriptor.mainComponent);
        this.start();
    },
    defineBaseClass: function (name, mainComponent) {
        Ext.define(name + '.MainApplication', {
            extend: 'Ext.container.Container',
            layout: 'fit',

            items: [{
                xtype: mainComponent
            }]
        });
    },
    start: function () {
        var me = this;
        this.app = Ext.application({
            name: me.appDescriptor.name,
            mainView: me.appDescriptor.name + '.MainApplication',
            launch: function () {
                Ext.log(me.appDescriptor.name + ' booted!');
            }
        });
    }
};

appDescriptor.name = 'MuzkatMap';
appDescriptor.mainComponent = 'muzkatMap';
app.launchApp(appDescriptor);