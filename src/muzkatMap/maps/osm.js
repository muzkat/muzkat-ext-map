Ext.define('muzkatMap.maps.osm', {
    extend: 'muzkatMap.baseMap',
    alias: 'widget.muzkatOsmMap',

    lat: 52.5,
    lng: 13.4,

    height: 600,

    map: undefined, // map reference

    listeners: {
        afterrender: function (cmp) {
            cmp.initMap();
        },
        resize: function (cmp) {
            cmp.reLayoutMap();
        }
    },

    reLayoutMap: function () {
        if (Ext.isDefined(this.map)) {
            this.map.invalidateSize();
        }
    },

    initMap: function () {
        var me = this;
        this.setLoading('Map wird geladen...');
        this.loadMapScripts().then(function (success) {
            console.log('yolo');
            Ext.defer(function () {
                me.map = L.map(me.body.dom.id, {
                    center: [me.lat, me.lng],
                    zoom: 12,
                    zoomControl: true,
                    preferCanvas: true
                });

                L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(me.map);
                L.tileLayer.provider('OpenSeaMap').addTo(me.map);
                me.reLayoutMap();
                me.setLoading(false);
            }, 1500);

        }, function (error) {
            console.log('errrror');
        });
    },

    cssPaths: [],
    scriptPaths: [
        'http://unpkg.com/leaflet@1.0.3/dist/leaflet.css',
        'http://unpkg.com/leaflet@1.0.3/dist/leaflet.js',
        '/leaflet-providers.js'
    ],

    loadMapScripts: function () {
        var loadingArray = [], me = this;
        return new Ext.Promise(function (resolve, reject) {
            Ext.Array.each(me.scriptPaths, function (url) {
                loadingArray.push(me.loadMapScript(url));
            });

            Ext.Promise.all(loadingArray).then(function (success) {
                    console.log('artefacts were loaded successfully');
                    resolve('Loading was successful');
                },
                function (error) {
                    reject('Error during artefact loading...');
                });
        });
    },

    loadMapScript: function (url) {
        return new Ext.Promise(function (resolve, reject) {
            Ext.Loader.loadScript({
                url: url,
                onLoad: function () {
                    console.log(url + ' was loaded successfully');
                    resolve('Loading was successful');
                },
                onError: function (error) {
                    reject('Loading was not successful for: ' + url);
                }
            });
        });
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            iconCls: 'x-fa fa-plus'
        },{
            iconCls: 'x-fa fa-plus'
        },{
            xtype: 'tbfill'
        },{
            iconCls: 'x-fa fa-reset'
        },{
            iconCls: 'x-fa fa-cog'
        }]
    }]
});
