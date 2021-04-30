const contents = require("./loadContent")


const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url == "/about")
        res.write(contents.aboutPage);

    else if(req.url == "/blog")
        res.write(contents.blogPage);

    else if(req.url == "/contact")
        res.write(contents.contactPage);

    else if(req.url == "/index" || req.url == "/")
        res.write(contents.indexPage);

    else if(req.url == "/pricing")
        res.write(contents.pricingPage);
    
    else if(req.url == "/services")
        res.write(contents.servicesPage);

    else if(req.url == "/work")
        res.write(contents.workPage);

    else
        res.write("<h1>This Page doesn't exist</h1><br><a href = '/'>Go to Index Page</a>");

    res.end();
});


server.listen(2141);