FROM denoland/deno

EXPOSE 8000

WORKDIR /app

ADD . /app

RUN deno install --entrypoint main.ts
RUN deno task build

CMD ["run", "--allow-all", "main.ts"]