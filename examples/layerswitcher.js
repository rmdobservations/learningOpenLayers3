/* RMD 22 feb 2017
copied from ol3-layerswitcher/examples/
NOT the same as that in src/

type: 'base' is a bullet
*/
$(document).ready(function() {

var stamenwatercolorlayer = new ol.layer.Tile({
      title: 'Water color Tile',
      type: 'base',
      visible: false,
      source: new ol.source.Stamen({
          layer: 'watercolor'
      })
    })


var osmmaplayer =new ol.layer.Tile({
    title: 'OSM Tile',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
})


var countryOutlineLayer =     new ol.layer.Tile({
        title: 'Countries TileWMS',
        visible: false,
        source: new ol.source.TileWMS({
            url: 'http://demo.opengeo.org/geoserver/wms',
            params: {'LAYERS': 'ne:ne_10m_admin_1_states_provinces_lines_shp'},
            serverType: 'geoserver'
        })
    })

var stamenlayerlabels =new ol.layer.Tile({
      title: 'Stamen Labels',
        visible: false,
        source: new ol.source.Stamen({
            layer: 'terrain-labels'
        })
    })

var overlaygroup = new ol.layer.Group({
    'title': 'Overlay Group',
    layers: [countryOutlineLayer,stamenlayerlabels]
})

var basegroup = new ol.layer.Group({
    title: 'Background Maps',
    layers: [osmmaplayer,stamenwatercolorlayer]
})

    var map = new ol.Map({
        target: 'map',
        layers: [basegroup,overlaygroup],
        view: new ol.View({
            center: ol.proj.transform([-0.92, 52.96], 'EPSG:4326', 'EPSG:3857'),
            zoom: 6
        })
    });

    var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Légende' // Optional label for button
    });
    map.addControl(layerSwitcher);


})
