// ==UserScript==
// @name         Make Nanoboard great again!
// @namespace    https://nanoboard.iw.uni-due.de/
// @version      1.0.4
// @description  Als nicht Nano ins Nanoboard durch leichte Umgehung der Openid-Abfrage.
// @author       JR
// @match        https://benutzerverwaltung.uni-due.de/auth/openid_a/login/*
// @grant        none
// @downloadURL  https://tinyurl.com/v24q825
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByName('identity')[0].value = document.getElementsByName('identity')[0].value.replace('/nano', '');
})();
