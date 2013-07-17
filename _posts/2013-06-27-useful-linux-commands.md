---
layout: post
title: "Useful Linux commands"
date: 2013-06-27 18:24:22
categories: linux cli
---


    $ ldconfig -p    # list shared libraries cache
    
    # ldconfig    # refresh shared libraries cache
    
    $ ls | cpio -ov > archive.cpio    # create an archive with cpio
    
    $ pstree -pha    # display hierarchical list of processes
    
    $ renice 20 100    # lower the priority of the process with pid=100
    
    # netstat -anp --tcp    # display TCP connections
    
    # lsof -i    # display network connections
    
    # lsof -u <user>    # display files opened by given user
    
    # ldd <executable>    # display shared library dependencies
    
    # runlevel    # show current and previous runlevels
    
    # chkconfig --list    # list services along with their runlevels
    
    # initcrl --list    # view currently running jobs (Upstart)
    
    # mkswap <device>     # create swap partition
    
    # swapon -s    # list swap spaces that are on
    
    # getfacl <file>    # grap ACL information
    
    # setfacl -m u:<user>:<permissions> <file>    # set ACL permissions
    
    # setfacl -x u:<user> <file>    # clear ACL permissions for the user
    
    # setfacl -b <file>    # clear all custom ACL permissions
    
    # route add defalut gw <ip> <iface>    # define default route
    
    $ tree -pugsh    # display indented directory tree
    
    $ head -c16 /dev/urandom | base64    # generate random key
    
    $ ps -FA    # display all processes
    
    $ ps -F -u <user>    # display processes of given user
    
    $ ps -FC <process>    # display the process (if any)
    
    # sysv-rc-conf    # visual manager for SysV RC
    
    
