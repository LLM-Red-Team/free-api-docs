# one-free-api
使用docker compose一键启动所有free-api系列服务，嵌入nginx统一服务访问入口。

## 启动服务

```sh
git clone https://github.com/hanfangyuan4396/one-free-api.git
cd one-free-api
docker-compose up -d
```

## 访问服务

url中只需增加对应的**服务名前缀**，其他与原free-api服务一致。

例如:
- kimi对话接口: /kimi/v1/chat/completions
- glm画图接口: /glm/v1/images/generations
- hailuo语音接口: /hailuo/v1/audio/speech

## openai api base
接入兼容openai格式客户端的时候，注意在**api base**中增加对应的**前缀**，例如 http://host:port/kimi 。
