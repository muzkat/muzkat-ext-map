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

    items: [
        {xtype: 'muzkatMapDetails', flex:1},
        {xtype: 'muzkatOsmMap', flex: 5}
    ],

    addMarker: function (markerObj) {
        this.down('muzkatMapDetails').addMarkerToStore(markerObj);
    },

    getMapReference: function () {
        return this.down('muzkatOsmMap').map;
    }
});
