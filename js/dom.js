// HTML PARTIALS
// from video============================================
// const root = "http://jsonplaceholder.typicode.com/";
// let uri = root + "posts?userId=1";
// let options = {
//     method: "GET";
// }

// let req = new Request(uri, options);
// fetch(req)
//     .then((response)=> {
//         if (response.ok){
//             return response.json();
//         } else {
//             throw new Error("bad http");
//         }
//     })
//     .then ( (j) =>{
//         console.log(j);
//     })
//     .catch( (erro)=>{
//         console.log("error:", err.message);
//     });
// from video=============================================

// get the reference to the container
const container = document.querySelector(".container");
const errorContainer = document.querySelector(".error");
let url = "partials/home.html";
const links = document.querySelectorAll("nav a");

function handleLinkClick(ev) {
    ev.preventDefault();
    // find out which link is clicked
    let currentLink = ev.target;
    url = currentLink.href;
    handleAjax(url);
}
for (let link of links) {
    link.addEventListener("click", handleLinkClick);
}

function handleAjax(urlParam) {
    fetch(urlParam)
        .then( /* get the response */ function (response) {
            if (response.statusText === "OK") {
                return response.text();
            }
            throw new Error(response.statusText);
        })
        .then( /* parse the data */ function (data) {
            // use your partials
            container.innerHTML = data;
            // let jsonData = JSON.stringify(data);
            // container.textContent = jsonData;
            // console.log(data);
        })
        .catch( /* handle error */ function (err) {
            errorContainer.textContent = `${err.name}: ${err.message}`;
        });
};

// let p = document.querySelectorAll(".container .page p");
// for (let i=0, num=p.length; i<num; i++) {
//     console.log(p[i].textContent);
// }

// LOADING XML DATA
// get the reference to the container
// const container = document.querySelector(".container");
// const errorContainer = document.querySelector(".error");
// const url = "./contents/resources.xml";

// fetch(url)
//     .then(function (response) {
//         if (response.statusText === "OK") {
//             return response.text();
//         }

//         throw new Error(response.statusText);
//     })
//     .then(function (data) {
//         // LET'S TURM THE XML STRING TO DOM OBJECT
//         // create the new instance of paser and save it into variable:
//         let parser = new DOMParser();
    
//         // Reference: https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
//         let parsedXML = parser.parseFromString(data, "text/xml");
    
//         // Collect all <PAGE> elements into node-list.
//         // Start your search for <PAGE> tags from parsedXML:
//         let pageNodeList = parsedXML.querySelectorAll("PAGE");
    
//         // test:
//         console.log(data);
//         console.log(parsedXML);
//         console.log(pageNodeList);
    
//         let allChildrenPage1 = pageNodeList[0].children;
//         console.log(allChildrenPage1);
    
//         // access the heading only
//         console.log(allChildrenPage1[0].textContent);
        
//         // Parse the content as <h1> tage and display it on the page!
//         container.innerHTML = `<h1>${allChildrenPage1[0].textContent}</h1>`;
//     })
//     .catch(function (err) {
//         errorContainer.textContent = `${err.name}: ${err.message}`;
//     });
// */




