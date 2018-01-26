/**
 * Created by bnz on 10/30/16.
 */
Ext.define('muzkatMap.muzkatosm', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.muzkatOsm',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    title: 'Muzkat Open Street Map',

    hideDetails: undefined, // set by constructor - default: false

    initComponent: function () {
        this.items =
            [
                {xtype: 'muzkatMapDetails', flex: 1, hidden: this.hideDetails},
                {xtype: 'muzkatOsmMap', flex: 5}
            ];
        this.callParent(arguments);
    },

    addMarker: function (markerObj) {
        this.down('muzkatMapDetails').addMarkerToStore(markerObj);
    },

    getMapReference: function () {
        return this.down('muzkatOsmMap').map;
    }
});
