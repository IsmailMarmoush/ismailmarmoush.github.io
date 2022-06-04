---
layout: post
title:  "Debian Installation"
author: ismailmarmoush
image: /assets/posts/debian.jpg
featured: false
hidden: false
tags: linux
---

Debian Installation and configuration

## Download

Download debian netinstall iso file

## Burning ISO to USB in linux

```
# To know where your usb
lsblk
sudo dd bs=4M if=debian.iso of=/dev/sdb
md5sum debian.iso
md5sum /dev/sdb/sdb1
```

## Installation

Put the USB drive, and start installation, after you finish login as root

```
apt-get install sudo
adduser yourname sudo

sudo apt-get install xorg i3 git ssh nautilus alsa-base alsa-utils terminator vlock xscreensaver gparted htop cowsay figlet file-roller unrar evince gpicview ecryptfs-utils golang

# Security
sudo apt-get install chkrootkit rkhunter
```

## Generic Configuration

```
# Disable ssh from outside
echo "SSHD: ALL" >> /etc/hosts.deny

# Set Clock
sudo date +%T -s "10:13:13"
# set the hardware clock to system clock
sudo hwclock --systohc

# git
git config --global user.name "Your name"
git config --global user.email "youremail@gmail.com"
git config --global push.default simple
```

## Google drive sync

```
go get -u github.com/odeke-em/drive/drive-google
```

## Encryption

References:

* https://wiki.archlinux.org/index.php/disk_encryption
* http://bodhizazen.net/Tutorials/Ecryptfs
* http://ksouedu.com/doc/ecryptfs-utils/ecryptfs-faq.html
* https://wiki.archlinux.org/index.php/ECryptfs
* http://www.howtogeek.com/115955/how-to-quickly-encrypt-removable-storage-devices-with-ubuntu/

### ecryptfs

[Reference: ecryptfs tutorial](http://bodhizazen.net/Tutorials/Ecryptfs)

```
# load ecryptfs kernel module
sudo modprobe ecryptfs
ecryptfs-setup-private
mkdir ~/victoria/secret
chmod 700 secret
sudo mount -t ecryptfs ~/victoria/secret ~/victoria/secret
sudo umount ./secret
sudo mount ./secret ./secret -o key=passphrase,ecryptfs_cipher=aes,
ecryptfs_key_bytes=16,ecryptfs_passthrough=no,
ecryptfs_enable_filename_crypto=yes

# To umount any folder
sudo umount -t ecryptfs ~/victoria/secret
```

## Keyboard Language

```
setxkbmap us
setxkbmap ar

# OR in .i3/config
bindsym Ctrl+Shift+1 exec --no-startup-id setxkbmap us
bindsym Ctrl+Shift+2 exec --no-startup-id setxkbmap ar
```

## Printer

[Reference 1](https://forums.kali.org/showthread.php?4314-Install-amp-configure-printers-on-Kali-linux)
[Reference 2](https://uwnthesis.wordpress.com/2013/07/29/kali-how-to-install-a-cups-printer-the-visual-guide/)

```
sudo apt-get install cups cups-client "foomatic-db*"
sudo  /usr/sbin/adduser tesla lpadmin
sudo /etc/init.d/cups restart
sudo apt-get install samba samba-client
sudo /etc/init.d/samba restart
netstat -ant | grep 631
```

Then open system setting printers and add network printer. After restart you'll need to start cups again; go to
printers, choose socket, type printer ip,
choose `HP LaserJet Pro P1102w Foomatic/foo2zjs-z2 (recommended) (grayscale, 2-sided printing)`

## Eclipse

```
# put this in the eclipse.ini:
--launcher.GTK_version
2
```

## Nodejs, NPM, Bower

```
apt-get install curl
curl -sL https://deb.nodesource.com/setup | bash -
apt-get install -y nodejs
apt-get install -y build-essential
su -
curl -L --insecure https://www.npmjs.org/install.sh | bash
npm install bower
```

## Virtualbox

```
VBoxManage modifyhd <absolute path including the name and extension> --resize 50000

VBoxManage setextradata <vmname> "VBoxInternal/Devices/VMMDev/0/Config/GetHostTimeDisabled" "1"

# To be able to use usb from the guest machine:
sudo adduser YOURUSERNAME vboxusers # Then log out and log in again.

# To uninstall extpack
vboxmanage extpack uninstall "Oracle VM VirtualBox Extension Pack"

# To install extpack
vboxmanage extpack install ...

```

Some Good References:

* http://www.jeremychapman.info/cms/get-usb-working-in-virtualbox-under-debian-and-ubuntu
* http://www.dedoimedo.com/computers/virtualbox-usb.html
* http://community.linuxmint.com/tutorial/view/208
* http://archive.news.softpedia.com/news/How-to-Fix-VirtualBox-USB-Support-111715.shtml
* http://www.cyberciti.biz/faq/linux-list-users-command/
* http://askubuntu.com/questions/150887/sound-from-both-headphones-and-speakers
* http://kvz.io/blog/2007/08/01/make-iso-images-on-linux/
* http://askubuntu.com/questions/147800/ripping-dvd-to-iso-accurately

## Debian as Guest

https://forums.virtualbox.org/viewtopic.php?t=15868

```
sudo mount -t vboxsf sharedFolder ~/sharedFolder
sudo mount -t vboxsf -o rw,uid=1000,gid=1000 share ~/host
```

Troubleshooting
Q: I get a protocol error when mounting.
Q: I get the error /sbin/mount.vboxsf: mounting failed with the error: No such device.
A: You mount the SF on a mount point with the same name as the share itself, change the name or mount point.
A: You're sharing a personal folder like your Home Folder (Linux), or My Documents (Windows) on the Host. Define a new
share, like a sub folder.

Q: I get an error "Unexpected error: Text file busy." when trying to edit a file.
A: When using gedit, this can happen on shared folders. This is a bug in gedit, not VB. Use a different editor.
