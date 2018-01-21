Ext.define('muzkatMap.maps.osm', {
    extend: 'muzkatMap.baseMap',
    alias: 'widget.muzkatOsmMap',


    viewModel: {
        data: {
            lastLatLng: 'nothing clicked'
        }
    },

    bind: {
        title: 'Open Street / Open Sea Map - Last click: {lastLatLng}'
    },

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

    markers: [{
        id: 'hotel',
        desc: 'Bifora Hotel',
        lat: 43.51386,
        lng: 16.25036
    }],

    placeMarkers: function () {
        var me = this;
        Ext.Array.each(this.markers, function (markerObj) {
            me.placeMarker(markerObj);
        });
    },

    placeMarker: function (markerObj) {
        var marker = L.marker([markerObj.lat, markerObj.lng]).addTo(this.map);
        marker.bindTooltip(markerObj.desc).openTooltip();
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

    onMapClick: function (e) {
        var me = this,
            vm = me.getViewModel(),
            lastLatLng = e.latlng.toString();

        vm.set('lastLatLng', lastLatLng);
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
                me.placeMarkers();
                me.map.on('click', me.onMapClick.bind(me));
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
        dock: 'top',
        items: [{
            iconCls: 'x-fa fa-plus',
            tooltip: 'ZoomIn',
            handler: function (btn) {
                btn.up('muzkatOsmMap').map.zoomIn();
            }
        }, {
            iconCls: 'x-fa fa-minus',
            tooltip: 'ZoomOut',
            handler: function (btn) {
                btn.up('muzkatOsmMap').map.zoomOut();
            }
        }, {
            xtype: 'tbfill'
        }, {
            iconCls: 'x-fa fa-bullseye',
            tooltip: 'Map zurücksetzen'
        }, {
            iconCls: 'x-fa fa-cog',
            tooltip: 'Map konfigurieren'
        }]
    }, {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            iconCls: 'x-fa fa-map-marker',
            tooltip: 'Marker ein/ausblenden',
            handler: function (btn) {
                btn.up('muzkatOsmMap').toggleLayer('Esri.WorldImagery');
            }
        }, {
            iconCls: 'x-fa fa-ship',
            tooltip: 'Open Sea Map ein/ausblenden',
            handler: function (btn) {
                btn.up('muzkatOsmMap').toggleLayer('OpenSeaMap');
            }
        }, {
            xtype: 'tbfill'
        }]
    }]
});
