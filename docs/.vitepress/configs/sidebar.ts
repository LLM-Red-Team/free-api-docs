import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/freeapi": [
    {
      text: "Free API",
      collapsed: false,
      items: [
        { text: "Kimi", link: "/freeapi/kimi/" },
        { text: "跃问", link: "/freeapi/step/" },
        { text: "阿里通义", link: "/freeapi/qwen/" },
        { text: "智谱清言", link: "/freeapi/glm/" },
        { text: "秘塔AI", link: "/freeapi/metaso/" },
        { text: "讯飞星火", link: "/freeapi/spark/" },
        { text: "海螺AI", link: "/freeapi/hailuo/" },
        { text: "DeepSeek", link: "/freeapi/deepseek/" },
        { text: "聆心智能", link: "/freeapi/emohaa/" },
      ],
    },
  ],
  "/pit/": [
    {
      text: "常见问题",
      // collapsed: false,
      items: [
        { text: "Kimi", link: "/pit/kimi" },
        { text: "跃问", link: "/pit/step" },
        { text: "阿里通义", link: "/pit/qwen" },
        { text: "智谱清言", link: "/pit/glm" },
        { text: "秘塔AI", link: "/pit/metaso" },
        { text: "讯飞星火", link: "/pit/spark" },
        { text: "海螺AI", link: "/pit/hailuo" },
        { text: "DeepSeek", link: "/pit/deepseek/" },
        { text: "聆心智能", link: "/pit/emohaa" },
      ],
    },
  ],
};
