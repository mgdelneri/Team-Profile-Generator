function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" type="text/css" href="./dist/style.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    </head>
    <body>
    
        <header>
            <h1>My Team</h1>
        </header>
        
        <main>
            <div class="container">
                <div class="row d-flex justify-content-center justify-content-between box-container">
                    <div class="col" id="box">
                        <h3>Manager</h3>
                        <p>Name: <span></span></p>
                        <p>ID: <span></span></p>
                        <p>Email: <span></span></p>
                    </div>
                    <div class="col" id="box">
                        <h3>Engineer</h3>
                        <p>Name: <span></span></p>
                        <p>ID: <span></span></p>
                        <p>Email: <span></span></p>
                        <p>GitHub: <span></span></p>
                    </div>
                    <div class="col" id="box">
                        <h3>Engineer</h3>
                        <p>Name: <span></span></p>
                        <p>ID: <span></span></p>
                        <p>Email: <span></span></p>
                        <p>GitHub: <span></span></p>
                    </div>
                </div>
                <div class="row d-flex justify-content-center justify-content-between box-container">
                    <div class="col" id="box">
                        <h3>Intern</h3>
                        <p>Name: <span></span></p>
                        <p>ID: <span></span></p>
                        <p>Email: <span></span></p>
                        <p>School: <span></span></p>
                    </div>
                    <div class="col" id="box">
                        <h3>Intern</h3>
                        <p>Name: <span></span></p>
                        <p>ID: <span></span></p>
                        <p>Email: <span></span></p>
                        <p>School: <span></span></p>
                    </div>
                </div>
            </div>
    
        </main>
        
    </body>
    </html>`
}

module.exports = generateHTML;