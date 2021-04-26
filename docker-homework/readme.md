# Docker homework
## NETWORK CHART
![](network.png)

## Docker Networks
### Bridge:
bridge networks is default network for docker container.
It provides isolation for containers running in the bridge, and allows these containers to communicate.
Bridge network is suitable for containers require an isolated environment.
### Overlay
it creates network for containers running on multiple machines. Overlay network helps create a subnet which is overlaid on top of these two hosts,
 and each Docker container connected to this overlay network can communicate with every other container. 
### Macvlan
This network allows assigning mac and ip address for containers, allowing them to connect tro physical networks directly.
It actually created virtualized network interfaces on one physical networks interfaces, which has their own IP address.
It's good for a situation that need containers to connect to physical network, and Such mode networks has great performance.

## Advanced multi-layered unification filesystem
### Special
copy-on-write:
when mounting a set of directories with AUFS, there will be a single directory for storage (write), and others would be read-only.
In this way, when user access mount point, user would see exactly same directories as mounted stuffs. When user write/modify files through
mounted point, actually the writen would only happen in the writable directory (by create a new copy in the dir).
Therefore, change on a real file would only happen in a writable directory.
### Advantage:
1.  AUFS efficiently shares images between multiple running containers, enabling fast container start times and minimal use of disk space.
### Disadvantage:
2.  The AUFS storage driver can introduce significant latencies into a container write performance. This is because the first time a container writes to any file, the file needs to be located and copied into the containers top writable layer. These latencies increase and are compounded when these files exist below many image layers and the files themselves are large.

## Docker VS Virtual machine
### Operation system
vm will require support from operating system, and docker shares operating system of host machine, which makes docker container lightweight.
### Security
Because vm does not share operating system, respectively, vm would has stronger isolation， thus better security.
On the other hand, containers resources are shared, attacker can have access to all resources when he/she get access to one of them.
### Portability
docker enables containers to be shared conveniently through systems. However, vm cannot do it.
### Performance
docker containers would require less resource and start up quicker. VM use individual OS and consequently more resource to be used.

##Docker hub images:
https://hub.docker.com/repository/docker/jiajunli229/docker-homework  
jiajunli229/docker-homework:frontend  
jiajunli229/docker-homework:backend
