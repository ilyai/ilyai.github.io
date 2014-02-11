---
layout: post
title: "AVD on Linux x64 w/ KVM"
date: 2013-07-19 10:21:00
categories: android linux kvm
---

Since this setup didn't work out of the box on my Linux machine, and there was quite a few problems to get it to work I decided to describe the key points. 

Host configuration: Debian 7.2 x64 (multiarch) / ADT v22.3 / JDK 1.7.0\_45

First you need to install IA32 libraries:

    $ sudo dpkg --add-architecture i386       # if not enabled already
    $ sudo apt-get update
    $ sudo apt-get install ia32-libs

To use acceleration an x86 system image is required. I installed Android 4.3 x86 Atom system image.  
Due to some strange reasons emulator window won't appear when running this image. The fix is to add `-noaudio` option.
Acceleration is not enabled by default. To check if you system is supported:

    $ egrep '(vmx|svm)' /proc/cpuinfo

And then install `qemu-kvm` package. For more information how to configure it to work with Android emulator please see [http://developer.android.com/tools/devices/emulator.html\#vm-linux](http://developer.android.com/tools/devices/emulator.html#vm-linux).

Unfortunately I could not found a way to set these additional command options when launching via AVD Manager so I moved the emulator executable and wrapped it with a small shell script.
sdk/tools/emulator:

    #!/bin/sh
    EMU="$(dirname $0)/emulator.real"
    "${EMU}" "$@" -noaudio -qemu -m 512 -enable-kvm

With this changes virtual devices can be started as usual with ADT's AVD Manager.
After playing a little with VM on my system I can say that it is almost as fast as when using a real device.
