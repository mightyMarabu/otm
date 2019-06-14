            //base-layer
            var osm = new ol.layer.Tile({
                source: new ol.source.OSM()
                }); 

            var map = new ol.Map({
                target: 'map',
                layers: [osm,],
                view: new ol.View({
                    center: ol.proj.fromLonLat([9.5, 51.3]),
                    zoom: 12
                    })
            });
            // movi marker
            var movi_ks = new ol.Feature({
            geometry: new ol.geom.Point(
                ol.proj.fromLonLat([9.5502, 51.29583])
            ), 
            });
            var vectorSource = new ol.source.Vector({
            features: [movi_ks]
            });
            var markerVectorLayer = new ol.layer.Vector({
            source: vectorSource,
            });
            map.addLayer(markerVectorLayer);
