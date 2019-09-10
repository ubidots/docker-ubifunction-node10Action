FROM jotagarcia89/node-base10
RUN apt-get update && apt-get install -y \
    imagemagick \
    graphicsmagick \
    unzip \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /nodejsAction
COPY . .
# COPY the package.json to root container, so we can install npm packages a level up from user's packages, so user's packages take precedence
COPY ./package.json /
RUN cd / && npm install --no-package-lock \
    && npm cache clean --force
EXPOSE 8080
# The flag --experimental-worker enables worker threads, see https://nodejs.org/docs/latest-v10.x/api/worker_threads.html
CMD node --experimental-worker --expose-gc app.js
