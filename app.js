const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');

    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>OpenShift Demo</title>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap" rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'IBM Plex Sans', sans-serif;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background: linear-gradient(135deg, #0f62fe, #002d9c);
            }

            .card {
                width: 500px;
                background: white;
                padding: 50px;
                border-radius: 16px;
                text-align: center;
                box-shadow: 0 30px 60px rgba(0,0,0,0.3);
            }

            .badge {
                display: inline-block;
                padding: 8px 20px;
                background: #defbe6;
                color: #198038;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 20px;
            }

            h1 {
                font-size: 32px;
                color: #161616;
                margin-bottom: 15px;
            }

            .subtitle {
                font-size: 16px;
                color: #525252;
                margin-bottom: 30px;
            }

            .version {
                display: inline-block;
                background: #0f62fe;
                color: white;
                padding: 15px 40px;
                border-radius: 10px;
                font-size: 20px;
                font-weight: 600;
                margin: 20px 0;
            }

            .docker-info {
                background: #f4f4f4;
                padding: 20px;
                border-radius: 10px;
                margin: 25px 0;
            }

            .docker-title {
                font-size: 14px;
                color: #525252;
                margin-bottom: 10px;
                font-weight: 600;
            }

            .docker-tag {
                background: linear-gradient(135deg, #0f62fe, #0043ce);
                color: white;
                padding: 10px 15px;
                border-radius: 6px;
                font-size: 14px;
                margin: 5px;
                display: inline-block;
            }

            .footer {
                margin-top: 30px;
                font-size: 13px;
                color: #8d8d8d;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="badge">✓ Deployment Successful</div>
            
            <h1>🚀 OpenShift Demo</h1>
            
            <div class="subtitle">
                Application deployed on OpenShift Platform
            </div>

            <div class="version">Version 1.0</div>

            <div class="docker-info">
                <div class="docker-title">⚙️ OpenShift Deployment</div>
                <div class="docker-tag">☁️ Platform: OpenShift</div>
                <div class="docker-tag">🟢 Runtime: Node.js</div>
                <div class="docker-tag">🔌 Port: 3000</div>
            </div>

            <div class="footer">
                OpenShift | Node.js 
            </div>
        </div>
    </body>
    </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});


