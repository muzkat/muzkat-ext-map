/**
 * Created by bnz on 10/30/16.
 */
Ext.define('extMap.view.muzkatMap.osm', {
    extend: 'extMap.view.muzkatMap.maps.baseMap',
    alias: 'widget.muzkatOsmMap',

    listeners: {
        afterrender: function (cmp) {

            var osmLayer = new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),

                city = ol.proj.transform([44.49, 56.18], 'EPSG:4326', 'EPSG:3857'),

                view = new ol.View({
                    center: city,
                    zoom: 6
                });

            this.map = new ol.Map({
                target: cmp.body.dom.id,
                renderer: 'canvas',
                layers: [osmLayer],
                view: view
            });

        },
        resize: function () {
            this.map.updateSize();
        }
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            iconCls: 'x-fa fa-cog',
        }]
    }]
});
