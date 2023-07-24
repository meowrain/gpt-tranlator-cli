# 项目名称
gpt-tranlator-cli


## 安装

git clone https://github.com/meowrain/your_project.git
cd 
npm install

## 配置

1. 在 OpenAI 网站上申请 API KEY 和 API URL。
2. 将 API KEY 和 API URL 配置到 `config/openai_config.json` 文件中。

如果你懒得打开文件弄，可以打开`setConfig`文件夹，然后在这里打开终端，执行`setConfig.exe文件`或者执行`node setConfig.js`
Linux 下自行编译 cpp 文件

```json
{
  "OPENAI_API_KEY": "your_api_key",
  "OPENAI_API_URL": "your_api_url"
}
```

## 运行

```bash
npm run fy
```

运行时，机器人将会提示你输入问题并回答。

## 项目结构

index.js: 程序入口文件
config/: 配置文件目录
utils/: 工具函数目录

## 贡献

欢迎提出建议和贡献代码。在提交代码之前，请先阅读我们的贡献指南。

许可证
本项目使用 ISC 许可证。
