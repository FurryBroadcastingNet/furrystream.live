
(function (window, videojs) {
    var player = window.player = videojs('example-video');
}(window, window.videojs));

converse.initialize({
    authentication: "anonymous",
    auto_login: true,
    auto_join_rooms: [
        "fbn@xmpp.mothnet.xyz",
    ],
    bosh_service_url: "https://conversejs.org/http-bind/",
    jid: "xmpp.mothnet.xyz",
    singleton: true,
    show_controlbox_by_default: true
});