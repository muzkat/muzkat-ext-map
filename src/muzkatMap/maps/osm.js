Ext.define('muzkatMap.maps.osm', {
    extend: 'muzkatMap.baseMap',
    alias: 'widget.muzkatOsmMap',

    title: 'Open Street / Open Sea Map',

    coords: {
        berlin: {
            lat: 52.5,
            lng: 13.4,
            zoom: 12
        },
        trogir: {
            lat: 43.51561484804046,
            lng: 16.250463724136356,
            zoom: 15
        }
    },

    defaultCenter: 'trogir',

    // height: 600,

    map: undefined, // map reference

    listeners: {
        afterrender: function (cmp) {
            cmp.initMap(cmp.coords[cmp.defaultCenter]);
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

    initMap: function (loc) {
        var me = this;
        this.setLoading('Map wird geladen...');
        this.loadMapScripts().then(function (success) {
            Ext.defer(function () {
                me.map = L.map(me.body.dom.id, {
                    center: [loc.lat, loc.lng],
                    zoom: loc.zoom,
                    zoomControl: false,
                    preferCanvas: false
                });

                me.toggleLayer('OpenStreetMap.BlackAndWhite');
                me.reLayoutMap();
                me.setLoading(false);
            }, 1500);

        }, function (error) {
            console.log('errrror');
        });
    },

    addTileLayer: function (tileLayer) {
        this.activeLayers[tileLayer] = L.tileLayer.provider(tileLayer).addTo(this.map);
    },

    activeLayers: {},

    toggleLayer: function (tileLayer) {
        if (tileLayer in this.activeLayers) {
            this.map.removeLayer(this.activeLayers[tileLayer]);
            delete this.activeLayers[tileLayer];
            Ext.log('layer ' + tileLayer + ' removed');
        } else {
            Ext.log('layer ' + tileLayer + ' added');
            this.addTileLayer(tileLayer);
        }
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
            iconCls: 'x-fa fa-plus',
            handler: function (btn) {
                btn.up('muzkatOsmMap').map.zoomIn();
            }
        }, {
            iconCls: 'x-fa fa-minus',
            handler: function (btn) {
                btn.up('muzkatOsmMap').map.zoomOut();
            }
        }, {
            xtype: 'tbfill'
        }, {
            iconCls: 'x-fa fa-map-marker',
            handler: function (btn) {
    btn.up('muzkatOsmMap').toggleLayer('Esri.WorldImagery');
}
        }, {
            iconCls: 'x-fa fa-ship',
            handler: function (btn) {
                btn.up('muzkatOsmMap').toggleLayer('OpenSeaMap');
            }
        }, {
            xtype: 'tbfill'
        }, {
            iconCls: 'x-fa fa-reset'
        }, {
            iconCls: 'x-fa fa-cog'
        }]
    }]
});
