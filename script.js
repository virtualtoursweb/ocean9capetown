(function(){
    var script = {
 "verticalAlign": "top",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Image_F03DED2C_B289_0416_41DD_BE430F145281"
 ],
 "id": "rootPlayer",
 "horizontalAlign": "left",
 "definitions": [{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1795195_B189_1C36_41B6_DA476A9A186A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F1A91204_B289_3C15_417F_7B28D5A00599",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.76,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F00CB13F_B289_3C72_41DA_48A37B039446",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.05,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 63.2,
   "backwardYaw": -104.61,
   "distance": 1,
   "panorama": "this.panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 166.71,
   "backwardYaw": 39.52,
   "distance": 1,
   "panorama": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1663498_B189_043E_41E0_20CD1CC37B6E",
 "thumbnailUrl": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_t.jpg",
 "hfovMin": "120%",
 "label": "Bathroom 1",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A210171D_B187_0437_41E2_6AB3963AE085",
  "this.overlay_A27E911E_B187_1C35_41E1_6BD663BA7D53",
  "this.overlay_A5D05196_B199_7C35_41B8_98C6243DD975"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F03FC133_B289_3C72_41BA_8D5512349FD1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -143.43,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F66E8221_B289_3C0E_41DC_C36E39993C2F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.59,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F1A6C209_B289_3C1E_41D1_58662F3E84EE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.95,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_A1721FD5_B189_0436_41C1_591378A233F7",
   "camera": "this.panorama_A1721FD5_B189_0436_41C1_591378A233F7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B",
   "camera": "this.panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6",
   "camera": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A",
   "camera": "this.panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A08CF75E_B189_0435_41A7_C2DC9733614D",
   "camera": "this.panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB",
   "camera": "this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386",
   "camera": "this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566",
   "camera": "this.panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1702555_B189_0436_41E4_29524536EC25",
   "camera": "this.panorama_A1702555_B189_0436_41E4_29524536EC25_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54",
   "camera": "this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A175F18D_B189_3C16_41D8_AA917DE7354C",
   "camera": "this.panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3",
   "camera": "this.panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2",
   "camera": "this.panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4",
   "camera": "this.panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD",
   "camera": "this.panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17B843F_B189_0472_41E3_BA312AC37E4C",
   "camera": "this.panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE",
   "camera": "this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1760604_B189_0416_41E3_9015953B16EF",
   "camera": "this.panorama_A1760604_B189_0416_41E3_9015953B16EF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1",
   "camera": "this.panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E",
   "camera": "this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49",
   "camera": "this.panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17925ED_B189_0411_41DB_D1211403D632",
   "camera": "this.panorama_A17925ED_B189_0411_41DB_D1211403D632_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1786EBE_B189_0472_41D7_2122237B7B31",
   "camera": "this.panorama_A1786EBE_B189_0472_41D7_2122237B7B31_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25",
   "camera": "this.panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1795733_B189_0473_41D4_DC67363653D6",
   "camera": "this.panorama_A1795733_B189_0473_41D4_DC67363653D6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1713894_B189_0C35_41D1_418E85BC1092",
   "camera": "this.panorama_A1713894_B189_0C35_41D1_418E85BC1092_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1795195_B189_1C36_41B6_DA476A9A186A",
   "camera": "this.panorama_A1795195_B189_1C36_41B6_DA476A9A186A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B",
   "camera": "this.panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB",
   "camera": "this.panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.album_83A41AEF_B189_0C12_41E1_AE2983209598",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ]
},
{
 "viewerArea": "this.MainViewer",
 "class": "MapPlayer",
 "id": "MainViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1786EBE_B189_0472_41D7_2122237B7B31_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -38.95,
   "backwardYaw": 125.21,
   "distance": 1,
   "panorama": "this.panorama_A08CF75E_B189_0435_41A7_C2DC9733614D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 1.35,
   "backwardYaw": -82.42,
   "distance": 1,
   "panorama": "this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386"
  }
 ],
 "vfov": 180,
 "id": "panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A",
 "thumbnailUrl": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_t.jpg",
 "hfovMin": "120%",
 "label": "Patio",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_9ABE9C86_B1F9_0415_41E1_BCEB81C3DF4A",
  "this.overlay_9D7F4916_B1FB_0C35_41D1_D141F6AE96FB"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A17925ED_B189_0411_41DB_D1211403D632_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F15E71BF_B289_3C72_41D0_B0F0A03EAAB6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.48,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0E1415D_B289_3C37_41BD_1FC31D02D4F9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.49,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -87.45,
   "backwardYaw": -4.85,
   "distance": 1,
   "panorama": "this.panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -54.45,
   "backwardYaw": -7.41,
   "distance": 1,
   "panorama": "this.panorama_A1702555_B189_0436_41E4_29524536EC25"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 76.42,
   "backwardYaw": -55.23,
   "distance": 1,
   "panorama": "this.panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1795195_B189_1C36_41B6_DA476A9A186A",
 "thumbnailUrl": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_t.jpg",
 "hfovMin": "120%",
 "label": "Gallery",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_950E7C0D_B189_0416_41E0_748099083287",
  "this.overlay_973CD53B_B18B_0473_41C4_B44CA366A443",
  "this.overlay_961DE8AC_B18B_0C15_41E5_E6A16065A04E"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.54,
  "pitch": -1.09
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1713894_B189_0C35_41D1_418E85BC1092"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -53.38,
   "backwardYaw": 48.31,
   "distance": 1,
   "panorama": "this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 36.57,
   "backwardYaw": 121.24,
   "distance": 1,
   "panorama": "this.panorama_A1786EBE_B189_0472_41D7_2122237B7B31"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 128.27,
   "backwardYaw": -39.85,
   "distance": 1,
   "panorama": "this.panorama_A1702555_B189_0436_41E4_29524536EC25"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A17B843F_B189_0472_41E3_BA312AC37E4C"
  }
 ],
 "vfov": 180,
 "id": "panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE",
 "thumbnailUrl": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_t.jpg",
 "hfovMin": "120%",
 "label": "Bedroom 5",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_AA96E629_B189_041E_4185_1D8045EADECD",
  "this.overlay_AD327B12_B189_0C32_41D5_C0DB07D636CC",
  "this.overlay_AA089A48_B18B_0C1E_41A0_80136B13F755",
  "this.overlay_AA740CCC_B189_0415_4165_AB3D61B1CA79",
  "this.overlay_8EDC9D38_B28B_047E_41CB_3BD95201E516"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F6A31272_B289_3C0D_41E3_68F214E232F9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.39,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 19.6,
   "backwardYaw": -138.54,
   "distance": 1,
   "panorama": "this.panorama_A1721FD5_B189_0436_41C1_591378A233F7"
  }
 ],
 "vfov": 180,
 "id": "panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B",
 "thumbnailUrl": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_t.jpg",
 "hfovMin": "120%",
 "label": "Garage",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_94C06E6A_B18B_0412_41D2_6BDD541C0428"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F618324C_B289_3C15_418C_7A8B11C5C2E9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.77,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -166.41,
   "backwardYaw": 48.76,
   "distance": 1,
   "panorama": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -104.61,
   "backwardYaw": 63.2,
   "distance": 1,
   "panorama": "this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2",
 "thumbnailUrl": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_t.jpg",
 "hfovMin": "120%",
 "label": "Bedroom 1",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A9CF0C09_B199_041E_41D3_23D9D198DED4",
  "this.overlay_AAF10214_B199_1C35_41D7_D54F794F179E"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F05AA108_B289_3C1D_41C7_736E9B5F15D1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.1,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 87.52,
   "backwardYaw": -25.72,
   "distance": 1,
   "panorama": "this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 158.04,
   "backwardYaw": -71.95,
   "distance": 1,
   "panorama": "this.panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -82.42,
   "backwardYaw": 1.35,
   "distance": 1,
   "panorama": "this.panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 32.28,
   "backwardYaw": 16.4,
   "distance": 1,
   "panorama": "this.panorama_A1721FD5_B189_0436_41C1_591378A233F7"
  }
 ],
 "vfov": 180,
 "id": "panorama_A17BDC0B_B189_0412_41DC_0A8138B51386",
 "thumbnailUrl": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_t.jpg",
 "hfovMin": "120%",
 "label": "Living Room",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_966D2A2B_B189_0C13_41D4_F224FC578A5F",
  "this.overlay_98277AA7_B18B_0C12_419D_6EB566E4AC97",
  "this.overlay_99065D33_B189_0473_41D9_B5F83D1C65F1",
  "this.overlay_8BA1E496_B28B_0435_41D6_14064795C65E"
 ],
 "hfovMax": 130
},
{
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "minimumZoomFactor": 0.5,
 "label": "Terrace Plan",
 "initialZoomFactor": 1,
 "id": "map_83D9FFAC_B187_0416_41D6_FDCE7E782B82",
 "thumbnailUrl": "media/map_83D9FFAC_B187_0416_41D6_FDCE7E782B82_t.png",
 "width": 1819,
 "scaleMode": "fit_inside",
 "image": {
  "levels": [
   {
    "url": "media/map_83D9FFAC_B187_0416_41D6_FDCE7E782B82.png",
    "width": 1819,
    "class": "ImageResourceLevel",
    "height": 1289
   },
   {
    "url": "media/map_83D9FFAC_B187_0416_41D6_FDCE7E782B82_lq.png",
    "width": 304,
    "class": "ImageResourceLevel",
    "height": 216,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "height": 1289,
 "fieldOfViewOverlayInsideColor": "#FFFFFF"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F77F3290_B289_3C0E_41E2_2F94A4022D73",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.62,
  "pitch": 0
 }
},
{
 "duration": 5000,
 "label": "8",
 "id": "photo_825EB048_B19F_7C1D_41D8_58FF0A9AF6F7",
 "thumbnailUrl": "media/photo_825EB048_B19F_7C1D_41D8_58FF0A9AF6F7_t.png",
 "width": 4096,
 "image": {
  "levels": [
   {
    "url": "media/photo_825EB048_B19F_7C1D_41D8_58FF0A9AF6F7.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2304
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F02E9121_B289_3C0E_41C0_22FC9A0BE606",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.37,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0352139_B289_3C7E_41E6_2CF9B8DBC80A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.28,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F1E521EA_B289_3C12_41DF_B4879B79A986",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.76,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_F06C50EC_B289_3C16_41E0_B32638149854",
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_83D9FFAC_B187_0416_41D6_FDCE7E782B82",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0F95163_B289_3C13_41E2_C47108B1B5F9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 41.46,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F08B3194_B289_3C36_41E0_7E949310709D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.3,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0CDA170_B289_3C0D_41E2_A0C6FD8E8C0E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.4,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "media": "this.panorama_A1721FD5_B189_0436_41C1_591378A233F7",
   "camera": "this.panorama_A1721FD5_B189_0436_41C1_591378A233F7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B",
   "camera": "this.panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6",
   "camera": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A",
   "camera": "this.panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A08CF75E_B189_0435_41A7_C2DC9733614D",
   "camera": "this.panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB",
   "camera": "this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386",
   "camera": "this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566",
   "camera": "this.panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1702555_B189_0436_41E4_29524536EC25",
   "camera": "this.panorama_A1702555_B189_0436_41E4_29524536EC25_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54",
   "camera": "this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A175F18D_B189_3C16_41D8_AA917DE7354C",
   "camera": "this.panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3",
   "camera": "this.panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2",
   "camera": "this.panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4",
   "camera": "this.panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD",
   "camera": "this.panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17B843F_B189_0472_41E3_BA312AC37E4C",
   "camera": "this.panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE",
   "camera": "this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1760604_B189_0416_41E3_9015953B16EF",
   "camera": "this.panorama_A1760604_B189_0416_41E3_9015953B16EF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1",
   "camera": "this.panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E",
   "camera": "this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49",
   "camera": "this.panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A17925ED_B189_0411_41DB_D1211403D632",
   "camera": "this.panorama_A17925ED_B189_0411_41DB_D1211403D632_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1786EBE_B189_0472_41D7_2122237B7B31",
   "camera": "this.panorama_A1786EBE_B189_0472_41D7_2122237B7B31_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25",
   "camera": "this.panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1795733_B189_0473_41D4_DC67363653D6",
   "camera": "this.panorama_A1795733_B189_0473_41D4_DC67363653D6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1713894_B189_0C35_41D1_418E85BC1092",
   "camera": "this.panorama_A1713894_B189_0C35_41D1_418E85BC1092_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A1795195_B189_1C36_41B6_DA476A9A186A",
   "camera": "this.panorama_A1795195_B189_1C36_41B6_DA476A9A186A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B",
   "camera": "this.panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB",
   "camera": "this.panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 0)",
   "media": "this.album_83A41AEF_B189_0C12_41E1_AE2983209598",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F1B4F20F_B289_3C12_41A6_26998A6402FF",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.62,
  "pitch": 0
 }
},
{
 "duration": 5000,
 "label": "6",
 "id": "photo_82A0F766_B19F_0415_41D1_EAB8158DFBA7",
 "thumbnailUrl": "media/photo_82A0F766_B19F_0415_41D1_EAB8158DFBA7_t.png",
 "width": 4096,
 "image": {
  "levels": [
   {
    "url": "media/photo_82A0F766_B19F_0415_41D1_EAB8158DFBA7.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2304
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 118.37,
   "backwardYaw": 55.03,
   "distance": 1,
   "panorama": "this.panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -20.84,
   "backwardYaw": 38.63,
   "distance": 1,
   "panorama": "this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1713894_B189_0C35_41D1_418E85BC1092",
 "thumbnailUrl": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_t.jpg",
 "hfovMin": "120%",
 "label": "Gallery 2",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_95EB97F6_B199_03F2_41B4_EEFD3A56AE16",
  "this.overlay_9222A9B8_B199_0C7D_41C5_3A9D694CAF29"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F67E5227_B289_3C12_419C_5890205F491A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.77,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 121.24,
   "backwardYaw": 36.57,
   "distance": 1,
   "panorama": "this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1786EBE_B189_0472_41D7_2122237B7B31",
 "thumbnailUrl": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_t.jpg",
 "hfovMin": "120%",
 "label": "Bathroom 4",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A5696428_B19B_041E_41B6_FBBDCDCD6805"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F10FB1D7_B289_3C33_41DD_776EBAEEC340",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -61.63,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F1E9B1E4_B289_3C15_41E3_6AEE0A37E65F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.69,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F039E12D_B289_3C16_41A8_C5989AAEC6CA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -116.62,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F11C41DD_B289_3C36_41CD_DD707606FE38",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.55,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1713894_B189_0C35_41D1_418E85BC1092_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F09041A0_B289_3C0E_41C3_822168382AAC",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.41,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 92.6,
   "backwardYaw": 23.51,
   "distance": 1,
   "panorama": "this.panorama_A17B843F_B189_0472_41E3_BA312AC37E4C"
  }
 ],
 "vfov": 180,
 "id": "panorama_A17925ED_B189_0411_41DB_D1211403D632",
 "thumbnailUrl": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_t.jpg",
 "hfovMin": "120%",
 "label": "Bathroom 3",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A534D6FF_B19B_05F2_41D5_081EAA42DF6B"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F6E75258_B289_3C3D_41DC_5F79FDBFF18F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 125.55,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F02A311B_B289_3C33_41E2_DD22AF18D57B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -124.97,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -164.91,
   "backwardYaw": -46,
   "distance": 1,
   "panorama": "this.panorama_A1721FD5_B189_0436_41C1_591378A233F7"
  }
 ],
 "vfov": 180,
 "id": "panorama_A175F18D_B189_3C16_41D8_AA917DE7354C",
 "thumbnailUrl": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_t.jpg",
 "hfovMin": "120%",
 "label": "Toilet 1",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_9E12EE54_B189_0435_41C5_F361C8C22366"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 46.48,
   "backwardYaw": -129.9,
   "distance": 1,
   "panorama": "this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB"
  }
 ],
 "vfov": 180,
 "id": "panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3",
 "thumbnailUrl": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_t.jpg",
 "hfovMin": "120%",
 "label": "Toilet 2",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_81C59435_B18F_0476_41E4_C670FE4E89A6"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0A6B188_B289_3C1E_41DE_E7E3C186B107",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.29,
  "pitch": 0
 }
},
{
 "duration": 5000,
 "label": "4",
 "id": "photo_82583416_B19F_0432_41CA_1C7E5576E1EF",
 "thumbnailUrl": "media/photo_82583416_B19F_0432_41CA_1C7E5576E1EF_t.png",
 "width": 4096,
 "image": {
  "levels": [
   {
    "url": "media/photo_82583416_B19F_0432_41CA_1C7E5576E1EF.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2304
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F6C51265_B289_3C17_41E4_C62297E0127B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.34,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 100.13,
   "backwardYaw": -4.01,
   "distance": 1,
   "panorama": "this.panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD"
  }
 ],
 "vfov": 180,
 "id": "panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49",
 "thumbnailUrl": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_t.jpg",
 "hfovMin": "120%",
 "label": "Bathroom 2",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A5F5E093_B199_7C32_41DE_427D49044C08"
 ],
 "hfovMax": 130
},
{
 "duration": 5000,
 "label": "2",
 "id": "photo_824431A3_B19F_1C13_41D0_E90E55F42CC8",
 "thumbnailUrl": "media/photo_824431A3_B19F_1C13_41D0_E90E55F42CC8_t.png",
 "width": 4096,
 "image": {
  "levels": [
   {
    "url": "media/photo_824431A3_B19F_1C13_41D0_E90E55F42CC8.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2304
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.01,
   "backwardYaw": 100.13,
   "distance": 1,
   "panorama": "this.panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 135.05,
   "backwardYaw": -7.66,
   "distance": 1,
   "panorama": "this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD",
 "thumbnailUrl": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_t.jpg",
 "hfovMin": "120%",
 "label": "Bedroom 3",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A8252F5E_B199_0435_41CC_ADE10B48F836",
  "this.overlay_AB8CA9FF_B199_0FF2_41CF_8003309DD764"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0AB8182_B289_3C12_41E3_E86C9248EA20",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.13,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -71.95,
   "backwardYaw": 158.04,
   "distance": 1,
   "panorama": "this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386"
  }
 ],
 "vfov": 180,
 "id": "panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566",
 "thumbnailUrl": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_t.jpg",
 "hfovMin": "120%",
 "label": "Back Kitchen",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A32D990D_B189_0C17_417E_9AD619715749"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.7,
   "backwardYaw": 7.7,
   "distance": 1,
   "panorama": "this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -138.54,
   "backwardYaw": 19.6,
   "distance": 1,
   "panorama": "this.panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 49.33,
   "backwardYaw": -35.59,
   "distance": 1,
   "panorama": "this.panorama_A08CF75E_B189_0435_41A7_C2DC9733614D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -18.44,
   "backwardYaw": -54.33,
   "distance": 1,
   "panorama": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -46,
   "backwardYaw": -164.91,
   "distance": 1,
   "panorama": "this.panorama_A175F18D_B189_3C16_41D8_AA917DE7354C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 16.4,
   "backwardYaw": 32.28,
   "distance": 1,
   "panorama": "this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1721FD5_B189_0436_41C1_591378A233F7",
 "thumbnailUrl": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_t.jpg",
 "hfovMin": "120%",
 "label": "Entryway",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_90F76095_B187_3C36_41E3_0AB75A9519FF",
  "this.overlay_9077C2C9_B187_7C1F_41E2_2CED5DF70CF7",
  "this.overlay_900BE495_B187_0437_41E6_0276082C9C28",
  "this.overlay_9013A520_B187_040E_41C1_C991E8BEC7B1",
  "this.overlay_904D1E56_B187_0435_41CF_F88B55273222",
  "this.overlay_93B65363_B187_1C12_41E0_CA729A65FDA2"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F01B214B_B289_3C12_41DF_B9F061AF9899",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -163.6,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F14321B9_B289_3C7F_41E2_1A92B4754664",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.52,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 128.87,
   "backwardYaw": 64,
   "distance": 1,
   "panorama": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6"
  }
 ],
 "vfov": 180,
 "id": "panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4",
 "thumbnailUrl": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_t.jpg",
 "hfovMin": "120%",
 "label": "Bedroom 2",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A856BE81_B19B_040F_41E5_D751EF99DDA4"
 ],
 "hfovMax": 130
},
{
 "duration": 5000,
 "label": "1",
 "id": "photo_87DF8859_B19F_0C3F_41E2_7A0655417B7A",
 "thumbnailUrl": "media/photo_87DF8859_B19F_0C3F_41E2_7A0655417B7A_t.png",
 "width": 4096,
 "image": {
  "levels": [
   {
    "url": "media/photo_87DF8859_B19F_0C3F_41E2_7A0655417B7A.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2304
},
{
 "label": "Photo Album 1",
 "id": "album_83A41AEF_B189_0C12_41E1_AE2983209598",
 "thumbnailUrl": "media/album_83A41AEF_B189_0C12_41E1_AE2983209598_t.png",
 "playList": "this.album_83A41AEF_B189_0C12_41E1_AE2983209598_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F12B61C5_B289_3C17_41CB_CA20EAC86A1C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.85,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 116.71,
   "backwardYaw": -55.9,
   "distance": 1,
   "panorama": "this.panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1795733_B189_0473_41D4_DC67363653D6",
 "thumbnailUrl": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_t.jpg",
 "hfovMin": "120%",
 "label": "Bathroom 6",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A4A4F902_B199_0C12_41E5_51DA0EE76330"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F6F5925E_B289_3C32_41D1_F07D25087D2E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.87,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0E94157_B289_3C33_41E6_23EBFA07C4DB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -116.8,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1795733_B189_0473_41D4_DC67363653D6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F609E246_B289_3C12_41A9_0061BBDB2866",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.3,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F681727E_B289_3CF2_41CC_FBECF45D1854",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -63.29,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F190821B_B289_3C32_41D8_A20D97E24BEE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.15,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F1CEE1F7_B289_3FF2_41E0_0519EEC888FF",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -116,
  "pitch": 0
 }
},
{
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F690C284_B289_3C16_41DD_13CCB5F414DB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.68,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 125.21,
   "backwardYaw": -38.95,
   "distance": 1,
   "panorama": "this.panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A175F18D_B189_3C16_41D8_AA917DE7354C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -35.59,
   "backwardYaw": 49.33,
   "distance": 1,
   "panorama": "this.panorama_A1721FD5_B189_0436_41C1_591378A233F7"
  }
 ],
 "vfov": 180,
 "id": "panorama_A08CF75E_B189_0435_41A7_C2DC9733614D",
 "thumbnailUrl": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_t.jpg",
 "hfovMin": "120%",
 "label": "Pool Deck",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_9DF66DBE_B1FB_0472_41E4_442BA03CE3A8",
  "this.overlay_9A3E5DC1_B1F9_040E_41A0_7F51E90E7F53",
  "this.overlay_9DDC48F2_B1F9_0C0D_41C9_B0C145017766",
  "this.overlay_9D8E8CE4_B1F9_0416_41DA_474EB11FCFD8",
  "this.overlay_9A71821A_B1F9_3C32_41E4_737737BE46D3",
  "this.overlay_880F0A81_B289_0C0E_41E6_38621F804FBA"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 174.24,
   "backwardYaw": 44.75,
   "distance": 1,
   "panorama": "this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 23.51,
   "backwardYaw": 92.6,
   "distance": 1,
   "panorama": "this.panorama_A17925ED_B189_0411_41DB_D1211403D632"
  }
 ],
 "vfov": 180,
 "id": "panorama_A17B843F_B189_0472_41E3_BA312AC37E4C",
 "thumbnailUrl": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_t.jpg",
 "hfovMin": "120%",
 "label": "Bedroom 4",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_AB3A3658_B187_043D_41D9_A4CEB3342732",
  "this.overlay_AB3BC685_B187_0417_41D1_4F4ADCBFCE95"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F012C151_B289_3C0F_41D5_2F5C47DE5CED",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.24,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F63A2240_B289_3C0E_4193_997A99BADA22",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.1,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -55.9,
   "backwardYaw": 116.71,
   "distance": 1,
   "panorama": "this.panorama_A1795733_B189_0473_41D4_DC67363653D6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 4.39,
   "backwardYaw": -50.32,
   "distance": 1,
   "panorama": "this.panorama_A1760604_B189_0416_41E3_9015953B16EF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 11.23,
   "backwardYaw": -141.2,
   "distance": 1,
   "panorama": "this.panorama_A1702555_B189_0436_41E4_29524536EC25"
  }
 ],
 "vfov": 180,
 "id": "panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1",
 "thumbnailUrl": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_t.jpg",
 "hfovMin": "120%",
 "label": "Bedroom 7",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_AFC73F1C_B18F_0435_41D9_1F96980ACF6C",
  "this.overlay_90C9D9DC_B189_0C36_41DA_3720E32C62F1",
  "this.overlay_88388B44_B28F_0C16_41D6_A94BDC300C39"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -129.9,
   "backwardYaw": 46.48,
   "distance": 1,
   "panorama": "this.panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -25.72,
   "backwardYaw": 87.52,
   "distance": 1,
   "panorama": "this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 7.7,
   "backwardYaw": -39.15,
   "distance": 1,
   "panorama": "this.panorama_A1702555_B189_0436_41E4_29524536EC25"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 153.43,
   "backwardYaw": -39.15,
   "distance": 1,
   "panorama": "this.panorama_A1702555_B189_0436_41E4_29524536EC25"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 7.7,
   "backwardYaw": -1.7,
   "distance": 1,
   "panorama": "this.panorama_A1721FD5_B189_0436_41C1_591378A233F7"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB",
 "thumbnailUrl": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_t.jpg",
 "hfovMin": "120%",
 "label": "Entrance",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_AE68C033_B189_1C72_41D7_DED090A9980B",
  "this.overlay_91FE75E0_B189_040E_41DD_11D6F4261A6E",
  "this.overlay_9128A4A6_B189_0412_41C9_FCC1DA4AB105",
  "this.overlay_9044600D_B18B_3C16_41E1_87182FF9A006",
  "this.overlay_8E8A76BB_B28B_0473_41C2_E842D90F3E6F"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 63.38,
   "backwardYaw": 23.38,
   "distance": 1,
   "panorama": "this.panorama_A1760604_B189_0416_41E3_9015953B16EF"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25",
 "thumbnailUrl": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_t.jpg",
 "hfovMin": "120%",
 "label": "Bathroom5",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_A9B0680F_B19F_0C13_41DA_C9907FDB77B0"
 ],
 "hfovMax": 130
},
{
 "class": "PlayList",
 "id": "playList_F06CD0ED_B289_3C17_41DF_6A89519CEE28",
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_83E410B0_B187_3C0E_41E3_D894F9D0E9DD",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -55.23,
   "backwardYaw": 76.42,
   "distance": 1,
   "panorama": "this.panorama_A1795195_B189_1C36_41B6_DA476A9A186A"
  }
 ],
 "vfov": 180,
 "id": "panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB",
 "thumbnailUrl": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_t.jpg",
 "hfovMin": "120%",
 "label": "Terrace 2",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_9FE9A13D_B187_3C76_41A9_023DC4F9BE4B"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1760604_B189_0416_41E3_9015953B16EF_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F6D3526B_B289_3C12_41A4_2EB977FB9C08",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "minimumZoomFactor": 0.5,
 "label": "Ground Floor Plan",
 "initialZoomFactor": 1,
 "id": "map_8128C351_B187_3C0F_41AC_E8A71EED9995",
 "thumbnailUrl": "media/map_8128C351_B187_3C0F_41AC_E8A71EED9995_t.png",
 "width": 1959,
 "scaleMode": "fit_inside",
 "image": {
  "levels": [
   {
    "url": "media/map_8128C351_B187_3C0F_41AC_E8A71EED9995.png",
    "width": 1959,
    "class": "ImageResourceLevel",
    "height": 1463
   },
   {
    "url": "media/map_8128C351_B187_3C0F_41AC_E8A71EED9995_lq.png",
    "width": 296,
    "class": "ImageResourceLevel",
    "height": 222,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "height": 1463,
 "fieldOfViewOverlayInsideColor": "#FFFFFF"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F133F1D1_B289_3C0F_41BA_E90590BB5213",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.3,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F1815215_B289_3C36_41E4_4C087250F671",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.58,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0F2F169_B289_3C1F_41E1_C04A38FA43B2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.25,
  "pitch": 0
 }
},
{
 "duration": 5000,
 "label": "3",
 "id": "photo_8277CB10_B19F_0C0E_41D7_E99A1395CCD8",
 "thumbnailUrl": "media/photo_8277CB10_B19F_0C0E_41D7_E99A1395CCD8_t.png",
 "width": 4096,
 "image": {
  "levels": [
   {
    "url": "media/photo_8277CB10_B19F_0C0E_41D7_E99A1395CCD8.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2304
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F16D41A6_B289_3C15_41E2_A7F800E47743",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 125.67,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F086019A_B289_3C32_41E3_CE1BFD8F225E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -160.4,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F76F328A_B289_3C12_41E0_4B851ADCEDC1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.8,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -39.15,
   "backwardYaw": 7.7,
   "distance": 1,
   "panorama": "this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -141.2,
   "backwardYaw": 11.23,
   "distance": 1,
   "panorama": "this.panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -39.85,
   "backwardYaw": 128.27,
   "distance": 1,
   "panorama": "this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.41,
   "backwardYaw": -54.45,
   "distance": 1,
   "panorama": "this.panorama_A1795195_B189_1C36_41B6_DA476A9A186A"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1702555_B189_0436_41E4_29524536EC25",
 "thumbnailUrl": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_t.jpg",
 "hfovMin": "120%",
 "label": "Lounge",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_98AAF63B_B187_0473_41E2_16C5BA17A13F",
  "this.overlay_9B516C9D_B1FB_0436_41CF_BB18896A075B",
  "this.overlay_9FFA77C9_B1F9_041F_41C6_3632C3FD6AC5",
  "this.overlay_8EC25C71_B289_040E_41CE_190BC69C4423"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 55.03,
   "backwardYaw": 118.37,
   "distance": 1,
   "panorama": "this.panorama_A1713894_B189_0C35_41D1_418E85BC1092"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -4.85,
   "backwardYaw": -87.45,
   "distance": 1,
   "panorama": "this.panorama_A1795195_B189_1C36_41B6_DA476A9A186A"
  }
 ],
 "vfov": 180,
 "id": "panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B",
 "thumbnailUrl": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_t.jpg",
 "hfovMin": "120%",
 "label": "Terrace",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_9F1A0E51_B18B_040F_41D9_D7C28AC4439A",
  "this.overlay_8114D2C8_B18B_3C1E_41D8_C6201838F7E0"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F6B14278_B289_3CFE_41D9_4D78A279661E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.48,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1702555_B189_0436_41E4_29524536EC25_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0C73175_B289_3CF6_41D8_D03E5C04565E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.99,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F126C1CB_B289_3C13_41DB_CC43388095BB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.85,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 38.63,
   "backwardYaw": -20.84,
   "distance": 1,
   "panorama": "this.panorama_A1713894_B189_0C35_41D1_418E85BC1092"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 44.75,
   "backwardYaw": 174.24,
   "distance": 1,
   "panorama": "this.panorama_A17B843F_B189_0472_41E3_BA312AC37E4C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.66,
   "backwardYaw": 135.05,
   "distance": 1,
   "panorama": "this.panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 48.31,
   "backwardYaw": -53.38,
   "distance": 1,
   "panorama": "this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE"
  }
 ],
 "vfov": 180,
 "id": "panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54",
 "thumbnailUrl": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_t.jpg",
 "hfovMin": "120%",
 "label": "Upper Living",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_81F7E928_B18F_0C1E_41B9_29BBA9D1E97D",
  "this.overlay_800222C9_B189_FC1F_41D1_A2853CC86250",
  "this.overlay_8162587C_B189_0CF5_41E2_910C06FD52D1",
  "this.overlay_811EB36F_B18B_1C12_41E5_B617C7A2325C"
 ],
 "hfovMax": 130
},
{
 "class": "PlayList",
 "id": "playList_F06C90EC_B289_3C16_41E5_F7F8EA61E698",
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_8128C351_B187_3C0F_41AC_E8A71EED9995",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F65C8234_B289_3C75_41C9_8FB70E336A13",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.58,
  "pitch": 0
 }
},
{
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "minimumZoomFactor": 0.5,
 "label": "First Floor Plan",
 "initialZoomFactor": 1,
 "id": "map_83E410B0_B187_3C0E_41E3_D894F9D0E9DD",
 "thumbnailUrl": "media/map_83E410B0_B187_3C0E_41E3_D894F9D0E9DD_t.png",
 "width": 1838,
 "scaleMode": "fit_inside",
 "image": {
  "levels": [
   {
    "url": "media/map_83E410B0_B187_3C0E_41E3_D894F9D0E9DD.png",
    "width": 1838,
    "class": "ImageResourceLevel",
    "height": 1293
   },
   {
    "url": "media/map_83E410B0_B187_3C0E_41E3_D894F9D0E9DD_lq.png",
    "width": 305,
    "class": "ImageResourceLevel",
    "height": 215,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "height": 1293,
 "fieldOfViewOverlayInsideColor": "#FFFFFF"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F62C223A_B289_3C72_41D3_6BF95B47A0C2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.96,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -54.33,
   "backwardYaw": -18.44,
   "distance": 1,
   "panorama": "this.panorama_A1721FD5_B189_0436_41C1_591378A233F7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 64,
   "backwardYaw": 128.87,
   "distance": 1,
   "panorama": "this.panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 39.52,
   "backwardYaw": 166.71,
   "distance": 1,
   "panorama": "this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 48.76,
   "backwardYaw": -166.41,
   "distance": 1,
   "panorama": "this.panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2"
  }
 ],
 "vfov": 180,
 "id": "panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6",
 "thumbnailUrl": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_t.jpg",
 "hfovMin": "120%",
 "label": "Living 2",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_97B3DE7F_B18F_04F3_41BE_9B238461409D",
  "this.overlay_97FC2235_B18F_3C76_41D0_07E6864E2B6C",
  "this.overlay_9678C10A_B18F_1C12_41DB_DDDE74D82975",
  "this.overlay_99427F40_B189_040D_41E0_3AA8013BCACE"
 ],
 "hfovMax": 130
},
{
 "rollOverBackgroundColor": "#000000",
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "children": [
  {
   "label": "Entryway",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "Garage",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Living 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "Patio",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "Pool Deck",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "Entrance",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "Living Room",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "Back Kitchen",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "Lounge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "Upper Living",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "Toilet 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "Toilet 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "Bedroom 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "Bedroom 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "Bedroom 3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "Bedroom 4",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "Bedroom 5",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "Bedroom 6",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "Bedroom 7",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "label": "Bathroom 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "label": "Bathroom 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "label": "Bathroom 3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "label": "Bathroom 4",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "label": "Bathroom5",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "label": "Bathroom 6",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "label": "Gallery 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "label": "Gallery",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "label": "Terrace",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  },
  {
   "label": "Terrace 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "fontColor": "#FFFFFF",
 "id": "Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "rollOverFontColor": "#FFFFFF",
 "label": "Media",
 "opacity": 0.4,
 "class": "Menu",
 "backgroundColor": "#404040",
 "selectedBackgroundColor": "#202020"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F175F1B2_B289_3C72_41E4_D14FF7483CC1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.72,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A1721FD5_B189_0436_41C1_591378A233F7_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1702555_B189_0436_41E4_29524536EC25"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -50.32,
   "backwardYaw": 4.39,
   "distance": 1,
   "panorama": "this.panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 23.38,
   "backwardYaw": 63.38,
   "distance": 1,
   "panorama": "this.panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE"
  }
 ],
 "vfov": 180,
 "id": "panorama_A1760604_B189_0416_41E3_9015953B16EF",
 "thumbnailUrl": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_t.jpg",
 "hfovMin": "120%",
 "label": "Bedroom 6",
 "cardboardMenu": "this.Menu_F04810F8_B289_3DFE_41D5_EF4A62EE995E",
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_AE81FC8E_B18B_0412_41C9_89CAA0B6A85F",
  "this.overlay_AC9DF516_B1B9_0435_41C0_8A14900E8757",
  "this.overlay_AF84A689_B1BB_041E_41D7_02BF9DF8B247",
  "this.overlay_AF16D1B1_B189_7C0F_41C2_BCFB8A2F1B76"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0540115_B289_3C37_41DE_C960DB3DAE3D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -130.67,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0253127_B289_3C12_41D8_AA4EE807179C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.61,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0044145_B289_3C16_41CE_E501007FABBB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.65,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F17881AC_B289_3C16_4198_66667CDDC9C6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.09,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F64E622E_B289_3C15_41BB_682E232C50BA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.79,
  "pitch": 0
 }
},
{
 "duration": 5000,
 "label": "5",
 "id": "photo_82434D74_B19F_04F5_41D9_B49C2A67F57D",
 "thumbnailUrl": "media/photo_82434D74_B19F_04F5_41D9_B49C2A67F57D_t.png",
 "width": 4096,
 "image": {
  "levels": [
   {
    "url": "media/photo_82434D74_B19F_04F5_41D9_B49C2A67F57D.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2304
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F1F271F1_B289_3C0E_41DD_BC964B1EEAF2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.15,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0B1B18E_B289_3C15_41C4_10BDCEC8009B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.59,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F0D2117C_B289_3CF5_41DC_6E3E26BCE2C0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.56,
  "pitch": 0
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F05E510E_B289_3C12_41C5_C0908EF5795E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 141.05,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F1DCB1FE_B289_3FF5_41E1_631003159DBC",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.16,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_F617E252_B289_3C0D_41DC_8E2588601F3F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.73,
  "pitch": 0
 }
},
{
 "transitionDuration": 500,
 "minHeight": 50,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "width": "100%",
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "minWidth": 100,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "paddingBottom": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "right": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "height": 641,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.Image_85724E8B_B187_0412_41B9_D70739EC2A7E"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": 573,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "paddingLeft": 0,
 "top": 15,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "height": 133,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
  "this.Button_FA94E7B6_B287_0472_41E4_885B6E4B9BB1"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.64,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "borderSize": 0,
 "height": 118,
 "scrollBarMargin": 2,
 "bottom": 0,
 "contentOpaque": false,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "minWidth": 1,
 "scrollBarColor": "#333333",
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photoalbum"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "right": "0%",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "bottom": "0%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "gap": 10,
 "layout": "absolute",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "middle",
 "id": "Image_F03DED2C_B289_0416_41DD_BE430F145281",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": "9.53%",
 "scaleMode": "fit_inside",
 "class": "Image",
 "paddingRight": 0,
 "right": "1.39%",
 "minWidth": 1,
 "url": "skin/Image_F03DED2C_B289_0416_41DD_BE430F145281.png",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "0.11%",
 "borderSize": 0,
 "maxWidth": 394,
 "bottom": "88.31%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image110225"
 },
 "shadow": false,
 "minHeight": 1,
 "maxHeight": 234
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "maxHeight": 58
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "maxHeight": 58
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BDD0B5_B189_1C76_41D7_E6D91F7B6FAB",
   "yaw": 63.2,
   "hfov": 7,
   "pitch": -29.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A210171D_B187_0437_41E2_6AB3963AE085",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2, this.camera_F6A31272_B289_3C0D_41E3_68F214E232F9); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.2,
   "hfov": 7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BD80B6_B189_1C72_41D1_E65C651218BF",
   "yaw": 166.71,
   "hfov": 7.28,
   "pitch": -25.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A27E911E_B187_1C35_41E1_6BD663BA7D53",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6, this.camera_F6B14278_B289_3CFE_41D9_4D78A279661E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.71,
   "hfov": 7.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BE60B6_B189_1C72_41D9_A1DE766E32A2",
   "yaw": 129.02,
   "hfov": 6.48,
   "pitch": -36.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A5D05196_B199_7C35_41B8_98C6243DD975",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.02,
   "hfov": 6.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9CA90B2_B189_1C0D_41CB_BD9B9AF2D491",
   "yaw": -38.95,
   "hfov": 3.56,
   "pitch": -3.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9ABE9C86_B1F9_0415_41E1_BCEB81C3DF4A",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A08CF75E_B189_0435_41A7_C2DC9733614D, this.camera_F64E622E_B289_3C15_41BB_682E232C50BA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.95,
   "hfov": 3.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_1_HS_1_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.35,
   "hfov": 4.01
  }
 ],
 "id": "overlay_9D7F4916_B1FB_0C35_41D1_D141F6AE96FB",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386, this.camera_F65C8234_B289_3C75_41C9_8FB70E336A13); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.35,
   "hfov": 4.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_1_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9B910B6_B189_1C72_41E2_0A7B7ED3C385",
   "yaw": 76.42,
   "hfov": 6.06,
   "pitch": -14.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_950E7C0D_B189_0416_41E0_748099083287",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB, this.camera_F67E5227_B289_3C12_419C_5890205F491A); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.42,
   "hfov": 6.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9B9E0B6_B189_1C72_41C4_7EEC6D99A47B",
   "yaw": -87.45,
   "hfov": 5.15,
   "pitch": -34.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_973CD53B_B18B_0473_41C4_B44CA366A443",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B, this.camera_F190821B_B289_3C32_41D8_A20D97E24BEE); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.45,
   "hfov": 5.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BA70B6_B189_1C72_41E0_4792F2B54A7C",
   "yaw": -54.45,
   "hfov": 5.94,
   "pitch": -41.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_961DE8AC_B18B_0C15_41E5_E6A16065A04E",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1702555_B189_0436_41E4_29524536EC25, this.camera_F66E8221_B289_3C0E_41DC_C36E39993C2F); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.45,
   "hfov": 5.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C310B5_B189_1C76_41C5_78C92A281B39",
   "yaw": 128.27,
   "hfov": 7.79,
   "pitch": -15.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AA96E629_B189_041E_4185_1D8045EADECD",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1702555_B189_0436_41E4_29524536EC25, this.camera_F1F271F1_B289_3C0E_41DD_BC964B1EEAF2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.27,
   "hfov": 7.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C3E0B5_B189_1C76_41E2_FCB645CC67D4",
   "yaw": 36.57,
   "hfov": 7.66,
   "pitch": -18.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AD327B12_B189_0C32_41D5_C0DB07D636CC",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1786EBE_B189_0472_41D7_2122237B7B31, this.camera_F1E521EA_B289_3C12_41DF_B4879B79A986); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.57,
   "hfov": 7.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F95E5D40_B28B_040D_41C4_8A3F290C8648",
   "yaw": -53.38,
   "hfov": 3.29,
   "pitch": -15.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_AA089A48_B18B_0C1E_41A0_80136B13F755",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02 Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54, this.camera_F1E9B1E4_B289_3C15_41E3_6AEE0A37E65F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.38,
   "hfov": 3.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BC20B5_B189_1C76_41E4_8FC33942305D",
   "yaw": -49.75,
   "hfov": 3.63,
   "pitch": -8.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AA740CCC_B189_0415_4165_AB3D61B1CA79",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.75,
   "hfov": 3.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_1_HS_3_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F959CD40_B28B_040D_41CC_A68BCA0821E8",
   "yaw": -46.98,
   "hfov": 3.5,
   "pitch": -15.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8EDC9D38_B28B_047E_41CB_3BD95201E516",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02 Right"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.98,
   "hfov": 3.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C970B2_B189_1C0D_41D6_687CF356F17E",
   "yaw": 19.6,
   "hfov": 4.66,
   "pitch": -9.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_94C06E6A_B18B_0412_41D2_6BDD541C0428",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1721FD5_B189_0436_41C1_591378A233F7, this.camera_F0F95163_B289_3C13_41E2_C47108B1B5F9); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.6,
   "hfov": 4.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C090B4_B189_1C76_41C8_496484A3AA3B",
   "yaw": -104.61,
   "hfov": 5.86,
   "pitch": -43.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A9CF0C09_B199_041E_41D3_23D9D198DED4",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E, this.camera_F0E94157_B289_3C33_41E6_23EBFA07C4DB); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.61,
   "hfov": 5.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C170B4_B189_1C76_41E4_B7B51C0AF594",
   "yaw": -166.41,
   "hfov": 6.7,
   "pitch": -33.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AAF10214_B199_1C35_41D7_D54F794F179E",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6, this.camera_F012C151_B289_3C0F_41D5_2F5C47DE5CED); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.41,
   "hfov": 6.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C5A0B2_B189_1C0D_41D9_A5BDDE605EC4",
   "yaw": 32.28,
   "hfov": 4.59,
   "pitch": -13.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_966D2A2B_B189_0C13_41D4_F224FC578A5F",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1721FD5_B189_0436_41C1_591378A233F7, this.camera_F01B214B_B289_3C12_41DF_B9F061AF9899); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.28,
   "hfov": 4.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C4E0B2_B189_1C0D_41E2_4F35825E9178",
   "yaw": 87.52,
   "hfov": 4.61,
   "pitch": -12.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98277AA7_B18B_0C12_419D_6EB566E4AC97",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB, this.camera_F0352139_B289_3C7E_41E6_2CF9B8DBC80A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.52,
   "hfov": 4.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_1_HS_2_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -82.42,
   "hfov": 4.52
  }
 ],
 "id": "overlay_99065D33_B189_0473_41D9_B5F83D1C65F1",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A, this.camera_F0044145_B289_3C16_41CE_E501007FABBB); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.42,
   "hfov": 4.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F940AD3E_B28B_0475_41B7_1A5E38404F74",
   "yaw": 158.04,
   "hfov": 4.55,
   "pitch": -15.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8BA1E496_B28B_0435_41D6_14064795C65E",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566, this.camera_F00CB13F_B289_3C72_41DA_48A37B039446); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.04,
   "hfov": 4.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9B8D0B6_B189_1C72_41D0_55B6F8EADE00",
   "yaw": 118.37,
   "hfov": 5.8,
   "pitch": -22.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_95EB97F6_B199_03F2_41B4_EEFD3A56AE16",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B, this.camera_F02A311B_B289_3C33_41E2_DD22AF18D57B); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.37,
   "hfov": 5.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9B8A0B6_B189_1C72_41D5_5218CBA33880",
   "yaw": -20.84,
   "hfov": 4.01,
   "pitch": -33.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9222A9B8_B199_0C7D_41C5_3A9D694CAF29",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54, this.camera_F02E9121_B289_3C0E_41C0_22FC9A0BE606); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.84,
   "hfov": 4.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BF00B6_B189_1C72_41E0_200BA25BAF2F",
   "yaw": 121.24,
   "hfov": 6.52,
   "pitch": -36.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A5696428_B19B_041E_41B6_FBBDCDCD6805",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE, this.camera_F03FC133_B289_3C72_41BA_8D5512349FD1); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.24,
   "hfov": 6.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BEB0B6_B189_1C72_41CF_49F17ECE1908",
   "yaw": 92.6,
   "hfov": 7.68,
   "pitch": -18.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A534D6FF_B19B_05F2_41D5_081EAA42DF6B",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17B843F_B189_0472_41E3_BA312AC37E4C, this.camera_F0E1415D_B289_3C37_41BD_1FC31D02D4F9); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.6,
   "hfov": 7.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_1_HS_0_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -164.91,
   "hfov": 5.62
  }
 ],
 "id": "overlay_9E12EE54_B189_0435_41C5_F361C8C22366",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1721FD5_B189_0436_41C1_591378A233F7, this.camera_F6D3526B_B289_3C12_41A4_2EB977FB9C08); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.91,
   "hfov": 5.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A175F18D_B189_3C16_41D8_AA917DE7354C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C0D0B4_B189_1C76_41E5_6C14A2C72201",
   "yaw": 46.48,
   "hfov": 5.72,
   "pitch": -40.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_81C59435_B18F_0476_41E4_C670FE4E89A6",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02 Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB, this.camera_F63A2240_B289_3C0E_4193_997A99BADA22); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.48,
   "hfov": 5.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BEF0B6_B189_1C72_41D5_74BC6647A544",
   "yaw": 100.13,
   "hfov": 5.96,
   "pitch": -42.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A5F5E093_B199_7C32_41DE_427D49044C08",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD, this.camera_F0C73175_B289_3CF6_41D8_D03E5C04565E); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.13,
   "hfov": 5.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C190B4_B189_1C76_41B0_367DF4DCA717",
   "yaw": 135.05,
   "hfov": 7.44,
   "pitch": -22.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A8252F5E_B199_0435_41CC_ADE10B48F836",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54, this.camera_F6C51265_B289_3C17_41E4_C62297E0127B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.05,
   "hfov": 7.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C240B4_B189_1C76_41D1_EA471F914A91",
   "yaw": -4.01,
   "hfov": 5.5,
   "pitch": -15.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB8CA9FF_B199_0FF2_41CF_8003309DD764",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49, this.camera_F6F5925E_B289_3C32_41D1_F07D25087D2E); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.01,
   "hfov": 5.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C570B3_B189_1C72_41E2_4547A587F31E",
   "yaw": -71.95,
   "hfov": 7.81,
   "pitch": -14.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A32D990D_B189_0C17_417E_9AD619715749",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386, this.camera_F62C223A_B289_3C72_41D3_6BF95B47A0C2); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.95,
   "hfov": 7.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9CF30AC_B189_1C15_41E4_4BC85176D4BB",
   "yaw": -138.54,
   "hfov": 7.11,
   "pitch": -18.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_90F76095_B187_3C36_41E3_0AB75A9519FF",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B, this.camera_F086019A_B289_3C32_41E3_CE1BFD8F225E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.54,
   "hfov": 7.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9CF80AC_B189_1C15_41E0_AA53AB4B2BDD",
   "yaw": 49.33,
   "hfov": 6.19,
   "pitch": -8.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9077C2C9_B187_7C1F_41E2_2CED5DF70CF7",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A08CF75E_B189_0435_41A7_C2DC9733614D, this.camera_F09041A0_B289_3C0E_41C3_822168382AAC); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.33,
   "hfov": 6.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_2_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -46,
   "hfov": 4.42
  }
 ],
 "id": "overlay_900BE495_B187_0437_41E6_0276082C9C28",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A175F18D_B189_3C16_41D8_AA917DE7354C, this.camera_F17881AC_B289_3C16_4198_66667CDDC9C6); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46,
   "hfov": 4.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_3_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -18.44,
   "hfov": 4.43
  }
 ],
 "id": "overlay_9013A520_B187_040E_41C1_C991E8BEC7B1",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6, this.camera_F16D41A6_B289_3C15_41E2_A7F800E47743); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.44,
   "hfov": 4.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_4_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.7,
   "hfov": 4.44
  }
 ],
 "id": "overlay_904D1E56_B187_0435_41CF_F88B55273222",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB, this.camera_F08B3194_B289_3C36_41E0_7E949310709D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.7,
   "hfov": 4.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_4_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_5_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 16.4,
   "hfov": 4.44
  }
 ],
 "id": "overlay_93B65363_B187_1C12_41E0_CA729A65FDA2",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386, this.camera_F175F1B2_B289_3C72_41E4_D14FF7483CC1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.4,
   "hfov": 4.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C120B4_B189_1C76_4193_E64A1508D1F8",
   "yaw": 128.87,
   "hfov": 6.31,
   "pitch": -38.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A856BE81_B19B_040F_41E5_D751EF99DDA4",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6, this.camera_F1CEE1F7_B289_3FF2_41E0_0519EEC888FF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.87,
   "hfov": 6.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.7
  }
 ]
},
{
 "class": "PhotoPlayList",
 "id": "album_83A41AEF_B189_0C12_41E1_AE2983209598_AlbumPlayList",
 "items": [
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.37",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.37"
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_82434D74_B19F_04F5_41D9_B49C2A67F57D",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.45"
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_87DF8859_B19F_0C3F_41E2_7A0655417B7A",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.62",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.63"
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_8277CB10_B19F_0C0E_41D7_E99A1395CCD8",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.38"
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_82583416_B19F_0432_41CA_1C7E5576E1EF",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.63",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.68"
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_824431A3_B19F_1C13_41D0_E90E55F42CC8",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.74"
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_82A0F766_B19F_0415_41D1_EAB8158DFBA7",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.60",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.53"
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_825EB048_B19F_7C1D_41D8_58FF0A9AF6F7",
   "class": "PhotoPlayListItem"
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9B840B6_B189_1C72_41E2_169CF6A76338",
   "yaw": 116.71,
   "hfov": 7.36,
   "pitch": -24.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4A4F902_B199_0C12_41E5_51DA0EE76330",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1, this.camera_F05AA108_B289_3C1D_41C7_736E9B5F15D1); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.71,
   "hfov": 7.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.43
  }
 ]
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "width": "12%",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 70,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 150,
 "mode": "push",
 "height": "8%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 70,
 "maxHeight": 150
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "20%",
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "bottom": "20%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "20%",
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "bottom": "20%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "width": "12%",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 70,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 150,
 "mode": "push",
 "height": "8%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 70,
 "maxHeight": 150
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "right": 10,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "20%",
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "bottom": "20%",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "width": "5.17%",
 "class": "IconButton",
 "paddingRight": 0,
 "right": "1.77%",
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "45.75%",
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "height": 58,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_1_HS_0_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 38.81,
   "hfov": 4.75
  }
 ],
 "id": "overlay_9DF66DBE_B1FB_0472_41E4_442BA03CE3A8",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.81,
   "hfov": 4.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_1_HS_0_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_1_HS_1_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 53.64,
   "hfov": 4.68
  }
 ],
 "id": "overlay_9A3E5DC1_B1F9_040E_41A0_7F51E90E7F53",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.64,
   "hfov": 4.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_1_HS_1_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_1_HS_2_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 16.01,
   "hfov": 4.77
  }
 ],
 "id": "overlay_9DDC48F2_B1F9_0C0D_41C9_B0C145017766",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.01,
   "hfov": 4.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_1_HS_2_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_1_HS_3_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.99,
   "hfov": 4.78
  }
 ],
 "id": "overlay_9D8E8CE4_B1F9_0416_41DA_474EB11FCFD8",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.99,
   "hfov": 4.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_1_HS_3_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C460B2_B189_1C0D_41DA_E69DB262DC9D",
   "yaw": -35.59,
   "hfov": 3.48,
   "pitch": -13.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A71821A_B1F9_3C32_41E4_737737BE46D3",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1721FD5_B189_0436_41C1_591378A233F7, this.camera_F0540115_B289_3C37_41DE_C960DB3DAE3D); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.59,
   "hfov": 3.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_1_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F946FD37_B28B_0472_41CE_CEBBE6193E8A",
   "yaw": 125.21,
   "hfov": 3.54,
   "pitch": -7.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_880F0A81_B289_0C0E_41E6_38621F804FBA",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A, this.camera_F05E510E_B289_3C12_41C5_C0908EF5795E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.21,
   "hfov": 3.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C2C0B4_B189_1C76_41A0_EEE49E807587",
   "yaw": 174.24,
   "hfov": 7.79,
   "pitch": -15.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB3A3658_B187_043D_41D9_A4CEB3342732",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54, this.camera_F0F2F169_B289_3C1F_41E1_C04A38FA43B2); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.24,
   "hfov": 7.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C280B4_B189_1C76_41BD_A81EF98F502E",
   "yaw": 23.51,
   "hfov": 7.64,
   "pitch": -19.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB3BC685_B187_0417_41D1_4F4ADCBFCE95",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17925ED_B189_0411_41DB_D1211403D632, this.camera_F0CDA170_B289_3C0D_41E2_A0C6FD8E8C0E); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.51,
   "hfov": 7.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BE30B5_B189_1C76_41DB_40EC748F854B",
   "yaw": 11.23,
   "hfov": 3.44,
   "pitch": -15.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AFC73F1C_B18F_0435_41D9_1F96980ACF6C",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1702555_B189_0436_41E4_29524536EC25, this.camera_F76F328A_B289_3C12_41E0_4B851ADCEDC1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.23,
   "hfov": 3.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BEF0B5_B189_1C76_41DB_F2FC65E27FB1",
   "yaw": -55.9,
   "hfov": 3.34,
   "pitch": -20.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_90C9D9DC_B189_0C36_41DA_3720E32C62F1",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1795733_B189_0473_41D4_DC67363653D6, this.camera_F681727E_B289_3CF2_41CC_FBECF45D1854); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.9,
   "hfov": 3.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F95BED41_B28B_040F_41CA_37C152F163AC",
   "yaw": 4.39,
   "hfov": 3.44,
   "pitch": -9.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_88388B44_B28F_0C16_41D6_A94BDC300C39",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02 Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1760604_B189_0416_41E3_9015953B16EF, this.camera_F690C284_B289_3C16_41DD_13CCB5F414DB); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.39,
   "hfov": 3.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C4D0B2_B189_1C0D_41C7_A2F683BB0F49",
   "yaw": 7.7,
   "hfov": 3.78,
   "pitch": -10.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE68C033_B189_1C72_41D7_DED090A9980B",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1702555_B189_0436_41E4_29524536EC25, this.camera_F12B61C5_B289_3C17_41CB_CA20EAC86A1C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.7,
   "hfov": 3.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C480B2_B189_1C0D_41DE_E28670C707C1",
   "yaw": -129.9,
   "hfov": 6.13,
   "pitch": -35.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_91FE75E0_B189_040E_41DD_11D6F4261A6E",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3, this.camera_F14321B9_B289_3C7F_41E2_1A92B4754664); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.9,
   "hfov": 6.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C510B2_B189_1C0D_41C6_1794B114B377",
   "yaw": 7.7,
   "hfov": 3.78,
   "pitch": -10.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9128A4A6_B189_0412_41C9_FCC1DA4AB105",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1721FD5_B189_0436_41C1_591378A233F7, this.camera_F133F1D1_B289_3C0F_41BA_E90590BB5213); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.7,
   "hfov": 3.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C5D0B2_B189_1C0D_41CC_31C0F9D12507",
   "yaw": -25.72,
   "hfov": 4.59,
   "pitch": -13.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9044600D_B18B_3C16_41E1_87182FF9A006",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BDC0B_B189_0412_41DC_0A8138B51386, this.camera_F15E71BF_B289_3C72_41D0_B0F0A03EAAB6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.72,
   "hfov": 4.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9415D38_B28B_047E_41D4_BA5EEFC5778A",
   "yaw": 153.43,
   "hfov": 4.76,
   "pitch": -27.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8E8A76BB_B28B_0473_41C2_E842D90F3E6F",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1702555_B189_0436_41E4_29524536EC25, this.camera_F126C1CB_B289_3C13_41DB_CC43388095BB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.43,
   "hfov": 4.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BF90B6_B189_1C72_41E5_7555D4168088",
   "yaw": 63.38,
   "hfov": 5.42,
   "pitch": -29.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A9B0680F_B19F_0C13_41DA_C9907FDB77B0",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1760604_B189_0416_41E3_9015953B16EF, this.camera_F77F3290_B289_3C0E_41E2_2F94A4022D73); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.38,
   "hfov": 5.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BB30B8_B189_1C7D_41E4_D7DE210C9FA8",
   "yaw": -55.23,
   "hfov": 3.33,
   "pitch": -21.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9FE9A13D_B187_3C76_41A9_023DC4F9BE4B",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1795195_B189_1C36_41B6_DA476A9A186A, this.camera_F1815215_B289_3C36_41E4_4C087250F671); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.23,
   "hfov": 3.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C5D0B3_B189_1C72_41D7_734941815B9D",
   "yaw": -141.2,
   "hfov": 4.96,
   "pitch": -26.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98AAF63B_B187_0473_41E2_16C5BA17A13F",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1, this.camera_F618324C_B289_3C15_418C_7A8B11C5C2E9); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.2,
   "hfov": 4.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C5A0B3_B189_1C72_41D9_00742B9E6949",
   "yaw": -39.85,
   "hfov": 2.88,
   "pitch": -9.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B516C9D_B1FB_0436_41CF_BB18896A075B",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE, this.camera_F617E252_B289_3C0D_41DC_8E2588601F3F); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.85,
   "hfov": 2.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C610B3_B189_1C72_41E4_F75B63151649",
   "yaw": -7.41,
   "hfov": 4.39,
   "pitch": -3.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9FFA77C9_B1F9_041F_41C6_3632C3FD6AC5",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1795195_B189_1C36_41B6_DA476A9A186A, this.camera_F6E75258_B289_3C3D_41DC_5F79FDBFF18F); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.41,
   "hfov": 4.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F942DD3E_B28B_0472_41D6_328919EFF975",
   "yaw": -39.15,
   "hfov": 3.02,
   "pitch": -11.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8EC25C71_B289_040E_41CE_190BC69C4423",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02 Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB, this.camera_F609E246_B289_3C12_41A9_0061BBDB2866); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.15,
   "hfov": 3.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BA20B6_B189_1C72_41D8_F04643A59902",
   "yaw": 55.03,
   "hfov": 4.55,
   "pitch": -19.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9F1A0E51_B18B_040F_41D9_D7C28AC4439A",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1713894_B189_0C35_41D1_418E85BC1092, this.camera_F10FB1D7_B289_3C33_41DD_776EBAEEC340); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.03,
   "hfov": 4.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BAB0B6_B189_1C72_41C1_B7B3DBA8D0E6",
   "yaw": -4.85,
   "hfov": 3.14,
   "pitch": -12.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8114D2C8_B18B_3C1E_41D8_C6201838F7E0",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1795195_B189_1C36_41B6_DA476A9A186A, this.camera_F11C41DD_B289_3C36_41CD_DD707606FE38); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.85,
   "hfov": 3.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C6E0B3_B189_1C72_418C_7B8C2B9CCDB1",
   "yaw": -7.66,
   "hfov": 2.68,
   "pitch": -9.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_81F7E928_B18F_0C1E_41B9_29BBA9D1E97D",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02 Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD, this.camera_F1A6C209_B289_3C1E_41D1_58662F3E84EE); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.66,
   "hfov": 2.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C740B3_B189_1C72_41D8_1C09C4863627",
   "yaw": 38.63,
   "hfov": 3.27,
   "pitch": -11.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_800222C9_B189_FC1F_41D1_A2853CC86250",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02 Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1713894_B189_0C35_41D1_418E85BC1092, this.camera_F1DCB1FE_B289_3FF5_41E1_631003159DBC); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.63,
   "hfov": 3.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C720B3_B189_1C72_41DF_AA1ED286374B",
   "yaw": 48.31,
   "hfov": 2.67,
   "pitch": -11.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8162587C_B189_0CF5_41E2_910C06FD52D1",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02 Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE, this.camera_F1B4F20F_B289_3C12_41A6_26998A6402FF); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.31,
   "hfov": 2.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C780B4_B189_1C76_41DF_8C3E376838AE",
   "yaw": 44.75,
   "hfov": 2.52,
   "pitch": -9.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_811EB36F_B18B_1C12_41E5_B617C7A2325C",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17B843F_B189_0472_41E3_BA312AC37E4C, this.camera_F1A91204_B289_3C15_417F_7B28D5A00599); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.75,
   "hfov": 2.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C930B2_B189_1C0D_41E1_8EBB7AA0A94C",
   "yaw": -54.33,
   "hfov": 4.14,
   "pitch": -28.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_97B3DE7F_B18F_04F3_41BE_9B238461409D",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1721FD5_B189_0436_41C1_591378A233F7, this.camera_F0D2117C_B289_3CF5_41DC_6E3E26BCE2C0); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.33,
   "hfov": 4.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9C9E0B2_B189_1C0D_41C9_0D1DD4AAFE9A",
   "yaw": 39.52,
   "hfov": 4.52,
   "pitch": -17.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_97FC2235_B18F_3C76_41D0_07E6864E2B6C",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E, this.camera_F0A6B188_B289_3C1E_41DE_E7E3C186B107); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.52,
   "hfov": 4.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9CA40B2_B189_1C0D_41D5_7641D02957C7",
   "yaw": 48.76,
   "hfov": 4.44,
   "pitch": -20.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9678C10A_B18F_1C12_41DB_DDDE74D82975",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2, this.camera_F0B1B18E_B289_3C15_41C4_10BDCEC8009B); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.76,
   "hfov": 4.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9CA30B2_B189_1C0D_41C0_C498AE4EA8ED",
   "yaw": 64,
   "hfov": 4.38,
   "pitch": -13.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_99427F40_B189_040D_41E0_3AA8013BCACE",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02 Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4, this.camera_F0AB8182_B289_3C12_41E3_E86C9248EA20); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64,
   "hfov": 4.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BC80B5_B189_1C76_41CB_26B73212702F",
   "yaw": 23.38,
   "hfov": 4.4,
   "pitch": -15.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE81FC8E_B18B_0412_41C9_89CAA0B6A85F",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25, this.camera_F039E12D_B289_3C16_41A8_C5989AAEC6CA); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.38,
   "hfov": 4.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BD10B5_B189_1C76_41D4_0C0B79C08764",
   "yaw": -50.32,
   "hfov": 5.15,
   "pitch": -14.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC9DF516_B1B9_0435_41C0_8A14900E8757",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1, this.camera_F0253127_B289_3C12_41D8_AA4EE807179C); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.32,
   "hfov": 5.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BDE0B5_B189_1C76_41D4_4AFDF34B98A1",
   "yaw": 146.99,
   "hfov": 4.62,
   "pitch": -16.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AF84A689_B1BB_041E_41D7_02BF9DF8B247",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 03a"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.99,
   "hfov": 4.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9BDA0B5_B189_1C76_41D5_C1DA495B310B",
   "yaw": 154.05,
   "hfov": 3.21,
   "pitch": -42.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_AF16D1B1_B189_7C0F_41C2_BCFB8A2F1B76",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02 Right"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.05,
   "hfov": 3.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.98
  }
 ]
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 58,
 "mode": "push",
 "height": 58,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "maxHeight": 58
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 100,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "class": "IconButton",
 "paddingRight": 0,
 "right": 30,
 "minWidth": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 49,
 "mode": "push",
 "height": 75,
 "bottom": 8,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "maxHeight": 37
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "maxHeight": 58
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "maxHeight": 58
},
{
 "verticalAlign": "middle",
 "overflow": "visible",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "right": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "height": 110,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingBottom": 0,
 "gap": 10,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "right": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "paddingBottom": 0,
 "gap": 3,
 "height": "85.959%",
 "layout": "vertical",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "middle",
 "id": "Image_85724E8B_B187_0412_41B9_D70739EC2A7E",
 "left": "0%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": "36.649%",
 "scaleMode": "fit_inside",
 "class": "Image",
 "paddingRight": 0,
 "minWidth": 1,
 "url": "skin/Image_85724E8B_B187_0412_41B9_D70739EC2A7E.png",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "12.78%",
 "borderSize": 0,
 "maxWidth": 210,
 "height": "46.617%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image77346"
 },
 "shadow": false,
 "minHeight": 1,
 "maxHeight": 62
},
{
 "verticalAlign": "middle",
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "class": "Image",
 "paddingRight": 0,
 "right": "0%",
 "minWidth": 1,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 3000,
 "height": 2,
 "bottom": 53,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "white line"
 },
 "shadow": false,
 "minHeight": 1,
 "maxHeight": 2
},
{
 "verticalAlign": "middle",
 "overflow": "scroll",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": 1199,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "paddingLeft": 30,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": 51,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "contentOpaque": false,
 "gap": 3,
 "paddingBottom": 0,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "id": "Button_FA94E7B6_B287_0472_41E4_885B6E4B9BB1",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 112,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "class": "Button",
 "paddingRight": 0,
 "right": "-0.12%",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderRadius": 0,
 "iconWidth": 32,
 "propagateClick": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "mode": "push",
 "height": 40,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "bottom": "-30.51%",
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "BACK TO TOUR",
 "fontStyle": "normal",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button photoalbum"
 },
 "fontWeight": "bold",
 "iconBeforeLabel": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "bottom": "5%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 20,
 "right": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "top": "5%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "bottom": "80%",
 "paddingBottom": 0,
 "gap": 10,
 "layout": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "bottom": "5%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 20,
 "right": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "top": "5%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "bottom": "80%",
 "paddingBottom": 0,
 "gap": 10,
 "layout": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "bottom": "7%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "bottom": "5%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 20,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "right": "10%",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "top": "5%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "bottom": "80%",
 "paddingBottom": 0,
 "gap": 10,
 "layout": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.TabPanel_8F9AA4BA_B2B9_047D_41D9_A73DDB4D9E3E"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "bottom": "7%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "bottom": "7%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "show": "this.mainPlayList.set('selectedIndex', 29)",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "bottom": "7%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowColor": "#000000",
 "class": "Container",
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "bottom": "5%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 20,
 "right": "10%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "top": "5%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "bottom": "80%",
 "paddingBottom": 0,
 "gap": 10,
 "layout": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BDD0B5_B189_1C76_41D7_E6D91F7B6FAB",
 "levels": [
  {
   "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BD80B6_B189_1C72_41D1_E65C651218BF",
 "levels": [
  {
   "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BE60B6_B189_1C72_41D9_A1DE766E32A2",
 "levels": [
  {
   "url": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9CA90B2_B189_1C0D_41CB_BD9B9AF2D491",
 "levels": [
  {
   "url": "media/panorama_A170EE29_B189_041E_41DF_3E1BDC41E55A_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9B910B6_B189_1C72_41E2_0A7B7ED3C385",
 "levels": [
  {
   "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9B9E0B6_B189_1C72_41C4_7EEC6D99A47B",
 "levels": [
  {
   "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BA70B6_B189_1C72_41E0_4792F2B54A7C",
 "levels": [
  {
   "url": "media/panorama_A1795195_B189_1C36_41B6_DA476A9A186A_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C310B5_B189_1C76_41C5_78C92A281B39",
 "levels": [
  {
   "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C3E0B5_B189_1C76_41E2_FCB645CC67D4",
 "levels": [
  {
   "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F95E5D40_B28B_040D_41C4_8A3F290C8648",
 "levels": [
  {
   "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BC20B5_B189_1C76_41E4_8FC33942305D",
 "levels": [
  {
   "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_1_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F959CD40_B28B_040D_41CC_A68BCA0821E8",
 "levels": [
  {
   "url": "media/panorama_A17A3D0B_B189_0412_41E0_C194DEB1F8DE_0_HS_4_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C970B2_B189_1C0D_41D6_687CF356F17E",
 "levels": [
  {
   "url": "media/panorama_A177FA8E_B189_0C15_41A6_9A493E74E47B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C090B4_B189_1C76_41C8_496484A3AA3B",
 "levels": [
  {
   "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C170B4_B189_1C76_41E4_B7B51C0AF594",
 "levels": [
  {
   "url": "media/panorama_A1755952_B189_0C0D_41DE_37A6EAD4FBB2_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C5A0B2_B189_1C0D_41D9_A5BDDE605EC4",
 "levels": [
  {
   "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C4E0B2_B189_1C0D_41E2_4F35825E9178",
 "levels": [
  {
   "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F940AD3E_B28B_0475_41B7_1A5E38404F74",
 "levels": [
  {
   "url": "media/panorama_A17BDC0B_B189_0412_41DC_0A8138B51386_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9B8D0B6_B189_1C72_41D0_55B6F8EADE00",
 "levels": [
  {
   "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9B8A0B6_B189_1C72_41D5_5218CBA33880",
 "levels": [
  {
   "url": "media/panorama_A1713894_B189_0C35_41D1_418E85BC1092_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BF00B6_B189_1C72_41E0_200BA25BAF2F",
 "levels": [
  {
   "url": "media/panorama_A1786EBE_B189_0472_41D7_2122237B7B31_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BEB0B6_B189_1C72_41CF_49F17ECE1908",
 "levels": [
  {
   "url": "media/panorama_A17925ED_B189_0411_41DB_D1211403D632_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C0D0B4_B189_1C76_41E5_6C14A2C72201",
 "levels": [
  {
   "url": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BEF0B6_B189_1C72_41D5_74BC6647A544",
 "levels": [
  {
   "url": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C190B4_B189_1C76_41B0_367DF4DCA717",
 "levels": [
  {
   "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C240B4_B189_1C76_41D1_EA471F914A91",
 "levels": [
  {
   "url": "media/panorama_A1796AB0_B189_0C0E_41CA_71C0E0A670FD_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C570B3_B189_1C72_41E2_4547A587F31E",
 "levels": [
  {
   "url": "media/panorama_A0DF4C21_B18F_040F_41D8_057FB6BFD566_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9CF30AC_B189_1C15_41E4_4BC85176D4BB",
 "levels": [
  {
   "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9CF80AC_B189_1C15_41E0_AA53AB4B2BDD",
 "levels": [
  {
   "url": "media/panorama_A1721FD5_B189_0436_41C1_591378A233F7_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C120B4_B189_1C76_4193_E64A1508D1F8",
 "levels": [
  {
   "url": "media/panorama_A17FF1D8_B189_7C3E_41DE_1857873A48D4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9B840B6_B189_1C72_41E2_169CF6A76338",
 "levels": [
  {
   "url": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C460B2_B189_1C0D_41DA_E69DB262DC9D",
 "levels": [
  {
   "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F946FD37_B28B_0472_41CE_CEBBE6193E8A",
 "levels": [
  {
   "url": "media/panorama_A08CF75E_B189_0435_41A7_C2DC9733614D_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C2C0B4_B189_1C76_41A0_EEE49E807587",
 "levels": [
  {
   "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C280B4_B189_1C76_41BD_A81EF98F502E",
 "levels": [
  {
   "url": "media/panorama_A17B843F_B189_0472_41E3_BA312AC37E4C_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BE30B5_B189_1C76_41DB_40EC748F854B",
 "levels": [
  {
   "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BEF0B5_B189_1C76_41DB_F2FC65E27FB1",
 "levels": [
  {
   "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F95BED41_B28B_040F_41CA_37C152F163AC",
 "levels": [
  {
   "url": "media/panorama_A17B9EFE_B189_05F3_41E0_59AE0F2A98A1_0_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C4D0B2_B189_1C0D_41C7_A2F683BB0F49",
 "levels": [
  {
   "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C480B2_B189_1C0D_41DE_E28670C707C1",
 "levels": [
  {
   "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C510B2_B189_1C0D_41C6_1794B114B377",
 "levels": [
  {
   "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C5D0B2_B189_1C0D_41CC_31C0F9D12507",
 "levels": [
  {
   "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9415D38_B28B_047E_41D4_BA5EEFC5778A",
 "levels": [
  {
   "url": "media/panorama_A1776854_B189_0C36_41D5_FFC1C66E88BB_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BF90B6_B189_1C72_41E5_7555D4168088",
 "levels": [
  {
   "url": "media/panorama_A1754081_B189_1C0F_41E5_B09D5F63EE25_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BB30B8_B189_1C7D_41E4_D7DE210C9FA8",
 "levels": [
  {
   "url": "media/panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C5D0B3_B189_1C72_41D7_734941815B9D",
 "levels": [
  {
   "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C5A0B3_B189_1C72_41D9_00742B9E6949",
 "levels": [
  {
   "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C610B3_B189_1C72_41E4_F75B63151649",
 "levels": [
  {
   "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F942DD3E_B28B_0472_41D6_328919EFF975",
 "levels": [
  {
   "url": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_0_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BA20B6_B189_1C72_41D8_F04643A59902",
 "levels": [
  {
   "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BAB0B6_B189_1C72_41C1_B7B3DBA8D0E6",
 "levels": [
  {
   "url": "media/panorama_A170E90F_B189_0C12_41AE_35784F8E4D0B_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C6E0B3_B189_1C72_418C_7B8C2B9CCDB1",
 "levels": [
  {
   "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C740B3_B189_1C72_41D8_1C09C4863627",
 "levels": [
  {
   "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_1_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C720B3_B189_1C72_41DF_AA1ED286374B",
 "levels": [
  {
   "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C780B4_B189_1C76_41DF_8C3E376838AE",
 "levels": [
  {
   "url": "media/panorama_A17852C0_B189_1C0D_41C7_7B1F8CA52A54_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C930B2_B189_1C0D_41E1_8EBB7AA0A94C",
 "levels": [
  {
   "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9C9E0B2_B189_1C0D_41C9_0D1DD4AAFE9A",
 "levels": [
  {
   "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9CA40B2_B189_1C0D_41D5_7641D02957C7",
 "levels": [
  {
   "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9CA30B2_B189_1C0D_41C0_C498AE4EA8ED",
 "levels": [
  {
   "url": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_1_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BC80B5_B189_1C76_41CB_26B73212702F",
 "levels": [
  {
   "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BD10B5_B189_1C76_41D4_0C0B79C08764",
 "levels": [
  {
   "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BDE0B5_B189_1C76_41D4_4AFDF34B98A1",
 "levels": [
  {
   "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9BDA0B5_B189_1C76_41D5_C1DA495B310B",
 "levels": [
  {
   "url": "media/panorama_A1760604_B189_0416_41E3_9015953B16EF_1_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 58,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "maxHeight": 58
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 58,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "maxHeight": 58
},
{
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 120,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "shadowColor": "#000000",
 "class": "Button",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderRadius": 0,
 "iconWidth": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "mode": "push",
 "height": 40,
 "iconHeight": 0,
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "rollOverShadow": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "ABOUT PROJECT",
 "fontStyle": "normal",
 "gap": 5,
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "iconBeforeLabel": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 130,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "class": "Button",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderRadius": 0,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "mode": "push",
 "height": 40,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PANORAMA LIST",
 "fontStyle": "normal",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button panorama list"
 },
 "fontWeight": "bold",
 "iconBeforeLabel": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 90,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "class": "Button",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderRadius": 0,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "mode": "push",
 "height": 40,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LOCATION",
 "fontStyle": "normal",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button location"
 },
 "fontWeight": "bold",
 "iconBeforeLabel": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 103,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "class": "Button",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderRadius": 0,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "mode": "push",
 "height": 40,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "FLOORPLAN",
 "fontStyle": "normal",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "Button floorplan"
 },
 "fontWeight": "bold",
 "iconBeforeLabel": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 112,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "class": "Button",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderRadius": 0,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "mode": "push",
 "height": 40,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PHOTOALBUM",
 "fontStyle": "normal",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 29)",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button photoalbum"
 },
 "fontWeight": "bold",
 "iconBeforeLabel": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": 107,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "class": "Button",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "borderRadius": 0,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "mode": "push",
 "height": 40,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "BACK TO TOUR",
 "fontStyle": "normal",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button realtor"
 },
 "fontWeight": "bold",
 "iconBeforeLabel": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "overflow": "scroll",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "width": "85%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "width": "50%",
 "class": "Container",
 "paddingRight": 50,
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 50,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "width": "25%",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "verticalAlign": "middle",
 "overflow": "scroll",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "width": "85%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "width": "50%",
 "class": "Container",
 "paddingRight": 50,
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 50,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "width": "25%",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": 140,
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "minHeight": 1,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "normal",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "itemMaxWidth": 1000,
 "class": "ThumbnailGrid",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarColor": "#333333",
 "width": "100%",
 "borderRadius": 5,
 "paddingLeft": 70,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMaxHeight": 1000,
 "backgroundColorRatios": [
  0
 ],
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemThumbnailOpacity": 1,
 "height": "100%",
 "itemLabelGap": 7,
 "itemLabelPosition": "bottom",
 "paddingBottom": 70,
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "verticalAlign": "middle",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColor": [],
 "itemPaddingRight": 3,
 "itemBackgroundColorRatios": [],
 "selectedItemLabelFontColor": "#04A3E1",
 "shadow": false,
 "backgroundOpacity": 0.05,
 "itemBackgroundOpacity": 0,
 "itemWidth": 220,
 "paddingRight": 70,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "propagateClick": false,
 "itemMinHeight": 50,
 "rollOverItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "borderSize": 0,
 "itemLabelFontSize": 14,
 "itemHeight": 156,
 "itemThumbnailScaleMode": "fit_outside",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadow": true,
 "scrollBarMargin": 2,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemMinWidth": 50,
 "itemLabelFontColor": "#666666",
 "backgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "itemBackgroundColorDirection": "vertical",
 "gap": 26,
 "rollOverItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemOpacity": 1,
 "itemVerticalAlign": "top",
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "selectedItemLabelFontWeight": "bold",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailShadow": false,
 "horizontalAlign": "center",
 "itemThumbnailWidth": 220
},
{
 "verticalAlign": "middle",
 "overflow": "scroll",
 "children": [
  "this.Image_88E9DEF9_B279_05FF_41E5_83952AF6D19E"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "width": "85%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "width": "15%",
 "class": "Container",
 "paddingRight": 50,
 "minWidth": 400,
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 50,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "width": "25%",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": 140,
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "tabsRollOverBackgroundOpacity": 0.78,
 "selectedTabBackgroundOpacity": 0,
 "overflow": "visible",
 "height": "80.639%",
 "id": "TabPanel_8F9AA4BA_B2B9_047D_41D9_A73DDB4D9E3E",
 "tabsRollOverFontWeight": "bold",
 "backgroundOpacity": 0,
 "tabsFontWeight": "normal",
 "pages": [
  {
   "verticalAlign": "top",
   "overflow": "scroll",
   "children": [
    "this.MapViewer"
   ],
   "horizontalAlign": "left",
   "backgroundOpacity": 1,
   "width": "100%",
   "class": "TabPanelPage",
   "paddingRight": 0,
   "minWidth": 20,
   "scrollBarColor": "#000000",
   "borderRadius": 0,
   "scrollBarWidth": 10,
   "propagateClick": false,
   "paddingLeft": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorRatios": [
    0
   ],
   "scrollBarOpacity": 0.5,
   "borderSize": 0,
   "backgroundColor": [
    "#FFFFFF"
   ],
   "scrollBarMargin": 2,
   "contentOpaque": false,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "label": "Ground Floor ",
   "gap": 10,
   "height": "100%",
   "layout": "absolute",
   "paddingTop": 0,
   "data": {
    "name": "TabPanelPage943"
   },
   "shadow": false,
   "minHeight": 20
  },
  {
   "verticalAlign": "top",
   "overflow": "scroll",
   "children": [
    "this.MapViewer_8FCC5674_B2BF_04F6_41DF_CF9D24517C4A"
   ],
   "horizontalAlign": "left",
   "backgroundOpacity": 1,
   "width": "100%",
   "class": "TabPanelPage",
   "paddingRight": 0,
   "minWidth": 20,
   "scrollBarColor": "#000000",
   "borderRadius": 0,
   "scrollBarWidth": 10,
   "propagateClick": false,
   "paddingLeft": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorRatios": [
    0
   ],
   "scrollBarOpacity": 0.5,
   "borderSize": 0,
   "backgroundColor": [
    "#FFFFFF"
   ],
   "scrollBarMargin": 2,
   "contentOpaque": false,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "label": "First Floor",
   "gap": 10,
   "height": "100%",
   "layout": "absolute",
   "paddingTop": 0,
   "data": {
    "name": "TabPanelPage1538"
   },
   "shadow": false,
   "minHeight": 20
  },
  {
   "verticalAlign": "top",
   "overflow": "scroll",
   "children": [
    "this.MapViewer_8C2DFA99_B2BF_0C3E_4164_71BD72F04B18"
   ],
   "horizontalAlign": "left",
   "backgroundOpacity": 1,
   "width": "100%",
   "class": "TabPanelPage",
   "paddingRight": 0,
   "minWidth": 20,
   "scrollBarColor": "#000000",
   "borderRadius": 0,
   "scrollBarWidth": 10,
   "propagateClick": false,
   "paddingLeft": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorRatios": [
    0
   ],
   "scrollBarOpacity": 0.5,
   "borderSize": 0,
   "backgroundColor": [
    "#FFFFFF"
   ],
   "scrollBarMargin": 2,
   "contentOpaque": false,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "label": "Terrace",
   "gap": 10,
   "height": "100%",
   "layout": "absolute",
   "paddingTop": 0,
   "data": {
    "name": "TabPanelPage1555"
   },
   "shadow": false,
   "minHeight": 20
  }
 ],
 "selectedTabFontColor": "#000000",
 "show": "this.setMediaBehaviour(this.playList_F06C50EC_B289_3C16_41E0_B32638149854, 0)",
 "tabsPosition": "top",
 "class": "TabPanel",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 5,
 "tabsFontFamily": "Bahnschrift",
 "tabsBackgroundColor": [
  "#333333",
  "#333333",
  "#333333",
  "#333333"
 ],
 "scrollBarWidth": 10,
 "selectedTabBackgroundColorRatios": [
  0,
  0.05,
  0.29,
  0.37,
  0.64,
  1,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "tabsFontSize": 12,
 "scrollBarVisible": "rollOver",
 "pagePaddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "width": "97.019%",
 "pagePaddingRight": 0,
 "borderSize": 0,
 "tabsRollOverBackgroundColorRatios": [
  1
 ],
 "tabsBackgroundOpacity": 1,
 "selectedTabBackgroundColor": [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "tabsAlign": "normal",
 "scrollBarMargin": 2,
 "pagePaddingTop": 0,
 "tabsSize": 32,
 "tabsTextDecoration": "none",
 "paddingBottom": 0,
 "tabsRollOverFontColor": "#000000",
 "tabsRollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "data": {
  "name": "TabPanel942"
 },
 "tabsFontStyle": "normal",
 "shadow": false,
 "pagePaddingLeft": 0,
 "tabsFontColor": "#FFFFFF",
 "selectedTabFontWeight": "bold",
 "minHeight": 1,
 "tabsBackgroundColorRatios": [
  0,
  0.55,
  0.99,
  1
 ]
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": 140,
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "middle",
 "overflow": "scroll",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "width": "55%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "visible",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "width": "45%",
 "class": "Container",
 "paddingRight": 60,
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 60,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "width": "25%",
 "class": "IconButton",
 "paddingRight": 0,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "verticalAlign": "middle",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_outside",
 "class": "Image",
 "paddingRight": 0,
 "minWidth": 1,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.png",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "0%",
 "borderSize": 0,
 "maxWidth": 2000,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "minHeight": 1,
 "maxHeight": 1000
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "height": 60,
 "layout": "horizontal",
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "minHeight": 0
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "minHeight": 520
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": 40,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "transitionDuration": 500,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "right": 0,
 "minWidth": 1,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "bottom": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "verticalAlign": "middle",
 "overflow": "scroll",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "Container arrows"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "height": 60,
 "layout": "horizontal",
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "minHeight": 0
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "minHeight": 520
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": 40,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "class": "HTMLText",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 80,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "minHeight": 100
},
{
 "verticalAlign": "top",
 "transparencyActive": false,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "right": 20,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": 20,
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "verticalAlign": "middle",
 "id": "Image_88E9DEF9_B279_05FF_41E5_83952AF6D19E",
 "left": "0%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_inside",
 "class": "Image",
 "paddingRight": 0,
 "minWidth": 1,
 "url": "skin/Image_88E9DEF9_B279_05FF_41E5_83952AF6D19E.png",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 943,
 "height": "74.877%",
 "bottom": "11.4%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image89507"
 },
 "shadow": false,
 "minHeight": 1,
 "maxHeight": 611
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "height": 60,
 "layout": "horizontal",
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "minHeight": 0
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "minHeight": 520
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": 40,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "class": "HTMLText",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 80,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:5.18vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "minHeight": 100
},
{
 "verticalAlign": "top",
 "transparencyActive": false,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "right": 20,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": 20,
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "transitionDuration": 500,
 "minHeight": 1,
 "id": "MapViewer",
 "left": "0.47%",
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "width": "97.957%",
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "minWidth": 1,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "95.31%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "show": "this.setMediaBehaviour(this.playList_F06C90EC_B289_3C16_41E5_F7F8EA61E698, 0)",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "1.84%",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "transitionDuration": 500,
 "minHeight": 1,
 "id": "MapViewer_8FCC5674_B2BF_04F6_41DF_CF9D24517C4A",
 "left": "0.29%",
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "width": "98.135%",
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "minWidth": 1,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "95.31%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "show": "this.setMediaBehaviour(this.playList_F06CD0ED_B289_3C17_41DF_6A89519CEE28, 0)",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "1.83%",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "transitionDuration": 500,
 "minHeight": 1,
 "id": "MapViewer_8C2DFA99_B2BF_0C3E_4164_71BD72F04B18",
 "left": "0.11%",
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "width": "98.313%",
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "minWidth": 1,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "95.31%",
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "1.84%",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.115%",
 "class": "HTMLText",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 80,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "minHeight": 100
},
{
 "verticalAlign": "top",
 "transparencyActive": false,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "right": 20,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": 20,
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "transitionDuration": 500,
 "minHeight": 1,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "width": "100%",
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "minWidth": 1,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "transitionDuration": 500,
 "minHeight": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "width": "100%",
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "minWidth": 1,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "show": "this.mainPlayList.set('selectedIndex', 29)",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "verticalAlign": "top",
 "transparencyActive": false,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "width": "10%",
 "class": "IconButton",
 "paddingRight": 0,
 "right": 20,
 "minWidth": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": 20,
 "borderSize": 0,
 "maxWidth": 60,
 "mode": "push",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand",
 "minHeight": 50,
 "maxHeight": 60
},
{
 "verticalAlign": "bottom",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_outside",
 "class": "Image",
 "paddingRight": 0,
 "minWidth": 1,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "top": "0%",
 "borderSize": 0,
 "maxWidth": 2000,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "minHeight": 1,
 "maxHeight": 1000
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "height": 60,
 "layout": "horizontal",
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "minHeight": 0
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "minHeight": 520
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": 40,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "HTMLText",
 "paddingRight": 10,
 "minWidth": 1,
 "scrollBarColor": "#333333",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Welcome to The Cape Town Beachhouse</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.42vh;font-family:'Bebas Neue Bold';\">FIND YOUR HEAVEN BY THE SEA.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Discover your dream escape at The Cape Town Beachhouse on Sunset Beach. Wake up to breathtaking, panoramic views of Table Mountain, and step directly onto the pristine beach, perfect for relaxation, kitesurfing, and other water sports. Whether you\u2019re a family seeking adventure or a digital nomad in search of a sustainable, luxurious retreat, our exclusive accommodations redefine comfort and style.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">- Heated floors for cozy comfort year-round</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">- Full air conditioning throughout the property</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">- Custom-made, high-quality furniture for an elegant and relaxing atmosphere</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">- High-speed internet to stay connected effortlessly</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">- A private barbecue area for unforgettable evenings with family and friends</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">- Whirlpool/Jacuzzi for ultimate relaxation</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">- Full solar power for a sustainable, uninterrupted experience</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Every detail has been thoughtfully curated to provide the perfect balance of luxury and eco-conscious living. Whether you\u2019re unwinding after a day on the water or working remotely with an ocean view, The Cape Town Beachhouse is your exclusive getaway.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Why choose us:</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Luxury: We believe in providing the finest experiences for our guests. Every room is designed with comfort and elegance in mind, featuring premium furnishings and breathtaking views.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Sustainability: As stewards of this beautiful environment, we prioritize sustainable practices to protect and preserve our beachfront for future generations. From eco-friendly building materials to energy-efficient operations, we are committed to minimizing our impact.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> Customer Satisfaction: Our guests\u2019 comfort and happiness are at the heart of everything we do. We go above and beyond to ensure that every stay is memorable, personalizing services to meet individual needs.</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "80%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "gap": 10,
 "height": "30%",
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "Container separator"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "HTMLText",
 "paddingRight": 10,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Bebas Neue Bold",
 "rollOverBackgroundOpacity": 1,
 "textDecoration": "none",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "horizontalAlign": "center",
 "backgroundOpacity": 0.7,
 "width": "46%",
 "shadowColor": "#000000",
 "class": "Button",
 "paddingRight": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "fontSize": "3vh",
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "gap": 5,
 "height": "9%",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "shadowSpread": 1
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "HTMLText",
 "paddingRight": 10,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.42vh;font-family:'Bebas Neue Bold';\">9 hastula way, 7441 sunset beach, cape town,</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.42vh;font-family:'Bebas Neue Bold';\">south africa</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Nestled on the stunning Sunset Beach, our property has been completely renovated from top to bottom, with every element carefully curated and personally selected to reflect both comfort and sophistication.</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Bebas Neue Bold",
 "rollOverBackgroundOpacity": 1,
 "textDecoration": "none",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "horizontalAlign": "center",
 "backgroundOpacity": 0.7,
 "width": 207,
 "shadowColor": "#000000",
 "class": "Button",
 "paddingRight": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "iconWidth": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "fontSize": 34,
 "pressedBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "gap": 5,
 "height": 59,
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "iconBeforeLabel": true,
 "shadow": false,
 "cursor": "hand",
 "minHeight": 1,
 "shadowSpread": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "HTMLText",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "45%",
 "scrollBarMargin": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.06vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "overflow": "scroll",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "height": "80%",
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "minHeight": 1
},
{
 "verticalAlign": "top",
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "width": "25%",
 "scaleMode": "fit_inside",
 "class": "Image",
 "paddingRight": 0,
 "minWidth": 1,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "borderSize": 0,
 "maxWidth": 200,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "maxHeight": 200
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "class": "HTMLText",
 "paddingRight": 10,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false,
 "minHeight": 1
}],
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.73,
 "width": "100%",
 "class": "Player",
 "paddingRight": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "layout": "absolute",
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "desktopMipmappingEnabled": false,
 "minHeight": 20
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
