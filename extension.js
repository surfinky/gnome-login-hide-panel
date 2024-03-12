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
    
    enable() {

        this._settings = this.getSettings();
        this._username = GLib.get_user_name();
        this._hiding = this._settings.get_boolean('hide');
        
        if (this._username == 'gdm') PanelBox.hide();
        
        if (this._username !== 'gdm' && !this._hiding) {
            GLib.spawn_command_line_async('pkexec machinectl shell gdm@ /bin/bash -c "gnome-extensions enable gnome-login-hide-panel@inchsurf.com"');
        }
        
        this._settings.set_boolean('hide', true);
        
    }

    disable() {
        
        if (this._username !== 'gdm') {
            this._settings.set_boolean('hide', false);
            GLib.spawn_command_line_async('pkexec machinectl shell gdm@ /bin/bash -c "gnome-extensions disable gnome-login-hide-panel@inchsurf.com"');
        }

        //PanelBox.show();

    }
}

function init() {
	return new Extension();
}

