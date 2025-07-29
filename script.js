(function(){
    var script = {
 "verticalAlign": "top",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
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
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "borderSize": 0,
 "vrPolyfillScale": 0.75,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 20,
 "propagateClick": true,
 "defaultVRPointer": "laser",
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "downloadEnabled": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "left",
 "layout": "absolute",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 20,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player468"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
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
 "id": "camera_402D1476_5656_B615_41B8_F69A313C72E2",
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
 "id": "camera_4428A4DB_5656_B613_41C9_17FFBCC3DC64",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 125.67,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bedroom 4",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 174.24,
   "backwardYaw": 44.75,
   "distance": 1,
   "panorama": "this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 23.51,
   "backwardYaw": 92.6,
   "distance": 1,
   "panorama": "this.panorama_27353EB6_3573_FF75_41C7_1576554FC358"
  }
 ],
 "thumbnailUrl": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_t.jpg",
 "id": "panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_20A8165B_377F_4F33_41C4_5769528D6966",
  "this.overlay_20A8365B_377F_4F33_41B7_064DA6303784"
 ]
},
{
 "duration": 3000,
 "label": "25",
 "id": "photo_3B6BDA54_3593_C736_41C0_9977A368E475",
 "thumbnailUrl": "media/photo_3B6BDA54_3593_C736_41C0_9977A368E475_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6BDA54_3593_C736_41C0_9977A368E475.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
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
 "id": "camera_44F6D4FC_5656_B614_41D5_167568129891",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.25,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "44",
 "id": "photo_3B6D17F6_3593_4CF5_41BF_0D4B7BA1F241",
 "thumbnailUrl": "media/photo_3B6D17F6_3593_4CF5_41BF_0D4B7BA1F241_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6D17F6_3593_4CF5_41BF_0D4B7BA1F241.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Living Room",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 158.04,
   "backwardYaw": -71.95,
   "distance": 1,
   "panorama": "this.panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 32.28,
   "backwardYaw": 16.4,
   "distance": 1,
   "panorama": "this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -82.42,
   "backwardYaw": 1.35,
   "distance": 1,
   "panorama": "this.panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 87.52,
   "backwardYaw": -25.72,
   "distance": 1,
   "panorama": "this.panorama_206D7430_377D_430D_41A1_D0824023A793"
  }
 ],
 "thumbnailUrl": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_t.jpg",
 "id": "panorama_20FF1406_377C_C312_41C0_C60D1035E762",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_20FF7406_377C_C312_41C4_1CBE8FD8BA10",
  "this.overlay_20FF5406_377C_C312_41AD_F2F7D3C303FC",
  "this.overlay_20FFA406_377C_C312_41BC_4E8D4C003D21",
  "this.overlay_20FFB406_377C_C312_41C2_17B57245F0DE"
 ]
},
{
 "duration": 3000,
 "label": "45",
 "id": "photo_3B6DB891_3593_430F_41A7_3D55685E336C",
 "thumbnailUrl": "media/photo_3B6DB891_3593_430F_41A7_3D55685E336C_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6DB891_3593_430F_41A7_3D55685E336C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "duration": 3000,
 "label": "31",
 "id": "photo_3B6D5E1A_3593_3F3D_41C0_39A7195A853F",
 "thumbnailUrl": "media/photo_3B6D5E1A_3593_3F3D_41C0_39A7195A853F_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6D5E1A_3593_3F3D_41C0_39A7195A853F.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1250
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
 "id": "camera_44C284F1_5656_B62C_41B3_B3DA302681D0",
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
 "id": "panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_camera",
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
 "id": "camera_4556B52C_5656_B635_41C7_5FF6FEFA2207",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -116.62,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC",
   "camera": "this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4",
   "camera": "this.panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_camera",
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
   "media": "this.panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B",
   "camera": "this.panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_219F3961_357F_C50E_41C0_66D0765661C1",
   "camera": "this.panorama_219F3961_357F_C50E_41C0_66D0765661C1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_206D7430_377D_430D_41A1_D0824023A793",
   "camera": "this.panorama_206D7430_377D_430D_41A1_D0824023A793_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_20FF1406_377C_C312_41C0_C60D1035E762",
   "camera": "this.panorama_20FF1406_377C_C312_41C0_C60D1035E762_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF",
   "camera": "this.panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_camera",
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
   "media": "this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4",
   "camera": "this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C",
   "camera": "this.panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_camera",
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
   "media": "this.panorama_2340D5C5_377F_4D17_41B7_84C68633FF40",
   "camera": "this.panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6",
   "camera": "this.panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_23676BEF_377F_C513_41A2_B7553E85CFA7",
   "camera": "this.panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2",
   "camera": "this.panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA",
   "camera": "this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_210967D7_377C_CD33_41B7_810EBA811434",
   "camera": "this.panorama_210967D7_377C_CD33_41B7_810EBA811434_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6",
   "camera": "this.panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_camera",
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
   "media": "this.panorama_27353EB6_3573_FF75_41C7_1576554FC358",
   "camera": "this.panorama_27353EB6_3573_FF75_41C7_1576554FC358_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82",
   "camera": "this.panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D",
   "camera": "this.panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_camera",
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
   "media": "this.panorama_2057285E_3773_4335_41BC_EDBEC36A2D55",
   "camera": "this.panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_21C1346E_3773_C315_41AC_B3C215A35BC9",
   "camera": "this.panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.album_83A41AEF_B189_0C12_41E1_AE2983209598",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ]
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Back Kitchen",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -71.95,
   "backwardYaw": 158.04,
   "distance": 1,
   "panorama": "this.panorama_20FF1406_377C_C312_41C0_C60D1035E762"
  }
 ],
 "thumbnailUrl": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_t.jpg",
 "id": "panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_251B2E4F_3773_3F13_41B6_1AA074AF0AD0"
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
 "id": "panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "42",
 "id": "photo_3B6B26C5_3593_4F17_41B6_7F6397AEAECE",
 "thumbnailUrl": "media/photo_3B6B26C5_3593_4F17_41B6_7F6397AEAECE_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6B26C5_3593_4F17_41B6_7F6397AEAECE.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1150
},
{
 "duration": 3000,
 "label": "6",
 "id": "photo_3B6CAD6D_3593_DD17_41C4_995A8EF09218",
 "thumbnailUrl": "media/photo_3B6CAD6D_3593_DD17_41C4_995A8EF09218_t.jpg",
 "width": 1000,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6CAD6D_3593_DD17_41C4_995A8EF09218.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1539
},
{
 "duration": 3000,
 "label": "38",
 "id": "photo_3B6CA36E_3593_4515_41A0_568FF89AAD81",
 "thumbnailUrl": "media/photo_3B6CA36E_3593_4515_41A0_568FF89AAD81_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6CA36E_3593_4515_41A0_568FF89AAD81.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1236
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
 "id": "panorama_206D7430_377D_430D_41A1_D0824023A793_camera",
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
 "id": "camera_405B544B_5656_B67C_41B5_D4A725F27436",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -63.29,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "21",
 "id": "photo_3B6DF6F6_3593_CCF5_41C2_EE3AF0A6F12C",
 "thumbnailUrl": "media/photo_3B6DF6F6_3593_CCF5_41C2_EE3AF0A6F12C_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6DF6F6_3593_CCF5_41C2_EE3AF0A6F12C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1109
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
 "id": "panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_camera",
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
 "id": "camera_451DA548_5656_B67C_41AC_689BB40E8746",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 125.55,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "43",
 "id": "photo_3B6D275A_3593_4D3D_41C9_286A148971AB",
 "thumbnailUrl": "media/photo_3B6D275A_3593_4D3D_41C9_286A148971AB_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6D275A_3593_4D3D_41C9_286A148971AB.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Living 2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 39.52,
   "backwardYaw": 166.71,
   "distance": 1,
   "panorama": "this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -54.33,
   "backwardYaw": -18.44,
   "distance": 1,
   "panorama": "this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 48.76,
   "backwardYaw": -166.41,
   "distance": 1,
   "panorama": "this.panorama_2340D5C5_377F_4D17_41B7_84C68633FF40"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 64,
   "backwardYaw": 128.87,
   "distance": 1,
   "panorama": "this.panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6"
  }
 ],
 "thumbnailUrl": "media/panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6_t.jpg",
 "id": "panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
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
 "vfov": 180,
 "overlays": [
  "this.overlay_97B3DE7F_B18F_04F3_41BE_9B238461409D",
  "this.overlay_97FC2235_B18F_3C76_41D0_07E6864E2B6C",
  "this.overlay_9678C10A_B18F_1C12_41DB_DDDE74D82975",
  "this.overlay_99427F40_B189_040D_41E0_3AA8013BCACE"
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
 "id": "panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_camera",
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
 "id": "camera_43ED9430_5656_B62C_41CB_5EDA13C7010A",
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
 "id": "panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bedroom 2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 128.87,
   "backwardYaw": 64,
   "distance": 1,
   "panorama": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6"
  }
 ],
 "thumbnailUrl": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_t.jpg",
 "id": "panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_22AAEBFA_377F_44FD_41BB_A76EE8D7F1AB"
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
 "id": "panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_camera",
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
 "id": "camera_43BE8440_5656_B66C_41A6_2B3E69DADB24",
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
 "id": "camera_448E2511_5656_B7EC_41A2_7C234A58117E",
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
 "id": "panorama_210967D7_377C_CD33_41B7_810EBA811434_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "9",
 "id": "photo_3B6B2F58_3593_DD3D_41C1_04B7567F9F90",
 "thumbnailUrl": "media/photo_3B6B2F58_3593_DD3D_41C1_04B7567F9F90_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6B2F58_3593_DD3D_41C1_04B7567F9F90.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1314
},
{
 "duration": 3000,
 "label": "23",
 "id": "photo_3B6CA89D_3593_C337_41B5_8FE1AEF1125D",
 "thumbnailUrl": "media/photo_3B6CA89D_3593_C337_41B5_8FE1AEF1125D_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6CA89D_3593_C337_41B5_8FE1AEF1125D.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1018
},
{
 "duration": 3000,
 "label": "46",
 "id": "photo_3B6D1932_3593_450D_41C8_BDFB46409E44",
 "thumbnailUrl": "media/photo_3B6D1932_3593_450D_41C8_BDFB46409E44_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6D1932_3593_450D_41C8_BDFB46409E44.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1163
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
 "id": "camera_454D5532_5656_B62C_41C8_FCB5AB897317",
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
 "id": "camera_45630542_5656_B66C_41AE_2E4B3497B49D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.3,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Upper Living",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 44.75,
   "backwardYaw": 174.24,
   "distance": 1,
   "panorama": "this.panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 48.31,
   "backwardYaw": -53.38,
   "distance": 1,
   "panorama": "this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 38.63,
   "backwardYaw": -20.84,
   "distance": 1,
   "panorama": "this.panorama_2057285E_3773_4335_41BC_EDBEC36A2D55"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.66,
   "backwardYaw": 135.05,
   "distance": 1,
   "panorama": "this.panorama_23676BEF_377F_C513_41A2_B7553E85CFA7"
  }
 ],
 "thumbnailUrl": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_t.jpg",
 "id": "panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2173146E_3775_C315_41B5_7BFCD615D12B",
  "this.overlay_2173346E_3775_C315_41BE_8BBE05A8B4AF",
  "this.overlay_2173246E_3775_C3EF_41A8_9A2B8AFD8C88",
  "this.overlay_21734473_3775_C3F2_41C5_8DDA468D2343"
 ]
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Gallery 2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -20.84,
   "backwardYaw": 38.63,
   "distance": 1,
   "panorama": "this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4"
  }
 ],
 "thumbnailUrl": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_t.jpg",
 "id": "panorama_2057285E_3773_4335_41BC_EDBEC36A2D55",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2057185E_3773_4335_41BD_7A3EF53B0015"
 ]
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bathroom 1",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 63.2,
   "backwardYaw": -104.61,
   "distance": 1,
   "panorama": "this.panorama_2340D5C5_377F_4D17_41B7_84C68633FF40"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 166.71,
   "backwardYaw": 39.52,
   "distance": 1,
   "panorama": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6"
  }
 ],
 "thumbnailUrl": "media/panorama_A1663498_B189_043E_41E0_20CD1CC37B6E_t.jpg",
 "id": "panorama_A1663498_B189_043E_41E0_20CD1CC37B6E",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
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
 "vfov": 180,
 "overlays": [
  "this.overlay_A210171D_B187_0437_41E2_6AB3963AE085",
  "this.overlay_A27E911E_B187_1C35_41E1_6BD663BA7D53",
  "this.overlay_A5D05196_B199_7C35_41B8_98C6243DD975"
 ]
},
{
 "duration": 3000,
 "label": "16",
 "id": "photo_3B69D3B2_3593_C50D_41AD_FF11FCCE9745",
 "thumbnailUrl": "media/photo_3B69D3B2_3593_C50D_41AD_FF11FCCE9745_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B69D3B2_3593_C50D_41AD_FF11FCCE9745.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1229
},
{
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "scaleMode": "fit_inside",
 "label": "First Floor Plan",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "thumbnailUrl": "media/map_83E410B0_B187_3C0E_41E3_D894F9D0E9DD_t.png",
 "height": 1293,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1838,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "id": "map_83E410B0_B187_3C0E_41E3_D894F9D0E9DD",
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
 "class": "Map",
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "duration": 3000,
 "label": "Interior",
 "id": "photo_3ABDBAE2_3595_4712_418B_B4B4288888C9",
 "thumbnailUrl": "media/photo_3ABDBAE2_3595_4712_418B_B4B4288888C9_t.png",
 "width": 3840,
 "image": {
  "levels": [
   {
    "url": "media/photo_3ABDBAE2_3595_4712_418B_B4B4288888C9.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
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
 "id": "camera_438E343B_5656_B61C_41C9_A3F30AA6AF41",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -130.67,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Entryway",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.7,
   "backwardYaw": 7.7,
   "distance": 1,
   "panorama": "this.panorama_206D7430_377D_430D_41A1_D0824023A793"
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
   "yaw": -138.54,
   "backwardYaw": 19.6,
   "distance": 1,
   "panorama": "this.panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 49.33,
   "backwardYaw": -35.59,
   "distance": 1,
   "panorama": "this.panorama_219F3961_357F_C50E_41C0_66D0765661C1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -46,
   "backwardYaw": -164.91,
   "distance": 1,
   "panorama": "this.panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 16.4,
   "backwardYaw": 32.28,
   "distance": 1,
   "panorama": "this.panorama_20FF1406_377C_C312_41C0_C60D1035E762"
  }
 ],
 "thumbnailUrl": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_t.jpg",
 "id": "panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_25B8ADFA_3775_7CFD_41CA_DA8F2DFD9517",
  "this.overlay_25B84DFA_3775_7CFD_4193_83EBE1FD13EA",
  "this.overlay_25B86DFA_3775_7CFD_41B7_D6A6100C3DAD",
  "this.overlay_25B81DFA_3775_7CFD_41C9_55E5DA69C9AB",
  "this.overlay_25B80DFA_3775_7CFD_41AB_C70DE2D6B8FD",
  "this.overlay_25B83DFA_3775_7CFD_41B5_AD5351C58024"
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
 "id": "camera_43D7E419_5656_B61C_41C1_7712A1FCB7B2",
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
 "id": "camera_4491D50B_5656_B7F3_41BE_265462F478BD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.85,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "50",
 "id": "photo_3B6C3C19_3593_433F_4183_437A48DEA346",
 "thumbnailUrl": "media/photo_3B6C3C19_3593_433F_4183_437A48DEA346_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6C3C19_3593_433F_4183_437A48DEA346.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1359
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Entrance",
 "adjacentPanoramas": [
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
   "panorama": "this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC"
  },
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
   "panorama": "this.panorama_20FF1406_377C_C312_41C0_C60D1035E762"
  }
 ],
 "thumbnailUrl": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_t.jpg",
 "id": "panorama_206D7430_377D_430D_41A1_D0824023A793",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_206D4430_377D_430D_41C4_622CED6ED6F7",
  "this.overlay_206D3430_377D_430D_41AE_7CFA292F6841",
  "this.overlay_206D2430_377D_430D_41C7_37222CCEB3EB",
  "this.overlay_206D1430_377D_430D_41C4_68F66C371F02",
  "this.overlay_206D0430_377D_430D_41A8_FCF78EB6A8A0"
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
 "id": "panorama_20FF1406_377C_C312_41C0_C60D1035E762_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bedroom 1",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -104.61,
   "backwardYaw": 63.2,
   "distance": 1,
   "panorama": "this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -166.41,
   "backwardYaw": 48.76,
   "distance": 1,
   "panorama": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6"
  }
 ],
 "thumbnailUrl": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_t.jpg",
 "id": "panorama_2340D5C5_377F_4D17_41B7_84C68633FF40",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2340E5C5_377F_4D17_41B5_31374327912C",
  "this.overlay_234095C6_377F_4D15_41B4_3070D41074EA"
 ]
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bedroom 3",
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
   "panorama": "this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4"
  }
 ],
 "thumbnailUrl": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_t.jpg",
 "id": "panorama_23676BEF_377F_C513_41A2_B7553E85CFA7",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2366BBEF_377F_C513_41C4_5D5661B291B5",
  "this.overlay_2366FBEF_377F_C513_41C4_775E83CB7F10"
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
 "id": "camera_455A2527_5656_B633_41D0_84AF3DEA8A05",
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
 "id": "camera_4406A4C6_5656_B674_41C3_9CC356D16336",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.56,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "5",
 "id": "photo_3B6DCCD6_3593_C335_41C6_7A325B736105",
 "thumbnailUrl": "media/photo_3B6DCCD6_3593_C335_41C6_7A325B736105_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6DCCD6_3593_C335_41C6_7A325B736105.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1105
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
 "id": "camera_4423F4E1_5656_B62C_41D2_D03AF7205B33",
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
 "id": "camera_45EFB573_5656_B613_41BE_9DF9BCB7BCBA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -116,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "20",
 "id": "photo_3B6A6663_3593_CF13_41C6_710330123041",
 "thumbnailUrl": "media/photo_3B6A6663_3593_CF13_41C6_710330123041_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6A6663_3593_CF13_41C6_710330123041.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1004
},
{
 "duration": 3000,
 "label": "29",
 "id": "photo_3B6D4CDB_3593_C333_41C0_38EF55E75BB1",
 "thumbnailUrl": "media/photo_3B6D4CDB_3593_C333_41C0_38EF55E75BB1_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6D4CDB_3593_C333_41C0_38EF55E75BB1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "duration": 3000,
 "label": "47",
 "id": "photo_3B6E3A31_3593_470F_41A2_5CA2C40A262F",
 "thumbnailUrl": "media/photo_3B6E3A31_3593_470F_41A2_5CA2C40A262F_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6E3A31_3593_470F_41A2_5CA2C40A262F.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1187
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
 "id": "camera_4322D40E_5656_B5F4_41C4_C9C81737C663",
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
 "id": "camera_44B0251D_5656_B614_41C7_5C0605DF8CBB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.48,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Garage",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 19.6,
   "backwardYaw": -138.54,
   "distance": 1,
   "panorama": "this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC"
  }
 ],
 "thumbnailUrl": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_t.jpg",
 "id": "panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_275C3D36_357D_DD75_41C5_AA4AC2FA61A4"
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
 "id": "camera_44BAF517_5656_B613_41CA_1639131DA639",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.52,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "2",
 "id": "photo_25C3EA78_3593_C7FE_41BD_30A4BBED837C",
 "thumbnailUrl": "media/photo_25C3EA78_3593_C7FE_41BD_30A4BBED837C_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_25C3EA78_3593_C7FE_41BD_30A4BBED837C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1373
},
{
 "duration": 3000,
 "label": "11",
 "id": "photo_3B6C009D_3593_C337_41A4_35D38EDF07D7",
 "thumbnailUrl": "media/photo_3B6C009D_3593_C337_41A4_35D38EDF07D7_t.jpg",
 "width": 1000,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6C009D_3593_C337_41A4_35D38EDF07D7.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1430
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
 "class": "PlayList",
 "id": "playList_434F93CE_5656_B274_41C1_C0E832E911B9",
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
 "id": "camera_43F0742A_5656_B63D_41BA_AFD0654B0905",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.16,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bathroom5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 63.38,
   "backwardYaw": 23.38,
   "distance": 1,
   "panorama": "this.panorama_210967D7_377C_CD33_41B7_810EBA811434"
  }
 ],
 "thumbnailUrl": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_t.jpg",
 "id": "panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_20B5667C_377D_4FF5_41C3_35C1C2CD2B27"
 ]
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "media": "this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC",
   "camera": "this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4",
   "camera": "this.panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_camera",
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
   "media": "this.panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B",
   "camera": "this.panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_219F3961_357F_C50E_41C0_66D0765661C1",
   "camera": "this.panorama_219F3961_357F_C50E_41C0_66D0765661C1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_206D7430_377D_430D_41A1_D0824023A793",
   "camera": "this.panorama_206D7430_377D_430D_41A1_D0824023A793_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_20FF1406_377C_C312_41C0_C60D1035E762",
   "camera": "this.panorama_20FF1406_377C_C312_41C0_C60D1035E762_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF",
   "camera": "this.panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_camera",
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
   "media": "this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4",
   "camera": "this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C",
   "camera": "this.panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_camera",
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
   "media": "this.panorama_2340D5C5_377F_4D17_41B7_84C68633FF40",
   "camera": "this.panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6",
   "camera": "this.panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_23676BEF_377F_C513_41A2_B7553E85CFA7",
   "camera": "this.panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2",
   "camera": "this.panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA",
   "camera": "this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_210967D7_377C_CD33_41B7_810EBA811434",
   "camera": "this.panorama_210967D7_377C_CD33_41B7_810EBA811434_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6",
   "camera": "this.panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_camera",
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
   "media": "this.panorama_27353EB6_3573_FF75_41C7_1576554FC358",
   "camera": "this.panorama_27353EB6_3573_FF75_41C7_1576554FC358_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82",
   "camera": "this.panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D",
   "camera": "this.panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_camera",
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
   "media": "this.panorama_2057285E_3773_4335_41BC_EDBEC36A2D55",
   "camera": "this.panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_21C1346E_3773_C315_41AC_B3C215A35BC9",
   "camera": "this.panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 0)",
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
 "id": "camera_44ACD521_5656_B62F_41D1_C8F385F421AA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.59,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "13",
 "id": "photo_3B6C91D1_3593_C50F_41BC_CB330D5D5E0A",
 "thumbnailUrl": "media/photo_3B6C91D1_3593_C50F_41BC_CB330D5D5E0A_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6C91D1_3593_C50F_41BC_CB330D5D5E0A.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "duration": 3000,
 "label": "18",
 "id": "photo_3B6E74FA_3593_CCFD_41CA_700648E9231A",
 "thumbnailUrl": "media/photo_3B6E74FA_3593_CCFD_41CA_700648E9231A_t.jpg",
 "width": 1707,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6E74FA_3593_CCFD_41CA_700648E9231A.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2560
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
 "id": "camera_443DC4D1_5656_B66C_41AF_0E9220583036",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.13,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "34",
 "id": "photo_3B6E0069_3593_431F_4183_A91604D87E93",
 "thumbnailUrl": "media/photo_3B6E0069_3593_431F_4183_A91604D87E93_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6E0069_3593_431F_4183_A91604D87E93.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
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
 "id": "panorama_219F3961_357F_C50E_41C0_66D0765661C1_camera",
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
 "id": "camera_40663460_5656_B62C_41D3_8F4848699379",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.58,
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
 "id": "camera_43CC241E_5656_B615_41C8_1DBDA6E78C99",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.76,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Toilet 1",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -164.91,
   "backwardYaw": -46,
   "distance": 1,
   "panorama": "this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4"
  }
 ],
 "thumbnailUrl": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_t.jpg",
 "id": "panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_463F80B7_5652_EE14_41B8_366B14AD8E36",
  "this.overlay_58398061_5652_6E2C_41C0_68109F96C3FE"
 ]
},
{
 "duration": 3000,
 "label": "26",
 "id": "photo_3B6D1AF8_3593_C4FD_41C0_C54DE16356BD",
 "thumbnailUrl": "media/photo_3B6D1AF8_3593_C4FD_41C0_C54DE16356BD_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6D1AF8_3593_C4FD_41C0_C54DE16356BD.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "duration": 3000,
 "label": "15",
 "id": "photo_3B6C630C_3593_C515_41B4_E076A7CEC906",
 "thumbnailUrl": "media/photo_3B6C630C_3593_C515_41B4_E076A7CEC906_t.jpg",
 "width": 1707,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6C630C_3593_C515_41B4_E076A7CEC906.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2560
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
 "id": "camera_43A8B446_5656_B674_4179_4AE8614157B9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.8,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "32",
 "id": "photo_3B6C3EC4_3593_3F15_41C3_9208D2AF85F6",
 "thumbnailUrl": "media/photo_3B6C3EC4_3593_3F15_41C3_9208D2AF85F6_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6C3EC4_3593_3F15_41C3_9208D2AF85F6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
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
 "id": "camera_4335B407_5656_B5F4_41B1_B102F168F825",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.96,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "48",
 "id": "photo_3B6E7AC9_3593_471E_41CA_2FDE51229324",
 "thumbnailUrl": "media/photo_3B6E7AC9_3593_471E_41CA_2FDE51229324_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6E7AC9_3593_471E_41CA_2FDE51229324.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
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
 "id": "panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_camera",
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
 "id": "camera_45788537_5656_B613_41C3_3EB480C96899",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.77,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Toilet 2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 46.48,
   "backwardYaw": -129.9,
   "distance": 1,
   "panorama": "this.panorama_206D7430_377D_430D_41A1_D0824023A793"
  }
 ],
 "thumbnailUrl": "media/panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3_t.jpg",
 "id": "panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
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
 "vfov": 180,
 "overlays": [
  "this.overlay_81C59435_B18F_0476_41E4_C670FE4E89A6"
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
 "id": "panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_camera",
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
 "id": "camera_4045C455_5656_B617_41BB_5EA0B2251589",
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
 "id": "camera_441154B5_5656_B617_41D3_3B2AC80B70E9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.87,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bedroom 6",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1702555_B189_0436_41E4_29524536EC25"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 23.38,
   "backwardYaw": 63.38,
   "distance": 1,
   "panorama": "this.panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -50.32,
   "backwardYaw": 4.39,
   "distance": 1,
   "panorama": "this.panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6"
  }
 ],
 "thumbnailUrl": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_t.jpg",
 "id": "panorama_210967D7_377C_CD33_41B7_810EBA811434",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_210997D7_377C_CD33_41C1_61C9F15C28F1",
  "this.overlay_2109F7D7_377C_CD33_4184_CED83E5CC951",
  "this.overlay_2109D7D8_377C_CD3D_41AA_0F815B0006ED",
  "this.overlay_210E27D8_377C_CD3D_41A8_E966672DF840"
 ]
},
{
 "duration": 3000,
 "label": "39",
 "id": "photo_3B6C6417_3593_4333_41C1_39A9FDBB31C5",
 "thumbnailUrl": "media/photo_3B6C6417_3593_4333_41C1_39A9FDBB31C5_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6C6417_3593_4333_41C1_39A9FDBB31C5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
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
 "id": "camera_4016D465_5656_B637_41D3_1238E0AFD9AC",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.05,
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
 "duration": 3000,
 "label": "8",
 "id": "photo_3B6CBEB1_3593_DF0F_41AF_3DA04C06A713",
 "thumbnailUrl": "media/photo_3B6CBEB1_3593_DF0F_41AF_3DA04C06A713_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6CBEB1_3593_DF0F_41AF_3DA04C06A713.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 938
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
 "id": "camera_4438C4CB_5656_B673_41CB_95C059EF86BF",
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
 "id": "camera_40DDA47B_5656_B613_4164_8F792E5E9AB4",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.49,
  "pitch": 0
 }
},
{
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "scaleMode": "fit_inside",
 "label": "Ground Floor Plan",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "thumbnailUrl": "media/map_8128C351_B187_3C0F_41AC_E8A71EED9995_t.png",
 "height": 1463,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1959,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "id": "map_8128C351_B187_3C0F_41AC_E8A71EED9995",
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
 "class": "Map",
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Pool Deck",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -35.59,
   "backwardYaw": 49.33,
   "distance": 1,
   "panorama": "this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 125.21,
   "backwardYaw": -38.95,
   "distance": 1,
   "panorama": "this.panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_206D7430_377D_430D_41A1_D0824023A793"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20FF1406_377C_C312_41C0_C60D1035E762"
  }
 ],
 "thumbnailUrl": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_t.jpg",
 "id": "panorama_219F3961_357F_C50E_41C0_66D0765661C1",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_219F7961_357F_C511_41CA_82D938E86E96",
  "this.overlay_219F6963_357F_C513_41C6_6276E1F7C79C",
  "this.overlay_219E8963_357F_C513_4193_50C6A6DBC419",
  "this.overlay_219EB963_357F_C513_41B3_8D03AA312151",
  "this.overlay_219EA963_357F_C513_41CA_0983BC19E08A",
  "this.overlay_219EC963_357F_C513_41C9_9A213F73FA03"
 ]
},
{
 "duration": 3000,
 "label": "30",
 "id": "photo_3B6CCD6F_3593_3D12_41CA_4ECD3A5B8810",
 "thumbnailUrl": "media/photo_3B6CCD6F_3593_3D12_41CA_4ECD3A5B8810_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6CCD6F_3593_3D12_41CA_4ECD3A5B8810.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Patio",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -38.95,
   "backwardYaw": 125.21,
   "distance": 1,
   "panorama": "this.panorama_219F3961_357F_C50E_41C0_66D0765661C1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 1.35,
   "backwardYaw": -82.42,
   "distance": 1,
   "panorama": "this.panorama_20FF1406_377C_C312_41C0_C60D1035E762"
  }
 ],
 "thumbnailUrl": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_t.jpg",
 "id": "panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2770B1AD_357F_4516_41BF_55C46007FC5E",
  "this.overlay_277341AD_357F_4516_41C7_FCD429D095D2"
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
 "id": "camera_449A1506_5656_B7F5_41CD_5E1A736C6DD9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.85,
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
 "id": "camera_44FBD4F6_5656_B615_41D1_E47B328286EE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.1,
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
 "id": "camera_450E754D_5656_B674_41D3_9CCB1CF69697",
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
 "id": "camera_4521B55D_5656_B614_41C9_EC32BAAC3541",
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
 "id": "panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_camera",
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
 "id": "panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "scaleMode": "fit_inside",
 "label": "Terrace Plan",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "thumbnailUrl": "media/map_83D9FFAC_B187_0416_41D6_FDCE7E782B82_t.png",
 "height": 1289,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1819,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "id": "map_83D9FFAC_B187_0416_41D6_FDCE7E782B82",
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
 "class": "Map",
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideOpacity": 0
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
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bathroom 4",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 121.24,
   "backwardYaw": 36.57,
   "distance": 1,
   "panorama": "this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA"
  }
 ],
 "thumbnailUrl": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_t.jpg",
 "id": "panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_201F7E63_377D_DF13_41A9_B3FEC28508C1"
 ]
},
{
 "class": "PlayList",
 "id": "playList_434C13CE_5656_B274_41C7_5132171D4A9B",
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
 "id": "camera_4577253C_5656_B615_41C3_1BF5D93D87D8",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.73,
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
 "id": "panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bedroom 7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 11.23,
   "backwardYaw": -141.2,
   "distance": 1,
   "panorama": "this.panorama_A1702555_B189_0436_41E4_29524536EC25"
  },
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
   "panorama": "this.panorama_210967D7_377C_CD33_41B7_810EBA811434"
  }
 ],
 "thumbnailUrl": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_t.jpg",
 "id": "panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_20711401_377D_C30F_41C5_F89C5F36B508",
  "this.overlay_20714402_377D_C30D_41CB_0C4D2DD62095",
  "this.overlay_20715402_377D_C30D_41C7_89CE54BA4E71"
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
 "id": "camera_441C64AF_5656_B634_41C9_67537FF73008",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.62,
  "pitch": 0
 }
},
{
 "movementMode": "constrained",
 "viewerArea": "this.MainViewer",
 "class": "MapPlayer",
 "id": "MainViewerMapPlayer"
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
 "id": "camera_440DF4C0_5656_B66D_4190_F96AC563F382",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.29,
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
 "id": "panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "24",
 "id": "photo_3B6DD9A0_3593_C50D_41C9_246338AC44AC",
 "thumbnailUrl": "media/photo_3B6DD9A0_3593_C50D_41C9_246338AC44AC_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6DD9A0_3593_C50D_41C9_246338AC44AC.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1350
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
 "id": "panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.54,
  "pitch": -1.09
 }
},
{
 "class": "PlayList",
 "id": "playList_434F63CE_5656_B274_41AA_C09F25CB28E6",
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
 "id": "camera_44EF3501_5656_B7EC_41A4_BAA003A0B0AD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.4,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "27",
 "id": "photo_3B6EFB93_3593_C533_41A1_37F03A2AAC88",
 "thumbnailUrl": "media/photo_3B6EFB93_3593_C533_41A1_37F03A2AAC88_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6EFB93_3593_C533_41A1_37F03A2AAC88.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1280
},
{
 "duration": 3000,
 "label": "Exterior",
 "id": "photo_4671E1A9_5652_6E3C_41BD_B6EB650E1830",
 "thumbnailUrl": "media/photo_4671E1A9_5652_6E3C_41BD_B6EB650E1830_t.png",
 "width": 3732,
 "image": {
  "levels": [
   {
    "url": "media/photo_4671E1A9_5652_6E3C_41BD_B6EB650E1830.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2160
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
 "id": "camera_4074345B_5656_B61C_41BF_43A99C5458E4",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.79,
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
 "id": "panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_camera",
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
 "id": "camera_43FB0424_5656_B635_41B2_31B60835B6D7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 126.62,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "19",
 "id": "photo_3B6A35C0_3593_CD0D_41B0_EB968449F577",
 "thumbnailUrl": "media/photo_3B6A35C0_3593_CD0D_41B0_EB968449F577_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6A35C0_3593_CD0D_41B0_EB968449F577.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1385
},
{
 "duration": 3000,
 "label": "1",
 "id": "photo_3A0D58B5_3593_C377_41BD_7EF974D0C8C8",
 "thumbnailUrl": "media/photo_3A0D58B5_3593_C377_41BD_7EF974D0C8C8_t.png",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3A0D58B5_3593_C377_41BD_7EF974D0C8C8.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1322
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
 "id": "camera_45CDA569_5656_B63C_41A7_7EB1DD568656",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.69,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bathroom 3",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 92.6,
   "backwardYaw": 23.51,
   "distance": 1,
   "panorama": "this.panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2"
  }
 ],
 "thumbnailUrl": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_t.jpg",
 "id": "panorama_27353EB6_3573_FF75_41C7_1576554FC358",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_27352EB6_3573_FF75_41C6_2BF91E1518A6"
 ]
},
{
 "duration": 3000,
 "label": "22",
 "id": "photo_3B6DD795_3593_CD37_41C7_7C81151384B0",
 "thumbnailUrl": "media/photo_3B6DD795_3593_CD37_41C7_7C81151384B0_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6DD795_3593_CD37_41C7_7C81151384B0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1196
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
 "id": "camera_4000A46C_5656_B634_41C6_50A9AEAF2E0C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -163.6,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "10",
 "id": "photo_3B6D4002_3593_C30D_4199_FE7EBA06CB83",
 "thumbnailUrl": "media/photo_3B6D4002_3593_C30D_4199_FE7EBA06CB83_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6D4002_3593_C30D_4199_FE7EBA06CB83.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1246
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
 "id": "camera_45342557_5656_B613_41CB_F8DD883BFA08",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.39,
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
 "id": "camera_45FC856E_5656_B635_41D3_0E4D482DE95C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.76,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "7",
 "id": "photo_3B6E1E16_3593_DF35_41BB_E4DF5A9578F0",
 "thumbnailUrl": "media/photo_3B6E1E16_3593_DF35_41BB_E4DF5A9578F0_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6E1E16_3593_DF35_41BB_E4DF5A9578F0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1010
},
{
 "duration": 3000,
 "label": "40",
 "id": "photo_3B73D51E_3593_4D35_41C1_0A08E41E021C",
 "thumbnailUrl": "media/photo_3B73D51E_3593_4D35_41C1_0A08E41E021C_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B73D51E_3593_4D35_41C1_0A08E41E021C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1175
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
 "id": "camera_44D784EB_5656_B63C_41BF_0A201F91FDAA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.09,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "33",
 "id": "photo_3B6E5FCA_3593_3D1D_41B8_A87501158415",
 "thumbnailUrl": "media/photo_3B6E5FCA_3593_3D1D_41B8_A87501158415_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6E5FCA_3593_3D1D_41B8_A87501158415.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1462
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bathroom 6",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 116.71,
   "backwardYaw": -55.9,
   "distance": 1,
   "panorama": "this.panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6"
  }
 ],
 "thumbnailUrl": "media/panorama_A1795733_B189_0473_41D4_DC67363653D6_t.jpg",
 "id": "panorama_A1795733_B189_0473_41D4_DC67363653D6",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
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
 "vfov": 180,
 "overlays": [
  "this.overlay_A4A4F902_B199_0C12_41E5_51DA0EE76330"
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
 "id": "camera_43D82414_5656_B614_41D1_F5104672010C",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.24,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "37",
 "id": "photo_3B6F82C1_3593_470F_41CA_B6FF7E7CFE37",
 "thumbnailUrl": "media/photo_3B6F82C1_3593_470F_41CA_B6FF7E7CFE37_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6F82C1_3593_470F_41CA_B6FF7E7CFE37.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1120
},
{
 "duration": 3000,
 "label": "3",
 "id": "photo_3B6D0B7E_3593_C5F5_41C2_DC109B5898BC",
 "thumbnailUrl": "media/photo_3B6D0B7E_3593_C5F5_41C2_DC109B5898BC_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6D0B7E_3593_C5F5_41C2_DC109B5898BC.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1368
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
 "id": "camera_439C2435_5656_B614_41C8_60345DE8FC1F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.1,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "17",
 "id": "photo_3B6C9464_3593_C315_41C3_0373D1931D98",
 "thumbnailUrl": "media/photo_3B6C9464_3593_C315_41C3_0373D1931D98_t.jpg",
 "width": 1000,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6C9464_3593_C315_41C3_0373D1931D98.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1679
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Lounge",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -141.2,
   "backwardYaw": 11.23,
   "distance": 1,
   "panorama": "this.panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -39.85,
   "backwardYaw": 128.27,
   "distance": 1,
   "panorama": "this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -39.15,
   "backwardYaw": 7.7,
   "distance": 1,
   "panorama": "this.panorama_206D7430_377D_430D_41A1_D0824023A793"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.41,
   "backwardYaw": -54.45,
   "distance": 1,
   "panorama": "this.panorama_21C1346E_3773_C315_41AC_B3C215A35BC9"
  }
 ],
 "thumbnailUrl": "media/panorama_A1702555_B189_0436_41E4_29524536EC25_t.jpg",
 "id": "panorama_A1702555_B189_0436_41E4_29524536EC25",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
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
 "vfov": 180,
 "overlays": [
  "this.overlay_98AAF63B_B187_0473_41E2_16C5BA17A13F",
  "this.overlay_9B516C9D_B1FB_0436_41CF_BB18896A075B",
  "this.overlay_9FFA77C9_B1F9_041F_41C6_3632C3FD6AC5",
  "this.overlay_8EC25C71_B289_040E_41CE_190BC69C4423"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "duration": 3000,
 "label": "49",
 "id": "photo_3B6F1B65_3593_4517_4161_1A4ADCE902F5",
 "thumbnailUrl": "media/photo_3B6F1B65_3593_4517_4161_1A4ADCE902F5_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6F1B65_3593_4517_4161_1A4ADCE902F5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1273
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
 "id": "panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_camera",
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
 "id": "panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_camera",
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
 "id": "camera_44D924E6_5656_B634_41B0_E7BFC92DD56F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.41,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Gallery",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -54.45,
   "backwardYaw": -7.41,
   "distance": 1,
   "panorama": "this.panorama_A1702555_B189_0436_41E4_29524536EC25"
  }
 ],
 "thumbnailUrl": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_t.jpg",
 "id": "panorama_21C1346E_3773_C315_41AC_B3C215A35BC9",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_21C0946E_3773_C315_41C9_C8611B6C11F7",
  "this.overlay_21C0D46E_3773_C315_41B3_13BCD91B40A0"
 ]
},
{
 "duration": 3000,
 "label": "41",
 "id": "photo_3B4FA5C9_3593_4D1F_41C4_0552966B5218",
 "thumbnailUrl": "media/photo_3B4FA5C9_3593_4D1F_41C4_0552966B5218_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B4FA5C9_3593_4D1F_41C4_0552966B5218.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1179
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
 "id": "camera_40333471_5656_B62C_41C8_69B3E0F7FC86",
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
 "id": "camera_453B9552_5656_B66C_41D3_81A31F11568D",
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
 "id": "panorama_27353EB6_3573_FF75_41C7_1576554FC358_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bathroom 2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 100.13,
   "backwardYaw": -4.01,
   "distance": 1,
   "panorama": "this.panorama_23676BEF_377F_C513_41A2_B7553E85CFA7"
  }
 ],
 "thumbnailUrl": "media/panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49_t.jpg",
 "id": "panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
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
 "vfov": 180,
 "overlays": [
  "this.overlay_A5F5E093_B199_7C32_41DE_427D49044C08"
 ]
},
{
 "duration": 3000,
 "label": "36",
 "id": "photo_3B6C621B_3593_4732_41C0_15EE9F77B5B1",
 "thumbnailUrl": "media/photo_3B6C621B_3593_4732_41C0_15EE9F77B5B1_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6C621B_3593_4732_41C0_15EE9F77B5B1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1196
},
{
 "fontFamily": "Arial",
 "backgroundColor": "#404040",
 "selectedFontColor": "#FFFFFF",
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
  }
 ],
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "id": "Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "rollOverFontColor": "#FFFFFF",
 "label": "Media",
 "opacity": 0.4,
 "class": "Menu",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020"
},
{
 "duration": 3000,
 "label": "35",
 "id": "photo_3B6B0125_3593_4516_41C2_705B5B65F81D",
 "thumbnailUrl": "media/photo_3B6B0125_3593_4516_41C2_705B5B65F81D_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6B0125_3593_4516_41C2_705B5B65F81D.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1263
},
{
 "duration": 3000,
 "label": "14",
 "id": "photo_3B6BC270_3593_C70D_41CA_F64BAA986213",
 "thumbnailUrl": "media/photo_3B6BC270_3593_C70D_41CA_F64BAA986213_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6BC270_3593_C70D_41CA_F64BAA986213.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1249
},
{
 "duration": 3000,
 "label": "12",
 "id": "photo_3B6C3138_3593_C57D_41C5_34CD1F45C7E4",
 "thumbnailUrl": "media/photo_3B6C3138_3593_C57D_41C5_34CD1F45C7E4_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6C3138_3593_C57D_41C5_34CD1F45C7E4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1019
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
 "id": "camera_440B14BB_5656_B61C_41A7_B3C992B795E6",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.34,
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
 "id": "panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_camera",
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
 "id": "camera_4437C4D5_5656_B617_41CF_3C6C4F236C2B",
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
 "id": "camera_45D33563_5656_B62C_41C7_0D4CBF0A5F0F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.15,
  "pitch": 0
 }
},
{
 "duration": 3000,
 "label": "4",
 "id": "photo_3B6AAC2C_3593_C315_41C7_7D3B86328D5A",
 "thumbnailUrl": "media/photo_3B6AAC2C_3593_C315_41C7_7D3B86328D5A_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6AAC2C_3593_C315_41C7_7D3B86328D5A.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1170
},
{
 "duration": 3000,
 "label": "28",
 "id": "photo_3B6C2C2E_3593_C315_41B3_85E57ED2DA84",
 "thumbnailUrl": "media/photo_3B6C2C2E_3593_C315_41B3_85E57ED2DA84_t.jpg",
 "width": 1920,
 "image": {
  "levels": [
   {
    "url": "media/photo_3B6C2C2E_3593_C315_41B3_85E57ED2DA84.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 1246
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Bedroom 5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 128.27,
   "backwardYaw": -39.85,
   "distance": 1,
   "panorama": "this.panorama_A1702555_B189_0436_41E4_29524536EC25"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -53.38,
   "backwardYaw": 48.31,
   "distance": 1,
   "panorama": "this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 36.57,
   "backwardYaw": 121.24,
   "distance": 1,
   "panorama": "this.panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2057285E_3773_4335_41BC_EDBEC36A2D55"
  }
 ],
 "thumbnailUrl": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_t.jpg",
 "id": "panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_431323E9_5656_B23F_4190_58E70F1A43F1",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_20528B10_377C_C50D_41A2_214297EAF7FE",
  "this.overlay_2052AB10_377C_C50D_419B_561BD8DB9B4A",
  "this.overlay_2052CB10_377C_C50D_41CA_8D7C67738D12",
  "this.overlay_2052DB10_377C_C50D_41BC_0AF9DDE25CD5",
  "this.overlay_2052EB10_377C_C50D_41B5_CAC9EA8D902A"
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
 "id": "camera_40555450_5656_B66D_41C1_36FB73710515",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.68,
  "pitch": 0
 }
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
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
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "progressHeight": 6,
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "minHeight": 50,
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 115.05,
 "borderRadius": 0,
 "borderSize": 0,
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "height": 641,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Image_85724E8B_B187_0412_41B9_D70739EC2A7E"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 573,
 "class": "Container",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "top": 15,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "height": 133,
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
  "this.Button_FA94E7B6_B287_0472_41E4_885B6E4B9BB1"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 0.64,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "right": "0%",
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "propagateClick": true,
 "verticalAlign": "top",
 "bottom": 0,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "height": 118,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--MENU"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#333333",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "gap": 10,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "gap": 10,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "gap": 10,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "gap": 10,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "gap": 10,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "gap": 10,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "gap": 10,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "gap": 10,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Image_F03DED2C_B289_0416_41DD_BE430F145281",
 "maxWidth": 394,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "right": "1.39%",
 "width": "10.857%",
 "class": "Image",
 "borderSize": 0,
 "url": "skin/Image_F03DED2C_B289_0416_41DD_BE430F145281.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0.11%",
 "bottom": "87.1%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image110225"
 },
 "maxHeight": 234
},
{
 "transparencyActive": true,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "transparencyActive": true,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 58,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.79,
   "image": "this.AnimatedImageResource_2C07DB69_3794_C51F_4180_B3C0FED558D8",
   "yaw": 174.24,
   "pitch": -15.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_20A8165B_377F_4F33_41C4_5769528D6966",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4, this.camera_44F6D4FC_5656_B614_41D5_167568129891); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_1_HS_0_0_0_map.gif",
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
   "hfov": 7.64,
   "image": "this.AnimatedImageResource_2C006B69_3794_C51F_41BE_D841843E23D4",
   "yaw": 23.51,
   "pitch": -19.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_20A8365B_377F_4F33_41B7_064DA6303784",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_27353EB6_3573_FF75_41C7_1576554FC358, this.camera_44EF3501_5656_B7EC_41A4_BAA003A0B0AD); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_1_HS_1_0_0_map.gif",
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
   "hfov": 4.59,
   "image": "this.AnimatedImageResource_2CFA7B67_3794_C512_418E_08E1A6FAFAC7",
   "yaw": 32.28,
   "pitch": -13.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_20FF7406_377C_C312_41C4_1CBE8FD8BA10",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC, this.camera_4000A46C_5656_B634_41C6_50A9AEAF2E0C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_1_HS_0_0_0_map.gif",
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
   "hfov": 4.61,
   "image": "this.AnimatedImageResource_2CF8DB67_3794_C512_41A7_1B2FC72EE1C7",
   "yaw": 87.52,
   "pitch": -12.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_20FF5406_377C_C312_41AD_F2F7D3C303FC",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_206D7430_377D_430D_41A1_D0824023A793, this.camera_402D1476_5656_B615_41B8_F69A313C72E2); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_1_HS_1_0_0_map.gif",
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
   "hfov": 4.52,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_1_HS_2_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -82.42
  }
 ],
 "id": "overlay_20FFA406_377C_C312_41BC_4E8D4C003D21",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B, this.camera_40333471_5656_B62C_41C8_69B3E0F7FC86); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_1_HS_2_0_0_map.gif",
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
   "hfov": 4.55,
   "image": "this.AnimatedImageResource_2CF94B67_3794_C512_41B7_F14447340099",
   "yaw": 158.04,
   "pitch": -15.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_20FFB406_377C_C312_41C2_17B57245F0DE",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF, this.camera_4016D465_5656_B637_41D3_1238E0AFD9AC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_1_HS_3_0_0_map.gif",
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
   "hfov": 7.81,
   "image": "this.AnimatedImageResource_2CF9FB67_3794_C512_41C4_030EBC3F2789",
   "yaw": -71.95,
   "pitch": -14.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_251B2E4F_3773_3F13_41B6_1AA074AF0AD0",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20FF1406_377C_C312_41C0_C60D1035E762, this.camera_4335B407_5656_B5F4_41B1_B102F168F825); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_1_HS_0_0_0_map.gif",
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
   "hfov": 4.14,
   "image": "this.AnimatedImageResource_F9C930B2_B189_1C0D_41E1_8EBB7AA0A94C",
   "yaw": -54.33,
   "pitch": -28.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_97B3DE7F_B18F_04F3_41BE_9B238461409D",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC, this.camera_4406A4C6_5656_B674_41C3_9CC356D16336); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.33,
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
   "hfov": 4.52,
   "image": "this.AnimatedImageResource_F9C9E0B2_B189_1C0D_41C9_0D1DD4AAFE9A",
   "yaw": 39.52,
   "pitch": -17.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_97FC2235_B18F_3C76_41D0_07E6864E2B6C",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E, this.camera_440DF4C0_5656_B66D_4190_F96AC563F382); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.52,
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
   "hfov": 4.44,
   "image": "this.AnimatedImageResource_F9CA40B2_B189_1C0D_41D5_7641D02957C7",
   "yaw": 48.76,
   "pitch": -20.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9678C10A_B18F_1C12_41DB_DDDE74D82975",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2340D5C5_377F_4D17_41B7_84C68633FF40, this.camera_4438C4CB_5656_B673_41CB_95C059EF86BF); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.76,
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
   "hfov": 4.38,
   "image": "this.AnimatedImageResource_F9CA30B2_B189_1C0D_41C0_C498AE4EA8ED",
   "yaw": 64,
   "pitch": -13.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_99427F40_B189_040D_41E0_3AA8013BCACE",
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6, this.camera_443DC4D1_5656_B66C_41AF_0E9220583036); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64,
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
   "hfov": 6.31,
   "image": "this.AnimatedImageResource_2C06FB68_3794_C51E_41BE_52B3CE02B01F",
   "yaw": 128.87,
   "pitch": -38.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_22AAEBFA_377F_44FD_41BB_A76EE8D7F1AB",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6, this.camera_45EFB573_5656_B613_41BE_9DF9BCB7BCBA); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_1_HS_0_0_0_map.gif",
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
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.68,
   "image": "this.AnimatedImageResource_2C041B68_3794_C51D_41CA_5BED1F28A503",
   "yaw": -7.66,
   "pitch": -9.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2173146E_3775_C315_41B5_7BFCD615D12B",
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_23676BEF_377F_C513_41A2_B7553E85CFA7, this.camera_43ED9430_5656_B62C_41CB_5EDA13C7010A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 2.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_1_HS_0_0_0_map.gif",
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
   "hfov": 3.27,
   "image": "this.AnimatedImageResource_2C04BB68_3794_C51D_41C9_367963F34EB4",
   "yaw": 38.63,
   "pitch": -11.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2173346E_3775_C315_41BE_8BBE05A8B4AF",
 "data": {
  "label": "Arrow 02 Left"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2057285E_3773_4335_41BC_EDBEC36A2D55, this.camera_43F0742A_5656_B63D_41BA_AFD0654B0905); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_1_HS_1_0_0_map.gif",
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
   "hfov": 2.67,
   "image": "this.AnimatedImageResource_2C04DB68_3794_C51E_41C7_08FA6E107278",
   "yaw": 48.31,
   "pitch": -11.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2173246E_3775_C3EF_41A8_9A2B8AFD8C88",
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA, this.camera_43FB0424_5656_B635_41B2_31B60835B6D7); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 2.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_1_HS_2_0_0_map.gif",
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
   "hfov": 2.52,
   "image": "this.AnimatedImageResource_2C057B68_3794_C51E_41C6_A130675FB2A7",
   "yaw": 44.75,
   "pitch": -9.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_21734473_3775_C3F2_41C5_8DDA468D2343",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2, this.camera_43CC241E_5656_B615_41C8_1DBDA6E78C99); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 2.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_1_HS_3_0_0_map.gif",
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
   "hfov": 4.01,
   "image": "this.AnimatedImageResource_2C0E0B6B_3794_C513_41C7_2E37E52E52A4",
   "yaw": -20.84,
   "pitch": -33.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2057185E_3773_4335_41BD_7A3EF53B0015",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4, this.camera_43D7E419_5656_B61C_41C1_7712A1FCB7B2); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_1_HS_1_0_0_map.gif",
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
   "hfov": 7,
   "image": "this.AnimatedImageResource_F9BDD0B5_B189_1C76_41D7_E6D91F7B6FAB",
   "yaw": 63.2,
   "pitch": -29.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A210171D_B187_0437_41E2_6AB3963AE085",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2340D5C5_377F_4D17_41B7_84C68633FF40, this.camera_45342557_5656_B613_41CB_F8DD883BFA08); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.2,
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
   "hfov": 7.28,
   "image": "this.AnimatedImageResource_F9BD80B6_B189_1C72_41D1_E65C651218BF",
   "yaw": 166.71,
   "pitch": -25.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A27E911E_B187_1C35_41E1_6BD663BA7D53",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6, this.camera_4521B55D_5656_B614_41C9_EC32BAAC3541); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.28,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.71,
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
   "hfov": 6.48,
   "image": "this.AnimatedImageResource_F9BE60B6_B189_1C72_41D9_A1DE766E32A2",
   "yaw": 129.02,
   "pitch": -36.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A5D05196_B199_7C35_41B8_98C6243DD975",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.02,
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
 "class": "PhotoPlayList",
 "id": "album_83A41AEF_B189_0C12_41E1_AE2983209598_AlbumPlayList",
 "items": [
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width"
   },
   "media": "this.photo_4671E1A9_5652_6E3C_41BD_B6EB650E1830",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.62",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.63"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_width"
   },
   "media": "this.photo_3ABDBAE2_3595_4712_418B_B4B4288888C9",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.73",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.28"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3A0D58B5_3593_C377_41BD_7EF974D0C8C8",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.49",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.32"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_25C3EA78_3593_C7FE_41BD_30A4BBED837C",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.60"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6D0B7E_3593_C5F5_41C2_DC109B5898BC",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.31"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6AAC2C_3593_C315_41C7_7D3B86328D5A",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.60",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.68"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6DCCD6_3593_C335_41C6_7A325B736105",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.41"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6CAD6D_3593_DD17_41C4_995A8EF09218",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.61",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.65"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6E1E16_3593_DF35_41BB_E4DF5A9578F0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6CBEB1_3593_DF0F_41AF_3DA04C06A713",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6B2F58_3593_DD3D_41C1_04B7567F9F90",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6D4002_3593_C30D_4199_FE7EBA06CB83",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.71"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6C009D_3593_C337_41A4_35D38EDF07D7",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.66"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6C3138_3593_C57D_41C5_34CD1F45C7E4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.29",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6C91D1_3593_C50F_41BC_CB330D5D5E0A",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.63",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.35"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6BC270_3593_C70D_41CA_F64BAA986213",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.53",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.33"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6C630C_3593_C515_41B4_E076A7CEC906",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.37",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.75"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B69D3B2_3593_C50D_41AD_FF11FCCE9745",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.31"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6C9464_3593_C315_41C3_0373D1931D98",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.63",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.31"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6E74FA_3593_CCFD_41CA_700648E9231A",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.72"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6A35C0_3593_CD0D_41B0_EB968449F577",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.66",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.54"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6A6663_3593_CF13_41C6_710330123041",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.32"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6DF6F6_3593_CCF5_41C2_EE3AF0A6F12C",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.62",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.33"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6DD795_3593_CD37_41C7_7C81151384B0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.54"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6CA89D_3593_C337_41B5_8FE1AEF1125D",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.30"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6DD9A0_3593_C50D_41C9_246338AC44AC",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.43",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.55"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6BDA54_3593_C736_41C0_9977A368E475",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.49"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6D1AF8_3593_C4FD_41C0_C54DE16356BD",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6EFB93_3593_C533_41A1_37F03A2AAC88",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.51",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.43"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6C2C2E_3593_C315_41B3_85E57ED2DA84",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.38",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.69"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6D4CDB_3593_C333_41C0_38EF55E75BB1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.64"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6CCD6F_3593_3D12_41CA_4ECD3A5B8810",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.63"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6D5E1A_3593_3F3D_41C0_39A7195A853F",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.43"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6C3EC4_3593_3F15_41C3_9208D2AF85F6",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.30",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.59"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6E5FCA_3593_3D1D_41B8_A87501158415",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.63"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6E0069_3593_431F_4183_A91604D87E93",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.37",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.70"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6B0125_3593_4516_41C2_705B5B65F81D",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.33"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6C621B_3593_4732_41C0_15EE9F77B5B1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.52"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6F82C1_3593_470F_41CA_B6FF7E7CFE37",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.59"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6CA36E_3593_4515_41A0_568FF89AAD81",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.57",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.33"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6C6417_3593_4333_41C1_39A9FDBB31C5",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.36"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B73D51E_3593_4D35_41C1_0A08E41E021C",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.58",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.46"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B4FA5C9_3593_4D1F_41C4_0552966B5218",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.57",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.36"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6B26C5_3593_4F17_41B6_7F6397AEAECE",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.63"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6D275A_3593_4D3D_41C9_286A148971AB",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.63",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.35"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6D17F6_3593_4CF5_41BF_0D4B7BA1F241",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.51",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.33"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6DB891_3593_430F_41A7_3D55685E336C",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.61",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.41"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6D1932_3593_450D_41C8_BDFB46409E44",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.64",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.42"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6E3A31_3593_470F_41A2_5CA2C40A262F",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.41",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.61"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6E7AC9_3593_471E_41CA_2FDE51229324",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.39"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6F1B65_3593_4517_4161_1A4ADCE902F5",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 3000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.47",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.66"
    },
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.photo_3B6C3C19_3593_433F_4183_437A48DEA346",
   "class": "PhotoPlayListItem"
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.11,
   "image": "this.AnimatedImageResource_2CF3BB66_3794_C515_41B8_6C68E9C7B65E",
   "yaw": -138.54,
   "pitch": -18.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_25B8ADFA_3775_7CFD_41CA_DA8F2DFD9517",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4, this.camera_4423F4E1_5656_B62C_41D2_D03AF7205B33); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_0_0_0_map.gif",
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
   "hfov": 6.19,
   "image": "this.AnimatedImageResource_2CF3DB66_3794_C515_41C4_E8735D9C0928",
   "yaw": 49.33,
   "pitch": -8.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_25B84DFA_3775_7CFD_4193_83EBE1FD13EA",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_219F3961_357F_C50E_41C0_66D0765661C1, this.camera_44D924E6_5656_B634_41B0_E7BFC92DD56F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_1_0_0_map.gif",
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
   "hfov": 4.42,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_2_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -46
  }
 ],
 "id": "overlay_25B86DFA_3775_7CFD_41B7_D6A6100C3DAD",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C, this.camera_44D784EB_5656_B63C_41BF_0A201F91FDAA); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_2_0_0_map.gif",
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
   "hfov": 4.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_3_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -18.44
  }
 ],
 "id": "overlay_25B81DFA_3775_7CFD_41C9_55E5DA69C9AB",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6, this.camera_4428A4DB_5656_B613_41C9_17FFBCC3DC64); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_3_0_0_map.gif",
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
   "hfov": 4.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_4_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.7
  }
 ],
 "id": "overlay_25B80DFA_3775_7CFD_41AB_C70DE2D6B8FD",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_206D7430_377D_430D_41A1_D0824023A793, this.camera_4437C4D5_5656_B617_41CF_3C6C4F236C2B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_4_0_0_map.gif",
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
   "hfov": 4.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_5_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 16.4
  }
 ],
 "id": "overlay_25B83DFA_3775_7CFD_41B5_AD5351C58024",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20FF1406_377C_C312_41C0_C60D1035E762, this.camera_44C284F1_5656_B62C_41B3_B3DA302681D0); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_5_0_0_map.gif",
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
   "hfov": 3.78,
   "image": "this.AnimatedImageResource_2CF89B67_3794_C513_4192_C5F25F6AC8D4",
   "yaw": 7.7,
   "pitch": -10.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_206D4430_377D_430D_41C4_622CED6ED6F7",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1702555_B189_0436_41E4_29524536EC25, this.camera_449A1506_5656_B7F5_41CD_5E1A736C6DD9); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_1_HS_0_0_0_map.gif",
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
   "hfov": 6.13,
   "image": "this.AnimatedImageResource_2CF8CB67_3794_C513_41CA_A5D9206F8785",
   "yaw": -129.9,
   "pitch": -35.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_206D3430_377D_430D_41AE_7CFA292F6841",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17D39C2_B189_0C12_41E0_41B5F7EBAEF3, this.camera_44BAF517_5656_B613_41CA_1639131DA639); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.13,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_1_HS_1_0_0_map.gif",
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
   "hfov": 3.78,
   "image": "this.AnimatedImageResource_2CF97B67_3794_C513_4194_DBAB72A02498",
   "yaw": 7.7,
   "pitch": -10.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_206D2430_377D_430D_41C7_37222CCEB3EB",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC, this.camera_448E2511_5656_B7EC_41A2_7C234A58117E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_1_HS_2_0_0_map.gif",
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
   "hfov": 4.59,
   "image": "this.AnimatedImageResource_2CF9AB67_3794_C512_41C0_D40956A91D10",
   "yaw": -25.72,
   "pitch": -13.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_206D1430_377D_430D_41C4_68F66C371F02",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20FF1406_377C_C312_41C0_C60D1035E762, this.camera_44B0251D_5656_B614_41C7_5C0605DF8CBB); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_1_HS_3_0_0_map.gif",
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
   "hfov": 4.76,
   "image": "this.AnimatedImageResource_2CF9DB67_3794_C512_41B5_86DC1D35F8A0",
   "yaw": 153.43,
   "pitch": -27.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_206D0430_377D_430D_41A8_FCF78EB6A8A0",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1702555_B189_0436_41E4_29524536EC25, this.camera_4491D50B_5656_B7F3_41BE_265462F478BD); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_1_HS_4_0_0_map.gif",
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
   "hfov": 5.86,
   "image": "this.AnimatedImageResource_2C062B68_3794_C51E_41A7_FE3E7B167BE6",
   "yaw": -104.61,
   "pitch": -43.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2340E5C5_377F_4D17_41B5_31374327912C",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1663498_B189_043E_41E0_20CD1CC37B6E, this.camera_4322D40E_5656_B5F4_41C4_C9C81737C663); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_1_HS_0_0_0_map.gif",
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
   "hfov": 6.7,
   "image": "this.AnimatedImageResource_2C064B68_3794_C51E_419A_82356C8E69A5",
   "yaw": -166.41,
   "pitch": -33.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_234095C6_377F_4D15_41B4_3070D41074EA",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BF330_B189_3C0D_41A4_91E8216FCBD6, this.camera_43D82414_5656_B614_41D1_F5104672010C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_1_HS_1_0_0_map.gif",
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
   "hfov": 7.44,
   "image": "this.AnimatedImageResource_2C072B69_3794_C51F_41C6_D55A9F8518B7",
   "yaw": 135.05,
   "pitch": -22.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2366BBEF_377F_C513_41C4_5D5661B291B5",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4, this.camera_440B14BB_5656_B61C_41A7_B3C992B795E6); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_1_HS_0_0_0_map.gif",
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
   "hfov": 5.5,
   "image": "this.AnimatedImageResource_2C074B69_3794_C51F_41BE_B8ADE07B8149",
   "yaw": -4.01,
   "pitch": -15.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2366FBEF_377F_C513_41C4_775E83CB7F10",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A17BED76_B189_04F5_41C3_476AD2D9EF49, this.camera_441154B5_5656_B617_41D3_3B2AC80B70E9); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_1_HS_1_0_0_map.gif",
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
   "hfov": 4.66,
   "image": "this.AnimatedImageResource_2CFD1B66_3794_C515_41B6_7DD319DB5F64",
   "yaw": 19.6,
   "pitch": -9.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_275C3D36_357D_DD75_41C5_AA4AC2FA61A4",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC, this.camera_4045C455_5656_B617_41BB_5EA0B2251589); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_1_HS_0_0_0_map.gif",
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
 "transparencyActive": true,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "maxWidth": 150,
 "maxHeight": 150,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "class": "IconButton",
 "borderSize": 0,
 "width": "12%",
 "borderRadius": 0,
 "minWidth": 70,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "minHeight": 70,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": 10,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "class": "IconButton",
 "borderSize": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "horizontalAlign": "center",
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "minHeight": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand",
 "maxHeight": 60
},
{
 "transparencyActive": false,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "left": 10,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "class": "IconButton",
 "borderSize": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "horizontalAlign": "center",
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "minHeight": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand",
 "maxHeight": 60
},
{
 "transparencyActive": true,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "maxWidth": 150,
 "maxHeight": 150,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "class": "IconButton",
 "borderSize": 0,
 "width": "12%",
 "borderRadius": 0,
 "minWidth": 70,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "minHeight": 70,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "class": "IconButton",
 "borderSize": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "horizontalAlign": "center",
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "minHeight": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand",
 "maxHeight": 60
},
{
 "transparencyActive": false,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "1.77%",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "class": "IconButton",
 "borderSize": 0,
 "width": "5.17%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "45.75%",
 "horizontalAlign": "center",
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "minHeight": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand",
 "maxHeight": 60
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.42,
   "image": "this.AnimatedImageResource_2C0DBB6A_3794_C51D_41C1_20F62D5FEED2",
   "yaw": 63.38,
   "pitch": -29.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_20B5667C_377D_4FF5_41C3_35C1C2CD2B27",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_210967D7_377C_CD33_41B7_810EBA811434, this.camera_441C64AF_5656_B634_41C9_67537FF73008); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_1_HS_0_0_0_map.gif",
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
   "hfov": 5.62,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_1_HS_0_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -164.91
  }
 ],
 "id": "overlay_463F80B7_5652_EE14_41B8_366B14AD8E36",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC, this.camera_453B9552_5656_B66C_41D3_81A31F11568D); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_1_HS_0_0_0_map.gif",
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
   "hfov": 8.06,
   "image": "this.AnimatedImageResource_44DA9C94_5652_5614_41BF_5C080DCECF7B",
   "yaw": -68.94,
   "pitch": 4.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_58398061_5652_6E2C_41C0_68109F96C3FE",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.72,
   "image": "this.AnimatedImageResource_F9C0D0B4_B189_1C76_41E5_6C14A2C72201",
   "yaw": 46.48,
   "pitch": -40.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_81C59435_B18F_0476_41E4_C670FE4E89A6",
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_206D7430_377D_430D_41A1_D0824023A793, this.camera_44FBD4F6_5656_B615_41D1_E47B328286EE); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.48,
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
   "hfov": 4.4,
   "image": "this.AnimatedImageResource_2C02BB69_3794_C51E_41B8_A5CB74E7AF6E",
   "yaw": 23.38,
   "pitch": -15.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_210997D7_377C_CD33_41C1_61C9F15C28F1",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D, this.camera_4556B52C_5656_B635_41C7_5FF6FEFA2207); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_1_HS_0_0_0_map.gif",
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
   "hfov": 5.15,
   "image": "this.AnimatedImageResource_2C02CB69_3794_C51E_418C_8AC4ECA80999",
   "yaw": -50.32,
   "pitch": -14.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2109F7D7_377C_CD33_4184_CED83E5CC951",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6, this.camera_454D5532_5656_B62C_41C8_FCB5AB897317); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_1_HS_1_0_0_map.gif",
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
   "hfov": 4.62,
   "image": "this.AnimatedImageResource_2C034B69_3794_C51E_41C8_1E4B5BCE1FD0",
   "yaw": 146.99,
   "pitch": -16.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2109D7D8_377C_CD3D_41AA_0F815B0006ED",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_1_HS_2_0_0_map.gif",
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
   "hfov": 3.21,
   "image": "this.AnimatedImageResource_2C038B6A_3794_C51D_41B9_58C347F02D3A",
   "yaw": 154.05,
   "pitch": -42.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_210E27D8_377C_CD3D_41A8_E966672DF840",
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_1_HS_3_0_0_map.gif",
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
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_0_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 38.81
  }
 ],
 "id": "overlay_219F7961_357F_C511_41CA_82D938E86E96",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_0_0_0_map.gif",
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
   "hfov": 4.68,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_1_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 53.64
  }
 ],
 "id": "overlay_219F6963_357F_C513_41C6_6276E1F7C79C",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_1_0_0_map.gif",
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
   "hfov": 4.77,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_2_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 16.01
  }
 ],
 "id": "overlay_219E8963_357F_C513_4193_50C6A6DBC419",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_2_0_0_map.gif",
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
   "hfov": 4.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_3_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.99
  }
 ],
 "id": "overlay_219EB963_357F_C513_41B3_8D03AA312151",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_3_0_0_map.gif",
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
   "hfov": 3.48,
   "image": "this.AnimatedImageResource_2CFFCB67_3794_C513_41BB_AC0C7460A80A",
   "yaw": -35.59,
   "pitch": -13.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_219EA963_357F_C513_41CA_0983BC19E08A",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC, this.camera_438E343B_5656_B61C_41C9_A3F30AA6AF41); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_4_0_0_map.gif",
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
   "hfov": 3.54,
   "image": "this.AnimatedImageResource_2CF86B67_3794_C513_41C7_3427FAF41147",
   "yaw": 125.21,
   "pitch": -7.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_219EC963_357F_C513_41C9_9A213F73FA03",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B, this.camera_43BE8440_5656_B66C_41A6_2B3E69DADB24); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_5_0_0_map.gif",
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
   "hfov": 3.56,
   "image": "this.AnimatedImageResource_2CFEBB66_3794_C515_41C0_A5769CE2AA80",
   "yaw": -38.95,
   "pitch": -3.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2770B1AD_357F_4516_41BF_55C46007FC5E",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_219F3961_357F_C50E_41C0_66D0765661C1, this.camera_4074345B_5656_B61C_41BF_43A99C5458E4); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_1_HS_0_0_0_map.gif",
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
   "hfov": 4.01,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_1_HS_1_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.35
  }
 ],
 "id": "overlay_277341AD_357F_4516_41C7_FCD429D095D2",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20FF1406_377C_C312_41C0_C60D1035E762, this.camera_40663460_5656_B62C_41D3_8F4848699379); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_1_HS_1_0_0_map.gif",
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
   "hfov": 6.52,
   "image": "this.AnimatedImageResource_2C0D3B6A_3794_C51D_41C5_22C2702F46A0",
   "yaw": 121.24,
   "pitch": -36.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_201F7E63_377D_DF13_41A9_B3FEC28508C1",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA, this.camera_450E754D_5656_B674_41D3_9CCB1CF69697); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_1_HS_0_0_0_map.gif",
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
   "hfov": 3.44,
   "image": "this.AnimatedImageResource_2C0C2B6A_3794_C51D_41C4_F8314BC3F663",
   "yaw": 11.23,
   "pitch": -15.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_20711401_377D_C30F_41C5_F89C5F36B508",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1702555_B189_0436_41E4_29524536EC25, this.camera_43A8B446_5656_B674_4179_4AE8614157B9); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_1_HS_0_0_0_map.gif",
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
   "hfov": 3.34,
   "image": "this.AnimatedImageResource_2C02DB6A_3794_C51D_419C_3A41A6BF8999",
   "yaw": -55.9,
   "pitch": -20.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_20714402_377D_C30D_41CB_0C4D2DD62095",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1795733_B189_0473_41D4_DC67363653D6, this.camera_405B544B_5656_B67C_41B5_D4A725F27436); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_1_HS_1_0_0_map.gif",
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
   "hfov": 3.44,
   "image": "this.AnimatedImageResource_2C036B6A_3794_C51D_4194_985373713630",
   "yaw": 4.39,
   "pitch": -9.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_20715402_377D_C30D_41C7_89CE54BA4E71",
 "data": {
  "label": "Arrow 02 Left"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_210967D7_377C_CD33_41B7_810EBA811434, this.camera_40555450_5656_B66D_41C1_36FB73710515); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_1_HS_2_0_0_map.gif",
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
   "hfov": 7.68,
   "image": "this.AnimatedImageResource_2C0CFB6A_3794_C51D_41C6_CEE134C13911",
   "yaw": 92.6,
   "pitch": -18.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_27352EB6_3573_FF75_41C6_2BF91E1518A6",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2, this.camera_40DDA47B_5656_B613_4164_8F792E5E9AB4); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_1_HS_0_0_0_map.gif",
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
   "hfov": 7.36,
   "image": "this.AnimatedImageResource_F9B840B6_B189_1C72_41E2_169CF6A76338",
   "yaw": 116.71,
   "pitch": -24.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4A4F902_B199_0C12_41E5_51DA0EE76330",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6, this.camera_439C2435_5656_B614_41C8_60345DE8FC1F); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.71,
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
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.96,
   "image": "this.AnimatedImageResource_F9C5D0B3_B189_1C72_41D7_734941815B9D",
   "yaw": -141.2,
   "pitch": -26.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98AAF63B_B187_0473_41E2_16C5BA17A13F",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6, this.camera_45788537_5656_B613_41C3_3EB480C96899); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.2,
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
   "hfov": 2.88,
   "image": "this.AnimatedImageResource_F9C5A0B3_B189_1C72_41D9_00742B9E6949",
   "yaw": -39.85,
   "pitch": -9.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B516C9D_B1FB_0436_41CF_BB18896A075B",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA, this.camera_4577253C_5656_B615_41C3_1BF5D93D87D8); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 2.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.85,
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
   "hfov": 4.39,
   "image": "this.AnimatedImageResource_F9C610B3_B189_1C72_41E4_F75B63151649",
   "yaw": -7.41,
   "pitch": -3.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9FFA77C9_B1F9_041F_41C6_3632C3FD6AC5",
 "data": {
  "label": "Arrow 02a Left-Up"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_21C1346E_3773_C315_41AC_B3C215A35BC9, this.camera_451DA548_5656_B67C_41AC_689BB40E8746); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.41,
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
   "hfov": 3.02,
   "image": "this.AnimatedImageResource_F942DD3E_B28B_0472_41D6_328919EFF975",
   "yaw": -39.15,
   "pitch": -11.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_8EC25C71_B289_040E_41CE_190BC69C4423",
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_206D7430_377D_430D_41A1_D0824023A793, this.camera_45630542_5656_B66C_41AE_2E4B3497B49D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.15,
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
 "transparencyActive": true,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "visible": false,
 "cursor": "hand",
 "maxHeight": 58,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "transparencyActive": true,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "maxWidth": 49,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 30,
 "width": 100,
 "class": "IconButton",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": 8,
 "horizontalAlign": "center",
 "mode": "push",
 "height": 75,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand",
 "maxHeight": 37
},
{
 "transparencyActive": true,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 58,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "transparencyActive": true,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 58,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "items": [
  {
   "hfov": 6.06,
   "image": "this.AnimatedImageResource_2C0E9B6B_3794_C513_41B7_B2CEAC66F670",
   "yaw": 76.42,
   "pitch": -14.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_21C0946E_3773_C315_41C9_C8611B6C11F7",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A08D806A_B189_1C12_41C4_86902CFBFBEB, this.camera_F67E5227_B289_3C12_419C_5890205F491A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_1_HS_0_0_0_map.gif",
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
   "hfov": 5.94,
   "image": "this.AnimatedImageResource_2C0EDB6B_3794_C513_41AC_DA9E0181B99C",
   "yaw": -54.45,
   "pitch": -41.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_21C0D46E_3773_C315_41B3_13BCD91B40A0",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1702555_B189_0436_41E4_29524536EC25, this.camera_44ACD521_5656_B62F_41D1_C8F385F421AA); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_1_HS_2_0_0_map.gif",
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
   "hfov": 5.96,
   "image": "this.AnimatedImageResource_F9BEF0B6_B189_1C72_41D5_74BC6647A544",
   "yaw": 100.13,
   "pitch": -42.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A5F5E093_B199_7C32_41DE_427D49044C08",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_23676BEF_377F_C513_41A2_B7553E85CFA7, this.camera_455A2527_5656_B633_41D0_84AF3DEA8A05); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.13,
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
   "hfov": 7.79,
   "image": "this.AnimatedImageResource_2C008B69_3794_C51F_41B8_BCD8E5D75D1B",
   "yaw": 128.27,
   "pitch": -15.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_20528B10_377C_C50D_41A2_214297EAF7FE",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A1702555_B189_0436_41E4_29524536EC25, this.camera_45D33563_5656_B62C_41C7_0D4CBF0A5F0F); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_1_HS_0_0_0_map.gif",
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
   "hfov": 7.66,
   "image": "this.AnimatedImageResource_2C012B69_3794_C51F_41B5_B2E8C83EF423",
   "yaw": 36.57,
   "pitch": -18.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2052AB10_377C_C50D_419B_561BD8DB9B4A",
 "data": {
  "label": "Circle Point 03a"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82, this.camera_45FC856E_5656_B635_41D3_0E4D482DE95C); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_1_HS_1_0_0_map.gif",
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
   "hfov": 3.29,
   "image": "this.AnimatedImageResource_2C014B69_3794_C51E_41C9_B9CE16FB406D",
   "yaw": -53.38,
   "pitch": -15.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2052CB10_377C_C50D_41CA_8D7C67738D12",
 "data": {
  "label": "Arrow 02 Left"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4, this.camera_45CDA569_5656_B63C_41A7_7EB1DD568656); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_1_HS_2_0_0_map.gif",
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
   "hfov": 3.63,
   "image": "this.AnimatedImageResource_2C018B69_3794_C51E_41BC_9619B7FAB001",
   "yaw": -49.75,
   "pitch": -8.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2052DB10_377C_C50D_41BC_0AF9DDE25CD5",
 "data": {
  "label": "Arrow 02"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_1_HS_3_0_0_map.gif",
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
   "hfov": 3.5,
   "image": "this.AnimatedImageResource_2C020B69_3794_C51E_41CB_03D0DCAC3A2F",
   "yaw": -46.98,
   "pitch": -15.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2052EB10_377C_C50D_41B5_CAC9EA8D902A",
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_1_HS_4_0_0_map.gif",
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
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 110,
 "borderRadius": 0,
 "borderSize": 0,
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "height": 110,
 "layout": "horizontal",
 "gap": 10,
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
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
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "right": "0%",
 "width": "91.304%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "height": "85.959%",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 3,
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Image_85724E8B_B187_0412_41B9_D70739EC2A7E",
 "maxWidth": 210,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "left": "0%",
 "width": "36.649%",
 "class": "Image",
 "borderSize": 0,
 "url": "skin/Image_85724E8B_B187_0412_41B9_D70739EC2A7E.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "12.78%",
 "horizontalAlign": "center",
 "height": "46.617%",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image77346"
 },
 "maxHeight": 62
},
{
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "maxWidth": 3000,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "left": "0%",
 "right": "0%",
 "class": "Image",
 "borderSize": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": 53,
 "horizontalAlign": "center",
 "height": 2,
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "white line"
 },
 "maxHeight": 2
},
{
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
 "backgroundOpacity": 0,
 "paddingLeft": 30,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 1199,
 "class": "Container",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "height": 51,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "gap": 3,
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-button set container"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_FA94E7B6_B287_0472_41E4_885B6E4B9BB1",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "-0.12%",
 "width": 112,
 "class": "Button",
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "shadowColor": "#000000",
 "bottom": "-30.51%",
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "fontSize": 12,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK TO TOUR",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "iconWidth": 32,
 "iconBeforeLabel": true,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button photoalbum"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadowOpacity": 0.3,
 "right": "10%",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "bottom": "5%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "right": "10%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "horizontalAlign": "right",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadowOpacity": 0.3,
 "right": "10%",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "bottom": "5%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "right": "10%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "horizontalAlign": "right",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "bottom": "7%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadowOpacity": 0.3,
 "right": "10%",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "bottom": "5%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "right": "10%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "horizontalAlign": "right",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.TabPanel_8F9AA4BA_B2B9_047D_41D9_A73DDB4D9E3E"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "bottom": "7%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "bottom": "7%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "show": "this.mainPlayList.set('selectedIndex', 27)",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadowOpacity": 0.3,
 "right": "15%",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "bottom": "7%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadowOpacity": 0.3,
 "right": "10%",
 "borderRadius": 0,
 "borderSize": 0,
 "minWidth": 1,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "bottom": "5%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "shadow": true,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "right": "10%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "horizontalAlign": "right",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2C07DB69_3794_C51F_4180_B3C0FED558D8",
 "levels": [
  {
   "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C006B69_3794_C51F_41BE_D841843E23D4",
 "levels": [
  {
   "url": "media/panorama_20A8765B_377F_4F33_41C3_EE4AF3E06EF2_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2CFA7B67_3794_C512_418E_08E1A6FAFAC7",
 "levels": [
  {
   "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2CF8DB67_3794_C512_41A7_1B2FC72EE1C7",
 "levels": [
  {
   "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2CF94B67_3794_C512_41B7_F14447340099",
 "levels": [
  {
   "url": "media/panorama_20FF1406_377C_C312_41C0_C60D1035E762_1_HS_3_0.png",
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
 "id": "AnimatedImageResource_2CF9FB67_3794_C512_41C4_030EBC3F2789",
 "levels": [
  {
   "url": "media/panorama_251B3E4F_3773_3F13_41CB_2B9E28EA87AF_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C06FB68_3794_C51E_41BE_52B3CE02B01F",
 "levels": [
  {
   "url": "media/panorama_22AA0BFA_377F_44FD_41C4_D58F8CC974B6_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C041B68_3794_C51D_41CA_5BED1F28A503",
 "levels": [
  {
   "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C04BB68_3794_C51D_41C9_367963F34EB4",
 "levels": [
  {
   "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2C04DB68_3794_C51E_41C7_08FA6E107278",
 "levels": [
  {
   "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_1_HS_2_0.png",
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
 "id": "AnimatedImageResource_2C057B68_3794_C51E_41C6_A130675FB2A7",
 "levels": [
  {
   "url": "media/panorama_2173C46E_3775_C315_41C6_18D1FBE51CB4_1_HS_3_0.png",
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
 "id": "AnimatedImageResource_2C0E0B6B_3794_C513_41C7_2E37E52E52A4",
 "levels": [
  {
   "url": "media/panorama_2057285E_3773_4335_41BC_EDBEC36A2D55_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2CF3BB66_3794_C515_41B8_6C68E9C7B65E",
 "levels": [
  {
   "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2CF3DB66_3794_C515_41C4_E8735D9C0928",
 "levels": [
  {
   "url": "media/panorama_25B89DFA_3775_7CFD_41B9_B9AA3E3F50EC_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2CF89B67_3794_C513_4192_C5F25F6AC8D4",
 "levels": [
  {
   "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2CF8CB67_3794_C513_41CA_A5D9206F8785",
 "levels": [
  {
   "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2CF97B67_3794_C513_4194_DBAB72A02498",
 "levels": [
  {
   "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_1_HS_2_0.png",
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
 "id": "AnimatedImageResource_2CF9AB67_3794_C512_41C0_D40956A91D10",
 "levels": [
  {
   "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_1_HS_3_0.png",
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
 "id": "AnimatedImageResource_2CF9DB67_3794_C512_41B5_86DC1D35F8A0",
 "levels": [
  {
   "url": "media/panorama_206D7430_377D_430D_41A1_D0824023A793_1_HS_4_0.png",
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
 "id": "AnimatedImageResource_2C062B68_3794_C51E_41A7_FE3E7B167BE6",
 "levels": [
  {
   "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C064B68_3794_C51E_419A_82356C8E69A5",
 "levels": [
  {
   "url": "media/panorama_2340D5C5_377F_4D17_41B7_84C68633FF40_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2C072B69_3794_C51F_41C6_D55A9F8518B7",
 "levels": [
  {
   "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C074B69_3794_C51F_41BE_B8ADE07B8149",
 "levels": [
  {
   "url": "media/panorama_23676BEF_377F_C513_41A2_B7553E85CFA7_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2CFD1B66_3794_C515_41B6_7DD319DB5F64",
 "levels": [
  {
   "url": "media/panorama_275C2D36_357D_DD75_41BB_EC2879FE68B4_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C0DBB6A_3794_C51D_41C1_20F62D5FEED2",
 "levels": [
  {
   "url": "media/panorama_20B5967B_377D_4FF2_41B4_4C8D02F57A6D_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_44DA9C94_5652_5614_41BF_5C080DCECF7B",
 "levels": [
  {
   "url": "media/panorama_463FA0B6_5652_EE14_41D1_5CF33AEFDF5C_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2C02BB69_3794_C51E_41B8_A5CB74E7AF6E",
 "levels": [
  {
   "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C02CB69_3794_C51E_418C_8AC4ECA80999",
 "levels": [
  {
   "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2C034B69_3794_C51E_41C8_1E4B5BCE1FD0",
 "levels": [
  {
   "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_1_HS_2_0.png",
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
 "id": "AnimatedImageResource_2C038B6A_3794_C51D_41B9_58C347F02D3A",
 "levels": [
  {
   "url": "media/panorama_210967D7_377C_CD33_41B7_810EBA811434_1_HS_3_0.png",
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
 "id": "AnimatedImageResource_2CFFCB67_3794_C513_41BB_AC0C7460A80A",
 "levels": [
  {
   "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_4_0.png",
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
 "id": "AnimatedImageResource_2CF86B67_3794_C513_41C7_3427FAF41147",
 "levels": [
  {
   "url": "media/panorama_219F3961_357F_C50E_41C0_66D0765661C1_1_HS_5_0.png",
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
 "id": "AnimatedImageResource_2CFEBB66_3794_C515_41C0_A5769CE2AA80",
 "levels": [
  {
   "url": "media/panorama_2770A1AD_357F_4516_41C7_38B0DE433C4B_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C0D3B6A_3794_C51D_41C5_22C2702F46A0",
 "levels": [
  {
   "url": "media/panorama_201F4E63_377D_DF13_41B9_DFBB4DCA9E82_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C0C2B6A_3794_C51D_41C4_F8314BC3F663",
 "levels": [
  {
   "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C02DB6A_3794_C51D_419C_3A41A6BF8999",
 "levels": [
  {
   "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2C036B6A_3794_C51D_4194_985373713630",
 "levels": [
  {
   "url": "media/panorama_20710401_377D_C30F_41BD_78CBEB0DD7E6_1_HS_2_0.png",
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
 "id": "AnimatedImageResource_2C0CFB6A_3794_C51D_41C6_CEE134C13911",
 "levels": [
  {
   "url": "media/panorama_27353EB6_3573_FF75_41C7_1576554FC358_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C0E9B6B_3794_C513_41B7_B2CEAC66F670",
 "levels": [
  {
   "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C0EDB6B_3794_C513_41AC_DA9E0181B99C",
 "levels": [
  {
   "url": "media/panorama_21C1346E_3773_C315_41AC_B3C215A35BC9_1_HS_2_0.png",
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
 "id": "AnimatedImageResource_2C008B69_3794_C51F_41B8_BCD8E5D75D1B",
 "levels": [
  {
   "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_2C012B69_3794_C51F_41B5_B2E8C83EF423",
 "levels": [
  {
   "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_1_HS_1_0.png",
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
 "id": "AnimatedImageResource_2C014B69_3794_C51E_41C9_B9CE16FB406D",
 "levels": [
  {
   "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_1_HS_2_0.png",
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
 "id": "AnimatedImageResource_2C018B69_3794_C51E_41BC_9619B7FAB001",
 "levels": [
  {
   "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_1_HS_3_0.png",
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
 "id": "AnimatedImageResource_2C020B69_3794_C51E_41CB_03D0DCAC3A2F",
 "levels": [
  {
   "url": "media/panorama_20526B10_377C_C50D_41B0_AAAFF207B4EA_1_HS_4_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ]
},
{
 "transparencyActive": true,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 58,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "transparencyActive": true,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "class": "IconButton",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 58,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "layout": "horizontal",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 120,
 "class": "Button",
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "height": 40,
 "fontSize": 12,
 "iconHeight": 0,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "ABOUT PROJECT",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "iconWidth": 0,
 "iconBeforeLabel": true,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button house info"
 },
 "shadowSpread": 1
},
{
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 130,
 "class": "Button",
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "fontSize": 12,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "PANORAMA LIST",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "iconWidth": 32,
 "iconBeforeLabel": true,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button panorama list"
 },
 "shadowSpread": 1
},
{
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 90,
 "class": "Button",
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "fontSize": 12,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "LOCATION",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "iconWidth": 32,
 "iconBeforeLabel": true,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button location"
 },
 "shadowSpread": 1
},
{
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 103,
 "class": "Button",
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "fontSize": 12,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "FLOORPLAN",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "iconWidth": 32,
 "visible": false,
 "iconBeforeLabel": true,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button floorplan"
 },
 "shadowSpread": 1
},
{
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 112,
 "class": "Button",
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "click": "this.mainPlayList.set('selectedIndex', 27)",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "fontSize": 12,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "PHOTOALBUM",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "iconWidth": 32,
 "iconBeforeLabel": true,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button photoalbum"
 },
 "shadowSpread": 1
},
{
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Montserrat",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 107,
 "class": "Button",
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "fontSize": 12,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "BACK TO TOUR",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "iconWidth": 32,
 "iconBeforeLabel": true,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button realtor"
 },
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "85%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "borderSize": 0,
 "width": "50%",
 "borderRadius": 0,
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxWidth": 60,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "width": "25%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "85%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "borderSize": 0,
 "width": "50%",
 "borderRadius": 0,
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "maxWidth": 60,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "width": "25%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "minHeight": 50,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 70,
 "scrollBarColor": "#333333",
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "class": "ThumbnailGrid",
 "itemMaxWidth": 1000,
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "borderRadius": 5,
 "itemLabelFontFamily": "Montserrat",
 "width": "100%",
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "verticalAlign": "middle",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "height": "100%",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "shadow": false,
 "itemOpacity": 1,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "backgroundOpacity": 0.05,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "borderSize": 0,
 "itemLabelTextDecoration": "none",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "minWidth": 1,
 "itemLabelFontWeight": "normal",
 "propagateClick": false,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemLabelFontColor": "#666666",
 "backgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "itemHeight": 156,
 "paddingTop": 10,
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailShadow": false,
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemLabelGap": 7,
 "data": {
  "name": "ThumbnailList"
 },
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailWidth": 220
},
{
 "verticalAlign": "middle",
 "children": [
  "this.Image_88E9DEF9_B279_05FF_41E5_83952AF6D19E"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "85%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "borderSize": 0,
 "width": "15%",
 "borderRadius": 0,
 "minWidth": 400,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxWidth": 60,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "width": "25%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "tabsFontWeight": "normal",
 "tabsBackgroundColorRatios": [
  0,
  0.55,
  0.99,
  1
 ],
 "id": "TabPanel_8F9AA4BA_B2B9_047D_41D9_A73DDB4D9E3E",
 "tabsRollOverFontWeight": "bold",
 "tabsFontFamily": "Bahnschrift",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "show": "this.setMediaBehaviour(this.playList_434F93CE_5656_B274_41C1_C0E832E911B9, 0)",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "selectedTabBackgroundColorRatios": [
  0,
  0.05,
  0.29,
  0.37,
  0.64,
  1,
  1
 ],
 "class": "TabPanel",
 "borderSize": 0,
 "tabsPosition": "top",
 "tabsBackgroundColor": [
  "#333333",
  "#333333",
  "#333333",
  "#333333"
 ],
 "borderRadius": 5,
 "tabsTextDecoration": "none",
 "minWidth": 1,
 "tabsFontStyle": "normal",
 "tabsFontSize": 12,
 "propagateClick": false,
 "selectedTabFontColor": "#000000",
 "pagePaddingRight": 0,
 "width": "97.019%",
 "tabsRollOverFontColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "tabsBackgroundOpacity": 1,
 "tabsAlign": "normal",
 "pagePaddingTop": 0,
 "selectedTabBackgroundColor": [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#FFFFFF"
 ],
 "pagePaddingBottom": 0,
 "tabsRollOverBackgroundColorRatios": [
  1
 ],
 "tabsSize": 32,
 "tabsRollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "height": "80.639%",
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 1,
 "selectedTabBackgroundOpacity": 0,
 "data": {
  "name": "TabPanel942"
 },
 "overflow": "visible",
 "scrollBarWidth": 10,
 "pagePaddingLeft": 0,
 "selectedTabFontWeight": "bold",
 "pages": [
  {
   "verticalAlign": "top",
   "children": [
    "this.MapViewer"
   ],
   "backgroundOpacity": 1,
   "paddingLeft": 0,
   "scrollBarColor": "#000000",
   "paddingRight": 0,
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5,
   "class": "TabPanelPage",
   "borderSize": 0,
   "width": "100%",
   "borderRadius": 0,
   "minWidth": 20,
   "propagateClick": false,
   "backgroundColorRatios": [
    0
   ],
   "scrollBarMargin": 2,
   "contentOpaque": false,
   "horizontalAlign": "left",
   "backgroundColor": [
    "#FFFFFF"
   ],
   "label": "Ground Floor ",
   "backgroundColorDirection": "vertical",
   "paddingTop": 0,
   "layout": "absolute",
   "gap": 10,
   "minHeight": 20,
   "height": "100%",
   "shadow": false,
   "paddingBottom": 0,
   "data": {
    "name": "TabPanelPage943"
   },
   "overflow": "scroll",
   "scrollBarWidth": 10
  },
  {
   "verticalAlign": "top",
   "children": [
    "this.MapViewer_8FCC5674_B2BF_04F6_41DF_CF9D24517C4A"
   ],
   "backgroundOpacity": 1,
   "paddingLeft": 0,
   "scrollBarColor": "#000000",
   "paddingRight": 0,
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5,
   "class": "TabPanelPage",
   "borderSize": 0,
   "width": "100%",
   "borderRadius": 0,
   "minWidth": 20,
   "propagateClick": false,
   "backgroundColorRatios": [
    0
   ],
   "scrollBarMargin": 2,
   "contentOpaque": false,
   "horizontalAlign": "left",
   "backgroundColor": [
    "#FFFFFF"
   ],
   "label": "First Floor",
   "backgroundColorDirection": "vertical",
   "paddingTop": 0,
   "layout": "absolute",
   "gap": 10,
   "minHeight": 20,
   "height": "100%",
   "shadow": false,
   "paddingBottom": 0,
   "data": {
    "name": "TabPanelPage1538"
   },
   "overflow": "scroll",
   "scrollBarWidth": 10
  },
  {
   "verticalAlign": "top",
   "children": [
    "this.MapViewer_8C2DFA99_B2BF_0C3E_4164_71BD72F04B18"
   ],
   "backgroundOpacity": 1,
   "paddingLeft": 0,
   "scrollBarColor": "#000000",
   "paddingRight": 0,
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5,
   "class": "TabPanelPage",
   "borderSize": 0,
   "width": "100%",
   "borderRadius": 0,
   "minWidth": 20,
   "propagateClick": false,
   "backgroundColorRatios": [
    0
   ],
   "scrollBarMargin": 2,
   "contentOpaque": false,
   "horizontalAlign": "left",
   "backgroundColor": [
    "#FFFFFF"
   ],
   "label": "Terrace",
   "backgroundColorDirection": "vertical",
   "paddingTop": 0,
   "layout": "absolute",
   "gap": 10,
   "minHeight": 20,
   "height": "100%",
   "shadow": false,
   "paddingBottom": 0,
   "data": {
    "name": "TabPanelPage1555"
   },
   "overflow": "scroll",
   "scrollBarWidth": 10
  }
 ],
 "tabsFontColor": "#FFFFFF",
 "tabsRollOverBackgroundOpacity": 0.78
},
{
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "middle",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "55%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "borderSize": 0,
 "width": "45%",
 "borderRadius": 0,
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "minHeight": 1,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "maxWidth": 60,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "width": "25%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "left": "0%",
 "width": "100%",
 "class": "Image",
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "horizontalAlign": "center",
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "maxHeight": 1000
},
{
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "minHeight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 520,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "class": "Container",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "right": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
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
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "bottom": 0,
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
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "minHeight": 1,
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "height": "100%",
 "layout": "horizontal",
 "gap": 10,
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container arrows"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "minHeight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 520,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "class": "Container",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "borderSize": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 100,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 20,
 "horizontalAlign": "right",
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "minHeight": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxHeight": 60
},
{
 "id": "Image_88E9DEF9_B279_05FF_41E5_83952AF6D19E",
 "maxWidth": 943,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "left": "0%",
 "width": "100%",
 "class": "Image",
 "borderSize": 0,
 "url": "skin/Image_88E9DEF9_B279_05FF_41E5_83952AF6D19E.png",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "11.4%",
 "horizontalAlign": "center",
 "height": "74.877%",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image89507"
 },
 "maxHeight": 611
},
{
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "minHeight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 520,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "class": "Container",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "borderSize": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 100,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:4.96vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 20,
 "horizontalAlign": "right",
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "minHeight": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxHeight": 60
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": "0.47%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "97.957%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
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
 "playbackBarHeight": 10,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "show": "this.setMediaBehaviour(this.playList_434F63CE_5656_B274_41AA_C09F25CB28E6, 0)",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "1.84%",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 6,
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "minHeight": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer_8FCC5674_B2BF_04F6_41DF_CF9D24517C4A",
 "left": "0.29%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "98.135%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
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
 "playbackBarHeight": 10,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "show": "this.setMediaBehaviour(this.playList_434C13CE_5656_B274_41C7_5132171D4A9B, 0)",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "1.83%",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 6,
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "minHeight": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer_8C2DFA99_B2BF_0C3E_4164_71BD72F04B18",
 "left": "0.11%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "98.313%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
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
 "playbackBarHeight": 10,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "1.84%",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 6,
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "minHeight": 1,
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "borderSize": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 100,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.96vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarWidth": 10
},
{
 "transparencyActive": false,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 20,
 "horizontalAlign": "right",
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "minHeight": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxHeight": 60
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
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
 "playbackBarHeight": 10,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 6,
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "minHeight": 1,
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
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
 "playbackBarHeight": 10,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "show": "this.mainPlayList.set('selectedIndex', 27)",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 6,
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "minHeight": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "transparencyActive": false,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "width": "10%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 20,
 "horizontalAlign": "right",
 "mode": "push",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "minHeight": 50,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxHeight": 60
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "left": "0%",
 "width": "100%",
 "class": "Image",
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "top": "0%",
 "horizontalAlign": "center",
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "maxHeight": 1000
},
{
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "minHeight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 520,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "class": "Container",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#333333",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Welcome to The Cape Town Beachhouse</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.42vh;font-family:'Bebas Neue Bold';\">FIND YOUR HEAVEN BY THE SEA.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">Discover your dream escape at The Cape Town Beachhouse on Sunset Beach. Wake up to breathtaking, panoramic views of Table Mountain, and step directly onto the pristine beach, perfect for relaxation, kitesurfing, and other water sports. Whether you\u2019re a family seeking adventure or a digital nomad in search of a sustainable, luxurious retreat, our exclusive accommodations redefine comfort and style.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">- Heated floors for cozy comfort year-round</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">- Full air conditioning throughout the property</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">- Custom-made, high-quality furniture for an elegant and relaxing atmosphere</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">- High-speed internet to stay connected effortlessly</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">- A private barbecue area for unforgettable evenings with family and friends</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">- Whirlpool/Jacuzzi for ultimate relaxation</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">- Full solar power for a sustainable, uninterrupted experience</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">Every detail has been thoughtfully curated to provide the perfect balance of luxury and eco-conscious living. Whether you\u2019re unwinding after a day on the water or working remotely with an ocean view, The Cape Town Beachhouse is your exclusive getaway.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Why choose us:</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">Luxury: We believe in providing the finest experiences for our guests. Every room is designed with comfort and elegance in mind, featuring premium furnishings and breathtaking views.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">Sustainability: As stewards of this beautiful environment, we prioritize sustainable practices to protect and preserve our beachfront for future generations. From eco-friendly building materials to energy-efficient operations, we are committed to minimizing our impact.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\"> Customer Satisfaction: Our guests\u2019 comfort and happiness are at the heart of everything we do. We go above and beyond to ensure that every stay is memorable, personalizing services to meet individual needs.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10
},
{
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "80%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "height": "30%",
 "layout": "absolute",
 "gap": 10,
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container separator"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10
},
{
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Bebas Neue Bold",
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "46%",
 "class": "Button",
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 1,
 "minHeight": 1,
 "iconBeforeLabel": true,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "shadowSpread": 1
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.42vh;font-family:'Bebas Neue Bold';\">9 hastula way, 7441 sunset beach, cape town,</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:3.42vh;font-family:'Bebas Neue Bold';\">south africa</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.96vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">Nestled on the stunning Sunset Beach, our property has been completely renovated from top to bottom, with every element carefully curated and personally selected to reflect both comfort and sophistication.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 207,
 "class": "Button",
 "borderSize": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 59,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontSize": 34,
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 1,
 "minHeight": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "visible": false,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button"
 },
 "shadowSpread": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "45%",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.84vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "borderSize": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "minHeight": 1,
 "height": "80%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "maxWidth": 200,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "width": "25%",
 "class": "Image",
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "maxHeight": 200
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "borderSize": 0,
 "width": "75%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.76vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.65vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.65vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.65vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.88vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
}],
 "height": "100%",
 "desktopMipmappingEnabled": false
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
