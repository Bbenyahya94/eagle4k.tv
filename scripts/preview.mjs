import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = join(process.cwd(), 'dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml','.txt':'text/plain'};
http.createServer(async(req,res)=>{try{let path=decodeURIComponent(new URL(req.url,'http://x').pathname);let file=path==='/'?'index.html':path.endsWith('/')?`${path}index.html`:path.slice(1);file=normalize(file).replace(/^([.][.][\\/])+/, '');let body;try{body=await readFile(join(root,file));res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});}catch{body=await readFile(join(root,'404.html'));res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});}res.end(body)}catch{res.writeHead(500);res.end()}}).listen(4173,()=>console.log('Preview ready: http://localhost:4173'));
