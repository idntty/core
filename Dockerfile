FROM node:16.15-bullseye

RUN addgroup -gid 1100 idntty && useradd -d /home/idntty -m -s /bin/bash -u 1100 -g idntty idntty

USER idntty
WORKDIR /home/idntty


RUN git clone https://github.com/idntty/core.git
WORKDIR /home/idntty/core
RUN npm i

ENTRYPOINT ["/home/idntty/core/bin/run"]
CMD ["start"]