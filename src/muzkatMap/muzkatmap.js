/**
 * Created by bnz on 10/30/16.
 */
Ext.define('muzkatMap.muzkatMap', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.muzkatMap',

    layout: 'fit',
    title: 'ExtJs Universal Map component by muzkat',
    header: true,
    hideDetails: false,

    initComponent: function () {

        this.items = [
            {
                xtype: 'muzkatOsm',
                header: this.header,
                hideDetails: this.hideDetails
            }
        ];

        this.callParent(arguments);
    }
});
