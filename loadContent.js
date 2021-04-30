const fs = require("fs");

const aboutPage = fs.readFileSync("./Content/HTML/about.html", "utf-8", 'r');
const blogPage = fs.readFileSync("./Content/HTML/blog.html", "utf-8", 'r');
const contactPage = fs.readFileSync("./Content/HTML/contact.html", "utf-8", 'r');
const indexPage = fs.readFileSync("./Content/HTML/index.html", "utf-8", 'r');
const pricingPage = fs.readFileSync("./Content/HTML/pricing.html", "utf-8", 'r');
const servicesPage = fs.readFileSync("./Content/HTML/services.html", "utf-8", 'r');
const workPage = fs.readFileSync("./Content/HTML/work.html", "utf-8", 'r');

console.log(workPage);
