

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {
  
      var PACKAGE_PATH;
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof location !== 'undefined') {
        // worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      } else {
        throw 'using preloaded data can only be done on a web page or in a web worker';
      }
      var PACKAGE_NAME = '/mnt/c/Users/Thomas/Desktop/Sonic4Episode1/Sonic4Episode1.Wasm/obj/Debug/net6.0/dist_work/dotnet.data';
      var REMOTE_PACKAGE_BASE = 'https://media.githubusercontent.com/media/WamWooWam/WamWooWam.github.io/master/sonic4/dotnet.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
    
      var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];
      var PACKAGE_UUID = metadata['package_uuid'];
    
      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };
    
        var fetchedCallback = null;
        var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

        if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
          if (fetchedCallback) {
            fetchedCallback(data);
            fetchedCallback = null;
          } else {
            fetched = data;
          }
        }, handleError);
      
    function runWithFS() {
  
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  Module['FS_createPath']("/", "Content", true, true);
Module['FS_createPath']("/Content", "DEMO", true, true);
Module['FS_createPath']("/Content/DEMO", "BUY_SCREEN", true, true);
Module['FS_createPath']("/Content/DEMO", "CMN", true, true);
Module['FS_createPath']("/Content/DEMO", "LOADING", true, true);
Module['FS_createPath']("/Content/DEMO", "LOGO", true, true);
Module['FS_createPath']("/Content/DEMO", "MANUAL", true, true);
Module['FS_createPath']("/Content/DEMO", "OPTION", true, true);
Module['FS_createPath']("/Content/DEMO", "STFRL", true, true);
Module['FS_createPath']("/Content/DEMO", "STGSLCT", true, true);
Module['FS_createPath']("/Content/DEMO", "TITLE", true, true);
Module['FS_createPath']("/Content", "G_COM", true, true);
Module['FS_createPath']("/Content/G_COM", "CPIT", true, true);
Module['FS_createPath']("/Content/G_COM", "EFF", true, true);
Module['FS_createPath']("/Content/G_COM", "ENE", true, true);
Module['FS_createPath']("/Content/G_COM", "GMK", true, true);
Module['FS_createPath']("/Content/G_COM", "MENU", true, true);
Module['FS_createPath']("/Content/G_COM", "PLY", true, true);
Module['FS_createPath']("/Content/G_COM", "RING", true, true);
Module['FS_createPath']("/Content", "G_SS", true, true);
Module['FS_createPath']("/Content/G_SS", "EFF", true, true);
Module['FS_createPath']("/Content/G_SS", "GMK", true, true);
Module['FS_createPath']("/Content/G_SS", "MAP", true, true);
Module['FS_createPath']("/Content/G_SS", "MAPFAR", true, true);
Module['FS_createPath']("/Content/G_SS", "MSG", true, true);
Module['FS_createPath']("/Content", "G_ZONE1", true, true);
Module['FS_createPath']("/Content/G_ZONE1", "BOSS", true, true);
Module['FS_createPath']("/Content/G_ZONE1", "DECO", true, true);
Module['FS_createPath']("/Content/G_ZONE1", "EFF", true, true);
Module['FS_createPath']("/Content/G_ZONE1", "ENE", true, true);
Module['FS_createPath']("/Content/G_ZONE1", "GMK", true, true);
Module['FS_createPath']("/Content/G_ZONE1", "MAP", true, true);
Module['FS_createPath']("/Content/G_ZONE1", "MAPFAR", true, true);
Module['FS_createPath']("/Content", "G_ZONE2", true, true);
Module['FS_createPath']("/Content/G_ZONE2", "BOSS", true, true);
Module['FS_createPath']("/Content/G_ZONE2", "DECO", true, true);
Module['FS_createPath']("/Content/G_ZONE2", "EFF", true, true);
Module['FS_createPath']("/Content/G_ZONE2", "ENE", true, true);
Module['FS_createPath']("/Content/G_ZONE2", "GMK", true, true);
Module['FS_createPath']("/Content/G_ZONE2", "MAP", true, true);
Module['FS_createPath']("/Content/G_ZONE2", "MAPFAR", true, true);
Module['FS_createPath']("/Content/G_ZONE2", "MSG", true, true);
Module['FS_createPath']("/Content", "G_ZONE3", true, true);
Module['FS_createPath']("/Content/G_ZONE3", "BOSS", true, true);
Module['FS_createPath']("/Content/G_ZONE3", "DECO", true, true);
Module['FS_createPath']("/Content/G_ZONE3", "EFF", true, true);
Module['FS_createPath']("/Content/G_ZONE3", "ENE", true, true);
Module['FS_createPath']("/Content/G_ZONE3", "GMK", true, true);
Module['FS_createPath']("/Content/G_ZONE3", "MAP", true, true);
Module['FS_createPath']("/Content/G_ZONE3", "MAPFAR", true, true);
Module['FS_createPath']("/Content/G_ZONE3", "MSG", true, true);
Module['FS_createPath']("/Content", "G_ZONE4", true, true);
Module['FS_createPath']("/Content/G_ZONE4", "BOSS", true, true);
Module['FS_createPath']("/Content/G_ZONE4", "DECO", true, true);
Module['FS_createPath']("/Content/G_ZONE4", "EFF", true, true);
Module['FS_createPath']("/Content/G_ZONE4", "ENE", true, true);
Module['FS_createPath']("/Content/G_ZONE4", "GMK", true, true);
Module['FS_createPath']("/Content/G_ZONE4", "MAP", true, true);
Module['FS_createPath']("/Content", "G_ZONEF", true, true);
Module['FS_createPath']("/Content/G_ZONEF", "BOSS", true, true);
Module['FS_createPath']("/Content/G_ZONEF", "DECO", true, true);
Module['FS_createPath']("/Content/G_ZONEF", "EFF", true, true);
Module['FS_createPath']("/Content/G_ZONEF", "GMK", true, true);
Module['FS_createPath']("/Content/G_ZONEF", "MAP", true, true);
Module['FS_createPath']("/Content/G_ZONEF", "MAPFAR", true, true);
Module['FS_createPath']("/Content", "LIVE", true, true);
Module['FS_createPath']("/Content", "SOUND", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_00_Z1A1_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_01_Z1A2_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_02_Z1A3_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_03_Z2A1_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_04_Z2A2b_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_04_Z2A2_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_05_Z2A3_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_06_Z3A1_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_07_Z3A2_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_08_Z3A3_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_09_Z4A1_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_10_Z4A2_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_11_Z4A3_Normal_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_12_Title_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_13_Menu_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_14_SpecialStage_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_15_Boss1_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_16_Boss2_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_17_Final_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_18_Ending_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_19_Clear_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_20_Clear_Final_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_22_Obore_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_23_Invincible_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_24_1up_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_25_New_Record_4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_26_Gameover_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_27_Z1A1_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_28_Z1A2_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_29_Z1A3_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_30_Z2A1_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_31_Z2A2_SpeedUp_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_32_Z2A3_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_33_Z3A1_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_34_Z3A2_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_35_Z3A3_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_36_Z4A1_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_37_Z4A2_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_38_Z4A3_Speedup_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_39_WorldMap_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_40_SuperSonic_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "S4EP1_41_CutScene_Mixed4816", true, true);
Module['FS_createPath']("/Content/SOUND", "SNG_EMERALD", true, true);
Module['FS_createPath']("/Content", "UPSELL", true, true);

          /** @constructor */
          function DataRequest(start, end, audio) {
            this.start = start;
            this.end = end;
            this.audio = audio;
          }
          DataRequest.prototype = {
            requests: {},
            open: function(mode, name) {
              this.name = name;
              this.requests[name] = this;
              Module['addRunDependency']('fp ' + this.name);
            },
            send: function() {},
            onload: function() {
              var byteArray = this.byteArray.subarray(this.start, this.end);
              this.finish(byteArray);
            },
            finish: function(byteArray) {
              var that = this;
      
          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['removeRunDependency']('fp ' + that.name);
  
              this.requests[this.name] = null;
            }
          };
      
              var files = metadata['files'];
              for (var i = 0; i < files.length; ++i) {
                new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio']).open('GET', files[i]['filename']);
              }
      
        
      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        
          // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
    
            var files = metadata['files'];
            for (var i = 0; i < files.length; ++i) {
              DataRequest.prototype.requests[files[i].filename].onload();
            }
                Module['removeRunDependency']('datafile_/mnt/c/Users/Thomas/Desktop/Sonic4Episode1/Sonic4Episode1.Wasm/obj/Debug/net6.0/dist_work/dotnet.data');

      };
      Module['addRunDependency']('datafile_/mnt/c/Users/Thomas/Desktop/Sonic4Episode1/Sonic4Episode1.Wasm/obj/Debug/net6.0/dist_work/dotnet.data');
    
      if (!Module.preloadResults) Module.preloadResults = {};
    
        Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
        if (fetched) {
          processPackageData(fetched);
          fetched = null;
        } else {
          fetchedCallback = processPackageData;
        }
      
    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }
  
   }
   loadPackage({"files": [{"filename": "/Content/Kootenay.xnb", "start": 0, "end": 38062, "audio": 0}, {"filename": "/Content/large.xnb", "start": 38062, "end": 327876, "audio": 0}, {"filename": "/Content/medium.xnb", "start": 327876, "end": 617690, "audio": 0}, {"filename": "/Content/small.xnb", "start": 617690, "end": 776432, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN.AMB", "start": 776432, "end": 779724, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_CN.AMB", "start": 779724, "end": 874688, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_FI.AMB", "start": 874688, "end": 964536, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_FR.AMB", "start": 964536, "end": 1061463, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_GE.AMB", "start": 1061463, "end": 1150680, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_HK.AMB", "start": 1150680, "end": 1240528, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_IT.AMB", "start": 1240528, "end": 1335174, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_JP.AMB", "start": 1335174, "end": 1429527, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_PT.AMB", "start": 1429527, "end": 1519375, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_RU.AMB", "start": 1519375, "end": 1609223, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_SP.AMB", "start": 1609223, "end": 1704832, "audio": 0}, {"filename": "/Content/DEMO/BUY_SCREEN/D_BUY_SCREEN_US.AMB", "start": 1704832, "end": 1794680, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_BG.AMB", "start": 1794680, "end": 1797565, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_BTN.AMB", "start": 1797565, "end": 1804543, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_CN.AMB", "start": 1804543, "end": 1835085, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_FI.AMB", "start": 1835085, "end": 1862610, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_FR.AMB", "start": 1862610, "end": 1897827, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_GE.AMB", "start": 1897827, "end": 1934427, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_HK.AMB", "start": 1934427, "end": 1964809, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_IT.AMB", "start": 1964809, "end": 2000190, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_JP.AMB", "start": 2000190, "end": 2030508, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_PT.AMB", "start": 2030508, "end": 2058033, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_RU.AMB", "start": 2058033, "end": 2085558, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_SP.AMB", "start": 2085558, "end": 2118589, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_MSG_US.AMB", "start": 2118589, "end": 2146114, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_OBI.AMB", "start": 2146114, "end": 2147753, "audio": 0}, {"filename": "/Content/DEMO/CMN/D_CMN_WIN.AMB", "start": 2147753, "end": 2152763, "audio": 0}, {"filename": "/Content/DEMO/LOADING/D_LOADING.AMB", "start": 2152763, "end": 2177140, "audio": 0}, {"filename": "/Content/DEMO/LOGO/D_LOGO_SEGA_JP.AMB", "start": 2177140, "end": 2196736, "audio": 0}, {"filename": "/Content/DEMO/LOGO/D_LOGO_SEGA_US_EU.AMB", "start": 2196736, "end": 2216713, "audio": 0}, {"filename": "/Content/DEMO/LOGO/D_LOGO_SONIC.AMB", "start": 2216713, "end": 2229664, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL.AMB", "start": 2229664, "end": 2534692, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_CN.AMB", "start": 2534692, "end": 2793789, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_FI.AMB", "start": 2793789, "end": 3014131, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_FR.AMB", "start": 3014131, "end": 3244371, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_GE.AMB", "start": 3244371, "end": 3478560, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_HK.AMB", "start": 3478560, "end": 3760921, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_IT.AMB", "start": 3760921, "end": 3997403, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_JP.AMB", "start": 3997403, "end": 4267581, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_PT.AMB", "start": 4267581, "end": 4487923, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_RU.AMB", "start": 4487923, "end": 4708265, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_SP.AMB", "start": 4708265, "end": 4940581, "audio": 0}, {"filename": "/Content/DEMO/MANUAL/D_MANUAL_US.AMB", "start": 4940581, "end": 5160923, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION.AMB", "start": 5160923, "end": 5497720, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_CN.AMB", "start": 5497720, "end": 5630800, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_FI.AMB", "start": 5630800, "end": 5766382, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_FR.AMB", "start": 5766382, "end": 5912974, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_GE.AMB", "start": 5912974, "end": 6055308, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_HK.AMB", "start": 6055308, "end": 6188388, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_IT.AMB", "start": 6188388, "end": 6327218, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_JP.AMB", "start": 6327218, "end": 6470581, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_PT.AMB", "start": 6470581, "end": 6607263, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_RU.AMB", "start": 6607263, "end": 6746218, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_SP.AMB", "start": 6746218, "end": 6884761, "audio": 0}, {"filename": "/Content/DEMO/OPTION/D_OPTION_US.AMB", "start": 6884761, "end": 7017841, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END.AMB", "start": 7017841, "end": 7029472, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_CN.AMB", "start": 7029472, "end": 7047304, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_FI.AMB", "start": 7047304, "end": 7064604, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_FR.AMB", "start": 7064604, "end": 7076537, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_GE.AMB", "start": 7076537, "end": 7090834, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_HK.AMB", "start": 7090834, "end": 7107848, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_IT.AMB", "start": 7107848, "end": 7119079, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_JP.AMB", "start": 7119079, "end": 7132247, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_PT.AMB", "start": 7132247, "end": 7150084, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_RU.AMB", "start": 7150084, "end": 7169066, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_SP.AMB", "start": 7169066, "end": 7183517, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_END_US.AMB", "start": 7183517, "end": 7195618, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_FONT.AMB", "start": 7195618, "end": 7216228, "audio": 0}, {"filename": "/Content/DEMO/STFRL/D_STFRL_IMG000.AMB", "start": 7216228, "end": 8367203, "audio": 0}, {"filename": "/Content/DEMO/STFRL/STAFF_LIST.YSD", "start": 8367203, "end": 8378918, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT.AMB", "start": 8378918, "end": 9173243, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_CN.AMB", "start": 9173243, "end": 9318155, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_FI.AMB", "start": 9318155, "end": 9464482, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_FR.AMB", "start": 9464482, "end": 9617303, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_GE.AMB", "start": 9617303, "end": 9771356, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_HK.AMB", "start": 9771356, "end": 9916268, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_IT.AMB", "start": 9916268, "end": 10073702, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_JP.AMB", "start": 10073702, "end": 10234752, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_PT.AMB", "start": 10234752, "end": 10385128, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_RU.AMB", "start": 10385128, "end": 10535332, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_SP.AMB", "start": 10535332, "end": 10693066, "audio": 0}, {"filename": "/Content/DEMO/STGSLCT/D_STGSLCT_US.AMB", "start": 10693066, "end": 10837982, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE.AMB", "start": 10837982, "end": 10842796, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLEOP.AMB", "start": 10842796, "end": 10897950, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_CN.AMB", "start": 10897950, "end": 10962850, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_FI.AMB", "start": 10962850, "end": 11029337, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_FR.AMB", "start": 11029337, "end": 11094940, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_GE.AMB", "start": 11094940, "end": 11162899, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_HK.AMB", "start": 11162899, "end": 11227351, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_IT.AMB", "start": 11227351, "end": 11290848, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_JP.AMB", "start": 11290848, "end": 11359097, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_PT.AMB", "start": 11359097, "end": 11425105, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_RU.AMB", "start": 11425105, "end": 11495066, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_SP.AMB", "start": 11495066, "end": 11568073, "audio": 0}, {"filename": "/Content/DEMO/TITLE/D_TITLE_US.AMB", "start": 11568073, "end": 11632525, "audio": 0}, {"filename": "/Content/G_COM/CPIT/CPIT_MAIN.AMB", "start": 11632525, "end": 14813850, "audio": 0}, {"filename": "/Content/G_COM/EFF/EFF_BS_CMN.AMB", "start": 14813850, "end": 14834021, "audio": 0}, {"filename": "/Content/G_COM/EFF/EFF_CMN.AMB", "start": 14834021, "end": 15204748, "audio": 0}, {"filename": "/Content/G_COM/EFF/EFF_E002.AMB", "start": 15204748, "end": 15210399, "audio": 0}, {"filename": "/Content/G_COM/EFF/EFF_E004.AMB", "start": 15210399, "end": 15214381, "audio": 0}, {"filename": "/Content/G_COM/EFF/EFF_E005.AMB", "start": 15214381, "end": 15218589, "audio": 0}, {"filename": "/Content/G_COM/EFF/EFF_E006.AMB", "start": 15218589, "end": 15222934, "audio": 0}, {"filename": "/Content/G_COM/EFF/EFF_E007.AMB", "start": 15222934, "end": 15236957, "audio": 0}, {"filename": "/Content/G_COM/EFF/EFF_E010.AMB", "start": 15236957, "end": 15245452, "audio": 0}, {"filename": "/Content/G_COM/EFF/EFF_E013.AMB", "start": 15245452, "end": 15295557, "audio": 0}, {"filename": "/Content/G_COM/EFF/EFF_E014.AMB", "start": 15295557, "end": 15299550, "audio": 0}, {"filename": "/Content/G_COM/ENE/ENE_HARI_MDL.AMB", "start": 15299550, "end": 15317056, "audio": 0}, {"filename": "/Content/G_COM/ENE/ENE_HARI_MTN.AMB", "start": 15317056, "end": 15324590, "audio": 0}, {"filename": "/Content/G_COM/ENE/ENE_HARI_TEX.AMB", "start": 15324590, "end": 15629557, "audio": 0}, {"filename": "/Content/G_COM/ENE/GMK_HARI_R.TXB", "start": 15629557, "end": 15629625, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_ANIMAL_MDL.AMB", "start": 15629625, "end": 15650123, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_ANIMAL_MTN.AMB", "start": 15650123, "end": 15650135, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_ANIMAL_TEX.AMB", "start": 15650135, "end": 15693609, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_CAPSULE_MDL.AMB", "start": 15693609, "end": 15704235, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_CAPSULE_MTN.AMB", "start": 15704235, "end": 15708493, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_CAPSULE_TEX.AMB", "start": 15708493, "end": 15720149, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_DASH_P_MAT.AMB", "start": 15720149, "end": 15720937, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_DASH_P_MDL.AMB", "start": 15720937, "end": 15733661, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_DASH_P_MTN.AMB", "start": 15733661, "end": 15734161, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_DASH_P_TEX.AMB", "start": 15734161, "end": 15736463, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_GOAL_PNL_MDL.AMB", "start": 15736463, "end": 15741317, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_GOAL_PNL_TEX.AMB", "start": 15741317, "end": 15755366, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_ITEM_MDL.AMB", "start": 15755366, "end": 15762172, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_ITEM_TEX.AMB", "start": 15762172, "end": 15776407, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_NEEDLE_MDL.AMB", "start": 15776407, "end": 15779653, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_NEEDLE_TEX.AMB", "start": 15779653, "end": 15784771, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_NEEDLE_TVX.AMB", "start": 15784771, "end": 15785093, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_P_MARKER_MAT.AMB", "start": 15785093, "end": 15786352, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_P_MARKER_MDL.AMB", "start": 15786352, "end": 15789814, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_P_MARKER_MTN.AMB", "start": 15789814, "end": 15790523, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_P_MARKER_TEX.AMB", "start": 15790523, "end": 15795106, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_SPRING_MDL.AMB", "start": 15795106, "end": 15802050, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_SPRING_MTN.AMB", "start": 15802050, "end": 15807472, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_SPRING_TEX.AMB", "start": 15807472, "end": 15810885, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_SS_RING_MAT.AMB", "start": 15810885, "end": 15813418, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_SS_RING_MDL.AMB", "start": 15813418, "end": 15814511, "audio": 0}, {"filename": "/Content/G_COM/GMK/GMK_SS_RING_TEX.AMB", "start": 15814511, "end": 15928117, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE.AMA", "start": 15928117, "end": 15932562, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE.AMB", "start": 15932562, "end": 15933462, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_CN.AMB", "start": 15933462, "end": 15988442, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_FI.AMB", "start": 15988442, "end": 16041671, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_FR.AMB", "start": 16041671, "end": 16101323, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_GE.AMB", "start": 16101323, "end": 16159281, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_HK.AMB", "start": 16159281, "end": 16214482, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_IT.AMB", "start": 16214482, "end": 16271083, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_JP.AMB", "start": 16271083, "end": 16333491, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_L.AMA", "start": 16333491, "end": 16336131, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_PT.AMB", "start": 16336131, "end": 16390892, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_RU.AMB", "start": 16390892, "end": 16444121, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_SP.AMB", "start": 16444121, "end": 16501267, "audio": 0}, {"filename": "/Content/G_COM/MENU/G_PAUSE_US.AMB", "start": 16501267, "end": 16554496, "audio": 0}, {"filename": "/Content/G_COM/PLY/SON_MDL.AMB", "start": 16554496, "end": 16652272, "audio": 0}, {"filename": "/Content/G_COM/PLY/SON_MTN.AMB", "start": 16652272, "end": 17441830, "audio": 0}, {"filename": "/Content/G_COM/PLY/SON_TEX.AMB", "start": 17441830, "end": 17538851, "audio": 0}, {"filename": "/Content/G_COM/PLY/SSON_MDL.AMB", "start": 17538851, "end": 17649559, "audio": 0}, {"filename": "/Content/G_COM/PLY/SSON_TEX.AMB", "start": 17649559, "end": 17711186, "audio": 0}, {"filename": "/Content/G_COM/RING/RING_MAT.AMB", "start": 17711186, "end": 17713264, "audio": 0}, {"filename": "/Content/G_COM/RING/RING_MDL.AMB", "start": 17713264, "end": 17714350, "audio": 0}, {"filename": "/Content/G_COM/RING/RING_TEX.AMB", "start": 17714350, "end": 17727150, "audio": 0}, {"filename": "/Content/G_SS/EFF/EFF_ZONESS.AMB", "start": 17727150, "end": 17781471, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_1UP_MDL.AMB", "start": 17781471, "end": 17782527, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_1UP_TEX.AMB", "start": 17782527, "end": 17784943, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_ARROW_MAT.AMB", "start": 17784943, "end": 17785265, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_ARROW_MDL.AMB", "start": 17785265, "end": 17786259, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_ARROW_TEX.AMB", "start": 17786259, "end": 17786900, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_CIRCLE_MDL.AMB", "start": 17786900, "end": 17787959, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_CIRCLE_TEX.AMB", "start": 17787959, "end": 17791583, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_CIRCLE_TVX.AMB", "start": 17791583, "end": 17791766, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_EMERALD_MDL.AMB", "start": 17791766, "end": 17891851, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_EMERALD_MTN.AMB", "start": 17891851, "end": 17893712, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_EMERALD_TEX.AMB", "start": 17893712, "end": 17904131, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_ENDURANCE_MAT.AMB", "start": 17904131, "end": 17904143, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_ENDURANCE_MDL.AMB", "start": 17904143, "end": 17905203, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_ENDURANCE_TEX.AMB", "start": 17905203, "end": 18197743, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_ENDURANCE_TVX.AMB", "start": 18197743, "end": 18197926, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_GOAL_MDL.AMB", "start": 18197926, "end": 18198983, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_GOAL_TEX.AMB", "start": 18198983, "end": 18202769, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_GOAL_TVX.AMB", "start": 18202769, "end": 18202952, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_OBLONG_MAT.AMB", "start": 18202952, "end": 18202964, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_OBLONG_MDL.AMB", "start": 18202964, "end": 18204023, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_OBLONG_TEX.AMB", "start": 18204023, "end": 18630452, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_OBLONG_TVX.AMB", "start": 18630452, "end": 18630635, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_RINGGATE_MAT.AMB", "start": 18630635, "end": 18630940, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_RINGGATE_MDL.AMB", "start": 18630940, "end": 18646334, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_RINGGATE_TEX.AMB", "start": 18646334, "end": 18658800, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_RINGGATE_TVX.AMB", "start": 18658800, "end": 18659911, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_SQUARE_MAT.AMB", "start": 18659911, "end": 18659923, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_SQUARE_MDL.AMB", "start": 18659923, "end": 18660982, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_SQUARE_TEX.AMB", "start": 18660982, "end": 18988978, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_SQUARE_TVX.AMB", "start": 18988978, "end": 18989161, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_TIME_MDL.AMB", "start": 18989161, "end": 18992319, "audio": 0}, {"filename": "/Content/G_SS/GMK/GMK_SS_TIME_TEX.AMB", "start": 18992319, "end": 19004656, "audio": 0}, {"filename": "/Content/G_SS/MAP/SS1_MAP.AMB", "start": 19004656, "end": 19033814, "audio": 0}, {"filename": "/Content/G_SS/MAP/SS2_MAP.AMB", "start": 19033814, "end": 19063896, "audio": 0}, {"filename": "/Content/G_SS/MAP/SS3_MAP.AMB", "start": 19063896, "end": 19093444, "audio": 0}, {"filename": "/Content/G_SS/MAP/SS4_MAP.AMB", "start": 19093444, "end": 19123466, "audio": 0}, {"filename": "/Content/G_SS/MAP/SS5_MAP.AMB", "start": 19123466, "end": 19160872, "audio": 0}, {"filename": "/Content/G_SS/MAP/SS6_MAP.AMB", "start": 19160872, "end": 19197554, "audio": 0}, {"filename": "/Content/G_SS/MAP/SS7_MAP.AMB", "start": 19197554, "end": 19228422, "audio": 0}, {"filename": "/Content/G_SS/MAP/SS_ATTR.AMB", "start": 19228422, "end": 19229783, "audio": 0}, {"filename": "/Content/G_SS/MAP/SS_M.AMB", "start": 19229783, "end": 19229795, "audio": 0}, {"filename": "/Content/G_SS/MAP/SS_T.AMB", "start": 19229795, "end": 19229856, "audio": 0}, {"filename": "/Content/G_SS/MAPFAR/SS01_MAPFAR.AMB", "start": 19229856, "end": 19492088, "audio": 0}, {"filename": "/Content/G_SS/MAPFAR/SS02_MAPFAR.AMB", "start": 19492088, "end": 19751972, "audio": 0}, {"filename": "/Content/G_SS/MAPFAR/SS03_MAPFAR.AMB", "start": 19751972, "end": 20035413, "audio": 0}, {"filename": "/Content/G_SS/MAPFAR/SS04_MAPFAR.AMB", "start": 20035413, "end": 20318791, "audio": 0}, {"filename": "/Content/G_SS/MAPFAR/SS05_MAPFAR.AMB", "start": 20318791, "end": 20586055, "audio": 0}, {"filename": "/Content/G_SS/MAPFAR/SS06_MAPFAR.AMB", "start": 20586055, "end": 20861585, "audio": 0}, {"filename": "/Content/G_SS/MAPFAR/SS07_MAPFAR.AMB", "start": 20861585, "end": 21123402, "audio": 0}, {"filename": "/Content/G_SS/MSG/G_MSG_SS.AMB", "start": 21123402, "end": 21581814, "audio": 0}, {"filename": "/Content/G_ZONE1/BOSS/BOSS01.AMB", "start": 21581814, "end": 22086681, "audio": 0}, {"filename": "/Content/G_ZONE1/DECO/DECO_ZONE1.AMB", "start": 22086681, "end": 22318204, "audio": 0}, {"filename": "/Content/G_ZONE1/EFF/EFF_ZONE1.AMB", "start": 22318204, "end": 22346520, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_GABU_MDL.AMB", "start": 22346520, "end": 22366426, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_GABU_MTN.AMB", "start": 22366426, "end": 22376628, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_GABU_TEX.AMB", "start": 22376628, "end": 22519743, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_MEREON_MDL.AMB", "start": 22519743, "end": 22553795, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_MEREON_MTN.AMB", "start": 22553795, "end": 22589076, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_MEREON_R_MDL.AMB", "start": 22589076, "end": 22599514, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_MEREON_TEX.AMB", "start": 22599514, "end": 22755200, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_MOTORA_MDL.AMB", "start": 22755200, "end": 22777444, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_MOTORA_MTN.AMB", "start": 22777444, "end": 22787443, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_MOTORA_TEX.AMB", "start": 22787443, "end": 22929768, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_STING_MDL.AMB", "start": 22929768, "end": 22947259, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_STING_MTN.AMB", "start": 22947259, "end": 22957989, "audio": 0}, {"filename": "/Content/G_ZONE1/ENE/ENE_STING_TEX.AMB", "start": 22957989, "end": 23072313, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/END_SONIC_MDL.AMB", "start": 23072313, "end": 23075710, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/END_SONIC_TEX.AMB", "start": 23075710, "end": 23410488, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_BRIDGE_MDL.AMB", "start": 23410488, "end": 23413845, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_BRIDGE_TEX.AMB", "start": 23413845, "end": 23417922, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_B_LAND1_MDL.AMB", "start": 23417922, "end": 23666702, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_B_LAND1_MTN.AMB", "start": 23666702, "end": 23734860, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_B_LAND1_TEX.AMB", "start": 23734860, "end": 23825818, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_B_OBJ_1_MDL.AMB", "start": 23825818, "end": 23829015, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_B_OBJ_1_TEX.AMB", "start": 23829015, "end": 23831668, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_B_WALL1_MDL.AMB", "start": 23831668, "end": 23846504, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_B_WALL1_TEX.AMB", "start": 23846504, "end": 23862057, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_LAND_1_MDL.AMB", "start": 23862057, "end": 23864247, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_LAND_1_TEX.AMB", "start": 23864247, "end": 23875696, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_PULLEY_MDL.AMB", "start": 23875696, "end": 23888769, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_PULLEY_MTN.AMB", "start": 23888769, "end": 23891390, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_PULLEY_TEX.AMB", "start": 23891390, "end": 23899520, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_T_ROPE_MDL.AMB", "start": 23899520, "end": 23915091, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_T_ROPE_MTN.AMB", "start": 23915091, "end": 23917184, "audio": 0}, {"filename": "/Content/G_ZONE1/GMK/GMK_T_ROPE_TEX.AMB", "start": 23917184, "end": 23926622, "audio": 0}, {"filename": "/Content/G_ZONE1/MAP/ZONE11_MAP.AMB", "start": 23926622, "end": 24111337, "audio": 0}, {"filename": "/Content/G_ZONE1/MAP/ZONE12_MAP.AMB", "start": 24111337, "end": 24316107, "audio": 0}, {"filename": "/Content/G_ZONE1/MAP/ZONE13_MAP.AMB", "start": 24316107, "end": 24672842, "audio": 0}, {"filename": "/Content/G_ZONE1/MAP/ZONE1BOSS_MAP.AMB", "start": 24672842, "end": 24679066, "audio": 0}, {"filename": "/Content/G_ZONE1/MAP/ZONE1E_MAP.AMB", "start": 24679066, "end": 24687742, "audio": 0}, {"filename": "/Content/G_ZONE1/MAP/ZONE1_ATTR.AMB", "start": 24687742, "end": 25064152, "audio": 0}, {"filename": "/Content/G_ZONE1/MAP/ZONE1_M.AMB", "start": 25064152, "end": 25131444, "audio": 0}, {"filename": "/Content/G_ZONE1/MAP/ZONE1_T.AMB", "start": 25131444, "end": 28700898, "audio": 0}, {"filename": "/Content/G_ZONE1/MAPFAR/ZONE13_MAPFAR.AMB", "start": 28700898, "end": 29813480, "audio": 0}, {"filename": "/Content/G_ZONE1/MAPFAR/ZONE1_MAPFAR.AMB", "start": 29813480, "end": 30115729, "audio": 0}, {"filename": "/Content/G_ZONE2/BOSS/BOSS02.AMB", "start": 30115729, "end": 30616238, "audio": 0}, {"filename": "/Content/G_ZONE2/DECO/DECO_ZONE2.AMB", "start": 30616238, "end": 30651474, "audio": 0}, {"filename": "/Content/G_ZONE2/EFF/EFF_ZONE2.AMB", "start": 30651474, "end": 30661408, "audio": 0}, {"filename": "/Content/G_ZONE2/ENE/ENE_GARDON_MDL.AMB", "start": 30661408, "end": 30683956, "audio": 0}, {"filename": "/Content/G_ZONE2/ENE/ENE_GARDON_MTN.AMB", "start": 30683956, "end": 30737888, "audio": 0}, {"filename": "/Content/G_ZONE2/ENE/ENE_GARDON_TEX.AMB", "start": 30737888, "end": 30890664, "audio": 0}, {"filename": "/Content/G_ZONE2/ENE/ENE_HARO_MDL.AMB", "start": 30890664, "end": 30921914, "audio": 0}, {"filename": "/Content/G_ZONE2/ENE/ENE_HARO_MTN.AMB", "start": 30921914, "end": 30926634, "audio": 0}, {"filename": "/Content/G_ZONE2/ENE/ENE_HARO_TEX.AMB", "start": 30926634, "end": 30950776, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_BOBBIN_MAT.AMB", "start": 30950776, "end": 30951232, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_BOBBIN_MDL.AMB", "start": 30951232, "end": 30953604, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_BOBBIN_MTN.AMB", "start": 30953604, "end": 30954484, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_BOBBIN_TEX.AMB", "start": 30954484, "end": 30958891, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_BUMPER_MAT.AMB", "start": 30958891, "end": 30965429, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_BUMPER_MDL.AMB", "start": 30965429, "end": 30988777, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_BUMPER_MTN.AMB", "start": 30988777, "end": 30989615, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_BUMPER_TEX.AMB", "start": 30989615, "end": 31036727, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_B_OBJ_2_MDL.AMB", "start": 31036727, "end": 31039780, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_B_OBJ_2_TEX.AMB", "start": 31039780, "end": 31043693, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_B_WALL2_MDL.AMB", "start": 31043693, "end": 31048803, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_B_WALL2_TEX.AMB", "start": 31048803, "end": 31061173, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_CANNON_MDL.AMB", "start": 31061173, "end": 31076486, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_CANNON_TEX.AMB", "start": 31076486, "end": 31080628, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_FLIPPER_MAT.AMB", "start": 31080628, "end": 31083877, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_FLIPPER_MDL.AMB", "start": 31083877, "end": 31091366, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_FLIPPER_MTN.AMB", "start": 31091366, "end": 31092072, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_FLIPPER_TEX.AMB", "start": 31092072, "end": 31151680, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_LAND_2_MAT.AMB", "start": 31151680, "end": 31161880, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_LAND_2_MDL.AMB", "start": 31161880, "end": 31172384, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_LAND_2_MTN.AMB", "start": 31172384, "end": 31174472, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_LAND_2_TEX.AMB", "start": 31174472, "end": 31194507, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_SHUTTER_MDL.AMB", "start": 31194507, "end": 31195593, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_SHUTTER_TEX.AMB", "start": 31195593, "end": 31205864, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_SLOT_MAT.AMB", "start": 31205864, "end": 31206570, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_SLOT_MDL.AMB", "start": 31206570, "end": 31213475, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_SLOT_TEX.AMB", "start": 31213475, "end": 31521899, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_SP_CTPLT_MAT.AMB", "start": 31521899, "end": 31522903, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_SP_CTPLT_MDL.AMB", "start": 31522903, "end": 31526317, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_SP_CTPLT_MTN.AMB", "start": 31526317, "end": 31530257, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_SP_CTPLT_TEX.AMB", "start": 31530257, "end": 31534328, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_STOPPER_MAT.AMB", "start": 31534328, "end": 31535933, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_STOPPER_MDL.AMB", "start": 31535933, "end": 31560604, "audio": 0}, {"filename": "/Content/G_ZONE2/GMK/GMK_STOPPER_TEX.AMB", "start": 31560604, "end": 31568949, "audio": 0}, {"filename": "/Content/G_ZONE2/MAP/ZONE21_MAP.AMB", "start": 31568949, "end": 31769512, "audio": 0}, {"filename": "/Content/G_ZONE2/MAP/ZONE22_MAP.AMB", "start": 31769512, "end": 31813038, "audio": 0}, {"filename": "/Content/G_ZONE2/MAP/ZONE23_MAP.AMB", "start": 31813038, "end": 32260614, "audio": 0}, {"filename": "/Content/G_ZONE2/MAP/ZONE2BOSS_MAP.AMB", "start": 32260614, "end": 32265876, "audio": 0}, {"filename": "/Content/G_ZONE2/MAP/ZONE2_ATTR.AMB", "start": 32265876, "end": 32575086, "audio": 0}, {"filename": "/Content/G_ZONE2/MAP/ZONE2_M.AMB", "start": 32575086, "end": 32793099, "audio": 0}, {"filename": "/Content/G_ZONE2/MAP/ZONE2_T.AMB", "start": 32793099, "end": 37914493, "audio": 0}, {"filename": "/Content/G_ZONE2/MAPFAR/ZONE2_MAPFAR.AMB", "start": 37914493, "end": 38264932, "audio": 0}, {"filename": "/Content/G_ZONE2/MSG/G_MSG_Z2.AMB", "start": 38264932, "end": 38439620, "audio": 0}, {"filename": "/Content/G_ZONE3/BOSS/BOSS03.AMB", "start": 38439620, "end": 38735946, "audio": 0}, {"filename": "/Content/G_ZONE3/DECO/DECO_ZONE3.AMB", "start": 38735946, "end": 39088814, "audio": 0}, {"filename": "/Content/G_ZONE3/EFF/EFF_ZONE3.AMB", "start": 39088814, "end": 39193853, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_BUKU_MDL.AMB", "start": 39193853, "end": 39210175, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_BUKU_MTN.AMB", "start": 39210175, "end": 39213531, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_BUKU_TEX.AMB", "start": 39213531, "end": 39326546, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_MOGU_MDL.AMB", "start": 39326546, "end": 39351060, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_MOGU_MTN.AMB", "start": 39351060, "end": 39383284, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_MOGU_TEX.AMB", "start": 39383284, "end": 39492913, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_UNIDES_MDL.AMB", "start": 39492913, "end": 39498911, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_UNIDES_MTN.AMB", "start": 39498911, "end": 39498923, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_UNIDES_TEX.AMB", "start": 39498923, "end": 39527112, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_UNIUNI_MDL.AMB", "start": 39527112, "end": 39533222, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_UNIUNI_MTN.AMB", "start": 39533222, "end": 39533234, "audio": 0}, {"filename": "/Content/G_ZONE3/ENE/ENE_UNIUNI_TEX.AMB", "start": 39533234, "end": 39539937, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_B3_PILLAR_MDL.AMB", "start": 39539937, "end": 39548497, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_B3_PILLAR_TEX.AMB", "start": 39548497, "end": 39603572, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_B3_PILLAR_TVX.AMB", "start": 39603572, "end": 39604952, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_B_OBJ_3_MDL.AMB", "start": 39604952, "end": 39610801, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_B_OBJ_3_TEX.AMB", "start": 39610801, "end": 39622508, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_B_WALL3_MDL.AMB", "start": 39622508, "end": 39628377, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_B_WALL3_TEX.AMB", "start": 39628377, "end": 39641712, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_DSIGN_MDL.AMB", "start": 39641712, "end": 39643172, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_DSIGN_TEX.AMB", "start": 39643172, "end": 39670867, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_D_TANK_MAT.AMB", "start": 39670867, "end": 39671274, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_D_TANK_MDL.AMB", "start": 39671274, "end": 39676117, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_D_TANK_TEX.AMB", "start": 39676117, "end": 39687927, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_LAND_3_MAT.AMB", "start": 39687927, "end": 39688188, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_LAND_3_MDL.AMB", "start": 39688188, "end": 39692316, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_LAND_3_TEX.AMB", "start": 39692316, "end": 39717970, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_LAND_3_TVX.AMB", "start": 39717970, "end": 39718826, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_PRESSWALL_MDL.AMB", "start": 39718826, "end": 39725019, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_PRESSWALL_TEX.AMB", "start": 39725019, "end": 39870558, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_ROCK_MDL.AMB", "start": 39870558, "end": 39881323, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_ROCK_MTN.AMB", "start": 39881323, "end": 39882674, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_ROCK_TEX.AMB", "start": 39882674, "end": 39996439, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_SPEAR_MDL.AMB", "start": 39996439, "end": 40001825, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_SPEAR_TEX.AMB", "start": 40001825, "end": 40010074, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_SWITCH3_MAT.AMB", "start": 40010074, "end": 40011522, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_SWITCH3_MDL.AMB", "start": 40011522, "end": 40015330, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_SWITCH3_TEX.AMB", "start": 40015330, "end": 40021030, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_SW_WALL3_MAT.AMB", "start": 40021030, "end": 40022093, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_SW_WALL3_MDL.AMB", "start": 40022093, "end": 40023172, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_SW_WALL3_TEX.AMB", "start": 40023172, "end": 40031393, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_SW_WALL3_TVX.AMB", "start": 40031393, "end": 40031576, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_TRUCK_MDL.AMB", "start": 40031576, "end": 40057623, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_TRUCK_MTN.AMB", "start": 40057623, "end": 40060270, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_TRUCK_TEX.AMB", "start": 40060270, "end": 40095237, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_WATER_SF_MDL.AMB", "start": 40095237, "end": 40140325, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_WATER_SLIDER_MAT.AMB", "start": 40140325, "end": 40144703, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_WATER_SLIDER_MDL.AMB", "start": 40144703, "end": 40167177, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_WATER_SLIDER_MTN.AMB", "start": 40167177, "end": 40172308, "audio": 0}, {"filename": "/Content/G_ZONE3/GMK/GMK_WATER_SLIDER_TEX.AMB", "start": 40172308, "end": 40177794, "audio": 0}, {"filename": "/Content/G_ZONE3/MAP/ZONE31_MAP.AMB", "start": 40177794, "end": 40489354, "audio": 0}, {"filename": "/Content/G_ZONE3/MAP/ZONE32_MAP.AMB", "start": 40489354, "end": 41742605, "audio": 0}, {"filename": "/Content/G_ZONE3/MAP/ZONE33_MAP.AMB", "start": 41742605, "end": 42220940, "audio": 0}, {"filename": "/Content/G_ZONE3/MAP/ZONE3BOSS_MAP.AMB", "start": 42220940, "end": 42306450, "audio": 0}, {"filename": "/Content/G_ZONE3/MAP/ZONE3_ATTR.AMB", "start": 42306450, "end": 42488940, "audio": 0}, {"filename": "/Content/G_ZONE3/MAP/ZONE3_M.AMB", "start": 42488940, "end": 42532783, "audio": 0}, {"filename": "/Content/G_ZONE3/MAP/ZONE3_T.AMB", "start": 42532783, "end": 45191907, "audio": 0}, {"filename": "/Content/G_ZONE3/MAPFAR/ZONE3_MAPFAR.AMB", "start": 45191907, "end": 45937404, "audio": 0}, {"filename": "/Content/G_ZONE3/MSG/G_MSG_Z3.AMB", "start": 45937404, "end": 46400723, "audio": 0}, {"filename": "/Content/G_ZONE4/BOSS/BOSS04.AMB", "start": 46400723, "end": 46910755, "audio": 0}, {"filename": "/Content/G_ZONE4/DECO/DECO_ZONE4.AMB", "start": 46910755, "end": 47289224, "audio": 0}, {"filename": "/Content/G_ZONE4/EFF/EFF_ZONE4.AMB", "start": 47289224, "end": 47302260, "audio": 0}, {"filename": "/Content/G_ZONE4/ENE/ENE_KAMA_MDL.AMB", "start": 47302260, "end": 47330634, "audio": 0}, {"filename": "/Content/G_ZONE4/ENE/ENE_KAMA_MTN.AMB", "start": 47330634, "end": 47378674, "audio": 0}, {"filename": "/Content/G_ZONE4/ENE/ENE_KAMA_TEX.AMB", "start": 47378674, "end": 47503619, "audio": 0}, {"filename": "/Content/G_ZONE4/ENE/ENE_KANI_MDL.AMB", "start": 47503619, "end": 47532517, "audio": 0}, {"filename": "/Content/G_ZONE4/ENE/ENE_KANI_MTN.AMB", "start": 47532517, "end": 47561782, "audio": 0}, {"filename": "/Content/G_ZONE4/ENE/ENE_KANI_TEX.AMB", "start": 47561782, "end": 47702820, "audio": 0}, {"filename": "/Content/G_ZONE4/ENE/ENE_T_STAR_MAT.AMB", "start": 47702820, "end": 47703436, "audio": 0}, {"filename": "/Content/G_ZONE4/ENE/ENE_T_STAR_MDL.AMB", "start": 47703436, "end": 47710860, "audio": 0}, {"filename": "/Content/G_ZONE4/ENE/ENE_T_STAR_MTN.AMB", "start": 47710860, "end": 47710872, "audio": 0}, {"filename": "/Content/G_ZONE4/ENE/ENE_T_STAR_TEX.AMB", "start": 47710872, "end": 47732087, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_BELT_CONV_MDL.AMB", "start": 47732087, "end": 47738126, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_BELT_CONV_TEX.AMB", "start": 47738126, "end": 47750538, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_BELT_CONV_TVX.AMB", "start": 47750538, "end": 47752914, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_B_WALL4_MDL.AMB", "start": 47752914, "end": 47771272, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_B_WALL4_TEX.AMB", "start": 47771272, "end": 47837362, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_GEAR.AMB", "start": 47837362, "end": 47946514, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_GEAR2_MDL.AMB", "start": 47946514, "end": 47947781, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_GEAR2_OPT_MDL.AMB", "start": 47947781, "end": 47950347, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_GEAR_MDL.AMB", "start": 47950347, "end": 47951613, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_GEAR_TEX.AMB", "start": 47951613, "end": 47989551, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_LAND_4_MDL.AMB", "start": 47989551, "end": 47991685, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_LAND_4_TEX.AMB", "start": 47991685, "end": 48005793, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_PISTON_MDL.AMB", "start": 48005793, "end": 48008214, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_PISTON_TEX.AMB", "start": 48008214, "end": 48027407, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_PRESSWALL4_MAT.AMB", "start": 48027407, "end": 48028683, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_PRESSWALL4_MDL.AMB", "start": 48028683, "end": 48033337, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_PRESSWALL4_MTN.AMB", "start": 48033337, "end": 48033349, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_PRESSWALL4_TEX.AMB", "start": 48033349, "end": 48149518, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_P_PILLAR_MAT.AMB", "start": 48149518, "end": 48151098, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_P_PILLAR_MDL.AMB", "start": 48151098, "end": 48176965, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_P_PILLAR_TEX.AMB", "start": 48176965, "end": 48239117, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_P_STEAM_MDL.AMB", "start": 48239117, "end": 48271511, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_P_STEAM_TEX.AMB", "start": 48271511, "end": 48352010, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_SEESAW_MDL.AMB", "start": 48352010, "end": 48354218, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_SEESAW_TEX.AMB", "start": 48354218, "end": 48358470, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_STEAMPIPE_MDL.AMB", "start": 48358470, "end": 48377115, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_STEAMPIPE_TEX.AMB", "start": 48377115, "end": 48452122, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_SWITCH4_MDL.AMB", "start": 48452122, "end": 48454334, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_SWITCH4_TEX.AMB", "start": 48454334, "end": 48458171, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_SW_WALL4_MDL.AMB", "start": 48458171, "end": 48462403, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_SW_WALL4_TEX.AMB", "start": 48462403, "end": 48482362, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_UP_BMPR_MDL.AMB", "start": 48482362, "end": 48483583, "audio": 0}, {"filename": "/Content/G_ZONE4/GMK/GMK_UP_BMPR_TEX.AMB", "start": 48483583, "end": 48488220, "audio": 0}, {"filename": "/Content/G_ZONE4/MAP/ZONE41_MAP.AMB", "start": 48488220, "end": 48943829, "audio": 0}, {"filename": "/Content/G_ZONE4/MAP/ZONE42_MAP.AMB", "start": 48943829, "end": 49294478, "audio": 0}, {"filename": "/Content/G_ZONE4/MAP/ZONE43_MAP.AMB", "start": 49294478, "end": 49788677, "audio": 0}, {"filename": "/Content/G_ZONE4/MAP/ZONE4BOSS_MAP.AMB", "start": 49788677, "end": 49797526, "audio": 0}, {"filename": "/Content/G_ZONE4/MAP/ZONE4_ATTR.AMB", "start": 49797526, "end": 50113136, "audio": 0}, {"filename": "/Content/G_ZONE4/MAP/ZONE4_M.AMB", "start": 50113136, "end": 50166185, "audio": 0}, {"filename": "/Content/G_ZONE4/MAP/ZONE4_T.AMB", "start": 50166185, "end": 54970944, "audio": 0}, {"filename": "/Content/G_ZONEF/BOSS/BOSS05.AMB", "start": 54970944, "end": 56149940, "audio": 0}, {"filename": "/Content/G_ZONEF/DECO/DECO_ZONEF.AMB", "start": 56149940, "end": 56281584, "audio": 0}, {"filename": "/Content/G_ZONEF/EFF/EFF_ZONE5.AMB", "start": 56281584, "end": 56283766, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_B3_PILLAR_F_MAT.AMB", "start": 56283766, "end": 56283778, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_B3_PILLAR_F_MDL.AMB", "start": 56283778, "end": 56299466, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_B3_PILLAR_F_TEX.AMB", "start": 56299466, "end": 56349580, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_B3_PILLAR_F_TVX.AMB", "start": 56349580, "end": 56358302, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_LAND_F_MAT.AMB", "start": 56358302, "end": 56359538, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_LAND_F_MDL.AMB", "start": 56359538, "end": 56361574, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_LAND_F_TEX.AMB", "start": 56361574, "end": 56397822, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_SHUTTER_F_MAT.AMB", "start": 56397822, "end": 56398482, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_SHUTTER_F_MDL.AMB", "start": 56398482, "end": 56402042, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_SHUTTER_F_TEX.AMB", "start": 56402042, "end": 56407594, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_STEAMPIPE_F_MDL.AMB", "start": 56407594, "end": 56421639, "audio": 0}, {"filename": "/Content/G_ZONEF/GMK/GMK_STEAMPIPE_F_TEX.AMB", "start": 56421639, "end": 56459148, "audio": 0}, {"filename": "/Content/G_ZONEF/MAP/ZONEFB_MAP.AMB", "start": 56459148, "end": 56802804, "audio": 0}, {"filename": "/Content/G_ZONEF/MAP/ZONEF_ATTR.AMB", "start": 56802804, "end": 56838734, "audio": 0}, {"filename": "/Content/G_ZONEF/MAP/ZONEF_M.AMB", "start": 56838734, "end": 56850564, "audio": 0}, {"filename": "/Content/G_ZONEF/MAP/ZONEF_T.AMB", "start": 56850564, "end": 58580122, "audio": 0}, {"filename": "/Content/G_ZONEF/MAPFAR/ZONEF_MAPFAR.AMB", "start": 58580122, "end": 58831377, "audio": 0}, {"filename": "/Content/LIVE/ach_top_cn.xnb", "start": 58831377, "end": 58864230, "audio": 0}, {"filename": "/Content/LIVE/ach_top_es.xnb", "start": 58864230, "end": 58897083, "audio": 0}, {"filename": "/Content/LIVE/ach_top_fi.xnb", "start": 58897083, "end": 58929936, "audio": 0}, {"filename": "/Content/LIVE/ach_top_fr.xnb", "start": 58929936, "end": 58962789, "audio": 0}, {"filename": "/Content/LIVE/ach_top_ge.xnb", "start": 58962789, "end": 58995642, "audio": 0}, {"filename": "/Content/LIVE/ach_top_hk.xnb", "start": 58995642, "end": 59028495, "audio": 0}, {"filename": "/Content/LIVE/ach_top_it.xnb", "start": 59028495, "end": 59061348, "audio": 0}, {"filename": "/Content/LIVE/ach_top_ja.xnb", "start": 59061348, "end": 59094201, "audio": 0}, {"filename": "/Content/LIVE/ach_top_pt.xnb", "start": 59094201, "end": 59127054, "audio": 0}, {"filename": "/Content/LIVE/ach_top_ru.xnb", "start": 59127054, "end": 59159907, "audio": 0}, {"filename": "/Content/LIVE/ach_top_us.xnb", "start": 59159907, "end": 59192760, "audio": 0}, {"filename": "/Content/LIVE/arrow.xnb", "start": 59192760, "end": 59209229, "audio": 0}, {"filename": "/Content/LIVE/arrow2.xnb", "start": 59209229, "end": 59215714, "audio": 0}, {"filename": "/Content/LIVE/live_a1.xnb", "start": 59215714, "end": 59232183, "audio": 0}, {"filename": "/Content/LIVE/live_a10.xnb", "start": 59232183, "end": 59248652, "audio": 0}, {"filename": "/Content/LIVE/live_a11.xnb", "start": 59248652, "end": 59265121, "audio": 0}, {"filename": "/Content/LIVE/live_a12.xnb", "start": 59265121, "end": 59281590, "audio": 0}, {"filename": "/Content/LIVE/live_a13.xnb", "start": 59281590, "end": 59298059, "audio": 0}, {"filename": "/Content/LIVE/live_a14.xnb", "start": 59298059, "end": 59314528, "audio": 0}, {"filename": "/Content/LIVE/live_a15.xnb", "start": 59314528, "end": 59330997, "audio": 0}, {"filename": "/Content/LIVE/live_a16.xnb", "start": 59330997, "end": 59347466, "audio": 0}, {"filename": "/Content/LIVE/live_a2.xnb", "start": 59347466, "end": 59363935, "audio": 0}, {"filename": "/Content/LIVE/live_a3.xnb", "start": 59363935, "end": 59380404, "audio": 0}, {"filename": "/Content/LIVE/live_a4.xnb", "start": 59380404, "end": 59396873, "audio": 0}, {"filename": "/Content/LIVE/live_a5.xnb", "start": 59396873, "end": 59413342, "audio": 0}, {"filename": "/Content/LIVE/live_a6.xnb", "start": 59413342, "end": 59429811, "audio": 0}, {"filename": "/Content/LIVE/live_a7.xnb", "start": 59429811, "end": 59446280, "audio": 0}, {"filename": "/Content/LIVE/live_a8.xnb", "start": 59446280, "end": 59462749, "audio": 0}, {"filename": "/Content/LIVE/live_a9.xnb", "start": 59462749, "end": 59479218, "audio": 0}, {"filename": "/Content/LIVE/nums.xnb", "start": 59479218, "end": 59512071, "audio": 0}, {"filename": "/Content/LIVE/tab.xnb", "start": 59512071, "end": 59663356, "audio": 0}, {"filename": "/Content/SOUND/S3FX079b_Add_SXcasino38_44.xnb", "start": 59663356, "end": 59721967, "audio": 0}, {"filename": "/Content/SOUND/S4FX016a_S2_645F_44.xnb", "start": 59721967, "end": 59843640, "audio": 0}, {"filename": "/Content/SOUND/S4FX017a_S2_3441_44.xnb", "start": 59843640, "end": 59863773, "audio": 0}, {"filename": "/Content/SOUND/S4FX026a_SK4D_44.xnb", "start": 59863773, "end": 59870616, "audio": 0}, {"filename": "/Content/SOUND/S4FX031a_S2_132C_44.xnb", "start": 59870616, "end": 59900603, "audio": 0}, {"filename": "/Content/SOUND/S4FX033a_SB_expl2_22.xnb", "start": 59900603, "end": 60021796, "audio": 0}, {"filename": "/Content/SOUND/S4FX039a_SKA6_44.xnb", "start": 60021796, "end": 60034875, "audio": 0}, {"filename": "/Content/SOUND/S4FX040a_SBL_b0501_22.xnb", "start": 60034875, "end": 60047230, "audio": 0}, {"filename": "/Content/SOUND/S4FX041a_SK77_44.xnb", "start": 60047230, "end": 60078813, "audio": 0}, {"filename": "/Content/SOUND/S4FX043a_S2_2437_44.xnb", "start": 60078813, "end": 60244314, "audio": 0}, {"filename": "/Content/SOUND/S4FX044a_SK61_44.xnb", "start": 60244314, "end": 60292803, "audio": 0}, {"filename": "/Content/SOUND/S4FX046a_SK44_44.xnb", "start": 60292803, "end": 60316194, "audio": 0}, {"filename": "/Content/SOUND/S4FX047a_SK87_44.xnb", "start": 60316194, "end": 60358545, "audio": 0}, {"filename": "/Content/SOUND/S4FX048a_SKB4_44.xnb", "start": 60358545, "end": 60376328, "audio": 0}, {"filename": "/Content/SOUND/S4FX049a050a_SH_44.xnb", "start": 60376328, "end": 60460529, "audio": 0}, {"filename": "/Content/SOUND/S4FX051a_SB_b0504_22.xnb", "start": 60460529, "end": 60503282, "audio": 0}, {"filename": "/Content/SOUND/S4FX052a_0166_44.xnb", "start": 60503282, "end": 60647049, "audio": 0}, {"filename": "/Content/SOUND/S4FX053a_RS_cursol_44.xnb", "start": 60647049, "end": 60654754, "audio": 0}, {"filename": "/Content/SOUND/S4FX054a_SH_S07_18_22.xnb", "start": 60654754, "end": 60718253, "audio": 0}, {"filename": "/Content/SOUND/S4FX055a_0323_44.xnb", "start": 60718253, "end": 60775780, "audio": 0}, {"filename": "/Content/SOUND/S4FX056a_PTLEdit_44.xnb", "start": 60775780, "end": 61010239, "audio": 0}, {"filename": "/Content/SOUND/S4FX058a_SB_alert_22.xnb", "start": 61010239, "end": 61064314, "audio": 0}, {"filename": "/Content/SOUND/S4FX059a_SBL_22LP.xnb", "start": 61064314, "end": 61140467, "audio": 0}, {"filename": "/Content/SOUND/S4FX060a_SK91_44.xnb", "start": 61140467, "end": 61178972, "audio": 0}, {"filename": "/Content/SOUND/S4FX061a_SK98_44.xnb", "start": 61178972, "end": 61212357, "audio": 0}, {"filename": "/Content/SOUND/S4FX062a_SK5E_44.xnb", "start": 61212357, "end": 61265582, "audio": 0}, {"filename": "/Content/SOUND/S4FX063a_Punch_Hit_S3K59ED_44.xnb", "start": 61265582, "end": 61354369, "audio": 0}, {"filename": "/Content/SOUND/S4FX065a_Pre_Last_S1B7_48.xnb", "start": 61354369, "end": 61519170, "audio": 0}, {"filename": "/Content/SOUND/S4FX066a_DeathEgg_LastExpl_ED_44ST.xnb", "start": 61519170, "end": 61665123, "audio": 0}, {"filename": "/Content/SOUND/S4FX076a_SX_ropeway_44LP.xnb", "start": 61665123, "end": 61700844, "audio": 0}, {"filename": "/Content/SOUND/S4FX077a_S2_2134_44_casino_bobbin.xnb", "start": 61700844, "end": 61725477, "audio": 0}, {"filename": "/Content/SOUND/S4FX078a_S2_6863_44_casino_flipper.xnb", "start": 61725477, "end": 61755204, "audio": 0}, {"filename": "/Content/SOUND/S4FX079a_FluidDyn_Pf01_Edited44.xnb", "start": 61755204, "end": 61786871, "audio": 0}, {"filename": "/Content/SOUND/S4FX080a_S2_3340_44_casino_slot.xnb", "start": 61786871, "end": 61804882, "audio": 0}, {"filename": "/Content/SOUND/S4FX082a_S2_5859_44_casino_bumper.xnb", "start": 61804882, "end": 61819563, "audio": 0}, {"filename": "/Content/SOUND/S4FX083a_S2_5758_44_casino_change.xnb", "start": 61819563, "end": 61840000, "audio": 0}, {"filename": "/Content/SOUND/S4FX084a_S2_6762_44_casino_catapult.xnb", "start": 61840000, "end": 61870351, "audio": 0}, {"filename": "/Content/SOUND/S4FX085a_SK55_44.xnb", "start": 61870351, "end": 61877272, "audio": 0}, {"filename": "/Content/SOUND/S4FX086a_SH_C1004_5dB_22.xnb", "start": 61877272, "end": 61927929, "audio": 0}, {"filename": "/Content/SOUND/S4FX088a_add8dB_S2_464D_44.xnb", "start": 61927929, "end": 61929580, "audio": 0}, {"filename": "/Content/SOUND/S4FX091a_0313_44LP.xnb", "start": 61929580, "end": 62009925, "audio": 0}, {"filename": "/Content/SOUND/S4FX092a_BigrRock3_03_44.xnb", "start": 62009925, "end": 62070682, "audio": 0}, {"filename": "/Content/SOUND/S4FX092b_BigRock3_05_44.xnb", "start": 62070682, "end": 62139729, "audio": 0}, {"filename": "/Content/SOUND/S4FX093a_Lorry_02_44.xnb", "start": 62139729, "end": 62217452, "audio": 0}, {"filename": "/Content/SOUND/S4FX093b_Lorry_10_44.xnb", "start": 62217452, "end": 62269519, "audio": 0}, {"filename": "/Content/SOUND/S4FX094a_SKDB_44LP.xnb", "start": 62269519, "end": 62293240, "audio": 0}, {"filename": "/Content/SOUND/S4FX095a_SK69_44.xnb", "start": 62293240, "end": 62305089, "audio": 0}, {"filename": "/Content/SOUND/S4FX096a_SK57mix59_44.xnb", "start": 62305089, "end": 62406570, "audio": 0}, {"filename": "/Content/SOUND/S4FX097a_steam02_44.xnb", "start": 62406570, "end": 62543841, "audio": 0}, {"filename": "/Content/SOUND/S4FX098a_Pipe_In_SKA4ED_44.xnb", "start": 62543841, "end": 62602102, "audio": 0}, {"filename": "/Content/SOUND/S4FX099a_S2_313E_44.xnb", "start": 62602102, "end": 62691235, "audio": 0}, {"filename": "/Content/SOUND/S4FX100a_S2_293C_44.xnb", "start": 62691235, "end": 62755030, "audio": 0}, {"filename": "/Content/SOUND/S4FX101_Gear_05_44.xnb", "start": 62755030, "end": 62816145, "audio": 0}, {"filename": "/Content/SOUND/S4FX103a_SK88_44.xnb", "start": 62816145, "end": 62828936, "audio": 0}, {"filename": "/Content/SOUND/S4FX111a_S2_8271_master_3dB_44.xnb", "start": 62828936, "end": 62902987, "audio": 0}, {"filename": "/Content/SOUND/S4FX112a_S2_2235_44.xnb", "start": 62902987, "end": 62930306, "audio": 0}, {"filename": "/Content/SOUND/S4FX114a_PTLEdit_44.xnb", "start": 62930306, "end": 62971305, "audio": 0}, {"filename": "/Content/SOUND/S4FX115a_PTLEdit_44.xnb", "start": 62971305, "end": 63025554, "audio": 0}, {"filename": "/Content/SOUND/S4FX116a_lorry2_stop_mix_44.xnb", "start": 63025554, "end": 63051917, "audio": 0}, {"filename": "/Content/SOUND/S4FX117a_lorry3_jump2_44.xnb", "start": 63051917, "end": 63090474, "audio": 0}, {"filename": "/Content/SOUND/S4FX118a_lorry4_land_mix_44.xnb", "start": 63090474, "end": 63127899, "audio": 0}, {"filename": "/Content/SOUND/S4FX119a_lorry5_jump1_44.xnb", "start": 63127899, "end": 63157358, "audio": 0}, {"filename": "/Content/SOUND/S4FX120a_SKA4_edit_44LP.xnb", "start": 63157358, "end": 63211131, "audio": 0}, {"filename": "/Content/SOUND/S4FX121a_S2_5354_44.xnb", "start": 63211131, "end": 63226942, "audio": 0}, {"filename": "/Content/SOUND/S4FX122a_piston1_44.xnb", "start": 63226942, "end": 63265737, "audio": 0}, {"filename": "/Content/SOUND/S4FX123a_piston2_44.xnb", "start": 63265737, "end": 63337512, "audio": 0}, {"filename": "/Content/SOUND/S4FX124b_gear2_Stop_44.xnb", "start": 63337512, "end": 63417997, "audio": 0}, {"filename": "/Content/SOUND/S4FX125b_SK77_SK79ED_44.xnb", "start": 63417997, "end": 63470990, "audio": 0}, {"filename": "/Content/SOUND/S4FX126a_S2_5455_44.xnb", "start": 63470990, "end": 63491701, "audio": 0}, {"filename": "/Content/SOUND/S4FX127a_MetalSFX07_48.xnb", "start": 63491701, "end": 63535906, "audio": 0}, {"filename": "/Content/SOUND/S4FX128a_Shutter1_1_B0500_22LP.xnb", "start": 63535906, "end": 63583009, "audio": 0}, {"filename": "/Content/SOUND/S4FX128a_Shutter1_B0500_22LP.xnb", "start": 63583009, "end": 63685224, "audio": 0}, {"filename": "/Content/SOUND/S4FX129a_Shutter2_0306_44.xnb", "start": 63685224, "end": 63729361, "audio": 0}, {"filename": "/Content/SOUND/SDL000_SHSY07_22.xnb", "start": 63729361, "end": 63733020, "audio": 0}, {"filename": "/Content/SOUND/SDL001_SHSY08_22.xnb", "start": 63733020, "end": 63777683, "audio": 0}, {"filename": "/Content/SOUND/SDL002_SHSY09_22.xnb", "start": 63777683, "end": 63808908, "audio": 0}, {"filename": "/Content/SOUND/SDL003_SHSY05_32.xnb", "start": 63808908, "end": 63860721, "audio": 0}, {"filename": "/Content/SOUND/SDL004_SHSY10_22.xnb", "start": 63860721, "end": 63891180, "audio": 0}, {"filename": "/Content/SOUND/SDL005_SHSY13_22.xnb", "start": 63891180, "end": 63931733, "audio": 0}, {"filename": "/Content/SOUND/SDL006_S1CD_44.xnb", "start": 63931733, "end": 63933328, "audio": 0}, {"filename": "/Content/SOUND/SDL007_S1C5_44.xnb", "start": 63933328, "end": 64009205, "audio": 0}, {"filename": "/Content/SOUND/SDL008_S1BF_44.xnb", "start": 64009205, "end": 64199740, "audio": 0}, {"filename": "/Content/SOUND/SDL009_SK62_44.xnb", "start": 64199740, "end": 64218945, "audio": 0}, {"filename": "/Content/SOUND/SDL010_SK36_44.xnb", "start": 64218945, "end": 64239934, "audio": 0}, {"filename": "/Content/SOUND/SDL011_SK33_44.xnb", "start": 64239934, "end": 64268491, "audio": 0}, {"filename": "/Content/SOUND/SDL012_SKB9_44.xnb", "start": 64268491, "end": 64335646, "audio": 0}, {"filename": "/Content/SOUND/SDL013_S1A3_44.xnb", "start": 64335646, "end": 64375313, "audio": 0}, {"filename": "/Content/SOUND/SDL014_S1B2_44.xnb", "start": 64375313, "end": 64448716, "audio": 0}, {"filename": "/Content/SOUND/SDL015_SHPLSP01_22.xnb", "start": 64448716, "end": 64499861, "audio": 0}, {"filename": "/Content/SOUND/SDL018_SK3A_44.xnb", "start": 64499861, "end": 64531536, "audio": 0}, {"filename": "/Content/SOUND/SDL019_SKAB_44.xnb", "start": 64531536, "end": 64585251, "audio": 0}, {"filename": "/Content/SOUND/SDL020_SKB6_44.xnb", "start": 64585251, "end": 64647682, "audio": 0}, {"filename": "/Content/SOUND/SDL021_SK3C_44.xnb", "start": 64647682, "end": 64736755, "audio": 0}, {"filename": "/Content/SOUND/SDL022_S1A6_44.xnb", "start": 64736755, "end": 64767734, "audio": 0}, {"filename": "/Content/SOUND/SDL023_SK6C_44.xnb", "start": 64767734, "end": 64837125, "audio": 0}, {"filename": "/Content/SOUND/SDL024_S1C2_44.xnb", "start": 64837125, "end": 64870340, "audio": 0}, {"filename": "/Content/SOUND/SDL025_S1AD_44.xnb", "start": 64870340, "end": 64885697, "audio": 0}, {"filename": "/Content/SOUND/SDL032_S1CB_44.xnb", "start": 64885697, "end": 64992506, "audio": 0}, {"filename": "/Content/SOUND/SDL036_S1C7_44.xnb", "start": 64992506, "end": 65002223, "audio": 0}, {"filename": "/Content/SOUND/SDL038_SK9B_44.xnb", "start": 65002223, "end": 65081226, "audio": 0}, {"filename": "/Content/SOUND/SDL067_SKB1_44.xnb", "start": 65081226, "end": 65125683, "audio": 0}, {"filename": "/Content/SOUND/SDL068_SK52_44.xnb", "start": 65125683, "end": 65139664, "audio": 0}, {"filename": "/Content/SOUND/SDL069_SHCN000B_22.xnb", "start": 65139664, "end": 65176449, "audio": 0}, {"filename": "/Content/SOUND/SDL070_S1B9_44.xnb", "start": 65176449, "end": 65286034, "audio": 0}, {"filename": "/Content/SOUND/SDL071_SK6E_44.xnb", "start": 65286034, "end": 65315051, "audio": 0}, {"filename": "/Content/SOUND/SDL072_SK81_44.xnb", "start": 65315051, "end": 65365542, "audio": 0}, {"filename": "/Content/SOUND/SDL073_S1A1_44.xnb", "start": 65365542, "end": 65386307, "audio": 0}, {"filename": "/Content/SOUND/SDL074_S1CF_44.xnb", "start": 65386307, "end": 65466644, "audio": 0}, {"filename": "/Content/SOUND/SDL075_S1C4_44.xnb", "start": 65466644, "end": 65489897, "audio": 0}, {"filename": "/Content/SOUND/SDL081_SHSTG0531_22.xnb", "start": 65489897, "end": 65532752, "audio": 0}, {"filename": "/Content/SOUND/SDL087_S1B6_44.xnb", "start": 65532752, "end": 65546807, "audio": 0}, {"filename": "/Content/SOUND/SDL089_SK6F_44.xnb", "start": 65546807, "end": 65576096, "audio": 0}, {"filename": "/Content/SOUND/SDL090_SHSTG0210_22.xnb", "start": 65576096, "end": 65643017, "audio": 0}, {"filename": "/Content/SOUND/SDL104_S1C3_44.xnb", "start": 65643017, "end": 65688752, "audio": 0}, {"filename": "/Content/SOUND/SDL105_S1CA_44.xnb", "start": 65688752, "end": 65764797, "audio": 0}, {"filename": "/Content/SOUND/SDL106_S1BA_44.xnb", "start": 65764797, "end": 65770828, "audio": 0}, {"filename": "/Content/SOUND/SDL107_S1A8_44.xnb", "start": 65770828, "end": 65849641, "audio": 0}, {"filename": "/Content/SOUND/SDL109_SHSTG0519_32.xnb", "start": 65849641, "end": 65860050, "audio": 0}, {"filename": "/Content/SOUND/SDL110_SHSY22_32.xnb", "start": 65860050, "end": 65924151, "audio": 0}, {"filename": "/Content/SOUND/SDL_dummy.xnb", "start": 65924151, "end": 65942188, "audio": 0}, {"filename": "/Content/SOUND/SE_Objes_Extend.xnb", "start": 65942188, "end": 66293989, "audio": 0}, {"filename": "/Content/SOUND/SE_Objes_Steam.xnb", "start": 66293989, "end": 66475962, "audio": 0}, {"filename": "/Content/SOUND/SE_Objes_Superring.xnb", "start": 66475962, "end": 66608399, "audio": 0}, {"filename": "/Content/SOUND/SE_Objsn_Booster.xnb", "start": 66608399, "end": 66873286, "audio": 0}, {"filename": "/Content/SOUND/SE_Objsn_Checkpoint.xnb", "start": 66873286, "end": 67030451, "audio": 0}, {"filename": "/Content/SOUND/SE_Objsn_Spring.xnb", "start": 67030451, "end": 67159684, "audio": 0}, {"filename": "/Content/SOUND/SE_Obj_Ringspread.xnb", "start": 67159684, "end": 67478765, "audio": 0}, {"filename": "/Content/SOUND/SE_Ring_Sparkle_Vari_0001_Obj_Ring_Main.xnb", "start": 67478765, "end": 67537834, "audio": 0}, {"filename": "/Content/SOUND/SE_Ring_Sparkle_Vari_0001_Ring_Sparkle01.xnb", "start": 67537834, "end": 67668435, "audio": 0}, {"filename": "/Content/SOUND/SE_Ring_Sparkle_Vari_0001_Ring_Sparkle02.xnb", "start": 67668435, "end": 67813624, "audio": 0}, {"filename": "/Content/SOUND/SE_Ring_Sparkle_Vari_0001_Ring_Sparkle03.xnb", "start": 67813624, "end": 67961487, "audio": 0}, {"filename": "/Content/SOUND/SND_BGM.inf", "start": 67961487, "end": 67964737, "audio": 0}, {"filename": "/Content/SOUND/SND_BGM_NEW.inf", "start": 67964737, "end": 67967991, "audio": 0}, {"filename": "/Content/SOUND/SND_FX.inf", "start": 67967991, "end": 67975705, "audio": 0}, {"filename": "/Content/SOUND/SND_FX_NEW.inf", "start": 67975705, "end": 67984325, "audio": 0}, {"filename": "/Content/SOUND/Synth_1000000_system_1000000_SYS_CMN_1000_000_sw_open_aif.xnb", "start": 67984325, "end": 68035630, "audio": 0}, {"filename": "/Content/SOUND/Synth_1000000_system_1000000_SYS_CMN_1000_002_fw_open_aif.xnb", "start": 68035630, "end": 68052119, "audio": 0}, {"filename": "/Content/SOUND/Synth_1000000_system_1000000_SYS_CMN_1000_004_cursor_aif.xnb", "start": 68052119, "end": 68054272, "audio": 0}, {"filename": "/Content/SOUND/Synth_1000000_system_1000000_SYS_CMN_1000_005_button_aif.xnb", "start": 68054272, "end": 68183401, "audio": 0}, {"filename": "/Content/SOUND/Synth_1000000_system_1000000_SYS_CMN_1000_007_select_ng_aif.xnb", "start": 68183401, "end": 68197842, "audio": 0}, {"filename": "/Content/SOUND/Synth_1000000_system_1010000_SYS_ACT_1010_003_guage_aif.xnb", "start": 68197842, "end": 68202249, "audio": 0}, {"filename": "/Content/SOUND/Synth_1000000_system_1020000_SYS_PAM_1020_001_buy_skill_aif.xnb", "start": 68202249, "end": 68337522, "audio": 0}, {"filename": "/Content/SOUND/Synth_2000000_player_2001000_PLY_SNC_CL_2001_047_spin_cl_AIF.xnb", "start": 68337522, "end": 68526043, "audio": 0}, {"filename": "/Content/SOUND/Synth_2000000_player_2001000_PLY_SNC_CL_2001_048_spin_lp_cl_AIF_1.xnb", "start": 68526043, "end": 68757572, "audio": 0}, {"filename": "/Content/SOUND/Synth_2000000_player_2001000_PLY_SNC_CL_2001_049_spindash_cl_AIF.xnb", "start": 68757572, "end": 68921517, "audio": 0}, {"filename": "/Content/SOUND/Synth_2000000_player_2002000_PLY_SNC_GE_2002_002_fst_brk_stn_aif.xnb", "start": 68921517, "end": 68995350, "audio": 0}, {"filename": "/Content/SOUND/Synth_2000000_player_2002000_PLY_SNC_GE_2002_027_jump_aif.xnb", "start": 68995350, "end": 69046655, "audio": 0}, {"filename": "/Content/SOUND/Synth_2000000_player_2002000_PLY_SNC_GE_2002_028_spin_ge_aif.xnb", "start": 69046655, "end": 69116678, "audio": 0}, {"filename": "/Content/SOUND/Synth_2000000_player_2002000_PLY_SNC_GE_2002_029_homing_aif.xnb", "start": 69116678, "end": 69219183, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_00_Z1A1_Normal_Mixed4816/Intro.ogg", "start": 69219183, "end": 69353261, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_00_Z1A1_Normal_Mixed4816/Intro.xnb", "start": 69353261, "end": 69353384, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_00_Z1A1_Normal_Mixed4816/Loop.ogg", "start": 69353384, "end": 70133022, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_00_Z1A1_Normal_Mixed4816/Loop.xnb", "start": 70133022, "end": 70133144, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_01_Z1A2_Normal_Mixed4816/Intro.ogg", "start": 70133144, "end": 70201917, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_01_Z1A2_Normal_Mixed4816/Intro.xnb", "start": 70201917, "end": 70202040, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_01_Z1A2_Normal_Mixed4816/Loop.ogg", "start": 70202040, "end": 71130720, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_01_Z1A2_Normal_Mixed4816/Loop.xnb", "start": 71130720, "end": 71130842, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_02_Z1A3_Normal_Mixed4816/Intro.ogg", "start": 71130842, "end": 71235323, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_02_Z1A3_Normal_Mixed4816/Intro.xnb", "start": 71235323, "end": 71235446, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_02_Z1A3_Normal_Mixed4816/Loop.ogg", "start": 71235446, "end": 72030138, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_02_Z1A3_Normal_Mixed4816/Loop.xnb", "start": 72030138, "end": 72030260, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_03_Z2A1_Normal_Mixed4816/Intro.ogg", "start": 72030260, "end": 72130987, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_03_Z2A1_Normal_Mixed4816/Intro.xnb", "start": 72130987, "end": 72131110, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_03_Z2A1_Normal_Mixed4816/Loop.ogg", "start": 72131110, "end": 73236573, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_03_Z2A1_Normal_Mixed4816/Loop.xnb", "start": 73236573, "end": 73236695, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_04_Z2A2b_Normal_Mixed4816/Intro.ogg", "start": 73236695, "end": 73250461, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_04_Z2A2b_Normal_Mixed4816/Intro.xnb", "start": 73250461, "end": 73250584, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_04_Z2A2b_Normal_Mixed4816/Loop.ogg", "start": 73250584, "end": 74401869, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_04_Z2A2b_Normal_Mixed4816/Loop.xnb", "start": 74401869, "end": 74401991, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_04_Z2A2_Normal_Mixed4816/Intro.ogg", "start": 74401991, "end": 74498047, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_04_Z2A2_Normal_Mixed4816/Intro.xnb", "start": 74498047, "end": 74498170, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_04_Z2A2_Normal_Mixed4816/Loop.ogg", "start": 74498170, "end": 74964935, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_04_Z2A2_Normal_Mixed4816/Loop.xnb", "start": 74964935, "end": 74965057, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_05_Z2A3_Normal_Mixed4816/Intro.ogg", "start": 74965057, "end": 75054513, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_05_Z2A3_Normal_Mixed4816/Intro.xnb", "start": 75054513, "end": 75054636, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_05_Z2A3_Normal_Mixed4816/Loop.ogg", "start": 75054636, "end": 75957465, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_05_Z2A3_Normal_Mixed4816/Loop.xnb", "start": 75957465, "end": 75957587, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_06_Z3A1_Normal_Mixed4816/Intro.ogg", "start": 75957587, "end": 76023691, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_06_Z3A1_Normal_Mixed4816/Intro.xnb", "start": 76023691, "end": 76023814, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_06_Z3A1_Normal_Mixed4816/Loop.ogg", "start": 76023814, "end": 77091238, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_06_Z3A1_Normal_Mixed4816/Loop.xnb", "start": 77091238, "end": 77091360, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_07_Z3A2_Normal_Mixed4816/Intro.ogg", "start": 77091360, "end": 77293336, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_07_Z3A2_Normal_Mixed4816/Intro.xnb", "start": 77293336, "end": 77293459, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_07_Z3A2_Normal_Mixed4816/Loop.ogg", "start": 77293459, "end": 78524489, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_07_Z3A2_Normal_Mixed4816/Loop.xnb", "start": 78524489, "end": 78524611, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_08_Z3A3_Normal_Mixed4816/Intro.ogg", "start": 78524611, "end": 78592401, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_08_Z3A3_Normal_Mixed4816/Intro.xnb", "start": 78592401, "end": 78592524, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_08_Z3A3_Normal_Mixed4816/Loop.ogg", "start": 78592524, "end": 79473963, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_08_Z3A3_Normal_Mixed4816/Loop.xnb", "start": 79473963, "end": 79474085, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_09_Z4A1_Normal_Mixed4816/Intro.ogg", "start": 79474085, "end": 79552530, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_09_Z4A1_Normal_Mixed4816/Intro.xnb", "start": 79552530, "end": 79552653, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_09_Z4A1_Normal_Mixed4816/Loop.ogg", "start": 79552653, "end": 80365137, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_09_Z4A1_Normal_Mixed4816/Loop.xnb", "start": 80365137, "end": 80365259, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_10_Z4A2_Normal_Mixed4816/Intro.ogg", "start": 80365259, "end": 80435351, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_10_Z4A2_Normal_Mixed4816/Intro.xnb", "start": 80435351, "end": 80435474, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_10_Z4A2_Normal_Mixed4816/Loop.ogg", "start": 80435474, "end": 81256765, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_10_Z4A2_Normal_Mixed4816/Loop.xnb", "start": 81256765, "end": 81256887, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_11_Z4A3_Normal_Mixed4816/Intro.ogg", "start": 81256887, "end": 81293592, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_11_Z4A3_Normal_Mixed4816/Intro.xnb", "start": 81293592, "end": 81293715, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_11_Z4A3_Normal_Mixed4816/Loop.ogg", "start": 81293715, "end": 82074940, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_11_Z4A3_Normal_Mixed4816/Loop.xnb", "start": 82074940, "end": 82075062, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_12_Title_Mixed4816/Intro.ogg", "start": 82075062, "end": 82440000, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_12_Title_Mixed4816/Intro.xnb", "start": 82440000, "end": 82440123, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_13_Menu_Mixed4816/Intro.ogg", "start": 82440123, "end": 82512588, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_13_Menu_Mixed4816/Intro.xnb", "start": 82512588, "end": 82512711, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_13_Menu_Mixed4816/Loop.ogg", "start": 82512711, "end": 83079866, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_13_Menu_Mixed4816/Loop.xnb", "start": 83079866, "end": 83079988, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_14_SpecialStage_Mixed4816/Intro.ogg", "start": 83079988, "end": 83113018, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_14_SpecialStage_Mixed4816/Intro.xnb", "start": 83113018, "end": 83113141, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_14_SpecialStage_Mixed4816/Loop.ogg", "start": 83113141, "end": 85124763, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_14_SpecialStage_Mixed4816/Loop.xnb", "start": 85124763, "end": 85124885, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_15_Boss1_Mixed4816/Intro.ogg", "start": 85124885, "end": 85153412, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_15_Boss1_Mixed4816/Intro.xnb", "start": 85153412, "end": 85153535, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_15_Boss1_Mixed4816/Loop.ogg", "start": 85153535, "end": 85774666, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_15_Boss1_Mixed4816/Loop.xnb", "start": 85774666, "end": 85774788, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_16_Boss2_Mixed4816/Intro.ogg", "start": 85774788, "end": 85850339, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_16_Boss2_Mixed4816/Intro.xnb", "start": 85850339, "end": 85850462, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_16_Boss2_Mixed4816/Loop.ogg", "start": 85850462, "end": 86242232, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_16_Boss2_Mixed4816/Loop.xnb", "start": 86242232, "end": 86242354, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_17_Final_Mixed4816/Intro.ogg", "start": 86242354, "end": 86382555, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_17_Final_Mixed4816/Intro.xnb", "start": 86382555, "end": 86382678, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_17_Final_Mixed4816/Loop.ogg", "start": 86382678, "end": 87367604, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_17_Final_Mixed4816/Loop.xnb", "start": 87367604, "end": 87367726, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_18_Ending_Mixed4816/Intro.ogg", "start": 87367726, "end": 91593214, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_18_Ending_Mixed4816/Intro.xnb", "start": 91593214, "end": 91593337, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_19_Clear_Mixed4816/Intro.ogg", "start": 91593337, "end": 91732127, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_19_Clear_Mixed4816/Intro.xnb", "start": 91732127, "end": 91732250, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_20_Clear_Final_Mixed4816/Intro.ogg", "start": 91732250, "end": 92165806, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_20_Clear_Final_Mixed4816/Intro.xnb", "start": 92165806, "end": 92165929, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_22_Obore_Mixed4816/Intro.ogg", "start": 92165929, "end": 92452433, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_22_Obore_Mixed4816/Intro.xnb", "start": 92452433, "end": 92452556, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_23_Invincible_Mixed4816/Intro.ogg", "start": 92452556, "end": 92601697, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_23_Invincible_Mixed4816/Intro.xnb", "start": 92601697, "end": 92601820, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_23_Invincible_Mixed4816/Loop.ogg", "start": 92601820, "end": 92970317, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_23_Invincible_Mixed4816/Loop.xnb", "start": 92970317, "end": 92970439, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_24_1up_Mixed4816/Intro.ogg", "start": 92970439, "end": 93046847, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_24_1up_Mixed4816/Intro.xnb", "start": 93046847, "end": 93046970, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_25_New_Record_4816/Intro.ogg", "start": 93046970, "end": 93093496, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_25_New_Record_4816/Intro.xnb", "start": 93093496, "end": 93093619, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_26_Gameover_Mixed4816/Intro.ogg", "start": 93093619, "end": 93302289, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_26_Gameover_Mixed4816/Intro.xnb", "start": 93302289, "end": 93302412, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_27_Z1A1_Speedup_Mixed4816/Intro.ogg", "start": 93302412, "end": 93674648, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_27_Z1A1_Speedup_Mixed4816/Intro.xnb", "start": 93674648, "end": 93674771, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_27_Z1A1_Speedup_Mixed4816/Loop.ogg", "start": 93674771, "end": 94453168, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_27_Z1A1_Speedup_Mixed4816/Loop.xnb", "start": 94453168, "end": 94453290, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_28_Z1A2_Speedup_Mixed4816/Intro.ogg", "start": 94453290, "end": 94909723, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_28_Z1A2_Speedup_Mixed4816/Intro.xnb", "start": 94909723, "end": 94909846, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_28_Z1A2_Speedup_Mixed4816/Loop.ogg", "start": 94909846, "end": 95843427, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_28_Z1A2_Speedup_Mixed4816/Loop.xnb", "start": 95843427, "end": 95843549, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_29_Z1A3_Speedup_Mixed4816/Intro.ogg", "start": 95843549, "end": 96251832, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_29_Z1A3_Speedup_Mixed4816/Intro.xnb", "start": 96251832, "end": 96251955, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_29_Z1A3_Speedup_Mixed4816/Loop.ogg", "start": 96251955, "end": 97040579, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_29_Z1A3_Speedup_Mixed4816/Loop.xnb", "start": 97040579, "end": 97040701, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_30_Z2A1_Speedup_Mixed4816/Intro.ogg", "start": 97040701, "end": 97405269, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_30_Z2A1_Speedup_Mixed4816/Intro.xnb", "start": 97405269, "end": 97405392, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_30_Z2A1_Speedup_Mixed4816/Loop.ogg", "start": 97405392, "end": 98513050, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_30_Z2A1_Speedup_Mixed4816/Loop.xnb", "start": 98513050, "end": 98513172, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_31_Z2A2_SpeedUp_Mixed4816/Intro.ogg", "start": 98513172, "end": 98902071, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_31_Z2A2_SpeedUp_Mixed4816/Intro.xnb", "start": 98902071, "end": 98902194, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_31_Z2A2_SpeedUp_Mixed4816/Loop.ogg", "start": 98902194, "end": 100055817, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_31_Z2A2_SpeedUp_Mixed4816/Loop.xnb", "start": 100055817, "end": 100055939, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_32_Z2A3_Speedup_Mixed4816/Intro.ogg", "start": 100055939, "end": 100441579, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_32_Z2A3_Speedup_Mixed4816/Intro.xnb", "start": 100441579, "end": 100441702, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_32_Z2A3_Speedup_Mixed4816/Loop.ogg", "start": 100441702, "end": 101345819, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_32_Z2A3_Speedup_Mixed4816/Loop.xnb", "start": 101345819, "end": 101345941, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_33_Z3A1_Speedup_Mixed4816/Intro.ogg", "start": 101345941, "end": 101713894, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_33_Z3A1_Speedup_Mixed4816/Intro.xnb", "start": 101713894, "end": 101714017, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_33_Z3A1_Speedup_Mixed4816/Loop.ogg", "start": 101714017, "end": 102783479, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_33_Z3A1_Speedup_Mixed4816/Loop.xnb", "start": 102783479, "end": 102783601, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_34_Z3A2_Speedup_Mixed4816/Intro.ogg", "start": 102783601, "end": 103131325, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_34_Z3A2_Speedup_Mixed4816/Intro.xnb", "start": 103131325, "end": 103131448, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_34_Z3A2_Speedup_Mixed4816/Loop.ogg", "start": 103131448, "end": 104371572, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_34_Z3A2_Speedup_Mixed4816/Loop.xnb", "start": 104371572, "end": 104371694, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_35_Z3A3_Speedup_Mixed4816/Intro.ogg", "start": 104371694, "end": 104863450, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_35_Z3A3_Speedup_Mixed4816/Intro.xnb", "start": 104863450, "end": 104863573, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_35_Z3A3_Speedup_Mixed4816/Loop.ogg", "start": 104863573, "end": 105742133, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_35_Z3A3_Speedup_Mixed4816/Loop.xnb", "start": 105742133, "end": 105742255, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_36_Z4A1_Speedup_Mixed4816/Intro.ogg", "start": 105742255, "end": 106199428, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_36_Z4A1_Speedup_Mixed4816/Intro.xnb", "start": 106199428, "end": 106199551, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_36_Z4A1_Speedup_Mixed4816/Loop.ogg", "start": 106199551, "end": 107012037, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_36_Z4A1_Speedup_Mixed4816/Loop.xnb", "start": 107012037, "end": 107012159, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_37_Z4A2_Speedup_Mixed4816/Intro.ogg", "start": 107012159, "end": 107378088, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_37_Z4A2_Speedup_Mixed4816/Intro.xnb", "start": 107378088, "end": 107378211, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_37_Z4A2_Speedup_Mixed4816/Loop.ogg", "start": 107378211, "end": 108201235, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_37_Z4A2_Speedup_Mixed4816/Loop.xnb", "start": 108201235, "end": 108201357, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_38_Z4A3_Speedup_Mixed4816/Intro.ogg", "start": 108201357, "end": 108526651, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_38_Z4A3_Speedup_Mixed4816/Intro.xnb", "start": 108526651, "end": 108526774, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_38_Z4A3_Speedup_Mixed4816/Loop.ogg", "start": 108526774, "end": 109302588, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_38_Z4A3_Speedup_Mixed4816/Loop.xnb", "start": 109302588, "end": 109302710, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_39_WorldMap_Mixed4816/Intro.ogg", "start": 109302710, "end": 109341505, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_39_WorldMap_Mixed4816/Intro.xnb", "start": 109341505, "end": 109341628, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_39_WorldMap_Mixed4816/Loop.ogg", "start": 109341628, "end": 109722799, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_39_WorldMap_Mixed4816/Loop.xnb", "start": 109722799, "end": 109722921, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_40_SuperSonic_Mixed4816/Intro.ogg", "start": 109722921, "end": 109775372, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_40_SuperSonic_Mixed4816/Intro.xnb", "start": 109775372, "end": 109775495, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_40_SuperSonic_Mixed4816/Loop.ogg", "start": 109775495, "end": 109978472, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_40_SuperSonic_Mixed4816/Loop.xnb", "start": 109978472, "end": 109978594, "audio": 0}, {"filename": "/Content/SOUND/S4EP1_41_CutScene_Mixed4816/Intro.ogg", "start": 109978594, "end": 110468838, "audio": 1}, {"filename": "/Content/SOUND/S4EP1_41_CutScene_Mixed4816/Intro.xnb", "start": 110468838, "end": 110468961, "audio": 0}, {"filename": "/Content/SOUND/SNG_EMERALD/Intro.ogg", "start": 110468961, "end": 110537531, "audio": 1}, {"filename": "/Content/SOUND/SNG_EMERALD/Intro.xnb", "start": 110537531, "end": 110537654, "audio": 0}, {"filename": "/Content/UPSELL/s4cn_back.xnb", "start": 110537654, "end": 110550027, "audio": 0}, {"filename": "/Content/UPSELL/s4cn_back_HL.xnb", "start": 110550027, "end": 110562400, "audio": 0}, {"filename": "/Content/UPSELL/s4cn_buy.xnb", "start": 110562400, "end": 110619061, "audio": 0}, {"filename": "/Content/UPSELL/s4cn_buy_HL.xnb", "start": 110619061, "end": 110675722, "audio": 0}, {"filename": "/Content/UPSELL/s4es_back.xnb", "start": 110675722, "end": 110688095, "audio": 0}, {"filename": "/Content/UPSELL/s4es_back_HL.xnb", "start": 110688095, "end": 110700468, "audio": 0}, {"filename": "/Content/UPSELL/s4es_buy.xnb", "start": 110700468, "end": 110757129, "audio": 0}, {"filename": "/Content/UPSELL/s4es_buy_HL.xnb", "start": 110757129, "end": 110813790, "audio": 0}, {"filename": "/Content/UPSELL/s4fi_back.xnb", "start": 110813790, "end": 110826163, "audio": 0}, {"filename": "/Content/UPSELL/s4fi_back_HL.xnb", "start": 110826163, "end": 110838536, "audio": 0}, {"filename": "/Content/UPSELL/s4fi_buy.xnb", "start": 110838536, "end": 110895197, "audio": 0}, {"filename": "/Content/UPSELL/s4fi_buy_HL.xnb", "start": 110895197, "end": 110951858, "audio": 0}, {"filename": "/Content/UPSELL/s4fr_back.xnb", "start": 110951858, "end": 110964231, "audio": 0}, {"filename": "/Content/UPSELL/s4fr_back_HL.xnb", "start": 110964231, "end": 110976604, "audio": 0}, {"filename": "/Content/UPSELL/s4fr_buy.xnb", "start": 110976604, "end": 111033265, "audio": 0}, {"filename": "/Content/UPSELL/s4fr_buy_HL.xnb", "start": 111033265, "end": 111089926, "audio": 0}, {"filename": "/Content/UPSELL/s4ge_back.xnb", "start": 111089926, "end": 111102299, "audio": 0}, {"filename": "/Content/UPSELL/s4ge_back_HL.xnb", "start": 111102299, "end": 111114672, "audio": 0}, {"filename": "/Content/UPSELL/s4ge_buy.xnb", "start": 111114672, "end": 111171333, "audio": 0}, {"filename": "/Content/UPSELL/s4ge_buy_HL.xnb", "start": 111171333, "end": 111227994, "audio": 0}, {"filename": "/Content/UPSELL/s4hk_back.xnb", "start": 111227994, "end": 111240367, "audio": 0}, {"filename": "/Content/UPSELL/s4hk_back_HL.xnb", "start": 111240367, "end": 111252740, "audio": 0}, {"filename": "/Content/UPSELL/s4hk_buy.xnb", "start": 111252740, "end": 111309401, "audio": 0}, {"filename": "/Content/UPSELL/s4hk_buy_HL.xnb", "start": 111309401, "end": 111366062, "audio": 0}, {"filename": "/Content/UPSELL/s4it_back.xnb", "start": 111366062, "end": 111378435, "audio": 0}, {"filename": "/Content/UPSELL/s4it_back_HL.xnb", "start": 111378435, "end": 111390808, "audio": 0}, {"filename": "/Content/UPSELL/s4it_buy.xnb", "start": 111390808, "end": 111447469, "audio": 0}, {"filename": "/Content/UPSELL/s4it_buy_HL.xnb", "start": 111447469, "end": 111504130, "audio": 0}, {"filename": "/Content/UPSELL/s4ja_back.xnb", "start": 111504130, "end": 111516503, "audio": 0}, {"filename": "/Content/UPSELL/s4ja_back_HL.xnb", "start": 111516503, "end": 111528876, "audio": 0}, {"filename": "/Content/UPSELL/s4ja_buy.xnb", "start": 111528876, "end": 111585537, "audio": 0}, {"filename": "/Content/UPSELL/s4ja_buy_HL.xnb", "start": 111585537, "end": 111642198, "audio": 0}, {"filename": "/Content/UPSELL/s4pt_back.xnb", "start": 111642198, "end": 111654571, "audio": 0}, {"filename": "/Content/UPSELL/s4pt_back_HL.xnb", "start": 111654571, "end": 111666944, "audio": 0}, {"filename": "/Content/UPSELL/s4pt_buy.xnb", "start": 111666944, "end": 111723605, "audio": 0}, {"filename": "/Content/UPSELL/s4pt_buy_HL.xnb", "start": 111723605, "end": 111780266, "audio": 0}, {"filename": "/Content/UPSELL/s4ru_back.xnb", "start": 111780266, "end": 111792639, "audio": 0}, {"filename": "/Content/UPSELL/s4ru_back_HL.xnb", "start": 111792639, "end": 111805012, "audio": 0}, {"filename": "/Content/UPSELL/s4ru_buy.xnb", "start": 111805012, "end": 111861673, "audio": 0}, {"filename": "/Content/UPSELL/s4ru_buy_HL.xnb", "start": 111861673, "end": 111918334, "audio": 0}, {"filename": "/Content/UPSELL/s4us_arrow.xnb", "start": 111918334, "end": 111927151, "audio": 0}, {"filename": "/Content/UPSELL/s4us_back.xnb", "start": 111927151, "end": 111939524, "audio": 0}, {"filename": "/Content/UPSELL/s4us_back_HL.xnb", "start": 111939524, "end": 111951897, "audio": 0}, {"filename": "/Content/UPSELL/s4us_bg.xnb", "start": 111951897, "end": 112566382, "audio": 0}, {"filename": "/Content/UPSELL/s4us_buy.xnb", "start": 112566382, "end": 112623043, "audio": 0}, {"filename": "/Content/UPSELL/s4us_buy_HL.xnb", "start": 112623043, "end": 112679704, "audio": 0}, {"filename": "/Content/UPSELL/s4us_ss_1.xnb", "start": 112679704, "end": 113232749, "audio": 0}, {"filename": "/Content/UPSELL/s4us_ss_2.xnb", "start": 113232749, "end": 113785794, "audio": 0}, {"filename": "/Content/UPSELL/s4us_ss_3.xnb", "start": 113785794, "end": 114338839, "audio": 0}, {"filename": "/Content/UPSELL/s4us_ss_4.xnb", "start": 114338839, "end": 114891884, "audio": 0}, {"filename": "/Content/UPSELL/s4us_ss_5.xnb", "start": 114891884, "end": 115444929, "audio": 0}], "remote_package_size": 115444929, "package_uuid": "6fdc0c02-6bf9-4eec-b3b3-571eedd395eb"});
  
  })();
  

    // All the pre-js content up to here must remain later on, we need to run
    // it.
    var necessaryPreJSTasks = Module['preRun'].slice();
  
    if (!Module['preRun']) throw 'Module.preRun should exist because file support used it; did a pre-js delete it?';
    necessaryPreJSTasks.forEach(function(task) {
      if (Module['preRun'].indexOf(task) < 0) throw 'All preRun tasks that exist before user pre-js code should remain after; did you replace Module or modify Module.preRun?';
    });
  

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js
  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = function(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];
if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) {
  Object.defineProperty(Module, 'arguments', {
    configurable: true,
    get: function() {
      abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) {
  Object.defineProperty(Module, 'thisProgram', {
    configurable: true,
    get: function() {
      abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (Module['quit']) quit_ = Module['quit'];
if (!Object.getOwnPropertyDescriptor(Module, 'quit')) {
  Object.defineProperty(Module, 'quit', {
    configurable: true,
    get: function() {
      abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');

if (!Object.getOwnPropertyDescriptor(Module, 'read')) {
  Object.defineProperty(Module, 'read', {
    configurable: true,
    get: function() {
      abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) {
  Object.defineProperty(Module, 'readAsync', {
    configurable: true,
    get: function() {
      abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) {
  Object.defineProperty(Module, 'readBinary', {
    configurable: true,
    get: function() {
      abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) {
  Object.defineProperty(Module, 'setWindowTitle', {
    configurable: true,
    get: function() {
      abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) {
  Object.defineProperty(Module, 'wasmBinary', {
    configurable: true,
    get: function() {
      abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}
var noExitRuntime = Module['noExitRuntime'] || true;
if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) {
  Object.defineProperty(Module, 'noExitRuntime', {
    configurable: true,
    get: function() {
      abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;
  assert(typeof allocator === 'number', 'allocate no longer takes a type argument')
  assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u >= 0x200000) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)] = codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 134217728;
if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) {
  Object.defineProperty(Module, 'INITIAL_MEMORY', {
    configurable: true,
    get: function() {
      abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)')
    }
  });
}

assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it.
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally');
assert(INITIAL_MEMORY == 134217728, 'Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // The stack grows downwards
  HEAPU32[(max >> 2)+1] = 0x2135467;
  HEAPU32[(max >> 2)+2] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  var cookie1 = HEAPU32[(max >> 2)+1];
  var cookie2 = HEAPU32[(max >> 2)+2];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js


// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  SOCKFS.root = FS.mount(SOCKFS, {}, null);
if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  var output = 'abort(' + what + ') at ' + stackTrace();
  what = output;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

  var wasmBinaryFile = 'dotnet.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch === 'function'
      && !isFileURI(wasmBinaryFile)
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
    else {
      if (readAsync) {
        // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
        return new Promise(function(resolve, reject) {
          readAsync(wasmBinaryFile, function(response) { resolve(new Uint8Array(/** @type{!ArrayBuffer} */(response))) }, reject)
        });
      }
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 134217728);
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      var result = WebAssembly.instantiate(binary, info);
      return result;
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      // Warn on some common problems.
      if (isFileURI(wasmBinaryFile)) {
        err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
      }
      abort(reason);
    });
  }

  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiationResult, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  4195552: function($0) {var str = UTF8ToString($0) + '\n\n' + 'Abort/Retry/Ignore/AlwaysIgnore? [ariA] :'; var reply = window.prompt(str, "i"); if (reply === null) { reply = "i"; } return allocate(intArrayFromString(reply), 'i8', ALLOC_NORMAL);},  
 4195777: function($0, $1) {alert(UTF8ToString($0) + "\n\n" + UTF8ToString($1));},  
 4195834: function($0, $1, $2) {var w = $0; var h = $1; var pixels = $2; if (!Module['SDL2']) Module['SDL2'] = {}; var SDL2 = Module['SDL2']; if (SDL2.ctxCanvas !== Module['canvas']) { SDL2.ctx = Module['createContext'](Module['canvas'], false, true); SDL2.ctxCanvas = Module['canvas']; } if (SDL2.w !== w || SDL2.h !== h || SDL2.imageCtx !== SDL2.ctx) { SDL2.image = SDL2.ctx.createImageData(w, h); SDL2.w = w; SDL2.h = h; SDL2.imageCtx = SDL2.ctx; } var data = SDL2.image.data; var src = pixels >> 2; var dst = 0; var num; if (typeof CanvasPixelArray !== 'undefined' && data instanceof CanvasPixelArray) { num = data.length; while (dst < num) { var val = HEAP32[src]; data[dst ] = val & 0xff; data[dst+1] = (val >> 8) & 0xff; data[dst+2] = (val >> 16) & 0xff; data[dst+3] = 0xff; src++; dst += 4; } } else { if (SDL2.data32Data !== data) { SDL2.data32 = new Int32Array(data.buffer); SDL2.data8 = new Uint8Array(data.buffer); SDL2.data32Data = data; } var data32 = SDL2.data32; num = data32.length; data32.set(HEAP32.subarray(src, src + num)); var data8 = SDL2.data8; var i = 3; var j = i + 4*num; if (num % 8 == 0) { while (i < j) { data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; data8[i] = 0xff; i = i + 4 | 0; } } else { while (i < j) { data8[i] = 0xff; i = i + 4 | 0; } } } SDL2.ctx.putImageData(SDL2.image, 0, 0); return 0;},  
 4197313: function($0, $1, $2, $3, $4) {var w = $0; var h = $1; var hot_x = $2; var hot_y = $3; var pixels = $4; var canvas = document.createElement("canvas"); canvas.width = w; canvas.height = h; var ctx = canvas.getContext("2d"); var image = ctx.createImageData(w, h); var data = image.data; var src = pixels >> 2; var dst = 0; var num; if (typeof CanvasPixelArray !== 'undefined' && data instanceof CanvasPixelArray) { num = data.length; while (dst < num) { var val = HEAP32[src]; data[dst ] = val & 0xff; data[dst+1] = (val >> 8) & 0xff; data[dst+2] = (val >> 16) & 0xff; data[dst+3] = (val >> 24) & 0xff; src++; dst += 4; } } else { var data32 = new Int32Array(data.buffer); num = data32.length; data32.set(HEAP32.subarray(src, src + num)); } ctx.putImageData(image, 0, 0); var url = hot_x === 0 && hot_y === 0 ? "url(" + canvas.toDataURL() + "), auto" : "url(" + canvas.toDataURL() + ") " + hot_x + " " + hot_y + ", auto"; var urlBuf = _malloc(url.length + 1); stringToUTF8(url, urlBuf, url.length + 1); return urlBuf;},  
 4198302: function($0) {if (Module['canvas']) { Module['canvas'].style['cursor'] = UTF8ToString($0); } return 0;},  
 4198395: function() {if (Module['canvas']) { Module['canvas'].style['cursor'] = 'none'; }},  
 4198464: function() {return window.innerWidth;},  
 4198494: function() {return window.innerHeight;},  
 4198525: function() {if (typeof(AudioContext) !== 'undefined') { return SDL_TRUE; } else if (typeof(webkitAudioContext) !== 'undefined') { return SDL_TRUE; } return SDL_FALSE;},  
 4198684: function() {if ((typeof(navigator.mediaDevices) !== 'undefined') && (typeof(navigator.mediaDevices.getUserMedia) !== 'undefined')) { return SDL_TRUE; } else if (typeof(navigator.webkitGetUserMedia) !== 'undefined') { return SDL_TRUE; } return SDL_FALSE;},  
 4198930: function($0) {if(typeof(Module['SDL2']) === 'undefined') { Module['SDL2'] = {}; } var SDL2 = Module['SDL2']; if (!$0) { SDL2.audio = {}; } else { SDL2.capture = {}; } if (!SDL2.audioContext) { if (typeof(AudioContext) !== 'undefined') { SDL2.audioContext = new AudioContext(); } else if (typeof(webkitAudioContext) !== 'undefined') { SDL2.audioContext = new webkitAudioContext(); } if (SDL2.audioContext) { autoResumeAudioContext(SDL2.audioContext); } } return SDL2.audioContext === undefined ? -1 : 0;},  
 4199423: function() {var SDL2 = Module['SDL2']; return SDL2.audioContext.sampleRate;},  
 4199491: function($0, $1, $2, $3) {var SDL2 = Module['SDL2']; var have_microphone = function(stream) { if (SDL2.capture.silenceTimer !== undefined) { clearTimeout(SDL2.capture.silenceTimer); SDL2.capture.silenceTimer = undefined; } SDL2.capture.mediaStreamNode = SDL2.audioContext.createMediaStreamSource(stream); SDL2.capture.scriptProcessorNode = SDL2.audioContext.createScriptProcessor($1, $0, 1); SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) { if ((SDL2 === undefined) || (SDL2.capture === undefined)) { return; } audioProcessingEvent.outputBuffer.getChannelData(0).fill(0.0); SDL2.capture.currentCaptureBuffer = audioProcessingEvent.inputBuffer; dynCall('vi', $2, [$3]); }; SDL2.capture.mediaStreamNode.connect(SDL2.capture.scriptProcessorNode); SDL2.capture.scriptProcessorNode.connect(SDL2.audioContext.destination); SDL2.capture.stream = stream; }; var no_microphone = function(error) { }; SDL2.capture.silenceBuffer = SDL2.audioContext.createBuffer($0, $1, SDL2.audioContext.sampleRate); SDL2.capture.silenceBuffer.getChannelData(0).fill(0.0); var silence_callback = function() { SDL2.capture.currentCaptureBuffer = SDL2.capture.silenceBuffer; dynCall('vi', $2, [$3]); }; SDL2.capture.silenceTimer = setTimeout(silence_callback, ($1 / SDL2.audioContext.sampleRate) * 1000); if ((navigator.mediaDevices !== undefined) && (navigator.mediaDevices.getUserMedia !== undefined)) { navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(have_microphone).catch(no_microphone); } else if (navigator.webkitGetUserMedia !== undefined) { navigator.webkitGetUserMedia({ audio: true, video: false }, have_microphone, no_microphone); }},  
 4201143: function($0, $1, $2, $3) {var SDL2 = Module['SDL2']; SDL2.audio.scriptProcessorNode = SDL2.audioContext['createScriptProcessor']($1, 0, $0); SDL2.audio.scriptProcessorNode['onaudioprocess'] = function (e) { if ((SDL2 === undefined) || (SDL2.audio === undefined)) { return; } SDL2.audio.currentOutputBuffer = e['outputBuffer']; dynCall('vi', $2, [$3]); }; SDL2.audio.scriptProcessorNode['connect'](SDL2.audioContext['destination']);},  
 4201553: function($0, $1) {var SDL2 = Module['SDL2']; var numChannels = SDL2.capture.currentCaptureBuffer.numberOfChannels; for (var c = 0; c < numChannels; ++c) { var channelData = SDL2.capture.currentCaptureBuffer.getChannelData(c); if (channelData.length != $1) { throw 'Web Audio capture buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + $1 + ' samples!'; } if (numChannels == 1) { for (var j = 0; j < $1; ++j) { setValue($0 + (j * 4), channelData[j], 'float'); } } else { for (var j = 0; j < $1; ++j) { setValue($0 + (((j * numChannels) + c) * 4), channelData[j], 'float'); } } }},  
 4202158: function($0, $1) {var SDL2 = Module['SDL2']; var numChannels = SDL2.audio.currentOutputBuffer['numberOfChannels']; for (var c = 0; c < numChannels; ++c) { var channelData = SDL2.audio.currentOutputBuffer['getChannelData'](c); if (channelData.length != $1) { throw 'Web Audio output buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + $1 + ' samples!'; } for (var j = 0; j < $1; ++j) { channelData[j] = HEAPF32[$0 + ((j*numChannels + c) << 2) >> 2]; } }},  
 4202638: function($0) {var SDL2 = Module['SDL2']; if ($0) { if (SDL2.capture.silenceTimer !== undefined) { clearTimeout(SDL2.capture.silenceTimer); } if (SDL2.capture.stream !== undefined) { var tracks = SDL2.capture.stream.getAudioTracks(); for (var i = 0; i < tracks.length; i++) { SDL2.capture.stream.removeTrack(tracks[i]); } SDL2.capture.stream = undefined; } if (SDL2.capture.scriptProcessorNode !== undefined) { SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) {}; SDL2.capture.scriptProcessorNode.disconnect(); SDL2.capture.scriptProcessorNode = undefined; } if (SDL2.capture.mediaStreamNode !== undefined) { SDL2.capture.mediaStreamNode.disconnect(); SDL2.capture.mediaStreamNode = undefined; } if (SDL2.capture.silenceBuffer !== undefined) { SDL2.capture.silenceBuffer = undefined } SDL2.capture = undefined; } else { if (SDL2.audio.scriptProcessorNode != undefined) { SDL2.audio.scriptProcessorNode.disconnect(); SDL2.audio.scriptProcessorNode = undefined; } SDL2.audio = undefined; } if ((SDL2.audioContext !== undefined) && (SDL2.audio === undefined) && (SDL2.capture === undefined)) { SDL2.audioContext.close(); SDL2.audioContext = undefined; }},  
 4203810: function($0, $1) {var level = $0; var message = Module.UTF8ToString ($1); var namespace = "Debugger.Debug"; if (MONO["logging"] && MONO.logging["debugger"]) { MONO.logging.debugger (level, message); return; } console.debug("%s: %s", namespace, message);},  
 4204050: function($0, $1, $2, $3) {MONO.mono_wasm_add_dbg_command_received ($0, $1, $2, $3);},  
 4204112: function($0, $1, $2, $3) {MONO.mono_wasm_add_dbg_command_received ($0, $1, $2, $3);},  
 4204174: function($0, $1, $2, $3) {MONO.mono_wasm_add_dbg_command_received ($0, $1, $2, $3);},  
 4204236: function($0, $1, $2, $3) {MONO.mono_wasm_add_dbg_command_received ($0, $1, $2, $3);},  
 4204298: function($0, $1) {MONO.mono_wasm_add_dbg_command_received (1, -1, $0, $1);},  
 4204359: function($0, $1) {MONO.string_decoder.decode($0, $0 + $1, true);},  
 4204410: function($0, $1, $2) {var js_str = MONO.string_decoder.copy ($0); try { var res = eval (js_str); setValue ($2, 0, "i32"); if (res === null || res === undefined) return 0; else res = res.toString (); } catch (e) { res = e.toString(); setValue ($2, 1, "i32"); if (res === null || res === undefined) res = "unknown exception"; var stack = e.stack; if (stack) { if (stack.startsWith(res)) res = stack; else res += "\n" + stack; } } var buff = Module._malloc((res.length + 1) * 2); stringToUTF16 (res, buff, (res.length + 1) * 2); setValue ($1, res.length, "i32"); return buff;},  
 4204965: function($0, $1, $2, $3, $4) {var log_level = $0; var message = Module.UTF8ToString ($1); var isFatal = $2; var domain = Module.UTF8ToString ($3); var dataPtr = $4; if (MONO["logging"] && MONO.logging["trace"]) { MONO.logging.trace(domain, log_level, message, isFatal, dataPtr); return; } if (isFatal) console.trace (message); switch (Module.UTF8ToString ($0)) { case "critical": case "error": console.error (message); break; case "warning": console.warn (message); break; case "message": console.log (message); break; case "info": console.info (message); break; case "debug": console.debug (message); break; default: console.log (message); break; }}
};
function compile_function(snippet_ptr,len,is_exception){ try { var data = MONO.string_decoder.decode (snippet_ptr, snippet_ptr + len); var wrapper = '(function () { ' + data + ' })'; var funcFactory = eval(wrapper); var func = funcFactory(); if (typeof func !== 'function') { throw new Error('Code must return an instance of a JavaScript function. ' + 'Please use `return` statement to return a function.'); } setValue (is_exception, 0, "i32"); return BINDING.js_to_mono_obj (func, true); } catch (e) { res = e.toString (); setValue (is_exception, 1, "i32"); if (res === null || res === undefined) res = "unknown exception"; return BINDING.js_to_mono_obj (res, true); } }





  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  var runtimeKeepaliveCounter=0;
  function keepRuntimeAlive() {
      return noExitRuntime || runtimeKeepaliveCounter > 0;
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  var ExceptionInfoAttrs={DESTRUCTOR_OFFSET:0,REFCOUNT_OFFSET:4,TYPE_OFFSET:8,CAUGHT_OFFSET:12,RETHROWN_OFFSET:13,SIZE:16};
  function ___cxa_allocate_exception(size) {
      // Thrown object is prepended by exception metadata block
      return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE;
    }

  function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - ExceptionInfoAttrs.SIZE;
  
      this.set_type = function(type) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)] = type;
      };
  
      this.get_type = function() {
        return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.TYPE_OFFSET))>>2)];
      };
  
      this.set_destructor = function(destructor) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)] = destructor;
      };
  
      this.get_destructor = function() {
        return HEAP32[(((this.ptr)+(ExceptionInfoAttrs.DESTRUCTOR_OFFSET))>>2)];
      };
  
      this.set_refcount = function(refcount) {
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)] = refcount;
      };
  
      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)] = caught;
      };
  
      this.get_caught = function () {
        return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.CAUGHT_OFFSET))>>0)] != 0;
      };
  
      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)] = rethrown;
      };
  
      this.get_rethrown = function () {
        return HEAP8[(((this.ptr)+(ExceptionInfoAttrs.RETHROWN_OFFSET))>>0)] != 0;
      };
  
      // Initialize native structure fields. Should be called once after allocated.
      this.init = function(type, destructor) {
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      }
  
      this.add_ref = function() {
        var value = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)] = value + 1;
      };
  
      // Returns true if last reference released.
      this.release_ref = function() {
        var prev = HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)];
        HEAP32[(((this.ptr)+(ExceptionInfoAttrs.REFCOUNT_OFFSET))>>2)] = prev - 1;
        assert(prev > 0);
        return prev === 1;
      };
    }
  function CatchInfo(ptr) {
  
      this.free = function() {
        _free(this.ptr);
        this.ptr = 0;
      };
  
      this.set_base_ptr = function(basePtr) {
        HEAP32[((this.ptr)>>2)] = basePtr;
      };
  
      this.get_base_ptr = function() {
        return HEAP32[((this.ptr)>>2)];
      };
  
      this.set_adjusted_ptr = function(adjustedPtr) {
        var ptrSize = 4;
        HEAP32[(((this.ptr)+(ptrSize))>>2)] = adjustedPtr;
      };
  
      this.get_adjusted_ptr = function() {
        var ptrSize = 4;
        return HEAP32[(((this.ptr)+(ptrSize))>>2)];
      };
  
      // Get pointer which is expected to be received by catch clause in C++ code. It may be adjusted
      // when the pointer is casted to some of the exception object base classes (e.g. when virtual
      // inheritance is used). When a pointer is thrown this method should return the thrown pointer
      // itself.
      this.get_exception_ptr = function() {
        // Work around a fastcomp bug, this code is still included for some reason in a build without
        // exceptions support.
        var isPointer = ___cxa_is_pointer_type(
          this.get_exception_info().get_type());
        if (isPointer) {
          return HEAP32[((this.get_base_ptr())>>2)];
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0) return adjusted;
        return this.get_base_ptr();
      };
  
      this.get_exception_info = function() {
        return new ExceptionInfo(this.get_base_ptr());
      };
  
      if (ptr === undefined) {
        this.ptr = _malloc(8);
        this.set_adjusted_ptr(0);
      } else {
        this.ptr = ptr;
      }
    }
  
  var exceptionCaught= [];
  
  function exception_addRef(info) {
      info.add_ref();
    }
  
  var uncaughtExceptionCount=0;
  function ___cxa_begin_catch(ptr) {
      var catchInfo = new CatchInfo(ptr);
      var info = catchInfo.get_exception_info();
      if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--;
      }
      info.set_rethrown(false);
      exceptionCaught.push(catchInfo);
      exception_addRef(info);
      return catchInfo.get_exception_ptr();
    }

  var exceptionLast=0;
  
  function ___cxa_free_exception(ptr) {
      try {
        return _free(new ExceptionInfo(ptr).ptr);
      } catch(e) {
        err('exception during cxa_free_exception: ' + e);
      }
    }
  function exception_decRef(info) {
      // A rethrown exception can reach refcount 0; it must not be discarded
      // Its next handler will clear the rethrown flag and addRef it, prior to
      // final decRef and destruction here
      if (info.release_ref() && !info.get_rethrown()) {
        var destructor = info.get_destructor();
        if (destructor) {
          // In Wasm, destructors return 'this' as in ARM
          wasmTable.get(destructor)(info.excPtr);
        }
        ___cxa_free_exception(info.excPtr);
      }
    }
  function ___cxa_end_catch() {
      // Clear state flag.
      _setThrew(0);
      assert(exceptionCaught.length > 0);
      // Call destructor if one is registered then clear it.
      var catchInfo = exceptionCaught.pop();
  
      exception_decRef(catchInfo.get_exception_info());
      catchInfo.free();
      exceptionLast = 0; // XXX in decRef?
    }

  function ___resumeException(catchInfoPtr) {
      var catchInfo = new CatchInfo(catchInfoPtr);
      var ptr = catchInfo.get_base_ptr();
      if (!exceptionLast) { exceptionLast = ptr; }
      catchInfo.free();
      throw ptr;
    }
  function ___cxa_find_matching_catch_2() {
      var thrown = exceptionLast;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0); return ((0)|0);
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo();
      catchInfo.set_base_ptr(thrown);
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0); return ((catchInfo.ptr)|0);
      }
      var typeArray = Array.prototype.slice.call(arguments);
  
      // can_catch receives a **, add indirection
      var stackTop = stackSave();
      var exceptionThrowBuf = stackAlloc(4);
      HEAP32[((exceptionThrowBuf)>>2)] = thrown;
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
          var adjusted = HEAP32[((exceptionThrowBuf)>>2)];
          if (thrown !== adjusted) {
            catchInfo.set_adjusted_ptr(adjusted);
          }
          setTempRet0(caughtType); return ((catchInfo.ptr)|0);
        }
      }
      stackRestore(stackTop);
      setTempRet0(thrownType); return ((catchInfo.ptr)|0);
    }

  function ___cxa_find_matching_catch_3() {
      var thrown = exceptionLast;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0); return ((0)|0);
      }
      var info = new ExceptionInfo(thrown);
      var thrownType = info.get_type();
      var catchInfo = new CatchInfo();
      catchInfo.set_base_ptr(thrown);
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0); return ((catchInfo.ptr)|0);
      }
      var typeArray = Array.prototype.slice.call(arguments);
  
      // can_catch receives a **, add indirection
      var stackTop = stackSave();
      var exceptionThrowBuf = stackAlloc(4);
      HEAP32[((exceptionThrowBuf)>>2)] = thrown;
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < typeArray.length; i++) {
        var caughtType = typeArray[i];
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
          var adjusted = HEAP32[((exceptionThrowBuf)>>2)];
          if (thrown !== adjusted) {
            catchInfo.set_adjusted_ptr(adjusted);
          }
          setTempRet0(caughtType); return ((catchInfo.ptr)|0);
        }
      }
      stackRestore(stackTop);
      setTempRet0(thrownType); return ((catchInfo.ptr)|0);
    }


  function ___cxa_rethrow() {
      var catchInfo = exceptionCaught.pop();
      if (!catchInfo) {
        abort('no exception to throw');
      }
      var info = catchInfo.get_exception_info();
      var ptr = catchInfo.get_base_ptr();
      if (!info.get_rethrown()) {
        // Only pop if the corresponding push was through rethrow_primary_exception
        exceptionCaught.push(catchInfo);
        info.set_rethrown(true);
        info.set_caught(false);
        uncaughtExceptionCount++;
      } else {
        catchInfo.free();
      }
      exceptionLast = ptr;
      throw ptr;
    }

  function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw ptr;
    }


  function getRandomDevice() {
      if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
        // for modern web browsers
        var randomBuffer = new Uint8Array(1);
        return function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
      } else
      if (ENVIRONMENT_IS_NODE) {
        // for nodejs with or without crypto support included
        try {
          var crypto_module = require('crypto');
          // nodejs has crypto support
          return function() { return crypto_module['randomBytes'](1)[0]; };
        } catch (e) {
          // nodejs doesn't have crypto support
        }
      }
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      return function() { abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"); };
    }
  
  var PATH={splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  var PATH_FS={resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
              var bytesRead = 0;
  
              try {
                bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().includes('EOF')) bytesRead = 0;
                else throw e;
              }
  
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
            } else
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  function mmapAlloc(size) {
      var alignedSize = alignMemory(size, 65536);
      var ptr = _malloc(alignedSize);
      while (size < alignedSize) HEAP8[ptr + size++] = 0;
      return ptr;
    }
  var MEMFS={ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          if (address !== 0) {
            // We don't currently support location hints for the address of the mapping
            throw new FS.ErrnoError(28);
          }
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  var IDBFS={dbs:{},indexedDB:function() {
        if (typeof indexedDB !== 'undefined') return indexedDB;
        var ret = null;
        if (typeof window === 'object') ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        assert(ret, 'IDBFS used, but indexedDB not supported');
        return ret;
      },DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:function(mount) {
        // reuse all of the core MEMFS functionality
        return MEMFS.mount.apply(null, arguments);
      },syncfs:function(mount, populate, callback) {
        IDBFS.getLocalSet(mount, function(err, local) {
          if (err) return callback(err);
  
          IDBFS.getRemoteSet(mount, function(err, remote) {
            if (err) return callback(err);
  
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
  
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },getDB:function(name, callback) {
        // check the cache first
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
  
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return callback(e);
        }
        if (!req) {
          return callback("Unable to connect to IndexedDB");
        }
        req.onupgradeneeded = function(e) {
          var db = e.target.result;
          var transaction = e.target.transaction;
  
          var fileStore;
  
          if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
            fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
          } else {
            fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
          }
  
          if (!fileStore.indexNames.contains('timestamp')) {
            fileStore.createIndex('timestamp', 'timestamp', { unique: false });
          }
        };
        req.onsuccess = function() {
          db = req.result;
  
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },getLocalSet:function(mount, callback) {
        var entries = {};
  
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return function(p) {
            return PATH.join2(root, p);
          }
        };
  
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  
        while (check.length) {
          var path = check.pop();
          var stat;
  
          try {
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
  
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
          }
  
          entries[path] = { 'timestamp': stat.mtime };
        }
  
        return callback(null, { type: 'local', entries: entries });
      },getRemoteSet:function(mount, callback) {
        var entries = {};
  
        IDBFS.getDB(mount.mountpoint, function(err, db) {
          if (err) return callback(err);
  
          try {
            var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
            transaction.onerror = function(e) {
              callback(this.error);
              e.preventDefault();
            };
  
            var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
            var index = store.index('timestamp');
  
            index.openKeyCursor().onsuccess = function(event) {
              var cursor = event.target.result;
  
              if (!cursor) {
                return callback(null, { type: 'remote', db: db, entries: entries });
              }
  
              entries[cursor.primaryKey] = { 'timestamp': cursor.key };
  
              cursor.continue();
            };
          } catch (e) {
            return callback(e);
          }
        });
      },loadLocalEntry:function(path, callback) {
        var stat, node;
  
        try {
          var lookup = FS.lookupPath(path);
          node = lookup.node;
          stat = FS.stat(path);
        } catch (e) {
          return callback(e);
        }
  
        if (FS.isDir(stat.mode)) {
          return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode });
        } else if (FS.isFile(stat.mode)) {
          // Performance consideration: storing a normal JavaScript array to a IndexedDB is much slower than storing a typed array.
          // Therefore always convert the file contents to a typed array first before writing the data to IndexedDB.
          node.contents = MEMFS.getFileDataAsTypedArray(node);
          return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode, 'contents': node.contents });
        } else {
          return callback(new Error('node type not supported'));
        }
      },storeLocalEntry:function(path, entry, callback) {
        try {
          if (FS.isDir(entry['mode'])) {
            FS.mkdirTree(path, entry['mode']);
          } else if (FS.isFile(entry['mode'])) {
            FS.writeFile(path, entry['contents'], { canOwn: true });
          } else {
            return callback(new Error('node type not supported'));
          }
  
          FS.chmod(path, entry['mode']);
          FS.utime(path, entry['timestamp'], entry['timestamp']);
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },removeLocalEntry:function(path, callback) {
        try {
          var lookup = FS.lookupPath(path);
          var stat = FS.stat(path);
  
          if (FS.isDir(stat.mode)) {
            FS.rmdir(path);
          } else if (FS.isFile(stat.mode)) {
            FS.unlink(path);
          }
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },loadRemoteEntry:function(store, path, callback) {
        var req = store.get(path);
        req.onsuccess = function(event) { callback(null, event.target.result); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },storeRemoteEntry:function(store, path, entry, callback) {
        var req = store.put(entry, path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },removeRemoteEntry:function(store, path, callback) {
        var req = store.delete(path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function(e) {
          callback(this.error);
          e.preventDefault();
        };
      },reconcile:function(src, dst, callback) {
        var total = 0;
  
        var create = [];
        Object.keys(src.entries).forEach(function (key) {
          var e = src.entries[key];
          var e2 = dst.entries[key];
          if (!e2 || e['timestamp'].getTime() != e2['timestamp'].getTime()) {
            create.push(key);
            total++;
          }
        });
  
        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
          if (!src.entries[key]) {
            remove.push(key);
            total++;
          }
        });
  
        if (!total) {
          return callback(null);
        }
  
        var errored = false;
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  
        function done(err) {
          if (err && !errored) {
            errored = true;
            return callback(err);
          }
        };
  
        transaction.onerror = function(e) {
          done(this.error);
          e.preventDefault();
        };
  
        transaction.oncomplete = function(e) {
          if (!errored) {
            callback(null);
          }
        };
  
        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach(function (path) {
          if (dst.type === 'local') {
            IDBFS.loadRemoteEntry(store, path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeLocalEntry(path, entry, done);
            });
          } else {
            IDBFS.loadLocalEntry(path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeRemoteEntry(store, path, entry, done);
            });
          }
        });
  
        // sort paths in descending order so files are deleted before their
        // parent directories
        remove.sort().reverse().forEach(function(path) {
          if (dst.type === 'local') {
            IDBFS.removeLocalEntry(path, done);
          } else {
            IDBFS.removeRemoteEntry(store, path, done);
          }
        });
      }};
  
  var ERRNO_MESSAGES={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"};
  
  var ERRNO_CODES={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};
  var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        assert(typeof parent === 'object')
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        if (typeof type === 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          err("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          err("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          err("FS.trackingDelegate['onWriteToFile']('"+stream.path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function(stream, address, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device = getRandomDevice();
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
  
          // Try to get a maximally helpful stack trace. On Node.js, getting Error.stack
          // now ensures it shows what we want.
          if (this.stack) {
            // Define the stack property for Node.js 4, which otherwise errors on the next line.
            Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
          'IDBFS': IDBFS,
        };
      },init:function(input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          FS.forceLoadFile(node);
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },absolutePath:function() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },createFolder:function() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },createLink:function() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },joinPath:function() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },mmapAlloc:function() {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },standardizePath:function() {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      }};
  var SOCKFS={mount:function(mount) {
        // If Module['websocket'] has already been defined (e.g. for configuring
        // the subprotocol/url) use that, if not initialise it to a new object.
        Module['websocket'] = (Module['websocket'] && 
                               ('object' === typeof Module['websocket'])) ? Module['websocket'] : {};
  
        // Add the Event registration mechanism to the exported websocket configuration
        // object so we can register network callbacks from native JavaScript too.
        // For more documentation see system/include/emscripten/emscripten.h
        Module['websocket']._callbacks = {};
        Module['websocket']['on'] = /** @this{Object} */ function(event, callback) {
          if ('function' === typeof callback) {
            this._callbacks[event] = callback;
          }
          return this;
        };
  
        Module['websocket'].emit = /** @this{Object} */ function(event, param) {
          if ('function' === typeof this._callbacks[event]) {
            this._callbacks[event].call(this, param);
          }
        };
  
        // If debug is enabled register simple default logging callbacks for each Event.
  
        return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createSocket:function(family, type, protocol) {
        type &= ~526336; // Some applications may pass it; it makes no sense for a single process.
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6)); // if SOCK_STREAM, must be tcp
        }
  
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          error: null, // Used in getsockopt for SOL_SOCKET/SO_ERROR test
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
  
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
  
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: 2,
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
  
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
  
        return sock;
      },getSocket:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function() {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function(sock, addr, port) {
          var ws;
  
          if (typeof addr === 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
  
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              // runtimeConfig gets set to true if WebSocket runtime configuration is available.
              var runtimeConfig = (Module['websocket'] && ('object' === typeof Module['websocket']));
  
              // The default value is 'ws://' the replace is needed because the compiler replaces '//' comments with '#'
              // comments without checking context, so we'd end up with ws:#, the replace swaps the '#' for '//' again.
              var url = 'ws:#'.replace('#', '//');
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['url']) {
                  url = Module['websocket']['url']; // Fetch runtime WebSocket URL config.
                }
              }
  
              if (url === 'ws://' || url === 'wss://') { // Is the supplied URL config just a prefix, if so complete it.
                var parts = addr.split('/');
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join('/');
              }
  
              // Make the WebSocket subprotocol (Sec-WebSocket-Protocol) default to binary if no configuration is set.
              var subProtocols = 'binary'; // The default value is 'binary'
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['subprotocol']) {
                  subProtocols = Module['websocket']['subprotocol']; // Fetch runtime WebSocket subprotocol config.
                }
              }
  
              // The default WebSocket options
              var opts = undefined;
  
              if (subProtocols !== 'null') {
                // The regex trims the string (removes spaces at the beginning and end, then splits the string by
                // <any space>,<any space> into an Array. Whitespace removal is important for Websockify and ws.
                subProtocols = subProtocols.replace(/^ +| +$/g,"").split(/ *, */);
  
                // The node ws library API for specifying optional subprotocol is slightly different than the browser's.
                opts = ENVIRONMENT_IS_NODE ? {'protocol': subProtocols.toString()} : subProtocols;
              }
  
              // some webservers (azure) does not support subprotocol header
              if (runtimeConfig && null === Module['websocket']['subprotocol']) {
                subProtocols = 'null';
                opts = undefined;
              }
  
              // If node we use the ws library.
              var WebSocketConstructor;
              if (ENVIRONMENT_IS_NODE) {
                WebSocketConstructor = /** @type{(typeof WebSocket)} */(require('ws'));
              } else
              {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
  
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
  
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
  
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport !== 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
  
          return peer;
        },getPeer:function(sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function(sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function(sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function(sock, peer) {
          var first = true;
  
          var handleOpen = function () {
  
            Module['websocket'].emit('open', sock.stream.fd);
  
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
  
          function handleMessage(data) {
            if (typeof data === 'string') {
              var encoder = new TextEncoder(); // should be utf-8
              data = encoder.encode(data); // make a typed array from the string
            } else {
              assert(data.byteLength !== undefined); // must receive an ArrayBuffer
              if (data.byteLength == 0) {
                // An empty ArrayBuffer will emit a pseudo disconnect event
                // as recv/recvmsg will return zero which indicates that a socket
                // has performed a shutdown although the connection has not been disconnected yet.
                return;
              } else {
                data = new Uint8Array(data); // make a typed array view on the array buffer
              }
            }
  
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
  
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
            Module['websocket'].emit('message', sock.stream.fd);
          };
  
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer);  // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('close', function() {
              Module['websocket'].emit('close', sock.stream.fd);
            });
            peer.socket.on('error', function(error) {
              // Although the ws library may pass errors that may be more descriptive than
              // ECONNREFUSED they are not necessarily the expected error code e.g. 
              // ENOTFOUND on getaddrinfo seems to be node.js specific, so using ECONNREFUSED
              // is still probably the most useful thing to do.
              sock.error = ERRNO_CODES.ECONNREFUSED; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module['websocket'].emit('close', sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              // The WebSocket spec only allows a 'simple event' to be thrown on error,
              // so we only really know as much as ECONNREFUSED.
              sock.error = ERRNO_CODES.ECONNREFUSED; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
            };
          }
        },poll:function(sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
  
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
  
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
  
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
  
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
  
          return mask;
        },ioctl:function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)] = bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },close:function(sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function(sock, addr, port) {
          if (typeof sock.saddr !== 'undefined' || typeof sock.sport !== 'undefined') {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port;
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError)) throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
            }
          }
        },connect:function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
  
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
  
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr !== 'undefined' && typeof sock.dport !== 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
  
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
  
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },listen:function(sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (sock.server) {
             throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already listening
          }
          var WebSocketServer = require('ws').Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({
            host: host,
            port: sock.sport
            // TODO support backlog
          });
          Module['websocket'].emit('listen', sock.stream.fd); // Send Event with listen fd.
  
          sock.server.on('connection', function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
  
              // create a peer on the new socket
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
  
              // push to queue for accept to pick up
              sock.pending.push(newsock);
              Module['websocket'].emit('connection', newsock.stream.fd);
            } else {
              // create a peer on the listen socket so calling sendto
              // with the listen socket and an address will resolve
              // to the correct client
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
              Module['websocket'].emit('connection', sock.stream.fd);
            }
          });
          sock.server.on('closed', function() {
            Module['websocket'].emit('close', sock.stream.fd);
            sock.server = null;
          });
          sock.server.on('error', function(error) {
            // Although the ws library may pass errors that may be more descriptive than
            // ECONNREFUSED they are not necessarily the expected error code e.g. 
            // ENOTFOUND on getaddrinfo seems to be node.js specific, so using EHOSTUNREACH
            // is still probably the most useful thing to do. This error shouldn't
            // occur in a well written app as errors should get trapped in the compiled
            // app's own getaddrinfo call.
            sock.error = ERRNO_CODES.EHOSTUNREACH; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
            Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'EHOSTUNREACH: Host is unreachable']);
            // don't throw
          });
        },accept:function(listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function(sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
  
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
  
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
  
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          if (ArrayBuffer.isView(buffer)) {
            offset += buffer.byteOffset;
            buffer = buffer.buffer;
          }
  
          var data;
            data = buffer.slice(offset, offset + length);
  
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
  
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },recvmsg:function(sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
  
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
  
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              }
              else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              else {
                // else, our socket is in a valid state but truly has nothing available
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
  
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
  
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
  
          return res;
        }}};
  function getSocketFromFD(fd) {
      var socket = SOCKFS.getSocket(fd);
      if (!socket) throw new FS.ErrnoError(8);
      return socket;
    }
  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    }
  var Sockets={BUFFER_SIZE:10240,MAX_BUFFER_SIZE:10485760,nextFd:1,fds:{},nextport:1,maxport:65535,peer:null,connections:{},portmap:{},localAddr:4261412874,addrPool:[33554442,50331658,67108874,83886090,100663306,117440522,134217738,150994954,167772170,184549386,201326602,218103818,234881034]};
  
  function inetPton4(str) {
      var b = str.split('.');
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp)) return null;
        b[i] = tmp;
      }
      return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
    }
  
  /** @suppress {checkTypes} */
  function jstoi_q(str) {
      return parseInt(str);
    }
  function inetPton6(str) {
      var words;
      var w, offset, z, i;
      /* http://home.deds.nl/~aeron/regex/ */
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      // Z placeholder to keep track of zeros when splitting the string on ":"
      if (str.startsWith("::")) {
        str = str.replace("::", "Z:"); // leading zeros case
      } else {
        str = str.replace("::", ":Z:");
      }
  
      if (str.indexOf(".") > 0) {
        // parse IPv4 embedded stress
        str = str.replace(new RegExp('[.]', 'g'), ":");
        words = str.split(":");
        words[words.length-4] = jstoi_q(words[words.length-4]) + jstoi_q(words[words.length-3])*256;
        words[words.length-3] = jstoi_q(words[words.length-2]) + jstoi_q(words[words.length-1])*256;
        words = words.slice(0, words.length-2);
      } else {
        words = str.split(":");
      }
  
      offset = 0; z = 0;
      for (w=0; w < words.length; w++) {
        if (typeof words[w] === 'string') {
          if (words[w] === 'Z') {
            // compressed zeros - write appropriate number of zero words
            for (z = 0; z < (8 - words.length+1); z++) {
              parts[w+z] = 0;
            }
            offset = z-1;
          } else {
            // parse hex to field to 16-bit value and write it in network byte-order
            parts[w+offset] = _htons(parseInt(words[w],16));
          }
        } else {
          // parsed IPv4 words
          parts[w+offset] = words[w];
        }
      }
      return [
        (parts[1] << 16) | parts[0],
        (parts[3] << 16) | parts[2],
        (parts[5] << 16) | parts[4],
        (parts[7] << 16) | parts[6]
      ];
    }
  function writeSockaddr(sa, family, addr, port, addrlen) {
      switch (family) {
        case 2:
          addr = inetPton4(addr);
          if (addrlen) {
            HEAP32[((addrlen)>>2)] = 16;
          }
          HEAP16[((sa)>>1)] = family;
          HEAP32[(((sa)+(4))>>2)] = addr;
          HEAP16[(((sa)+(2))>>1)] = _htons(port);
          /* Use makeSetValue instead of memset to avoid adding memset dependency for all users of writeSockaddr. */
          
          (tempI64 = [0>>>0,(tempDouble=0,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((sa)+(8))>>2)] = tempI64[0],HEAP32[(((sa)+(12))>>2)] = tempI64[1]);
          break;
        case 10:
          addr = inetPton6(addr);
          if (addrlen) {
            HEAP32[((addrlen)>>2)] = 28;
          }
          HEAP32[((sa)>>2)] = family;
          HEAP32[(((sa)+(8))>>2)] = addr[0];
          HEAP32[(((sa)+(12))>>2)] = addr[1];
          HEAP32[(((sa)+(16))>>2)] = addr[2];
          HEAP32[(((sa)+(20))>>2)] = addr[3];
          HEAP16[(((sa)+(2))>>1)] = _htons(port);
          HEAP32[(((sa)+(4))>>2)] = 0;
          HEAP32[(((sa)+(24))>>2)] = 0;
          break;
        default:
          return 5;
      }
      return 0;
    }
  
  var DNS={address_map:{id:1,addrs:{},names:{}},lookup_name:function (name) {
        // If the name is already a valid ipv4 / ipv6 address, don't generate a fake one.
        var res = inetPton4(name);
        if (res !== null) {
          return name;
        }
        res = inetPton6(name);
        if (res !== null) {
          return name;
        }
  
        // See if this name is already mapped.
        var addr;
  
        if (DNS.address_map.addrs[name]) {
          addr = DNS.address_map.addrs[name];
        } else {
          var id = DNS.address_map.id++;
          assert(id < 65535, 'exceeded max address mappings of 65535');
  
          addr = '172.29.' + (id & 0xff) + '.' + (id & 0xff00);
  
          DNS.address_map.names[addr] = name;
          DNS.address_map.addrs[name] = addr;
        }
  
        return addr;
      },lookup_addr:function (addr) {
        if (DNS.address_map.names[addr]) {
          return DNS.address_map.names[addr];
        }
  
        return null;
      }};
  
  var SYSCALLS={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path, allowEmpty) {
        if (path[0] === '/') {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = FS.getStream(dirfd);
          if (!dirstream) throw new FS.ErrnoError(8);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = 0;
        HEAP32[(((buf)+(8))>>2)] = stat.ino;
        HEAP32[(((buf)+(12))>>2)] = stat.mode;
        HEAP32[(((buf)+(16))>>2)] = stat.nlink;
        HEAP32[(((buf)+(20))>>2)] = stat.uid;
        HEAP32[(((buf)+(24))>>2)] = stat.gid;
        HEAP32[(((buf)+(28))>>2)] = stat.rdev;
        HEAP32[(((buf)+(32))>>2)] = 0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(48))>>2)] = 4096;
        HEAP32[(((buf)+(52))>>2)] = stat.blocks;
        HEAP32[(((buf)+(56))>>2)] = (stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)] = 0;
        HEAP32[(((buf)+(64))>>2)] = (stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)] = 0;
        HEAP32[(((buf)+(72))>>2)] = (stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)] = 0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)] = tempI64[0],HEAP32[(((buf)+(84))>>2)] = tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      }};
  function ___sys_accept4(fd, addr, addrlen, flags) {try {
  
      var sock = getSocketFromFD(fd);
      var newsock = sock.sock_ops.accept(sock);
      if (addr) {
        var errno = writeSockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport, addrlen);
        assert(!errno);
      }
      return newsock.stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_access(path, amode) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doAccess(path, amode);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function inetNtop4(addr) {
      return (addr & 0xff) + '.' + ((addr >> 8) & 0xff) + '.' + ((addr >> 16) & 0xff) + '.' + ((addr >> 24) & 0xff)
    }
  
  function inetNtop6(ints) {
      //  ref:  http://www.ietf.org/rfc/rfc2373.txt - section 2.5.4
      //  Format for IPv4 compatible and mapped  128-bit IPv6 Addresses
      //  128-bits are split into eight 16-bit words
      //  stored in network byte order (big-endian)
      //  |                80 bits               | 16 |      32 bits        |
      //  +-----------------------------------------------------------------+
      //  |               10 bytes               |  2 |      4 bytes        |
      //  +--------------------------------------+--------------------------+
      //  +               5 words                |  1 |      2 words        |
      //  +--------------------------------------+--------------------------+
      //  |0000..............................0000|0000|    IPv4 ADDRESS     | (compatible)
      //  +--------------------------------------+----+---------------------+
      //  |0000..............................0000|FFFF|    IPv4 ADDRESS     | (mapped)
      //  +--------------------------------------+----+---------------------+
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [
        ints[0] & 0xffff,
        (ints[0] >> 16),
        ints[1] & 0xffff,
        (ints[1] >> 16),
        ints[2] & 0xffff,
        (ints[2] >> 16),
        ints[3] & 0xffff,
        (ints[3] >> 16)
      ];
  
      // Handle IPv4-compatible, IPv4-mapped, loopback and any/unspecified addresses
  
      var hasipv4 = true;
      var v4part = "";
      // check if the 10 high-order bytes are all zeros (first 5 words)
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) { hasipv4 = false; break; }
      }
  
      if (hasipv4) {
        // low-order 32-bits store an IPv4 address (bytes 13 to 16) (last 2 words)
        v4part = inetNtop4(parts[6] | (parts[7] << 16));
        // IPv4-mapped IPv6 address if 16-bit value (bytes 11 and 12) == 0xFFFF (6th word)
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        // IPv4-compatible IPv6 address if 16-bit value (bytes 11 and 12) == 0x0000 (6th word)
        if (parts[5] === 0) {
          str = "::";
          //special case IPv6 addresses
          if (v4part === "0.0.0.0") v4part = ""; // any/unspecified address
          if (v4part === "0.0.0.1") v4part = "1";// loopback address
          str += v4part;
          return str;
        }
      }
  
      // Handle all other IPv6 addresses
  
      // first run to find the longest contiguous zero words
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
  
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          // compress contiguous zeros - to produce "::"
          if (parts[word] === 0 && word >= zstart && word < (zstart + longest) ) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0) str += ":"; //leading zeros case
            }
            continue;
          }
        }
        // converts 16-bit words from big-endian to little-endian before converting to hex string
        str += Number(_ntohs(parts[word] & 0xffff)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
  function readSockaddr(sa, salen) {
      // family / port offsets are common to both sockaddr_in and sockaddr_in6
      var family = HEAP16[((sa)>>1)];
      var port = _ntohs(HEAPU16[(((sa)+(2))>>1)]);
      var addr;
  
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[(((sa)+(4))>>2)];
          addr = inetNtop4(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [
            HEAP32[(((sa)+(8))>>2)],
            HEAP32[(((sa)+(12))>>2)],
            HEAP32[(((sa)+(16))>>2)],
            HEAP32[(((sa)+(20))>>2)]
          ];
          addr = inetNtop6(addr);
          break;
        default:
          return { errno: 5 };
      }
  
      return { family: family, addr: addr, port: port };
    }
  function getSocketAddress(addrp, addrlen, allowNull) {
      if (allowNull && addrp === 0) return null;
      var info = readSockaddr(addrp, addrlen);
      if (info.errno) throw new FS.ErrnoError(info.errno);
      info.addr = DNS.lookup_addr(info.addr) || info.addr;
      return info;
    }
  function ___sys_bind(fd, addr, addrlen) {try {
  
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.bind(sock, info.addr, info.port);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_chmod(path, mode) {try {
  
      path = SYSCALLS.getStr(path);
      FS.chmod(path, mode);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_connect(fd, addr, addrlen) {try {
  
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.connect(sock, info.addr, info.port);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_fadvise64_64(fd, offset, len, advice) {
      return 0; // your advice is important to us (but we can't use it)
    }

  function ___sys_fchmod(fd, mode) {try {
  
      FS.fchmod(fd, mode);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_fcntl64(fd, cmd, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        /* case 12: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 13:
        case 14:
        /* case 13: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 14: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_fstat64(fd, buf) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return SYSCALLS.doStat(FS.stat, stream.path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_fstatfs64(fd, size, buf) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return ___sys_statfs64(0, size, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_ftruncate64(fd, zero, low, high) {try {
  
      var length = SYSCALLS.get64(low, high);
      FS.ftruncate(fd, length);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_getcwd(buf, size) {try {
  
      if (size === 0) return -28;
      var cwd = FS.cwd();
      var cwdLengthInBytes = lengthBytesUTF8(cwd);
      if (size < cwdLengthInBytes + 1) return -68;
      stringToUTF8(cwd, buf, size);
      return buf;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_getdents64(fd, dirp, count) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd)
      if (!stream.getdents) {
        stream.getdents = FS.readdir(stream.path);
      }
  
      var struct_size = 280;
      var pos = 0;
      var off = FS.llseek(stream, 0, 1);
  
      var idx = Math.floor(off / struct_size);
  
      while (idx < stream.getdents.length && pos + struct_size <= count) {
        var id;
        var type;
        var name = stream.getdents[idx];
        if (name[0] === '.') {
          id = 1;
          type = 4; // DT_DIR
        } else {
          var child = FS.lookupNode(stream.node, name);
          id = child.id;
          type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
                 FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
                 FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
                 8;                             // DT_REG, regular file.
        }
        (tempI64 = [id>>>0,(tempDouble=id,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((dirp + pos)>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(4))>>2)] = tempI64[1]);
        (tempI64 = [(idx + 1) * struct_size>>>0,(tempDouble=(idx + 1) * struct_size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((dirp + pos)+(8))>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(12))>>2)] = tempI64[1]);
        HEAP16[(((dirp + pos)+(16))>>1)] = 280;
        HEAP8[(((dirp + pos)+(18))>>0)] = type;
        stringToUTF8(name, dirp + pos + 19, 256);
        pos += struct_size;
        idx += 1;
      }
      FS.llseek(stream, idx * struct_size, 0);
      return pos;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_getpid() {
      return 42;
    }

  function ___sys_ioctl(fd, op, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_listen(fd, backlog) {try {
  
      var sock = getSocketFromFD(fd);
      sock.sock_ops.listen(sock, backlog);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_lstat64(path, buf) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.lstat, path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_mkdir(path, mode) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doMkdir(path, mode);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function syscallMmap2(addr, len, prot, flags, fd, off) {
      off <<= 12; // undo pgoffset
      var ptr;
      var allocated = false;
  
      // addr argument must be page aligned if MAP_FIXED flag is set.
      if ((flags & 16) !== 0 && (addr % 65536) !== 0) {
        return -28;
      }
  
      // MAP_ANONYMOUS (aka MAP_ANON) isn't actually defined by POSIX spec,
      // but it is widely used way to allocate memory pages on Linux, BSD and Mac.
      // In this case fd argument is ignored.
      if ((flags & 32) !== 0) {
        ptr = _memalign(65536, len);
        if (!ptr) return -48;
        _memset(ptr, 0, len);
        allocated = true;
      } else {
        var info = FS.getStream(fd);
        if (!info) return -8;
        var res = FS.mmap(info, addr, len, off, prot, flags);
        ptr = res.ptr;
        allocated = res.allocated;
      }
      SYSCALLS.mappings[ptr] = { malloc: ptr, len: len, allocated: allocated, fd: fd, prot: prot, flags: flags, offset: off };
      return ptr;
    }
  function ___sys_mmap2(addr, len, prot, flags, fd, off) {try {
  
      return syscallMmap2(addr, len, prot, flags, fd, off);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function syscallMunmap(addr, len) {
      if ((addr | 0) === -1 || len === 0) {
        return -28;
      }
      // TODO: support unmmap'ing parts of allocations
      var info = SYSCALLS.mappings[addr];
      if (!info) return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        if (stream) {
          if (info.prot & 2) {
            SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
          }
          FS.munmap(stream);
        }
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }
  function ___sys_munmap(addr, len) {try {
  
      return syscallMunmap(addr, len);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_open(path, flags, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var pathname = SYSCALLS.getStr(path);
      var mode = varargs ? SYSCALLS.get() : 0;
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_poll(fds, nfds, timeout) {try {
  
      var nonzero = 0;
      for (var i = 0; i < nfds; i++) {
        var pollfd = fds + 8 * i;
        var fd = HEAP32[((pollfd)>>2)];
        var events = HEAP16[(((pollfd)+(4))>>1)];
        var mask = 32;
        var stream = FS.getStream(fd);
        if (stream) {
          mask = SYSCALLS.DEFAULT_POLLMASK;
          if (stream.stream_ops.poll) {
            mask = stream.stream_ops.poll(stream);
          }
        }
        mask &= events | 8 | 16;
        if (mask) nonzero++;
        HEAP16[(((pollfd)+(6))>>1)] = mask;
      }
      return nonzero;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_readlink(path, buf, bufsize) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doReadlink(path, buf, bufsize);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_recvfrom(fd, buf, len, flags, addr, addrlen) {try {
  
      var sock = getSocketFromFD(fd);
      var msg = sock.sock_ops.recvmsg(sock, len);
      if (!msg) return 0; // socket is closed
      if (addr) {
        var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
        assert(!errno);
      }
      HEAPU8.set(msg.buffer, buf);
      return msg.buffer.byteLength;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_sendto(fd, message, length, flags, addr, addr_len) {try {
  
      var sock = getSocketFromFD(fd);
      var dest = getSocketAddress(addr, addr_len, true);
      if (!dest) {
        // send, no address provided
        return FS.write(sock.stream, HEAP8,message, length);
      } else {
        // sendto an address
        return sock.sock_ops.sendmsg(sock, HEAP8,message, length, dest.addr, dest.port);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_setsockopt(fd) {try {
  
      return -50; // The option is unknown at the level indicated.
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_shutdown(fd, how) {try {
  
      getSocketFromFD(fd);
      return -52; // unsupported feature
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_socket(domain, type, protocol) {try {
  
      var sock = SOCKFS.createSocket(domain, type, protocol);
      assert(sock.stream.fd < 64); // XXX ? select() assumes socket fd values are in 0..63
      return sock.stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_stat64(path, buf) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_unlink(path) {try {
  
      path = SYSCALLS.getStr(path);
      FS.unlink(path);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function _abort() {
      abort();
    }

  function _emscripten_get_now_res() { // return resolution of get_now, in nanoseconds
      if (ENVIRONMENT_IS_NODE) {
        return 1; // nanoseconds
      } else
      if (typeof dateNow !== 'undefined') {
        return 1000; // microseconds (1/1000 of a millisecond)
      } else
      // Modern environment where performance.now() is supported:
      return 1000; // microseconds (1/1000 of a millisecond)
    }
  
  var _emscripten_get_now_is_monotonic=true;;
  function _clock_getres(clk_id, res) {
      // int clock_getres(clockid_t clk_id, struct timespec *res);
      var nsec;
      if (clk_id === 0) {
        nsec = 1000 * 1000; // educated guess that it's milliseconds
      } else if (clk_id === 1 && _emscripten_get_now_is_monotonic) {
        nsec = _emscripten_get_now_res();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[((res)>>2)] = (nsec/1000000000)|0;
      HEAP32[(((res)+(4))>>2)] = nsec // resolution is nanoseconds
      return 0;
    }

  var _emscripten_get_now;if (ENVIRONMENT_IS_NODE) {
    _emscripten_get_now = function() {
      var t = process['hrtime']();
      return t[0] * 1e3 + t[1] / 1e6;
    };
  } else if (typeof dateNow !== 'undefined') {
    _emscripten_get_now = dateNow;
  } else _emscripten_get_now = function() { return performance.now(); }
  ;
  function _clock_gettime(clk_id, tp) {
      // int clock_gettime(clockid_t clk_id, struct timespec *tp);
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[((tp)>>2)] = (now/1000)|0; // seconds
      HEAP32[(((tp)+(4))>>2)] = ((now % 1000)*1000*1000)|0; // nanoseconds
      return 0;
    }

  function _difftime(time1, time0) {
      return time1 - time0;
    }

  function _dladdr(address, info) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }

  function _dlclose(handle) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }

  var DOTNETENTROPY={batchedQuotaMax:65536,getBatchedRandomValues:function (buffer, bufferLength) {
              // for modern web browsers
              // map the work array to the memory buffer passed with the length
              for (var i = 0; i < bufferLength; i += this.batchedQuotaMax) {
                  var view = new Uint8Array(Module.HEAPU8.buffer, buffer + i, Math.min(bufferLength - i, this.batchedQuotaMax));
                  crypto.getRandomValues(view)
              }
          }};
  function _dotnet_browser_entropy(buffer, bufferLength) {
          // check that we have crypto available
          if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
              DOTNETENTROPY.getBatchedRandomValues(buffer, bufferLength)
              return 0;
          } else {
              // we couldn't find a proper implementation, as Math.random() is not suitable
              // instead of aborting here we will return and let managed code handle the message
              return -1;
          }
      }

  function _emscripten_set_main_loop_timing(mode, value) {
      Browser.mainLoop.timingMode = mode;
      Browser.mainLoop.timingValue = value;
  
      if (!Browser.mainLoop.func) {
        console.error('emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.');
        return 1; // Return non-zero on failure, can't set timing mode when there is no main loop.
      }
  
      if (!Browser.mainLoop.running) {
        
        Browser.mainLoop.running = true;
      }
      if (mode == 0 /*EM_TIMING_SETTIMEOUT*/) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
          var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now())|0;
          setTimeout(Browser.mainLoop.runner, timeUntilNextTick); // doing this each time means that on exception, we stop
        };
        Browser.mainLoop.method = 'timeout';
      } else if (mode == 1 /*EM_TIMING_RAF*/) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'rAF';
      } else if (mode == 2 /*EM_TIMING_SETIMMEDIATE*/) {
        if (typeof setImmediate === 'undefined') {
          // Emulate setImmediate. (note: not a complete polyfill, we don't emulate clearImmediate() to keep code size to minimum, since not needed)
          var setImmediates = [];
          var emscriptenMainLoopMessageId = 'setimmediate';
          var Browser_setImmediate_messageHandler = function(event) {
            // When called in current thread or Worker, the main loop ID is structured slightly different to accommodate for --proxy-to-worker runtime listening to Worker events,
            // so check for both cases.
            if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
              event.stopPropagation();
              setImmediates.shift()();
            }
          }
          addEventListener("message", Browser_setImmediate_messageHandler, true);
          setImmediate = /** @type{function(function(): ?, ...?): number} */(function Browser_emulated_setImmediate(func) {
            setImmediates.push(func);
            if (ENVIRONMENT_IS_WORKER) {
              if (Module['setImmediates'] === undefined) Module['setImmediates'] = [];
              Module['setImmediates'].push(func);
              postMessage({target: emscriptenMainLoopMessageId}); // In --proxy-to-worker, route the message via proxyClient.js
            } else postMessage(emscriptenMainLoopMessageId, "*"); // On the main thread, can just send the message to itself.
          })
        }
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
          setImmediate(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'immediate';
      }
      return 0;
    }
  
  function runtimeKeepalivePush() {
      runtimeKeepaliveCounter += 1;
    }
  
  function _exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      exit(status);
    }
  function maybeExit() {
      if (!keepRuntimeAlive()) {
        try {
          _exit(EXITSTATUS);
        } catch (e) {
          if (e instanceof ExitStatus) {
            return;
          }
          throw e;
        }
      }
    }
  function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
      assert(!Browser.mainLoop.func, 'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.');
  
      Browser.mainLoop.func = browserIterationFunc;
      Browser.mainLoop.arg = arg;
  
      var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
      function checkIsRunning() {
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
          
          maybeExit();
          return false;
        }
        return true;
      }
  
      // We create the loop runner here but it is not actually running until
      // _emscripten_set_main_loop_timing is called (which might happen a
      // later time).  This member signifies that the current runner has not
      // yet been started so that we can call runtimeKeepalivePush when it
      // gets it timing set for the first time.
      Browser.mainLoop.running = false;
      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = Browser.mainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (Browser.mainLoop.remainingBlockers) {
            var remaining = Browser.mainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              Browser.mainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              Browser.mainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms'); //, left: ' + Browser.mainLoop.remainingBlockers);
          Browser.mainLoop.updateStatus();
  
          // catches pause/resume main loop from blocker execution
          if (!checkIsRunning()) return;
  
          setTimeout(Browser.mainLoop.runner, 0);
          return;
        }
  
        // catch pauses from non-main loop sources
        if (!checkIsRunning()) return;
  
        // Implement very basic swap interval control
        Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
        if (Browser.mainLoop.timingMode == 1/*EM_TIMING_RAF*/ && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
          // Not the scheduled time to render this frame - skip.
          Browser.mainLoop.scheduler();
          return;
        } else if (Browser.mainLoop.timingMode == 0/*EM_TIMING_SETTIMEOUT*/) {
          Browser.mainLoop.tickStartTime = _emscripten_get_now();
        }
  
        // Signal GL rendering layer that processing of a new frame is about to start. This helps it optimize
        // VBO double-buffering and reduce GPU stalls.
  
        if (Browser.mainLoop.method === 'timeout' && Module.ctx) {
          warnOnce('Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!');
          Browser.mainLoop.method = ''; // just warn once per call to set main loop
        }
  
        Browser.mainLoop.runIter(browserIterationFunc);
  
        checkStackCookie();
  
        // catch pauses from the main loop itself
        if (!checkIsRunning()) return;
  
        // Queue new audio data. This is important to be right after the main loop invocation, so that we will immediately be able
        // to queue the newest produced audio samples.
        // TODO: Consider adding pre- and post- rAF callbacks so that GL.newRenderingFrameStarted() and SDL.audio.queueNewAudioData()
        //       do not need to be hardcoded into this function, but can be more generic.
        if (typeof SDL === 'object' && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
  
        Browser.mainLoop.scheduler();
      }
  
      if (!noSetTiming) {
        if (fps && fps > 0) _emscripten_set_main_loop_timing(0/*EM_TIMING_SETTIMEOUT*/, 1000.0 / fps);
        else _emscripten_set_main_loop_timing(1/*EM_TIMING_RAF*/, 1); // Do rAF by rendering each frame (no decimating)
  
        Browser.mainLoop.scheduler();
      }
  
      if (simulateInfiniteLoop) {
        throw 'unwind';
      }
    }
  
  function callUserCallback(func, synchronous) {
      if (ABORT) {
        err('user callback triggered after application aborted.  Ignoring.');
        return;
      }
      // For synchronous calls, let any exceptions propagate, and don't let the runtime exit.
      if (synchronous) {
        func();
        return;
      }
      try {
        func();
      } catch (e) {
        if (e instanceof ExitStatus) {
          return;
        } else if (e !== 'unwind') {
          // And actual unexpected user-exectpion occured
          if (e && typeof e === 'object' && e.stack) err('exception thrown: ' + [e, e.stack]);
          throw e;
        }
      }
    }
  
  function runtimeKeepalivePop() {
      assert(runtimeKeepaliveCounter > 0);
      runtimeKeepaliveCounter -= 1;
    }
  var Browser={mainLoop:{running:false,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function() {
          Browser.mainLoop.scheduler = null;
          // Incrementing this signals the previous main loop that it's now become old, and it must return.
          Browser.mainLoop.currentlyRunningMainloop++;
        },resume:function() {
          Browser.mainLoop.currentlyRunningMainloop++;
          var timingMode = Browser.mainLoop.timingMode;
          var timingValue = Browser.mainLoop.timingValue;
          var func = Browser.mainLoop.func;
          Browser.mainLoop.func = null;
          // do not set timing and call scheduler, we will do it on the next lines
          setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
          _emscripten_set_main_loop_timing(timingMode, timingValue);
          Browser.mainLoop.scheduler();
        },updateStatus:function() {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        },runIter:function(func) {
          if (ABORT) return;
          if (Module['preMainLoop']) {
            var preRet = Module['preMainLoop']();
            if (preRet === false) {
              return; // |return false| skips a frame
            }
          }
          callUserCallback(func);
          if (Module['postMainLoop']) Module['postMainLoop']();
        }},isFullscreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function() {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
  
        if (Browser.initted) return;
        Browser.initted = true;
  
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch(e) {
          Browser.hasBlobConstructor = false;
          console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
          console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          Module.noImageDecoding = true;
        }
  
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
  
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) { // Safari bug #118630
                // Safari's Blob can only take an ArrayBuffer
                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
              }
            } catch(e) {
              warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          assert(typeof url == 'string', 'createObjectURL must return a url as a string');
          var img = new Image();
          img.onload = function img_onload() {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Module["preloadedImages"][name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = function img_onerror(event) {
            console.log('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
  
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = new Audio(); // empty shim
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch(e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
            assert(typeof url == 'string', 'createObjectURL must return a url as a string');
            var audio = new Audio();
            audio.addEventListener('canplaythrough', function() { finish(audio) }, false); // use addEventListener due to chromium bug 124926
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            Browser.safeSetTimeout(function() {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
  
        // Canvas event setup
  
        function pointerLockChange() {
          Browser.pointerLock = document['pointerLockElement'] === Module['canvas'] ||
                                document['mozPointerLockElement'] === Module['canvas'] ||
                                document['webkitPointerLockElement'] === Module['canvas'] ||
                                document['msPointerLockElement'] === Module['canvas'];
        }
        var canvas = Module['canvas'];
        if (canvas) {
          // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
          // Module['forcedAspectRatio'] = 4 / 3;
  
          canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                      canvas['mozRequestPointerLock'] ||
                                      canvas['webkitRequestPointerLock'] ||
                                      canvas['msRequestPointerLock'] ||
                                      function(){};
          canvas.exitPointerLock = document['exitPointerLock'] ||
                                   document['mozExitPointerLock'] ||
                                   document['webkitExitPointerLock'] ||
                                   document['msExitPointerLock'] ||
                                   function(){}; // no-op if function does not exist
          canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
  
          document.addEventListener('pointerlockchange', pointerLockChange, false);
          document.addEventListener('mozpointerlockchange', pointerLockChange, false);
          document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
          document.addEventListener('mspointerlockchange', pointerLockChange, false);
  
          if (Module['elementPointerLock']) {
            canvas.addEventListener("click", function(ev) {
              if (!Browser.pointerLock && Module['canvas'].requestPointerLock) {
                Module['canvas'].requestPointerLock();
                ev.preventDefault();
              }
            }, false);
          }
        }
      },createContext:function(canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx; // no need to recreate GL context if it's already been created for this canvas.
  
        var ctx;
        var contextHandle;
        if (useWebGL) {
          // For GLES2/desktop GL compatibility, adjust a few defaults to be different to WebGL defaults, so that they align better with the desktop defaults.
          var contextAttributes = {
            antialias: false,
            alpha: false,
            majorVersion: 2,
          };
  
          if (webGLContextAttributes) {
            for (var attribute in webGLContextAttributes) {
              contextAttributes[attribute] = webGLContextAttributes[attribute];
            }
          }
  
          // This check of existence of GL is here to satisfy Closure compiler, which yells if variable GL is referenced below but GL object is not
          // actually compiled in because application is not doing any GL operations. TODO: Ideally if GL is not being used, this function
          // Browser.createContext() should not even be emitted.
          if (typeof GL !== 'undefined') {
            contextHandle = GL.createContext(canvas, contextAttributes);
            if (contextHandle) {
              ctx = GL.getContext(contextHandle).GLctx;
            }
          }
        } else {
          ctx = canvas.getContext('2d');
        }
  
        if (!ctx) return null;
  
        if (setInModule) {
          if (!useWebGL) assert(typeof GLctx === 'undefined', 'cannot set in module if GLctx is used, but we are a non-GL context that would replace it');
  
          Module.ctx = ctx;
          if (useWebGL) GL.makeContextCurrent(contextHandle);
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
          Browser.init();
        }
        return ctx;
      },destroyContext:function(canvas, useWebGL, setInModule) {},fullscreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullscreen:function(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Module['canvas'];
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if ((document['fullscreenElement'] || document['mozFullScreenElement'] ||
               document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
               document['webkitCurrentFullScreenElement']) === canvasContainer) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          } else {
            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
  
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullscreen);
          if (Module['onFullscreen']) Module['onFullscreen'](Browser.isFullscreen);
        }
  
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullscreenChange, false);
          document.addEventListener('mozfullscreenchange', fullscreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullscreenChange, false);
          document.addEventListener('MSFullscreenChange', fullscreenChange, false);
        }
  
        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
  
        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        canvasContainer.requestFullscreen = canvasContainer['requestFullscreen'] ||
                                            canvasContainer['mozRequestFullScreen'] ||
                                            canvasContainer['msRequestFullscreen'] ||
                                           (canvasContainer['webkitRequestFullscreen'] ? function() { canvasContainer['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null) ||
                                           (canvasContainer['webkitRequestFullScreen'] ? function() { canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null);
  
        canvasContainer.requestFullscreen();
      },requestFullScreen:function() {
        abort('Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)');
      },exitFullscreen:function() {
        // This is workaround for chrome. Trying to exit from fullscreen
        // not in fullscreen state will cause "TypeError: Document not active"
        // in chrome. See https://github.com/emscripten-core/emscripten/pull/8236
        if (!Browser.isFullscreen) {
          return false;
        }
  
        var CFS = document['exitFullscreen'] ||
                  document['cancelFullScreen'] ||
                  document['mozCancelFullScreen'] ||
                  document['msExitFullscreen'] ||
                  document['webkitCancelFullScreen'] ||
            (function() {});
        CFS.apply(document, []);
        return true;
      },nextRAF:0,fakeRequestAnimationFrame:function(func) {
        // try to keep 60fps between calls to here
        var now = Date.now();
        if (Browser.nextRAF === 0) {
          Browser.nextRAF = now + 1000/60;
        } else {
          while (now + 2 >= Browser.nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
            Browser.nextRAF += 1000/60;
          }
        }
        var delay = Math.max(Browser.nextRAF - now, 0);
        setTimeout(func, delay);
      },requestAnimationFrame:function(func) {
        if (typeof requestAnimationFrame === 'function') {
          requestAnimationFrame(func);
          return;
        }
        var RAF = Browser.fakeRequestAnimationFrame;
        RAF(func);
      },safeRequestAnimationFrame:function(func) {
        
        return Browser.requestAnimationFrame(function() {
          
          callUserCallback(func);
        });
      },safeSetTimeout:function(func, timeout) {
        
        return setTimeout(function() {
          
          callUserCallback(func);
        }, timeout);
      },getMimetype:function(name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.')+1)];
      },getUserMedia:function(func) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },getMovementX:function(event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },getMovementY:function(event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },getMouseWheelDelta:function(event) {
        var delta = 0;
        switch (event.type) {
          case 'DOMMouseScroll':
            // 3 lines make up a step
            delta = event.detail / 3;
            break;
          case 'mousewheel':
            // 120 units make up a step
            delta = event.wheelDelta / 120;
            break;
          case 'wheel':
            delta = event.deltaY
            switch (event.deltaMode) {
              case 0:
                // DOM_DELTA_PIXEL: 100 pixels make up a step
                delta /= 100;
                break;
              case 1:
                // DOM_DELTA_LINE: 3 lines make up a step
                delta /= 3;
                break;
              case 2:
                // DOM_DELTA_PAGE: A page makes up 80 steps
                delta *= 80;
                break;
              default:
                throw 'unrecognized mouse wheel delta mode: ' + event.deltaMode;
            }
            break;
          default:
            throw 'unrecognized mouse wheel event: ' + event.type;
        }
        return delta;
      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
  
          // check if SDL is available
          if (typeof SDL != "undefined") {
            Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
            Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
            // just add the mouse delta to the current absolut mouse position
            // FIXME: ideally this should be clamped against the canvas size and zero
            Browser.mouseX += Browser.mouseMovementX;
            Browser.mouseY += Browser.mouseMovementY;
          }
        } else {
          // Otherwise, calculate the movement based on the changes
          // in the coordinates.
          var rect = Module["canvas"].getBoundingClientRect();
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
  
          // Neither .scrollX or .pageXOffset are defined in a spec, but
          // we prefer .scrollX because it is currently in a spec draft.
          // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
          var scrollX = ((typeof window.scrollX !== 'undefined') ? window.scrollX : window.pageXOffset);
          var scrollY = ((typeof window.scrollY !== 'undefined') ? window.scrollY : window.pageYOffset);
          // If this assert lands, it's likely because the browser doesn't support scrollX or pageXOffset
          // and we have no viable fallback.
          assert((typeof scrollX !== 'undefined') && (typeof scrollY !== 'undefined'), 'Unable to retrieve scroll position, mouse positions likely broken.');
  
          if (event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchmove') {
            var touch = event.touch;
            if (touch === undefined) {
              return; // the "touch" property is only defined in SDL
  
            }
            var adjustedX = touch.pageX - (scrollX + rect.left);
            var adjustedY = touch.pageY - (scrollY + rect.top);
  
            adjustedX = adjustedX * (cw / rect.width);
            adjustedY = adjustedY * (ch / rect.height);
  
            var coords = { x: adjustedX, y: adjustedY };
  
            if (event.type === 'touchstart') {
              Browser.lastTouches[touch.identifier] = coords;
              Browser.touches[touch.identifier] = coords;
            } else if (event.type === 'touchend' || event.type === 'touchmove') {
              var last = Browser.touches[touch.identifier];
              if (!last) last = coords;
              Browser.lastTouches[touch.identifier] = last;
              Browser.touches[touch.identifier] = coords;
            }
            return;
          }
  
          var x = event.pageX - (scrollX + rect.left);
          var y = event.pageY - (scrollY + rect.top);
  
          // the canvas might be CSS-scaled compared to its backbuffer;
          // SDL-using content will want mouse coordinates in terms
          // of backbuffer units.
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
  
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },asyncLoad:function(url, onload, onerror, noRunDep) {
        var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
        readAsync(url, function(arrayBuffer) {
          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
          onload(new Uint8Array(arrayBuffer));
          if (dep) removeRunDependency(dep);
        }, function(event) {
          if (onerror) {
            onerror();
          } else {
            throw 'Loading data file "' + url + '" failed.';
          }
        });
        if (dep) addRunDependency(dep);
      },resizeListeners:[],updateResizeListeners:function() {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function(listener) {
          listener(canvas.width, canvas.height);
        });
      },setCanvasSize:function(width, height, noUpdates) {
        var canvas = Module['canvas'];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags
        }
        Browser.updateCanvasDimensions(Module['canvas']);
        Browser.updateResizeListeners();
      },setWindowedCanvasSize:function() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags
        }
        Browser.updateCanvasDimensions(Module['canvas']);
        Browser.updateResizeListeners();
      },updateCanvasDimensions:function(canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
          if (w/h < Module['forcedAspectRatio']) {
            w = Math.round(h * Module['forcedAspectRatio']);
          } else {
            h = Math.round(w / Module['forcedAspectRatio']);
          }
        }
        if (((document['fullscreenElement'] || document['mozFullScreenElement'] ||
             document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
             document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
           var factor = Math.min(screen.width / w, screen.height / h);
           w = Math.round(w * factor);
           h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width  != w) canvas.width  = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != 'undefined') {
            canvas.style.removeProperty( "width");
            canvas.style.removeProperty("height");
          }
        } else {
          if (canvas.width  != wNative) canvas.width  = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != 'undefined') {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty( "width", w + "px", "important");
              canvas.style.setProperty("height", h + "px", "important");
            } else {
              canvas.style.removeProperty( "width");
              canvas.style.removeProperty("height");
            }
          }
        }
      },wgetRequests:{},nextWgetRequestHandle:0,getNextWgetRequestHandle:function() {
        var handle = Browser.nextWgetRequestHandle;
        Browser.nextWgetRequestHandle++;
        return handle;
      }};
  var EGL={errorCode:12288,defaultDisplayInitialized:false,currentContext:0,currentReadSurface:0,currentDrawSurface:0,contextAttributes:{alpha:false,depth:false,stencil:false,antialias:false},stringCache:{},setErrorCode:function(code) {
        EGL.errorCode = code;
      },chooseConfig:function(display, attribList, config, config_size, numConfigs) {
        if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
          EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
          return 0;
        }
  
        if (attribList) {
          // read attribList if it is non-null
          for (;;) {
            var param = HEAP32[((attribList)>>2)];
            if (param == 0x3021 /*EGL_ALPHA_SIZE*/) {
              var alphaSize = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.alpha = (alphaSize > 0);
            } else if (param == 0x3025 /*EGL_DEPTH_SIZE*/) {
              var depthSize = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.depth = (depthSize > 0);
            } else if (param == 0x3026 /*EGL_STENCIL_SIZE*/) {
              var stencilSize = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.stencil = (stencilSize > 0);
            } else if (param == 0x3031 /*EGL_SAMPLES*/) {
              var samples = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.antialias = (samples > 0);
            } else if (param == 0x3032 /*EGL_SAMPLE_BUFFERS*/) {
              var samples = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.antialias = (samples == 1);
            } else if (param == 0x3100 /*EGL_CONTEXT_PRIORITY_LEVEL_IMG*/) {
              var requestedPriority = HEAP32[(((attribList)+(4))>>2)];
              EGL.contextAttributes.lowLatency = (requestedPriority != 0x3103 /*EGL_CONTEXT_PRIORITY_LOW_IMG*/);
            } else if (param == 0x3038 /*EGL_NONE*/) {
                break;
            }
            attribList += 8;
          }
        }
  
        if ((!config || !config_size) && !numConfigs) {
          EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
          return 0;
        }
        if (numConfigs) {
          HEAP32[((numConfigs)>>2)] = 1; // Total number of supported configs: 1.
        }
        if (config && config_size > 0) {
          HEAP32[((config)>>2)] = 62002;
        }
  
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1;
      }};
  function _eglBindAPI(api) {
      if (api == 0x30A0 /* EGL_OPENGL_ES_API */) {
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1;
      } else { // if (api == 0x30A1 /* EGL_OPENVG_API */ || api == 0x30A2 /* EGL_OPENGL_API */) {
        EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
        return 0;
      }
    }

  function _eglChooseConfig(display, attrib_list, configs, config_size, numConfigs) {
      return EGL.chooseConfig(display, attrib_list, configs, config_size, numConfigs);
    }

  function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
      // Closure is expected to be allowed to minify the '.dibvbi' property, so not accessing it quoted.
      return !!(ctx.dibvbi = ctx.getExtension('WEBGL_draw_instanced_base_vertex_base_instance'));
    }
  
  function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
      // Closure is expected to be allowed to minify the '.mdibvbi' property, so not accessing it quoted.
      return !!(ctx.mdibvbi = ctx.getExtension('WEBGL_multi_draw_instanced_base_vertex_base_instance'));
    }
  
  function __webgl_enable_WEBGL_multi_draw(ctx) {
      // Closure is expected to be allowed to minify the '.multiDrawWebgl' property, so not accessing it quoted.
      return !!(ctx.multiDrawWebgl = ctx.getExtension('WEBGL_multi_draw'));
    }
  var GL={counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},queries:[],samplers:[],transformFeedbacks:[],syncs:[],stringCache:{},stringiCache:{},unpackAlignment:4,recordError:function recordError(errorCode) {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },getNewId:function(table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },getSource:function(shader, count, string, length) {
        var source = '';
        for (var i = 0; i < count; ++i) {
          var len = length ? HEAP32[(((length)+(i*4))>>2)] : -1;
          source += UTF8ToString(HEAP32[(((string)+(i*4))>>2)], len < 0 ? undefined : len);
        }
        return source;
      },createContext:function(canvas, webGLContextAttributes) {
  
        // BUG: Workaround Safari WebGL issue: After successfully acquiring WebGL context on a canvas,
        // calling .getContext() will always return that context independent of which 'webgl' or 'webgl2'
        // context version was passed. See https://bugs.webkit.org/show_bug.cgi?id=222758 and
        // https://github.com/emscripten-core/emscripten/issues/13295.
        // TODO: Once the bug is fixed and shipped in Safari, adjust the Safari version field in above check.
        if (!canvas.getContextSafariWebGL2Fixed) {
          canvas.getContextSafariWebGL2Fixed = canvas.getContext;
          canvas.getContext = function(ver, attrs) {
            var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
            return ((ver == 'webgl') == (gl instanceof WebGLRenderingContext)) ? gl : null;
          }
        }
  
        var ctx = canvas.getContext("webgl2", webGLContextAttributes);
  
        if (!ctx) return 0;
  
        var handle = GL.registerContext(ctx, webGLContextAttributes);
  
        return handle;
      },registerContext:function(ctx, webGLContextAttributes) {
        // without pthreads a context is just an integer ID
        var handle = GL.getNewId(GL.contexts);
  
        var context = {
          handle: handle,
          attributes: webGLContextAttributes,
          version: webGLContextAttributes.majorVersion,
          GLctx: ctx
        };
  
        // Store the created context object so that we can access the context given a canvas without having to pass the parameters again.
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault === 'undefined' || webGLContextAttributes.enableExtensionsByDefault) {
          GL.initExtensions(context);
        }
  
        return handle;
      },makeContextCurrent:function(contextHandle) {
  
        GL.currentContext = GL.contexts[contextHandle]; // Active Emscripten GL layer context object.
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx; // Active WebGL context object.
        return !(contextHandle && !GLctx);
      },getContext:function(contextHandle) {
        return GL.contexts[contextHandle];
      },deleteContext:function(contextHandle) {
        if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
        if (typeof JSEvents === 'object') JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas); // Release all JS event handlers on the DOM element that the GL context is associated with since the context is now deleted.
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined; // Make sure the canvas object no longer refers to the context object so there are no GC surprises.
        GL.contexts[contextHandle] = null;
      },initExtensions:function(context) {
        // If this function is called without a specific context object, init the extensions of the currently active context.
        if (!context) context = GL.currentContext;
  
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
  
        var GLctx = context.GLctx;
  
        // Detect the presence of a few extensions manually, this GL interop layer itself will need to know if they exist.
  
        // Extensions that are available from WebGL >= 2 (no-op if called on a WebGL 1 context active)
        __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
        __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
  
        // On WebGL 2, EXT_disjoint_timer_query is replaced with an alternative
        // that's based on core APIs, and exposes only the queryCounterEXT()
        // entrypoint.
        if (context.version >= 2) {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2");
        }
  
        // However, Firefox exposes the WebGL 1 version on WebGL 2 as well and
        // thus we look for the WebGL 1 version again if the WebGL 2 version
        // isn't present. https://bugzilla.mozilla.org/show_bug.cgi?id=1328882
        if (context.version < 2 || !GLctx.disjointTimerQueryExt)
        {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
        }
  
        __webgl_enable_WEBGL_multi_draw(GLctx);
  
        // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach(function(ext) {
          // WEBGL_lose_context, WEBGL_debug_renderer_info and WEBGL_debug_shaders are not enabled by default.
          if (!ext.includes('lose_context') && !ext.includes('debug')) {
            // Call .getExtension() to enable that extension permanently.
            GLctx.getExtension(ext);
          }
        });
      }};
  function _eglCreateContext(display, config, hmm, contextAttribs) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
  
      // EGL 1.4 spec says default EGL_CONTEXT_CLIENT_VERSION is GLES1, but this is not supported by Emscripten.
      // So user must pass EGL_CONTEXT_CLIENT_VERSION == 2 to initialize EGL.
      var glesContextVersion = 1;
      for (;;) {
        var param = HEAP32[((contextAttribs)>>2)];
        if (param == 0x3098 /*EGL_CONTEXT_CLIENT_VERSION*/) {
          glesContextVersion = HEAP32[(((contextAttribs)+(4))>>2)];
        } else if (param == 0x3038 /*EGL_NONE*/) {
          break;
        } else {
          /* EGL1.4 specifies only EGL_CONTEXT_CLIENT_VERSION as supported attribute */
          EGL.setErrorCode(0x3004 /*EGL_BAD_ATTRIBUTE*/);
          return 0;
        }
        contextAttribs += 8;
      }
      if (glesContextVersion < 2 || glesContextVersion > 3) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0; /* EGL_NO_CONTEXT */
      }
  
      EGL.contextAttributes.majorVersion = glesContextVersion - 1; // WebGL 1 is GLES 2, WebGL2 is GLES3
      EGL.contextAttributes.minorVersion = 0;
  
      EGL.context = GL.createContext(Module['canvas'], EGL.contextAttributes);
  
      if (EGL.context != 0) {
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
  
        // Run callbacks so that GL emulation works
        GL.makeContextCurrent(EGL.context);
        Module.useWebGL = true;
        Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
  
        // Note: This function only creates a context, but it shall not make it active.
        GL.makeContextCurrent(null);
        return 62004; // Magic ID for Emscripten EGLContext
      } else {
        EGL.setErrorCode(0x3009 /* EGL_BAD_MATCH */); // By the EGL 1.4 spec, an implementation that does not support GLES2 (WebGL in this case), this error code is set.
        return 0; /* EGL_NO_CONTEXT */
      }
    }

  function _eglCreateWindowSurface(display, config, win, attrib_list) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (config != 62002 /* Magic ID for the only EGLConfig supported by Emscripten */) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0;
      }
      // TODO: Examine attrib_list! Parameters that can be present there are:
      // - EGL_RENDER_BUFFER (must be EGL_BACK_BUFFER)
      // - EGL_VG_COLORSPACE (can't be set)
      // - EGL_VG_ALPHA_FORMAT (can't be set)
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 62006; /* Magic ID for Emscripten 'default surface' */
    }

  function _eglDestroyContext(display, context) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (context != 62004 /* Magic ID for Emscripten EGLContext */) {
        EGL.setErrorCode(0x3006 /* EGL_BAD_CONTEXT */);
        return 0;
      }
  
      GL.deleteContext(EGL.context);
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      if (EGL.currentContext == context) {
        EGL.currentContext = 0;
      }
      return 1 /* EGL_TRUE */;
    }

  function _eglDestroySurface(display, surface) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (surface != 62006 /* Magic ID for the only EGLSurface supported by Emscripten */) {
        EGL.setErrorCode(0x300D /* EGL_BAD_SURFACE */);
        return 1;
      }
      if (EGL.currentReadSurface == surface) {
        EGL.currentReadSurface = 0;
      }
      if (EGL.currentDrawSurface == surface) {
        EGL.currentDrawSurface = 0;
      }
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1; /* Magic ID for Emscripten 'default surface' */
    }

  function _eglGetConfigAttrib(display, config, attribute, value) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (config != 62002 /* Magic ID for the only EGLConfig supported by Emscripten */) {
        EGL.setErrorCode(0x3005 /* EGL_BAD_CONFIG */);
        return 0;
      }
      if (!value) {
        EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
        return 0;
      }
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      switch (attribute) {
      case 0x3020: // EGL_BUFFER_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.alpha ? 32 : 24;
        return 1;
      case 0x3021: // EGL_ALPHA_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.alpha ? 8 : 0;
        return 1;
      case 0x3022: // EGL_BLUE_SIZE
        HEAP32[((value)>>2)] = 8;
        return 1;
      case 0x3023: // EGL_GREEN_SIZE
        HEAP32[((value)>>2)] = 8;
        return 1;
      case 0x3024: // EGL_RED_SIZE
        HEAP32[((value)>>2)] = 8;
        return 1;
      case 0x3025: // EGL_DEPTH_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.depth ? 24 : 0;
        return 1;
      case 0x3026: // EGL_STENCIL_SIZE
        HEAP32[((value)>>2)] = EGL.contextAttributes.stencil ? 8 : 0;
        return 1;
      case 0x3027: // EGL_CONFIG_CAVEAT
        // We can return here one of EGL_NONE (0x3038), EGL_SLOW_CONFIG (0x3050) or EGL_NON_CONFORMANT_CONFIG (0x3051).
        HEAP32[((value)>>2)] = 0x3038;
        return 1;
      case 0x3028: // EGL_CONFIG_ID
        HEAP32[((value)>>2)] = 62002;
        return 1;
      case 0x3029: // EGL_LEVEL
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x302A: // EGL_MAX_PBUFFER_HEIGHT
        HEAP32[((value)>>2)] = 4096;
        return 1;
      case 0x302B: // EGL_MAX_PBUFFER_PIXELS
        HEAP32[((value)>>2)] = 16777216;
        return 1;
      case 0x302C: // EGL_MAX_PBUFFER_WIDTH
        HEAP32[((value)>>2)] = 4096;
        return 1;
      case 0x302D: // EGL_NATIVE_RENDERABLE
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x302E: // EGL_NATIVE_VISUAL_ID
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x302F: // EGL_NATIVE_VISUAL_TYPE
        HEAP32[((value)>>2)] = 0x3038;
        return 1;
      case 0x3031: // EGL_SAMPLES
        HEAP32[((value)>>2)] = EGL.contextAttributes.antialias ? 4 : 0;
        return 1;
      case 0x3032: // EGL_SAMPLE_BUFFERS
        HEAP32[((value)>>2)] = EGL.contextAttributes.antialias ? 1 : 0;
        return 1;
      case 0x3033: // EGL_SURFACE_TYPE
        HEAP32[((value)>>2)] = 0x4;
        return 1;
      case 0x3034: // EGL_TRANSPARENT_TYPE
        // If this returns EGL_TRANSPARENT_RGB (0x3052), transparency is used through color-keying. No such thing applies to Emscripten canvas.
        HEAP32[((value)>>2)] = 0x3038;
        return 1;
      case 0x3035: // EGL_TRANSPARENT_BLUE_VALUE
      case 0x3036: // EGL_TRANSPARENT_GREEN_VALUE
      case 0x3037: // EGL_TRANSPARENT_RED_VALUE
        // "If EGL_TRANSPARENT_TYPE is EGL_NONE, then the values for EGL_TRANSPARENT_RED_VALUE, EGL_TRANSPARENT_GREEN_VALUE, and EGL_TRANSPARENT_BLUE_VALUE are undefined."
        HEAP32[((value)>>2)] = -1;
        return 1;
      case 0x3039: // EGL_BIND_TO_TEXTURE_RGB
      case 0x303A: // EGL_BIND_TO_TEXTURE_RGBA
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x303B: // EGL_MIN_SWAP_INTERVAL
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x303C: // EGL_MAX_SWAP_INTERVAL
        HEAP32[((value)>>2)] = 1;
        return 1;
      case 0x303D: // EGL_LUMINANCE_SIZE
      case 0x303E: // EGL_ALPHA_MASK_SIZE
        HEAP32[((value)>>2)] = 0;
        return 1;
      case 0x303F: // EGL_COLOR_BUFFER_TYPE
        // EGL has two types of buffers: EGL_RGB_BUFFER and EGL_LUMINANCE_BUFFER.
        HEAP32[((value)>>2)] = 0x308E;
        return 1;
      case 0x3040: // EGL_RENDERABLE_TYPE
        // A bit combination of EGL_OPENGL_ES_BIT,EGL_OPENVG_BIT,EGL_OPENGL_ES2_BIT and EGL_OPENGL_BIT.
        HEAP32[((value)>>2)] = 0x4;
        return 1;
      case 0x3042: // EGL_CONFORMANT
        // "EGL_CONFORMANT is a mask indicating if a client API context created with respect to the corresponding EGLConfig will pass the required conformance tests for that API."
        HEAP32[((value)>>2)] = 0;
        return 1;
      default:
        EGL.setErrorCode(0x3004 /* EGL_BAD_ATTRIBUTE */);
        return 0;
      }
    }

  function _eglGetDisplay(nativeDisplayType) {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      // Note: As a 'conformant' implementation of EGL, we would prefer to init here only if the user
      //       calls this function with EGL_DEFAULT_DISPLAY. Other display IDs would be preferred to be unsupported
      //       and EGL_NO_DISPLAY returned. Uncomment the following code lines to do this.
      // Instead, an alternative route has been preferred, namely that the Emscripten EGL implementation
      // "emulates" X11, and eglGetDisplay is expected to accept/receive a pointer to an X11 Display object.
      // Therefore, be lax and allow anything to be passed in, and return the magic handle to our default EGLDisplay object.
  
  //    if (nativeDisplayType == 0 /* EGL_DEFAULT_DISPLAY */) {
          return 62000; // Magic ID for Emscripten 'default display'
  //    }
  //    else
  //      return 0; // EGL_NO_DISPLAY
    }

  function _eglGetError() {
      return EGL.errorCode;
    }

  function _eglInitialize(display, majorVersion, minorVersion) {
      if (display == 62000 /* Magic ID for Emscripten 'default display' */) {
        if (majorVersion) {
          HEAP32[((majorVersion)>>2)] = 1; // Advertise EGL Major version: '1'
        }
        if (minorVersion) {
          HEAP32[((minorVersion)>>2)] = 4; // Advertise EGL Minor version: '4'
        }
        EGL.defaultDisplayInitialized = true;
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1;
      }
      else {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
    }

  function _eglMakeCurrent(display, draw, read, context) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0 /* EGL_FALSE */;
      }
      //\todo An EGL_NOT_INITIALIZED error is generated if EGL is not initialized for dpy.
      if (context != 0 && context != 62004 /* Magic ID for Emscripten EGLContext */) {
        EGL.setErrorCode(0x3006 /* EGL_BAD_CONTEXT */);
        return 0;
      }
      if ((read != 0 && read != 62006) || (draw != 0 && draw != 62006 /* Magic ID for Emscripten 'default surface' */)) {
        EGL.setErrorCode(0x300D /* EGL_BAD_SURFACE */);
        return 0;
      }
  
      GL.makeContextCurrent(context ? EGL.context : null);
  
      EGL.currentContext = context;
      EGL.currentDrawSurface = draw;
      EGL.currentReadSurface = read;
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1 /* EGL_TRUE */;
    }

  function _eglQueryString(display, name) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      //\todo An EGL_NOT_INITIALIZED error is generated if EGL is not initialized for dpy.
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      if (EGL.stringCache[name]) return EGL.stringCache[name];
      var ret;
      switch (name) {
        case 0x3053 /* EGL_VENDOR */: ret = allocateUTF8("Emscripten"); break;
        case 0x3054 /* EGL_VERSION */: ret = allocateUTF8("1.4 Emscripten EGL"); break;
        case 0x3055 /* EGL_EXTENSIONS */:  ret = allocateUTF8(""); break; // Currently not supporting any EGL extensions.
        case 0x308D /* EGL_CLIENT_APIS */: ret = allocateUTF8("OpenGL_ES"); break;
        default:
          EGL.setErrorCode(0x300C /* EGL_BAD_PARAMETER */);
          return 0;
      }
      EGL.stringCache[name] = ret;
      return ret;
    }

  function _eglSwapBuffers() {
  
      if (!EGL.defaultDisplayInitialized) {
        EGL.setErrorCode(0x3001 /* EGL_NOT_INITIALIZED */);
      } else if (!Module.ctx) {
        EGL.setErrorCode(0x3002 /* EGL_BAD_ACCESS */);
      } else if (Module.ctx.isContextLost()) {
        EGL.setErrorCode(0x300E /* EGL_CONTEXT_LOST */);
      } else {
        // According to documentation this does an implicit flush.
        // Due to discussion at https://github.com/emscripten-core/emscripten/pull/1871
        // the flush was removed since this _may_ result in slowing code down.
        //_glFlush();
        EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
        return 1 /* EGL_TRUE */;
      }
      return 0 /* EGL_FALSE */;
    }

  function _eglSwapInterval(display, interval) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      if (interval == 0) _emscripten_set_main_loop_timing(0/*EM_TIMING_SETTIMEOUT*/, 0);
      else _emscripten_set_main_loop_timing(1/*EM_TIMING_RAF*/, interval);
  
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }

  function _eglTerminate(display) {
      if (display != 62000 /* Magic ID for Emscripten 'default display' */) {
        EGL.setErrorCode(0x3008 /* EGL_BAD_DISPLAY */);
        return 0;
      }
      EGL.currentContext = 0;
      EGL.currentReadSurface = 0;
      EGL.currentDrawSurface = 0;
      EGL.defaultDisplayInitialized = false;
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }

  function _eglWaitClient() {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }
  function _eglWaitGL(
  ) {
  return _eglWaitClient();
  }

  function _eglWaitNative(nativeEngineId) {
      EGL.setErrorCode(0x3000 /* EGL_SUCCESS */);
      return 1;
    }

  var readAsmConstArgsArray=[];
  function readAsmConstArgs(sigPtr, buf) {
      // Nobody should have mutated _readAsmConstArgsArray underneath us to be something else than an array.
      assert(Array.isArray(readAsmConstArgsArray));
      // The input buffer is allocated on the stack, so it must be stack-aligned.
      assert(buf % 16 == 0);
      readAsmConstArgsArray.length = 0;
      var ch;
      // Most arguments are i32s, so shift the buffer pointer so it is a plain
      // index into HEAP32.
      buf >>= 2;
      while (ch = HEAPU8[sigPtr++]) {
        assert(ch === 100/*'d'*/ || ch === 102/*'f'*/ || ch === 105 /*'i'*/);
        // A double takes two 32-bit slots, and must also be aligned - the backend
        // will emit padding to avoid that.
        var double = ch < 105;
        if (double && (buf & 1)) buf++;
        readAsmConstArgsArray.push(double ? HEAPF64[buf++ >> 1] : HEAP32[buf]);
        ++buf;
      }
      return readAsmConstArgsArray;
    }
  function _emscripten_asm_const_int(code, sigPtr, argbuf) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      if (!ASM_CONSTS.hasOwnProperty(code)) abort('No EM_ASM constant found at address ' + code);
      return ASM_CONSTS[code].apply(null, args);
    }

  function _emscripten_cancel_main_loop() {
      Browser.mainLoop.pause();
      Browser.mainLoop.func = null;
    }

  var JSEvents={inEventHandler:0,removeAllEventListeners:function() {
        for (var i = JSEvents.eventHandlers.length-1; i >= 0; --i) {
          JSEvents._removeHandler(i);
        }
        JSEvents.eventHandlers = [];
        JSEvents.deferredCalls = [];
      },registerRemoveEventListeners:function() {
        if (!JSEvents.removeEventListenersRegistered) {
          __ATEXIT__.push(JSEvents.removeAllEventListeners);
          JSEvents.removeEventListenersRegistered = true;
        }
      },deferredCalls:[],deferCall:function(targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
          if (arrA.length != arrB.length) return false;
  
          for (var i in arrA) {
            if (arrA[i] != arrB[i]) return false;
          }
          return true;
        }
        // Test if the given call was already queued, and if so, don't add it again.
        for (var i in JSEvents.deferredCalls) {
          var call = JSEvents.deferredCalls[i];
          if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
            return;
          }
        }
        JSEvents.deferredCalls.push({
          targetFunction: targetFunction,
          precedence: precedence,
          argsList: argsList
        });
  
        JSEvents.deferredCalls.sort(function(x,y) { return x.precedence < y.precedence; });
      },removeDeferredCalls:function(targetFunction) {
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
          if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
            JSEvents.deferredCalls.splice(i, 1);
            --i;
          }
        }
      },canPerformEventHandlerRequests:function() {
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
      },runDeferredCalls:function() {
        if (!JSEvents.canPerformEventHandlerRequests()) {
          return;
        }
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
          var call = JSEvents.deferredCalls[i];
          JSEvents.deferredCalls.splice(i, 1);
          --i;
          call.targetFunction.apply(null, call.argsList);
        }
      },eventHandlers:[],removeAllHandlersOnTarget:function(target, eventTypeString) {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
          if (JSEvents.eventHandlers[i].target == target && 
            (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
             JSEvents._removeHandler(i--);
           }
        }
      },_removeHandler:function(i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1);
      },registerOrRemoveHandler:function(eventHandler) {
        var jsEventHandler = function jsEventHandler(event) {
          // Increment nesting count for the event handler.
          ++JSEvents.inEventHandler;
          JSEvents.currentEventHandler = eventHandler;
          // Process any old deferred calls the user has placed.
          JSEvents.runDeferredCalls();
          // Process the actual event, calls back to user C code handler.
          eventHandler.handlerFunc(event);
          // Process any new deferred calls that were placed right now from this event handler.
          JSEvents.runDeferredCalls();
          // Out of event handler - restore nesting count.
          --JSEvents.inEventHandler;
        };
        
        if (eventHandler.callbackfunc) {
          eventHandler.eventListenerFunc = jsEventHandler;
          eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
          JSEvents.eventHandlers.push(eventHandler);
          JSEvents.registerRemoveEventListeners();
        } else {
          for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == eventHandler.target
             && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
               JSEvents._removeHandler(i--);
             }
          }
        }
      },getNodeNameForTarget:function(target) {
        if (!target) return '';
        if (target == window) return '#window';
        if (target == screen) return '#screen';
        return (target && target.nodeName) ? target.nodeName : '';
      },fullscreenEnabled:function() {
        return document.fullscreenEnabled
        // Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitFullscreenEnabled.
        // TODO: If Safari at some point ships with unprefixed version, update the version check above.
        || document.webkitFullscreenEnabled
         ;
      }};
  
  var currentFullscreenStrategy={};
  
  function maybeCStringToJsString(cString) {
      // "cString > 2" checks if the input is a number, and isn't of the special
      // values we accept here, EMSCRIPTEN_EVENT_TARGET_* (which map to 0, 1, 2).
      // In other words, if cString > 2 then it's a pointer to a valid place in
      // memory, and points to a C string.
      return cString > 2 ? UTF8ToString(cString) : cString;
    }
  
  var specialHTMLTargets=[0, typeof document !== 'undefined' ? document : 0, typeof window !== 'undefined' ? window : 0];
  function findEventTarget(target) {
      target = maybeCStringToJsString(target);
      var domElement = specialHTMLTargets[target] || (typeof document !== 'undefined' ? document.querySelector(target) : undefined);
      return domElement;
    }
  function findCanvasEventTarget(target) { return findEventTarget(target); }
  function _emscripten_get_canvas_element_size(target, width, height) {
      var canvas = findCanvasEventTarget(target);
      if (!canvas) return -4;
      HEAP32[((width)>>2)] = canvas.width;
      HEAP32[((height)>>2)] = canvas.height;
    }
  function getCanvasElementSize(target) {
      var stackTop = stackSave();
      var w = stackAlloc(8);
      var h = w + 4;
  
      var targetInt = stackAlloc(target.id.length+1);
      stringToUTF8(target.id, targetInt, target.id.length+1);
      var ret = _emscripten_get_canvas_element_size(targetInt, w, h);
      var size = [HEAP32[((w)>>2)], HEAP32[((h)>>2)]];
      stackRestore(stackTop);
      return size;
    }
  
  function _emscripten_set_canvas_element_size(target, width, height) {
      var canvas = findCanvasEventTarget(target);
      if (!canvas) return -4;
      canvas.width = width;
      canvas.height = height;
      return 0;
    }
  function setCanvasElementSize(target, width, height) {
      if (!target.controlTransferredOffscreen) {
        target.width = width;
        target.height = height;
      } else {
        // This function is being called from high-level JavaScript code instead of asm.js/Wasm,
        // and it needs to synchronously proxy over to another thread, so marshal the string onto the heap to do the call.
        var stackTop = stackSave();
        var targetInt = stackAlloc(target.id.length+1);
        stringToUTF8(target.id, targetInt, target.id.length+1);
        _emscripten_set_canvas_element_size(targetInt, width, height);
        stackRestore(stackTop);
      }
    }
  function registerRestoreOldStyle(canvas) {
      var canvasSize = getCanvasElementSize(canvas);
      var oldWidth = canvasSize[0];
      var oldHeight = canvasSize[1];
      var oldCssWidth = canvas.style.width;
      var oldCssHeight = canvas.style.height;
      var oldBackgroundColor = canvas.style.backgroundColor; // Chrome reads color from here.
      var oldDocumentBackgroundColor = document.body.style.backgroundColor; // IE11 reads color from here.
      // Firefox always has black background color.
      var oldPaddingLeft = canvas.style.paddingLeft; // Chrome, FF, Safari
      var oldPaddingRight = canvas.style.paddingRight;
      var oldPaddingTop = canvas.style.paddingTop;
      var oldPaddingBottom = canvas.style.paddingBottom;
      var oldMarginLeft = canvas.style.marginLeft; // IE11
      var oldMarginRight = canvas.style.marginRight;
      var oldMarginTop = canvas.style.marginTop;
      var oldMarginBottom = canvas.style.marginBottom;
      var oldDocumentBodyMargin = document.body.style.margin;
      var oldDocumentOverflow = document.documentElement.style.overflow; // Chrome, Firefox
      var oldDocumentScroll = document.body.scroll; // IE
      var oldImageRendering = canvas.style.imageRendering;
  
      function restoreOldStyle() {
        var fullscreenElement = document.fullscreenElement
          || document.webkitFullscreenElement
          || document.msFullscreenElement
          ;
        if (!fullscreenElement) {
          document.removeEventListener('fullscreenchange', restoreOldStyle);
  
          // Unprefixed Fullscreen API shipped in Chromium 71 (https://bugs.chromium.org/p/chromium/issues/detail?id=383813)
          // As of Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitfullscreenchange. TODO: revisit this check once Safari ships unprefixed version.
          document.removeEventListener('webkitfullscreenchange', restoreOldStyle);
  
          setCanvasElementSize(canvas, oldWidth, oldHeight);
  
          canvas.style.width = oldCssWidth;
          canvas.style.height = oldCssHeight;
          canvas.style.backgroundColor = oldBackgroundColor; // Chrome
          // IE11 hack: assigning 'undefined' or an empty string to document.body.style.backgroundColor has no effect, so first assign back the default color
          // before setting the undefined value. Setting undefined value is also important, or otherwise we would later treat that as something that the user
          // had explicitly set so subsequent fullscreen transitions would not set background color properly.
          if (!oldDocumentBackgroundColor) document.body.style.backgroundColor = 'white';
          document.body.style.backgroundColor = oldDocumentBackgroundColor; // IE11
          canvas.style.paddingLeft = oldPaddingLeft; // Chrome, FF, Safari
          canvas.style.paddingRight = oldPaddingRight;
          canvas.style.paddingTop = oldPaddingTop;
          canvas.style.paddingBottom = oldPaddingBottom;
          canvas.style.marginLeft = oldMarginLeft; // IE11
          canvas.style.marginRight = oldMarginRight;
          canvas.style.marginTop = oldMarginTop;
          canvas.style.marginBottom = oldMarginBottom;
          document.body.style.margin = oldDocumentBodyMargin;
          document.documentElement.style.overflow = oldDocumentOverflow; // Chrome, Firefox
          document.body.scroll = oldDocumentScroll; // IE
          canvas.style.imageRendering = oldImageRendering;
          if (canvas.GLctxObject) canvas.GLctxObject.GLctx.viewport(0, 0, oldWidth, oldHeight);
  
          if (currentFullscreenStrategy.canvasResizedCallback) {
            wasmTable.get(currentFullscreenStrategy.canvasResizedCallback)(37, 0, currentFullscreenStrategy.canvasResizedCallbackUserData);
          }
        }
      }
      document.addEventListener('fullscreenchange', restoreOldStyle);
      // Unprefixed Fullscreen API shipped in Chromium 71 (https://bugs.chromium.org/p/chromium/issues/detail?id=383813)
      // As of Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitfullscreenchange. TODO: revisit this check once Safari ships unprefixed version.
      document.addEventListener('webkitfullscreenchange', restoreOldStyle);
      return restoreOldStyle;
    }
  
  function setLetterbox(element, topBottom, leftRight) {
        // Cannot use margin to specify letterboxes in FF or Chrome, since those ignore margins in fullscreen mode.
        element.style.paddingLeft = element.style.paddingRight = leftRight + 'px';
        element.style.paddingTop = element.style.paddingBottom = topBottom + 'px';
    }
  
  function getBoundingClientRect(e) {
      return specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {'left':0,'top':0};
    }
  function _JSEvents_resizeCanvasForFullscreen(target, strategy) {
      var restoreOldStyle = registerRestoreOldStyle(target);
      var cssWidth = strategy.softFullscreen ? innerWidth : screen.width;
      var cssHeight = strategy.softFullscreen ? innerHeight : screen.height;
      var rect = getBoundingClientRect(target);
      var windowedCssWidth = rect.width;
      var windowedCssHeight = rect.height;
      var canvasSize = getCanvasElementSize(target);
      var windowedRttWidth = canvasSize[0];
      var windowedRttHeight = canvasSize[1];
  
      if (strategy.scaleMode == 3) {
        setLetterbox(target, (cssHeight - windowedCssHeight) / 2, (cssWidth - windowedCssWidth) / 2);
        cssWidth = windowedCssWidth;
        cssHeight = windowedCssHeight;
      } else if (strategy.scaleMode == 2) {
        if (cssWidth*windowedRttHeight < windowedRttWidth*cssHeight) {
          var desiredCssHeight = windowedRttHeight * cssWidth / windowedRttWidth;
          setLetterbox(target, (cssHeight - desiredCssHeight) / 2, 0);
          cssHeight = desiredCssHeight;
        } else {
          var desiredCssWidth = windowedRttWidth * cssHeight / windowedRttHeight;
          setLetterbox(target, 0, (cssWidth - desiredCssWidth) / 2);
          cssWidth = desiredCssWidth;
        }
      }
  
      // If we are adding padding, must choose a background color or otherwise Chrome will give the
      // padding a default white color. Do it only if user has not customized their own background color.
      if (!target.style.backgroundColor) target.style.backgroundColor = 'black';
      // IE11 does the same, but requires the color to be set in the document body.
      if (!document.body.style.backgroundColor) document.body.style.backgroundColor = 'black'; // IE11
      // Firefox always shows black letterboxes independent of style color.
  
      target.style.width = cssWidth + 'px';
      target.style.height = cssHeight + 'px';
  
      if (strategy.filteringMode == 1) {
        target.style.imageRendering = 'optimizeSpeed';
        target.style.imageRendering = '-moz-crisp-edges';
        target.style.imageRendering = '-o-crisp-edges';
        target.style.imageRendering = '-webkit-optimize-contrast';
        target.style.imageRendering = 'optimize-contrast';
        target.style.imageRendering = 'crisp-edges';
        target.style.imageRendering = 'pixelated';
      }
  
      var dpiScale = (strategy.canvasResolutionScaleMode == 2) ? devicePixelRatio : 1;
      if (strategy.canvasResolutionScaleMode != 0) {
        var newWidth = (cssWidth * dpiScale)|0;
        var newHeight = (cssHeight * dpiScale)|0;
        setCanvasElementSize(target, newWidth, newHeight);
        if (target.GLctxObject) target.GLctxObject.GLctx.viewport(0, 0, newWidth, newHeight);
      }
      return restoreOldStyle;
    }
  function _JSEvents_requestFullscreen(target, strategy) {
      // EMSCRIPTEN_FULLSCREEN_SCALE_DEFAULT + EMSCRIPTEN_FULLSCREEN_CANVAS_SCALE_NONE is a mode where no extra logic is performed to the DOM elements.
      if (strategy.scaleMode != 0 || strategy.canvasResolutionScaleMode != 0) {
        _JSEvents_resizeCanvasForFullscreen(target, strategy);
      }
  
      if (target.requestFullscreen) {
        target.requestFullscreen();
      } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else {
        return JSEvents.fullscreenEnabled() ? -3 : -1;
      }
  
      currentFullscreenStrategy = strategy;
  
      if (strategy.canvasResizedCallback) {
        wasmTable.get(strategy.canvasResizedCallback)(37, 0, strategy.canvasResizedCallbackUserData);
      }
  
      return 0;
    }
  function _emscripten_exit_fullscreen() {
      if (!JSEvents.fullscreenEnabled()) return -1;
      // Make sure no queued up calls will fire after this.
      JSEvents.removeDeferredCalls(_JSEvents_requestFullscreen);
  
      var d = specialHTMLTargets[1];
      if (d.exitFullscreen) {
        d.fullscreenElement && d.exitFullscreen();
      } else if (d.webkitExitFullscreen) {
        d.webkitFullscreenElement && d.webkitExitFullscreen();
      } else {
        return -1;
      }
  
      return 0;
    }

  function requestPointerLock(target) {
      if (target.requestPointerLock) {
        target.requestPointerLock();
      } else if (target.msRequestPointerLock) {
        target.msRequestPointerLock();
      } else {
        // document.body is known to accept pointer lock, so use that to differentiate if the user passed a bad element,
        // or if the whole browser just doesn't support the feature.
        if (document.body.requestPointerLock
          || document.body.msRequestPointerLock
          ) {
          return -3;
        } else {
          return -1;
        }
      }
      return 0;
    }
  function _emscripten_exit_pointerlock() {
      // Make sure no queued up calls will fire after this.
      JSEvents.removeDeferredCalls(requestPointerLock);
  
      if (document.exitPointerLock) {
        document.exitPointerLock();
      } else if (document.msExitPointerLock) {
        document.msExitPointerLock();
      } else {
        return -1;
      }
      return 0;
    }

  function _emscripten_get_device_pixel_ratio() {
      return (typeof devicePixelRatio === 'number' && devicePixelRatio) || 1.0;
    }

  function _emscripten_get_element_css_size(target, width, height) {
      target = findEventTarget(target);
      if (!target) return -4;
  
      var rect = getBoundingClientRect(target);
      HEAPF64[((width)>>3)] = rect.width;
      HEAPF64[((height)>>3)] = rect.height;
  
      return 0;
    }

  function fillGamepadEventData(eventStruct, e) {
      HEAPF64[((eventStruct)>>3)] = e.timestamp;
      for (var i = 0; i < e.axes.length; ++i) {
        HEAPF64[(((eventStruct+i*8)+(16))>>3)] = e.axes[i];
      }
      for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof(e.buttons[i]) === 'object') {
          HEAPF64[(((eventStruct+i*8)+(528))>>3)] = e.buttons[i].value;
        } else {
          HEAPF64[(((eventStruct+i*8)+(528))>>3)] = e.buttons[i];
        }
      }
      for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof(e.buttons[i]) === 'object') {
          HEAP32[(((eventStruct+i*4)+(1040))>>2)] = e.buttons[i].pressed;
        } else {
          // Assigning a boolean to HEAP32, that's ok, but Closure would like to warn about it:
          /** @suppress {checkTypes} */
          HEAP32[(((eventStruct+i*4)+(1040))>>2)] = e.buttons[i] == 1;
        }
      }
      HEAP32[(((eventStruct)+(1296))>>2)] = e.connected;
      HEAP32[(((eventStruct)+(1300))>>2)] = e.index;
      HEAP32[(((eventStruct)+(8))>>2)] = e.axes.length;
      HEAP32[(((eventStruct)+(12))>>2)] = e.buttons.length;
      stringToUTF8(e.id, eventStruct + 1304, 64);
      stringToUTF8(e.mapping, eventStruct + 1368, 64);
    }
  function _emscripten_get_gamepad_status(index, gamepadState) {
      if (!JSEvents.lastGamepadState) throw 'emscripten_get_gamepad_status() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!';
  
      // INVALID_PARAM is returned on a Gamepad index that never was there.
      if (index < 0 || index >= JSEvents.lastGamepadState.length) return -5;
  
      // NO_DATA is returned on a Gamepad index that was removed.
      // For previously disconnected gamepads there should be an empty slot (null/undefined/false) at the index.
      // This is because gamepads must keep their original position in the array.
      // For example, removing the first of two gamepads produces [null/undefined/false, gamepad].
      if (!JSEvents.lastGamepadState[index]) return -7;
  
      fillGamepadEventData(gamepadState, JSEvents.lastGamepadState[index]);
      return 0;
    }

  function _emscripten_get_heap_max() {
      // Handle the case of 4GB (which would wrap to 0 in the return value) by
      // returning up to 4GB - one wasm page.
      return 2147483648;
    }

  function _emscripten_get_num_gamepads() {
      if (!JSEvents.lastGamepadState) throw 'emscripten_get_num_gamepads() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!';
      // N.B. Do not call emscripten_get_num_gamepads() unless having first called emscripten_sample_gamepad_data(), and that has returned EMSCRIPTEN_RESULT_SUCCESS.
      // Otherwise the following line will throw an exception.
      return JSEvents.lastGamepadState.length;
    }

  function _emscripten_get_screen_size(width, height) {
      HEAP32[((width)>>2)] = screen.width;
      HEAP32[((height)>>2)] = screen.height;
    }

  function _emscripten_glActiveTexture(x0) { GLctx['activeTexture'](x0) }

  function _emscripten_glAttachShader(program, shader) {
      GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
    }

  function _emscripten_glBeginQuery(target, id) {
      GLctx['beginQuery'](target, GL.queries[id]);
    }

  function _emscripten_glBeginQueryEXT(target, id) {
      GLctx.disjointTimerQueryExt['beginQueryEXT'](target, GL.queries[id]);
    }

  function _emscripten_glBeginTransformFeedback(x0) { GLctx['beginTransformFeedback'](x0) }

  function _emscripten_glBindAttribLocation(program, index, name) {
      GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
    }

  function _emscripten_glBindBuffer(target, buffer) {
  
      if (target == 0x88EB /*GL_PIXEL_PACK_BUFFER*/) {
        // In WebGL 2 glReadPixels entry point, we need to use a different WebGL 2 API function call when a buffer is bound to
        // GL_PIXEL_PACK_BUFFER_BINDING point, so must keep track whether that binding point is non-null to know what is
        // the proper API function to call.
        GLctx.currentPixelPackBufferBinding = buffer;
      } else if (target == 0x88EC /*GL_PIXEL_UNPACK_BUFFER*/) {
        // In WebGL 2 gl(Compressed)Tex(Sub)Image[23]D entry points, we need to
        // use a different WebGL 2 API function call when a buffer is bound to
        // GL_PIXEL_UNPACK_BUFFER_BINDING point, so must keep track whether that
        // binding point is non-null to know what is the proper API function to
        // call.
        GLctx.currentPixelUnpackBufferBinding = buffer;
      }
      GLctx.bindBuffer(target, GL.buffers[buffer]);
    }

  function _emscripten_glBindBufferBase(target, index, buffer) {
      GLctx['bindBufferBase'](target, index, GL.buffers[buffer]);
    }

  function _emscripten_glBindBufferRange(target, index, buffer, offset, ptrsize) {
      GLctx['bindBufferRange'](target, index, GL.buffers[buffer], offset, ptrsize);
    }

  function _emscripten_glBindFramebuffer(target, framebuffer) {
  
      GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer]);
  
    }

  function _emscripten_glBindRenderbuffer(target, renderbuffer) {
      GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
    }

  function _emscripten_glBindSampler(unit, sampler) {
      GLctx['bindSampler'](unit, GL.samplers[sampler]);
    }

  function _emscripten_glBindTexture(target, texture) {
      GLctx.bindTexture(target, GL.textures[texture]);
    }

  function _emscripten_glBindTransformFeedback(target, id) {
      GLctx['bindTransformFeedback'](target, GL.transformFeedbacks[id]);
    }

  function _emscripten_glBindVertexArray(vao) {
      GLctx['bindVertexArray'](GL.vaos[vao]);
    }

  function _emscripten_glBindVertexArrayOES(vao) {
      GLctx['bindVertexArray'](GL.vaos[vao]);
    }

  function _emscripten_glBlendColor(x0, x1, x2, x3) { GLctx['blendColor'](x0, x1, x2, x3) }

  function _emscripten_glBlendEquation(x0) { GLctx['blendEquation'](x0) }

  function _emscripten_glBlendEquationSeparate(x0, x1) { GLctx['blendEquationSeparate'](x0, x1) }

  function _emscripten_glBlendFunc(x0, x1) { GLctx['blendFunc'](x0, x1) }

  function _emscripten_glBlendFuncSeparate(x0, x1, x2, x3) { GLctx['blendFuncSeparate'](x0, x1, x2, x3) }

  function _emscripten_glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) { GLctx['blitFramebuffer'](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) }

  function _emscripten_glBufferData(target, size, data, usage) {
  
      if (true) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (data) {
          GLctx.bufferData(target, HEAPU8, usage, data, size);
        } else {
          GLctx.bufferData(target, size, usage);
        }
      } else {
        // N.b. here first form specifies a heap subarray, second form an integer size, so the ?: code here is polymorphic. It is advised to avoid
        // randomly mixing both uses in calling code, to avoid any potential JS engine JIT issues.
        GLctx.bufferData(target, data ? HEAPU8.subarray(data, data+size) : size, usage);
      }
    }

  function _emscripten_glBufferSubData(target, offset, size, data) {
      if (true) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        GLctx.bufferSubData(target, offset, HEAPU8, data, size);
        return;
      }
      GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data+size));
    }

  function _emscripten_glCheckFramebufferStatus(x0) { return GLctx['checkFramebufferStatus'](x0) }

  function _emscripten_glClear(x0) { GLctx['clear'](x0) }

  function _emscripten_glClearBufferfi(x0, x1, x2, x3) { GLctx['clearBufferfi'](x0, x1, x2, x3) }

  function _emscripten_glClearBufferfv(buffer, drawbuffer, value) {
  
      GLctx['clearBufferfv'](buffer, drawbuffer, HEAPF32, value>>2);
    }

  function _emscripten_glClearBufferiv(buffer, drawbuffer, value) {
  
      GLctx['clearBufferiv'](buffer, drawbuffer, HEAP32, value>>2);
    }

  function _emscripten_glClearBufferuiv(buffer, drawbuffer, value) {
  
      GLctx['clearBufferuiv'](buffer, drawbuffer, HEAPU32, value>>2);
    }

  function _emscripten_glClearColor(x0, x1, x2, x3) { GLctx['clearColor'](x0, x1, x2, x3) }

  function _emscripten_glClearDepthf(x0) { GLctx['clearDepth'](x0) }

  function _emscripten_glClearStencil(x0) { GLctx['clearStencil'](x0) }

  function convertI32PairToI53(lo, hi) {
      // This function should not be getting called with too large unsigned numbers
      // in high part (if hi >= 0x7FFFFFFFF, one should have been calling
      // convertU32PairToI53())
      assert(hi === (hi|0));
      return (lo >>> 0) + hi * 4294967296;
    }
  function _emscripten_glClientWaitSync(sync, flags, timeoutLo, timeoutHi) {
      // WebGL2 vs GLES3 differences: in GLES3, the timeout parameter is a uint64, where 0xFFFFFFFFFFFFFFFFULL means GL_TIMEOUT_IGNORED.
      // In JS, there's no 64-bit value types, so instead timeout is taken to be signed, and GL_TIMEOUT_IGNORED is given value -1.
      // Inherently the value accepted in the timeout is lossy, and can't take in arbitrary u64 bit pattern (but most likely doesn't matter)
      // See https://www.khronos.org/registry/webgl/specs/latest/2.0/#5.15
      return GLctx.clientWaitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi));
    }

  function _emscripten_glColorMask(red, green, blue, alpha) {
      GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
    }

  function _emscripten_glCompileShader(shader) {
      GLctx.compileShader(GL.shaders[shader]);
    }

  function _emscripten_glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
      if (true) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, imageSize, data);
        } else {
          GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, HEAPU8, data, imageSize);
        }
        return;
      }
      GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, data ? HEAPU8.subarray((data), (data+imageSize)) : null);
    }

  function _emscripten_glCompressedTexImage3D(target, level, internalFormat, width, height, depth, border, imageSize, data) {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx['compressedTexImage3D'](target, level, internalFormat, width, height, depth, border, imageSize, data);
      } else {
        GLctx['compressedTexImage3D'](target, level, internalFormat, width, height, depth, border, HEAPU8, data, imageSize);
      }
    }

  function _emscripten_glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
      if (true) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, imageSize, data);
        } else {
          GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize);
        }
        return;
      }
      GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray((data), (data+imageSize)) : null);
    }

  function _emscripten_glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx['compressedTexSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data);
      } else {
        GLctx['compressedTexSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize);
      }
    }

  function _emscripten_glCopyBufferSubData(x0, x1, x2, x3, x4) { GLctx['copyBufferSubData'](x0, x1, x2, x3, x4) }

  function _emscripten_glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) { GLctx['copyTexImage2D'](x0, x1, x2, x3, x4, x5, x6, x7) }

  function _emscripten_glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) { GLctx['copyTexSubImage2D'](x0, x1, x2, x3, x4, x5, x6, x7) }

  function _emscripten_glCopyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8) { GLctx['copyTexSubImage3D'](x0, x1, x2, x3, x4, x5, x6, x7, x8) }

  function _emscripten_glCreateProgram() {
      var id = GL.getNewId(GL.programs);
      var program = GLctx.createProgram();
      // Store additional information needed for each shader program:
      program.name = id;
      // Lazy cache results of glGetProgramiv(GL_ACTIVE_UNIFORM_MAX_LENGTH/GL_ACTIVE_ATTRIBUTE_MAX_LENGTH/GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH)
      program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
      program.uniformIdCounter = 1;
      GL.programs[id] = program;
      return id;
    }

  function _emscripten_glCreateShader(shaderType) {
      var id = GL.getNewId(GL.shaders);
      GL.shaders[id] = GLctx.createShader(shaderType);
  
      return id;
    }

  function _emscripten_glCullFace(x0) { GLctx['cullFace'](x0) }

  function _emscripten_glDeleteBuffers(n, buffers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((buffers)+(i*4))>>2)];
        var buffer = GL.buffers[id];
  
        // From spec: "glDeleteBuffers silently ignores 0's and names that do not
        // correspond to existing buffer objects."
        if (!buffer) continue;
  
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
  
        if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
        if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
      }
    }

  function _emscripten_glDeleteFramebuffers(n, framebuffers) {
      for (var i = 0; i < n; ++i) {
        var id = HEAP32[(((framebuffers)+(i*4))>>2)];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue; // GL spec: "glDeleteFramebuffers silently ignores 0s and names that do not correspond to existing framebuffer objects".
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null;
      }
    }

  function _emscripten_glDeleteProgram(id) {
      if (!id) return;
      var program = GL.programs[id];
      if (!program) { // glDeleteProgram actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteProgram(program);
      program.name = 0;
      GL.programs[id] = null;
    }

  function _emscripten_glDeleteQueries(n, ids) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((ids)+(i*4))>>2)];
        var query = GL.queries[id];
        if (!query) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
        GLctx['deleteQuery'](query);
        GL.queries[id] = null;
      }
    }

  function _emscripten_glDeleteQueriesEXT(n, ids) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((ids)+(i*4))>>2)];
        var query = GL.queries[id];
        if (!query) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
        GLctx.disjointTimerQueryExt['deleteQueryEXT'](query);
        GL.queries[id] = null;
      }
    }

  function _emscripten_glDeleteRenderbuffers(n, renderbuffers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((renderbuffers)+(i*4))>>2)];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue; // GL spec: "glDeleteRenderbuffers silently ignores 0s and names that do not correspond to existing renderbuffer objects".
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null;
      }
    }

  function _emscripten_glDeleteSamplers(n, samplers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((samplers)+(i*4))>>2)];
        var sampler = GL.samplers[id];
        if (!sampler) continue;
        GLctx['deleteSampler'](sampler);
        sampler.name = 0;
        GL.samplers[id] = null;
      }
    }

  function _emscripten_glDeleteShader(id) {
      if (!id) return;
      var shader = GL.shaders[id];
      if (!shader) { // glDeleteShader actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteShader(shader);
      GL.shaders[id] = null;
    }

  function _emscripten_glDeleteSync(id) {
      if (!id) return;
      var sync = GL.syncs[id];
      if (!sync) { // glDeleteSync signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteSync(sync);
      sync.name = 0;
      GL.syncs[id] = null;
    }

  function _emscripten_glDeleteTextures(n, textures) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((textures)+(i*4))>>2)];
        var texture = GL.textures[id];
        if (!texture) continue; // GL spec: "glDeleteTextures silently ignores 0s and names that do not correspond to existing textures".
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null;
      }
    }

  function _emscripten_glDeleteTransformFeedbacks(n, ids) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((ids)+(i*4))>>2)];
        var transformFeedback = GL.transformFeedbacks[id];
        if (!transformFeedback) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
        GLctx['deleteTransformFeedback'](transformFeedback);
        transformFeedback.name = 0;
        GL.transformFeedbacks[id] = null;
      }
    }

  function _emscripten_glDeleteVertexArrays(n, vaos) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((vaos)+(i*4))>>2)];
        GLctx['deleteVertexArray'](GL.vaos[id]);
        GL.vaos[id] = null;
      }
    }

  function _emscripten_glDeleteVertexArraysOES(n, vaos) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((vaos)+(i*4))>>2)];
        GLctx['deleteVertexArray'](GL.vaos[id]);
        GL.vaos[id] = null;
      }
    }

  function _emscripten_glDepthFunc(x0) { GLctx['depthFunc'](x0) }

  function _emscripten_glDepthMask(flag) {
      GLctx.depthMask(!!flag);
    }

  function _emscripten_glDepthRangef(x0, x1) { GLctx['depthRange'](x0, x1) }

  function _emscripten_glDetachShader(program, shader) {
      GLctx.detachShader(GL.programs[program], GL.shaders[shader]);
    }

  function _emscripten_glDisable(x0) { GLctx['disable'](x0) }

  function _emscripten_glDisableVertexAttribArray(index) {
      GLctx.disableVertexAttribArray(index);
    }

  function _emscripten_glDrawArrays(mode, first, count) {
  
      GLctx.drawArrays(mode, first, count);
  
    }

  function _emscripten_glDrawArraysInstanced(mode, first, count, primcount) {
      GLctx['drawArraysInstanced'](mode, first, count, primcount);
    }

  function _emscripten_glDrawArraysInstancedANGLE(mode, first, count, primcount) {
      GLctx['drawArraysInstanced'](mode, first, count, primcount);
    }

  function _emscripten_glDrawArraysInstancedARB(mode, first, count, primcount) {
      GLctx['drawArraysInstanced'](mode, first, count, primcount);
    }

  function _emscripten_glDrawArraysInstancedEXT(mode, first, count, primcount) {
      GLctx['drawArraysInstanced'](mode, first, count, primcount);
    }

  function _emscripten_glDrawArraysInstancedNV(mode, first, count, primcount) {
      GLctx['drawArraysInstanced'](mode, first, count, primcount);
    }

  var tempFixedLengthArray=[];
  function _emscripten_glDrawBuffers(n, bufs) {
  
      var bufArray = tempFixedLengthArray[n];
      for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
      }
  
      GLctx['drawBuffers'](bufArray);
    }

  function _emscripten_glDrawBuffersEXT(n, bufs) {
  
      var bufArray = tempFixedLengthArray[n];
      for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
      }
  
      GLctx['drawBuffers'](bufArray);
    }

  function _emscripten_glDrawBuffersWEBGL(n, bufs) {
  
      var bufArray = tempFixedLengthArray[n];
      for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
      }
  
      GLctx['drawBuffers'](bufArray);
    }

  function _emscripten_glDrawElements(mode, count, type, indices) {
  
      GLctx.drawElements(mode, count, type, indices);
  
    }

  function _emscripten_glDrawElementsInstanced(mode, count, type, indices, primcount) {
      GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
    }

  function _emscripten_glDrawElementsInstancedANGLE(mode, count, type, indices, primcount) {
      GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
    }

  function _emscripten_glDrawElementsInstancedARB(mode, count, type, indices, primcount) {
      GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
    }

  function _emscripten_glDrawElementsInstancedEXT(mode, count, type, indices, primcount) {
      GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
    }

  function _emscripten_glDrawElementsInstancedNV(mode, count, type, indices, primcount) {
      GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
    }

  function _glDrawElements(mode, count, type, indices) {
  
      GLctx.drawElements(mode, count, type, indices);
  
    }
  function _emscripten_glDrawRangeElements(mode, start, end, count, type, indices) {
      // TODO: This should be a trivial pass-though function registered at the bottom of this page as
      // glFuncs[6][1] += ' drawRangeElements';
      // but due to https://bugzilla.mozilla.org/show_bug.cgi?id=1202427,
      // we work around by ignoring the range.
      _glDrawElements(mode, count, type, indices);
    }

  function _emscripten_glEnable(x0) { GLctx['enable'](x0) }

  function _emscripten_glEnableVertexAttribArray(index) {
      GLctx.enableVertexAttribArray(index);
    }

  function _emscripten_glEndQuery(x0) { GLctx['endQuery'](x0) }

  function _emscripten_glEndQueryEXT(target) {
      GLctx.disjointTimerQueryExt['endQueryEXT'](target);
    }

  function _emscripten_glEndTransformFeedback() { GLctx['endTransformFeedback']() }

  function _emscripten_glFenceSync(condition, flags) {
      var sync = GLctx.fenceSync(condition, flags);
      if (sync) {
        var id = GL.getNewId(GL.syncs);
        sync.name = id;
        GL.syncs[id] = sync;
        return id;
      } else {
        return 0; // Failed to create a sync object
      }
    }

  function _emscripten_glFinish() { GLctx['finish']() }

  function _emscripten_glFlush() { GLctx['flush']() }

  function _emscripten_glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
      GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget,
                                         GL.renderbuffers[renderbuffer]);
    }

  function _emscripten_glFramebufferTexture2D(target, attachment, textarget, texture, level) {
      GLctx.framebufferTexture2D(target, attachment, textarget,
                                      GL.textures[texture], level);
    }

  function _emscripten_glFramebufferTextureLayer(target, attachment, texture, level, layer) {
      GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer);
    }

  function _emscripten_glFrontFace(x0) { GLctx['frontFace'](x0) }

  function __glGenObject(n, buffers, createFunction, objectTable
      ) {
      for (var i = 0; i < n; i++) {
        var buffer = GLctx[createFunction]();
        var id = buffer && GL.getNewId(objectTable);
        if (buffer) {
          buffer.name = id;
          objectTable[id] = buffer;
        } else {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */);
        }
        HEAP32[(((buffers)+(i*4))>>2)] = id;
      }
    }
  function _emscripten_glGenBuffers(n, buffers) {
      __glGenObject(n, buffers, 'createBuffer', GL.buffers
        );
    }

  function _emscripten_glGenFramebuffers(n, ids) {
      __glGenObject(n, ids, 'createFramebuffer', GL.framebuffers
        );
    }

  function _emscripten_glGenQueries(n, ids) {
      __glGenObject(n, ids, 'createQuery', GL.queries
        );
    }

  function _emscripten_glGenQueriesEXT(n, ids) {
      for (var i = 0; i < n; i++) {
        var query = GLctx.disjointTimerQueryExt['createQueryEXT']();
        if (!query) {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */);
          while (i < n) HEAP32[(((ids)+(i++*4))>>2)] = 0;
          return;
        }
        var id = GL.getNewId(GL.queries);
        query.name = id;
        GL.queries[id] = query;
        HEAP32[(((ids)+(i*4))>>2)] = id;
      }
    }

  function _emscripten_glGenRenderbuffers(n, renderbuffers) {
      __glGenObject(n, renderbuffers, 'createRenderbuffer', GL.renderbuffers
        );
    }

  function _emscripten_glGenSamplers(n, samplers) {
      __glGenObject(n, samplers, 'createSampler', GL.samplers
        );
    }

  function _emscripten_glGenTextures(n, textures) {
      __glGenObject(n, textures, 'createTexture', GL.textures
        );
    }

  function _emscripten_glGenTransformFeedbacks(n, ids) {
      __glGenObject(n, ids, 'createTransformFeedback', GL.transformFeedbacks
        );
    }

  function _emscripten_glGenVertexArrays(n, arrays) {
      __glGenObject(n, arrays, 'createVertexArray', GL.vaos
        );
    }

  function _emscripten_glGenVertexArraysOES(n, arrays) {
      __glGenObject(n, arrays, 'createVertexArray', GL.vaos
        );
    }

  function _emscripten_glGenerateMipmap(x0) { GLctx['generateMipmap'](x0) }

  function __glGetActiveAttribOrUniform(funcName, program, index, bufSize, length, size, type, name) {
      program = GL.programs[program];
      var info = GLctx[funcName](program, index);
      if (info) { // If an error occurs, nothing will be written to length, size and type and name.
        var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
        if (size) HEAP32[((size)>>2)] = info.size;
        if (type) HEAP32[((type)>>2)] = info.type;
      }
    }
  function _emscripten_glGetActiveAttrib(program, index, bufSize, length, size, type, name) {
      __glGetActiveAttribOrUniform('getActiveAttrib', program, index, bufSize, length, size, type, name);
    }

  function _emscripten_glGetActiveUniform(program, index, bufSize, length, size, type, name) {
      __glGetActiveAttribOrUniform('getActiveUniform', program, index, bufSize, length, size, type, name);
    }

  function _emscripten_glGetActiveUniformBlockName(program, uniformBlockIndex, bufSize, length, uniformBlockName) {
      program = GL.programs[program];
  
      var result = GLctx['getActiveUniformBlockName'](program, uniformBlockIndex);
      if (!result) return; // If an error occurs, nothing will be written to uniformBlockName or length.
      if (uniformBlockName && bufSize > 0) {
        var numBytesWrittenExclNull = stringToUTF8(result, uniformBlockName, bufSize);
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
      } else {
        if (length) HEAP32[((length)>>2)] = 0;
      }
    }

  function _emscripten_glGetActiveUniformBlockiv(program, uniformBlockIndex, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
  
      if (pname == 0x8A41 /* GL_UNIFORM_BLOCK_NAME_LENGTH */) {
        var name = GLctx['getActiveUniformBlockName'](program, uniformBlockIndex);
        HEAP32[((params)>>2)] = name.length+1;
        return;
      }
  
      var result = GLctx['getActiveUniformBlockParameter'](program, uniformBlockIndex, pname);
      if (result === null) return; // If an error occurs, nothing should be written to params.
      if (pname == 0x8A43 /*GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES*/) {
        for (var i = 0; i < result.length; i++) {
          HEAP32[(((params)+(i*4))>>2)] = result[i];
        }
      } else {
        HEAP32[((params)>>2)] = result;
      }
    }

  function _emscripten_glGetActiveUniformsiv(program, uniformCount, uniformIndices, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (uniformCount > 0 && uniformIndices == 0) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
      var ids = [];
      for (var i = 0; i < uniformCount; i++) {
        ids.push(HEAP32[(((uniformIndices)+(i*4))>>2)]);
      }
  
      var result = GLctx['getActiveUniforms'](program, ids, pname);
      if (!result) return; // GL spec: If an error is generated, nothing is written out to params.
  
      var len = result.length;
      for (var i = 0; i < len; i++) {
        HEAP32[(((params)+(i*4))>>2)] = result[i];
      }
    }

  function _emscripten_glGetAttachedShaders(program, maxCount, count, shaders) {
      var result = GLctx.getAttachedShaders(GL.programs[program]);
      var len = result.length;
      if (len > maxCount) {
        len = maxCount;
      }
      HEAP32[((count)>>2)] = len;
      for (var i = 0; i < len; ++i) {
        var id = GL.shaders.indexOf(result[i]);
        HEAP32[(((shaders)+(i*4))>>2)] = id;
      }
    }

  function _emscripten_glGetAttribLocation(program, name) {
      return GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));
    }

  function readI53FromI64(ptr) {
      return HEAPU32[ptr>>2] + HEAP32[ptr+4>>2] * 4294967296;
    }
  
  function readI53FromU64(ptr) {
      return HEAPU32[ptr>>2] + HEAPU32[ptr+4>>2] * 4294967296;
    }
  function writeI53ToI64(ptr, num) {
      HEAPU32[ptr>>2] = num;
      HEAPU32[ptr+4>>2] = (num - HEAPU32[ptr>>2])/4294967296;
      var deserialized = (num >= 0) ? readI53FromU64(ptr) : readI53FromI64(ptr);
      if (deserialized != num) warnOnce('writeI53ToI64() out of range: serialized JS Number ' + num + ' to Wasm heap as bytes lo=0x' + HEAPU32[ptr>>2].toString(16) + ', hi=0x' + HEAPU32[ptr+4>>2].toString(16) + ', which deserializes back to ' + deserialized + ' instead!');
    }
  function emscriptenWebGLGet(name_, p, type) {
      // Guard against user passing a null pointer.
      // Note that GLES2 spec does not say anything about how passing a null pointer should be treated.
      // Testing on desktop core GL 3, the application crashes on glGetIntegerv to a null pointer, but
      // better to report an error instead of doing anything random.
      if (!p) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = undefined;
      switch (name_) { // Handle a few trivial GLES values
        case 0x8DFA: // GL_SHADER_COMPILER
          ret = 1;
          break;
        case 0x8DF8: // GL_SHADER_BINARY_FORMATS
          if (type != 0 && type != 1) {
            GL.recordError(0x500); // GL_INVALID_ENUM
          }
          return; // Do not write anything to the out pointer, since no binary formats are supported.
        case 0x87FE: // GL_NUM_PROGRAM_BINARY_FORMATS
        case 0x8DF9: // GL_NUM_SHADER_BINARY_FORMATS
          ret = 0;
          break;
        case 0x86A2: // GL_NUM_COMPRESSED_TEXTURE_FORMATS
          // WebGL doesn't have GL_NUM_COMPRESSED_TEXTURE_FORMATS (it's obsolete since GL_COMPRESSED_TEXTURE_FORMATS returns a JS array that can be queried for length),
          // so implement it ourselves to allow C++ GLES2 code get the length.
          var formats = GLctx.getParameter(0x86A3 /*GL_COMPRESSED_TEXTURE_FORMATS*/);
          ret = formats ? formats.length : 0;
          break;
  
        case 0x821D: // GL_NUM_EXTENSIONS
          if (GL.currentContext.version < 2) {
            GL.recordError(0x502 /* GL_INVALID_OPERATION */); // Calling GLES3/WebGL2 function with a GLES2/WebGL1 context
            return;
          }
          // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
          var exts = GLctx.getSupportedExtensions() || [];
          ret = 2 * exts.length; // each extension is duplicated, first in unprefixed WebGL form, and then a second time with "GL_" prefix.
          break;
        case 0x821B: // GL_MAJOR_VERSION
        case 0x821C: // GL_MINOR_VERSION
          if (GL.currentContext.version < 2) {
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          }
          ret = name_ == 0x821B ? 3 : 0; // return version 3.0
          break;
      }
  
      if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof(result)) {
          case "number":
            ret = result;
            break;
          case "boolean":
            ret = result ? 1 : 0;
            break;
          case "string":
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          case "object":
            if (result === null) {
              // null is a valid result for some (e.g., which buffer is bound - perhaps nothing is bound), but otherwise
              // can mean an invalid name_, which we need to report as an error
              switch (name_) {
                case 0x8894: // ARRAY_BUFFER_BINDING
                case 0x8B8D: // CURRENT_PROGRAM
                case 0x8895: // ELEMENT_ARRAY_BUFFER_BINDING
                case 0x8CA6: // FRAMEBUFFER_BINDING or DRAW_FRAMEBUFFER_BINDING
                case 0x8CA7: // RENDERBUFFER_BINDING
                case 0x8069: // TEXTURE_BINDING_2D
                case 0x85B5: // WebGL 2 GL_VERTEX_ARRAY_BINDING, or WebGL 1 extension OES_vertex_array_object GL_VERTEX_ARRAY_BINDING_OES
                case 0x8F36: // COPY_READ_BUFFER_BINDING or COPY_READ_BUFFER
                case 0x8F37: // COPY_WRITE_BUFFER_BINDING or COPY_WRITE_BUFFER
                case 0x88ED: // PIXEL_PACK_BUFFER_BINDING
                case 0x88EF: // PIXEL_UNPACK_BUFFER_BINDING
                case 0x8CAA: // READ_FRAMEBUFFER_BINDING
                case 0x8919: // SAMPLER_BINDING
                case 0x8C1D: // TEXTURE_BINDING_2D_ARRAY
                case 0x806A: // TEXTURE_BINDING_3D
                case 0x8E25: // TRANSFORM_FEEDBACK_BINDING
                case 0x8C8F: // TRANSFORM_FEEDBACK_BUFFER_BINDING
                case 0x8A28: // UNIFORM_BUFFER_BINDING
                case 0x8514: { // TEXTURE_BINDING_CUBE_MAP
                  ret = 0;
                  break;
                }
                default: {
                  GL.recordError(0x500); // GL_INVALID_ENUM
                  return;
                }
              }
            } else if (result instanceof Float32Array ||
                       result instanceof Uint32Array ||
                       result instanceof Int32Array ||
                       result instanceof Array) {
              for (var i = 0; i < result.length; ++i) {
                switch (type) {
                  case 0: HEAP32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 2: HEAPF32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 4: HEAP8[(((p)+(i))>>0)] = result[i] ? 1 : 0; break;
                }
              }
              return;
            } else {
              try {
                ret = result.name | 0;
              } catch(e) {
                GL.recordError(0x500); // GL_INVALID_ENUM
                err('GL_INVALID_ENUM in glGet' + type + 'v: Unknown object returned from WebGL getParameter(' + name_ + ')! (error: ' + e + ')');
                return;
              }
            }
            break;
          default:
            GL.recordError(0x500); // GL_INVALID_ENUM
            err('GL_INVALID_ENUM in glGet' + type + 'v: Native code calling glGet' + type + 'v(' + name_ + ') and it returns ' + result + ' of type ' + typeof(result) + '!');
            return;
        }
      }
  
      switch (type) {
        case 1: writeI53ToI64(p, ret); break;
        case 0: HEAP32[((p)>>2)] = ret; break;
        case 2:   HEAPF32[((p)>>2)] = ret; break;
        case 4: HEAP8[((p)>>0)] = ret ? 1 : 0; break;
      }
    }
  function _emscripten_glGetBooleanv(name_, p) {
      emscriptenWebGLGet(name_, p, 4);
    }

  function _emscripten_glGetBufferParameteri64v(target, value, data) {
      if (!data) {
        // GLES2 specification does not specify how to behave if data is a null pointer. Since calling this function does not make sense
        // if data == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      writeI53ToI64(data, GLctx.getBufferParameter(target, value));
    }

  function _emscripten_glGetBufferParameteriv(target, value, data) {
      if (!data) {
        // GLES2 specification does not specify how to behave if data is a null pointer. Since calling this function does not make sense
        // if data == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((data)>>2)] = GLctx.getBufferParameter(target, value);
    }

  function _emscripten_glGetError() {
      var error = GLctx.getError() || GL.lastError;
      GL.lastError = 0/*GL_NO_ERROR*/;
      return error;
    }

  function _emscripten_glGetFloatv(name_, p) {
      emscriptenWebGLGet(name_, p, 2);
    }

  function _emscripten_glGetFragDataLocation(program, name) {
      return GLctx['getFragDataLocation'](GL.programs[program], UTF8ToString(name));
    }

  function _emscripten_glGetFramebufferAttachmentParameteriv(target, attachment, pname, params) {
      var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
      if (result instanceof WebGLRenderbuffer ||
          result instanceof WebGLTexture) {
        result = result.name | 0;
      }
      HEAP32[((params)>>2)] = result;
    }

  function emscriptenWebGLGetIndexed(target, index, data, type) {
      if (!data) {
        // GLES2 specification does not specify how to behave if data is a null pointer. Since calling this function does not make sense
        // if data == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var result = GLctx['getIndexedParameter'](target, index);
      var ret;
      switch (typeof result) {
        case 'boolean':
          ret = result ? 1 : 0;
          break;
        case 'number':
          ret = result;
          break;
        case 'object':
          if (result === null) {
            switch (target) {
              case 0x8C8F: // TRANSFORM_FEEDBACK_BUFFER_BINDING
              case 0x8A28: // UNIFORM_BUFFER_BINDING
                ret = 0;
                break;
              default: {
                GL.recordError(0x500); // GL_INVALID_ENUM
                return;
              }
            }
          } else if (result instanceof WebGLBuffer) {
            ret = result.name | 0;
          } else {
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          }
          break;
        default:
          GL.recordError(0x500); // GL_INVALID_ENUM
          return;
      }
  
      switch (type) {
        case 1: writeI53ToI64(data, ret); break;
        case 0: HEAP32[((data)>>2)] = ret; break;
        case 2: HEAPF32[((data)>>2)] = ret; break;
        case 4: HEAP8[((data)>>0)] = ret ? 1 : 0; break;
        default: throw 'internal emscriptenWebGLGetIndexed() error, bad type: ' + type;
      }
    }
  function _emscripten_glGetInteger64i_v(target, index, data) {
      emscriptenWebGLGetIndexed(target, index, data, 1);
    }

  function _emscripten_glGetInteger64v(name_, p) {
      emscriptenWebGLGet(name_, p, 1);
    }

  function _emscripten_glGetIntegeri_v(target, index, data) {
      emscriptenWebGLGetIndexed(target, index, data, 0);
    }

  function _emscripten_glGetIntegerv(name_, p) {
      emscriptenWebGLGet(name_, p, 0);
    }

  function _emscripten_glGetInternalformativ(target, internalformat, pname, bufSize, params) {
      if (bufSize < 0) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (!params) {
        // GLES3 specification does not specify how to behave if values is a null pointer. Since calling this function does not make sense
        // if values == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = GLctx['getInternalformatParameter'](target, internalformat, pname);
      if (ret === null) return;
      for (var i = 0; i < ret.length && i < bufSize; ++i) {
        HEAP32[(((params)+(i))>>2)] = ret[i];
      }
    }

  function _emscripten_glGetProgramBinary(program, bufSize, length, binaryFormat, binary) {
      GL.recordError(0x502/*GL_INVALID_OPERATION*/);
    }

  function _emscripten_glGetProgramInfoLog(program, maxLength, length, infoLog) {
      var log = GLctx.getProgramInfoLog(GL.programs[program]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    }

  function _emscripten_glGetProgramiv(program, pname, p) {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      if (program >= GL.counter) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      program = GL.programs[program];
  
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = '(unknown error)';
        HEAP32[((p)>>2)] = log.length + 1;
      } else if (pname == 0x8B87 /* GL_ACTIVE_UNIFORM_MAX_LENGTH */) {
        if (!program.maxUniformLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/); ++i) {
            program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformLength;
      } else if (pname == 0x8B8A /* GL_ACTIVE_ATTRIBUTE_MAX_LENGTH */) {
        if (!program.maxAttributeLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 0x8B89/*GL_ACTIVE_ATTRIBUTES*/); ++i) {
            program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxAttributeLength;
      } else if (pname == 0x8A35 /* GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH */) {
        if (!program.maxUniformBlockNameLength) {
          for (var i = 0; i < GLctx.getProgramParameter(program, 0x8A36/*GL_ACTIVE_UNIFORM_BLOCKS*/); ++i) {
            program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformBlockNameLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getProgramParameter(program, pname);
      }
    }

  function _emscripten_glGetQueryObjecti64vEXT(id, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param;
      if (GL.currentContext.version < 2)
      {
        param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      }
      else {
        param = GLctx['getQueryParameter'](query, pname);
      }
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      writeI53ToI64(params, ret);
    }

  function _emscripten_glGetQueryObjectivEXT(id, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      HEAP32[((params)>>2)] = ret;
    }

  function _emscripten_glGetQueryObjectui64vEXT(id, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param;
      if (GL.currentContext.version < 2)
      {
        param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      }
      else {
        param = GLctx['getQueryParameter'](query, pname);
      }
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      writeI53ToI64(params, ret);
    }

  function _emscripten_glGetQueryObjectuiv(id, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param = GLctx['getQueryParameter'](query, pname);
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      HEAP32[((params)>>2)] = ret;
    }

  function _emscripten_glGetQueryObjectuivEXT(id, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      HEAP32[((params)>>2)] = ret;
    }

  function _emscripten_glGetQueryiv(target, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx['getQuery'](target, pname);
    }

  function _emscripten_glGetQueryivEXT(target, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.disjointTimerQueryExt['getQueryEXT'](target, pname);
    }

  function _emscripten_glGetRenderbufferParameteriv(target, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getRenderbufferParameter(target, pname);
    }

  function _emscripten_glGetSamplerParameterfv(sampler, pname, params) {
      if (!params) {
        // GLES3 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAPF32[((params)>>2)] = GLctx['getSamplerParameter'](GL.samplers[sampler], pname);
    }

  function _emscripten_glGetSamplerParameteriv(sampler, pname, params) {
      if (!params) {
        // GLES3 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx['getSamplerParameter'](GL.samplers[sampler], pname);
    }

  function _emscripten_glGetShaderInfoLog(shader, maxLength, length, infoLog) {
      var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    }

  function _emscripten_glGetShaderPrecisionFormat(shaderType, precisionType, range, precision) {
      var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
      HEAP32[((range)>>2)] = result.rangeMin;
      HEAP32[(((range)+(4))>>2)] = result.rangeMax;
      HEAP32[((precision)>>2)] = result.precision;
    }

  function _emscripten_glGetShaderSource(shader, bufSize, length, source) {
      var result = GLctx.getShaderSource(GL.shaders[shader]);
      if (!result) return; // If an error occurs, nothing will be written to length or source.
      var numBytesWrittenExclNull = (bufSize > 0 && source) ? stringToUTF8(result, source, bufSize) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    }

  function _emscripten_glGetShaderiv(shader, pname, p) {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = '(unknown error)';
        // The GLES2 specification says that if the shader has an empty info log,
        // a value of 0 is returned. Otherwise the log has a null char appended.
        // (An empty string is falsey, so we can just check that instead of
        // looking at log.length.)
        var logLength = log ? log.length + 1 : 0;
        HEAP32[((p)>>2)] = logLength;
      } else if (pname == 0x8B88) { // GL_SHADER_SOURCE_LENGTH
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        // source may be a null, or the empty string, both of which are falsey
        // values that we report a 0 length for.
        var sourceLength = source ? source.length + 1 : 0;
        HEAP32[((p)>>2)] = sourceLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getShaderParameter(GL.shaders[shader], pname);
      }
    }

  function stringToNewUTF8(jsString) {
      var length = lengthBytesUTF8(jsString)+1;
      var cString = _malloc(length);
      stringToUTF8(jsString, cString, length);
      return cString;
    }
  function _emscripten_glGetString(name_) {
      var ret = GL.stringCache[name_];
      if (!ret) {
        switch (name_) {
          case 0x1F03 /* GL_EXTENSIONS */:
            var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
            exts = exts.concat(exts.map(function(e) { return "GL_" + e; }));
            ret = stringToNewUTF8(exts.join(' '));
            break;
          case 0x1F00 /* GL_VENDOR */:
          case 0x1F01 /* GL_RENDERER */:
          case 0x9245 /* UNMASKED_VENDOR_WEBGL */:
          case 0x9246 /* UNMASKED_RENDERER_WEBGL */:
            var s = GLctx.getParameter(name_);
            if (!s) {
              GL.recordError(0x500/*GL_INVALID_ENUM*/);
            }
            ret = s && stringToNewUTF8(s);
            break;
  
          case 0x1F02 /* GL_VERSION */:
            var glVersion = GLctx.getParameter(0x1F02 /*GL_VERSION*/);
            // return GLES version string corresponding to the version of the WebGL context
            if (true) glVersion = 'OpenGL ES 3.0 (' + glVersion + ')';
            else
            {
              glVersion = 'OpenGL ES 2.0 (' + glVersion + ')';
            }
            ret = stringToNewUTF8(glVersion);
            break;
          case 0x8B8C /* GL_SHADING_LANGUAGE_VERSION */:
            var glslVersion = GLctx.getParameter(0x8B8C /*GL_SHADING_LANGUAGE_VERSION*/);
            // extract the version number 'N.M' from the string 'WebGL GLSL ES N.M ...'
            var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var ver_num = glslVersion.match(ver_re);
            if (ver_num !== null) {
              if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + '0'; // ensure minor version has 2 digits
              glslVersion = 'OpenGL ES GLSL ES ' + ver_num[1] + ' (' + glslVersion + ')';
            }
            ret = stringToNewUTF8(glslVersion);
            break;
          default:
            GL.recordError(0x500/*GL_INVALID_ENUM*/);
            // fall through
        }
        GL.stringCache[name_] = ret;
      }
      return ret;
    }

  function _emscripten_glGetStringi(name, index) {
      if (GL.currentContext.version < 2) {
        GL.recordError(0x502 /* GL_INVALID_OPERATION */); // Calling GLES3/WebGL2 function with a GLES2/WebGL1 context
        return 0;
      }
      var stringiCache = GL.stringiCache[name];
      if (stringiCache) {
        if (index < 0 || index >= stringiCache.length) {
          GL.recordError(0x501/*GL_INVALID_VALUE*/);
          return 0;
        }
        return stringiCache[index];
      }
      switch (name) {
        case 0x1F03 /* GL_EXTENSIONS */:
          var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
          exts = exts.concat(exts.map(function(e) { return "GL_" + e; }));
          exts = exts.map(function(e) { return stringToNewUTF8(e); });
  
          stringiCache = GL.stringiCache[name] = exts;
          if (index < 0 || index >= stringiCache.length) {
            GL.recordError(0x501/*GL_INVALID_VALUE*/);
            return 0;
          }
          return stringiCache[index];
        default:
          GL.recordError(0x500/*GL_INVALID_ENUM*/);
          return 0;
      }
    }

  function _emscripten_glGetSynciv(sync, pname, bufSize, length, values) {
      if (bufSize < 0) {
        // GLES3 specification does not specify how to behave if bufSize < 0, however in the spec wording for glGetInternalformativ, it does say that GL_INVALID_VALUE should be raised,
        // so raise GL_INVALID_VALUE here as well.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (!values) {
        // GLES3 specification does not specify how to behave if values is a null pointer. Since calling this function does not make sense
        // if values == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = GLctx.getSyncParameter(GL.syncs[sync], pname);
      if (ret !== null) {
        HEAP32[((values)>>2)] = ret;
        if (length) HEAP32[((length)>>2)] = 1; // Report a single value outputted.
      }
    }

  function _emscripten_glGetTexParameterfv(target, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAPF32[((params)>>2)] = GLctx.getTexParameter(target, pname);
    }

  function _emscripten_glGetTexParameteriv(target, pname, params) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getTexParameter(target, pname);
    }

  function _emscripten_glGetTransformFeedbackVarying(program, index, bufSize, length, size, type, name) {
      program = GL.programs[program];
      var info = GLctx['getTransformFeedbackVarying'](program, index);
      if (!info) return; // If an error occurred, the return parameters length, size, type and name will be unmodified.
  
      if (name && bufSize > 0) {
        var numBytesWrittenExclNull = stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
      } else {
        if (length) HEAP32[((length)>>2)] = 0;
      }
  
      if (size) HEAP32[((size)>>2)] = info.size;
      if (type) HEAP32[((type)>>2)] = info.type;
    }

  function _emscripten_glGetUniformBlockIndex(program, uniformBlockName) {
      return GLctx['getUniformBlockIndex'](GL.programs[program], UTF8ToString(uniformBlockName));
    }

  function _emscripten_glGetUniformIndices(program, uniformCount, uniformNames, uniformIndices) {
      if (!uniformIndices) {
        // GLES2 specification does not specify how to behave if uniformIndices is a null pointer. Since calling this function does not make sense
        // if uniformIndices == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (uniformCount > 0 && (uniformNames == 0 || uniformIndices == 0)) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
      var names = [];
      for (var i = 0; i < uniformCount; i++)
        names.push(UTF8ToString(HEAP32[(((uniformNames)+(i*4))>>2)]));
  
      var result = GLctx['getUniformIndices'](program, names);
      if (!result) return; // GL spec: If an error is generated, nothing is written out to uniformIndices.
  
      var len = result.length;
      for (var i = 0; i < len; i++) {
        HEAP32[(((uniformIndices)+(i*4))>>2)] = result[i];
      }
    }

  /** @noinline */
  function webglGetLeftBracePos(name) {
      return name.slice(-1) == ']' && name.lastIndexOf('[');
    }
  function webglPrepareUniformLocationsBeforeFirstUse(program) {
      var uniformLocsById = program.uniformLocsById, // Maps GLuint -> WebGLUniformLocation
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName, // Maps name -> [uniform array length, GLuint]
        i, j;
  
      // On the first time invocation of glGetUniformLocation on this shader program:
      // initialize cache data structures and discover which uniforms are arrays.
      if (!uniformLocsById) {
        // maps GLint integer locations to WebGLUniformLocations
        program.uniformLocsById = uniformLocsById = {};
        // maps integer locations back to uniform name strings, so that we can lazily fetch uniform array locations
        program.uniformArrayNamesById = {};
  
        for (i = 0; i < GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/); ++i) {
          var u = GLctx.getActiveUniform(program, i);
          var nm = u.name;
          var sz = u.size;
          var lb = webglGetLeftBracePos(nm);
          var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
  
          // Assign a new location.
          var id = program.uniformIdCounter;
          program.uniformIdCounter += sz;
          // Eagerly get the location of the uniformArray[0] base element.
          // The remaining indices >0 will be left for lazy evaluation to
          // improve performance. Those may never be needed to fetch, if the
          // application fills arrays always in full starting from the first
          // element of the array.
          uniformSizeAndIdsByName[arrayName] = [sz, id];
  
          // Store placeholder integers in place that highlight that these
          // >0 index locations are array indices pending population.
          for(j = 0; j < sz; ++j) {
            uniformLocsById[id] = j;
            program.uniformArrayNamesById[id++] = arrayName;
          }
        }
      }
    }
  function _emscripten_glGetUniformLocation(program, name) {
  
      name = UTF8ToString(name);
  
      if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById; // Maps GLuint -> WebGLUniformLocation
        var arrayIndex = 0;
        var uniformBaseName = name;
  
        // Invariant: when populating integer IDs for uniform locations, we must maintain the precondition that
        // arrays reside in contiguous addresses, i.e. for a 'vec4 colors[10];', colors[4] must be at location colors[0]+4.
        // However, user might call glGetUniformLocation(program, "colors") for an array, so we cannot discover based on the user
        // input arguments whether the uniform we are dealing with is an array. The only way to discover which uniforms are arrays
        // is to enumerate over all the active uniforms in the program.
        var leftBrace = webglGetLeftBracePos(name);
  
        // If user passed an array accessor "[index]", parse the array index off the accessor.
        if (leftBrace > 0) {
          arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0; // "index]", coerce parseInt(']') with >>>0 to treat "foo[]" as "foo[0]" and foo[-1] as unsigned out-of-bounds.
          uniformBaseName = name.slice(0, leftBrace);
        }
  
        // Have we cached the location of this uniform before?
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName]; // A pair [array length, GLint of the uniform location]
  
        // If an uniform with this name exists, and if its index is within the array limits (if it's even an array),
        // query the WebGLlocation, or return an existing cached location.
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
          arrayIndex += sizeAndId[1]; // Add the base location of the uniform to the array index offset.
          if ((uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name))) {
            return arrayIndex;
          }
        }
      }
      else {
        // N.b. we are currently unable to distinguish between GL program IDs that never existed vs GL program IDs that have been deleted,
        // so report GL_INVALID_VALUE in both cases.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
      }
      return -1;
    }

  function webglGetUniformLocation(location) {
      var p = GLctx.currentProgram;
  
      if (p) {
        var webglLoc = p.uniformLocsById[location];
        // p.uniformLocsById[location] stores either an integer, or a WebGLUniformLocation.
  
        // If an integer, we have not yet bound the location, so do it now. The integer value specifies the array index
        // we should bind to.
        if (typeof webglLoc === 'number') {
          p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? '[' + webglLoc + ']' : ''));
        }
        // Else an already cached WebGLUniformLocation, return it.
        return webglLoc;
      } else {
        GL.recordError(0x502/*GL_INVALID_OPERATION*/);
      }
    }
  /** @suppress{checkTypes} */
  function emscriptenWebGLGetUniform(program, location, params, type) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
      webglPrepareUniformLocationsBeforeFirstUse(program);
      var data = GLctx.getUniform(program, webglGetUniformLocation(location));
      if (typeof data == 'number' || typeof data == 'boolean') {
        switch (type) {
          case 0: HEAP32[((params)>>2)] = data; break;
          case 2: HEAPF32[((params)>>2)] = data; break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
            case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
          }
        }
      }
    }
  function _emscripten_glGetUniformfv(program, location, params) {
      emscriptenWebGLGetUniform(program, location, params, 2);
    }

  function _emscripten_glGetUniformiv(program, location, params) {
      emscriptenWebGLGetUniform(program, location, params, 0);
    }

  function _emscripten_glGetUniformuiv(program, location, params) {
      emscriptenWebGLGetUniform(program, location, params, 0);
    }

  /** @suppress{checkTypes} */
  function emscriptenWebGLGetVertexAttrib(index, pname, params, type) {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var data = GLctx.getVertexAttrib(index, pname);
      if (pname == 0x889F/*VERTEX_ATTRIB_ARRAY_BUFFER_BINDING*/) {
        HEAP32[((params)>>2)] = data && data["name"];
      } else if (typeof data == 'number' || typeof data == 'boolean') {
        switch (type) {
          case 0: HEAP32[((params)>>2)] = data; break;
          case 2: HEAPF32[((params)>>2)] = data; break;
          case 5: HEAP32[((params)>>2)] = Math.fround(data); break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
            case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
            case 5: HEAP32[(((params)+(i*4))>>2)] = Math.fround(data[i]); break;
          }
        }
      }
    }
  function _emscripten_glGetVertexAttribIiv(index, pname, params) {
      // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttribI4iv(),
      // otherwise the results are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 0);
    }

  function _emscripten_glGetVertexAttribIuiv(index, pname, params) {
      // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttribI4iv(),
      // otherwise the results are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 0);
    }

  function _emscripten_glGetVertexAttribPointerv(index, pname, pointer) {
      if (!pointer) {
        // GLES2 specification does not specify how to behave if pointer is a null pointer. Since calling this function does not make sense
        // if pointer == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((pointer)>>2)] = GLctx.getVertexAttribOffset(index, pname);
    }

  function _emscripten_glGetVertexAttribfv(index, pname, params) {
      // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttrib*f(),
      // otherwise the results are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 2);
    }

  function _emscripten_glGetVertexAttribiv(index, pname, params) {
      // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttrib*f(),
      // otherwise the results are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 5);
    }

  function _emscripten_glHint(x0, x1) { GLctx['hint'](x0, x1) }

  function _emscripten_glInvalidateFramebuffer(target, numAttachments, attachments) {
      var list = tempFixedLengthArray[numAttachments];
      for (var i = 0; i < numAttachments; i++) {
        list[i] = HEAP32[(((attachments)+(i*4))>>2)];
      }
  
      GLctx['invalidateFramebuffer'](target, list);
    }

  function _emscripten_glInvalidateSubFramebuffer(target, numAttachments, attachments, x, y, width, height) {
      var list = tempFixedLengthArray[numAttachments];
      for (var i = 0; i < numAttachments; i++) {
        list[i] = HEAP32[(((attachments)+(i*4))>>2)];
      }
  
      GLctx['invalidateSubFramebuffer'](target, list, x, y, width, height);
    }

  function _emscripten_glIsBuffer(buffer) {
      var b = GL.buffers[buffer];
      if (!b) return 0;
      return GLctx.isBuffer(b);
    }

  function _emscripten_glIsEnabled(x0) { return GLctx['isEnabled'](x0) }

  function _emscripten_glIsFramebuffer(framebuffer) {
      var fb = GL.framebuffers[framebuffer];
      if (!fb) return 0;
      return GLctx.isFramebuffer(fb);
    }

  function _emscripten_glIsProgram(program) {
      program = GL.programs[program];
      if (!program) return 0;
      return GLctx.isProgram(program);
    }

  function _emscripten_glIsQuery(id) {
      var query = GL.queries[id];
      if (!query) return 0;
      return GLctx['isQuery'](query);
    }

  function _emscripten_glIsQueryEXT(id) {
      var query = GL.queries[id];
      if (!query) return 0;
      return GLctx.disjointTimerQueryExt['isQueryEXT'](query);
    }

  function _emscripten_glIsRenderbuffer(renderbuffer) {
      var rb = GL.renderbuffers[renderbuffer];
      if (!rb) return 0;
      return GLctx.isRenderbuffer(rb);
    }

  function _emscripten_glIsSampler(id) {
      var sampler = GL.samplers[id];
      if (!sampler) return 0;
      return GLctx['isSampler'](sampler);
    }

  function _emscripten_glIsShader(shader) {
      var s = GL.shaders[shader];
      if (!s) return 0;
      return GLctx.isShader(s);
    }

  function _emscripten_glIsSync(sync) {
      return GLctx.isSync(GL.syncs[sync]);
    }

  function _emscripten_glIsTexture(id) {
      var texture = GL.textures[id];
      if (!texture) return 0;
      return GLctx.isTexture(texture);
    }

  function _emscripten_glIsTransformFeedback(id) {
      return GLctx['isTransformFeedback'](GL.transformFeedbacks[id]);
    }

  function _emscripten_glIsVertexArray(array) {
  
      var vao = GL.vaos[array];
      if (!vao) return 0;
      return GLctx['isVertexArray'](vao);
    }

  function _emscripten_glIsVertexArrayOES(array) {
  
      var vao = GL.vaos[array];
      if (!vao) return 0;
      return GLctx['isVertexArray'](vao);
    }

  function _emscripten_glLineWidth(x0) { GLctx['lineWidth'](x0) }

  function _emscripten_glLinkProgram(program) {
      program = GL.programs[program];
      GLctx.linkProgram(program);
      // Invalidate earlier computed uniform->ID mappings, those have now become stale
      program.uniformLocsById = 0; // Mark as null-like so that glGetUniformLocation() knows to populate this again.
      program.uniformSizeAndIdsByName = {};
  
    }

  function _emscripten_glPauseTransformFeedback() { GLctx['pauseTransformFeedback']() }

  function _emscripten_glPixelStorei(pname, param) {
      if (pname == 0xCF5 /* GL_UNPACK_ALIGNMENT */) {
        GL.unpackAlignment = param;
      }
      GLctx.pixelStorei(pname, param);
    }

  function _emscripten_glPolygonOffset(x0, x1) { GLctx['polygonOffset'](x0, x1) }

  function _emscripten_glProgramBinary(program, binaryFormat, binary, length) {
      GL.recordError(0x500/*GL_INVALID_ENUM*/);
    }

  function _emscripten_glProgramParameteri(program, pname, value) {
      GL.recordError(0x500/*GL_INVALID_ENUM*/);
    }

  function _emscripten_glQueryCounterEXT(id, target) {
      GLctx.disjointTimerQueryExt['queryCounterEXT'](GL.queries[id], target);
    }

  function _emscripten_glReadBuffer(x0) { GLctx['readBuffer'](x0) }

  function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
      function roundedToNextMultipleOf(x, y) {
        return (x + y - 1) & -y;
      }
      var plainRowSize = width * sizePerPixel;
      var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
      return height * alignedRowSize;
    }
  
  function __colorChannelsInGlTextureFormat(format) {
      // Micro-optimizations for size: map format to size by subtracting smallest enum value (0x1902) from all values first.
      // Also omit the most common size value (1) from the list, which is assumed by formats not on the list.
      var colorChannels = {
        // 0x1902 /* GL_DEPTH_COMPONENT */ - 0x1902: 1,
        // 0x1906 /* GL_ALPHA */ - 0x1902: 1,
        5: 3,
        6: 4,
        // 0x1909 /* GL_LUMINANCE */ - 0x1902: 1,
        8: 2,
        29502: 3,
        29504: 4,
        // 0x1903 /* GL_RED */ - 0x1902: 1,
        26917: 2,
        26918: 2,
        // 0x8D94 /* GL_RED_INTEGER */ - 0x1902: 1,
        29846: 3,
        29847: 4
      };
      return colorChannels[format - 0x1902]||1;
    }
  
  function heapObjectForWebGLType(type) {
      // Micro-optimization for size: Subtract lowest GL enum number (0x1400/* GL_BYTE */) from type to compare
      // smaller values for the heap, for shorter generated code size.
      // Also the type HEAPU16 is not tested for explicitly, but any unrecognized type will return out HEAPU16.
      // (since most types are HEAPU16)
      type -= 0x1400;
      if (type == 0) return HEAP8;
  
      if (type == 1) return HEAPU8;
  
      if (type == 2) return HEAP16;
  
      if (type == 4) return HEAP32;
  
      if (type == 6) return HEAPF32;
  
      if (type == 5
        || type == 28922
        || type == 28520
        || type == 30779
        || type == 30782
        )
        return HEAPU32;
  
      return HEAPU16;
    }
  
  function heapAccessShiftForWebGLHeap(heap) {
      return 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
    }
  function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
      var heap = heapObjectForWebGLType(type);
      var shift = heapAccessShiftForWebGLHeap(heap);
      var byteSize = 1<<shift;
      var sizePerPixel = __colorChannelsInGlTextureFormat(format) * byteSize;
      var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
      return heap.subarray(pixels >> shift, pixels + bytes >> shift);
    }
  function _emscripten_glReadPixels(x, y, width, height, format, type, pixels) {
      if (true) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelPackBufferBinding) {
          GLctx.readPixels(x, y, width, height, format, type, pixels);
        } else {
          var heap = heapObjectForWebGLType(type);
          GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        }
        return;
      }
      var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
      if (!pixelData) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
        return;
      }
      GLctx.readPixels(x, y, width, height, format, type, pixelData);
    }

  function _emscripten_glReleaseShaderCompiler() {
      // NOP (as allowed by GLES 2.0 spec)
    }

  function _emscripten_glRenderbufferStorage(x0, x1, x2, x3) { GLctx['renderbufferStorage'](x0, x1, x2, x3) }

  function _emscripten_glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) { GLctx['renderbufferStorageMultisample'](x0, x1, x2, x3, x4) }

  function _emscripten_glResumeTransformFeedback() { GLctx['resumeTransformFeedback']() }

  function _emscripten_glSampleCoverage(value, invert) {
      GLctx.sampleCoverage(value, !!invert);
    }

  function _emscripten_glSamplerParameterf(sampler, pname, param) {
      GLctx['samplerParameterf'](GL.samplers[sampler], pname, param);
    }

  function _emscripten_glSamplerParameterfv(sampler, pname, params) {
      var param = HEAPF32[((params)>>2)];
      GLctx['samplerParameterf'](GL.samplers[sampler], pname, param);
    }

  function _emscripten_glSamplerParameteri(sampler, pname, param) {
      GLctx['samplerParameteri'](GL.samplers[sampler], pname, param);
    }

  function _emscripten_glSamplerParameteriv(sampler, pname, params) {
      var param = HEAP32[((params)>>2)];
      GLctx['samplerParameteri'](GL.samplers[sampler], pname, param);
    }

  function _emscripten_glScissor(x0, x1, x2, x3) { GLctx['scissor'](x0, x1, x2, x3) }

  function _emscripten_glShaderBinary() {
      GL.recordError(0x500/*GL_INVALID_ENUM*/);
    }

  function _emscripten_glShaderSource(shader, count, string, length) {
      var source = GL.getSource(shader, count, string, length);
  
      GLctx.shaderSource(GL.shaders[shader], source);
    }

  function _emscripten_glStencilFunc(x0, x1, x2) { GLctx['stencilFunc'](x0, x1, x2) }

  function _emscripten_glStencilFuncSeparate(x0, x1, x2, x3) { GLctx['stencilFuncSeparate'](x0, x1, x2, x3) }

  function _emscripten_glStencilMask(x0) { GLctx['stencilMask'](x0) }

  function _emscripten_glStencilMaskSeparate(x0, x1) { GLctx['stencilMaskSeparate'](x0, x1) }

  function _emscripten_glStencilOp(x0, x1, x2) { GLctx['stencilOp'](x0, x1, x2) }

  function _emscripten_glStencilOpSeparate(x0, x1, x2, x3) { GLctx['stencilOpSeparate'](x0, x1, x2, x3) }

  function _emscripten_glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
      if (true) {
        // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        } else {
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
        }
        return;
      }
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
    }

  function _emscripten_glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx['texImage3D'](target, level, internalFormat, width, height, depth, border, format, type, pixels);
      } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx['texImage3D'](target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
      } else {
        GLctx['texImage3D'](target, level, internalFormat, width, height, depth, border, format, type, null);
      }
    }

  function _emscripten_glTexParameterf(x0, x1, x2) { GLctx['texParameterf'](x0, x1, x2) }

  function _emscripten_glTexParameterfv(target, pname, params) {
      var param = HEAPF32[((params)>>2)];
      GLctx.texParameterf(target, pname, param);
    }

  function _emscripten_glTexParameteri(x0, x1, x2) { GLctx['texParameteri'](x0, x1, x2) }

  function _emscripten_glTexParameteriv(target, pname, params) {
      var param = HEAP32[((params)>>2)];
      GLctx.texParameteri(target, pname, param);
    }

  function _emscripten_glTexStorage2D(x0, x1, x2, x3, x4) { GLctx['texStorage2D'](x0, x1, x2, x3, x4) }

  function _emscripten_glTexStorage3D(x0, x1, x2, x3, x4, x5) { GLctx['texStorage3D'](x0, x1, x2, x3, x4, x5) }

  function _emscripten_glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
      if (true) {
        // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        } else {
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null);
        }
        return;
      }
      var pixelData = null;
      if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
    }

  function _emscripten_glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
      if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx['texSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels);
      } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx['texSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
      } else {
        GLctx['texSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null);
      }
    }

  function _emscripten_glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
      program = GL.programs[program];
      var vars = [];
      for (var i = 0; i < count; i++)
        vars.push(UTF8ToString(HEAP32[(((varyings)+(i*4))>>2)]));
  
      GLctx['transformFeedbackVaryings'](program, vars, bufferMode);
    }

  function _emscripten_glUniform1f(location, v0) {
      GLctx.uniform1f(webglGetUniformLocation(location), v0);
    }

  function _emscripten_glUniform1fv(location, count, value) {
  
      GLctx.uniform1fv(webglGetUniformLocation(location), HEAPF32, value>>2, count);
    }

  function _emscripten_glUniform1i(location, v0) {
      GLctx.uniform1i(webglGetUniformLocation(location), v0);
    }

  function _emscripten_glUniform1iv(location, count, value) {
  
      GLctx.uniform1iv(webglGetUniformLocation(location), HEAP32, value>>2, count);
    }

  function _emscripten_glUniform1ui(location, v0) {
      GLctx.uniform1ui(webglGetUniformLocation(location), v0);
    }

  function _emscripten_glUniform1uiv(location, count, value) {
      GLctx.uniform1uiv(webglGetUniformLocation(location), HEAPU32, value>>2, count);
    }

  function _emscripten_glUniform2f(location, v0, v1) {
      GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
    }

  function _emscripten_glUniform2fv(location, count, value) {
  
      GLctx.uniform2fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*2);
    }

  function _emscripten_glUniform2i(location, v0, v1) {
      GLctx.uniform2i(webglGetUniformLocation(location), v0, v1);
    }

  function _emscripten_glUniform2iv(location, count, value) {
  
      GLctx.uniform2iv(webglGetUniformLocation(location), HEAP32, value>>2, count*2);
    }

  function _emscripten_glUniform2ui(location, v0, v1) {
      GLctx.uniform2ui(webglGetUniformLocation(location), v0, v1);
    }

  function _emscripten_glUniform2uiv(location, count, value) {
      GLctx.uniform2uiv(webglGetUniformLocation(location), HEAPU32, value>>2, count*2);
    }

  function _emscripten_glUniform3f(location, v0, v1, v2) {
      GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
    }

  function _emscripten_glUniform3fv(location, count, value) {
  
      GLctx.uniform3fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*3);
    }

  function _emscripten_glUniform3i(location, v0, v1, v2) {
      GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
    }

  function _emscripten_glUniform3iv(location, count, value) {
  
      GLctx.uniform3iv(webglGetUniformLocation(location), HEAP32, value>>2, count*3);
    }

  function _emscripten_glUniform3ui(location, v0, v1, v2) {
      GLctx.uniform3ui(webglGetUniformLocation(location), v0, v1, v2);
    }

  function _emscripten_glUniform3uiv(location, count, value) {
      GLctx.uniform3uiv(webglGetUniformLocation(location), HEAPU32, value>>2, count*3);
    }

  function _emscripten_glUniform4f(location, v0, v1, v2, v3) {
      GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
    }

  function _emscripten_glUniform4fv(location, count, value) {
  
      GLctx.uniform4fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*4);
    }

  function _emscripten_glUniform4i(location, v0, v1, v2, v3) {
      GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
    }

  function _emscripten_glUniform4iv(location, count, value) {
  
      GLctx.uniform4iv(webglGetUniformLocation(location), HEAP32, value>>2, count*4);
    }

  function _emscripten_glUniform4ui(location, v0, v1, v2, v3) {
      GLctx.uniform4ui(webglGetUniformLocation(location), v0, v1, v2, v3);
    }

  function _emscripten_glUniform4uiv(location, count, value) {
      GLctx.uniform4uiv(webglGetUniformLocation(location), HEAPU32, value>>2, count*4);
    }

  function _emscripten_glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
      program = GL.programs[program];
  
      GLctx['uniformBlockBinding'](program, uniformBlockIndex, uniformBlockBinding);
    }

  function _emscripten_glUniformMatrix2fv(location, count, transpose, value) {
  
      GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*4);
    }

  function _emscripten_glUniformMatrix2x3fv(location, count, transpose, value) {
      GLctx.uniformMatrix2x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*6);
    }

  function _emscripten_glUniformMatrix2x4fv(location, count, transpose, value) {
      GLctx.uniformMatrix2x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*8);
    }

  function _emscripten_glUniformMatrix3fv(location, count, transpose, value) {
  
      GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*9);
    }

  function _emscripten_glUniformMatrix3x2fv(location, count, transpose, value) {
      GLctx.uniformMatrix3x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*6);
    }

  function _emscripten_glUniformMatrix3x4fv(location, count, transpose, value) {
      GLctx.uniformMatrix3x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*12);
    }

  function _emscripten_glUniformMatrix4fv(location, count, transpose, value) {
  
      GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*16);
    }

  function _emscripten_glUniformMatrix4x2fv(location, count, transpose, value) {
      GLctx.uniformMatrix4x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*8);
    }

  function _emscripten_glUniformMatrix4x3fv(location, count, transpose, value) {
      GLctx.uniformMatrix4x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*12);
    }

  function _emscripten_glUseProgram(program) {
      program = GL.programs[program];
      GLctx.useProgram(program);
      // Record the currently active program so that we can access the uniform
      // mapping table of that program.
      GLctx.currentProgram = program;
    }

  function _emscripten_glValidateProgram(program) {
      GLctx.validateProgram(GL.programs[program]);
    }

  function _emscripten_glVertexAttrib1f(x0, x1) { GLctx['vertexAttrib1f'](x0, x1) }

  function _emscripten_glVertexAttrib1fv(index, v) {
  
      GLctx.vertexAttrib1f(index, HEAPF32[v>>2]);
    }

  function _emscripten_glVertexAttrib2f(x0, x1, x2) { GLctx['vertexAttrib2f'](x0, x1, x2) }

  function _emscripten_glVertexAttrib2fv(index, v) {
  
      GLctx.vertexAttrib2f(index, HEAPF32[v>>2], HEAPF32[v+4>>2]);
    }

  function _emscripten_glVertexAttrib3f(x0, x1, x2, x3) { GLctx['vertexAttrib3f'](x0, x1, x2, x3) }

  function _emscripten_glVertexAttrib3fv(index, v) {
  
      GLctx.vertexAttrib3f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2]);
    }

  function _emscripten_glVertexAttrib4f(x0, x1, x2, x3, x4) { GLctx['vertexAttrib4f'](x0, x1, x2, x3, x4) }

  function _emscripten_glVertexAttrib4fv(index, v) {
  
      GLctx.vertexAttrib4f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2], HEAPF32[v+12>>2]);
    }

  function _emscripten_glVertexAttribDivisor(index, divisor) {
      GLctx['vertexAttribDivisor'](index, divisor);
    }

  function _emscripten_glVertexAttribDivisorANGLE(index, divisor) {
      GLctx['vertexAttribDivisor'](index, divisor);
    }

  function _emscripten_glVertexAttribDivisorARB(index, divisor) {
      GLctx['vertexAttribDivisor'](index, divisor);
    }

  function _emscripten_glVertexAttribDivisorEXT(index, divisor) {
      GLctx['vertexAttribDivisor'](index, divisor);
    }

  function _emscripten_glVertexAttribDivisorNV(index, divisor) {
      GLctx['vertexAttribDivisor'](index, divisor);
    }

  function _emscripten_glVertexAttribI4i(x0, x1, x2, x3, x4) { GLctx['vertexAttribI4i'](x0, x1, x2, x3, x4) }

  function _emscripten_glVertexAttribI4iv(index, v) {
      GLctx.vertexAttribI4i(index, HEAP32[v>>2], HEAP32[v+4>>2], HEAP32[v+8>>2], HEAP32[v+12>>2]);
    }

  function _emscripten_glVertexAttribI4ui(x0, x1, x2, x3, x4) { GLctx['vertexAttribI4ui'](x0, x1, x2, x3, x4) }

  function _emscripten_glVertexAttribI4uiv(index, v) {
      GLctx.vertexAttribI4ui(index, HEAPU32[v>>2], HEAPU32[v+4>>2], HEAPU32[v+8>>2], HEAPU32[v+12>>2]);
    }

  function _emscripten_glVertexAttribIPointer(index, size, type, stride, ptr) {
      GLctx['vertexAttribIPointer'](index, size, type, stride, ptr);
    }

  function _emscripten_glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
      GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
    }

  function _emscripten_glViewport(x0, x1, x2, x3) { GLctx['viewport'](x0, x1, x2, x3) }

  function _emscripten_glWaitSync(sync, flags, timeoutLo, timeoutHi) {
      // See WebGL2 vs GLES3 difference on GL_TIMEOUT_IGNORED above (https://www.khronos.org/registry/webgl/specs/latest/2.0/#5.15)
      GLctx.waitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi));
    }

  function _emscripten_has_asyncify() {
      return 0;
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function doRequestFullscreen(target, strategy) {
      if (!JSEvents.fullscreenEnabled()) return -1;
      target = findEventTarget(target);
      if (!target) return -4;
  
      if (!target.requestFullscreen
        && !target.webkitRequestFullscreen
        ) {
        return -3;
      }
  
      var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
  
      // Queue this function call if we're not currently in an event handler and the user saw it appropriate to do so.
      if (!canPerformRequests) {
        if (strategy.deferUntilInEventHandler) {
          JSEvents.deferCall(_JSEvents_requestFullscreen, 1 /* priority over pointer lock */, [target, strategy]);
          return 1;
        } else {
          return -2;
        }
      }
  
      return _JSEvents_requestFullscreen(target, strategy);
    }
  function _emscripten_request_fullscreen_strategy(target, deferUntilInEventHandler, fullscreenStrategy) {
      var strategy = {
        scaleMode: HEAP32[((fullscreenStrategy)>>2)],
        canvasResolutionScaleMode: HEAP32[(((fullscreenStrategy)+(4))>>2)],
        filteringMode: HEAP32[(((fullscreenStrategy)+(8))>>2)],
        deferUntilInEventHandler: deferUntilInEventHandler,
        canvasResizedCallback: HEAP32[(((fullscreenStrategy)+(12))>>2)],
        canvasResizedCallbackUserData: HEAP32[(((fullscreenStrategy)+(16))>>2)]
      };
  
      return doRequestFullscreen(target, strategy);
    }

  function _emscripten_request_pointerlock(target, deferUntilInEventHandler) {
      target = findEventTarget(target);
      if (!target) return -4;
      if (!target.requestPointerLock
        && !target.msRequestPointerLock
        ) {
        return -1;
      }
  
      var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
  
      // Queue this function call if we're not currently in an event handler and the user saw it appropriate to do so.
      if (!canPerformRequests) {
        if (deferUntilInEventHandler) {
          JSEvents.deferCall(requestPointerLock, 2 /* priority below fullscreen */, [target]);
          return 1;
        } else {
          return -2;
        }
      }
  
      return requestPointerLock(target);
    }

  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
        console.error('emscripten_realloc_buffer: Attempted to grow heap from ' + buffer.byteLength  + ' bytes to ' + size + ' bytes, but got error: ' + e);
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
  
      // Memory resize rules:
      // 1. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to 
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3. Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      // In CAN_ADDRESS_2GB mode, stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate full 4GB Wasm memories, the size will wrap
      // back to 0 bytes in Wasm side for any code that deals with heap sizes, which would require special casing all heap size related code to treat
      // 0 specially.
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        err('Cannot enlarge memory, asked to go up to ' + requestedSize + ' bytes, but the limit is ' + maxHeapSize + ' bytes!');
        return false;
      }
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      err('Failed to grow the heap from ' + oldSize + ' bytes to ' + newSize + ' bytes, not enough memory!');
      return false;
    }

  function _emscripten_sample_gamepad_data() {
      return (JSEvents.lastGamepadState = (navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null)))
        ? 0 : -1;
    }

  function registerBeforeUnloadEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString) {
      var beforeUnloadEventHandlerFunc = function(ev) {
        var e = ev || event;
  
        // Note: This is always called on the main browser thread, since it needs synchronously return a value!
        var confirmationMessage = wasmTable.get(callbackfunc)(eventTypeId, 0, userData);
        
        if (confirmationMessage) {
          confirmationMessage = UTF8ToString(confirmationMessage);
        }
        if (confirmationMessage) {
          e.preventDefault();
          e.returnValue = confirmationMessage;
          return confirmationMessage;
        }
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: beforeUnloadEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_beforeunload_callback_on_thread(userData, callbackfunc, targetThread) {
      if (typeof onbeforeunload === 'undefined') return -1;
      // beforeunload callback can only be registered on the main browser thread, because the page will go away immediately after returning from the handler,
      // and there is no time to start proxying it anywhere.
      if (targetThread !== 1) return -5;
      registerBeforeUnloadEventCallback(2, userData, true, callbackfunc, 28, "beforeunload");
      return 0;
    }

  function registerFocusEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.focusEvent) JSEvents.focusEvent = _malloc( 256 );
  
      var focusEventHandlerFunc = function(ev) {
        var e = ev || event;
  
        var nodeName = JSEvents.getNodeNameForTarget(e.target);
        var id = e.target.id ? e.target.id : '';
  
        var focusEvent = JSEvents.focusEvent;
        stringToUTF8(nodeName, focusEvent + 0, 128);
        stringToUTF8(id, focusEvent + 128, 128);
  
        if (wasmTable.get(callbackfunc)(eventTypeId, focusEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: focusEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_blur_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerFocusEventCallback(target, userData, useCapture, callbackfunc, 12, "blur", targetThread);
      return 0;
    }


  function _emscripten_set_element_css_size(target, width, height) {
      target = findEventTarget(target);
      if (!target) return -4;
  
      target.style.width = width + "px";
      target.style.height = height + "px";
  
      return 0;
    }

  function _emscripten_set_focus_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, "focus", targetThread);
      return 0;
    }

  function fillFullscreenChangeEventData(eventStruct) {
      var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      var isFullscreen = !!fullscreenElement;
      /** @suppress{checkTypes} */
      HEAP32[((eventStruct)>>2)] = isFullscreen;
      HEAP32[(((eventStruct)+(4))>>2)] = JSEvents.fullscreenEnabled();
      // If transitioning to fullscreen, report info about the element that is now fullscreen.
      // If transitioning to windowed mode, report info about the element that just was fullscreen.
      var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
      var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
      var id = (reportedElement && reportedElement.id) ? reportedElement.id : '';
      stringToUTF8(nodeName, eventStruct + 8, 128);
      stringToUTF8(id, eventStruct + 136, 128);
      HEAP32[(((eventStruct)+(264))>>2)] = reportedElement ? reportedElement.clientWidth : 0;
      HEAP32[(((eventStruct)+(268))>>2)] = reportedElement ? reportedElement.clientHeight : 0;
      HEAP32[(((eventStruct)+(272))>>2)] = screen.width;
      HEAP32[(((eventStruct)+(276))>>2)] = screen.height;
      if (isFullscreen) {
        JSEvents.previousFullscreenElement = fullscreenElement;
      }
    }
  function registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.fullscreenChangeEvent) JSEvents.fullscreenChangeEvent = _malloc( 280 );
  
      var fullscreenChangeEventhandlerFunc = function(ev) {
        var e = ev || event;
  
        var fullscreenChangeEvent = JSEvents.fullscreenChangeEvent;
  
        fillFullscreenChangeEventData(fullscreenChangeEvent);
  
        if (wasmTable.get(callbackfunc)(eventTypeId, fullscreenChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: fullscreenChangeEventhandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_fullscreenchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      if (!JSEvents.fullscreenEnabled()) return -1;
      target = findEventTarget(target);
      if (!target) return -4;
      registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "fullscreenchange", targetThread);
  
      // Unprefixed Fullscreen API shipped in Chromium 71 (https://bugs.chromium.org/p/chromium/issues/detail?id=383813)
      // As of Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitfullscreenchange. TODO: revisit this check once Safari ships unprefixed version.
      registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "webkitfullscreenchange", targetThread);
  
      return 0;
    }

  function registerGamepadEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.gamepadEvent) JSEvents.gamepadEvent = _malloc( 1432 );
  
      var gamepadEventHandlerFunc = function(ev) {
        var e = ev || event;
  
        var gamepadEvent = JSEvents.gamepadEvent;
        fillGamepadEventData(gamepadEvent, e["gamepad"]);
  
        if (wasmTable.get(callbackfunc)(eventTypeId, gamepadEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: gamepadEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_gamepadconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
      if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
      registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 26, "gamepadconnected", targetThread);
      return 0;
    }

  function _emscripten_set_gamepaddisconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
      if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
      registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 27, "gamepaddisconnected", targetThread);
      return 0;
    }

  function registerKeyEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.keyEvent) JSEvents.keyEvent = _malloc( 164 );
  
      var keyEventHandlerFunc = function(e) {
        assert(e);
  
        var keyEventData = JSEvents.keyEvent;
        var idx = keyEventData >> 2;
  
        HEAP32[idx + 0] = e.location;
        HEAP32[idx + 1] = e.ctrlKey;
        HEAP32[idx + 2] = e.shiftKey;
        HEAP32[idx + 3] = e.altKey;
        HEAP32[idx + 4] = e.metaKey;
        HEAP32[idx + 5] = e.repeat;
        HEAP32[idx + 6] = e.charCode;
        HEAP32[idx + 7] = e.keyCode;
        HEAP32[idx + 8] = e.which;
        stringToUTF8(e.key || '', keyEventData + 36, 32);
        stringToUTF8(e.code || '', keyEventData + 68, 32);
        stringToUTF8(e.char || '', keyEventData + 100, 32);
        stringToUTF8(e.locale || '', keyEventData + 132, 32);
  
        if (wasmTable.get(callbackfunc)(eventTypeId, keyEventData, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: keyEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_keydown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerKeyEventCallback(target, userData, useCapture, callbackfunc, 2, "keydown", targetThread);
      return 0;
    }

  function _emscripten_set_keypress_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerKeyEventCallback(target, userData, useCapture, callbackfunc, 1, "keypress", targetThread);
      return 0;
    }

  function _emscripten_set_keyup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerKeyEventCallback(target, userData, useCapture, callbackfunc, 3, "keyup", targetThread);
      return 0;
    }

  function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
      var browserIterationFunc = wasmTable.get(func);
      setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop);
    }

  function fillMouseEventData(eventStruct, e, target) {
      assert(eventStruct % 4 == 0);
      var idx = eventStruct >> 2;
      HEAP32[idx + 0] = e.screenX;
      HEAP32[idx + 1] = e.screenY;
      HEAP32[idx + 2] = e.clientX;
      HEAP32[idx + 3] = e.clientY;
      HEAP32[idx + 4] = e.ctrlKey;
      HEAP32[idx + 5] = e.shiftKey;
      HEAP32[idx + 6] = e.altKey;
      HEAP32[idx + 7] = e.metaKey;
      HEAP16[idx*2 + 16] = e.button;
      HEAP16[idx*2 + 17] = e.buttons;
  
      HEAP32[idx + 9] = e["movementX"]
        ;
  
      HEAP32[idx + 10] = e["movementY"]
        ;
  
      var rect = getBoundingClientRect(target);
      HEAP32[idx + 11] = e.clientX - rect.left;
      HEAP32[idx + 12] = e.clientY - rect.top;
  
    }
  function registerMouseEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.mouseEvent) JSEvents.mouseEvent = _malloc( 64 );
      target = findEventTarget(target);
  
      var mouseEventHandlerFunc = function(ev) {
        var e = ev || event;
  
        // TODO: Make this access thread safe, or this could update live while app is reading it.
        fillMouseEventData(JSEvents.mouseEvent, e, target);
  
        if (wasmTable.get(callbackfunc)(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString != 'mousemove' && eventTypeString != 'mouseenter' && eventTypeString != 'mouseleave', // Mouse move events do not allow fullscreen/pointer lock requests to be handled in them!
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: mouseEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_mousedown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 5, "mousedown", targetThread);
      return 0;
    }

  function _emscripten_set_mouseenter_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 33, "mouseenter", targetThread);
      return 0;
    }

  function _emscripten_set_mouseleave_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 34, "mouseleave", targetThread);
      return 0;
    }

  function _emscripten_set_mousemove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);
      return 0;
    }

  function _emscripten_set_mouseup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 6, "mouseup", targetThread);
      return 0;
    }

  function fillPointerlockChangeEventData(eventStruct) {
      var pointerLockElement = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
      var isPointerlocked = !!pointerLockElement;
      /** @suppress {checkTypes} */
      HEAP32[((eventStruct)>>2)] = isPointerlocked;
      var nodeName = JSEvents.getNodeNameForTarget(pointerLockElement);
      var id = (pointerLockElement && pointerLockElement.id) ? pointerLockElement.id : '';
      stringToUTF8(nodeName, eventStruct + 4, 128);
      stringToUTF8(id, eventStruct + 132, 128);
    }
  function registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.pointerlockChangeEvent) JSEvents.pointerlockChangeEvent = _malloc( 260 );
  
      var pointerlockChangeEventHandlerFunc = function(ev) {
        var e = ev || event;
  
        var pointerlockChangeEvent = JSEvents.pointerlockChangeEvent;
        fillPointerlockChangeEventData(pointerlockChangeEvent);
  
        if (wasmTable.get(callbackfunc)(eventTypeId, pointerlockChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: pointerlockChangeEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  /** @suppress {missingProperties} */
  function _emscripten_set_pointerlockchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      // TODO: Currently not supported in pthreads or in --proxy-to-worker mode. (In pthreads mode, document object is not defined)
      if (!document || !document.body || (!document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock)) {
        return -1;
      }
  
      target = findEventTarget(target);
      if (!target) return -4;
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "pointerlockchange", targetThread);
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mozpointerlockchange", targetThread);
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "webkitpointerlockchange", targetThread);
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mspointerlockchange", targetThread);
      return 0;
    }

  function registerUiEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.uiEvent) JSEvents.uiEvent = _malloc( 36 );
  
      target = findEventTarget(target);
  
      var uiEventHandlerFunc = function(ev) {
        var e = ev || event;
        if (e.target != target) {
          // Never take ui events such as scroll via a 'bubbled' route, but always from the direct element that
          // was targeted. Otherwise e.g. if app logs a message in response to a page scroll, the Emscripten log
          // message box could cause to scroll, generating a new (bubbled) scroll message, causing a new log print,
          // causing a new scroll, etc..
          return;
        }
        var b = document.body; // Take document.body to a variable, Closure compiler does not outline access to it on its own.
        if (!b) {
          // During a page unload 'body' can be null, with "Cannot read property 'clientWidth' of null" being thrown
          return;
        }
        var uiEvent = JSEvents.uiEvent;
        HEAP32[((uiEvent)>>2)] = e.detail;
        HEAP32[(((uiEvent)+(4))>>2)] = b.clientWidth;
        HEAP32[(((uiEvent)+(8))>>2)] = b.clientHeight;
        HEAP32[(((uiEvent)+(12))>>2)] = innerWidth;
        HEAP32[(((uiEvent)+(16))>>2)] = innerHeight;
        HEAP32[(((uiEvent)+(20))>>2)] = outerWidth;
        HEAP32[(((uiEvent)+(24))>>2)] = outerHeight;
        HEAP32[(((uiEvent)+(28))>>2)] = pageXOffset;
        HEAP32[(((uiEvent)+(32))>>2)] = pageYOffset;
        if (wasmTable.get(callbackfunc)(eventTypeId, uiEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: uiEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_resize_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, "resize", targetThread);
      return 0;
    }

  function registerTouchEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.touchEvent) JSEvents.touchEvent = _malloc( 1684 );
  
      target = findEventTarget(target);
  
      var touchEventHandlerFunc = function(e) {
        assert(e);
        var touches = {};
        var et = e.touches;
        for (var i = 0; i < et.length; ++i) {
          var touch = et[i];
          // Verify that browser does not recycle touch objects with old stale data, but reports new ones each time.
          assert(!touch.isChanged);
          assert(!touch.onTarget);
          touches[touch.identifier] = touch;
        }
        et = e.changedTouches;
        for (var i = 0; i < et.length; ++i) {
          var touch = et[i];
          // Verify that browser does not recycle touch objects with old stale data, but reports new ones each time.
          assert(!touch.onTarget);
          touch.isChanged = 1;
          touches[touch.identifier] = touch;
        }
        et = e.targetTouches;
        for (var i = 0; i < et.length; ++i) {
          touches[et[i].identifier].onTarget = 1;
        }
  
        var touchEvent = JSEvents.touchEvent;
        var idx = touchEvent>>2; // Pre-shift the ptr to index to HEAP32 to save code size
        HEAP32[idx + 1] = e.ctrlKey;
        HEAP32[idx + 2] = e.shiftKey;
        HEAP32[idx + 3] = e.altKey;
        HEAP32[idx + 4] = e.metaKey;
        idx += 5; // Advance to the start of the touch array.
        var targetRect = getBoundingClientRect(target);
        var numTouches = 0;
        for (var i in touches) {
          var t = touches[i];
          HEAP32[idx + 0] = t.identifier;
          HEAP32[idx + 1] = t.screenX;
          HEAP32[idx + 2] = t.screenY;
          HEAP32[idx + 3] = t.clientX;
          HEAP32[idx + 4] = t.clientY;
          HEAP32[idx + 5] = t.pageX;
          HEAP32[idx + 6] = t.pageY;
          HEAP32[idx + 7] = t.isChanged;
          HEAP32[idx + 8] = t.onTarget;
          HEAP32[idx + 9] = t.clientX - targetRect.left;
          HEAP32[idx + 10] = t.clientY - targetRect.top;
  
          idx += 13;
  
          if (++numTouches > 31) {
            break;
          }
        }
        HEAP32[((touchEvent)>>2)] = numTouches;
  
        if (wasmTable.get(callbackfunc)(eventTypeId, touchEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString == 'touchstart' || eventTypeString == 'touchend',
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: touchEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_touchcancel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, "touchcancel", targetThread);
      return 0;
    }

  function _emscripten_set_touchend_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, "touchend", targetThread);
      return 0;
    }

  function _emscripten_set_touchmove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, "touchmove", targetThread);
      return 0;
    }

  function _emscripten_set_touchstart_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, "touchstart", targetThread);
      return 0;
    }

  function fillVisibilityChangeEventData(eventStruct) {
      var visibilityStates = [ "hidden", "visible", "prerender", "unloaded" ];
      var visibilityState = visibilityStates.indexOf(document.visibilityState);
  
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress {checkTypes} */
      HEAP32[((eventStruct)>>2)] = document.hidden;
      HEAP32[(((eventStruct)+(4))>>2)] = visibilityState;
    }
  function registerVisibilityChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.visibilityChangeEvent) JSEvents.visibilityChangeEvent = _malloc( 8 );
  
      var visibilityChangeEventHandlerFunc = function(ev) {
        var e = ev || event;
  
        var visibilityChangeEvent = JSEvents.visibilityChangeEvent;
  
        fillVisibilityChangeEventData(visibilityChangeEvent);
  
        if (wasmTable.get(callbackfunc)(eventTypeId, visibilityChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: visibilityChangeEventHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_visibilitychange_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
    if (!specialHTMLTargets[1]) {
      return -4;
    }
      registerVisibilityChangeEventCallback(specialHTMLTargets[1], userData, useCapture, callbackfunc, 21, "visibilitychange", targetThread);
      return 0;
    }

  function registerWheelEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
      if (!JSEvents.wheelEvent) JSEvents.wheelEvent = _malloc( 96 );
  
      // The DOM Level 3 events spec event 'wheel'
      var wheelHandlerFunc = function(ev) {
        var e = ev || event;
        var wheelEvent = JSEvents.wheelEvent;
        fillMouseEventData(wheelEvent, e, target);
        HEAPF64[(((wheelEvent)+(64))>>3)] = e["deltaX"];
        HEAPF64[(((wheelEvent)+(72))>>3)] = e["deltaY"];
        HEAPF64[(((wheelEvent)+(80))>>3)] = e["deltaZ"];
        HEAP32[(((wheelEvent)+(88))>>2)] = e["deltaMode"];
        if (wasmTable.get(callbackfunc)(eventTypeId, wheelEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: target,
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: wheelHandlerFunc,
        useCapture: useCapture
      };
      JSEvents.registerOrRemoveHandler(eventHandler);
    }
  function _emscripten_set_wheel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
      target = findEventTarget(target);
      if (typeof target.onwheel !== 'undefined') {
        registerWheelEventCallback(target, userData, useCapture, callbackfunc, 9, "wheel", targetThread);
        return 0;
      } else {
        return -1;
      }
    }

  function _emscripten_set_window_title(title) {
      setWindowTitle(AsciiToString(title));
    }

  function _emscripten_sleep() {
      throw 'Please compile your program with async support in order to use asynchronous operations like emscripten_sleep';
    }

  function _emscripten_thread_sleep(msecs) {
      var start = _emscripten_get_now();
      while (_emscripten_get_now() - start < msecs) {
        // Do nothing.
      }
    }

  var ENV={};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }
  function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
  function _environ_get(__environ, environ_buf) {try {
  
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[(((__environ)+(i * 4))>>2)] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _environ_sizes_get(penviron_count, penviron_buf_size) {try {
  
      var strings = getEnvStrings();
      HEAP32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }


  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_fdstat_get(fd, pbuf) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      // All character devices are terminals (other things a Linux system would
      // assume is a character device, like the mouse, we have special APIs for).
      var type = stream.tty ? 2 :
                 FS.isDir(stream.mode) ? 3 :
                 FS.isLink(stream.mode) ? 7 :
                 4;
      HEAP8[((pbuf)>>0)] = type;
      // TODO HEAP16[(((pbuf)+(2))>>1)] = ?;
      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(8))>>2)] = tempI64[0],HEAP32[(((pbuf)+(12))>>2)] = tempI64[1]);
      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(16))>>2)] = tempI64[0],HEAP32[(((pbuf)+(20))>>2)] = tempI64[1]);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {try {
  
      
      assert(!offset_high, 'offsets over 2^32 not yet supported');
      var stream = SYSCALLS.getStreamFromFD(fd)
      var num = SYSCALLS.doReadv(stream, iov, iovcnt, offset_low);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_pwrite(fd, iov, iovcnt, offset_low, offset_high, pnum) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd)
      assert(!offset_high, 'offsets over 2^32 not yet supported');
      var num = SYSCALLS.doWritev(stream, iov, iovcnt, offset_low);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_sync(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      if (stream.stream_ops && stream.stream_ops.fsync) {
        return -stream.stream_ops.fsync(stream);
      }
      return 0; // we can't do anything synchronously; the in-memory FS is already synced to
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _flock(fd, operation) {
      // int flock(int fd, int operation);
      // Pretend to succeed
      return 0;
    }

  var GAI_ERRNO_MESSAGES={};
  function _gai_strerror(val) {
      var buflen = 256;
  
      // On first call to gai_strerror we initialise the buffer and populate the error messages.
      if (!_gai_strerror.buffer) {
          _gai_strerror.buffer = _malloc(buflen);
  
          GAI_ERRNO_MESSAGES['0'] = 'Success';
          GAI_ERRNO_MESSAGES['' + -1] = 'Invalid value for \'ai_flags\' field';
          GAI_ERRNO_MESSAGES['' + -2] = 'NAME or SERVICE is unknown';
          GAI_ERRNO_MESSAGES['' + -3] = 'Temporary failure in name resolution';
          GAI_ERRNO_MESSAGES['' + -4] = 'Non-recoverable failure in name res';
          GAI_ERRNO_MESSAGES['' + -6] = '\'ai_family\' not supported';
          GAI_ERRNO_MESSAGES['' + -7] = '\'ai_socktype\' not supported';
          GAI_ERRNO_MESSAGES['' + -8] = 'SERVICE not supported for \'ai_socktype\'';
          GAI_ERRNO_MESSAGES['' + -10] = 'Memory allocation failure';
          GAI_ERRNO_MESSAGES['' + -11] = 'System error returned in \'errno\'';
          GAI_ERRNO_MESSAGES['' + -12] = 'Argument buffer overflow';
      }
  
      var msg = 'Unknown error';
  
      if (val in GAI_ERRNO_MESSAGES) {
        if (GAI_ERRNO_MESSAGES[val].length > buflen - 1) {
          msg = 'Message too long'; // EMSGSIZE message. This should never occur given the GAI_ERRNO_MESSAGES above.
        } else {
          msg = GAI_ERRNO_MESSAGES[val];
        }
      }
  
      writeAsciiToMemory(msg, _gai_strerror.buffer);
      return _gai_strerror.buffer;
    }

  function _getTempRet0() {
      return getTempRet0();
    }

  function _getentropy(buffer, size) {
      if (!_getentropy.randomDevice) {
        _getentropy.randomDevice = getRandomDevice();
      }
      for (var i = 0; i < size; i++) {
        HEAP8[(((buffer)+(i))>>0)] = _getentropy.randomDevice()
      }
      return 0;
    }

  function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[((ptr)>>2)] = (now/1000)|0; // seconds
      HEAP32[(((ptr)+(4))>>2)] = ((now % 1000)*1000)|0; // microseconds
      return 0;
    }

  function _gmtime_r(time, tmPtr) {
      var date = new Date(HEAP32[((time)>>2)]*1000);
      HEAP32[((tmPtr)>>2)] = date.getUTCSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getUTCMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getUTCHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getUTCDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getUTCMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getUTCFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getUTCDay();
      HEAP32[(((tmPtr)+(36))>>2)] = 0;
      HEAP32[(((tmPtr)+(32))>>2)] = 0;
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      // Allocate a string "GMT" for us to point to.
      if (!_gmtime_r.GMTString) _gmtime_r.GMTString = allocateUTF8("GMT");
      HEAP32[(((tmPtr)+(40))>>2)] = _gmtime_r.GMTString;
      return tmPtr;
    }

  function _llvm_eh_typeid_for(type) {
      return type;
    }

  function _tzset() {
      // TODO: Use (malleable) environment variables instead of system settings.
      if (_tzset.called) return;
      _tzset.called = true;
  
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
  
      // Local standard timezone offset. Local standard time is not adjusted for daylight savings.
      // This code uses the fact that getTimezoneOffset returns a greater value during Standard Time versus Daylight Saving Time (DST). 
      // Thus it determines the expected output during Standard Time, and it compares whether the output of the given date the same (Standard) or less (DST).
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAP32[((__get_timezone())>>2)] = stdTimezoneOffset * 60;
  
      HEAP32[((__get_daylight())>>2)] = Number(winterOffset != summerOffset);
  
      function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT";
      };
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = allocateUTF8(winterName);
      var summerNamePtr = allocateUTF8(summerName);
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        HEAP32[((__get_tzname())>>2)] = winterNamePtr;
        HEAP32[(((__get_tzname())+(4))>>2)] = summerNamePtr;
      } else {
        HEAP32[((__get_tzname())>>2)] = summerNamePtr;
        HEAP32[(((__get_tzname())+(4))>>2)] = winterNamePtr;
      }
    }
  function _localtime_r(time, tmPtr) {
      _tzset();
      var date = new Date(HEAP32[((time)>>2)]*1000);
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
  
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      HEAP32[(((tmPtr)+(36))>>2)] = -(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)] = dst;
  
      var zonePtr = HEAP32[(((__get_tzname())+(dst ? 4 : 0))>>2)];
      HEAP32[(((tmPtr)+(40))>>2)] = zonePtr;
  
      return tmPtr;
    }

  var MONO={pump_count:0,timeout_queue:[],spread_timers_maximum:0,_vt_stack:[],mono_wasm_runtime_is_ready:false,mono_wasm_ignore_pdb_load_errors:true,_id_table:{},pump_message:function () {
  			if (!this.mono_background_exec)
  				this.mono_background_exec = Module.cwrap ("mono_background_exec", null);
  			while (MONO.timeout_queue.length > 0) {
  				--MONO.pump_count;
  				MONO.timeout_queue.shift()();
  			}
  			while (MONO.pump_count > 0) {
  				--MONO.pump_count;
  				this.mono_background_exec ();
  			}
  		},export_functions:function (module) {
  			module ["pump_message"] = MONO.pump_message.bind(MONO);
  			module ["prevent_timer_throttling"] = MONO.prevent_timer_throttling.bind(MONO);
  			module ["mono_wasm_set_timeout_exec"] = MONO.mono_wasm_set_timeout_exec.bind(MONO);
  			module ["mono_load_runtime_and_bcl"] = MONO.mono_load_runtime_and_bcl.bind(MONO);
  			module ["mono_load_runtime_and_bcl_args"] = MONO.mono_load_runtime_and_bcl_args.bind(MONO);
  			module ["mono_wasm_load_bytes_into_heap"] = MONO.mono_wasm_load_bytes_into_heap.bind(MONO);
  			module ["mono_wasm_load_icu_data"] = MONO.mono_wasm_load_icu_data.bind(MONO);
  			module ["mono_wasm_get_icudt_name"] = MONO.mono_wasm_get_icudt_name.bind(MONO);
  			module ["mono_wasm_globalization_init"] = MONO.mono_wasm_globalization_init.bind(MONO);
  			module ["mono_wasm_get_loaded_files"] = MONO.mono_wasm_get_loaded_files.bind(MONO);
  			module ["mono_wasm_new_root_buffer"] = MONO.mono_wasm_new_root_buffer.bind(MONO);
  			module ["mono_wasm_new_root_buffer_from_pointer"] = MONO.mono_wasm_new_root_buffer_from_pointer.bind(MONO);
  			module ["mono_wasm_new_root"] = MONO.mono_wasm_new_root.bind(MONO);
  			module ["mono_wasm_new_roots"] = MONO.mono_wasm_new_roots.bind(MONO);
  			module ["mono_wasm_release_roots"] = MONO.mono_wasm_release_roots.bind(MONO);
  			module ["mono_wasm_load_config"] = MONO.mono_wasm_load_config.bind(MONO);
  		},_base64Converter:{_base64Table:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"],_makeByteReader:function (bytes, index, count) {
  				var position = (typeof (index) === "number") ? index : 0;
  				var endpoint;
  
  				if (typeof (count) === "number")
  					endpoint = (position + count);
  				else
  					endpoint = (bytes.length - position);
  
  				var result = {
  					read: function () {
  						if (position >= endpoint)
  							return false;
  
  						var nextByte = bytes[position];
  						position += 1;
  						return nextByte;
  					}
  				};
  
  				Object.defineProperty(result, "eof", {
  					get: function () {
  						return (position >= endpoint);
  					},
  					configurable: true,
  					enumerable: true
  				});
  
  				return result;
  			},toBase64StringImpl:function (inArray, offset, length) {
  				var reader = this._makeByteReader(inArray, offset, length);
  				var result = "";
  				var ch1 = 0, ch2 = 0, ch3 = 0, bits = 0, equalsCount = 0, sum = 0;
  				var mask1 = (1 << 24) - 1, mask2 = (1 << 18) - 1, mask3 = (1 << 12) - 1, mask4 = (1 << 6) - 1;
  				var shift1 = 18, shift2 = 12, shift3 = 6, shift4 = 0;
  
  				while (true) {
  					ch1 = reader.read();
  					ch2 = reader.read();
  					ch3 = reader.read();
  
  					if (ch1 === false)
  						break;
  					if (ch2 === false) {
  						ch2 = 0;
  						equalsCount += 1;
  					}
  					if (ch3 === false) {
  						ch3 = 0;
  						equalsCount += 1;
  					}
  
  					// Seems backwards, but is right!
  					sum = (ch1 << 16) | (ch2 << 8) | (ch3 << 0);
  
  					bits = (sum & mask1) >> shift1;
  					result += this._base64Table[bits];
  					bits = (sum & mask2) >> shift2;
  					result += this._base64Table[bits];
  
  					if (equalsCount < 2) {
  						bits = (sum & mask3) >> shift3;
  						result += this._base64Table[bits];
  					}
  
  					if (equalsCount === 2) {
  						result += "==";
  					} else if (equalsCount === 1) {
  						result += "=";
  					} else {
  						bits = (sum & mask4) >> shift4;
  						result += this._base64Table[bits];
  					}
  				}
  
  				return result;
  			}},_mono_wasm_root_buffer_prototype:{_throw_index_out_of_range:function () {
  				throw new Error ("index out of range");
  			},_check_in_range:function (index) {
  				if ((index >= this.__count) || (index < 0))
  					this._throw_index_out_of_range();
  			},get_address:function (index) {
  				this._check_in_range (index);
  				return this.__offset + (index * 4);
  			},get_address_32:function (index) {
  				this._check_in_range (index);
  				return this.__offset32 + index;
  			},get:function (index) {
  				this._check_in_range (index);
  				return Module.HEAP32[this.get_address_32 (index)];
  			},set:function (index, value) {
  				Module.HEAP32[this.get_address_32 (index)] = value;
  				return value;
  			},_unsafe_get:function (index) {
  				return Module.HEAP32[this.__offset32 + index];
  			},_unsafe_set:function (index, value) {
  				Module.HEAP32[this.__offset32 + index] = value;
  			},clear:function () {
  				if (this.__offset)
  					MONO._zero_region (this.__offset, this.__count * 4);
  			},release:function () {
  				if (this.__offset && this.__ownsAllocation) {
  					MONO.mono_wasm_deregister_root (this.__offset);
  					MONO._zero_region (this.__offset, this.__count * 4);
  					Module._free (this.__offset);
  				}
  
  				this.__handle = this.__offset = this.__count = this.__offset32 = 0;
  			},toString:function () {
  				return "[root buffer @" + this.get_address (0) + ", size " + this.__count + "]";
  			}},_scratch_root_buffer:null,_scratch_root_free_indices:null,_scratch_root_free_indices_count:0,_scratch_root_free_instances:[],_mono_wasm_root_prototype:{get_address:function () {
  				return this.__buffer.get_address (this.__index);
  			},get_address_32:function () {
  				return this.__buffer.get_address_32 (this.__index);
  			},get:function () {
  				var result = this.__buffer._unsafe_get (this.__index);
  				return result;
  			},set:function (value) {
  				this.__buffer._unsafe_set (this.__index, value);
  				return value;
  			},valueOf:function () {
  				return this.get ();
  			},clear:function () {
  				this.set (0);
  			},release:function () {
  				const maxPooledInstances = 128;
  				if (MONO._scratch_root_free_instances.length > maxPooledInstances) {
  					MONO._mono_wasm_release_scratch_index (this.__index);
  					this.__buffer = 0;
  					this.__index = 0;
  				} else {
  					this.set (0);
  					MONO._scratch_root_free_instances.push (this);
  				}
  			},toString:function () {
  				return "[root @" + this.get_address () + "]";
  			}},_mono_wasm_release_scratch_index:function (index) {
  			if (index === undefined)
  				return;
  
  			this._scratch_root_buffer.set (index, 0);
  			this._scratch_root_free_indices[this._scratch_root_free_indices_count] = index;
  			this._scratch_root_free_indices_count++;
  		},_mono_wasm_claim_scratch_index:function () {
  			if (!this._scratch_root_buffer) {
  				const maxScratchRoots = 8192;
  				this._scratch_root_buffer = this.mono_wasm_new_root_buffer (maxScratchRoots, "js roots");
  
  				this._scratch_root_free_indices = new Int32Array (maxScratchRoots);
  				this._scratch_root_free_indices_count = maxScratchRoots;
  				for (var i = 0; i < maxScratchRoots; i++)
  					this._scratch_root_free_indices[i] = maxScratchRoots - i - 1;
  
  				Object.defineProperty (this._mono_wasm_root_prototype, "value", {
  					get: this._mono_wasm_root_prototype.get,
  					set: this._mono_wasm_root_prototype.set,
  					configurable: false
  				});
  			}
  
  			if (this._scratch_root_free_indices_count < 1)
  				throw new Error ("Out of scratch root space");
  
  			var result = this._scratch_root_free_indices[this._scratch_root_free_indices_count - 1];
  			this._scratch_root_free_indices_count--;
  			return result;
  		},_zero_region:function (byteOffset, sizeBytes) {
  			if (((byteOffset % 4) === 0) && ((sizeBytes % 4) === 0))
  				Module.HEAP32.fill(0, byteOffset / 4, sizeBytes / 4);
  			else
  				Module.HEAP8.fill(0, byteOffset, sizeBytes);
  		},mono_wasm_new_root_buffer:function (capacity, msg) {
  			if (!this.mono_wasm_register_root || !this.mono_wasm_deregister_root) {
  				this.mono_wasm_register_root = Module.cwrap ("mono_wasm_register_root", "number", ["number", "number", "string"]);
  				this.mono_wasm_deregister_root = Module.cwrap ("mono_wasm_deregister_root", null, ["number"]);
  			}
  
  			if (capacity <= 0)
  				throw new Error ("capacity >= 1");
  
  			capacity = capacity | 0;
  
  			var capacityBytes = capacity * 4;
  			var offset = Module._malloc (capacityBytes);
  			if ((offset % 4) !== 0)
  				throw new Error ("Malloc returned an unaligned offset");
  
  			this._zero_region (offset, capacityBytes);
  
  			var result = Object.create (this._mono_wasm_root_buffer_prototype);
  			result.__offset = offset;
  			result.__offset32 = (offset / 4) | 0;
  			result.__count = capacity;
  			result.length = capacity;
  			result.__handle = this.mono_wasm_register_root (offset, capacityBytes, msg || 0);
  			result.__ownsAllocation = true;
  
  			return result;
  		},mono_wasm_new_root_buffer_from_pointer:function (offset, capacity, msg) {
  			if (!this.mono_wasm_register_root || !this.mono_wasm_deregister_root) {
  				this.mono_wasm_register_root = Module.cwrap ("mono_wasm_register_root", "number", ["number", "number", "string"]);
  				this.mono_wasm_deregister_root = Module.cwrap ("mono_wasm_deregister_root", null, ["number"]);
  			}
  
  			if (capacity <= 0)
  				throw new Error ("capacity >= 1");
  
  			capacity = capacity | 0;
  
  			var capacityBytes = capacity * 4;
  			if ((offset % 4) !== 0)
  				throw new Error ("Unaligned offset");
  
  			this._zero_region (offset, capacityBytes);
  
  			var result = Object.create (this._mono_wasm_root_buffer_prototype);
  			result.__offset = offset;
  			result.__offset32 = (offset / 4) | 0;
  			result.__count = capacity;
  			result.length = capacity;
  			result.__handle = this.mono_wasm_register_root (offset, capacityBytes, msg || 0);
  			result.__ownsAllocation = false;
  
  			return result;
  		},mono_wasm_new_root:function (value) {
  			var result;
  
  			if (this._scratch_root_free_instances.length > 0) {
  				result = this._scratch_root_free_instances.pop ();
  			} else {
  				var index = this._mono_wasm_claim_scratch_index ();
  				var buffer = this._scratch_root_buffer;
  
  				result = Object.create (this._mono_wasm_root_prototype);
  				result.__buffer = buffer;
  				result.__index = index;
  			}
  
  			if (value !== undefined) {
  				if (typeof (value) !== "number")
  					throw new Error ("value must be an address in the managed heap");
  
  				result.set (value);
  			} else {
  				result.set (0);
  			}
  
  			return result;
  		},mono_wasm_new_roots:function (count_or_values) {
  			var result;
  
  			if (Array.isArray (count_or_values)) {
  				result = new Array (count_or_values.length);
  				for (var i = 0; i < result.length; i++)
  					result[i] = this.mono_wasm_new_root (count_or_values[i]);
  			} else if ((count_or_values | 0) > 0) {
  				result = new Array (count_or_values);
  				for (var i = 0; i < result.length; i++)
  					result[i] = this.mono_wasm_new_root ();
  			} else {
  				throw new Error ("count_or_values must be either an array or a number greater than 0");
  			}
  
  			return result;
  		},mono_wasm_release_roots:function () {
  			for (var i = 0; i < arguments.length; i++) {
  				if (!arguments[i])
  					continue;
  
  				arguments[i].release ();
  			}
  		},mono_text_decoder:undefined,string_decoder:{copy:function (mono_string) {
  				if (mono_string === 0)
  					return null;
  
  				if (!this.mono_wasm_string_root)
  					this.mono_wasm_string_root = MONO.mono_wasm_new_root ();
  				this.mono_wasm_string_root.value = mono_string;
  
  				if (!this.mono_wasm_string_get_data)
  					this.mono_wasm_string_get_data = Module.cwrap ("mono_wasm_string_get_data", null, ['number', 'number', 'number', 'number']);
  				
  				if (!this.mono_wasm_string_decoder_buffer)
  					this.mono_wasm_string_decoder_buffer = Module._malloc(12);
  				
  				let ppChars = this.mono_wasm_string_decoder_buffer + 0,
  					pLengthBytes = this.mono_wasm_string_decoder_buffer + 4,
  					pIsInterned = this.mono_wasm_string_decoder_buffer + 8;
  				
  				this.mono_wasm_string_get_data (mono_string, ppChars, pLengthBytes, pIsInterned);
  
  				// TODO: Is this necessary?
  				if (!this.mono_wasm_empty_string)
  					this.mono_wasm_empty_string = "";
  
  				let result = this.mono_wasm_empty_string;
  				let lengthBytes = Module.HEAP32[pLengthBytes / 4],
  					pChars = Module.HEAP32[ppChars / 4],
  					isInterned = Module.HEAP32[pIsInterned / 4];
  
  				if (pLengthBytes && pChars) {
  					if (
  						isInterned && 
  						MONO.interned_string_table && 
  						MONO.interned_string_table.has(mono_string)
  					) {
  						result = MONO.interned_string_table.get(mono_string);
  						// console.log("intern table cache hit", mono_string, result.length);
  					} else {
  						result = this.decode(pChars, pChars + lengthBytes, false);
  						if (isInterned) {
  							if (!MONO.interned_string_table)
  								MONO.interned_string_table = new Map();
  							// console.log("interned", mono_string, result.length);
  							MONO.interned_string_table.set(mono_string, result);
  						}
  					}						
  				}
  
  				this.mono_wasm_string_root.value = 0;
  				return result;
  			},decode:function (start, end, save) {
  				if (!MONO.mono_text_decoder) {
  					MONO.mono_text_decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
  				}
  
  				var str = "";
  				if (MONO.mono_text_decoder) {
  					// When threading is enabled, TextDecoder does not accept a view of a
  					// SharedArrayBuffer, we must make a copy of the array first.
  					var subArray = typeof SharedArrayBuffer !== 'undefined' && Module.HEAPU8.buffer instanceof SharedArrayBuffer
  						? Module.HEAPU8.slice(start, end)
  						: Module.HEAPU8.subarray(start, end);
  
  					str = MONO.mono_text_decoder.decode(subArray);
  				} else {
  					for (var i = 0; i < end - start; i+=2) {
  						var char = Module.getValue (start + i, 'i16');
  						str += String.fromCharCode (char);
  					}
  				}
  				if (save)
  					this.result = str;
  
  				return str;
  			}},mono_wasm_add_dbg_command_received:function(res_ok, id, buffer, buffer_len) {
  			const assembly_data = new Uint8Array(Module.HEAPU8.buffer, buffer, buffer_len);
  			const base64String = MONO._base64Converter.toBase64StringImpl(assembly_data);
  			const buffer_obj = {
  				res_ok,
  				res: {
  						id,
  						value: base64String
  				}
  			}
  			MONO.commands_received = buffer_obj;
  		},mono_wasm_malloc_and_set_debug_buffer:function (command_parameters)
  		{
  			if (command_parameters.length > this._debugger_buffer_len)
  			{
  				if (this._debugger_buffer)
  					Module._free (this._debugger_buffer);
  				this._debugger_buffer_len = Math.max(command_parameters.length, this._debugger_buffer_len, 256);
  				this._debugger_buffer = Module._malloc (this._debugger_buffer_len);
  			}
  			this._debugger_heap_bytes = new Uint8Array (Module.HEAPU8.buffer, this._debugger_buffer, this._debugger_buffer_len);
  			this._debugger_heap_bytes.set(this._base64_to_uint8 (command_parameters));
  		},mono_wasm_send_dbg_command_with_parms:function (id, command_set, command, command_parameters, length, valtype, newvalue)
  		{
  			this.mono_wasm_malloc_and_set_debug_buffer(command_parameters);
  			this._c_fn_table.mono_wasm_send_dbg_command_with_parms_wrapper (id, command_set, command, this._debugger_buffer, length, valtype, newvalue.toString());
  			let { res_ok, res } = MONO.commands_received;
  			if (!res_ok)
  				throw new Error (`Failed on mono_wasm_invoke_method_debugger_agent_with_parms`);
  			return res;
  		},mono_wasm_send_dbg_command:function (id, command_set, command, command_parameters)
  		{
  			this.mono_wasm_malloc_and_set_debug_buffer(command_parameters);
  			this._c_fn_table.mono_wasm_send_dbg_command_wrapper (id, command_set, command, this._debugger_buffer, command_parameters.length);
  			let { res_ok, res } = MONO.commands_received;
  			if (!res_ok)
  				throw new Error (`Failed on mono_wasm_send_dbg_command`);
  			return res;
  
  		},mono_wasm_get_dbg_command_info:function ()
  		{
  			let { res_ok, res } =  MONO.commands_received;
  			if (!res_ok)
  				throw new Error (`Failed on mono_wasm_get_dbg_command_info`);
  			return res;
  		},_get_cfo_res_details:function (objectId, args) {
  			if (!(objectId in this._call_function_res_cache))
  				throw new Error(`Could not find any object with id ${objectId}`);
  
  			const real_obj = this._call_function_res_cache [objectId];
  
  			const descriptors = Object.getOwnPropertyDescriptors (real_obj);
  			if (args.accessorPropertiesOnly) {
  				Object.keys (descriptors).forEach (k => {
  					if (descriptors [k].get === undefined)
  						Reflect.deleteProperty (descriptors, k);
  				});
  			}
  
  			let res_details = [];
  			Object.keys (descriptors).forEach (k => {
  				let new_obj;
  				let prop_desc = descriptors [k];
  				if (typeof prop_desc.value == "object") {
  					// convert `{value: { type='object', ... }}`
  					// to      `{ name: 'foo', value: { type='object', ... }}
  					new_obj = Object.assign ({ name: k }, prop_desc);
  				} else if (prop_desc.value !== undefined) {
  					// This is needed for values that were not added by us,
  					// thus are like { value: 5 }
  					// instead of    { value: { type = 'number', value: 5 }}
  					//
  					// This can happen, for eg., when `length` gets added for arrays
  					// or `__proto__`.
  					new_obj = {
  						name: k,
  						// merge/add `type` and `description` to `d.value`
  						value: Object.assign ({ type: (typeof prop_desc.value), description: '' + prop_desc.value },
  												prop_desc)
  					};
  				} else if (prop_desc.get !== undefined) {
  					// The real_obj has the actual getter. We are just returning a placeholder
  					// If the caller tries to run function on the cfo_res object,
  					// that accesses this property, then it would be run on `real_obj`,
  					// which *has* the original getter
  					new_obj = {
  						name: k,
  						get: {
  							className: "Function",
  							description: `get ${k} () {}`,
  							type: "function"
  						}
  					};
  				} else {
  					new_obj = { name: k, value: { type: "symbol", value: "<Unknown>", description: "<Unknown>"} };
  				}
  
  				res_details.push (new_obj);
  			});
  
  			return { __value_as_json_string__: JSON.stringify (res_details) };
  		},mono_wasm_get_details:function (objectId, args={}) {
  				return this._get_cfo_res_details (`dotnet:cfo_res:${objectId}`, args);
  		},_cache_call_function_res:function (obj) {
  			const id = `dotnet:cfo_res:${this._next_call_function_res_id++}`;
  			this._call_function_res_cache[id] = obj;
  			return id;
  		},mono_wasm_release_object:function (objectId) {
  			if (objectId in this._cache_call_function_res)
  				delete this._cache_call_function_res[objectId];
  		},_create_proxy_from_object_id:function (objectId, details) {
  			if (objectId.startsWith ('dotnet:array:'))
  			{
  				if (details.dimensionsDetails == undefined || details.dimensionsDetails.length == 1)
  				{
  					const ret = details.items.map (p => p.value);
  					return ret;
  				}
  			}
  
  			let proxy = {};
  			Object.keys (details).forEach (p => {
  				var prop = details [p];
  				if (prop.get !== undefined) {
  					Object.defineProperty (proxy,
  							prop.name,
  							{ get () { return MONO.mono_wasm_send_dbg_command(-1, prop.get.commandSet, prop.get.command, prop.get.buffer, prop.get.length); },
  							set: function (newValue) { MONO.mono_wasm_send_dbg_command_with_parms(-1, prop.set.commandSet, prop.set.command, prop.set.buffer, prop.set.length, prop.set.valtype, newValue); return MONO.commands_received.res_ok;}}
  					);
  				} else if (prop.set !== undefined ){
  					Object.defineProperty (proxy,
  						prop.name,
  						{ get () { return prop.value; },
  						  set: function (newValue) { MONO.mono_wasm_send_dbg_command_with_parms(-1, prop.set.commandSet, prop.set.command, prop.set.buffer, prop.set.length, prop.set.valtype, newValue); return MONO.commands_received.res_ok;}}
  					);
  				} else {
  					proxy [prop.name] = prop.value;
  				}
  			});
  			return proxy;
  		},mono_wasm_call_function_on:function (request) {
  			if (request.arguments != undefined && !Array.isArray (request.arguments))
  				throw new Error (`"arguments" should be an array, but was ${request.arguments}`);
  
  			const objId = request.objectId;
  			const details = request.details;
  			let proxy;
  
  			if (objId.startsWith ('dotnet:cfo_res:')) {
  				if (objId in this._call_function_res_cache)
  					proxy = this._call_function_res_cache [objId];
  				else
  					throw new Error (`Unknown object id ${objId}`);
  			} else {
  				proxy = this._create_proxy_from_object_id (objId, details);
  			}
  
  			const fn_args = request.arguments != undefined ? request.arguments.map(a => JSON.stringify(a.value)) : [];
  			const fn_eval_str = `var fn = ${request.functionDeclaration}; fn.call (proxy, ...[${fn_args}]);`;
  
  			const fn_res = eval (fn_eval_str);
  			if (fn_res === undefined)
  				return { type: "undefined" };
  
  			if (Object (fn_res) !== fn_res)
  			{
  				if (typeof(fn_res) == "object" && fn_res == null)
  					return { type: typeof(fn_res), subtype: `${fn_res}`, value: null };
  				return { type: typeof(fn_res), description: `${fn_res}`, value: `${fn_res}`};
  			}
  
  			if (request.returnByValue && fn_res.subtype == undefined)
  				return {type: "object", value: fn_res};
  			if (Object.getPrototypeOf (fn_res) == Array.prototype) {
  
  				const fn_res_id = this._cache_call_function_res (fn_res);
  
  				return {
  					type: "object",
  					subtype: "array",
  					className: "Array",
  					description: `Array(${fn_res.length})`,
  					objectId: fn_res_id
  				};
  			}
  			if (fn_res.value !== undefined || fn_res.subtype !== undefined) {
  				return fn_res;
  			}
  
  			if (fn_res == proxy)
  				return { type: "object", className: "Object", description: "Object", objectId: objId };
  			const fn_res_id = this._cache_call_function_res (fn_res);
  			return { type: "object", className: "Object", description: "Object", objectId: fn_res_id };
  		},_clear_per_step_state:function () {
  			this._next_id_var = 0;
  			this._id_table = {};
  		},mono_wasm_debugger_resume:function () {
  			this._clear_per_step_state ();
  		},mono_wasm_detach_debugger:function () {
  			if (!this.mono_wasm_set_is_debugger_attached)
  				this.mono_wasm_set_is_debugger_attached = Module.cwrap ('mono_wasm_set_is_debugger_attached', 'void', ['bool']);
  			this.mono_wasm_set_is_debugger_attached(false);
  		},_register_c_fn:function (name, ...args) {
  			Object.defineProperty (this._c_fn_table, name + '_wrapper', { value: Module.cwrap (name, ...args) });
  		},_register_c_var_fn:function (name, ret_type, params) {
  			if (ret_type !== 'bool')
  				throw new Error (`Bug: Expected a C function signature that returns bool`);
  
  			this._register_c_fn (name, ret_type, params);
  			Object.defineProperty (this, name + '_info', {
  				value: function (...args) {
  					MONO.var_info = [];
  					const res_ok = MONO._c_fn_table [name + '_wrapper'] (...args);
  					let res = MONO.var_info;
  					MONO.var_info = [];
  					if (res_ok) {
  						res = this._fixup_name_value_objects (res);
  						return { res_ok, res };
  					}
  
  					return { res_ok, res: undefined };
  				}
  			});
  		},mono_wasm_runtime_ready:function () {
  			this.mono_wasm_runtime_is_ready = true;
  			this._clear_per_step_state ();
  
  			// FIXME: where should this go?
  			this._next_call_function_res_id = 0;
  			this._call_function_res_cache = {};
  
  			this._c_fn_table = {};
  			this._register_c_fn     ('mono_wasm_send_dbg_command',							'bool', [ 'number', 'number', 'number', 'number', 'number' ]);
  			this._register_c_fn     ('mono_wasm_send_dbg_command_with_parms', 				'bool', [ 'number', 'number', 'number', 'number', 'number', 'number', 'string' ]);
  			this._debugger_buffer_len = -1;
  			// DO NOT REMOVE - magic debugger init function
  			if (globalThis.dotnetDebugger)
  				debugger;
  			else
  				console.debug ("mono_wasm_runtime_ready", "fe00e07a-5519-4dfe-b35a-f867dbaf2e28");
  		},mono_wasm_setenv:function (name, value) {
  			if (!this.wasm_setenv)
  				this.wasm_setenv = Module.cwrap ('mono_wasm_setenv', null, ['string', 'string']);
  			this.wasm_setenv (name, value);
  		},mono_wasm_set_runtime_options:function (options) {
  			if (!this.wasm_parse_runtime_options)
  				this.wasm_parse_runtime_options = Module.cwrap ('mono_wasm_parse_runtime_options', null, ['number', 'number']);
  			var argv = Module._malloc (options.length * 4);
  			var wasm_strdup = Module.cwrap ('mono_wasm_strdup', 'number', ['string']);
  			let aindex = 0;
  			for (var i = 0; i < options.length; ++i) {
  				Module.setValue (argv + (aindex * 4), wasm_strdup (options [i]), "i32");
  				aindex += 1;
  			}
  			this.wasm_parse_runtime_options (options.length, argv);
  		},mono_wasm_init_aot_profiler:function (options) {
  			if (options == null)
  				options = {}
  			if (!('write_at' in options))
  				options.write_at = 'Interop/Runtime::StopProfile';
  			if (!('send_to' in options))
  				options.send_to = 'Interop/Runtime::DumpAotProfileData';
  			var arg = "aot:write-at-method=" + options.write_at + ",send-to-method=" + options.send_to;
  			Module.ccall ('mono_wasm_load_profiler_aot', null, ['string'], [arg]);
  		},mono_wasm_init_coverage_profiler:function (options) {
  			if (options == null)
  				options = {}
  			if (!('write_at' in options))
  				options.write_at = 'WebAssembly.Runtime::StopProfile';
  			if (!('send_to' in options))
  				options.send_to = 'WebAssembly.Runtime::DumpCoverageProfileData';
  			var arg = "coverage:write-at-method=" + options.write_at + ",send-to-method=" + options.send_to;
  			Module.ccall ('mono_wasm_load_profiler_coverage', null, ['string'], [arg]);
  		},_apply_configuration_from_args:function (args) {
  			for (var k in (args.environment_variables || {}))
  				MONO.mono_wasm_setenv (k, args.environment_variables[k]);
  
  			if (args.runtime_options)
  				MONO.mono_wasm_set_runtime_options (args.runtime_options);
  
  			if (args.aot_profiler_options)
  				MONO.mono_wasm_init_aot_profiler (args.aot_profiler_options);
  
  			if (args.coverage_profiler_options)
  				MONO.mono_wasm_init_coverage_profiler (args.coverage_profiler_options);
  		},_get_fetch_file_cb_from_args:function (args) {
  			if (typeof (args.fetch_file_cb) === "function")
  				return args.fetch_file_cb;
  
  			if (ENVIRONMENT_IS_NODE) {
  				var fs = require('fs');
  				return function (asset) {
  					console.debug ("MONO_WASM: Loading... " + asset);
  					var binary = fs.readFileSync (asset);
  					var resolve_func2 = function (resolve, reject) {
  						resolve (new Uint8Array (binary));
  					};
  
  					var resolve_func1 = function (resolve, reject) {
  						var response = {
  							ok: true,
  							url: asset,
  							arrayBuffer: function () {
  								return new Promise (resolve_func2);
  							}
  						};
  						resolve (response);
  					};
  
  					return new Promise (resolve_func1);
  				};
  			} else if (typeof (fetch) === "function") {
  				return function (asset) {
  					return fetch (asset, { credentials: 'same-origin' });
  				};
  			} else {
  				throw new Error ("No fetch_file_cb was provided and this environment does not expose 'fetch'.");
  			}
  		},_handle_loaded_asset:function (ctx, asset, url, blob) {
  			var bytes = new Uint8Array (blob);
  			if (ctx.tracing)
  				console.log ("MONO_WASM: Loaded:", asset.name, "size", bytes.length, "from", url);
  
  			var virtualName = asset.virtual_path || asset.name;
  			var offset = null;
  
  			switch (asset.behavior) {
  				case "resource":
  				case "assembly":
  					ctx.loaded_files.push ({ url: url, file: virtualName});
  				case "heap":
  				case "icu":
  					offset = this.mono_wasm_load_bytes_into_heap (bytes);
  					ctx.loaded_assets[virtualName] = [offset, bytes.length];
  					break;
  
  				case "vfs":
  					// FIXME
  					var lastSlash = virtualName.lastIndexOf("/");
  					var parentDirectory = (lastSlash > 0)
  						? virtualName.substr(0, lastSlash)
  						: null;
  					var fileName = (lastSlash > 0)
  						? virtualName.substr(lastSlash + 1)
  						: virtualName;
  					if (fileName.startsWith("/"))
  						fileName = fileName.substr(1);
  					if (parentDirectory) {
  						if (ctx.tracing)
  							console.log ("MONO_WASM: Creating directory '" + parentDirectory + "'");
  
  						var pathRet = ctx.createPath(
  							"/", parentDirectory, true, true // fixme: should canWrite be false?
  						);
  					} else {
  						parentDirectory = "/";
  					}
  
  					if (ctx.tracing)
  						console.log ("MONO_WASM: Creating file '" + fileName + "' in directory '" + parentDirectory + "'");
  
  					if (!this.mono_wasm_load_data_archive (bytes, parentDirectory)) {
  						var fileRet = ctx.createDataFile (
  							parentDirectory, fileName,
  							bytes, true /* canRead */, true /* canWrite */, true /* canOwn */
  						);
  					}
  					break;
  
  				default:
  					throw new Error ("Unrecognized asset behavior:", asset.behavior, "for asset", asset.name);
  			}
  
  			if (asset.behavior === "assembly") {
  				var hasPpdb = ctx.mono_wasm_add_assembly (virtualName, offset, bytes.length);
  
  				if (!hasPpdb) {
  					var index = ctx.loaded_files.findIndex(element => element.file == virtualName);
  					ctx.loaded_files.splice(index, 1);
  				}
  			}
  			else if (asset.behavior === "icu") {
  				if (this.mono_wasm_load_icu_data (offset))
  					ctx.num_icu_assets_loaded_successfully += 1;
  				else
  					console.error ("Error loading ICU asset", asset.name);
  			}
  			else if (asset.behavior === "resource") {
  				ctx.mono_wasm_add_satellite_assembly (virtualName, asset.culture, offset, bytes.length);
  			}
  		},mono_load_runtime_and_bcl:function (
  			unused_vfs_prefix, deploy_prefix, debug_level, file_list, loaded_cb, fetch_file_cb
  		) {
  			var args = {
  				fetch_file_cb: fetch_file_cb,
  				loaded_cb: loaded_cb,
  				debug_level: debug_level,
  				assembly_root: deploy_prefix,
  				assets: []
  			};
  
  			for (var i = 0; i < file_list.length; i++) {
  				var file_name = file_list[i];
  				var behavior;
  				if (file_name.startsWith ("icudt") && file_name.endsWith (".dat")) {
  					// ICU data files are expected to be "icudt%FilterName%.dat"
  					behavior = "icu";
  				} else { // if (file_name.endsWith (".pdb") || file_name.endsWith (".dll"))
  					behavior = "assembly";
  				}
  
  				args.assets.push ({
  					name: file_name,
  					behavior: behavior
  				});
  			}
  
  			return this.mono_load_runtime_and_bcl_args (args);
  		},mono_load_runtime_and_bcl_args:function (args) {
  			try {
  				return this._load_assets_and_runtime (args);
  			} catch (exc) {
  				console.error ("error in mono_load_runtime_and_bcl_args:", exc);
  				throw exc;
  			}
  		},mono_wasm_load_bytes_into_heap:function (bytes) {
  			var memoryOffset = Module._malloc (bytes.length);
  			var heapBytes = new Uint8Array (Module.HEAPU8.buffer, memoryOffset, bytes.length);
  			heapBytes.set (bytes);
  			return memoryOffset;
  		},num_icu_assets_loaded_successfully:0,mono_wasm_load_icu_data:function (offset) {
  			var fn = Module.cwrap ('mono_wasm_load_icu_data', 'number', ['number']);
  			var ok = (fn (offset)) === 1;
  			if (ok)
  				this.num_icu_assets_loaded_successfully++;
  			return ok;
  		},mono_wasm_get_icudt_name:function (culture) {
  			return Module.ccall ('mono_wasm_get_icudt_name', 'string', ['string'], [culture]);
  		},_finalize_startup:function (args, ctx) {
  			var loaded_files_with_debug_info = [];
  
  			MONO.loaded_assets = ctx.loaded_assets;
  			ctx.loaded_files.forEach(value => loaded_files_with_debug_info.push(value.url));
  			MONO.loaded_files = loaded_files_with_debug_info;
  			if (ctx.tracing) {
  				console.log ("MONO_WASM: loaded_assets: " + JSON.stringify(ctx.loaded_assets));
  				console.log ("MONO_WASM: loaded_files: " + JSON.stringify(ctx.loaded_files));
  			}
  
  			var load_runtime = Module.cwrap ('mono_wasm_load_runtime', null, ['string', 'number']);
  
  			console.debug ("MONO_WASM: Initializing mono runtime");
  
  			this.mono_wasm_globalization_init (args.globalization_mode);
  
  			if (ENVIRONMENT_IS_SHELL || ENVIRONMENT_IS_NODE) {
  				try {
  					load_runtime ("unused", args.debug_level);
  				} catch (ex) {
  					print ("MONO_WASM: load_runtime () failed: " + ex);
  					print ("MONO_WASM: Stacktrace: \n");
  					print (ex.stack);
  
  					var wasm_exit = Module.cwrap ('mono_wasm_exit', null, ['number']);
  					wasm_exit (1);
  				}
  			} else {
  				load_runtime ("unused", args.debug_level);
  			}
  
  			let tz;
  			try {
  				tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  			} catch {}
  			MONO.mono_wasm_setenv ("TZ", tz || "UTC");
  			MONO.mono_wasm_runtime_ready ();
  			args.loaded_cb ();
  		},_load_assets_and_runtime:function (args) {
  			if (args.enable_debugging)
  				args.debug_level = args.enable_debugging;
  			if (args.assembly_list)
  				throw new Error ("Invalid args (assembly_list was replaced by assets)");
  			if (args.runtime_assets)
  				throw new Error ("Invalid args (runtime_assets was replaced by assets)");
  			if (args.runtime_asset_sources)
  				throw new Error ("Invalid args (runtime_asset_sources was replaced by remote_sources)");
  			if (!args.loaded_cb)
  				throw new Error ("loaded_cb not provided");
  
  			var ctx = {
  				tracing: args.diagnostic_tracing || false,
  				pending_count: args.assets.length,
  				mono_wasm_add_assembly: Module.cwrap ('mono_wasm_add_assembly', 'number', ['string', 'number', 'number']),
  				mono_wasm_add_satellite_assembly: Module.cwrap ('mono_wasm_add_satellite_assembly', 'void', ['string', 'string', 'number', 'number']),
  				loaded_assets: Object.create (null),
  				// dlls and pdbs, used by blazor and the debugger
  				loaded_files: [],
  				createPath: Module['FS_createPath'],
  				createDataFile: Module['FS_createDataFile']
  			};
  
  			if (ctx.tracing)
  				console.log ("mono_wasm_load_runtime_with_args", JSON.stringify(args));
  
  			this._apply_configuration_from_args (args);
  
  			var fetch_file_cb = this._get_fetch_file_cb_from_args (args);
  
  			var onPendingRequestComplete = function () {
  				--ctx.pending_count;
  
  				if (ctx.pending_count === 0) {
  					try {
  						MONO._finalize_startup (args, ctx);
  					} catch (exc) {
  						console.error ("Unhandled exception in _finalize_startup", exc);
  						throw exc;
  					}
  				}
  			};
  
  			var processFetchResponseBuffer = function (asset, url, blob) {
  				try {
  					MONO._handle_loaded_asset (ctx, asset, url, blob);
  				} catch (exc) {
  					console.error ("Unhandled exception in processFetchResponseBuffer", exc);
  					throw exc;
  				} finally {
  					onPendingRequestComplete ();
  				}
  			};
  
  			args.assets.forEach (function (asset) {
  				var attemptNextSource;
  				var sourceIndex = 0;
  				var sourcesList = asset.load_remote ? args.remote_sources : [""];
  
  				var handleFetchResponse = function (response) {
  					if (!response.ok) {
  						try {
  							attemptNextSource ();
  							return;
  						} catch (exc) {
  							console.error ("MONO_WASM: Unhandled exception in handleFetchResponse attemptNextSource for asset", asset.name, exc);
  							throw exc;
  						}
  					}
  
  					try {
  						var bufferPromise = response ['arrayBuffer'] ();
  						bufferPromise.then (processFetchResponseBuffer.bind (this, asset, response.url));
  					} catch (exc) {
  						console.error ("MONO_WASM: Unhandled exception in handleFetchResponse for asset", asset.name, exc);
  						attemptNextSource ();
  					}
  				};
  
  				attemptNextSource = function () {
  					if (sourceIndex >= sourcesList.length) {
  						var msg = "MONO_WASM: Failed to load " + asset.name;
  						try {
  							var isOk = asset.is_optional ||
  								(asset.name.match (/\.pdb$/) && MONO.mono_wasm_ignore_pdb_load_errors);
  
  							if (isOk)
  								console.debug (msg);
  							else {
  								console.error (msg);
  								throw new Error (msg);
  							}
  						} finally {
  							onPendingRequestComplete ();
  						}
  					}
  
  					var sourcePrefix = sourcesList[sourceIndex];
  					sourceIndex++;
  
  					// HACK: Special-case because MSBuild doesn't allow "" as an attribute
  					if (sourcePrefix === "./")
  						sourcePrefix = "";
  
  					var attemptUrl;
  					if (sourcePrefix.trim() === "") {
  						if (asset.behavior === "assembly")
  							attemptUrl = locateFile (args.assembly_root + "/" + asset.name);
  						else if (asset.behavior === "resource") {
  							var path = asset.culture !== '' ? `${asset.culture}/${asset.name}` : asset.name;
  							attemptUrl = locateFile (args.assembly_root + "/" + path);
  						}
  						else
  							attemptUrl = asset.name;
  					} else {
  						attemptUrl = sourcePrefix + asset.name;
  					}
  
  					try {
  						if (asset.name === attemptUrl) {
  							if (ctx.tracing)
  								console.log ("Attempting to fetch '%s'", attemptUrl);
  						} else {
  							if (ctx.tracing)
  								console.log ("Attempting to fetch '%s' for '%s'", attemptUrl, asset.name);
  						}
  						var fetch_promise = fetch_file_cb (attemptUrl);
  						fetch_promise.then (handleFetchResponse);
  					} catch (exc) {
  						console.error ("MONO_WASM: Error fetching '%s'\n%s", attemptUrl, exc);
  						attemptNextSource ();
  					}
  				};
  
  				attemptNextSource ();
  			});
  		},mono_wasm_globalization_init:function (globalization_mode) {
  			var invariantMode = false;
  
  			if (globalization_mode === "invariant")
  				invariantMode = true;
  
  			if (!invariantMode) {
  				if (this.num_icu_assets_loaded_successfully > 0) {
  					console.debug ("MONO_WASM: ICU data archive(s) loaded, disabling invariant mode");
  				} else if (globalization_mode !== "icu") {
  					console.debug ("MONO_WASM: ICU data archive(s) not loaded, using invariant globalization mode");
  					invariantMode = true;
  				} else {
  					var msg = "invariant globalization mode is inactive and no ICU data archives were loaded";
  					console.error ("MONO_WASM: ERROR: " + msg);
  					throw new Error (msg);
  				}
  			}
  
  			if (invariantMode)
  				this.mono_wasm_setenv ("DOTNET_SYSTEM_GLOBALIZATION_INVARIANT", "1");
  
  			// Set globalization mode to PredefinedCulturesOnly
  			this.mono_wasm_setenv ("DOTNET_SYSTEM_GLOBALIZATION_PREDEFINED_CULTURES_ONLY", "1");
  		},mono_wasm_get_loaded_files:function() {
  			if (!this.mono_wasm_set_is_debugger_attached)
  				this.mono_wasm_set_is_debugger_attached = Module.cwrap ('mono_wasm_set_is_debugger_attached', 'void', ['bool']);
  			this.mono_wasm_set_is_debugger_attached (true);
  			return MONO.loaded_files;
  		},mono_wasm_get_loaded_asset_table:function() {
  			return MONO.loaded_assets;
  		},_base64_to_uint8:function (base64String) {
  			const byteCharacters = atob (base64String);
  			const byteNumbers = new Array(byteCharacters.length);
  			for (let i = 0; i < byteCharacters.length; i++) {
  				byteNumbers[i] = byteCharacters.charCodeAt(i);
  			}
  
  			return new Uint8Array (byteNumbers);
  		},mono_wasm_load_data_archive:function (data, prefix) {
  			if (data.length < 8)
  				return false;
  
  			var dataview = new DataView(data.buffer);
  			var magic = dataview.getUint32(0, true);
  			//	get magic number
  			if (magic != 0x626c6174) {
  				return false;
  			}
  			var manifestSize = dataview.getUint32(4, true);
  			if (manifestSize == 0 || data.length < manifestSize + 8)
  				return false;
  
  			var manifest;
  			try {
  				manifestContent = Module.UTF8ArrayToString(data, 8, manifestSize);
  				manifest = JSON.parse(manifestContent);
  				if (!(manifest instanceof Array))
  					return false;
  			} catch (exc) {
  				return false;
  			}
  
  			data = data.slice(manifestSize+8);
  
  			// Create the folder structure
  			// /usr/share/zoneinfo
  			// /usr/share/zoneinfo/Africa
  			// /usr/share/zoneinfo/Asia
  			// ..
  
  			var folders = new Set()
  			manifest.filter(m => {
  				var file = m[0];
  				var last = file.lastIndexOf ("/");
  				var directory = file.slice (0, last+1);
  				folders.add(directory);
  			});
  			folders.forEach(folder => {
  				Module['FS_createPath'](prefix, folder, true, true);
  			});
  
  			for (row of manifest) {
  				var name = row[0];
  				var length = row[1];
  				var bytes = data.slice(0, length);
  				Module['FS_createDataFile'](prefix, name, bytes, true, true);
  				data = data.slice(length);
  			}
  			return true;
  		},mono_wasm_raise_debug_event:function(event, args={}) {
  			if (typeof event !== 'object')
  				throw new Error(`event must be an object, but got ${JSON.stringify(event)}`);
  
  			if (event.eventName === undefined)
  				throw new Error(`event.eventName is a required parameter, in event: ${JSON.stringify(event)}`);
  
  			if (typeof args !== 'object')
  				throw new Error(`args must be an object, but got ${JSON.stringify(args)}`);
  
  			console.debug('mono_wasm_debug_event_raised:aef14bca-5519-4dfe-b35a-f867abc123ae', JSON.stringify(event), JSON.stringify(args));
  		},mono_wasm_load_config:async function (configFilePath) {
  			Module.addRunDependency(configFilePath);	
  			try {
  				let config = null;
  				// NOTE: when we add nodejs make sure to include the nodejs fetch package
  				if (ENVIRONMENT_IS_WEB) {
  					const configRaw = await fetch(configFilePath);
  					config = await configRaw.json();
  				}else if (ENVIRONMENT_IS_NODE) {
  					config = require(configFilePath);
  				} else { // shell or worker
  					config = JSON.parse(read(configFilePath)); // read is a v8 debugger command
  				}
  				Module.config = config;
  			} catch(e) {
  				Module.config = {message: "failed to load config file", error: e};
  			} finally {
  				Module.removeRunDependency(configFilePath);
  			}
  		},mono_wasm_set_timeout_exec:function(id){
  			if (!this.mono_set_timeout_exec)
  				this.mono_set_timeout_exec = Module.cwrap ("mono_set_timeout_exec", null, [ 'number' ]);
  			this.mono_set_timeout_exec (id);
  		},prevent_timer_throttling:function () {
  			// this will schedule timers every second for next 6 minutes, it should be called from WebSocket event, to make it work
  			// on next call, it would only extend the timers to cover yet uncovered future
  			let now = new Date().valueOf();
  			const desired_reach_time = now + (1000 * 60 * 6);
  			const next_reach_time = Math.max(now + 1000, this.spread_timers_maximum);
  			const light_throttling_frequency = 1000;
  			for (var schedule = next_reach_time; schedule < desired_reach_time; schedule += light_throttling_frequency) {
  				const delay = schedule - now;
  				setTimeout(() => {
  					this.mono_wasm_set_timeout_exec(0);
  					MONO.pump_count++;
  					MONO.pump_message();
  				}, delay);
  			}
  			this.spread_timers_maximum = desired_reach_time;
  		}};
  function _mono_set_timeout(timeout, id) {
  
  		if (typeof globalThis.setTimeout === 'function') {
  			if (MONO.lastScheduleTimeoutId) {
  				globalThis.clearTimeout(MONO.lastScheduleTimeoutId);
  				MONO.lastScheduleTimeoutId = undefined;
  			}
  			MONO.lastScheduleTimeoutId = globalThis.setTimeout(function mono_wasm_set_timeout_exec () {
  				MONO.mono_wasm_set_timeout_exec(id);
  			}, timeout);
  		} else {
  			++MONO.pump_count;
  			MONO.timeout_queue.push(function() {
  				MONO.mono_wasm_set_timeout_exec (id);
  			})
  		}
  	}

  var BINDING={BINDING_ASM:"[System.Private.Runtime.InteropServices.JavaScript]System.Runtime.InteropServices.JavaScript.Runtime",_cs_owned_objects_by_js_handle:[],_js_handle_free_list:[],_next_js_handle:1,mono_wasm_marshal_enum_as_int:true,mono_bindings_init:function (binding_asm) {
  			this.BINDING_ASM = binding_asm;
  		},export_functions:function (module) {
  			module ["mono_bindings_init"] = BINDING.mono_bindings_init.bind(BINDING);
  			module ["mono_bind_method"] = BINDING.bind_method.bind(BINDING);
  			module ["mono_method_invoke"] = BINDING.call_method.bind(BINDING);
  			module ["mono_method_get_call_signature"] = BINDING.mono_method_get_call_signature.bind(BINDING);
  			module ["mono_method_resolve"] = BINDING.resolve_method_fqn.bind(BINDING);
  			module ["mono_bind_static_method"] = BINDING.bind_static_method.bind(BINDING);
  			module ["mono_call_static_method"] = BINDING.call_static_method.bind(BINDING);
  			module ["mono_bind_assembly_entry_point"] = BINDING.bind_assembly_entry_point.bind(BINDING);
  			module ["mono_call_assembly_entry_point"] = BINDING.call_assembly_entry_point.bind(BINDING);
  			module ["mono_intern_string"] = BINDING.mono_intern_string.bind(BINDING);
  		},bindings_lazy_init:function () {
  			if (this.init)
  				return;
  
  			// avoid infinite recursion
  			this.init = true;
  			this.wasm_type_symbol = Symbol.for("wasm type");
  			this.js_owned_gc_handle_symbol = Symbol.for("wasm js_owned_gc_handle");
  			this.cs_owned_js_handle_symbol = Symbol.for("wasm cs_owned_js_handle");
  			this.delegate_invoke_symbol = Symbol.for("wasm delegate_invoke");
  			this.delegate_invoke_signature_symbol = Symbol.for("wasm delegate_invoke_signature");
  			this.listener_registration_count_symbol = Symbol.for("wasm listener_registration_count");
  
  			// please keep System.Runtime.InteropServices.JavaScript.Runtime.MappedType in sync
  			Object.prototype[this.wasm_type_symbol] = 0;
  			Array.prototype[this.wasm_type_symbol] = 1;
  			ArrayBuffer.prototype[this.wasm_type_symbol] = 2;
  			DataView.prototype[this.wasm_type_symbol] = 3;
  			Function.prototype[this.wasm_type_symbol] =  4;
  			Map.prototype[this.wasm_type_symbol] = 5;
  			if (typeof SharedArrayBuffer !== 'undefined')
  				SharedArrayBuffer.prototype[this.wasm_type_symbol] =  6;
  			Int8Array.prototype[this.wasm_type_symbol] = 10;
  			Uint8Array.prototype[this.wasm_type_symbol] = 11;
  			Uint8ClampedArray.prototype[this.wasm_type_symbol] = 12;
  			Int16Array.prototype[this.wasm_type_symbol] = 13;
  			Uint16Array.prototype[this.wasm_type_symbol] = 14;
  			Int32Array.prototype[this.wasm_type_symbol] = 15;
  			Uint32Array.prototype[this.wasm_type_symbol] = 16;
  			Float32Array.prototype[this.wasm_type_symbol] = 17;
  			Float64Array.prototype[this.wasm_type_symbol] = 18;
  
  			this.assembly_load = Module.cwrap ('mono_wasm_assembly_load', 'number', ['string']);
  			this.find_corlib_class = Module.cwrap ('mono_wasm_find_corlib_class', 'number', ['string', 'string']);
  			this.find_class = Module.cwrap ('mono_wasm_assembly_find_class', 'number', ['number', 'string', 'string']);
  			this._find_method = Module.cwrap ('mono_wasm_assembly_find_method', 'number', ['number', 'string', 'number']);
  			this.invoke_method = Module.cwrap ('mono_wasm_invoke_method', 'number', ['number', 'number', 'number', 'number']);
  			this.mono_string_get_utf8 = Module.cwrap ('mono_wasm_string_get_utf8', 'number', ['number']);
  			this.mono_wasm_string_from_utf16 = Module.cwrap ('mono_wasm_string_from_utf16', 'number', ['number', 'number']);
  			this.mono_get_obj_type = Module.cwrap ('mono_wasm_get_obj_type', 'number', ['number']);
  			this.mono_array_length = Module.cwrap ('mono_wasm_array_length', 'number', ['number']);
  			this.mono_array_get = Module.cwrap ('mono_wasm_array_get', 'number', ['number', 'number']);
  			this.mono_obj_array_new = Module.cwrap ('mono_wasm_obj_array_new', 'number', ['number']);
  			this.mono_obj_array_set = Module.cwrap ('mono_wasm_obj_array_set', 'void', ['number', 'number', 'number']);
  			this.mono_wasm_register_bundled_satellite_assemblies = Module.cwrap ('mono_wasm_register_bundled_satellite_assemblies', 'void', [ ]);
  			this.mono_wasm_try_unbox_primitive_and_get_type = Module.cwrap ('mono_wasm_try_unbox_primitive_and_get_type', 'number', ['number', 'number']);
  			this.mono_wasm_box_primitive = Module.cwrap ('mono_wasm_box_primitive', 'number', ['number', 'number', 'number']);
  			this.mono_wasm_intern_string = Module.cwrap ('mono_wasm_intern_string', 'number', ['number']);
  			this.assembly_get_entry_point = Module.cwrap ('mono_wasm_assembly_get_entry_point', 'number', ['number']);
  			this.mono_wasm_get_delegate_invoke = Module.cwrap ('mono_wasm_get_delegate_invoke', 'number', ['number']);
  			this.mono_wasm_string_array_new = Module.cwrap ('mono_wasm_string_array_new', 'number', ['number']);
  
  			this._box_buffer = Module._malloc(16);
  			this._unbox_buffer = Module._malloc(16);
  			this._class_int32 = this.find_corlib_class ("System", "Int32");
  			this._class_uint32 = this.find_corlib_class ("System", "UInt32");
  			this._class_double = this.find_corlib_class ("System", "Double");
  			this._class_boolean = this.find_corlib_class ("System", "Boolean");
  
  			// receives a byteoffset into allocated Heap with a size.
  			this.mono_typed_array_new = Module.cwrap ('mono_wasm_typed_array_new', 'number', ['number','number','number','number']);
  
  			var binding_fqn_asm = this.BINDING_ASM.substring(this.BINDING_ASM.indexOf ("[") + 1, this.BINDING_ASM.indexOf ("]")).trim();
  			var binding_fqn_class = this.BINDING_ASM.substring (this.BINDING_ASM.indexOf ("]") + 1).trim();
  
  			this.binding_module = this.assembly_load (binding_fqn_asm);
  			if (!this.binding_module)
  				throw "Can't find bindings module assembly: " + binding_fqn_asm;
  
  			var namespace = null, classname = null;
  			if (binding_fqn_class !== null && typeof binding_fqn_class !== "undefined")
  			{
  				namespace = "System.Runtime.InteropServices.JavaScript";
  				classname = binding_fqn_class.length > 0 ? binding_fqn_class : "Runtime";
  				if (binding_fqn_class.indexOf(".") != -1) {
  					var idx = binding_fqn_class.lastIndexOf(".");
  					namespace = binding_fqn_class.substring (0, idx);
  					classname = binding_fqn_class.substring (idx + 1);
  				}
  			}
  
  			var wasm_runtime_class = this.find_class (this.binding_module, namespace, classname);
  			if (!wasm_runtime_class)
  				throw "Can't find " + binding_fqn_class + " class";
  
  			var get_method = function(method_name) {
  				var res = BINDING.find_method (wasm_runtime_class, method_name, -1);
  				if (!res)
  					throw "Can't find method " + namespace + "." + classname + ":" + method_name;
  				return res;
  			};
  
  			var bind_runtime_method = function (method_name, signature) {
  				var method = get_method (method_name);
  				return BINDING.bind_method (method, 0, signature, "BINDINGS_" + method_name);
  			};
  
  			this.get_call_sig = get_method ("GetCallSignature");
  
  			// NOTE: The bound methods have a _ prefix on their names to ensure
  			//  that any code relying on the old get_method/call_method pattern will
  			//  break in a more understandable way.
  
  			this._get_cs_owned_object_by_js_handle = bind_runtime_method ("GetCSOwnedObjectByJSHandle", "ii!");
  			this._get_cs_owned_object_js_handle = bind_runtime_method ("GetCSOwnedObjectJSHandle", 'mi');
  			this._try_get_cs_owned_object_js_handle = bind_runtime_method ("TryGetCSOwnedObjectJSHandle", "mi");
  			this._create_cs_owned_proxy = bind_runtime_method ("CreateCSOwnedProxy", "iii!");
  
  			this._get_js_owned_object_by_gc_handle = bind_runtime_method ("GetJSOwnedObjectByGCHandle", "i!");
  			this._get_js_owned_object_gc_handle = bind_runtime_method ("GetJSOwnedObjectGCHandle", "m");
  			this._release_js_owned_object_by_gc_handle = bind_runtime_method ("ReleaseJSOwnedObjectByGCHandle", "i");
  
  			this._create_tcs = bind_runtime_method ("CreateTaskSource","");
  			this._set_tcs_result = bind_runtime_method ("SetTaskSourceResult","io");
  			this._set_tcs_failure = bind_runtime_method ("SetTaskSourceFailure","is");
  			this._get_tcs_task = bind_runtime_method ("GetTaskSourceTask","i!");
  			this._setup_js_cont = bind_runtime_method ("SetupJSContinuation", "mo");
  			
  			this._object_to_string = bind_runtime_method ("ObjectToString", "m");
  			this._get_date_value = bind_runtime_method ("GetDateValue", "m");
  			this._create_date_time = bind_runtime_method ("CreateDateTime", "d!");
  			this._create_uri = bind_runtime_method ("CreateUri","s!");
  			this._is_simple_array = bind_runtime_method ("IsSimpleArray", "m");
  
  			this._are_promises_supported = ((typeof Promise === "object") || (typeof Promise === "function")) && (typeof Promise.resolve === "function");
  			this.isThenable = (js_obj) => {
  				// When using an external Promise library like Bluebird the Promise.resolve may not be sufficient
  				// to identify the object as a Promise.
  				return Promise.resolve(js_obj) === js_obj ||
  						((typeof js_obj === "object" || typeof js_obj === "function") && typeof js_obj.then === "function")
  			};
  			this.isChromium = false;
  			if (globalThis.navigator) {
  				var nav = globalThis.navigator;
  				if (nav.userAgentData && nav.userAgentData.brands) {
  					this.isChromium = nav.userAgentData.brands.some((i) => i.brand == 'Chromium');
  				}
  				else if (globalThis.navigator.userAgent) {
  					this.isChromium = nav.userAgent.includes("Chrome");
  				}
  			}
  
  			this._empty_string = "";
  			this._empty_string_ptr = 0;
  			this._interned_string_full_root_buffers = [];
  			this._interned_string_current_root_buffer = null;
  			this._interned_string_current_root_buffer_count = 0;
  			this._interned_js_string_table = new Map ();
  
  			this._js_owned_object_table = new Map ();
  			// NOTE: FinalizationRegistry and WeakRef are missing on Safari below 14.1
  			this._use_finalization_registry = typeof globalThis.FinalizationRegistry === "function";
  			this._use_weak_ref = typeof globalThis.WeakRef === "function";
  
  			if (this._use_finalization_registry) {
  				this._js_owned_object_registry = new globalThis.FinalizationRegistry(this._js_owned_object_finalized.bind(this));
  			}
  		},_js_owned_object_finalized:function (gc_handle) {
  			// The JS object associated with this gc_handle has been collected by the JS GC.
  			// As such, it's not possible for this gc_handle to be invoked by JS anymore, so
  			//  we can release the tracking weakref (it's null now, by definition),
  			//  and tell the C# side to stop holding a reference to the managed object.
  			this._js_owned_object_table.delete(gc_handle);
  			this._release_js_owned_object_by_gc_handle(gc_handle);
  		},_lookup_js_owned_object:function (gc_handle) {
  			if (!gc_handle)
  				return null;
  			var wr = this._js_owned_object_table.get(gc_handle);
  			if (wr) {
  				return wr.deref();
  				// TODO: could this be null before _js_owned_object_finalized was called ?
  				// TODO: are there race condition consequences ?
  			}
  			return null;
  		},_register_js_owned_object:function (gc_handle, js_obj) {
  			var wr;
  			if (this._use_weak_ref) {
  				wr = new WeakRef(js_obj);
  			}
  			else {
  				// this is trivial WeakRef replacement, which holds strong refrence, instead of weak one, when the browser doesn't support it
  				wr = {
  					deref: () => {
  						return js_obj;
  					}
  				}
  			}
  
  			this._js_owned_object_table.set(gc_handle, wr);
  		},_wrap_js_thenable_as_task:function (thenable) {
  			this.bindings_lazy_init ();
  			if (!thenable)
  				return null;
  
  			// hold strong JS reference to thenable while in flight
  			// ideally, this should be hold alive by lifespan of the resulting C# Task, but this is good cheap aproximation
  			var thenable_js_handle = BINDING.mono_wasm_get_js_handle(thenable);
  
  			// Note that we do not implement promise/task roundtrip. 
  			// With more complexity we could recover original instance when this Task is marshaled back to JS.
  			// TODO optimization: return the tcs.Task on this same call instead of _get_tcs_task
  			const tcs_gc_handle = this._create_tcs();
  			thenable.then ((result) => {
  				this._set_tcs_result(tcs_gc_handle, result);
  				// let go of the thenable reference
  				this._mono_wasm_release_js_handle(thenable_js_handle);
  
  				// when FinalizationRegistry is not supported by this browser, we will do immediate cleanup after use
  				if (!this._use_finalization_registry) {
  					this._release_js_owned_object_by_gc_handle(tcs_gc_handle);
  				}
  			}, (reason) => {
  				this._set_tcs_failure(tcs_gc_handle, reason ? reason.toString() : "");
  				// let go of the thenable reference
  				this._mono_wasm_release_js_handle(thenable_js_handle);
  
  				// when FinalizationRegistry is not supported by this browser, we will do immediate cleanup after use
  				if (!this._use_finalization_registry) {
  					this._release_js_owned_object_by_gc_handle(tcs_gc_handle);
  				}
  			});
  
  			// collect the TaskCompletionSource with its Task after js doesn't hold the thenable anymore
  			if (this._use_finalization_registry) {
  				this._js_owned_object_registry.register(thenable, tcs_gc_handle);
  			}
  
  			// returns raw pointer to tcs.Task
  			return this._get_tcs_task(tcs_gc_handle);
  		},_unbox_task_root_as_promise:function (root) {
  			this.bindings_lazy_init ();
  			const self = this;
  			if (root.value === 0)
  				return null;
  
  			if (!this._are_promises_supported)
  				throw new Error ("Promises are not supported thus 'System.Threading.Tasks.Task' can not work in this context.");
  
  			// get strong reference to Task
  			const gc_handle = this._get_js_owned_object_gc_handle(root.value);
  
  			// see if we have js owned instance for this gc_handle already
  			var result = this._lookup_js_owned_object(gc_handle);
  
  			// If the promise for this gc_handle was already collected (or was never created)
  			if (!result) {
  
  				var cont_obj = null;
  				// note that we do not implement promise/task roundtrip
  				// With more complexity we could recover original instance when this promise is marshaled back to C#.
  				var result = new Promise(function (resolve, reject) {
  					if (self._use_finalization_registry) {
  						cont_obj = {
  							resolve: resolve,
  							reject: reject
  						};
  					} else {
  						// when FinalizationRegistry is not supported by this browser, we will do immediate cleanup after use
  						cont_obj = {
  							resolve: function () {
  								const res = resolve.apply(null, arguments);
  								self._js_owned_object_table.delete(gc_handle);
  								self._release_js_owned_object_by_gc_handle(gc_handle);
  								return res;
  							},
  							reject: function () {
  								const res = reject.apply(null, arguments);
  								self._js_owned_object_table.delete(gc_handle);
  								self._release_js_owned_object_by_gc_handle(gc_handle);
  								return res;
  							}
  						};
  					}
  				});
  
  				// register C# side of the continuation
  				this._setup_js_cont (root.value, cont_obj );
  				
  				// register for GC of the Task after the JS side is done with the promise
  				if (this._use_finalization_registry) {
  					this._js_owned_object_registry.register(result, gc_handle);
  				}
  
  				// register for instance reuse
  				this._register_js_owned_object(gc_handle, result);
  			}
  
  			return result;
  		},_unbox_ref_type_root_as_js_object:function (root) {
  			this.bindings_lazy_init ();
  			if (root.value === 0)
  				return null;
  
  			// this could be JSObject proxy of a js native object
  			// we don't need in-flight reference as we already have it rooted here
  			var js_handle = this._try_get_cs_owned_object_js_handle (root.value, false);
  			if (js_handle) {
  				if (js_handle===-1){
  					throw new Error("Cannot access a disposed JSObject at " + root.value);
  				}
  				return this.mono_wasm_get_jsobj_from_js_handle(js_handle);
  			}
  			// otherwise this is C# only object
  	
  			// get strong reference to Object
  			const gc_handle = this._get_js_owned_object_gc_handle(root.value);
  
  			// see if we have js owned instance for this gc_handle already
  			var result = this._lookup_js_owned_object(gc_handle);
  
  			// If the JS object for this gc_handle was already collected (or was never created)
  			if (!result) {
  				result = {};
  
  				// keep the gc_handle so that we could easily convert it back to original C# object for roundtrip
  				result[BINDING.js_owned_gc_handle_symbol]=gc_handle;
  
  				// NOTE: this would be leaking C# objects when the browser doesn't support FinalizationRegistry/WeakRef
  				if (this._use_finalization_registry) {
  					// register for GC of the C# object after the JS side is done with the object
  					this._js_owned_object_registry.register(result, gc_handle);
  				}
  
  				// register for instance reuse
  				// NOTE: this would be leaking C# objects when the browser doesn't support FinalizationRegistry/WeakRef
  				this._register_js_owned_object(gc_handle, result);
  			}
  
  			return result;
  		},_wrap_delegate_root_as_function:function (root) {
  			this.bindings_lazy_init ();
  			if (root.value === 0)
  				return null;
  
  			// get strong reference to the Delegate
  			const gc_handle = this._get_js_owned_object_gc_handle(root.value);
  			return this._wrap_delegate_gc_handle_as_function(gc_handle);
  		},_wrap_delegate_gc_handle_as_function:function (gc_handle, after_listener_callback) {
  			this.bindings_lazy_init ();
  
  			// see if we have js owned instance for this gc_handle already
  			var result = this._lookup_js_owned_object(gc_handle);
  
  			// If the function for this gc_handle was already collected (or was never created)
  			if (!result) {
  				// note that we do not implement function/delegate roundtrip
  				result = function() {
  					const delegateRoot = MONO.mono_wasm_new_root (BINDING.get_js_owned_object_by_gc_handle(gc_handle));
  					try {
  						const res = BINDING.call_method(result[BINDING.delegate_invoke_symbol], delegateRoot.value, result[BINDING.delegate_invoke_signature_symbol], arguments);
  						if (after_listener_callback) { 
  							after_listener_callback(); 
  						}
  						return res;
  					} finally {
  						delegateRoot.release();
  					}
  				};
  
  				// bind the method
  				const delegateRoot = MONO.mono_wasm_new_root (BINDING.get_js_owned_object_by_gc_handle(gc_handle));
  				try {
  					if (typeof result[BINDING.delegate_invoke_symbol] === "undefined"){
  						result[BINDING.delegate_invoke_symbol] = BINDING.mono_wasm_get_delegate_invoke(delegateRoot.value);
  						if (!result[BINDING.delegate_invoke_symbol]){
  							throw new Error("System.Delegate Invoke method can not be resolved.");
  						}
  					}
  
  					if (typeof result[BINDING.delegate_invoke_signature_symbol] === "undefined"){
  						result[BINDING.delegate_invoke_signature_symbol] = Module.mono_method_get_call_signature (result[BINDING.delegate_invoke_symbol], delegateRoot.value);
  					}
  				} finally {
  					delegateRoot.release();
  				}
  
  				// NOTE: this would be leaking C# objects when the browser doesn't support FinalizationRegistry. Except in case of EventListener where we cleanup after unregistration.
  				if (this._use_finalization_registry) {
  					// register for GC of the deleate after the JS side is done with the function
  					this._js_owned_object_registry.register(result, gc_handle);
  				}
  
  				// register for instance reuse
  				// NOTE: this would be leaking C# objects when the browser doesn't support FinalizationRegistry/WeakRef. Except in case of EventListener where we cleanup after unregistration.
  				this._register_js_owned_object(gc_handle, result);
  			}
  
  			return result;
  		},mono_intern_string:function (string) {
  			if (string.length === 0)
  				return this._empty_string;
  
  			var ptr = this.js_string_to_mono_string_interned (string);
  			var result = MONO.interned_string_table.get (ptr);
  			return result;
  		},_store_string_in_intern_table:function (string, ptr, internIt) {
  			if (!ptr)
  				throw new Error ("null pointer passed to _store_string_in_intern_table");
  			else if (typeof (ptr) !== "number")
  				throw new Error (`non-pointer passed to _store_string_in_intern_table: ${typeof(ptr)}`);
  			
  			const internBufferSize = 8192;
  
  			if (this._interned_string_current_root_buffer_count >= internBufferSize) {
  				this._interned_string_full_root_buffers.push (this._interned_string_current_root_buffer);
  				this._interned_string_current_root_buffer = null;
  			}
  			if (!this._interned_string_current_root_buffer) {
  				this._interned_string_current_root_buffer = MONO.mono_wasm_new_root_buffer (internBufferSize, "interned strings");
  				this._interned_string_current_root_buffer_count = 0;
  			}
  
  			var rootBuffer = this._interned_string_current_root_buffer;
  			var index = this._interned_string_current_root_buffer_count++;
  			rootBuffer.set (index, ptr);
  
  			// Store the managed string into the managed intern table. This can theoretically
  			//  provide a different managed object than the one we passed in, so update our
  			//  pointer (stored in the root) with the result.
  			if (internIt)
  				rootBuffer.set (index, ptr = this.mono_wasm_intern_string (ptr));
  
  			if (!ptr)
  				throw new Error ("mono_wasm_intern_string produced a null pointer");
  
  			this._interned_js_string_table.set (string, ptr);
  			if (!MONO.interned_string_table)
  				MONO.interned_string_table = new Map();
  			MONO.interned_string_table.set (ptr, string);
  
  			if ((string.length === 0) && !this._empty_string_ptr)
  				this._empty_string_ptr = ptr;
  			
  			return ptr;
  		},js_string_to_mono_string_interned:function (string) {
  			var text = (typeof (string) === "symbol")
  				? (string.description || Symbol.keyFor(string) || "<unknown Symbol>")
  				: string;
  			
  			if ((text.length === 0) && this._empty_string_ptr)
  				return this._empty_string_ptr;
  
  			var ptr = this._interned_js_string_table.get (string);
  			if (ptr)
  				return ptr;
  
  			ptr = this.js_string_to_mono_string_new (text);
  			ptr = this._store_string_in_intern_table (string, ptr, true);
  
  			return ptr;
  		},js_string_to_mono_string:function (string) {
  			if (string === null)
  				return null;
  			else if (typeof (string) === "symbol")
  				return this.js_string_to_mono_string_interned (string);
  			else if (typeof (string) !== "string")
  				throw new Error ("Expected string argument, got "+ typeof (string));
  
  			// Always use an interned pointer for empty strings
  			if (string.length === 0)
  				return this.js_string_to_mono_string_interned (string);
  
  			// Looking up large strings in the intern table will require the JS runtime to
  			//  potentially hash them and then do full byte-by-byte comparisons, which is
  			//  very expensive. Because we can not guarantee it won't happen, try to minimize
  			//  the cost of this and prevent performance issues for large strings
  			if (string.length <= 256) {
  				var interned = this._interned_js_string_table.get (string);
  				if (interned)
  					return interned;
  			}
  
  			return this.js_string_to_mono_string_new (string);
  		},js_string_to_mono_string_new:function (string) {
  			var buffer = Module._malloc ((string.length + 1) * 2);
  			var buffer16 = (buffer / 2) | 0;
  			for (var i = 0; i < string.length; i++)
  				Module.HEAP16[buffer16 + i] = string.charCodeAt (i);
  			Module.HEAP16[buffer16 + string.length] = 0;
  			var result = this.mono_wasm_string_from_utf16 (buffer, string.length);
  			Module._free (buffer);
  			return result;
  		},find_method:function (klass, name, n) {
  			var result = this._find_method(klass, name, n);
  			if (result) {
  				if (!this._method_descriptions)
  					this._method_descriptions = new Map();
  				this._method_descriptions.set(result, name);
  			}
  			return result;
  		},get_js_obj:function (js_handle) {
  			if (js_handle > 0)
  				return this.mono_wasm_get_jsobj_from_js_handle(js_handle);
  			return null;
  		},_get_string_from_intern_table:function (mono_obj) {
  			if (!MONO.interned_string_table)
  				return undefined;
  			return MONO.interned_string_table.get (mono_obj);
  		},conv_string:function (mono_obj) {
  			return MONO.string_decoder.copy (mono_obj);
  		},is_nested_array:function (ele) {
  			return this._is_simple_array(ele);
  		},mono_array_to_js_array:function (mono_array) {
  			if (mono_array === 0)
  				return null;
  
  			var arrayRoot = MONO.mono_wasm_new_root (mono_array);
  			try {
  				return this._mono_array_root_to_js_array (arrayRoot);
  			} finally {
  				arrayRoot.release();
  			}
  		},_mono_array_root_to_js_array:function (arrayRoot) {
  			if (arrayRoot.value === 0)
  				return null;
  
  			let elemRoot = MONO.mono_wasm_new_root ();
  
  			try {
  				var len = this.mono_array_length (arrayRoot.value);
  				var res = new Array (len);
  				for (var i = 0; i < len; ++i)
  				{
  					elemRoot.value = this.mono_array_get (arrayRoot.value, i);
  
  					if (this.is_nested_array (elemRoot.value))
  						res[i] = this._mono_array_root_to_js_array (elemRoot);
  					else
  						res[i] = this._unbox_mono_obj_root (elemRoot);
  				}
  			} finally {
  				elemRoot.release ();
  			}
  
  			return res;
  		},js_array_to_mono_array:function (js_array, asString, should_add_in_flight) {
  			var mono_array = asString ? this.mono_wasm_string_array_new (js_array.length) : this.mono_obj_array_new (js_array.length);
  			let [arrayRoot, elemRoot] = MONO.mono_wasm_new_roots ([mono_array, 0]);
  
  			try {
  				for (var i = 0; i < js_array.length; ++i) {
  					var obj = js_array[i];
  					if (asString)
  						obj = obj.toString ();
  
  					elemRoot.value = this._js_to_mono_obj (should_add_in_flight, obj);
  					this.mono_obj_array_set (arrayRoot.value, i, elemRoot.value);
  				}
  
  				return mono_array;
  			} finally {
  				MONO.mono_wasm_release_roots (arrayRoot, elemRoot);
  			}
  		},js_to_mono_obj:function (js_obj) {
  			return this._js_to_mono_obj(false, js_obj)
  		},unbox_mono_obj:function (mono_obj) {
  			if (mono_obj === 0)
  				return undefined;
  
  			var root = MONO.mono_wasm_new_root (mono_obj);
  			try {
  				return this._unbox_mono_obj_root (root);
  			} finally {
  				root.release();
  			}
  		},_unbox_cs_owned_root_as_js_object:function (root) {
  			// we don't need in-flight reference as we already have it rooted here
  			var js_handle = this._get_cs_owned_object_js_handle(root.value, false);
  			var js_obj = BINDING.mono_wasm_get_jsobj_from_js_handle (js_handle);
  			return js_obj;
  		},_unbox_mono_obj_root_with_known_nonprimitive_type:function (root, type) {
  			if (root.value === undefined)
  				throw new Error(`Expected a root but got ${root}`);
  			
  			//See MARSHAL_TYPE_ defines in driver.c
  			switch (type) {
  				case 26: // int64
  				case 27: // uint64
  					// TODO: Fix this once emscripten offers HEAPI64/HEAPU64 or can return them
  					throw new Error ("int64 not available");
  				case 3: // string
  				case 29: // interned string
  					return this.conv_string (root.value);
  				case 4: //vts
  					throw new Error ("no idea on how to unbox value types");
  				case 5: // delegate
  					return this._wrap_delegate_root_as_function (root);
  				case 6: // Task
  					return this._unbox_task_root_as_promise (root);
  				case 7: // ref type
  					return this._unbox_ref_type_root_as_js_object (root);
  				case 10: // arrays
  				case 11:
  				case 12:
  				case 13:
  				case 14:
  				case 15:
  				case 16:
  				case 17:
  				case 18:
  					throw new Error ("Marshalling of primitive arrays are not supported.  Use the corresponding TypedArray instead.");
  				case 20: // clr .NET DateTime
  					var dateValue = this._get_date_value(root.value);
  					return new Date(dateValue);
  				case 21: // clr .NET DateTimeOffset
  					var dateoffsetValue = this._object_to_string (root.value);
  					return dateoffsetValue;
  				case 22: // clr .NET Uri
  					var uriValue = this._object_to_string (root.value);
  					return uriValue;
  				case 23: // clr .NET SafeHandle/JSObject
  					return this._unbox_cs_owned_root_as_js_object (root);
  				case 30:
  					return undefined;
  				default:
  					throw new Error (`no idea on how to unbox object kind ${type} at offset ${root.value} (root address is ${root.get_address()})`);
  			}
  		},_unbox_mono_obj_root:function (root) {
  			if (root.value === 0)
  				return undefined;
  
  			var type = this.mono_wasm_try_unbox_primitive_and_get_type (root.value, this._unbox_buffer);
  			switch (type) {
  				case 1: // int
  					return Module.HEAP32[this._unbox_buffer / 4];
  				case 25: // uint32
  					return Module.HEAPU32[this._unbox_buffer / 4];
  				case 24: // float32
  					return Module.HEAPF32[this._unbox_buffer / 4];
  				case 2: // float64
  					return Module.HEAPF64[this._unbox_buffer / 8];
  				case 8: // boolean
  					return (Module.HEAP32[this._unbox_buffer / 4]) !== 0;
  				case 28: // char
  					return String.fromCharCode(Module.HEAP32[this._unbox_buffer / 4]);
  				default:
  					return this._unbox_mono_obj_root_with_known_nonprimitive_type (root, type);
  			}
  		},js_typedarray_to_heap:function(typedArray){
  			var numBytes = typedArray.length * typedArray.BYTES_PER_ELEMENT;
  			var ptr = Module._malloc(numBytes);
  			var heapBytes = new Uint8Array(Module.HEAPU8.buffer, ptr, numBytes);
  			heapBytes.set(new Uint8Array(typedArray.buffer, typedArray.byteOffset, numBytes));
  			return heapBytes;
  		},_box_js_int:function (js_obj) {
  			Module.HEAP32[this._box_buffer / 4] = js_obj;
  			return this.mono_wasm_box_primitive (this._class_int32, this._box_buffer, 4);
  		},_box_js_uint:function (js_obj) {
  			Module.HEAPU32[this._box_buffer / 4] = js_obj;
  			return this.mono_wasm_box_primitive (this._class_uint32, this._box_buffer, 4);
  		},_box_js_double:function (js_obj) {
  			Module.HEAPF64[this._box_buffer / 8] = js_obj;
  			return this.mono_wasm_box_primitive (this._class_double, this._box_buffer, 8);
  		},_box_js_bool:function (js_obj) {
  			Module.HEAP32[this._box_buffer / 4] = js_obj ? 1 : 0;
  			return this.mono_wasm_box_primitive (this._class_boolean, this._box_buffer, 4);
  		},_js_to_mono_uri:function (should_add_in_flight, js_obj) {
  			this.bindings_lazy_init ();
  
  			switch (true) {
  				case js_obj === null:
  				case typeof js_obj === "undefined":
  					return 0;
  				case typeof js_obj === "symbol":
  				case typeof js_obj === "string":
  					return this._create_uri(js_obj)
  				default:
  					return this._extract_mono_obj (should_add_in_flight, js_obj);
  			}
  		},_js_to_mono_obj:function (should_add_in_flight, js_obj) {
  			this.bindings_lazy_init ();
  
  			switch (true) {
  				case js_obj === null:
  				case typeof js_obj === "undefined":
  					return 0;
  				case typeof js_obj === "number": {
  					if ((js_obj | 0) === js_obj)
  						result = this._box_js_int (js_obj);
  					else if ((js_obj >>> 0) === js_obj)
  						result = this._box_js_uint (js_obj);
  					else
  						result = this._box_js_double (js_obj);
  
  					if (!result)
  						throw new Error (`Boxing failed for ${js_obj}`);
  
  					return result;
  				} case typeof js_obj === "string":
  					return this.js_string_to_mono_string (js_obj);
  				case typeof js_obj === "symbol":
  					return this.js_string_to_mono_string_interned (js_obj);
  				case typeof js_obj === "boolean":
  					return this._box_js_bool (js_obj);
  				case this.isThenable(js_obj) === true:
  					return this._wrap_js_thenable_as_task (js_obj);
  				case js_obj.constructor.name === "Date":
  					// getTime() is always UTC
  					return this._create_date_time(js_obj.getTime());
  				default:
  					return this._extract_mono_obj (should_add_in_flight, js_obj);
  			}
  		},_extract_mono_obj:function (should_add_in_flight, js_obj) {
  			if (js_obj === null || typeof js_obj === "undefined")
  				return 0;
  
  			var result = null;
  			if (js_obj[BINDING.js_owned_gc_handle_symbol]) {
  				// for js_owned_gc_handle we don't want to create new proxy
  				// since this is strong gc_handle we don't need to in-flight reference
  				result = this.get_js_owned_object_by_gc_handle (js_obj[BINDING.js_owned_gc_handle_symbol]);
  				return result;
  			}
  			if (js_obj[BINDING.cs_owned_js_handle_symbol]) {
  				result = this.get_cs_owned_object_by_js_handle (js_obj[BINDING.cs_owned_js_handle_symbol], should_add_in_flight);
  
  				// It's possible the managed object corresponding to this JS object was collected,
  				//  in which case we need to make a new one.
  				if (!result) {
  					delete js_obj[BINDING.cs_owned_js_handle_symbol];
  				}
  			}
  
  			if (!result) {
  				// Obtain the JS -> C# type mapping.
  				const wasm_type = js_obj[this.wasm_type_symbol];
  				const wasm_type_id = typeof wasm_type === "undefined" ? 0 : wasm_type;
  
  				var js_handle = BINDING.mono_wasm_get_js_handle(js_obj);
  
  				result = this._create_cs_owned_proxy(js_handle, wasm_type_id, should_add_in_flight);
  			}
  
  			return result;
  		},has_backing_array_buffer:function (js_obj) {
  			return typeof SharedArrayBuffer !== 'undefined'
  				? js_obj.buffer instanceof ArrayBuffer || js_obj.buffer instanceof SharedArrayBuffer
  				: js_obj.buffer instanceof ArrayBuffer;
  		},js_typed_array_to_array:function (js_obj) {
  
  			// JavaScript typed arrays are array-like objects and provide a mechanism for accessing
  			// raw binary data. (...) To achieve maximum flexibility and efficiency, JavaScript typed arrays
  			// split the implementation into buffers and views. A buffer (implemented by the ArrayBuffer object)
  			//  is an object representing a chunk of data; it has no format to speak of, and offers no
  			// mechanism for accessing its contents. In order to access the memory contained in a buffer,
  			// you need to use a view. A view provides a context — that is, a data type, starting offset,
  			// and number of elements — that turns the data into an actual typed array.
  			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
  			if (!!(this.has_backing_array_buffer(js_obj) && js_obj.BYTES_PER_ELEMENT))
  			{
  				var arrayType = js_obj[this.wasm_type_symbol];
  				var heapBytes = this.js_typedarray_to_heap(js_obj);
  				var bufferArray = this.mono_typed_array_new(heapBytes.byteOffset, js_obj.length, js_obj.BYTES_PER_ELEMENT, arrayType);
  				Module._free(heapBytes.byteOffset);
  				return bufferArray;
  			}
  			else {
  				throw new Error("Object '" + js_obj + "' is not a typed array");
  			}
  
  		},typedarray_copy_to:function (typed_array, pinned_array, begin, end, bytes_per_element) {
  
  			// JavaScript typed arrays are array-like objects and provide a mechanism for accessing
  			// raw binary data. (...) To achieve maximum flexibility and efficiency, JavaScript typed arrays
  			// split the implementation into buffers and views. A buffer (implemented by the ArrayBuffer object)
  			//  is an object representing a chunk of data; it has no format to speak of, and offers no
  			// mechanism for accessing its contents. In order to access the memory contained in a buffer,
  			// you need to use a view. A view provides a context — that is, a data type, starting offset,
  			// and number of elements — that turns the data into an actual typed array.
  			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
  			if (!!(this.has_backing_array_buffer(typed_array) && typed_array.BYTES_PER_ELEMENT))
  			{
  				// Some sanity checks of what is being asked of us
  				// lets play it safe and throw an error here instead of assuming to much.
  				// Better safe than sorry later
  				if (bytes_per_element !== typed_array.BYTES_PER_ELEMENT)
  					throw new Error("Inconsistent element sizes: TypedArray.BYTES_PER_ELEMENT '" + typed_array.BYTES_PER_ELEMENT + "' sizeof managed element: '" + bytes_per_element + "'");
  
  				// how much space we have to work with
  				var num_of_bytes = (end - begin) * bytes_per_element;
  				// how much typed buffer space are we talking about
  				var view_bytes = typed_array.length * typed_array.BYTES_PER_ELEMENT;
  				// only use what is needed.
  				if (num_of_bytes > view_bytes)
  					num_of_bytes = view_bytes;
  
  				// offset index into the view
  				var offset = begin * bytes_per_element;
  
  				// Create a view over the heap pointed to by the pinned array address
  				var heapBytes = new Uint8Array(Module.HEAPU8.buffer, pinned_array + offset, num_of_bytes);
  				// Copy the bytes of the typed array to the heap.
  				heapBytes.set(new Uint8Array(typed_array.buffer, typed_array.byteOffset, num_of_bytes));
  
  				return num_of_bytes;
  			}
  			else {
  				throw new Error("Object '" + typed_array + "' is not a typed array");
  			}
  
  		},typedarray_copy_from:function (typed_array, pinned_array, begin, end, bytes_per_element) {
  
  			// JavaScript typed arrays are array-like objects and provide a mechanism for accessing
  			// raw binary data. (...) To achieve maximum flexibility and efficiency, JavaScript typed arrays
  			// split the implementation into buffers and views. A buffer (implemented by the ArrayBuffer object)
  			//  is an object representing a chunk of data; it has no format to speak of, and offers no
  			// mechanism for accessing its contents. In order to access the memory contained in a buffer,
  			// you need to use a view. A view provides a context — that is, a data type, starting offset,
  			// and number of elements — that turns the data into an actual typed array.
  			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
  			if (!!(this.has_backing_array_buffer(typed_array) && typed_array.BYTES_PER_ELEMENT))
  			{
  				// Some sanity checks of what is being asked of us
  				// lets play it safe and throw an error here instead of assuming to much.
  				// Better safe than sorry later
  				if (bytes_per_element !== typed_array.BYTES_PER_ELEMENT)
  					throw new Error("Inconsistent element sizes: TypedArray.BYTES_PER_ELEMENT '" + typed_array.BYTES_PER_ELEMENT + "' sizeof managed element: '" + bytes_per_element + "'");
  
  				// how much space we have to work with
  				var num_of_bytes = (end - begin) * bytes_per_element;
  				// how much typed buffer space are we talking about
  				var view_bytes = typed_array.length * typed_array.BYTES_PER_ELEMENT;
  				// only use what is needed.
  				if (num_of_bytes > view_bytes)
  					num_of_bytes = view_bytes;
  
  				// Create a new view for mapping
  				var typedarrayBytes = new Uint8Array(typed_array.buffer, 0, num_of_bytes);
  				// offset index into the view
  				var offset = begin * bytes_per_element;
  				// Set view bytes to value from HEAPU8
  				typedarrayBytes.set(Module.HEAPU8.subarray(pinned_array + offset, pinned_array + offset + num_of_bytes));
  				return num_of_bytes;
  			}
  			else {
  				throw new Error("Object '" + typed_array + "' is not a typed array");
  			}
  
  		},typed_array_from:function (pinned_array, begin, end, bytes_per_element, type) {
  
  			// typed array
  			var newTypedArray = 0;
  
  			switch (type)
  			{
  				case 5:
  					newTypedArray = new Int8Array(end - begin);
  					break;
  				case 6:
  					newTypedArray = new Uint8Array(end - begin);
  					break;
  				case 7:
  					newTypedArray = new Int16Array(end - begin);
  					break;
  				case 8:
  					newTypedArray = new Uint16Array(end - begin);
  					break;
  				case 9:
  					newTypedArray = new Int32Array(end - begin);
  					break;
  				case 10:
  					newTypedArray = new Uint32Array(end - begin);
  					break;
  				case 13:
  					newTypedArray = new Float32Array(end - begin);
  					break;
  				case 14:
  					newTypedArray = new Float64Array(end - begin);
  					break;
  				case 15:  // This is a special case because the typed array is also byte[]
  					newTypedArray = new Uint8ClampedArray(end - begin);
  					break;
  			}
  
  			this.typedarray_copy_from(newTypedArray, pinned_array, begin, end, bytes_per_element);
  			return newTypedArray;
  		},js_to_mono_enum:function (js_obj, method, parmIdx) {
  			this.bindings_lazy_init ();
  
  			if (typeof (js_obj) !== "number")
  				throw new Error (`Expected numeric value for enum argument, got '${js_obj}'`);
  
  			return js_obj | 0;
  		},get_js_owned_object_by_gc_handle:function (gc_handle)
  		{
  			if(!gc_handle){
  				return 0;
  			}
  			// this is always strong gc_handle
  			return this._get_js_owned_object_by_gc_handle (gc_handle);
  		},get_cs_owned_object_by_js_handle:function (js_handle, should_add_in_flight)
  		{
  			if(!js_handle){
  				return 0;
  			}
  			return this._get_cs_owned_object_by_js_handle (js_handle, should_add_in_flight);
  		},mono_method_get_call_signature:function(method, mono_obj) {
  			let instanceRoot = MONO.mono_wasm_new_root (mono_obj);
  			try {
  				this.bindings_lazy_init ();
  
  				return this.call_method (this.get_call_sig, null, "im", [ method, instanceRoot.value ]);
  			} finally {
  				instanceRoot.release();
  			}
  		},_create_named_function:function (name, argumentNames, body, closure) {
  			var result = null, keys = null, closureArgumentList = null, closureArgumentNames = null;
  
  			if (closure) {
  				closureArgumentNames = Object.keys (closure);
  				closureArgumentList = new Array (closureArgumentNames.length);
  				for (var i = 0, l = closureArgumentNames.length; i < l; i++)
  					closureArgumentList[i] = closure[closureArgumentNames[i]];
  			}
  
  			var constructor = this._create_rebindable_named_function (name, argumentNames, body, closureArgumentNames);
  			result = constructor.apply (null, closureArgumentList);
  
  			return result;
  		},_create_rebindable_named_function:function (name, argumentNames, body, closureArgNames) {
  			var strictPrefix = "\"use strict\";\r\n";
  			var uriPrefix = "", escapedFunctionIdentifier = "";
  
  			if (name) {
  				uriPrefix = "//# sourceURL=https://mono-wasm.invalid/" + name + "\r\n";
  				escapedFunctionIdentifier = name;
  			} else {
  				escapedFunctionIdentifier = "unnamed";
  			}
  
  			var rawFunctionText = "function " + escapedFunctionIdentifier + "(" +
  				argumentNames.join(", ") +
  				") {\r\n" +
  				body +
  				"\r\n};\r\n";
  
  			var lineBreakRE = /\r(\n?)/g;
  
  			rawFunctionText =
  				uriPrefix + strictPrefix +
  				rawFunctionText.replace(lineBreakRE, "\r\n    ") +
  				`    return ${escapedFunctionIdentifier};\r\n`;
  
  			var result = null, keys = null;
  
  			if (closureArgNames) {
  				keys = closureArgNames.concat ([rawFunctionText]);
  			} else {
  				keys = [rawFunctionText];
  			}
  
  			result = Function.apply (Function, keys);
  			return result;
  		},_create_primitive_converters:function () {
  			var result = new Map ();
  			result.set ('m', { steps: [{ }], size: 0});
  			result.set ('s', { steps: [{ convert: this.js_string_to_mono_string.bind (this) }], size: 0, needs_root: true });
  			result.set ('S', { steps: [{ convert: this.js_string_to_mono_string_interned.bind (this) }], size: 0, needs_root: true });
  			// note we also bind first argument to false for both _js_to_mono_obj and _js_to_mono_uri, 
  			// because we will root the reference, so we don't need in-flight reference
  			// also as those are callback arguments and we don't have platform code which would release the in-flight reference on C# end
  			result.set ('o', { steps: [{ convert: this._js_to_mono_obj.bind (this, false) }], size: 0, needs_root: true });
  			result.set ('u', { steps: [{ convert: this._js_to_mono_uri.bind (this, false) }], size: 0, needs_root: true });
  
  			// result.set ('k', { steps: [{ convert: this.js_to_mono_enum.bind (this), indirect: 'i64'}], size: 8});
  			result.set ('j', { steps: [{ convert: this.js_to_mono_enum.bind (this), indirect: 'i32'}], size: 8});
  
  			result.set ('i', { steps: [{ indirect: 'i32'}], size: 8});
  			result.set ('l', { steps: [{ indirect: 'i64'}], size: 8});
  			result.set ('f', { steps: [{ indirect: 'float'}], size: 8});
  			result.set ('d', { steps: [{ indirect: 'double'}], size: 8});
  
  			this._primitive_converters = result;
  			return result;
  		},_create_converter_for_marshal_string:function (args_marshal) {
  			var primitiveConverters = this._primitive_converters;
  			if (!primitiveConverters)
  				primitiveConverters = this._create_primitive_converters ();
  
  			var steps = [];
  			var size = 0;
  			var is_result_definitely_unmarshaled = false,
  				is_result_possibly_unmarshaled = false,
  				result_unmarshaled_if_argc = -1,
  				needs_root_buffer = false;
  
  			for (var i = 0; i < args_marshal.length; ++i) {
  				var key = args_marshal[i];
  
  				if (i === args_marshal.length - 1) {
  					if (key === "!") {
  						is_result_definitely_unmarshaled = true;
  						continue;
  					} else if (key === "m") {
  						is_result_possibly_unmarshaled = true;
  						result_unmarshaled_if_argc = args_marshal.length - 1;
  					}
  				} else if (key === "!")
  					throw new Error ("! must be at the end of the signature");
  
  				var conv = primitiveConverters.get (key);
  				if (!conv)
  					throw new Error ("Unknown parameter type " + type);
  
  				var localStep = Object.create (conv.steps[0]);
  				localStep.size = conv.size;
  				if (conv.needs_root)
  					needs_root_buffer = true;
  				localStep.needs_root = conv.needs_root;
  				localStep.key = args_marshal[i];
  				steps.push (localStep);
  				size += conv.size;
  			}
  
  			return {
  				steps: steps, size: size, args_marshal: args_marshal,
  				is_result_definitely_unmarshaled: is_result_definitely_unmarshaled,
  				is_result_possibly_unmarshaled: is_result_possibly_unmarshaled,
  				result_unmarshaled_if_argc: result_unmarshaled_if_argc,
  				needs_root_buffer: needs_root_buffer
  			};
  		},_get_converter_for_marshal_string:function (args_marshal) {
  			if (!this._signature_converters)
  				this._signature_converters = new Map();
  
  			var converter = this._signature_converters.get (args_marshal);
  			if (!converter) {
  				converter = this._create_converter_for_marshal_string (args_marshal);
  				this._signature_converters.set (args_marshal, converter);
  			}
  
  			return converter;
  		},_compile_converter_for_marshal_string:function (args_marshal) {
  			var converter = this._get_converter_for_marshal_string (args_marshal);
  			if (typeof (converter.args_marshal) !== "string")
  				throw new Error ("Corrupt converter for '" + args_marshal + "'");
  
  			if (converter.compiled_function && converter.compiled_variadic_function)
  				return converter;
  
  			var converterName = args_marshal.replace("!", "_result_unmarshaled");
  			converter.name = converterName;
  
  			var body = [];
  			var argumentNames = ["buffer", "rootBuffer", "method"];
  
  			// worst-case allocation size instead of allocating dynamically, plus padding
  			var bufferSizeBytes = converter.size + (args_marshal.length * 4) + 16;
  			var rootBufferSize = args_marshal.length;
  			// ensure the indirect values are 8-byte aligned so that aligned loads and stores will work
  			var indirectBaseOffset = ((((args_marshal.length * 4) + 7) / 8) | 0) * 8;
  
  			var closure = {};
  			var indirectLocalOffset = 0;
  
  			body.push (
  				`if (!buffer) buffer = Module._malloc (${bufferSizeBytes});`,
  				`var indirectStart = buffer + ${indirectBaseOffset};`,
  				"var indirect32 = (indirectStart / 4) | 0, indirect64 = (indirectStart / 8) | 0;",
  				"var buffer32 = (buffer / 4) | 0;",
  				""
  			);
  
  			for (let i = 0; i < converter.steps.length; i++) {
  				var step = converter.steps[i];
  				var closureKey = "step" + i;
  				var valueKey = "value" + i;
  
  				var argKey = "arg" + i;
  				argumentNames.push (argKey);
  
  				if (step.convert) {
  					closure[closureKey] = step.convert;
  					body.push (`var ${valueKey} = ${closureKey}(${argKey}, method, ${i});`);
  				} else {
  					body.push (`var ${valueKey} = ${argKey};`);
  				}
  
  				if (step.needs_root)
  					body.push (`rootBuffer.set (${i}, ${valueKey});`);
  
  				if (step.indirect) {
  					var heapArrayName = null;
  
  					switch (step.indirect) {
  						case "u32":
  							heapArrayName = "HEAPU32";
  							break;
  						case "i32":
  							heapArrayName = "HEAP32";
  							break;
  						case "float":
  							heapArrayName = "HEAPF32";
  							break;
  						case "double":
  							body.push (`Module.HEAPF64[indirect64 + ${(indirectLocalOffset / 8)}] = ${valueKey};`);
  							break;
  						case "i64":
  							body.push (`Module.setValue (indirectStart + ${indirectLocalOffset}, ${valueKey}, 'i64');`);
  							break;
  						default:
  							throw new Error ("Unimplemented indirect type: " + step.indirect);
  					}
  
  					if (heapArrayName)
  						body.push (`Module.${heapArrayName}[indirect32 + ${(indirectLocalOffset / 4)}] = ${valueKey};`);
  
  					body.push (`Module.HEAP32[buffer32 + ${i}] = indirectStart + ${indirectLocalOffset};`, "");
  					indirectLocalOffset += step.size;
  				} else {
  					body.push (`Module.HEAP32[buffer32 + ${i}] = ${valueKey};`, "");
  					indirectLocalOffset += 4;
  				}
  			}
  
  			body.push ("return buffer;");
  
  			var bodyJs = body.join ("\r\n"), compiledFunction = null, compiledVariadicFunction = null;
  			try {
  				compiledFunction = this._create_named_function("converter_" + converterName, argumentNames, bodyJs, closure);
  				converter.compiled_function = compiledFunction;
  			} catch (exc) {
  				converter.compiled_function = null;
  				console.warn("compiling converter failed for", bodyJs, "with error", exc);
  				throw exc;
  			}
  
  			argumentNames = ["existingBuffer", "rootBuffer", "method", "args"];
  			closure = {
  				converter: compiledFunction
  			};
  			body = [
  				"return converter(",
  				"  existingBuffer, rootBuffer, method,"
  			];
  
  			for (let i = 0; i < converter.steps.length; i++) {
  				body.push(
  					"  args[" + i +
  					(
  						(i == converter.steps.length - 1)
  							? "]"
  							: "], "
  					)
  				);
  			}
  
  			body.push(");");
  
  			bodyJs = body.join ("\r\n");
  			try {
  				compiledVariadicFunction = this._create_named_function("variadic_converter_" + converterName, argumentNames, bodyJs, closure);
  				converter.compiled_variadic_function = compiledVariadicFunction;
  			} catch (exc) {
  				converter.compiled_variadic_function = null;
  				console.warn("compiling converter failed for", bodyJs, "with error", exc);
  				throw exc;
  			}
  
  			converter.scratchRootBuffer = null;
  			converter.scratchBuffer = 0 | 0;
  
  			return converter;
  		},_verify_args_for_method_call:function (args_marshal, args) {
  			var has_args = args && (typeof args === "object") && args.length > 0;
  			var has_args_marshal = typeof args_marshal === "string";
  
  			if (has_args) {
  				if (!has_args_marshal)
  					throw new Error ("No signature provided for method call.");
  				else if (args.length > args_marshal.length)
  					throw new Error ("Too many parameter values. Expected at most " + args_marshal.length + " value(s) for signature " + args_marshal);
  			}
  
  			return has_args_marshal && has_args;
  		},_get_buffer_for_method_call:function (converter) {
  			if (!converter)
  				return 0;
  
  			var result = converter.scratchBuffer;
  			converter.scratchBuffer = 0;
  			return result;
  		},_get_args_root_buffer_for_method_call:function (converter) {
  			if (!converter)
  				return null;
  
  			if (!converter.needs_root_buffer)
  				return null;
  
  			var result;
  			if (converter.scratchRootBuffer) {
  				result = converter.scratchRootBuffer;
  				converter.scratchRootBuffer = null;
  			} else {
  				// TODO: Expand the converter's heap allocation and then use
  				//  mono_wasm_new_root_buffer_from_pointer instead. Not that important
  				//  at present because the scratch buffer will be reused unless we are
  				//  recursing through a re-entrant call
  				result = MONO.mono_wasm_new_root_buffer (converter.steps.length);
  				result.converter = converter;
  			}
  			return result;
  		},_release_args_root_buffer_from_method_call:function (converter, argsRootBuffer) {
  			if (!argsRootBuffer || !converter)
  				return;
  
  			// Store the arguments root buffer for re-use in later calls
  			if (!converter.scratchRootBuffer) {
  				argsRootBuffer.clear ();
  				converter.scratchRootBuffer = argsRootBuffer;
  			} else {
  				argsRootBuffer.release ();
  			}
  		},_release_buffer_from_method_call:function (converter, buffer) {
  			if (!converter || !buffer)
  				return;
  
  			if (!converter.scratchBuffer)
  				converter.scratchBuffer = buffer | 0;
  			else
  				Module._free (buffer | 0);
  		},_convert_exception_for_method_call:function (result, exception) {
  			if (exception === 0)
  				return null;
  
  			var msg = this.conv_string (result);
  			var err = new Error (msg); //the convention is that invoke_method ToString () any outgoing exception
  			// console.warn ("error", msg, "at location", err.stack);
  			return err;
  		},_maybe_produce_signature_warning:function (converter) {
  			if (converter.has_warned_about_signature)
  				return;
  
  			console.warn ("MONO_WASM: Deprecated raw return value signature: '" + converter.args_marshal + "'. End the signature with '!' instead of 'm'.");
  			converter.has_warned_about_signature = true;
  		},_decide_if_result_is_marshaled:function (converter, argc) {
  			if (!converter)
  				return true;
  
  			if (
  				converter.is_result_possibly_unmarshaled &&
  				(argc === converter.result_unmarshaled_if_argc)
  			) {
  				if (argc < converter.result_unmarshaled_if_argc)
  					throw new Error(["Expected >= ", converter.result_unmarshaled_if_argc, "argument(s) but got", argc, "for signature " + converter.args_marshal].join(" "));
  
  				this._maybe_produce_signature_warning (converter);
  				return false;
  			} else {
  				if (argc < converter.steps.length)
  					throw new Error(["Expected", converter.steps.length, "argument(s) but got", argc, "for signature " + converter.args_marshal].join(" "));
  
  				return !converter.is_result_definitely_unmarshaled;
  			}
  		},call_method:function (method, this_arg, args_marshal, args) {
  			this.bindings_lazy_init ();
  
  			// HACK: Sometimes callers pass null or undefined, coerce it to 0 since that's what wasm expects
  			this_arg = this_arg | 0;
  
  			// Detect someone accidentally passing the wrong type of value to method
  			if ((method | 0) !== method)
  				throw new Error (`method must be an address in the native heap, but was '${method}'`);
  			if (!method)
  				throw new Error ("no method specified");
  
  			var needs_converter = this._verify_args_for_method_call (args_marshal, args);
  
  			var buffer = 0, converter = null, argsRootBuffer = null;
  			var is_result_marshaled = true;
  
  			// check if the method signature needs argument mashalling
  			if (needs_converter) {
  				converter = this._compile_converter_for_marshal_string (args_marshal);
  
  				is_result_marshaled = this._decide_if_result_is_marshaled (converter, args.length);
  
  				argsRootBuffer = this._get_args_root_buffer_for_method_call (converter);
  
  				var scratchBuffer = this._get_buffer_for_method_call (converter);
  
  				buffer = converter.compiled_variadic_function (scratchBuffer, argsRootBuffer, method, args);
  			}
  			return this._call_method_with_converted_args (method, this_arg, converter, buffer, is_result_marshaled, argsRootBuffer);
  		},_handle_exception_for_call:function (
  			converter, buffer, resultRoot, exceptionRoot, argsRootBuffer
  		) {
  			var exc = this._convert_exception_for_method_call (resultRoot.value, exceptionRoot.value);
  			if (!exc)
  				return;
  
  			this._teardown_after_call (converter, buffer, resultRoot, exceptionRoot, argsRootBuffer);
  			throw exc;
  		},_handle_exception_and_produce_result_for_call:function (
  			converter, buffer, resultRoot, exceptionRoot, argsRootBuffer, is_result_marshaled
  		) {
  			this._handle_exception_for_call (converter, buffer, resultRoot, exceptionRoot, argsRootBuffer);
  
  			if (is_result_marshaled)
  				result = this._unbox_mono_obj_root (resultRoot);
  			else
  				result = resultRoot.value;
  
  			this._teardown_after_call (converter, buffer, resultRoot, exceptionRoot, argsRootBuffer);
  			return result;
  		},_teardown_after_call:function (converter, buffer, resultRoot, exceptionRoot, argsRootBuffer) {
  			this._release_args_root_buffer_from_method_call (converter, argsRootBuffer);
  			this._release_buffer_from_method_call (converter, buffer | 0);
  
  			if (resultRoot)
  				resultRoot.release ();
  			if (exceptionRoot)
  				exceptionRoot.release ();
  		},_get_method_description:function (method) {
  			if (!this._method_descriptions)
  				this._method_descriptions = new Map();
  
  			var result = this._method_descriptions.get (method);
  			if (!result)
  				result = "method#" + method;
  			return result;
  		},_call_method_with_converted_args:function (method, this_arg, converter, buffer, is_result_marshaled, argsRootBuffer) {
  			var resultRoot = MONO.mono_wasm_new_root (), exceptionRoot = MONO.mono_wasm_new_root ();
  			resultRoot.value = this.invoke_method (method, this_arg, buffer, exceptionRoot.get_address ());
  			return this._handle_exception_and_produce_result_for_call (converter, buffer, resultRoot, exceptionRoot, argsRootBuffer, is_result_marshaled);
  		},bind_method:function (method, this_arg, args_marshal, friendly_name) {
  			this.bindings_lazy_init ();
  
  			this_arg = this_arg | 0;
  
  			var converter = null;
  			if (typeof (args_marshal) === "string")
  				converter = this._compile_converter_for_marshal_string (args_marshal);
  
  			var closure = {
  				library_mono: MONO,
  				binding_support: this,
  				method: method,
  				this_arg: this_arg
  			};
  
  			var converterKey = "converter_" + converter.name;
  
  			if (converter)
  				closure[converterKey] = converter;
  
  			var argumentNames = [];
  			var body = [
  				"var resultRoot = library_mono.mono_wasm_new_root (), exceptionRoot = library_mono.mono_wasm_new_root ();",
  				""
  			];
  
  			if (converter) {
  				body.push(
  					`var argsRootBuffer = binding_support._get_args_root_buffer_for_method_call (${converterKey});`,
  					`var scratchBuffer = binding_support._get_buffer_for_method_call (${converterKey});`,
  					`var buffer = ${converterKey}.compiled_function (`,
  					"    scratchBuffer, argsRootBuffer, method,"
  				);
  
  				for (var i = 0; i < converter.steps.length; i++) {
  					var argName = "arg" + i;
  					argumentNames.push(argName);
  					body.push(
  						"    " + argName +
  						(
  							(i == converter.steps.length - 1)
  								? ""
  								: ", "
  						)
  					);
  				}
  
  				body.push(");");
  
  			} else {
  				body.push("var argsRootBuffer = null, buffer = 0;");
  			}
  
  			if (converter.is_result_definitely_unmarshaled) {
  				body.push ("var is_result_marshaled = false;");
  			} else if (converter.is_result_possibly_unmarshaled) {
  				body.push (`var is_result_marshaled = arguments.length !== ${converter.result_unmarshaled_if_argc};`);
  			} else {
  				body.push ("var is_result_marshaled = true;");
  			}
  
  			// We inline a bunch of the invoke and marshaling logic here in order to eliminate the GC pressure normally
  			//  created by the unboxing part of the call process. Because unbox_mono_obj(_root) can return non-numeric
  			//  types, v8 and spidermonkey allocate and store its result on the heap (in the nursery, to be fair).
  			// For a bound method however, we know the result will always be the same type because C# methods have known
  			//  return types. Inlining the invoke and marshaling logic means that even though the bound method has logic
  			//  for handling various types, only one path through the method (for its appropriate return type) will ever
  			//  be taken, and the JIT will see that the 'result' local and thus the return value of this function are
  			//  always of the exact same type. All of the branches related to this end up being predicted and low-cost.
  			// The end result is that bound method invocations don't always allocate, so no more nursery GCs. Yay! -kg
  			body.push(
  				"",
  				"resultRoot.value = binding_support.invoke_method (method, this_arg, buffer, exceptionRoot.get_address ());",
  				`binding_support._handle_exception_for_call (${converterKey}, buffer, resultRoot, exceptionRoot, argsRootBuffer);`,
  				"",
  				"var result = undefined;",
  				"if (!is_result_marshaled) ",
  				"    result = resultRoot.value;",
  				"else if (resultRoot.value !== 0) {",
  				// For the common scenario where the return type is a primitive, we want to try and unbox it directly
  				//  into our existing heap allocation and then read it out of the heap. Doing this all in one operation
  				//  means that we only need to enter a gc safe region twice (instead of 3+ times with the normal,
  				//  slower check-type-and-then-unbox flow which has extra checks since unbox verifies the type).
  				"    var resultType = binding_support.mono_wasm_try_unbox_primitive_and_get_type (resultRoot.value, buffer);",
  				"    switch (resultType) {",
  				"    case 1:", // int
  				"        result = Module.HEAP32[buffer / 4]; break;",
  				"    case 25:", // uint32
  				"        result = Module.HEAPU32[buffer / 4]; break;",
  				"    case 24:", // float32
  				"        result = Module.HEAPF32[buffer / 4]; break;",
  				"    case 2:", // float64
  				"        result = Module.HEAPF64[buffer / 8]; break;",
  				"    case 8:", // boolean
  				"        result = (Module.HEAP32[buffer / 4]) !== 0; break;",
  				"    case 28:", // char
  				"        result = String.fromCharCode(Module.HEAP32[buffer / 4]); break;",
  				"    default:",
  				"        result = binding_support._unbox_mono_obj_root_with_known_nonprimitive_type (resultRoot, resultType); break;",
  				"    }",
  				"}",
  				"",
  				`binding_support._teardown_after_call (${converterKey}, buffer, resultRoot, exceptionRoot, argsRootBuffer);`,
  				"return result;"
  			);
  
  			bodyJs = body.join ("\r\n");
  
  			if (friendly_name) {
  				var escapeRE = /[^A-Za-z0-9_]/g;
  				friendly_name = friendly_name.replace(escapeRE, "_");
  			}
  
  			var displayName = "managed_" + (friendly_name || method);
  
  			if (this_arg)
  				displayName += "_with_this_" + this_arg;
  
  			return this._create_named_function(displayName, argumentNames, bodyJs, closure);
  		},resolve_method_fqn:function (fqn) {
  			this.bindings_lazy_init ();
  
  			var assembly = fqn.substring(fqn.indexOf ("[") + 1, fqn.indexOf ("]")).trim();
  			fqn = fqn.substring (fqn.indexOf ("]") + 1).trim();
  
  			var methodname = fqn.substring(fqn.indexOf (":") + 1);
  			fqn = fqn.substring (0, fqn.indexOf (":")).trim ();
  
  			var namespace = "";
  			var classname = fqn;
  			if (fqn.indexOf(".") != -1) {
  				var idx = fqn.lastIndexOf(".");
  				namespace = fqn.substring (0, idx);
  				classname = fqn.substring (idx + 1);
  			}
  
  			if (!assembly.trim())
  				throw new Error("No assembly name specified");
  			if (!classname.trim())
  				throw new Error("No class name specified");
  			if (!methodname.trim())
  				throw new Error("No method name specified");
  
  			var asm = this.assembly_load (assembly);
  			if (!asm)
  				throw new Error ("Could not find assembly: " + assembly);
  
  			var klass = this.find_class(asm, namespace, classname);
  			if (!klass)
  				throw new Error ("Could not find class: " + namespace + ":" + classname + " in assembly " + assembly);
  
  			var method = this.find_method (klass, methodname, -1);
  			if (!method)
  				throw new Error ("Could not find method: " + methodname);
  			return method;
  		},call_static_method:function (fqn, args, signature) {
  			this.bindings_lazy_init ();
  
  			var method = this.resolve_method_fqn (fqn);
  
  			if (typeof signature === "undefined")
  				signature = Module.mono_method_get_call_signature (method);
  
  			return this.call_method (method, null, signature, args);
  		},bind_static_method:function (fqn, signature) {
  			this.bindings_lazy_init ();
  
  			var method = this.resolve_method_fqn (fqn);
  
  			if (typeof signature === "undefined")
  				signature = Module.mono_method_get_call_signature (method);
  
  			return BINDING.bind_method (method, null, signature, fqn);
  		},bind_assembly_entry_point:function (assembly, signature) {
  			this.bindings_lazy_init ();
  
  			var asm = this.assembly_load (assembly);
  			if (!asm)
  				throw new Error ("Could not find assembly: " + assembly);
  
  			var method = this.assembly_get_entry_point(asm);
  			if (!method)
  				throw new Error ("Could not find entry point for assembly: " + assembly);
  
  			if (typeof signature === "undefined")
  				signature = Module.mono_method_get_call_signature (method);
  
  			return function() {
  				try {
  					var args = [...arguments];
  					if (args.length > 0 && Array.isArray (args[0]))
  						args[0] = BINDING.js_array_to_mono_array (args[0], true, false);
  
  					let result = BINDING.call_method (method, null, signature, args);
  					return Promise.resolve (result);
  				} catch (error) {
  					return Promise.reject (error);
  				}
  			};
  		},call_assembly_entry_point:function (assembly, args, signature) {
  			return this.bind_assembly_entry_point (assembly, signature) (...args)
  		},mono_wasm_get_jsobj_from_js_handle:function(js_handle) {
  			if (js_handle > 0)
  				return this._cs_owned_objects_by_js_handle[js_handle];
  			return null;
  		},mono_wasm_get_js_handle:function(js_obj) {
  			if(js_obj[BINDING.cs_owned_js_handle_symbol]){
  				return js_obj[BINDING.cs_owned_js_handle_symbol];
  			}
  			var js_handle = this._js_handle_free_list.length ? this._js_handle_free_list.pop() : this._next_js_handle++;
  			// note _cs_owned_objects_by_js_handle is list, not Map. That's why we maintain _js_handle_free_list.
  			this._cs_owned_objects_by_js_handle[js_handle] = js_obj;
  			js_obj[BINDING.cs_owned_js_handle_symbol] = js_handle;
  			return js_handle;
  		},_mono_wasm_release_js_handle:function(js_handle) {
  			var obj = BINDING._cs_owned_objects_by_js_handle[js_handle];
  			if (typeof obj  !== "undefined" && obj !== null) {
  				// if this is the global object then do not
  				// unregister it.
  				if (globalThis === obj)
  					return obj;
  
  				if (typeof obj[BINDING.cs_owned_js_handle_symbol]  !== "undefined") {
  					obj[BINDING.cs_owned_js_handle_symbol] = undefined;
  				}
  
  				BINDING._cs_owned_objects_by_js_handle[js_handle] = undefined;
  				BINDING._js_handle_free_list.push(js_handle);
  			}
  			return obj;
  		}};
  function _mono_wasm_add_event_listener(objHandle, name, listener_gc_handle, optionsHandle) {
  		var nameRoot = MONO.mono_wasm_new_root (name);
  		try {
  			BINDING.bindings_lazy_init ();
  			var sName = BINDING.conv_string(nameRoot.value);
  
  			var obj = BINDING.mono_wasm_get_jsobj_from_js_handle(objHandle);
  			if (!obj)
  				throw new Error("ERR09: Invalid JS object handle for '"+sName+"'");
  
  			const prevent_timer_throttling = !BINDING.isChromium || obj.constructor.name !== 'WebSocket'
  				? null
  				: () => MONO.prevent_timer_throttling(0);
  
  			var listener = BINDING._wrap_delegate_gc_handle_as_function(listener_gc_handle, prevent_timer_throttling);
  			if (!listener)
  				throw new Error("ERR10: Invalid listener gc_handle");
  
  			var options = optionsHandle
  				? BINDING.mono_wasm_get_jsobj_from_js_handle(optionsHandle)
  				: null;
  
  			if(!BINDING._use_finalization_registry){
  				// we are counting registrations because same delegate could be registered into multiple sources
  				listener[BINDING.listener_registration_count_symbol] = listener[BINDING.listener_registration_count_symbol] ? listener[BINDING.listener_registration_count_symbol] + 1 : 1;
  			}
  
  			if (options)
  				obj.addEventListener(sName, listener, options);
  			else
  				obj.addEventListener(sName, listener);
  			return 0;
  		} catch (exc) {
  			return BINDING.js_string_to_mono_string(exc.message);
  		} finally {
  			nameRoot.release();
  		}
  	}

  function _mono_wasm_asm_loaded(assembly_name, assembly_ptr, assembly_len, pdb_ptr, pdb_len) {
  		// Only trigger this codepath for assemblies loaded after app is ready
  		if (MONO.mono_wasm_runtime_is_ready !== true)
  			return;
  
  		const assembly_name_str = assembly_name !== 0 ? Module.UTF8ToString(assembly_name).concat('.dll') : '';
  
  		const assembly_data = new Uint8Array(Module.HEAPU8.buffer, assembly_ptr, assembly_len);
  		const assembly_b64 = MONO._base64Converter.toBase64StringImpl(assembly_data);
  
  		let pdb_b64;
  		if (pdb_ptr) {
  			const pdb_data = new Uint8Array(Module.HEAPU8.buffer, pdb_ptr, pdb_len);
  			pdb_b64 = MONO._base64Converter.toBase64StringImpl(pdb_data);
  		}
  
  		MONO.mono_wasm_raise_debug_event({
  			eventName: 'AssemblyLoaded',
  			assembly_name: assembly_name_str,
  			assembly_b64,
  			pdb_b64
  		});
  	}

  function _mono_wasm_create_cs_owned_object(core_name, args, is_exception) {
  		var argsRoot = MONO.mono_wasm_new_root (args), nameRoot = MONO.mono_wasm_new_root (core_name);
  		try {
  			BINDING.bindings_lazy_init ();
  
  			var js_name = BINDING.conv_string (nameRoot.value);
  
  			if (!js_name) {
  				setValue (is_exception, 1, "i32");
  				return BINDING.js_string_to_mono_string ("Invalid name @" + nameRoot.value);
  			}
  
  			var coreObj = globalThis[js_name];
  
  			if (coreObj === null || typeof coreObj === "undefined") {
  				setValue (is_exception, 1, "i32");
  				return BINDING.js_string_to_mono_string ("JavaScript host object '" + js_name + "' not found.");
  			}
  
  			var js_args = BINDING._mono_array_root_to_js_array(argsRoot);
  
  			try {
  
  				// This is all experimental !!!!!!
  				var allocator = function(constructor, js_args) {
  					// Not sure if we should be checking for anything here
  					var argsList = new Array();
  					argsList[0] = constructor;
  					if (js_args)
  						argsList = argsList.concat (js_args);
  					var tempCtor = constructor.bind.apply (constructor, argsList);
  					var js_obj = new tempCtor ();
  					return js_obj;
  				};
  
  				var js_obj = allocator(coreObj, js_args);
  				var js_handle = BINDING.mono_wasm_get_js_handle(js_obj);
  				// returns boxed js_handle int, because on exception we need to return String on same method signature
  				// here we don't have anything to in-flight reference, as the JSObject doesn't exist yet
  				return BINDING._js_to_mono_obj(false, js_handle);
  			} catch (e) {
  				var res = e.toString ();
  				setValue (is_exception, 1, "i32");
  				if (res === null || res === undefined)
  					res = "Error allocating object.";
  				return BINDING.js_string_to_mono_string (res);
  			}
  		} finally {
  			argsRoot.release();
  			nameRoot.release();
  		}
  	}

  function _mono_wasm_fire_debugger_agent_message() {
  		// eslint-disable-next-line no-debugger
  		debugger;
  	}

  function _mono_wasm_get_by_index(js_handle, property_index, is_exception) {
  		BINDING.bindings_lazy_init ();
  
  		var obj = BINDING.mono_wasm_get_jsobj_from_js_handle (js_handle);
  		if (!obj) {
  			setValue (is_exception, 1, "i32");
  			return BINDING.js_string_to_mono_string ("ERR03: Invalid JS object handle '" + js_handle + "' while getting ["+property_index+"]");
  		}
  
  		try {
  			var m = obj [property_index];
  			return BINDING._js_to_mono_obj (true, m);
  		} catch (e) {
  			var res = e.toString ();
  			setValue (is_exception, 1, "i32");
  			if (res === null || typeof res === "undefined")
  				res = "unknown exception";
  			return BINDING.js_string_to_mono_string (res);
  		}
  	}

  function _mono_wasm_get_global_object(global_name, is_exception) {
  		var nameRoot = MONO.mono_wasm_new_root (global_name);
  		try {
  			BINDING.bindings_lazy_init ();
  
  			var js_name = BINDING.conv_string (nameRoot.value);
  
  			var globalObj;
  
  			if (!js_name) {
  				globalObj = globalThis;
  			}
  			else {
  				globalObj = globalThis[js_name];
  			}
  
  			// TODO returning null may be useful when probing for browser features
  			if (globalObj === null || typeof globalObj === undefined) {
  				setValue (is_exception, 1, "i32");
  				return BINDING.js_string_to_mono_string ("Global object '" + js_name + "' not found.");
  			}
  
  			return BINDING._js_to_mono_obj (true, globalObj);
  		} finally {
  			nameRoot.release();
  		}
  	}

  function _mono_wasm_get_object_property(js_handle, property_name, is_exception) {
  		BINDING.bindings_lazy_init ();
  
  		var nameRoot = MONO.mono_wasm_new_root (property_name);
  		try {
  			var js_name = BINDING.conv_string (nameRoot.value);
  			if (!js_name) {
  				setValue (is_exception, 1, "i32");
  				return BINDING.js_string_to_mono_string ("Invalid property name object '" + nameRoot.value + "'");
  			}
  
  			var obj = BINDING.mono_wasm_get_jsobj_from_js_handle (js_handle);
  			if (!obj) {
  				setValue (is_exception, 1, "i32");
  				return BINDING.js_string_to_mono_string ("ERR01: Invalid JS object handle '" + js_handle + "' while geting '"+js_name+"'");
  			}
  
  			var res;
  			try {
  				var m = obj [js_name];
  
  				return BINDING._js_to_mono_obj (true, m);
  			} catch (e) {
  				var res = e.toString ();
  				setValue (is_exception, 1, "i32");
  				if (res === null || typeof res === "undefined")
  					res = "unknown exception";
  				return BINDING.js_string_to_mono_string (res);
  			}
  		} finally {
  			nameRoot.release();
  		}
  	}

  var DOTNET={conv_string:function (mono_obj) {
  			return MONO.string_decoder.copy (mono_obj);
  		}};
  function _mono_wasm_invoke_js_blazor(exceptionMessage, callInfo, arg0, arg1, arg2)	{
  		var mono_string = globalThis._mono_string_cached
  			|| (globalThis._mono_string_cached = Module.cwrap('mono_wasm_string_from_js', 'number', ['string']));
  
  		try {
  			var blazorExports = globalThis.Blazor;
  			if (!blazorExports) {
  				throw new Error('The blazor.webassembly.js library is not loaded.');
  			}
  
  			return blazorExports._internal.invokeJSFromDotNet(callInfo, arg0, arg1, arg2);
  		} catch (ex) {
  			var exceptionJsString = ex.message + '\n' + ex.stack;
  			var exceptionSystemString = mono_string(exceptionJsString);
  			setValue (exceptionMessage, exceptionSystemString, 'i32'); // *exceptionMessage = exceptionSystemString;
  			return 0;
  		}
  	}

  function _mono_wasm_invoke_js_marshalled(exceptionMessage, asyncHandleLongPtr, functionName, argsJson, treatResultAsVoid) {
  
  		var mono_string = globalThis._mono_string_cached
  			|| (globalThis._mono_string_cached = Module.cwrap('mono_wasm_string_from_js', 'number', ['string']));
  
  		try {
  			// Passing a .NET long into JS via Emscripten is tricky. The method here is to pass
  			// as pointer to the long, then combine two reads from the HEAPU32 array.
  			// Even though JS numbers can't represent the full range of a .NET long, it's OK
  			// because we'll never exceed Number.MAX_SAFE_INTEGER (2^53 - 1) in this case.
  			//var u32Index = $1 >> 2;
  			var u32Index = asyncHandleLongPtr >> 2;
  			var asyncHandleJsNumber = Module.HEAPU32[u32Index + 1]*4294967296 + Module.HEAPU32[u32Index];
  
  			// var funcNameJsString = UTF8ToString (functionName);
  			// var argsJsonJsString = argsJson && UTF8ToString (argsJson);
  			var funcNameJsString = DOTNET.conv_string(functionName);
  			var argsJsonJsString = argsJson && DOTNET.conv_string (argsJson);
  
  			var dotNetExports = globaThis.DotNet;
  			if (!dotNetExports) {
  				throw new Error('The Microsoft.JSInterop.js library is not loaded.');
  			}
  
  			if (asyncHandleJsNumber) {
  				dotNetExports.jsCallDispatcher.beginInvokeJSFromDotNet(asyncHandleJsNumber, funcNameJsString, argsJsonJsString, treatResultAsVoid);
  				return 0;
  			} else {
  				var resultJson = dotNetExports.jsCallDispatcher.invokeJSFromDotNet(funcNameJsString, argsJsonJsString, treatResultAsVoid);
  				return resultJson === null ? 0 : mono_string(resultJson);
  			}
  		} catch (ex) {
  			var exceptionJsString = ex.message + '\n' + ex.stack;
  			var exceptionSystemString = mono_string(exceptionJsString);
  			setValue (exceptionMessage, exceptionSystemString, 'i32'); // *exceptionMessage = exceptionSystemString;
  			return 0;
  		}
  	}

  function _mono_wasm_invoke_js_unmarshalled(exceptionMessage, funcName, arg0, arg1, arg2)	{
  		try {
  			// Get the function you're trying to invoke
  			var funcNameJsString = DOTNET.conv_string(funcName);
  			var dotNetExports = globalThis.DotNet;
  			if (!dotNetExports) {
  				throw new Error('The Microsoft.JSInterop.js library is not loaded.');
  			}
  			var funcInstance = dotNetExports.jsCallDispatcher.findJSFunction(funcNameJsString);
  
  			return funcInstance.call(null, arg0, arg1, arg2);
  		} catch (ex) {
  			var exceptionJsString = ex.message + '\n' + ex.stack;
  			var mono_string = Module.cwrap('mono_wasm_string_from_js', 'number', ['string']); // TODO: Cache
  			var exceptionSystemString = mono_string(exceptionJsString);
  			setValue (exceptionMessage, exceptionSystemString, 'i32'); // *exceptionMessage = exceptionSystemString;
  			return 0;
  		}
  	}

  function _mono_wasm_invoke_js_with_args(js_handle, method_name, args, is_exception) {
  		let argsRoot = MONO.mono_wasm_new_root (args), nameRoot = MONO.mono_wasm_new_root (method_name);
  		try {
  			BINDING.bindings_lazy_init ();
  
  			var js_name = BINDING.conv_string (nameRoot.value);
  			if (!js_name || (typeof(js_name) !== "string")) {
  				setValue (is_exception, 1, "i32");
  				return BINDING.js_string_to_mono_string ("ERR12: Invalid method name object '" + nameRoot.value + "'");
  			}
  
  			var obj = BINDING.get_js_obj (js_handle);
  			if (!obj) {
  				setValue (is_exception, 1, "i32");
  				return BINDING.js_string_to_mono_string ("ERR13: Invalid JS object handle '" + js_handle + "' while invoking '"+js_name+"'");
  			}
  
  			var js_args = BINDING._mono_array_root_to_js_array(argsRoot);
  
  			var res;
  			try {
  				var m = obj [js_name];
  				if (typeof m === "undefined")
  					throw new Error("Method: '" + js_name + "' not found for: '" + Object.prototype.toString.call(obj) + "'");
  				var res = m.apply (obj, js_args);
  				return BINDING._js_to_mono_obj(true, res);
  			} catch (e) {
  				var res = e.toString ();
  				setValue (is_exception, 1, "i32");
  				if (res === null || res === undefined)
  					res = "unknown exception";
  				return BINDING.js_string_to_mono_string (res);
  			}
  		} finally {
  			argsRoot.release();
  			nameRoot.release();
  		}
  	}

  function _mono_wasm_release_cs_owned_object(js_handle) {
  		BINDING.bindings_lazy_init ();
  		BINDING._mono_wasm_release_js_handle(js_handle);
  	}

  function _mono_wasm_remove_event_listener(objHandle, name, listener_gc_handle, capture) {
  		var nameRoot = MONO.mono_wasm_new_root (name);
  		try {
  			BINDING.bindings_lazy_init ();
  			var obj = BINDING.mono_wasm_get_jsobj_from_js_handle(objHandle);
  			if (!obj)
  				throw new Error("ERR11: Invalid JS object handle");
  			var listener = BINDING._lookup_js_owned_object(listener_gc_handle);
  			// Removing a nonexistent listener should not be treated as an error
  			if (!listener)
  				return;
  			var sName = BINDING.conv_string(nameRoot.value);
  
  			obj.removeEventListener(sName, listener, !!capture);
  			// We do not manually remove the listener from the delegate registry here,
  			//  because that same delegate may have been used as an event listener for
  			//  other events or event targets. The GC will automatically clean it up
  			//  and trigger the FinalizationRegistry handler if it's unused
  
  			// When FinalizationRegistry is not supported by this browser, we cleanup manuall after unregistration
  			if (!BINDING._use_finalization_registry) {
  				listener[BINDING.listener_registration_count_symbol]--;
  				if (listener[BINDING.listener_registration_count_symbol] === 0) {
  					BINDING._js_owned_object_table.delete(listener_gc_handle);
  					BINDING._release_js_owned_object_by_gc_handle(listener_gc_handle);
  				}
  			}
  
  			return 0;
  		} catch (exc) {
  			return BINDING.js_string_to_mono_string(exc.message);
  		} finally {
  			nameRoot.release();
  		}
  	}

  function _mono_wasm_set_by_index(js_handle, property_index, value, is_exception) {
  		var valueRoot = MONO.mono_wasm_new_root (value);
  		try {
  			BINDING.bindings_lazy_init ();
  
  			var obj = BINDING.mono_wasm_get_jsobj_from_js_handle (js_handle);
  			if (!obj) {
  				setValue (is_exception, 1, "i32");
  				return BINDING.js_string_to_mono_string ("ERR04: Invalid JS object handle '" + js_handle + "' while setting ["+property_index+"]");
  			}
  
  			var js_value = BINDING._unbox_mono_obj_root(valueRoot);
  
  			try {
  				obj [property_index] = js_value;
  				return true;
  			} catch (e) {
  				var res = e.toString ();
  				setValue (is_exception, 1, "i32");
  				if (res === null || typeof res === "undefined")
  					res = "unknown exception";
  				return BINDING.js_string_to_mono_string (res);
  			}
  		} finally {
  			valueRoot.release();
  		}
  	}

  function _mono_wasm_set_object_property(js_handle, property_name, value, createIfNotExist, hasOwnProperty, is_exception) {
  		var valueRoot = MONO.mono_wasm_new_root (value), nameRoot = MONO.mono_wasm_new_root (property_name);
  		try {
  			BINDING.bindings_lazy_init ();
  			var property = BINDING.conv_string (nameRoot.value);
  			if (!property) {
  				setValue (is_exception, 1, "i32");
  				return BINDING.js_string_to_mono_string ("Invalid property name object '" + property_name + "'");
  			}
  
  			var js_obj = BINDING.mono_wasm_get_jsobj_from_js_handle (js_handle);
  			if (!js_obj) {
  				setValue (is_exception, 1, "i32");
  				return BINDING.js_string_to_mono_string ("ERR02: Invalid JS object handle '" + js_handle + "' while setting '"+property+"'");
  			}
  
  			var result = false;
  
  			var js_value = BINDING._unbox_mono_obj_root(valueRoot);
  
  			if (createIfNotExist) {
  				js_obj[property] = js_value;
  				result = true;
  			}
  			else {
  				result = false;
  				if (!createIfNotExist)
  				{
  					if (!js_obj.hasOwnProperty(property))
  						return false;
  				}
  				if (hasOwnProperty === true) {
  					if (js_obj.hasOwnProperty(property)) {
  						js_obj[property] = js_value;
  						result = true;
  					}
  				}
  				else {
  					js_obj[property] = js_value;
  					result = true;
  				}
  
  			}
  			return BINDING._box_js_bool (result);
  		} finally {
  			nameRoot.release();
  			valueRoot.release();
  		}
  	}

  function _mono_wasm_typed_array_copy_from(js_handle, pinned_array, begin, end, bytes_per_element, is_exception) {
  		BINDING.bindings_lazy_init ();
  
  		var js_obj = BINDING.mono_wasm_get_jsobj_from_js_handle (js_handle);
  		if (!js_obj) {
  			setValue (is_exception, 1, "i32");
  			return BINDING.js_string_to_mono_string ("ERR08: Invalid JS object handle '" + js_handle + "'");
  		}
  
  		var res = BINDING.typedarray_copy_from(js_obj, pinned_array, begin, end, bytes_per_element);
  		// returns num_of_bytes boxed
  		return BINDING._js_to_mono_obj (false, res)
  	}

  function _mono_wasm_typed_array_copy_to(js_handle, pinned_array, begin, end, bytes_per_element, is_exception) {
  		BINDING.bindings_lazy_init ();
  
  		var js_obj = BINDING.mono_wasm_get_jsobj_from_js_handle (js_handle);
  		if (!js_obj) {
  			setValue (is_exception, 1, "i32");
  			return BINDING.js_string_to_mono_string ("ERR07: Invalid JS object handle '" + js_handle + "'");
  		}
  
  		var res = BINDING.typedarray_copy_to(js_obj, pinned_array, begin, end, bytes_per_element);
  		// returns num_of_bytes boxed
  		return BINDING._js_to_mono_obj (false, res)
  	}

  function _mono_wasm_typed_array_from(pinned_array, begin, end, bytes_per_element, type, is_exception) {
  		BINDING.bindings_lazy_init ();
  		var res = BINDING.typed_array_from(pinned_array, begin, end, bytes_per_element, type);
  		// returns JS typed array like Int8Array, to be wraped with JSObject proxy
  		return BINDING._js_to_mono_obj (true, res)
  	}

  function _mono_wasm_typed_array_to_array(js_handle, is_exception) {
  		BINDING.bindings_lazy_init ();
  
  		var js_obj = BINDING.mono_wasm_get_jsobj_from_js_handle (js_handle);
  		if (!js_obj) {
  			setValue (is_exception, 1, "i32");
  			return BINDING.js_string_to_mono_string ("ERR06: Invalid JS object handle '" + js_handle + "'");
  		}
  
  		// returns pointer to C# array
  		return BINDING.js_typed_array_to_array(js_obj, false);
  	}

  function _schedule_background_exec() {
  		++MONO.pump_count;
  		if (typeof globalThis.setTimeout === 'function') {
  			globalThis.setTimeout (MONO.pump_message, 0);
  		}
  	}

  function _setTempRet0(val) {
      setTempRet0(val);
    }

  function _sigaction(signum, act, oldact) {
      //int sigaction(int signum, const struct sigaction *act, struct sigaction *oldact);
      err('Calling stub instead of sigaction()');
      return 0;
    }

  var __sigalrm_handler=0;
  function _signal(sig, func) {
      if (sig == 14) {
        __sigalrm_handler = func;
      } else {
        err('Calling stub instead of signal()');
      }
      return 0;
    }

  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];
  function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }
  function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else {
            return thisDate.getFullYear()-1;
          }
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Sunday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
  
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          }
  
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
  
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Monday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }

  function _time(ptr) {
      var ret = (Date.now()/1000)|0;
      if (ptr) {
        HEAP32[((ptr)>>2)] = ret;
      }
      return ret;
    }


var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createDevice"] = FS.createDevice;Module["FS_unlink"] = FS.unlink;;
Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas) { Browser.requestFullscreen(lockPointer, resizeCanvas) };
  Module["requestFullScreen"] = function Module_requestFullScreen() { Browser.requestFullScreen() };
  Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
  Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
  Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
  Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
  Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() }
  Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) { return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes) };
var GLctx;;
for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));;
MONO.export_functions (Module);;
BINDING.export_functions (Module);;
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


var asmLibraryArg = {
  "__assert_fail": ___assert_fail,
  "__cxa_allocate_exception": ___cxa_allocate_exception,
  "__cxa_begin_catch": ___cxa_begin_catch,
  "__cxa_end_catch": ___cxa_end_catch,
  "__cxa_find_matching_catch_2": ___cxa_find_matching_catch_2,
  "__cxa_find_matching_catch_3": ___cxa_find_matching_catch_3,
  "__cxa_free_exception": ___cxa_free_exception,
  "__cxa_rethrow": ___cxa_rethrow,
  "__cxa_throw": ___cxa_throw,
  "__resumeException": ___resumeException,
  "__sys_accept4": ___sys_accept4,
  "__sys_access": ___sys_access,
  "__sys_bind": ___sys_bind,
  "__sys_chmod": ___sys_chmod,
  "__sys_connect": ___sys_connect,
  "__sys_fadvise64_64": ___sys_fadvise64_64,
  "__sys_fchmod": ___sys_fchmod,
  "__sys_fcntl64": ___sys_fcntl64,
  "__sys_fstat64": ___sys_fstat64,
  "__sys_fstatfs64": ___sys_fstatfs64,
  "__sys_ftruncate64": ___sys_ftruncate64,
  "__sys_getcwd": ___sys_getcwd,
  "__sys_getdents64": ___sys_getdents64,
  "__sys_getpid": ___sys_getpid,
  "__sys_ioctl": ___sys_ioctl,
  "__sys_listen": ___sys_listen,
  "__sys_lstat64": ___sys_lstat64,
  "__sys_mkdir": ___sys_mkdir,
  "__sys_mmap2": ___sys_mmap2,
  "__sys_munmap": ___sys_munmap,
  "__sys_open": ___sys_open,
  "__sys_poll": ___sys_poll,
  "__sys_readlink": ___sys_readlink,
  "__sys_recvfrom": ___sys_recvfrom,
  "__sys_sendto": ___sys_sendto,
  "__sys_setsockopt": ___sys_setsockopt,
  "__sys_shutdown": ___sys_shutdown,
  "__sys_socket": ___sys_socket,
  "__sys_stat64": ___sys_stat64,
  "__sys_unlink": ___sys_unlink,
  "abort": _abort,
  "clock_getres": _clock_getres,
  "clock_gettime": _clock_gettime,
  "compile_function": compile_function,
  "difftime": _difftime,
  "dladdr": _dladdr,
  "dlclose": _dlclose,
  "dotnet_browser_entropy": _dotnet_browser_entropy,
  "eglBindAPI": _eglBindAPI,
  "eglChooseConfig": _eglChooseConfig,
  "eglCreateContext": _eglCreateContext,
  "eglCreateWindowSurface": _eglCreateWindowSurface,
  "eglDestroyContext": _eglDestroyContext,
  "eglDestroySurface": _eglDestroySurface,
  "eglGetConfigAttrib": _eglGetConfigAttrib,
  "eglGetDisplay": _eglGetDisplay,
  "eglGetError": _eglGetError,
  "eglInitialize": _eglInitialize,
  "eglMakeCurrent": _eglMakeCurrent,
  "eglQueryString": _eglQueryString,
  "eglSwapBuffers": _eglSwapBuffers,
  "eglSwapInterval": _eglSwapInterval,
  "eglTerminate": _eglTerminate,
  "eglWaitGL": _eglWaitGL,
  "eglWaitNative": _eglWaitNative,
  "emscripten_asm_const_int": _emscripten_asm_const_int,
  "emscripten_cancel_main_loop": _emscripten_cancel_main_loop,
  "emscripten_exit_fullscreen": _emscripten_exit_fullscreen,
  "emscripten_exit_pointerlock": _emscripten_exit_pointerlock,
  "emscripten_get_device_pixel_ratio": _emscripten_get_device_pixel_ratio,
  "emscripten_get_element_css_size": _emscripten_get_element_css_size,
  "emscripten_get_gamepad_status": _emscripten_get_gamepad_status,
  "emscripten_get_heap_max": _emscripten_get_heap_max,
  "emscripten_get_num_gamepads": _emscripten_get_num_gamepads,
  "emscripten_get_screen_size": _emscripten_get_screen_size,
  "emscripten_glActiveTexture": _emscripten_glActiveTexture,
  "emscripten_glAttachShader": _emscripten_glAttachShader,
  "emscripten_glBeginQuery": _emscripten_glBeginQuery,
  "emscripten_glBeginQueryEXT": _emscripten_glBeginQueryEXT,
  "emscripten_glBeginTransformFeedback": _emscripten_glBeginTransformFeedback,
  "emscripten_glBindAttribLocation": _emscripten_glBindAttribLocation,
  "emscripten_glBindBuffer": _emscripten_glBindBuffer,
  "emscripten_glBindBufferBase": _emscripten_glBindBufferBase,
  "emscripten_glBindBufferRange": _emscripten_glBindBufferRange,
  "emscripten_glBindFramebuffer": _emscripten_glBindFramebuffer,
  "emscripten_glBindRenderbuffer": _emscripten_glBindRenderbuffer,
  "emscripten_glBindSampler": _emscripten_glBindSampler,
  "emscripten_glBindTexture": _emscripten_glBindTexture,
  "emscripten_glBindTransformFeedback": _emscripten_glBindTransformFeedback,
  "emscripten_glBindVertexArray": _emscripten_glBindVertexArray,
  "emscripten_glBindVertexArrayOES": _emscripten_glBindVertexArrayOES,
  "emscripten_glBlendColor": _emscripten_glBlendColor,
  "emscripten_glBlendEquation": _emscripten_glBlendEquation,
  "emscripten_glBlendEquationSeparate": _emscripten_glBlendEquationSeparate,
  "emscripten_glBlendFunc": _emscripten_glBlendFunc,
  "emscripten_glBlendFuncSeparate": _emscripten_glBlendFuncSeparate,
  "emscripten_glBlitFramebuffer": _emscripten_glBlitFramebuffer,
  "emscripten_glBufferData": _emscripten_glBufferData,
  "emscripten_glBufferSubData": _emscripten_glBufferSubData,
  "emscripten_glCheckFramebufferStatus": _emscripten_glCheckFramebufferStatus,
  "emscripten_glClear": _emscripten_glClear,
  "emscripten_glClearBufferfi": _emscripten_glClearBufferfi,
  "emscripten_glClearBufferfv": _emscripten_glClearBufferfv,
  "emscripten_glClearBufferiv": _emscripten_glClearBufferiv,
  "emscripten_glClearBufferuiv": _emscripten_glClearBufferuiv,
  "emscripten_glClearColor": _emscripten_glClearColor,
  "emscripten_glClearDepthf": _emscripten_glClearDepthf,
  "emscripten_glClearStencil": _emscripten_glClearStencil,
  "emscripten_glClientWaitSync": _emscripten_glClientWaitSync,
  "emscripten_glColorMask": _emscripten_glColorMask,
  "emscripten_glCompileShader": _emscripten_glCompileShader,
  "emscripten_glCompressedTexImage2D": _emscripten_glCompressedTexImage2D,
  "emscripten_glCompressedTexImage3D": _emscripten_glCompressedTexImage3D,
  "emscripten_glCompressedTexSubImage2D": _emscripten_glCompressedTexSubImage2D,
  "emscripten_glCompressedTexSubImage3D": _emscripten_glCompressedTexSubImage3D,
  "emscripten_glCopyBufferSubData": _emscripten_glCopyBufferSubData,
  "emscripten_glCopyTexImage2D": _emscripten_glCopyTexImage2D,
  "emscripten_glCopyTexSubImage2D": _emscripten_glCopyTexSubImage2D,
  "emscripten_glCopyTexSubImage3D": _emscripten_glCopyTexSubImage3D,
  "emscripten_glCreateProgram": _emscripten_glCreateProgram,
  "emscripten_glCreateShader": _emscripten_glCreateShader,
  "emscripten_glCullFace": _emscripten_glCullFace,
  "emscripten_glDeleteBuffers": _emscripten_glDeleteBuffers,
  "emscripten_glDeleteFramebuffers": _emscripten_glDeleteFramebuffers,
  "emscripten_glDeleteProgram": _emscripten_glDeleteProgram,
  "emscripten_glDeleteQueries": _emscripten_glDeleteQueries,
  "emscripten_glDeleteQueriesEXT": _emscripten_glDeleteQueriesEXT,
  "emscripten_glDeleteRenderbuffers": _emscripten_glDeleteRenderbuffers,
  "emscripten_glDeleteSamplers": _emscripten_glDeleteSamplers,
  "emscripten_glDeleteShader": _emscripten_glDeleteShader,
  "emscripten_glDeleteSync": _emscripten_glDeleteSync,
  "emscripten_glDeleteTextures": _emscripten_glDeleteTextures,
  "emscripten_glDeleteTransformFeedbacks": _emscripten_glDeleteTransformFeedbacks,
  "emscripten_glDeleteVertexArrays": _emscripten_glDeleteVertexArrays,
  "emscripten_glDeleteVertexArraysOES": _emscripten_glDeleteVertexArraysOES,
  "emscripten_glDepthFunc": _emscripten_glDepthFunc,
  "emscripten_glDepthMask": _emscripten_glDepthMask,
  "emscripten_glDepthRangef": _emscripten_glDepthRangef,
  "emscripten_glDetachShader": _emscripten_glDetachShader,
  "emscripten_glDisable": _emscripten_glDisable,
  "emscripten_glDisableVertexAttribArray": _emscripten_glDisableVertexAttribArray,
  "emscripten_glDrawArrays": _emscripten_glDrawArrays,
  "emscripten_glDrawArraysInstanced": _emscripten_glDrawArraysInstanced,
  "emscripten_glDrawArraysInstancedANGLE": _emscripten_glDrawArraysInstancedANGLE,
  "emscripten_glDrawArraysInstancedARB": _emscripten_glDrawArraysInstancedARB,
  "emscripten_glDrawArraysInstancedEXT": _emscripten_glDrawArraysInstancedEXT,
  "emscripten_glDrawArraysInstancedNV": _emscripten_glDrawArraysInstancedNV,
  "emscripten_glDrawBuffers": _emscripten_glDrawBuffers,
  "emscripten_glDrawBuffersEXT": _emscripten_glDrawBuffersEXT,
  "emscripten_glDrawBuffersWEBGL": _emscripten_glDrawBuffersWEBGL,
  "emscripten_glDrawElements": _emscripten_glDrawElements,
  "emscripten_glDrawElementsInstanced": _emscripten_glDrawElementsInstanced,
  "emscripten_glDrawElementsInstancedANGLE": _emscripten_glDrawElementsInstancedANGLE,
  "emscripten_glDrawElementsInstancedARB": _emscripten_glDrawElementsInstancedARB,
  "emscripten_glDrawElementsInstancedEXT": _emscripten_glDrawElementsInstancedEXT,
  "emscripten_glDrawElementsInstancedNV": _emscripten_glDrawElementsInstancedNV,
  "emscripten_glDrawRangeElements": _emscripten_glDrawRangeElements,
  "emscripten_glEnable": _emscripten_glEnable,
  "emscripten_glEnableVertexAttribArray": _emscripten_glEnableVertexAttribArray,
  "emscripten_glEndQuery": _emscripten_glEndQuery,
  "emscripten_glEndQueryEXT": _emscripten_glEndQueryEXT,
  "emscripten_glEndTransformFeedback": _emscripten_glEndTransformFeedback,
  "emscripten_glFenceSync": _emscripten_glFenceSync,
  "emscripten_glFinish": _emscripten_glFinish,
  "emscripten_glFlush": _emscripten_glFlush,
  "emscripten_glFramebufferRenderbuffer": _emscripten_glFramebufferRenderbuffer,
  "emscripten_glFramebufferTexture2D": _emscripten_glFramebufferTexture2D,
  "emscripten_glFramebufferTextureLayer": _emscripten_glFramebufferTextureLayer,
  "emscripten_glFrontFace": _emscripten_glFrontFace,
  "emscripten_glGenBuffers": _emscripten_glGenBuffers,
  "emscripten_glGenFramebuffers": _emscripten_glGenFramebuffers,
  "emscripten_glGenQueries": _emscripten_glGenQueries,
  "emscripten_glGenQueriesEXT": _emscripten_glGenQueriesEXT,
  "emscripten_glGenRenderbuffers": _emscripten_glGenRenderbuffers,
  "emscripten_glGenSamplers": _emscripten_glGenSamplers,
  "emscripten_glGenTextures": _emscripten_glGenTextures,
  "emscripten_glGenTransformFeedbacks": _emscripten_glGenTransformFeedbacks,
  "emscripten_glGenVertexArrays": _emscripten_glGenVertexArrays,
  "emscripten_glGenVertexArraysOES": _emscripten_glGenVertexArraysOES,
  "emscripten_glGenerateMipmap": _emscripten_glGenerateMipmap,
  "emscripten_glGetActiveAttrib": _emscripten_glGetActiveAttrib,
  "emscripten_glGetActiveUniform": _emscripten_glGetActiveUniform,
  "emscripten_glGetActiveUniformBlockName": _emscripten_glGetActiveUniformBlockName,
  "emscripten_glGetActiveUniformBlockiv": _emscripten_glGetActiveUniformBlockiv,
  "emscripten_glGetActiveUniformsiv": _emscripten_glGetActiveUniformsiv,
  "emscripten_glGetAttachedShaders": _emscripten_glGetAttachedShaders,
  "emscripten_glGetAttribLocation": _emscripten_glGetAttribLocation,
  "emscripten_glGetBooleanv": _emscripten_glGetBooleanv,
  "emscripten_glGetBufferParameteri64v": _emscripten_glGetBufferParameteri64v,
  "emscripten_glGetBufferParameteriv": _emscripten_glGetBufferParameteriv,
  "emscripten_glGetError": _emscripten_glGetError,
  "emscripten_glGetFloatv": _emscripten_glGetFloatv,
  "emscripten_glGetFragDataLocation": _emscripten_glGetFragDataLocation,
  "emscripten_glGetFramebufferAttachmentParameteriv": _emscripten_glGetFramebufferAttachmentParameteriv,
  "emscripten_glGetInteger64i_v": _emscripten_glGetInteger64i_v,
  "emscripten_glGetInteger64v": _emscripten_glGetInteger64v,
  "emscripten_glGetIntegeri_v": _emscripten_glGetIntegeri_v,
  "emscripten_glGetIntegerv": _emscripten_glGetIntegerv,
  "emscripten_glGetInternalformativ": _emscripten_glGetInternalformativ,
  "emscripten_glGetProgramBinary": _emscripten_glGetProgramBinary,
  "emscripten_glGetProgramInfoLog": _emscripten_glGetProgramInfoLog,
  "emscripten_glGetProgramiv": _emscripten_glGetProgramiv,
  "emscripten_glGetQueryObjecti64vEXT": _emscripten_glGetQueryObjecti64vEXT,
  "emscripten_glGetQueryObjectivEXT": _emscripten_glGetQueryObjectivEXT,
  "emscripten_glGetQueryObjectui64vEXT": _emscripten_glGetQueryObjectui64vEXT,
  "emscripten_glGetQueryObjectuiv": _emscripten_glGetQueryObjectuiv,
  "emscripten_glGetQueryObjectuivEXT": _emscripten_glGetQueryObjectuivEXT,
  "emscripten_glGetQueryiv": _emscripten_glGetQueryiv,
  "emscripten_glGetQueryivEXT": _emscripten_glGetQueryivEXT,
  "emscripten_glGetRenderbufferParameteriv": _emscripten_glGetRenderbufferParameteriv,
  "emscripten_glGetSamplerParameterfv": _emscripten_glGetSamplerParameterfv,
  "emscripten_glGetSamplerParameteriv": _emscripten_glGetSamplerParameteriv,
  "emscripten_glGetShaderInfoLog": _emscripten_glGetShaderInfoLog,
  "emscripten_glGetShaderPrecisionFormat": _emscripten_glGetShaderPrecisionFormat,
  "emscripten_glGetShaderSource": _emscripten_glGetShaderSource,
  "emscripten_glGetShaderiv": _emscripten_glGetShaderiv,
  "emscripten_glGetString": _emscripten_glGetString,
  "emscripten_glGetStringi": _emscripten_glGetStringi,
  "emscripten_glGetSynciv": _emscripten_glGetSynciv,
  "emscripten_glGetTexParameterfv": _emscripten_glGetTexParameterfv,
  "emscripten_glGetTexParameteriv": _emscripten_glGetTexParameteriv,
  "emscripten_glGetTransformFeedbackVarying": _emscripten_glGetTransformFeedbackVarying,
  "emscripten_glGetUniformBlockIndex": _emscripten_glGetUniformBlockIndex,
  "emscripten_glGetUniformIndices": _emscripten_glGetUniformIndices,
  "emscripten_glGetUniformLocation": _emscripten_glGetUniformLocation,
  "emscripten_glGetUniformfv": _emscripten_glGetUniformfv,
  "emscripten_glGetUniformiv": _emscripten_glGetUniformiv,
  "emscripten_glGetUniformuiv": _emscripten_glGetUniformuiv,
  "emscripten_glGetVertexAttribIiv": _emscripten_glGetVertexAttribIiv,
  "emscripten_glGetVertexAttribIuiv": _emscripten_glGetVertexAttribIuiv,
  "emscripten_glGetVertexAttribPointerv": _emscripten_glGetVertexAttribPointerv,
  "emscripten_glGetVertexAttribfv": _emscripten_glGetVertexAttribfv,
  "emscripten_glGetVertexAttribiv": _emscripten_glGetVertexAttribiv,
  "emscripten_glHint": _emscripten_glHint,
  "emscripten_glInvalidateFramebuffer": _emscripten_glInvalidateFramebuffer,
  "emscripten_glInvalidateSubFramebuffer": _emscripten_glInvalidateSubFramebuffer,
  "emscripten_glIsBuffer": _emscripten_glIsBuffer,
  "emscripten_glIsEnabled": _emscripten_glIsEnabled,
  "emscripten_glIsFramebuffer": _emscripten_glIsFramebuffer,
  "emscripten_glIsProgram": _emscripten_glIsProgram,
  "emscripten_glIsQuery": _emscripten_glIsQuery,
  "emscripten_glIsQueryEXT": _emscripten_glIsQueryEXT,
  "emscripten_glIsRenderbuffer": _emscripten_glIsRenderbuffer,
  "emscripten_glIsSampler": _emscripten_glIsSampler,
  "emscripten_glIsShader": _emscripten_glIsShader,
  "emscripten_glIsSync": _emscripten_glIsSync,
  "emscripten_glIsTexture": _emscripten_glIsTexture,
  "emscripten_glIsTransformFeedback": _emscripten_glIsTransformFeedback,
  "emscripten_glIsVertexArray": _emscripten_glIsVertexArray,
  "emscripten_glIsVertexArrayOES": _emscripten_glIsVertexArrayOES,
  "emscripten_glLineWidth": _emscripten_glLineWidth,
  "emscripten_glLinkProgram": _emscripten_glLinkProgram,
  "emscripten_glPauseTransformFeedback": _emscripten_glPauseTransformFeedback,
  "emscripten_glPixelStorei": _emscripten_glPixelStorei,
  "emscripten_glPolygonOffset": _emscripten_glPolygonOffset,
  "emscripten_glProgramBinary": _emscripten_glProgramBinary,
  "emscripten_glProgramParameteri": _emscripten_glProgramParameteri,
  "emscripten_glQueryCounterEXT": _emscripten_glQueryCounterEXT,
  "emscripten_glReadBuffer": _emscripten_glReadBuffer,
  "emscripten_glReadPixels": _emscripten_glReadPixels,
  "emscripten_glReleaseShaderCompiler": _emscripten_glReleaseShaderCompiler,
  "emscripten_glRenderbufferStorage": _emscripten_glRenderbufferStorage,
  "emscripten_glRenderbufferStorageMultisample": _emscripten_glRenderbufferStorageMultisample,
  "emscripten_glResumeTransformFeedback": _emscripten_glResumeTransformFeedback,
  "emscripten_glSampleCoverage": _emscripten_glSampleCoverage,
  "emscripten_glSamplerParameterf": _emscripten_glSamplerParameterf,
  "emscripten_glSamplerParameterfv": _emscripten_glSamplerParameterfv,
  "emscripten_glSamplerParameteri": _emscripten_glSamplerParameteri,
  "emscripten_glSamplerParameteriv": _emscripten_glSamplerParameteriv,
  "emscripten_glScissor": _emscripten_glScissor,
  "emscripten_glShaderBinary": _emscripten_glShaderBinary,
  "emscripten_glShaderSource": _emscripten_glShaderSource,
  "emscripten_glStencilFunc": _emscripten_glStencilFunc,
  "emscripten_glStencilFuncSeparate": _emscripten_glStencilFuncSeparate,
  "emscripten_glStencilMask": _emscripten_glStencilMask,
  "emscripten_glStencilMaskSeparate": _emscripten_glStencilMaskSeparate,
  "emscripten_glStencilOp": _emscripten_glStencilOp,
  "emscripten_glStencilOpSeparate": _emscripten_glStencilOpSeparate,
  "emscripten_glTexImage2D": _emscripten_glTexImage2D,
  "emscripten_glTexImage3D": _emscripten_glTexImage3D,
  "emscripten_glTexParameterf": _emscripten_glTexParameterf,
  "emscripten_glTexParameterfv": _emscripten_glTexParameterfv,
  "emscripten_glTexParameteri": _emscripten_glTexParameteri,
  "emscripten_glTexParameteriv": _emscripten_glTexParameteriv,
  "emscripten_glTexStorage2D": _emscripten_glTexStorage2D,
  "emscripten_glTexStorage3D": _emscripten_glTexStorage3D,
  "emscripten_glTexSubImage2D": _emscripten_glTexSubImage2D,
  "emscripten_glTexSubImage3D": _emscripten_glTexSubImage3D,
  "emscripten_glTransformFeedbackVaryings": _emscripten_glTransformFeedbackVaryings,
  "emscripten_glUniform1f": _emscripten_glUniform1f,
  "emscripten_glUniform1fv": _emscripten_glUniform1fv,
  "emscripten_glUniform1i": _emscripten_glUniform1i,
  "emscripten_glUniform1iv": _emscripten_glUniform1iv,
  "emscripten_glUniform1ui": _emscripten_glUniform1ui,
  "emscripten_glUniform1uiv": _emscripten_glUniform1uiv,
  "emscripten_glUniform2f": _emscripten_glUniform2f,
  "emscripten_glUniform2fv": _emscripten_glUniform2fv,
  "emscripten_glUniform2i": _emscripten_glUniform2i,
  "emscripten_glUniform2iv": _emscripten_glUniform2iv,
  "emscripten_glUniform2ui": _emscripten_glUniform2ui,
  "emscripten_glUniform2uiv": _emscripten_glUniform2uiv,
  "emscripten_glUniform3f": _emscripten_glUniform3f,
  "emscripten_glUniform3fv": _emscripten_glUniform3fv,
  "emscripten_glUniform3i": _emscripten_glUniform3i,
  "emscripten_glUniform3iv": _emscripten_glUniform3iv,
  "emscripten_glUniform3ui": _emscripten_glUniform3ui,
  "emscripten_glUniform3uiv": _emscripten_glUniform3uiv,
  "emscripten_glUniform4f": _emscripten_glUniform4f,
  "emscripten_glUniform4fv": _emscripten_glUniform4fv,
  "emscripten_glUniform4i": _emscripten_glUniform4i,
  "emscripten_glUniform4iv": _emscripten_glUniform4iv,
  "emscripten_glUniform4ui": _emscripten_glUniform4ui,
  "emscripten_glUniform4uiv": _emscripten_glUniform4uiv,
  "emscripten_glUniformBlockBinding": _emscripten_glUniformBlockBinding,
  "emscripten_glUniformMatrix2fv": _emscripten_glUniformMatrix2fv,
  "emscripten_glUniformMatrix2x3fv": _emscripten_glUniformMatrix2x3fv,
  "emscripten_glUniformMatrix2x4fv": _emscripten_glUniformMatrix2x4fv,
  "emscripten_glUniformMatrix3fv": _emscripten_glUniformMatrix3fv,
  "emscripten_glUniformMatrix3x2fv": _emscripten_glUniformMatrix3x2fv,
  "emscripten_glUniformMatrix3x4fv": _emscripten_glUniformMatrix3x4fv,
  "emscripten_glUniformMatrix4fv": _emscripten_glUniformMatrix4fv,
  "emscripten_glUniformMatrix4x2fv": _emscripten_glUniformMatrix4x2fv,
  "emscripten_glUniformMatrix4x3fv": _emscripten_glUniformMatrix4x3fv,
  "emscripten_glUseProgram": _emscripten_glUseProgram,
  "emscripten_glValidateProgram": _emscripten_glValidateProgram,
  "emscripten_glVertexAttrib1f": _emscripten_glVertexAttrib1f,
  "emscripten_glVertexAttrib1fv": _emscripten_glVertexAttrib1fv,
  "emscripten_glVertexAttrib2f": _emscripten_glVertexAttrib2f,
  "emscripten_glVertexAttrib2fv": _emscripten_glVertexAttrib2fv,
  "emscripten_glVertexAttrib3f": _emscripten_glVertexAttrib3f,
  "emscripten_glVertexAttrib3fv": _emscripten_glVertexAttrib3fv,
  "emscripten_glVertexAttrib4f": _emscripten_glVertexAttrib4f,
  "emscripten_glVertexAttrib4fv": _emscripten_glVertexAttrib4fv,
  "emscripten_glVertexAttribDivisor": _emscripten_glVertexAttribDivisor,
  "emscripten_glVertexAttribDivisorANGLE": _emscripten_glVertexAttribDivisorANGLE,
  "emscripten_glVertexAttribDivisorARB": _emscripten_glVertexAttribDivisorARB,
  "emscripten_glVertexAttribDivisorEXT": _emscripten_glVertexAttribDivisorEXT,
  "emscripten_glVertexAttribDivisorNV": _emscripten_glVertexAttribDivisorNV,
  "emscripten_glVertexAttribI4i": _emscripten_glVertexAttribI4i,
  "emscripten_glVertexAttribI4iv": _emscripten_glVertexAttribI4iv,
  "emscripten_glVertexAttribI4ui": _emscripten_glVertexAttribI4ui,
  "emscripten_glVertexAttribI4uiv": _emscripten_glVertexAttribI4uiv,
  "emscripten_glVertexAttribIPointer": _emscripten_glVertexAttribIPointer,
  "emscripten_glVertexAttribPointer": _emscripten_glVertexAttribPointer,
  "emscripten_glViewport": _emscripten_glViewport,
  "emscripten_glWaitSync": _emscripten_glWaitSync,
  "emscripten_has_asyncify": _emscripten_has_asyncify,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_request_fullscreen_strategy": _emscripten_request_fullscreen_strategy,
  "emscripten_request_pointerlock": _emscripten_request_pointerlock,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "emscripten_sample_gamepad_data": _emscripten_sample_gamepad_data,
  "emscripten_set_beforeunload_callback_on_thread": _emscripten_set_beforeunload_callback_on_thread,
  "emscripten_set_blur_callback_on_thread": _emscripten_set_blur_callback_on_thread,
  "emscripten_set_canvas_element_size": _emscripten_set_canvas_element_size,
  "emscripten_set_element_css_size": _emscripten_set_element_css_size,
  "emscripten_set_focus_callback_on_thread": _emscripten_set_focus_callback_on_thread,
  "emscripten_set_fullscreenchange_callback_on_thread": _emscripten_set_fullscreenchange_callback_on_thread,
  "emscripten_set_gamepadconnected_callback_on_thread": _emscripten_set_gamepadconnected_callback_on_thread,
  "emscripten_set_gamepaddisconnected_callback_on_thread": _emscripten_set_gamepaddisconnected_callback_on_thread,
  "emscripten_set_keydown_callback_on_thread": _emscripten_set_keydown_callback_on_thread,
  "emscripten_set_keypress_callback_on_thread": _emscripten_set_keypress_callback_on_thread,
  "emscripten_set_keyup_callback_on_thread": _emscripten_set_keyup_callback_on_thread,
  "emscripten_set_main_loop": _emscripten_set_main_loop,
  "emscripten_set_mousedown_callback_on_thread": _emscripten_set_mousedown_callback_on_thread,
  "emscripten_set_mouseenter_callback_on_thread": _emscripten_set_mouseenter_callback_on_thread,
  "emscripten_set_mouseleave_callback_on_thread": _emscripten_set_mouseleave_callback_on_thread,
  "emscripten_set_mousemove_callback_on_thread": _emscripten_set_mousemove_callback_on_thread,
  "emscripten_set_mouseup_callback_on_thread": _emscripten_set_mouseup_callback_on_thread,
  "emscripten_set_pointerlockchange_callback_on_thread": _emscripten_set_pointerlockchange_callback_on_thread,
  "emscripten_set_resize_callback_on_thread": _emscripten_set_resize_callback_on_thread,
  "emscripten_set_touchcancel_callback_on_thread": _emscripten_set_touchcancel_callback_on_thread,
  "emscripten_set_touchend_callback_on_thread": _emscripten_set_touchend_callback_on_thread,
  "emscripten_set_touchmove_callback_on_thread": _emscripten_set_touchmove_callback_on_thread,
  "emscripten_set_touchstart_callback_on_thread": _emscripten_set_touchstart_callback_on_thread,
  "emscripten_set_visibilitychange_callback_on_thread": _emscripten_set_visibilitychange_callback_on_thread,
  "emscripten_set_wheel_callback_on_thread": _emscripten_set_wheel_callback_on_thread,
  "emscripten_set_window_title": _emscripten_set_window_title,
  "emscripten_sleep": _emscripten_sleep,
  "emscripten_thread_sleep": _emscripten_thread_sleep,
  "environ_get": _environ_get,
  "environ_sizes_get": _environ_sizes_get,
  "exit": _exit,
  "fd_close": _fd_close,
  "fd_fdstat_get": _fd_fdstat_get,
  "fd_pread": _fd_pread,
  "fd_pwrite": _fd_pwrite,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_sync": _fd_sync,
  "fd_write": _fd_write,
  "flock": _flock,
  "gai_strerror": _gai_strerror,
  "getTempRet0": _getTempRet0,
  "getentropy": _getentropy,
  "gettimeofday": _gettimeofday,
  "gmtime_r": _gmtime_r,
  "invoke_i": invoke_i,
  "invoke_ii": invoke_ii,
  "invoke_iii": invoke_iii,
  "invoke_iiii": invoke_iiii,
  "invoke_iiiii": invoke_iiiii,
  "invoke_iiiiii": invoke_iiiiii,
  "invoke_v": invoke_v,
  "invoke_vi": invoke_vi,
  "invoke_vii": invoke_vii,
  "invoke_viii": invoke_viii,
  "invoke_viiii": invoke_viiii,
  "invoke_viiiii": invoke_viiiii,
  "invoke_viiiiii": invoke_viiiiii,
  "invoke_viiiiiii": invoke_viiiiiii,
  "invoke_viiiiiiii": invoke_viiiiiiii,
  "invoke_viiiiiiiii": invoke_viiiiiiiii,
  "invoke_viiiiiiiiii": invoke_viiiiiiiiii,
  "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii,
  "invoke_viiiiiiiiiiii": invoke_viiiiiiiiiiii,
  "invoke_viiiiiiiiiiiii": invoke_viiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiii": invoke_viiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii,
  "llvm_eh_typeid_for": _llvm_eh_typeid_for,
  "localtime_r": _localtime_r,
  "mono_set_timeout": _mono_set_timeout,
  "mono_wasm_add_event_listener": _mono_wasm_add_event_listener,
  "mono_wasm_asm_loaded": _mono_wasm_asm_loaded,
  "mono_wasm_create_cs_owned_object": _mono_wasm_create_cs_owned_object,
  "mono_wasm_fire_debugger_agent_message": _mono_wasm_fire_debugger_agent_message,
  "mono_wasm_get_by_index": _mono_wasm_get_by_index,
  "mono_wasm_get_global_object": _mono_wasm_get_global_object,
  "mono_wasm_get_object_property": _mono_wasm_get_object_property,
  "mono_wasm_invoke_js_blazor": _mono_wasm_invoke_js_blazor,
  "mono_wasm_invoke_js_marshalled": _mono_wasm_invoke_js_marshalled,
  "mono_wasm_invoke_js_unmarshalled": _mono_wasm_invoke_js_unmarshalled,
  "mono_wasm_invoke_js_with_args": _mono_wasm_invoke_js_with_args,
  "mono_wasm_release_cs_owned_object": _mono_wasm_release_cs_owned_object,
  "mono_wasm_remove_event_listener": _mono_wasm_remove_event_listener,
  "mono_wasm_set_by_index": _mono_wasm_set_by_index,
  "mono_wasm_set_object_property": _mono_wasm_set_object_property,
  "mono_wasm_typed_array_copy_from": _mono_wasm_typed_array_copy_from,
  "mono_wasm_typed_array_copy_to": _mono_wasm_typed_array_copy_to,
  "mono_wasm_typed_array_from": _mono_wasm_typed_array_from,
  "mono_wasm_typed_array_to_array": _mono_wasm_typed_array_to_array,
  "schedule_background_exec": _schedule_background_exec,
  "setTempRet0": _setTempRet0,
  "sigaction": _sigaction,
  "signal": _signal,
  "strftime": _strftime,
  "time": _time,
  "tzset": _tzset
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

/** @type {function(...*):?} */
var _mono_wasm_register_root = Module["_mono_wasm_register_root"] = createExportWrapper("mono_wasm_register_root");

/** @type {function(...*):?} */
var _mono_wasm_deregister_root = Module["_mono_wasm_deregister_root"] = createExportWrapper("mono_wasm_deregister_root");

/** @type {function(...*):?} */
var _mono_wasm_add_assembly = Module["_mono_wasm_add_assembly"] = createExportWrapper("mono_wasm_add_assembly");

/** @type {function(...*):?} */
var _mono_wasm_add_satellite_assembly = Module["_mono_wasm_add_satellite_assembly"] = createExportWrapper("mono_wasm_add_satellite_assembly");

/** @type {function(...*):?} */
var _mono_wasm_setenv = Module["_mono_wasm_setenv"] = createExportWrapper("mono_wasm_setenv");

/** @type {function(...*):?} */
var _mono_wasm_register_bundled_satellite_assemblies = Module["_mono_wasm_register_bundled_satellite_assemblies"] = createExportWrapper("mono_wasm_register_bundled_satellite_assemblies");

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");

/** @type {function(...*):?} */
var _mono_wasm_load_runtime = Module["_mono_wasm_load_runtime"] = createExportWrapper("mono_wasm_load_runtime");

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");

/** @type {function(...*):?} */
var _mono_wasm_assembly_load = Module["_mono_wasm_assembly_load"] = createExportWrapper("mono_wasm_assembly_load");

/** @type {function(...*):?} */
var _mono_wasm_find_corlib_class = Module["_mono_wasm_find_corlib_class"] = createExportWrapper("mono_wasm_find_corlib_class");

/** @type {function(...*):?} */
var _mono_wasm_assembly_find_class = Module["_mono_wasm_assembly_find_class"] = createExportWrapper("mono_wasm_assembly_find_class");

/** @type {function(...*):?} */
var _mono_wasm_assembly_find_method = Module["_mono_wasm_assembly_find_method"] = createExportWrapper("mono_wasm_assembly_find_method");

/** @type {function(...*):?} */
var _mono_wasm_get_delegate_invoke = Module["_mono_wasm_get_delegate_invoke"] = createExportWrapper("mono_wasm_get_delegate_invoke");

/** @type {function(...*):?} */
var _mono_wasm_box_primitive = Module["_mono_wasm_box_primitive"] = createExportWrapper("mono_wasm_box_primitive");

/** @type {function(...*):?} */
var _mono_wasm_invoke_method = Module["_mono_wasm_invoke_method"] = createExportWrapper("mono_wasm_invoke_method");

/** @type {function(...*):?} */
var _mono_wasm_assembly_get_entry_point = Module["_mono_wasm_assembly_get_entry_point"] = createExportWrapper("mono_wasm_assembly_get_entry_point");

/** @type {function(...*):?} */
var _mono_wasm_string_get_utf8 = Module["_mono_wasm_string_get_utf8"] = createExportWrapper("mono_wasm_string_get_utf8");

/** @type {function(...*):?} */
var _mono_wasm_string_convert = Module["_mono_wasm_string_convert"] = createExportWrapper("mono_wasm_string_convert");

/** @type {function(...*):?} */
var _mono_wasm_string_from_js = Module["_mono_wasm_string_from_js"] = createExportWrapper("mono_wasm_string_from_js");

/** @type {function(...*):?} */
var _mono_wasm_string_from_utf16 = Module["_mono_wasm_string_from_utf16"] = createExportWrapper("mono_wasm_string_from_utf16");

/** @type {function(...*):?} */
var _mono_wasm_get_obj_type = Module["_mono_wasm_get_obj_type"] = createExportWrapper("mono_wasm_get_obj_type");

/** @type {function(...*):?} */
var _mono_wasm_try_unbox_primitive_and_get_type = Module["_mono_wasm_try_unbox_primitive_and_get_type"] = createExportWrapper("mono_wasm_try_unbox_primitive_and_get_type");

/** @type {function(...*):?} */
var _mono_unbox_int = Module["_mono_unbox_int"] = createExportWrapper("mono_unbox_int");

/** @type {function(...*):?} */
var _mono_wasm_array_length = Module["_mono_wasm_array_length"] = createExportWrapper("mono_wasm_array_length");

/** @type {function(...*):?} */
var _mono_wasm_array_get = Module["_mono_wasm_array_get"] = createExportWrapper("mono_wasm_array_get");

/** @type {function(...*):?} */
var _mono_wasm_obj_array_new = Module["_mono_wasm_obj_array_new"] = createExportWrapper("mono_wasm_obj_array_new");

/** @type {function(...*):?} */
var _mono_wasm_obj_array_set = Module["_mono_wasm_obj_array_set"] = createExportWrapper("mono_wasm_obj_array_set");

/** @type {function(...*):?} */
var _mono_wasm_string_array_new = Module["_mono_wasm_string_array_new"] = createExportWrapper("mono_wasm_string_array_new");

/** @type {function(...*):?} */
var _mono_wasm_exec_regression = Module["_mono_wasm_exec_regression"] = createExportWrapper("mono_wasm_exec_regression");

/** @type {function(...*):?} */
var _mono_wasm_exit = Module["_mono_wasm_exit"] = createExportWrapper("mono_wasm_exit");

/** @type {function(...*):?} */
var _mono_wasm_set_main_args = Module["_mono_wasm_set_main_args"] = createExportWrapper("mono_wasm_set_main_args");

/** @type {function(...*):?} */
var _mono_wasm_strdup = Module["_mono_wasm_strdup"] = createExportWrapper("mono_wasm_strdup");

/** @type {function(...*):?} */
var _mono_wasm_parse_runtime_options = Module["_mono_wasm_parse_runtime_options"] = createExportWrapper("mono_wasm_parse_runtime_options");

/** @type {function(...*):?} */
var _mono_wasm_enable_on_demand_gc = Module["_mono_wasm_enable_on_demand_gc"] = createExportWrapper("mono_wasm_enable_on_demand_gc");

/** @type {function(...*):?} */
var _mono_wasm_intern_string = Module["_mono_wasm_intern_string"] = createExportWrapper("mono_wasm_intern_string");

/** @type {function(...*):?} */
var _mono_wasm_string_get_data = Module["_mono_wasm_string_get_data"] = createExportWrapper("mono_wasm_string_get_data");

/** @type {function(...*):?} */
var _mono_wasm_typed_array_new = Module["_mono_wasm_typed_array_new"] = createExportWrapper("mono_wasm_typed_array_new");

/** @type {function(...*):?} */
var _mono_wasm_unbox_enum = Module["_mono_wasm_unbox_enum"] = createExportWrapper("mono_wasm_unbox_enum");

/** @type {function(...*):?} */
var _mono_aot_Uno_Wasm_TimezoneData_get_method = Module["_mono_aot_Uno_Wasm_TimezoneData_get_method"] = createExportWrapper("mono_aot_Uno_Wasm_TimezoneData_get_method");

/** @type {function(...*):?} */
var _mono_aot_netstandard_get_method = Module["_mono_aot_netstandard_get_method"] = createExportWrapper("mono_aot_netstandard_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_get_method = Module["_mono_aot_System_Runtime_get_method"] = createExportWrapper("mono_aot_System_Runtime_get_method");

/** @type {function(...*):?} */
var _mono_aot_corlib_get_method = Module["_mono_aot_corlib_get_method"] = createExportWrapper("mono_aot_corlib_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Private_Uri_get_method = Module["_mono_aot_System_Private_Uri_get_method"] = createExportWrapper("mono_aot_System_Private_Uri_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_IO_MemoryMappedFiles_get_method = Module["_mono_aot_System_IO_MemoryMappedFiles_get_method"] = createExportWrapper("mono_aot_System_IO_MemoryMappedFiles_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_InteropServices_get_method = Module["_mono_aot_System_Runtime_InteropServices_get_method"] = createExportWrapper("mono_aot_System_Runtime_InteropServices_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_IO_Pipes_get_method = Module["_mono_aot_System_IO_Pipes_get_method"] = createExportWrapper("mono_aot_System_IO_Pipes_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Diagnostics_Process_get_method = Module["_mono_aot_System_Diagnostics_Process_get_method"] = createExportWrapper("mono_aot_System_Diagnostics_Process_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_ComponentModel_Primitives_get_method = Module["_mono_aot_System_ComponentModel_Primitives_get_method"] = createExportWrapper("mono_aot_System_ComponentModel_Primitives_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Threading_get_method = Module["_mono_aot_System_Threading_get_method"] = createExportWrapper("mono_aot_System_Threading_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_ComponentModel_get_method = Module["_mono_aot_System_ComponentModel_get_method"] = createExportWrapper("mono_aot_System_ComponentModel_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Collections_NonGeneric_get_method = Module["_mono_aot_System_Collections_NonGeneric_get_method"] = createExportWrapper("mono_aot_System_Collections_NonGeneric_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_ObjectModel_get_method = Module["_mono_aot_System_ObjectModel_get_method"] = createExportWrapper("mono_aot_System_ObjectModel_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Collections_get_method = Module["_mono_aot_System_Collections_get_method"] = createExportWrapper("mono_aot_System_Collections_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Diagnostics_FileVersionInfo_get_method = Module["_mono_aot_System_Diagnostics_FileVersionInfo_get_method"] = createExportWrapper("mono_aot_System_Diagnostics_FileVersionInfo_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Collections_Specialized_get_method = Module["_mono_aot_System_Collections_Specialized_get_method"] = createExportWrapper("mono_aot_System_Collections_Specialized_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Security_Cryptography_X509Certificates_get_method = Module["_mono_aot_System_Security_Cryptography_X509Certificates_get_method"] = createExportWrapper("mono_aot_System_Security_Cryptography_X509Certificates_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Security_Cryptography_Algorithms_get_method = Module["_mono_aot_System_Security_Cryptography_Algorithms_get_method"] = createExportWrapper("mono_aot_System_Security_Cryptography_Algorithms_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Memory_get_method = Module["_mono_aot_System_Memory_get_method"] = createExportWrapper("mono_aot_System_Memory_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Security_Cryptography_Primitives_get_method = Module["_mono_aot_System_Security_Cryptography_Primitives_get_method"] = createExportWrapper("mono_aot_System_Security_Cryptography_Primitives_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Security_Cryptography_Encoding_get_method = Module["_mono_aot_System_Security_Cryptography_Encoding_get_method"] = createExportWrapper("mono_aot_System_Security_Cryptography_Encoding_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_Primitives_get_method = Module["_mono_aot_System_Net_Primitives_get_method"] = createExportWrapper("mono_aot_System_Net_Primitives_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Diagnostics_Tracing_get_method = Module["_mono_aot_System_Diagnostics_Tracing_get_method"] = createExportWrapper("mono_aot_System_Diagnostics_Tracing_get_method");

/** @type {function(...*):?} */
var _mono_aot_Microsoft_Win32_Primitives_get_method = Module["_mono_aot_Microsoft_Win32_Primitives_get_method"] = createExportWrapper("mono_aot_Microsoft_Win32_Primitives_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Collections_Concurrent_get_method = Module["_mono_aot_System_Collections_Concurrent_get_method"] = createExportWrapper("mono_aot_System_Collections_Concurrent_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_ComponentModel_TypeConverter_get_method = Module["_mono_aot_System_ComponentModel_TypeConverter_get_method"] = createExportWrapper("mono_aot_System_ComponentModel_TypeConverter_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_Loader_get_method = Module["_mono_aot_System_Runtime_Loader_get_method"] = createExportWrapper("mono_aot_System_Runtime_Loader_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_Security_get_method = Module["_mono_aot_System_Net_Security_get_method"] = createExportWrapper("mono_aot_System_Net_Security_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Drawing_Primitives_get_method = Module["_mono_aot_System_Drawing_Primitives_get_method"] = createExportWrapper("mono_aot_System_Drawing_Primitives_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Numerics_Vectors_get_method = Module["_mono_aot_System_Numerics_Vectors_get_method"] = createExportWrapper("mono_aot_System_Numerics_Vectors_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Linq_get_method = Module["_mono_aot_System_Linq_get_method"] = createExportWrapper("mono_aot_System_Linq_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Text_RegularExpressions_get_method = Module["_mono_aot_System_Text_RegularExpressions_get_method"] = createExportWrapper("mono_aot_System_Text_RegularExpressions_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Reflection_Emit_ILGeneration_get_method = Module["_mono_aot_System_Reflection_Emit_ILGeneration_get_method"] = createExportWrapper("mono_aot_System_Reflection_Emit_ILGeneration_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Reflection_Emit_Lightweight_get_method = Module["_mono_aot_System_Reflection_Emit_Lightweight_get_method"] = createExportWrapper("mono_aot_System_Reflection_Emit_Lightweight_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Reflection_Primitives_get_method = Module["_mono_aot_System_Reflection_Primitives_get_method"] = createExportWrapper("mono_aot_System_Reflection_Primitives_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_Serialization_Formatters_get_method = Module["_mono_aot_System_Runtime_Serialization_Formatters_get_method"] = createExportWrapper("mono_aot_System_Runtime_Serialization_Formatters_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Resources_Writer_get_method = Module["_mono_aot_System_Resources_Writer_get_method"] = createExportWrapper("mono_aot_System_Resources_Writer_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Xml_XDocument_get_method = Module["_mono_aot_System_Xml_XDocument_get_method"] = createExportWrapper("mono_aot_System_Xml_XDocument_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Private_Xml_Linq_get_method = Module["_mono_aot_System_Private_Xml_Linq_get_method"] = createExportWrapper("mono_aot_System_Private_Xml_Linq_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Private_Xml_get_method = Module["_mono_aot_System_Private_Xml_get_method"] = createExportWrapper("mono_aot_System_Private_Xml_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Diagnostics_TraceSource_get_method = Module["_mono_aot_System_Diagnostics_TraceSource_get_method"] = createExportWrapper("mono_aot_System_Diagnostics_TraceSource_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_CompilerServices_Unsafe_get_method = Module["_mono_aot_System_Runtime_CompilerServices_Unsafe_get_method"] = createExportWrapper("mono_aot_System_Runtime_CompilerServices_Unsafe_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_Http_get_method = Module["_mono_aot_System_Net_Http_get_method"] = createExportWrapper("mono_aot_System_Net_Http_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Diagnostics_DiagnosticSource_get_method = Module["_mono_aot_System_Diagnostics_DiagnosticSource_get_method"] = createExportWrapper("mono_aot_System_Diagnostics_DiagnosticSource_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Threading_Thread_get_method = Module["_mono_aot_System_Threading_Thread_get_method"] = createExportWrapper("mono_aot_System_Threading_Thread_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Private_Runtime_InteropServices_JavaScript_get_method = Module["_mono_aot_System_Private_Runtime_InteropServices_JavaScript_get_method"] = createExportWrapper("mono_aot_System_Private_Runtime_InteropServices_JavaScript_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Text_Encoding_Extensions_get_method = Module["_mono_aot_System_Text_Encoding_Extensions_get_method"] = createExportWrapper("mono_aot_System_Text_Encoding_Extensions_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Reflection_Emit_get_method = Module["_mono_aot_System_Reflection_Emit_get_method"] = createExportWrapper("mono_aot_System_Reflection_Emit_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Linq_Expressions_get_method = Module["_mono_aot_System_Linq_Expressions_get_method"] = createExportWrapper("mono_aot_System_Linq_Expressions_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_ComponentModel_EventBasedAsync_get_method = Module["_mono_aot_System_ComponentModel_EventBasedAsync_get_method"] = createExportWrapper("mono_aot_System_ComponentModel_EventBasedAsync_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Console_get_method = Module["_mono_aot_System_Console_get_method"] = createExportWrapper("mono_aot_System_Console_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Data_Common_get_method = Module["_mono_aot_System_Data_Common_get_method"] = createExportWrapper("mono_aot_System_Data_Common_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Xml_ReaderWriter_get_method = Module["_mono_aot_System_Xml_ReaderWriter_get_method"] = createExportWrapper("mono_aot_System_Xml_ReaderWriter_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_Numerics_get_method = Module["_mono_aot_System_Runtime_Numerics_get_method"] = createExportWrapper("mono_aot_System_Runtime_Numerics_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Xml_XmlSerializer_get_method = Module["_mono_aot_System_Xml_XmlSerializer_get_method"] = createExportWrapper("mono_aot_System_Xml_XmlSerializer_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Transactions_Local_get_method = Module["_mono_aot_System_Transactions_Local_get_method"] = createExportWrapper("mono_aot_System_Transactions_Local_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Threading_ThreadPool_get_method = Module["_mono_aot_System_Threading_ThreadPool_get_method"] = createExportWrapper("mono_aot_System_Threading_ThreadPool_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Diagnostics_Contracts_get_method = Module["_mono_aot_System_Diagnostics_Contracts_get_method"] = createExportWrapper("mono_aot_System_Diagnostics_Contracts_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Diagnostics_TextWriterTraceListener_get_method = Module["_mono_aot_System_Diagnostics_TextWriterTraceListener_get_method"] = createExportWrapper("mono_aot_System_Diagnostics_TextWriterTraceListener_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Diagnostics_StackTrace_get_method = Module["_mono_aot_System_Diagnostics_StackTrace_get_method"] = createExportWrapper("mono_aot_System_Diagnostics_StackTrace_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Reflection_Metadata_get_method = Module["_mono_aot_System_Reflection_Metadata_get_method"] = createExportWrapper("mono_aot_System_Reflection_Metadata_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Collections_Immutable_get_method = Module["_mono_aot_System_Collections_Immutable_get_method"] = createExportWrapper("mono_aot_System_Collections_Immutable_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_IO_Compression_get_method = Module["_mono_aot_System_IO_Compression_get_method"] = createExportWrapper("mono_aot_System_IO_Compression_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_IO_Compression_Brotli_get_method = Module["_mono_aot_System_IO_Compression_Brotli_get_method"] = createExportWrapper("mono_aot_System_IO_Compression_Brotli_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_IO_Compression_ZipFile_get_method = Module["_mono_aot_System_IO_Compression_ZipFile_get_method"] = createExportWrapper("mono_aot_System_IO_Compression_ZipFile_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_IO_FileSystem_DriveInfo_get_method = Module["_mono_aot_System_IO_FileSystem_DriveInfo_get_method"] = createExportWrapper("mono_aot_System_IO_FileSystem_DriveInfo_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_IO_FileSystem_Watcher_get_method = Module["_mono_aot_System_IO_FileSystem_Watcher_get_method"] = createExportWrapper("mono_aot_System_IO_FileSystem_Watcher_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_IO_IsolatedStorage_get_method = Module["_mono_aot_System_IO_IsolatedStorage_get_method"] = createExportWrapper("mono_aot_System_IO_IsolatedStorage_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Linq_Queryable_get_method = Module["_mono_aot_System_Linq_Queryable_get_method"] = createExportWrapper("mono_aot_System_Linq_Queryable_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Linq_Parallel_get_method = Module["_mono_aot_System_Linq_Parallel_get_method"] = createExportWrapper("mono_aot_System_Linq_Parallel_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_Requests_get_method = Module["_mono_aot_System_Net_Requests_get_method"] = createExportWrapper("mono_aot_System_Net_Requests_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_WebHeaderCollection_get_method = Module["_mono_aot_System_Net_WebHeaderCollection_get_method"] = createExportWrapper("mono_aot_System_Net_WebHeaderCollection_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_ServicePoint_get_method = Module["_mono_aot_System_Net_ServicePoint_get_method"] = createExportWrapper("mono_aot_System_Net_ServicePoint_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_HttpListener_get_method = Module["_mono_aot_System_Net_HttpListener_get_method"] = createExportWrapper("mono_aot_System_Net_HttpListener_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Security_Claims_get_method = Module["_mono_aot_System_Security_Claims_get_method"] = createExportWrapper("mono_aot_System_Security_Claims_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_WebSockets_get_method = Module["_mono_aot_System_Net_WebSockets_get_method"] = createExportWrapper("mono_aot_System_Net_WebSockets_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_NameResolution_get_method = Module["_mono_aot_System_Net_NameResolution_get_method"] = createExportWrapper("mono_aot_System_Net_NameResolution_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_WebClient_get_method = Module["_mono_aot_System_Net_WebClient_get_method"] = createExportWrapper("mono_aot_System_Net_WebClient_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_WebProxy_get_method = Module["_mono_aot_System_Net_WebProxy_get_method"] = createExportWrapper("mono_aot_System_Net_WebProxy_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_Mail_get_method = Module["_mono_aot_System_Net_Mail_get_method"] = createExportWrapper("mono_aot_System_Net_Mail_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_NetworkInformation_get_method = Module["_mono_aot_System_Net_NetworkInformation_get_method"] = createExportWrapper("mono_aot_System_Net_NetworkInformation_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_Ping_get_method = Module["_mono_aot_System_Net_Ping_get_method"] = createExportWrapper("mono_aot_System_Net_Ping_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_Sockets_get_method = Module["_mono_aot_System_Net_Sockets_get_method"] = createExportWrapper("mono_aot_System_Net_Sockets_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Net_WebSockets_Client_get_method = Module["_mono_aot_System_Net_WebSockets_Client_get_method"] = createExportWrapper("mono_aot_System_Net_WebSockets_Client_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Threading_Channels_get_method = Module["_mono_aot_System_Threading_Channels_get_method"] = createExportWrapper("mono_aot_System_Threading_Channels_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Reflection_DispatchProxy_get_method = Module["_mono_aot_System_Reflection_DispatchProxy_get_method"] = createExportWrapper("mono_aot_System_Reflection_DispatchProxy_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_CompilerServices_VisualC_get_method = Module["_mono_aot_System_Runtime_CompilerServices_VisualC_get_method"] = createExportWrapper("mono_aot_System_Runtime_CompilerServices_VisualC_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_InteropServices_RuntimeInformation_get_method = Module["_mono_aot_System_Runtime_InteropServices_RuntimeInformation_get_method"] = createExportWrapper("mono_aot_System_Runtime_InteropServices_RuntimeInformation_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_Serialization_Primitives_get_method = Module["_mono_aot_System_Runtime_Serialization_Primitives_get_method"] = createExportWrapper("mono_aot_System_Runtime_Serialization_Primitives_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_Serialization_Xml_get_method = Module["_mono_aot_System_Runtime_Serialization_Xml_get_method"] = createExportWrapper("mono_aot_System_Runtime_Serialization_Xml_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Private_DataContractSerialization_get_method = Module["_mono_aot_System_Private_DataContractSerialization_get_method"] = createExportWrapper("mono_aot_System_Private_DataContractSerialization_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Runtime_Serialization_Json_get_method = Module["_mono_aot_System_Runtime_Serialization_Json_get_method"] = createExportWrapper("mono_aot_System_Runtime_Serialization_Json_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Security_Cryptography_Csp_get_method = Module["_mono_aot_System_Security_Cryptography_Csp_get_method"] = createExportWrapper("mono_aot_System_Security_Cryptography_Csp_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Threading_Overlapped_get_method = Module["_mono_aot_System_Threading_Overlapped_get_method"] = createExportWrapper("mono_aot_System_Threading_Overlapped_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Threading_Tasks_Parallel_get_method = Module["_mono_aot_System_Threading_Tasks_Parallel_get_method"] = createExportWrapper("mono_aot_System_Threading_Tasks_Parallel_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Web_HttpUtility_get_method = Module["_mono_aot_System_Web_HttpUtility_get_method"] = createExportWrapper("mono_aot_System_Web_HttpUtility_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Xml_XPath_XDocument_get_method = Module["_mono_aot_System_Xml_XPath_XDocument_get_method"] = createExportWrapper("mono_aot_System_Xml_XPath_XDocument_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_Xml_XPath_get_method = Module["_mono_aot_System_Xml_XPath_get_method"] = createExportWrapper("mono_aot_System_Xml_XPath_get_method");

/** @type {function(...*):?} */
var _mono_aot_Uno_Wasm_MetadataUpdater_get_method = Module["_mono_aot_Uno_Wasm_MetadataUpdater_get_method"] = createExportWrapper("mono_aot_Uno_Wasm_MetadataUpdater_get_method");

/** @type {function(...*):?} */
var _mono_aot_Sonic4Episode1_Wasm_get_method = Module["_mono_aot_Sonic4Episode1_Wasm_get_method"] = createExportWrapper("mono_aot_Sonic4Episode1_Wasm_get_method");

/** @type {function(...*):?} */
var _mono_aot_FNA_get_method = Module["_mono_aot_FNA_get_method"] = createExportWrapper("mono_aot_FNA_get_method");

/** @type {function(...*):?} */
var _mono_aot_System_IO_FileSystem_get_method = Module["_mono_aot_System_IO_FileSystem_get_method"] = createExportWrapper("mono_aot_System_IO_FileSystem_get_method");

/** @type {function(...*):?} */
var _mono_aot_aot_instances_get_method = Module["_mono_aot_aot_instances_get_method"] = createExportWrapper("mono_aot_aot_instances_get_method");

/** @type {function(...*):?} */
var _memset = Module["_memset"] = createExportWrapper("memset");

/** @type {function(...*):?} */
var _memcpy = Module["_memcpy"] = createExportWrapper("memcpy");

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

/** @type {function(...*):?} */
var _putchar = Module["_putchar"] = createExportWrapper("putchar");

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush");

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
  return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _mono_background_exec = Module["_mono_background_exec"] = createExportWrapper("mono_background_exec");

/** @type {function(...*):?} */
var _mono_wasm_get_icudt_name = Module["_mono_wasm_get_icudt_name"] = createExportWrapper("mono_wasm_get_icudt_name");

/** @type {function(...*):?} */
var _mono_wasm_load_icu_data = Module["_mono_wasm_load_icu_data"] = createExportWrapper("mono_wasm_load_icu_data");

/** @type {function(...*):?} */
var _mono_print_method_from_ip = Module["_mono_print_method_from_ip"] = createExportWrapper("mono_print_method_from_ip");

/** @type {function(...*):?} */
var _mono_set_timeout_exec = Module["_mono_set_timeout_exec"] = createExportWrapper("mono_set_timeout_exec");

/** @type {function(...*):?} */
var _htons = Module["_htons"] = createExportWrapper("htons");

/** @type {function(...*):?} */
var _mono_wasm_set_is_debugger_attached = Module["_mono_wasm_set_is_debugger_attached"] = createExportWrapper("mono_wasm_set_is_debugger_attached");

/** @type {function(...*):?} */
var _mono_wasm_send_dbg_command_with_parms = Module["_mono_wasm_send_dbg_command_with_parms"] = createExportWrapper("mono_wasm_send_dbg_command_with_parms");

/** @type {function(...*):?} */
var _mono_wasm_send_dbg_command = Module["_mono_wasm_send_dbg_command"] = createExportWrapper("mono_wasm_send_dbg_command");

/** @type {function(...*):?} */
var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = createExportWrapper("emscripten_main_thread_process_queued_calls");

/** @type {function(...*):?} */
var _htonl = Module["_htonl"] = createExportWrapper("htonl");

/** @type {function(...*):?} */
var _ntohs = Module["_ntohs"] = createExportWrapper("ntohs");

/** @type {function(...*):?} */
var __get_tzname = Module["__get_tzname"] = createExportWrapper("_get_tzname");

/** @type {function(...*):?} */
var __get_daylight = Module["__get_daylight"] = createExportWrapper("_get_daylight");

/** @type {function(...*):?} */
var __get_timezone = Module["__get_timezone"] = createExportWrapper("_get_timezone");

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

/** @type {function(...*):?} */
var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
  return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
  return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");

/** @type {function(...*):?} */
var ___cxa_can_catch = Module["___cxa_can_catch"] = createExportWrapper("__cxa_can_catch");

/** @type {function(...*):?} */
var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = createExportWrapper("__cxa_is_pointer_type");

/** @type {function(...*):?} */
var _memalign = Module["_memalign"] = createExportWrapper("memalign");

/** @type {function(...*):?} */
var dynCall_viiijji = Module["dynCall_viiijji"] = createExportWrapper("dynCall_viiijji");

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");

/** @type {function(...*):?} */
var dynCall_ji = Module["dynCall_ji"] = createExportWrapper("dynCall_ji");

/** @type {function(...*):?} */
var dynCall_vijj = Module["dynCall_vijj"] = createExportWrapper("dynCall_vijj");

/** @type {function(...*):?} */
var dynCall_iiijiiii = Module["dynCall_iiijiiii"] = createExportWrapper("dynCall_iiijiiii");

/** @type {function(...*):?} */
var dynCall_vj = Module["dynCall_vj"] = createExportWrapper("dynCall_vj");

/** @type {function(...*):?} */
var dynCall_jiiiii = Module["dynCall_jiiiii"] = createExportWrapper("dynCall_jiiiii");

/** @type {function(...*):?} */
var dynCall_iji = Module["dynCall_iji"] = createExportWrapper("dynCall_iji");

/** @type {function(...*):?} */
var dynCall_ij = Module["dynCall_ij"] = createExportWrapper("dynCall_ij");

/** @type {function(...*):?} */
var dynCall_iij = Module["dynCall_iij"] = createExportWrapper("dynCall_iij");

/** @type {function(...*):?} */
var dynCall_j = Module["dynCall_j"] = createExportWrapper("dynCall_j");

/** @type {function(...*):?} */
var dynCall_jij = Module["dynCall_jij"] = createExportWrapper("dynCall_jij");

/** @type {function(...*):?} */
var dynCall_jijj = Module["dynCall_jijj"] = createExportWrapper("dynCall_jijj");

/** @type {function(...*):?} */
var dynCall_viiijjii = Module["dynCall_viiijjii"] = createExportWrapper("dynCall_viiijjii");

/** @type {function(...*):?} */
var dynCall_jd = Module["dynCall_jd"] = createExportWrapper("dynCall_jd");

/** @type {function(...*):?} */
var dynCall_jf = Module["dynCall_jf"] = createExportWrapper("dynCall_jf");

/** @type {function(...*):?} */
var dynCall_iiji = Module["dynCall_iiji"] = createExportWrapper("dynCall_iiji");

/** @type {function(...*):?} */
var dynCall_iijjiii = Module["dynCall_iijjiii"] = createExportWrapper("dynCall_iijjiii");

/** @type {function(...*):?} */
var dynCall_vijjjii = Module["dynCall_vijjjii"] = createExportWrapper("dynCall_vijjjii");

/** @type {function(...*):?} */
var dynCall_iijii = Module["dynCall_iijii"] = createExportWrapper("dynCall_iijii");

/** @type {function(...*):?} */
var dynCall_iijiii = Module["dynCall_iijiii"] = createExportWrapper("dynCall_iijiii");

/** @type {function(...*):?} */
var dynCall_vijiiii = Module["dynCall_vijiiii"] = createExportWrapper("dynCall_vijiiii");

/** @type {function(...*):?} */
var dynCall_iijiiii = Module["dynCall_iijiiii"] = createExportWrapper("dynCall_iijiiii");

/** @type {function(...*):?} */
var dynCall_vij = Module["dynCall_vij"] = createExportWrapper("dynCall_vij");

/** @type {function(...*):?} */
var dynCall_jii = Module["dynCall_jii"] = createExportWrapper("dynCall_jii");

/** @type {function(...*):?} */
var dynCall_ijjjiiiiiiiiiiii = Module["dynCall_ijjjiiiiiiiiiiii"] = createExportWrapper("dynCall_ijjjiiiiiiiiiiii");

/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");

/** @type {function(...*):?} */
var dynCall_vijii = Module["dynCall_vijii"] = createExportWrapper("dynCall_vijii");

/** @type {function(...*):?} */
var dynCall_viij = Module["dynCall_viij"] = createExportWrapper("dynCall_viij");

/** @type {function(...*):?} */
var dynCall_jiiiiiiiii = Module["dynCall_jiiiiiiiii"] = createExportWrapper("dynCall_jiiiiiiiii");

/** @type {function(...*):?} */
var dynCall_jj = Module["dynCall_jj"] = createExportWrapper("dynCall_jj");

/** @type {function(...*):?} */
var dynCall_iiijiiiii = Module["dynCall_iiijiiiii"] = createExportWrapper("dynCall_iiijiiiii");

/** @type {function(...*):?} */
var dynCall_iijj = Module["dynCall_iijj"] = createExportWrapper("dynCall_iijj");

/** @type {function(...*):?} */
var dynCall_iijji = Module["dynCall_iijji"] = createExportWrapper("dynCall_iijji");

/** @type {function(...*):?} */
var dynCall_iiiij = Module["dynCall_iiiij"] = createExportWrapper("dynCall_iiiij");

/** @type {function(...*):?} */
var dynCall_jiiij = Module["dynCall_jiiij"] = createExportWrapper("dynCall_jiiij");

/** @type {function(...*):?} */
var dynCall_iiiiiiji = Module["dynCall_iiiiiiji"] = createExportWrapper("dynCall_iiiiiiji");

/** @type {function(...*):?} */
var dynCall_viiiiiiji = Module["dynCall_viiiiiiji"] = createExportWrapper("dynCall_viiiiiiji");

/** @type {function(...*):?} */
var dynCall_jiii = Module["dynCall_jiii"] = createExportWrapper("dynCall_jiii");

/** @type {function(...*):?} */
var dynCall_viiijiii = Module["dynCall_viiijiii"] = createExportWrapper("dynCall_viiijiii");

/** @type {function(...*):?} */
var dynCall_viiji = Module["dynCall_viiji"] = createExportWrapper("dynCall_viiji");

/** @type {function(...*):?} */
var dynCall_vijijji = Module["dynCall_vijijji"] = createExportWrapper("dynCall_vijijji");

/** @type {function(...*):?} */
var dynCall_iijjji = Module["dynCall_iijjji"] = createExportWrapper("dynCall_iijjji");

/** @type {function(...*):?} */
var dynCall_viijji = Module["dynCall_viijji"] = createExportWrapper("dynCall_viijji");

/** @type {function(...*):?} */
var dynCall_viijjji = Module["dynCall_viijjji"] = createExportWrapper("dynCall_viijjji");

/** @type {function(...*):?} */
var dynCall_jji = Module["dynCall_jji"] = createExportWrapper("dynCall_jji");

/** @type {function(...*):?} */
var dynCall_vijji = Module["dynCall_vijji"] = createExportWrapper("dynCall_vijji");

/** @type {function(...*):?} */
var dynCall_jjjji = Module["dynCall_jjjji"] = createExportWrapper("dynCall_jjjji");

/** @type {function(...*):?} */
var dynCall_jjji = Module["dynCall_jjji"] = createExportWrapper("dynCall_jjji");

/** @type {function(...*):?} */
var dynCall_jdi = Module["dynCall_jdi"] = createExportWrapper("dynCall_jdi");

/** @type {function(...*):?} */
var dynCall_dji = Module["dynCall_dji"] = createExportWrapper("dynCall_dji");

/** @type {function(...*):?} */
var dynCall_jfi = Module["dynCall_jfi"] = createExportWrapper("dynCall_jfi");

/** @type {function(...*):?} */
var dynCall_fji = Module["dynCall_fji"] = createExportWrapper("dynCall_fji");

/** @type {function(...*):?} */
var dynCall_viji = Module["dynCall_viji"] = createExportWrapper("dynCall_viji");

/** @type {function(...*):?} */
var dynCall_ijii = Module["dynCall_ijii"] = createExportWrapper("dynCall_ijii");

/** @type {function(...*):?} */
var dynCall_vijiii = Module["dynCall_vijiii"] = createExportWrapper("dynCall_vijiii");

/** @type {function(...*):?} */
var dynCall_jiiii = Module["dynCall_jiiii"] = createExportWrapper("dynCall_jiiii");

/** @type {function(...*):?} */
var dynCall_vjjii = Module["dynCall_vjjii"] = createExportWrapper("dynCall_vjjii");

/** @type {function(...*):?} */
var dynCall_vjii = Module["dynCall_vjii"] = createExportWrapper("dynCall_vjii");

/** @type {function(...*):?} */
var dynCall_jjii = Module["dynCall_jjii"] = createExportWrapper("dynCall_jjii");

/** @type {function(...*):?} */
var dynCall_ijji = Module["dynCall_ijji"] = createExportWrapper("dynCall_ijji");

/** @type {function(...*):?} */
var dynCall_ijiiiiiiii = Module["dynCall_ijiiiiiiii"] = createExportWrapper("dynCall_ijiiiiiiii");

/** @type {function(...*):?} */
var dynCall_ijiii = Module["dynCall_ijiii"] = createExportWrapper("dynCall_ijiii");

/** @type {function(...*):?} */
var dynCall_ijiiiii = Module["dynCall_ijiiiii"] = createExportWrapper("dynCall_ijiiiii");

/** @type {function(...*):?} */
var dynCall_ijiiii = Module["dynCall_ijiiii"] = createExportWrapper("dynCall_ijiiii");

/** @type {function(...*):?} */
var dynCall_jdii = Module["dynCall_jdii"] = createExportWrapper("dynCall_jdii");

/** @type {function(...*):?} */
var dynCall_jijiii = Module["dynCall_jijiii"] = createExportWrapper("dynCall_jijiii");

/** @type {function(...*):?} */
var dynCall_jiiiiii = Module["dynCall_jiiiiii"] = createExportWrapper("dynCall_jiiiiii");

/** @type {function(...*):?} */
var dynCall_jjiii = Module["dynCall_jjiii"] = createExportWrapper("dynCall_jjiii");

/** @type {function(...*):?} */
var dynCall_ijjiiii = Module["dynCall_ijjiiii"] = createExportWrapper("dynCall_ijjiiii");

/** @type {function(...*):?} */
var dynCall_iiiiji = Module["dynCall_iiiiji"] = createExportWrapper("dynCall_iiiiji");

/** @type {function(...*):?} */
var dynCall_iiijjjii = Module["dynCall_iiijjjii"] = createExportWrapper("dynCall_iiijjjii");

/** @type {function(...*):?} */
var dynCall_iiijjjjji = Module["dynCall_iiijjjjji"] = createExportWrapper("dynCall_iiijjjjji");

/** @type {function(...*):?} */
var dynCall_viiiiiji = Module["dynCall_viiiiiji"] = createExportWrapper("dynCall_viiiiiji");

/** @type {function(...*):?} */
var dynCall_vji = Module["dynCall_vji"] = createExportWrapper("dynCall_vji");

/** @type {function(...*):?} */
var dynCall_jijji = Module["dynCall_jijji"] = createExportWrapper("dynCall_jijji");

/** @type {function(...*):?} */
var dynCall_vjji = Module["dynCall_vjji"] = createExportWrapper("dynCall_vjji");

/** @type {function(...*):?} */
var dynCall_viiiji = Module["dynCall_viiiji"] = createExportWrapper("dynCall_viiiji");

/** @type {function(...*):?} */
var dynCall_jijii = Module["dynCall_jijii"] = createExportWrapper("dynCall_jijii");

/** @type {function(...*):?} */
var dynCall_viiiiiiiji = Module["dynCall_viiiiiiiji"] = createExportWrapper("dynCall_viiiiiiiji");

/** @type {function(...*):?} */
var dynCall_iiiji = Module["dynCall_iiiji"] = createExportWrapper("dynCall_iiiji");

/** @type {function(...*):?} */
var dynCall_jiiji = Module["dynCall_jiiji"] = createExportWrapper("dynCall_jiiji");

/** @type {function(...*):?} */
var dynCall_viijjii = Module["dynCall_viijjii"] = createExportWrapper("dynCall_viijjii");

/** @type {function(...*):?} */
var dynCall_iiiiiiiiji = Module["dynCall_iiiiiiiiji"] = createExportWrapper("dynCall_iiiiiiiiji");

/** @type {function(...*):?} */
var dynCall_jiijiii = Module["dynCall_jiijiii"] = createExportWrapper("dynCall_jiijiii");

/** @type {function(...*):?} */
var dynCall_iijjii = Module["dynCall_iijjii"] = createExportWrapper("dynCall_iijjii");

/** @type {function(...*):?} */
var dynCall_jiiiji = Module["dynCall_jiiiji"] = createExportWrapper("dynCall_jiiiji");

/** @type {function(...*):?} */
var dynCall_diji = Module["dynCall_diji"] = createExportWrapper("dynCall_diji");

/** @type {function(...*):?} */
var dynCall_jidi = Module["dynCall_jidi"] = createExportWrapper("dynCall_jidi");

/** @type {function(...*):?} */
var dynCall_viiijii = Module["dynCall_viiijii"] = createExportWrapper("dynCall_viiijii");

/** @type {function(...*):?} */
var dynCall_fijjii = Module["dynCall_fijjii"] = createExportWrapper("dynCall_fijjii");

/** @type {function(...*):?} */
var dynCall_jiiiiiiii = Module["dynCall_jiiiiiiii"] = createExportWrapper("dynCall_jiiiiiiii");

/** @type {function(...*):?} */
var dynCall_iiiijii = Module["dynCall_iiiijii"] = createExportWrapper("dynCall_iiiijii");

/** @type {function(...*):?} */
var dynCall_iiijiii = Module["dynCall_iiijiii"] = createExportWrapper("dynCall_iiijiii");

/** @type {function(...*):?} */
var dynCall_jiidi = Module["dynCall_jiidi"] = createExportWrapper("dynCall_jiidi");

/** @type {function(...*):?} */
var dynCall_jiifi = Module["dynCall_jiifi"] = createExportWrapper("dynCall_jiifi");

/** @type {function(...*):?} */
var dynCall_diiji = Module["dynCall_diiji"] = createExportWrapper("dynCall_diiji");

/** @type {function(...*):?} */
var dynCall_fiiji = Module["dynCall_fiiji"] = createExportWrapper("dynCall_fiiji");

/** @type {function(...*):?} */
var dynCall_iiiiijii = Module["dynCall_iiiiijii"] = createExportWrapper("dynCall_iiiiijii");

/** @type {function(...*):?} */
var dynCall_jifi = Module["dynCall_jifi"] = createExportWrapper("dynCall_jifi");

/** @type {function(...*):?} */
var dynCall_fiji = Module["dynCall_fiji"] = createExportWrapper("dynCall_fiji");


function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_i(index) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    wasmTable.get(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38,a39) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38,a39);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38,a39,a40,a41) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38,a39,a40,a41);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38,a39,a40) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38,a39,a40);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38,a39,a40,a41,a42) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38,a39,a40,a41,a42);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}




// === Auto-generated postamble setup entry stuff ===

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;
Module["setValue"] = setValue;
Module["getValue"] = getValue;
if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["UTF8ArrayToString"] = UTF8ArrayToString;
Module["UTF8ToString"] = UTF8ToString;
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["addFunction"] = addFunction;
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() { abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetPton4")) Module["inetPton4"] = function() { abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4")) Module["inetNtop4"] = function() { abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetPton6")) Module["inetPton6"] = function() { abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6")) Module["inetNtop6"] = function() { abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr")) Module["readSockaddr"] = function() { abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr")) Module["writeSockaddr"] = function() { abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc")) Module["withBuiltinMalloc"] = function() { abort("'withBuiltinMalloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepaliveCounter")) Module["runtimeKeepaliveCounter"] = function() { abort("'runtimeKeepaliveCounter' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive")) Module["keepRuntimeAlive"] = function() { abort("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush")) Module["runtimeKeepalivePush"] = function() { abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop")) Module["runtimeKeepalivePop"] = function() { abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback")) Module["callUserCallback"] = function() { abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeExit")) Module["maybeExit"] = function() { abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle")) Module["asmjsMangle"] = function() { abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() { abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() { abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() { abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() { abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() { abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() { abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() { abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() { abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() { abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() { abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() { abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() { abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() { abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() { abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() { abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() { abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() { abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() { abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() { abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() { abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() { abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() { abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() { abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() { abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() { abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() { abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() { abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() { abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() { abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() { abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() { abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() { abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() { abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() { abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() { abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() { abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() { abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() { abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() { abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() { abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() { abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() { abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfoAttrs")) Module["ExceptionInfoAttrs"] = function() { abort("'ExceptionInfoAttrs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() { abort("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() { abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() { abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() { abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() { abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() { abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback")) Module["_setNetworkCallback"] = function() { abort("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation")) Module["webglGetUniformLocation"] = function() { abort("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglPrepareUniformLocationsBeforeFirstUse")) Module["webglPrepareUniformLocationsBeforeFirstUse"] = function() { abort("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos")) Module["webglGetLeftBracePos"] = function() { abort("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBFS")) Module["IDBFS"] = function() { abort("'IDBFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "MONO")) Module["MONO"] = function() { abort("'MONO' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DOTNET")) Module["DOTNET"] = function() { abort("'DOTNET' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "BINDING")) Module["BINDING"] = function() { abort("'BINDING' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DOTNETENTROPY")) Module["DOTNETENTROPY"] = function() { abort("'DOTNETENTROPY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetIndexed")) Module["emscriptenWebGLGetIndexed"] = function() { abort("'emscriptenWebGLGetIndexed' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)") } });

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  _emscripten_stack_init();
  writeStackCookie();
}

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = Module['_fflush'];
    if (flush) flush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach(function(name) {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty && tty.output && tty.output.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  EXITSTATUS = status;

  checkUnflushedContent();

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && keepRuntimeAlive() && status === 0) {
    return;
  }

  if (keepRuntimeAlive()) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      err(msg);
    }
  } else {

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();





