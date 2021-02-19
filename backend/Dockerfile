FROM node:14.15.5-alpine3.13 As development

WORKDIR /usr/src/app

RUN npm i -g @nestjs/cli

COPY package.json yarn.lock ./

RUN npm install

COPY . .

RUN npm run build

# FROM node:14.15.5-alpine3.13 as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package.json yarn.lock ./

# RUN yarn --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]