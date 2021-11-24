
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "BLDG_cut_1": {
            "type": "geojson",
            "data": json_BLDG_cut_1
        }
                    ,
        "Building_2": {
            "type": "geojson",
            "data": json_Building_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_BLDG_cut_1_0",
            "type": "line",
            "source": "BLDG_cut_1",
            "layout": {},
            "paint": {'line-width': 6.285714285714286, 'line-opacity': 1.0, 'line-color': '#3579b1'}
        }
,
        {
            "id": "lyr_Building_2_0",
            "type": "line",
            "source": "Building_2",
            "layout": {},
            "paint": {'line-width': 4.142857142857142, 'line-opacity': 1.0, 'line-color': '#e41a1c'}
        }
],
}