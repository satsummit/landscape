FROM ruby:2.3

RUN apt-get update -qq && apt-get install -qq --no-install-recommends \
    curl \
    gnupg2

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN whoami
# RUN source /root/.bashrc

ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 10.24.1

# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.39.1/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin
ENV PATH $NODE_PATH:$PATH
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules:$PATH
COPY package.json /mnt 
RUN cd /mnt && npm install && npm link
WORKDIR /app
