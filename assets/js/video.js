var URL_PLAYLIST = 'http://83.146.116.111:8080/streams/car1_cam1/index.m3u8';
var URL_PLAYLIST1 = 'http://83.146.116.111:8080/streams/car2_cam1/index.m3u8';
atachVideo('video17', URL_PLAYLIST);
atachVideo('video16', URL_PLAYLIST);
atachVideo('video15', URL_PLAYLIST);
atachVideo('video14', URL_PLAYLIST);
atachVideo('video13', URL_PLAYLIST);
atachVideo('video12', URL_PLAYLIST);
atachVideo('video11', URL_PLAYLIST);
atachVideo('video', URL_PLAYLIST);
atachVideo('video2',URL_PLAYLIST1);
atachVideo('video3',URL_PLAYLIST1);
atachVideo('video4',URL_PLAYLIST1);
atachVideo('video5',URL_PLAYLIST1);
atachVideo('video6',URL_PLAYLIST1);
atachVideo('video7',URL_PLAYLIST1);
atachVideo('video8',URL_PLAYLIST1);
atachVideo('video9',URL_PLAYLIST1);
atachVideo('video10',URL_PLAYLIST1);
var CONFIG = {

    autoStartLoad: true,
    startPosition: -1,
    capLevelToPlayerSize: false,
    debug: false,
    defaultAudioCodec: undefined,
    initialLiveManifestSize: 1,
    maxBufferLength: 30,
    maxMaxBufferLength: 600,
    maxBufferSize: 60 * 1000 * 1000,
    maxBufferHole: 0.5,
    lowBufferWatchdogPeriod: 0.5,
    highBufferWatchdogPeriod: 3,
    nudgeOffset: 0.1,
    nudgeMaxRetry: 3,
    maxFragLookUpTolerance: 0.2,
    liveSyncDurationCount: 3,
    liveMaxLatencyDurationCount: 10,
    enableWorker: true,
    enableSoftwareAES: true,
    manifestLoadingTimeOut: 10000,
    manifestLoadingMaxRetry: 1,
    manifestLoadingRetryDelay: 500,
    manifestLoadingMaxRetryTimeout: 64000,
    startLevel: undefined,
    levelLoadingTimeOut: 10000,
    levelLoadingMaxRetry: 12,
    levelLoadingRetryDelay: 500,
    levelLoadingMaxRetryTimeout: 64000,
    fragLoadingTimeOut: 20000,
    fragLoadingMaxRetry: 20,
    fragLoadingRetryDelay: 500,
    fragLoadingMaxRetryTimeout: 64000,
    startFragPrefetch: false,
    appendErrorMaxRetry: 10,
    // loader: customLoader,
    // fLoader: customFragmentLoader,
    // pLoader: customPlaylistLoader,
    // xhrSetup: XMLHttpRequestSetupCallback,
    // fetchSetup: FetchSetupCallback,
    // abrController: customAbrController,
    timelineController: Hls.destroy,
    enableWebVTT: true,
    enableCEA708Captions: true,
    stretchShortVideoTrack: false,
    maxAudioFramesDrift: 1,
    forceKeyFrameOnDiscontinuity: true,
    abrEwmaFastLive: 5.0,
    abrEwmaSlowLive: 9.0,
    abrEwmaFastVoD: 4.0,
    abrEwmaSlowVoD: 15.0,
    abrEwmaDefaultEstimate: 500000,
    abrBandWidthFactor: 0.95,
    abrBandWidthUpFactor: 0.7,
    minAutoBitrate: 0
};
// var hls;

function atachVideo (video,playlistURL) {
    if (!Hls.isSupported()) {
        throw new Error('Not Support HLS');
    }


    video = document.getElementById(video);
    var hls = new Hls(CONFIG);


    hls.loadSource(playlistURL);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
       // video.play();
    });

    hls.on(Hls.Events.LEVEL_LOADED, function (event, data) {
        var level_duration = data.details.totalduration;
        hls.liveSyncPosition(level_duration);

        // hls.startLoad(startPosition=-1)
    });


    function onError(event, data) {
        if (data.fatal) {
            switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:

                    // попробуйте восстановить сетевую ошибку

                    console.warn("network error", data.details);

                    /*если проблема с загрузкой плейлиста то пробуем загрузить его снова.*/

                    if (["manifestLoadTimeOut", "manifestLoadError"].indexOf(data.details) !== -1) {
                        hls.loadSource(playlistURL);
                    } else {
                        hls.startLoad();
                    }
                    break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                    console.warn("media error");
                    hls.recoverMediaError();
                    break;
                default:
                    console.warn("fatal error, not can to recover");

                    // не может восстановить

                    hls.destroy();
                    break;
            }
        }
    }

    hls.on(Hls.Events.ERROR, onError);

    ``// listenAll(hls)
}


