# Spark AI Free 服务

<iframe
 src="https://udify.app/chatbot/xsLvQf9U0QJRIkmN"
 style="width: 100%; height: 100%; min-height: 700px"
 frameborder="0"
 allow="microphone">
</iframe>

<hr>

![](https://img.shields.io/github/stars/llm-red-team/spark-free-api.svg)
![](https://img.shields.io/github/forks/llm-red-team/spark-free-api.svg)
![](https://img.shields.io/docker/pulls/vinlic/spark-free-api.svg)

支持高速流式输出、支持多轮对话、支持 AI 绘图、支持长文档解读、图像解析，零配置部署，多路 token 支持，自动清理会话痕迹。

与 ChatGPT 接口完全兼容。

还有以下六个 free-api 欢迎关注：

Moonshot AI（Kimi.ai）接口转 API [kimi-free-api](https://github.com/LLM-Red-Team/kimi-free-api)

阶跃星辰 (跃问 StepChat) 接口转 API [step-free-api](https://github.com/LLM-Red-Team/step-free-api)

阿里通义 (Qwen) 接口转 API [qwen-free-api](https://github.com/LLM-Red-Team/qwen-free-api)

智谱 AI (智谱清言) 接口转 API [glm-free-api](https://github.com/LLM-Red-Team/glm-free-api)

秘塔 AI (metaso) 接口转 API [metaso-free-api](https://github.com/LLM-Red-Team/metaso-free-api)

聆心智能 (Emohaa) 接口转 API [emohaa-free-api](https://github.com/LLM-Red-Team/emohaa-free-api)

## 目录

- [免责声明](#免责声明)
- [在线体验](#在线体验)
- [效果示例](#效果示例)
- [接入准备](#接入准备)
  - [多账号接入](#多账号接入)
- [Docker 部署](#Docker部署)
  - [Docker-compose 部署](#Docker-compose部署)
- [Render 部署](#Render部署)
- [Vercel 部署](#Vercel部署)
- [原生部署](#原生部署)
- [推荐使用客户端](#推荐使用客户端)
- [接口列表](#接口列表)
  - [对话补全](#对话补全)
  - [AI 绘图](#AI绘图)
  - [文档解读](#文档解读)
  - [图像解析](#图像解析)
  - [ssoSessionId 存活检测](#ssoSessionId存活检测)
- [注意事项](#注意事项)
  - [Nginx 反代优化](#Nginx反代优化)
  - [Token 统计](#Token统计)
- [Star History](#star-history)

## 免责声明

**逆向 API 是不稳定的，建议前往讯飞星火官方 https://xinghuo.xfyun.cn/sparkapi 付费使用 API，避免封禁的风险。**

**本组织和个人不接受任何资金捐助和交易，此项目是纯粹研究交流学习性质！**

**仅限自用，禁止对外提供服务或商用，避免对官方造成服务压力，否则风险自担！**

**仅限自用，禁止对外提供服务或商用，避免对官方造成服务压力，否则风险自担！**

**仅限自用，禁止对外提供服务或商用，避免对官方造成服务压力，否则风险自担！**

## 在线体验

此链接仅临时测试功能，不可长期使用，长期使用请自行部署。

https://udify.app/chat/xsLvQf9U0QJRIkmN

## 效果示例

### 验明正身 Demo

![验明正身](./doc/example-0.png)

### 多轮对话 Demo

![多轮对话](./doc/example-1.png)

### 联网搜索 Demo

![联网搜索](./doc/example-2.png)

### AI 绘图 Demo

![AI绘图](./doc/example-5.png)

### 长文档解读 Demo

![长文档解读](./doc/example-3.png)

### 图像解析 Demo

![图像解析](./doc/example-4.png)

## 接入准备

从 [xinghuo.xfyun.cn](https://xinghuo.xfyun.cn) 获取 ssoSessionId

进入 Spark 登录并发起一个对话，从 Cookie 获取 `ssoSessionId` 值，由于星火平台禁用 F12 开发者工具，请安装 `Cookie-Editor` 浏览器插件查看你的 Cookie。

![image](https://github.com/LLM-Red-Team/spark-free-api/assets/20235341/a075cde2-db70-415d-93a4-1114029c9ef8)

这个值将作为 Authorization 的 Bearer Token 值：`Authorization: Bearer TOKEN`

**注意：如果退出登录或重新登录将可能导致 ssoSessionId 失效！**

### 多账号接入

你可以通过提供多个账号的 ssoSessionId 并使用`,`拼接提供：

`Authorization: Bearer TOKEN1,TOKEN2,TOKEN3`

每次请求服务会从中挑选一个。

## Docker 部署

请准备一台具有公网 IP 的服务器并将 8000 端口开放。

拉取镜像并启动服务

```shell
docker run -it -d --init --name spark-free-api -p 8000:8000 -e TZ=Asia/Shanghai vinlic/spark-free-api:latest
```

查看服务实时日志

```shell
docker logs -f spark-free-api
```

重启服务

```shell
docker restart spark-free-api
```

停止服务

```shell
docker stop spark-free-api
```

### Docker-compose 部署

```yaml
version: "3"

services:
  spark-free-api:
    container_name: spark-free-api
    image: vinlic/spark-free-api:latest
    restart: always
    ports:
      - "8000:8000"
    environment:
      - TZ=Asia/Shanghai
```

### Render 部署

**注意：部分部署区域可能无法连接 spark，如容器日志出现请求超时或无法连接（新加坡实测不可用）请切换其他区域部署！**
**注意：免费账户的容器实例将在一段时间不活动时自动停止运行，这会导致下次请求时遇到 50 秒或更长的延迟，建议查看[Render 容器保活](https://github.com/LLM-Red-Team/free-api-hub/#Render%E5%AE%B9%E5%99%A8%E4%BF%9D%E6%B4%BB)**

1. fork 本项目到你的 github 账号下。

2. 访问 [Render](https://dashboard.render.com/) 并登录你的 github 账号。

3. 构建你的 Web Service（New+ -> Build and deploy from a Git repository -> Connect 你 fork 的项目 -> 选择部署区域 -> 选择实例类型为 Free -> Create Web Service）。

4. 等待构建完成后，复制分配的域名并拼接 URL 访问即可。

### Vercel 部署

**注意：Vercel 免费账户的请求响应超时时间为 10 秒，但接口响应通常较久，可能会遇到 Vercel 返回的 504 超时错误！**

请先确保安装了 Node.js 环境。

```shell
npm i -g vercel --registry http://registry.npmmirror.com
vercel login
git clone https://github.com/LLM-Red-Team/spark-free-api
cd spark-free-api
vercel --prod
```

## 原生部署

请准备一台具有公网 IP 的服务器并将 8000 端口开放。

请先安装好 Node.js 环境并且配置好环境变量，确认 node 命令可用。

安装依赖

```shell
npm i
```

安装 PM2 进行进程守护

```shell
npm i -g pm2
```

编译构建，看到 dist 目录就是构建完成

```shell
npm run build
```

启动服务

```shell
pm2 start dist/index.js --name "spark-free-api"
```

查看服务实时日志

```shell
pm2 logs spark-free-api
```

重启服务

```shell
pm2 reload spark-free-api
```

停止服务

```shell
pm2 stop spark-free-api
```

## 推荐使用客户端

使用以下二次开发客户端接入 free-api 系列项目更快更简单，支持文档/图像上传！

由 [Clivia](https://github.com/Yanyutin753/lobe-chat) 二次开发的 LobeChat [https://github.com/Yanyutin753/lobe-chat](https://github.com/Yanyutin753/lobe-chat)

由 [时光@](https://github.com/SuYxh) 二次开发的 ChatGPT Web [https://github.com/SuYxh/chatgpt-web-sea](https://github.com/SuYxh/chatgpt-web-sea)

## 接口列表

目前支持与 openai 兼容的 `/v1/chat/completions` 接口，可自行使用与 openai 或其他兼容的客户端接入接口，或者使用 [dify](https://dify.ai/) 等线上服务接入使用。

### 对话补全

对话补全接口，与 openai 的 [chat-completions-api](https://platform.openai.com/docs/guides/text-generation/chat-completions-api) 兼容。

**POST /v1/chat/completions**

header 需要设置 Authorization 头部：

```
Authorization: Bearer [ssoSessionId]
```

请求数据：

```json
{
  // 模型名称随意填写，如果不希望输出检索过程模型名称请包含silent_search
  "model": "spark",
  "messages": [
    {
      "role": "user",
      "content": "你是谁？"
    }
  ],
  // 如果使用SSE流请设置为true，默认false
  "stream": false
}
```

响应数据：

```json
{
  "id": "296727672",
  "model": "spark",
  "object": "chat.completion",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "您好，我是科大讯飞研发的认知智能大模型，我的名字叫讯飞星火认知大模型。我可以和人类进行自然交流，解答问题，高效完成各领域认知智能需求。"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 1,
    "completion_tokens": 1,
    "total_tokens": 2
  },
  "created": 1713933188
}
```

### AI 绘图

对话补全接口，与 openai 的 [images-create-api](https://platform.openai.com/docs/api-reference/images/create) 兼容。

**POST /v1/images/generations**

header 需要设置 Authorization 头部：

```
Authorization: Bearer [ssoSessionId]
```

请求数据：

```json
{
  "prompt": "画只猫"
}
```

响应数据：

```json
{
  "created": 1711507449,
  "data": [
    {
      "url": "https://sgw-dx.xf-yun.com/api/v1/sparkdesk/multimodal_image_301306010U064624.jpg?authorization=c2ltcGxlLWp3dCBhaz1zcGFya2Rlc2s4MDAwMDAwMDAwMDE7ZXhwPTMyOTA5MjMwNjM7YWxnbz1obWFjLXNoYTI1NjtzaWc9WnBIdk52ZzJLMmpDbkYzOUU1N3RLVVVSdnkvamxydVgvUnE1SWxnRUdaST0=&x_location=7YfQJjZB7uKO7jlRxIftd6Fbdo=="
    }
  ]
}
```

### 文档解读

提供一个可访问的文件 URL 或者 BASE64_URL 进行解析。

**POST /v1/chat/completions**

header 需要设置 Authorization 头部：

```
Authorization: Bearer [ssoSessionId]
```

请求数据：

```json
{
  // 模型名称随意填写，如果不希望输出检索过程模型名称请包含silent_search
  "model": "spark",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "file",
          "file_url": {
            "url": "https://mj101-1317487292.cos.ap-shanghai.myqcloud.com/ai/test.pdf"
          }
        },
        {
          "type": "text",
          "text": "文档里说了什么？"
        }
      ]
    }
  ]
}
```

响应数据：

```json
{
  "id": "296791588",
  "model": "spark",
  "object": "chat.completion",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "文档中描述了几个不同的魔法咒语和仪式的步骤，以及它们的目的和效果。第一个咒语是关于纪念那些因暴力死亡的人，并希望这些英雄、角斗士和死者能够带来成功。第二个咒语则是召唤一个名为Tereous的女性，通过一系列的仪式动作和念诵咒语来达到目的。第三个咒语与阿佛洛狄忒的名字有关，如果一个人想要赢得美丽女性的青睐，需要进行三天的净化，并在乳香上呼唤这个名称。第四个咒语涉及到没药，并且要求在煤炭上提供这种香料时念出特定的咒语，目的是吸引特定女性的注意，并阻止她进行日常活动。"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 1,
    "completion_tokens": 1,
    "total_tokens": 2
  },
  "created": 1713936102
}
```

### 图像解析

提供一个可访问的图像 URL 或者 BASE64_URL 进行解析。

此格式兼容 [gpt-4-vision-preview](https://platform.openai.com/docs/guides/vision) API 格式，您也可以用这个格式传送文档进行解析。

**POST /v1/chat/completions**

header 需要设置 Authorization 头部：

```
Authorization: Bearer [ssoSessionId]
```

请求数据：

```json
{
  "model": "spark",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "file",
          "file_url": {
            "url": "https://xinghuo.xfyun.cn/static/media/icon-api-qa.06576333e96568ce3a31.png"
          }
        },
        {
          "type": "text",
          "text": "图里说了什么？"
        }
      ]
    }
  ],
  "stream": false
}
```

响应数据：

```json
{
  "id": "296795606",
  "model": "spark",
  "object": "chat.completion",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "该图片显示了一个蓝色的圆形标志，上面写着“星火API咨询”。"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 1,
    "completion_tokens": 1,
    "total_tokens": 2
  },
  "created": 1713936328
}
```

### ssoSessionId 存活检测

检测 ssoSessionId 是否存活，如果存活 live 为 true，否则为 false，请不要频繁（小于 10 分钟）调用此接口。

**POST /token/check**

请求数据：

```json
{
  "token": "409794b0-1dd1-..."
}
```

响应数据：

```json
{
  "live": true
}
```

## 注意事项

### Nginx 反代优化

如果您正在使用 Nginx 反向代理 spark-free-api，请添加以下配置项优化流的输出效果，优化体验感。

```nginx
# 关闭代理缓冲。当设置为off时，Nginx会立即将客户端请求发送到后端服务器，并立即将从后端服务器接收到的响应发送回客户端。
proxy_buffering off;
# 启用分块传输编码。分块传输编码允许服务器为动态生成的内容分块发送数据，而不需要预先知道内容的大小。
chunked_transfer_encoding on;
# 开启TCP_NOPUSH，这告诉Nginx在数据包发送到客户端之前，尽可能地发送数据。这通常在sendfile使用时配合使用，可以提高网络效率。
tcp_nopush on;
# 开启TCP_NODELAY，这告诉Nginx不延迟发送数据，立即发送小数据包。在某些情况下，这可以减少网络的延迟。
tcp_nodelay on;
# 设置保持连接的超时时间，这里设置为120秒。如果在这段时间内，客户端和服务器之间没有进一步的通信，连接将被关闭。
keepalive_timeout 120;
```

### Token 统计

由于推理侧不在 spark-free-api，因此 token 不可统计，将以固定数字返回!!!!!

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=LLM-Red-Team/spark-free-api&type=Date)](https://star-history.com/#LLM-Red-Team/spark-free-api&Date)
