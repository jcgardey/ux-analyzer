FROM node:18-alpine

WORKDIR /app
RUN apk add --no-cache git
RUN git clone https://github.com/jcgardey/ux-analyzer.git

WORKDIR /app/ux-analyzer

RUN npm install serve -g
RUN npm install
RUN npm run build

RUN chmod 777 ./start.sh
EXPOSE 3000
CMD ["./start.sh"] 