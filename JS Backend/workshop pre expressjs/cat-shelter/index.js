import http from 'http';
import fs from 'fs/promises';
import { v4 as uuid } from 'uuid';

import homePage from './views/home/index.html.js';
import addBreedPage from './views/addBreed.html.js';
import addCatPage from './views/addCat.html.js';
import siteCss from './content/styles/site.css.js';
import editCatHtml from './views/editCat.html.js';
import catShelterHtml from './views/catShelter.html.js';



let cats = [];
let breeds = []; // TODO: Implement breeds
initBreeds();
initCats();




const server = http.createServer((req, res) => {
    // POST Request
    if (req.method === 'POST') {
        let body = '';
        if(req.url===`/cats/add-breed`){
            req.on('data', chunk => {
                body += chunk.toString();
            });
    
            req.on('end', () => {
                const data = new URLSearchParams(body);
    
                breeds.push({
                    ...Object.fromEntries(data.entries()),
                });
                saveBreeds();
    
                res.writeHead(302, {
                    'location': '/',
                });
                res.end();
            });
    
            return;

        }else if(req.url===`/cats/add-cat`){
            req.on('data', chunk => {
                body += chunk.toString();
            });
    
            req.on('end', () => {
                const data = new URLSearchParams(body);
                
                cats.push({
                    id: uuid(),
                    ...Object.fromEntries(data.entries()),
                });
                saveBreeds();
                saveCats();
    
                res.writeHead(302, {
                    'location': '/',
                });
                res.end();
            });
    
            return;

        }else if(req.url.includes(`edit`)){
            req.on('data', chunk => {
                body += chunk.toString();
            });
    
            req.on('end', () => {
                const data = new URLSearchParams(body);
                const path = req.url
                const segments=path.split(`/`);
                const id = segments[segments.length-1]
                const index = cats.findIndex(cat=>cat.id==id);
                
                cats[index]={
                    id,
                    ...Object.fromEntries(data.entries()),
                };
                saveCats();
    
                res.writeHead(302, {
                    'location': '/',
                });
                res.end();
            });
    
            return;

        }else if(req.url.includes(`delete`)){
            const path = req.url
            const segments=path.split(`/`);
            const id = segments[segments.length-1]
            const index = cats.findIndex(cat=>cat.id==id);
            cats.splice(index,1)
            saveCats();
            res.writeHead(302, {
                'location': '/',
            });
            res.end();
            return;
        }
   
    }
   

    // Load assets
    if (req.url === '/styles/site.css') {
        res.writeHead(200, {
            'content-type': 'text/css',
        });

        res.write(siteCss);

        return res.end();
    }

    res.writeHead(200, {
        'content-type': 'text/html',
    });
        if(req.url.includes(`edit`)){
            const path = req.url
            const segments=path.split(`/`);
            const id = segments[segments.length-1]
            const cat = cats.find(obj=>obj.id===id)
            
            res.write(editCatHtml(cat,breeds,id));
           
            return res.end();
           }

        if(req.url.includes(`delete`)){
            const path = req.url
            const segments=path.split(`/`);
            const id = segments[segments.length-1]
            const cat = cats.find(obj=>obj.id===id)
            
            res.write(catShelterHtml(cat,breeds));
           
            return res.end();
           }
    
   

    switch (req.url) {
        case '/':
            res.write(homePage(cats));
            break;
        case '/cats/add-breed':
            res.write(addBreedPage());
            break;
        case '/cats/add-cat':
            
            
            res.write(addCatPage(breeds));
            break;
                
        default:
            res.write('Page not Found!');
            break;
    }

    res.end();
});

async function initCats() {
    try {
        const catsJson = await fs.readFile('./cats.json', { encoding: 'utf-8' });
        cats = JSON.parse(catsJson);
    } catch (error) {
        console.log(error.message);
        
    }
    
}

async function saveCats() {
    try {
        const catsJson = JSON.stringify(cats, null, 2);
        await fs.writeFile('./cats.json', catsJson, { encoding: 'utf-8' });
    } catch (error) {
        console.log(error.message);
        
    }
    
}
async function initBreeds() {
    try {
        const breedsJSON = await fs.readFile('./breeds.json', { encoding: 'utf-8' });
        breeds = JSON.parse(breedsJSON);
    } catch (error) {
        console.log(error.message);
        
    }
    
}

async function saveBreeds() {
    try {
        const breedsJSON = JSON.stringify(breeds, null, 2);
        await fs.writeFile('./breeds.json', breedsJSON, { encoding: 'utf-8' }); 
    } catch (error) {
        console.log(error.message);
    
    }
   
}

server.listen(5000);
console.log('Server is listening on http://localhost:5000...');
