# gnome-login-hide-panel

This is an extension to hide the top panel on Gnome's Login Manager (GDM) user login.

With a multi-user desktop system, you may not want average users getting their **paws** all over Quick Settings etc. in the top panel at login. My workstation is acting as a desktop, entertainment kiosk and network server (over WiFi) and the last thing I need is **Jamesy** disabling my WiFi connection at the login screen whenever I leave the keyboard on the couch while I go get a coffee.

**Jamesy** is a sheepdog and I know him, **very well**.

# Installation

To make this extension available to all users on the system, install in the **/usr/share/gnome-shell/extensions** directory. Note that newly-installed machine-wide extensions are disabled by default.


```
$ wget https://github.com/surfinky/gnome-login-hide-panel/archive/main.zip -O ./gnome-login-hide-panel-main.zip

$ unzip ./gnome-login-hide-panel-main.zip

$ sudo cp -r ./gnome-login-hide-panel-main /usr/share/gnome-shell/extensions/gnome-login-hide-panel@inchsurf.com
```


Restart your Gnome session to complete the installation.


You will see the extension listed under the "Built-in" section of the Extension list. Enable and adjust preferences to your liking. It is recommended that you restart your GDM session so that changes to preferences take full effect.


```
$ gnome-extensions enable gnome-login-hide-panel@inchsurf.com

$ gnome-extensions prefs gnome-login-hide-panel@inchsurf.com
```


**Note authorization is required to apply changes for the login screen.**

