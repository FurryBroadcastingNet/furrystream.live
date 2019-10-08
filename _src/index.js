
(function (window, videojs) {
    var player = window.player = videojs('example-video');
}(window, window.videojs));

converse.initialize({
    allow_logout: false, // No point in logging out when we have auto_login as true.
    allow_muc_invitations: false, // Doesn't make sense to allow because only
    // roster contacts can be invited
    allow_contact_requests: false, // Contacts from other servers cannot,
    // be added and anonymous users don't
    // know one another's JIDs, so disabling.
    authentication: 'anonymous',
    auto_login: true,
    auto_join_rooms: [
        'fbn@muc.mothnet.xyz',
    ],
    notify_all_room_messages: [
        'fbn@muc.mothnet.xyz',
    ],
    bosh_service_url: 'https://conversejs.org/http-bind/', // Please use this connection manager only for testing purposes
    jid: 'xmpp.mothnet.xyz', // XMPP server which allows anonymous login (doesn't
    // allow chatting with other XMPP servers).
    keepalive: true,
    hide_muc_server: true, // Federation is disabled, so no use in
    // showing the MUC server.
    play_sounds: true,
    show_controlbox_by_default: false,
    strict_plugin_dependencies: false,
});