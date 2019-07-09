# swarm
```
docker swarm init
```
### label nodes
```
docker node update -- label-add <key>=<value> <node-id>
```
### scale & take down the app/swarm
```
docker stack deploy -c docker-compose.yml <stack_name>

docker rm <stack_name>

docker leave swarm
```

