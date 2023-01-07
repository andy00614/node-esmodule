const { spawn } = require("child_process");
const { watch } = require('fs')

const watchPath = 'src'

const exec = () => {
  const esbuild = spawn("esbuild", [
    "--bundle",
    "src/server/index.tsx",
    "--outfile=build/index.js",
    "--tsconfig=tsconfig.json",
    "--platform=node",
    "--minify"
  ]);
  esbuild.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
  });

  esbuild.stderr.on("data", data => {
    console.error(`stderr: ${data}`);
  });

  esbuild.on("close", code => {
    console.log(`子进程退出码：${code}`);
  });
}

exec()
watch(watchPath,{recursive: true},(eventType, filename) => {
  console.log(`文件 ${filename} 发生了 ${eventType} 事件`);
  exec()
})
