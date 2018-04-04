// ==UserScript==
// @name        AlphaDecay
// @description Doesn't let ProtonMail spam your peers
// @homepage    http://github.com/moorchegue/alphadecay
// @match       https://mail.protonmail.com/*
// @version     0.0.1
// ==/UserScript==

search_timeout = 1000;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function remove_proton_signature() {
    while (true) {
        var composer = document.getElementsByTagName('iframe');
        if (composer.length) {
            var composer_document = composer[0].contentDocument ||
                composer[0].contentWindow.document;
            var proton_signature = composer_document.getElementsByClassName(
                'protonmail_signature_block-proton');
            if (proton_signature.length) {
                proton_signature[0].remove();
            }
        }
        await sleep(search_timeout);
    }
}

remove_proton_signature();
