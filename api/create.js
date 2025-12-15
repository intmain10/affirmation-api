export default function handler(req, res) {
    res.setHeader("Content-Type", "text/html");
  
    res.send(`
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Make your own</title>
        </head>
  
        <body style="
          margin:0;
          font-family: system-ui;
          background: linear-gradient(135deg, #fff0f6, #ffe3ec);
          display:flex;
          align-items:center;
          justify-content:center;
          height:100vh;
        ">
  
          <div style="
            background:#fff;
            padding:26px;
            border-radius:18px;
            max-width:420px;
            width:100%;
            box-shadow:0 12px 30px rgba(0,0,0,0.12);
          ">
  
            <h2 style="color:#d63384; text-align:center;">
              Make your own 🌷
            </h2>
  
            <label style="font-size:14px;">Name (optional)</label>
            <input id="name" placeholder="Your name"
              style="
                width:100%;
                margin:6px 0 14px;
                padding:10px;
                border-radius:12px;
                border:1px solid #ddd;
              "/>
  
            <label style="font-size:14px;">
              Include playful / pickup lines?
            </label>
  
            <select id="pickup"
              style="
                width:100%;
                margin:6px 0 18px;
                padding:10px;
                border-radius:12px;
                border:1px solid #ddd;
              ">
              <option value="true">Yes 😊</option>
              <option value="false">No 🌸</option>
            </select>
  
            <button onclick="generate()"
              style="
                width:100%;
                padding:12px;
                border:none;
                border-radius:14px;
                background:#ffd6e7;
                color:#a61e4d;
                font-size:15px;
                cursor:pointer;
              ">
              Generate my link ✨
            </button>
  
            <div id="result" style="margin-top:18px;"></div>
  
            <script>
              function generate() {
                const name = document.getElementById("name").value;
                const pickup = document.getElementById("pickup").value;
  
                let url = "/api/affirmation?pickup=" + pickup;
                if (name) url += "&name=" + encodeURIComponent(name);
  
                document.getElementById("result").innerHTML = \`
                  <p style="font-size:14px;">Your link:</p>
                  <input value="\${location.origin + url}"
                    style="
                      width:100%;
                      padding:10px;
                      border-radius:12px;
                      border:1px solid #ddd;
                    "/>
                \`;
              }
            </script>
  
          </div>
  
        </body>
      </html>
    `);
  }
  