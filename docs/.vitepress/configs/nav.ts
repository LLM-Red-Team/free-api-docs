import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  {
    text: "Free API",
    items: [
      { text: "Kimi", link: "/freeapi/kimi/" },
      { text: "跃问", link: "/freeapi/step/" },
      { text: "阿里通义", link: "/freeapi/qwen/" },
      { text: "智谱清言", link: "/freeapi/glm/" },
      { text: "秘塔AI", link: "/freeapi/metaso/" },
      { text: "讯飞星火", link: "/freeapi/spark/" },
      { text: "聆心智能", link: "/freeapi/emohaa/" },
    ],
    activeMatch: "^/freeapi",
  },
  { text: "常见问题", link: "/pit/index", activeMatch: "^/pit" },
  { text: "关于", link: "/about/index" },
];
