const colors = {
  red: {
    wrapperBackground: "#FF0000",
    headerBackground: "#FF0000",
    headerColor: "white",
    photoBorderColor: "white"
  },
  yellow: {
    wrapperBackground: "#FFFF00",
    headerBackground: "#FFFF00",
    headerColor: "black",
    photoBorderColor: "black"
  },
  purple: {
    wrapperBackground: "#800080",
    headerBackground: "#800080",
    headerColor: "white",
    photoBorderColor: "white"
  },
  green: {
    wrapperBackground: "#008000",
    headerBackground: "#008000",
    headerColor: "white",
    photoBorderColor: "white"
  },
  blue: {
    wrapperBackground: "#0000FF",
    headerBackground: "#0000FF",
    headerColor: "white",
    photoBorderColor: "white"
  },
  orange: {
    wrapperBackground: "#FFA500",
    headerBackground: "#FFA500",
    headerColor: "black",
    photoBorderColor: "black"
  }
};

function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <title>Document</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: ${colors[data.color].wrapperBackground};
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 300px;
           height: 400px;
           border-radius: 50%;
           margin-top: -75px;
           border: 10px solid ${colors[data.color].photoBorderColor};
           }
           .photo-header h1, .photo-header h3 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 10px 0;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 20px;
           }
  
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: ${colors[data.color].headerBackground};
             color: ${colors[data.color].headerColor};
             margin: 20px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           } 
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
        </head>
        <body>
           <div class="wrapper">
              <div class="photo-header">
                 <img src="${data.avatar_url}" alt="Profile Picture" />
                 <h1>Hi!</h1>
                 <h2>
                 My name is ${data.name}</h1>
                 <nav class="links-nav">
                    <a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/${data.location}"><i class="fas fa-location-arrow"></i> ${data.location}</a>
                    <a class="nav-link" target="_blank" rel="noopener noreferrer" href="${data.html_url}"><i class="fab fa-github-alt"></i> GitHub</a>
                    
                 </nav>
              </div>
              <main>
                 <div class="container">
                 <div class="row">
                    <div class="col">
                       <h3>${data.bio}</h3>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col">
                       <div class="card">
                         <h3>Public Repositories</h3>
                         <h4>${data.public_repos}</h4>
                       </div>
                    </div>
                     <div class="col">
                     <div class="card">
                       <h3>Followers</h3>
                       <h4>${data.followers}</h4>
                     </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col">
                    <div class="card">
                       <h3>GitHub Stars</h3>
                       <h4>${data.stars}</h4>
                       </div>
                    </div>
                     <div class="col">
                     <div class="card">
                       <h3>Following</h3>
                       <h4>${data.following}</h4>
                       </div>
                    </div>
                    </div>
                 </div>
              </main>
           </div>
        </body>
     </html>`
}


module.exports = generateHTML;