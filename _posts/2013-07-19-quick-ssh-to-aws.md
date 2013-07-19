---
layout: post
title: "Quick SSH connect to AWS instance"
date: 2013-07-19 10:21:00
categories: ssh aws
---

Here I'll describe how to be able to ssh to an AWS instance, as well as any other server,
just by typing:

    $ ssh your-server

First, make sure your private key is in `~/.ssh/` with proper rights set.
Then create `~/.ssh/config` file with the following content replacing host names
and key location with your own, appropriately:

    Host your-server
      HostName your-server-hostname-or-ip
      User ec2-user
      IdentityFile ~/.ssh/private-key.pem

That's all.
