// ==UserScript==
// @name         Battleknight Inventory Extender
// @namespace    https://battleknight.gameforge.com/
// @version      0.1
// @description  Allow the use of greyed out inventory boxes in BattleKnight
// @author       Amine Ismail
// @match        https://*.battleknight.gameforge.com/*
// @icon         https://www.google.com/s2/favicons?domain=mozilla.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function extendInventory() {
        let unsafeWindow = window.wrappedJSObject;
        if(unsafeWindow.BK_DragMove !== undefined) {
            let disabledSlots = document.getElementsByClassName("itemDisabledSlot");
            if (disabledSlots.length > 0) {
                unsafeWindow.g_inventorySize = { width: 8, depth: 7};
                unsafeWindow.BK_DragMove.prototype.validateDropToInventory= function(el){return true;}
                Array.prototype.forEach.call(disabledSlots, function(disabledSlot) {
                    disabledSlot.remove();
                });
            }
        }
    }

    setInterval(extendInventory, 500);
})();
