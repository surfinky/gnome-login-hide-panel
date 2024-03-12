/* 
	Gnome Login Hide Panel
    gnome-login-hide-panel@inchsurf.com

	Copyright Cathal McCarthy 2024
	License GPL v3
*/

import GLib from 'gi://GLib';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const PanelBox = Main.layoutManager.panelBox;

var _hideLockScreenTopPanel;

function _setActive (active) {
        
    if (active && _hideLockScreenTopPanel) PanelBox.hide();

}

export default class GnomeLoginHidePanelExtension extends Extension {

    constructor(metadata) {
        
        super(metadata);
        
        this.setActiveOriginal = Main.screenShield._setActive;
        
    }
    
    enable() {

        this._settings = this.getSettings();

        _hideLockScreenTopPanel = this._settings.get_boolean('lock');

        Main.screenShield._setActive = _setActive;

        this._username = GLib.get_user_name();
        
        if (this._username == 'gdm') PanelBox.hide();
        
    }

    disable() {

        Main.screenShield._setActive = this.setActiveOriginal;

    }

}

function init() {
	return new Extension();
}

