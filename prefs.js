import Gtk from 'gi://Gtk';
import GLib from 'gi://GLib';

import {ExtensionPreferences} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

function buildPrefsWidget(gsettings) {

    let widget = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
        margin_top: 10,
        margin_bottom: 10,
        margin_start: 10,
        margin_end: 10,
    });

    let vbox = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
        margin_top: 10
    });
    
    vbox.set_size_request(550, 350);

    let hbox;
    
    hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL, margin_top: 5 });
    
    let login_setting_label = new Gtk.Label({
        label: "Hide top panel on Login screen.",
        hexpand: true,
        xalign: 0
    });
    
    let login_setting_switch = new Gtk.Switch({ active: gsettings.get_boolean('login') });

    login_setting_switch.connect('notify::active',
        
        function (button) {
            
            gsettings.set_boolean('login', button.active);

            let setting = (button.active) ? 'enable' : 'disable';

            GLib.spawn_command_line_async(`pkexec machinectl shell gdm@ /bin/bash -c "gnome-extensions ${setting} gnome-login-hide-panel@inchsurf.com"`);

        });

    hbox.append(login_setting_label);
    hbox.append(login_setting_switch);
    vbox.append(hbox);

    hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL, margin_top: 15 });
    
    let lock_setting_label = new Gtk.Label({
        label: "Hide top panel on Lock screen.",
        hexpand: true,
        xalign: 0
    });
    
    let lock_setting_switch = new Gtk.Switch({ active: gsettings.get_boolean('lock') });

    lock_setting_switch.connect('notify::active',
        function (button) {
            gsettings.set_boolean('lock', button.active);
        }
    );

    /*hbox.append(lock_setting_label);
    hbox.append(lock_setting_switch);
    vbox.append(hbox);*/

    widget.append(vbox);

    return widget;
}

export default class GnomeLoginHidePanelPrefs extends ExtensionPreferences {
    getPreferencesWidget() {
        return buildPrefsWidget(this.getSettings());
    }
}
