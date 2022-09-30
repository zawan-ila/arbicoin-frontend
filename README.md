# arbicoin-frontend
Frontend for [arbicoin](https://github.com/zawan-ila/arbicoin)

## Overview
This is the repo for the frontend. The frontend repo is [here](https://github.com/zawan-ila/arbicoin) <br>

The app is live at `http://arbicoin.centralindia.cloudapp.azure.com`

## Build locally

1. Clone this repo `git clone https://github.com/zawan-ila/arbicoin-frontend.git`
2. Clone the backend `git clone https://github.com/zawan-ila/arbicoin.git`
3. Inside both cloned repos checkout the container branch `git checkout remotes/origin/final`
4. Inside the backend run `docker-compose -f docker_compose_dev.yml --verbose up -d --build`
5. Your application is live at `localhost:3000`
