var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 0.704000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_BV_Lannion_2 = new ol.format.GeoJSON();
var features_BV_Lannion_2 = format_BV_Lannion_2.readFeatures(json_BV_Lannion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BV_Lannion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BV_Lannion_2.addFeatures(features_BV_Lannion_2);
var lyr_BV_Lannion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BV_Lannion_2, 
                style: style_BV_Lannion_2,
                popuplayertitle: 'BV_Lannion',
                interactive: false,
                title: '<img src="styles/legend/BV_Lannion_2.png" /> BV_Lannion'
            });
var format_BV_France_3 = new ol.format.GeoJSON();
var features_BV_France_3 = format_BV_France_3.readFeatures(json_BV_France_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BV_France_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BV_France_3.addFeatures(features_BV_France_3);
var lyr_BV_France_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BV_France_3, 
                style: style_BV_France_3,
                popuplayertitle: 'BV_France',
                interactive: true,
                title: '<img src="styles/legend/BV_France_3.png" /> BV_France'
            });
var format_Cours_de_eau_4 = new ol.format.GeoJSON();
var features_Cours_de_eau_4 = format_Cours_de_eau_4.readFeatures(json_Cours_de_eau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cours_de_eau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cours_de_eau_4.addFeatures(features_Cours_de_eau_4);
var lyr_Cours_de_eau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cours_de_eau_4, 
                style: style_Cours_de_eau_4,
                popuplayertitle: 'Cours_de_eau',
                interactive: false,
                title: '<img src="styles/legend/Cours_de_eau_4.png" /> Cours_de_eau'
            });
var format_Stations_Hydro_5 = new ol.format.GeoJSON();
var features_Stations_Hydro_5 = format_Stations_Hydro_5.readFeatures(json_Stations_Hydro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_Hydro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_Hydro_5.addFeatures(features_Stations_Hydro_5);
var lyr_Stations_Hydro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stations_Hydro_5, 
                style: style_Stations_Hydro_5,
                popuplayertitle: 'Stations_Hydro',
                interactive: true,
                title: '<img src="styles/legend/Stations_Hydro_5.png" /> Stations_Hydro'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_BV_Lannion_2.setVisible(true);lyr_BV_France_3.setVisible(true);lyr_Cours_de_eau_4.setVisible(true);lyr_Stations_Hydro_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_BV_Lannion_2,lyr_BV_France_3,lyr_Cours_de_eau_4,lyr_Stations_Hydro_5];
lyr_BV_Lannion_2.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_BV_France_3.set('fieldAliases', {'gid': 'gid', 'CdBVSpeMDO': 'CdBVSpeMDO', 'NomBVSpeMD': 'NomBVSpeMD', 'NiveauPrec': 'NiveauPrec', 'SurfaceBVS': 'SurfaceBVS', 'CdCategori': 'CdCategori', 'CdMasseDEa': 'CdMasseDEa', 'CommentBVS': 'CommentBVS', 'CdEuMasseD': 'CdEuMasseD', });
lyr_Cours_de_eau_4.set('fieldAliases', {'gid': 'gid', 'CdOH': 'CdOH', 'TopoOH': 'TopoOH', 'SourceNomO': 'SourceNomO', 'DateCreati': 'DateCreati', 'StatutOH': 'StatutOH', 'InfluenceM': 'InfluenceM', 'CaractereP': 'CaractereP', 'Commentair': 'Commentair', 'ProjCoordO': 'ProjCoordO', });
lyr_Stations_Hydro_5.set('fieldAliases', {'gid': 'gid', 'CdStationH': 'CdStationH', 'CdAncieRef': 'CdAncieRef', 'LbStationH': 'LbStationH', 'TypStation': 'TypStation', 'DtMService': 'DtMService', 'DtFermetur': 'DtFermetur', 'NomInt': 'NomInt', 'LbAffiStaH': 'LbAffiStaH', 'CoordXStat': 'CoordXStat', 'CoordYStat': 'CoordYStat', 'ProjCoord': 'ProjCoord', 'URL': 'URL', });
lyr_BV_Lannion_2.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_BV_France_3.set('fieldImages', {'gid': 'Range', 'CdBVSpeMDO': 'TextEdit', 'NomBVSpeMD': 'TextEdit', 'NiveauPrec': 'TextEdit', 'SurfaceBVS': 'TextEdit', 'CdCategori': 'TextEdit', 'CdMasseDEa': 'TextEdit', 'CommentBVS': 'TextEdit', 'CdEuMasseD': 'TextEdit', });
lyr_Cours_de_eau_4.set('fieldImages', {'gid': 'TextEdit', 'CdOH': 'TextEdit', 'TopoOH': 'TextEdit', 'SourceNomO': 'TextEdit', 'DateCreati': 'TextEdit', 'StatutOH': 'TextEdit', 'InfluenceM': 'Range', 'CaractereP': 'Range', 'Commentair': 'TextEdit', 'ProjCoordO': 'TextEdit', });
lyr_Stations_Hydro_5.set('fieldImages', {'gid': 'TextEdit', 'CdStationH': 'TextEdit', 'CdAncieRef': 'TextEdit', 'LbStationH': 'TextEdit', 'TypStation': 'TextEdit', 'DtMService': 'TextEdit', 'DtFermetur': 'TextEdit', 'NomInt': 'TextEdit', 'LbAffiStaH': 'TextEdit', 'CoordXStat': 'TextEdit', 'CoordYStat': 'TextEdit', 'ProjCoord': 'TextEdit', 'URL': 'TextEdit', });
lyr_BV_Lannion_2.set('fieldLabels', {'id': 'no label', 'Area': 'no label', });
lyr_BV_France_3.set('fieldLabels', {'gid': 'hidden field', 'CdBVSpeMDO': 'hidden field', 'NomBVSpeMD': 'header label - always visible', 'NiveauPrec': 'hidden field', 'SurfaceBVS': 'header label - always visible', 'CdCategori': 'hidden field', 'CdMasseDEa': 'hidden field', 'CommentBVS': 'hidden field', 'CdEuMasseD': 'hidden field', });
lyr_Cours_de_eau_4.set('fieldLabels', {'gid': 'no label', 'CdOH': 'no label', 'TopoOH': 'no label', 'SourceNomO': 'no label', 'DateCreati': 'no label', 'StatutOH': 'no label', 'InfluenceM': 'no label', 'CaractereP': 'no label', 'Commentair': 'no label', 'ProjCoordO': 'no label', });
lyr_Stations_Hydro_5.set('fieldLabels', {'gid': 'hidden field', 'CdStationH': 'header label - always visible', 'CdAncieRef': 'hidden field', 'LbStationH': 'hidden field', 'TypStation': 'hidden field', 'DtMService': 'hidden field', 'DtFermetur': 'hidden field', 'NomInt': 'hidden field', 'LbAffiStaH': 'hidden field', 'CoordXStat': 'header label - always visible', 'CoordYStat': 'header label - always visible', 'ProjCoord': 'no label', 'URL': 'header label - always visible', });
lyr_Stations_Hydro_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});