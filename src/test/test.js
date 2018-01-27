Ext.define('muzkatMap.test', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.muzkatTest',

    items: [{
        xtype: 'muzkatMap'
    }, {
        xtype: 'muzkatMapWidget'
    }]
});
