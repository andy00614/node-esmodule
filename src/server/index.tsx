import express from 'express'
import childProcess from "child_process"
import {renderToString} from 'react-dom/server'
import path from 'path'
import {StaticRouter} from 'react-router-dom/server'
import { Route, Routes } from 'react-router-dom'
import router from '@/router'
import { Helmet } from 'react-helmet'


const app = express()
app.use(express.static(path.resolve(process.cwd(), "client_build")));
const port = 3535

app.get('*', (req, res) => {
  const path = req.path;
  const content = renderToString(
    <StaticRouter location={path}>
      <Routes>
        {router?.map((item, index) => {
          return <Route {...item} key={index} />;
        })}
      </Routes>
    </StaticRouter>
  )
  const helmet = Helmet.renderStatic();

  res.send(`
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./index.js"></script>
      </body>
    </html>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

childProcess.exec(`start http://127.0.0.1:${port}`);
