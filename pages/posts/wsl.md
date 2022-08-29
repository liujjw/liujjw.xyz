---
title: Working with WSL2
date: 2021/8/01
description: Operational tips and tricks 
---

This post is meant to just get someone who needs to use basic Linux on Windows up to speed on some gotchas that might arise. These may or may not work in WSL1, similarly for non-Ubuntu distros.

## Installation
Installation is straighforward. Otherwise, useful Windows host admin commands include  `wsl --list --verbose` and `wsl -t <DISTRO_NAME>` to shutdown a distro for maintenance or `wsl --shutdown` to shutdown all WSL distros.

### Storage cap
`df` will exhibit some strange behavior saying your system storage is full even if the volume where WSL data is stored still has plenty of space. [Locate](https://docs.microsoft.com/en-us/windows/wsl/vhd-size) the `*.vhdx` virtual hard disk where WSL data is stored. This virtual hard disk will automatically resize, but only up to 256GB. You will need to manually increase the storage cap after that using `diskpart` from Windows and remounting and resizing the device from Linux. 

Additionally, I have found `rsync` to be the best performer for getting large amounts of data out of WSL over a network securely.

### Networking
WSL has its own virtual network. Moreover, it can't be trivially accessed outside the Windows host. This has implications for distributed applications and using `ssh` (on that note, WSL Ubuntu also doesn't use the newer `systemctl` init system). Of course, accessing WSL through the host is built in (accessing the host through WSL is also possible, but I've never had to do this). Use Docker networking in WSL at your own peril. To access WSL from the internet, port forwarding and `netsh` is necessary, along with some convenience scripts for configuration everytime WSL starts up. The [Windows docs](https://docs.microsoft.com/en-us/windows/wsl/networking) are insufficient; use the [following](https://github.com/microsoft/WSL/issues/4150#issuecomment-504209723) workaround instead.

### RAM/memory
Many report high RAM usage, or your WSL instance may be sluggish. You can limit/increase the RAM, CPU, and a few other things in `wsl.conf` from windows (make sure to shutdown first). In my usage, WSL will always use the maximum RAM after running a few programs, so be conversative. `htop`  shows WSL is fairly efficient with CPU time however, and it seems usage data from all of my 12 cores were able to be read from WSL, although parsing running processes through a VSCode WSL bridge is almost unintelligible.