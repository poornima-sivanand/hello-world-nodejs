## Hello World App

### Building the image

Step 1: Clone or Fork this repository

Step 2: Login to the openshift console from your terminal

Step 3: Build the image:

` oc process -n <project-name> -f openshift/build.yaml | oc apply -f -`

### Deploying the image

Step 1: Deploy using the command:

` oc process -n <project-name> -f openshift/deploy.yaml | oc apply -f - `