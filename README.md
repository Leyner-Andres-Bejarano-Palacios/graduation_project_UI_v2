# angular_docker_frontend

Project created as a frotend app for the java backend app of this [repo](https://github.com/Leyner-Andres-Bejarano-Palacios/java_springboot_docker_backend).

Like most projects in my github account I used docker to make it executable in every linux machine that you wish.

I am not so skillful when it comes to css so I used this free angular [template](https://www.creative-tim.com/product/light-bootstrap-dashboard-angular2) doing some modifications to make it complies with my requirements.

For info about how you could develope an angular app from scratch you can use this [link](https://github.com/Leyner-Andres-Bejarano-Palacios/graduation_project_UI). where I follow the instructions of an amazing youtube guide.

I also have this youtube video where I showcase the angular [app](https://www.youtube.com/watch?v=5w2kXvi-AlU&t=3s).


## how to make it run

1. Install [Docker](https://docs.docker.com/engine/install/).

2. Get the docker image that we will use as a angular remote server executing the command below

    1. execute the command "docker pull trion/ng-cli-karma"
    2. just for information, you can omit this, this is the source of the [image](https://hub.docker.com/r/trion/ng-cli-karma).

3. Something particular that we will do with this image is mount a docker [volume](https://docs.docker.com/storage/volumes/) using a folder from our local machine. pwd in the command below is a bash command to print our current location.In our case the project name will be graduation-frontend. The third command "ng serve" will get the angular app up and running

    1. docker run -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng new  graduation-frontendcd 

    2. cd graduation-frontendcd

    3. docker run -p 4200:4200 --network graduation_network --name graduation-frontend -u $(id -u) --rm -v "$PWD":/app trion/ng-cli-karma ng serve --host 0.0.0.0

## to-do

1. test coverage

2. sonarqueue analisys

3. add pages to show all the elements in the hashMap data structure

4. create spanish video to show the app