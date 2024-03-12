# gnome-login-hide-panel

This is an extension to hide the top panel on Gnome's Login Manager (GDM) user login.

With a multi-user desktop system, you may not want average users getting their paws all over Quick Settings etc. in the top panel at login. My workstation is acting as a desktop, entertainment kiosk and network server (over WiFi) and the last thing I need is Jamesy disabling my WiFi connection at the login screen whenever I leave the keyboard on the couch while I go get a coffee.

Jamesy is a **sheepdog**. I know him, **very well**.

# Installation

To make this extension available to all users on the system, install in the /usr/share/gnome-shell/extensions directory. Note that newly-installed machine-wide extensions are disabled by default.

```
$ wget https://github.com/surfinky/gnome-login-hide-panel/archive/main.zip -O ./gnome-login-hide-panel.zip

$ sudo unzip -d /usr/share/gnome-shell/extensions/gnome-login-hide-panel@inchsurf.com ./gnome-login-hide-panel.zip
```
Restart your GDM (logout).

Enable or disable the extension which will be listed under "Built-in" section of Extension list. Alternatively, you can use the CLI tool.

```$ gnome-extensions enable gnome-hide-login-panel@inchsurf.com```

**Note user authorization is required to enable or disable the extension.**

### Future

Gnome hide lock screen panel coming soon.