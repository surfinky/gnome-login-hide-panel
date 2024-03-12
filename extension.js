/* 
	Gnome Login Hide Panel
    gnome-login-hide-panel@inchsurf.com

	Copyright Cathal McCarthy 2024
	License GPL v3
*/

import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const PanelBox = Main.layoutManager.panelBox;

export default class GnomeLoginHidePanelExtension extends Extension {

    constructor(metadata) {
        super(metadata);
    }

    init() {}
    
    enable() {

        this._username = GLib.get_user_name();
        
        if (this._username == 'gdm') PanelBox.hide();
        
    }

    disable() {}
}

function init() {
	return new Extension();
}

