var wms_layers = [];
var format_Indo_Kab_Kot_0 = new ol.format.GeoJSON();
var features_Indo_Kab_Kot_0 = format_Indo_Kab_Kot_0.readFeatures(json_Indo_Kab_Kot_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indo_Kab_Kot_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Indo_Kab_Kot_0.addFeatures(features_Indo_Kab_Kot_0);var lyr_Indo_Kab_Kot_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Indo_Kab_Kot_0, 
                style: style_Indo_Kab_Kot_0,
                title: '<img src="styles/legend/Indo_Kab_Kot_0.png" /> Indo_Kab_Kot'
            });var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_1_0.png" /> 1<br />'
        });var format_TUGASTITIKKOORDINATTIMRASTERfixx1_2 = new ol.format.GeoJSON();
var features_TUGASTITIKKOORDINATTIMRASTERfixx1_2 = format_TUGASTITIKKOORDINATTIMRASTERfixx1_2.readFeatures(json_TUGASTITIKKOORDINATTIMRASTERfixx1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TUGASTITIKKOORDINATTIMRASTERfixx1_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TUGASTITIKKOORDINATTIMRASTERfixx1_2.addFeatures(features_TUGASTITIKKOORDINATTIMRASTERfixx1_2);var lyr_TUGASTITIKKOORDINATTIMRASTERfixx1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TUGASTITIKKOORDINATTIMRASTERfixx1_2, 
                style: style_TUGASTITIKKOORDINATTIMRASTERfixx1_2,
                title: '<img src="styles/legend/TUGASTITIKKOORDINATTIMRASTERfixx1_2.png" /> TUGAS TITIK KOORDINAT - TIM RASTER fixx1'
            });

lyr_Indo_Kab_Kot_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_TUGASTITIKKOORDINATTIMRASTERfixx1_2.setVisible(true);
var layersList = [lyr_Indo_Kab_Kot_0,lyr_Jalan_1,lyr_TUGASTITIKKOORDINATTIMRASTERfixx1_2];
lyr_Indo_Kab_Kot_0.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', });
lyr_Jalan_1.set('fieldAliases', {'id': 'id', });
lyr_TUGASTITIKKOORDINATTIMRASTERfixx1_2.set('fieldAliases', {'NO': 'NO', 'EAST (E/X)': 'EAST (E/X)', 'SOUTH(S/Y)': 'SOUTH(S/Y)', 'NAMA TEMPAT': 'NAMA TEMPAT', 'KETERANGAN': 'KETERANGAN', });
lyr_Indo_Kab_Kot_0.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', });
lyr_Jalan_1.set('fieldImages', {'id': 'TextEdit', });
lyr_TUGASTITIKKOORDINATTIMRASTERfixx1_2.set('fieldImages', {'NO': 'TextEdit', 'EAST (E/X)': 'TextEdit', 'SOUTH(S/Y)': 'TextEdit', 'NAMA TEMPAT': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_Indo_Kab_Kot_0.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'no label', 'KABKOT': 'no label', });
lyr_Jalan_1.set('fieldLabels', {'id': 'no label', });
lyr_TUGASTITIKKOORDINATTIMRASTERfixx1_2.set('fieldLabels', {'NO': 'no label', 'EAST (E/X)': 'no label', 'SOUTH(S/Y)': 'no label', 'NAMA TEMPAT': 'no label', 'KETERANGAN': 'no label', });
lyr_TUGASTITIKKOORDINATTIMRASTERfixx1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});