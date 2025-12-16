export default function handler(req, res) {
    /* ---------------- SAFETY ---------------- */
    res.setHeader("Cache-Control", "no-store");
  
    const escapeHTML = (str = "") =>
      str.replace(/[&<>"']/g, (m) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
      );
  
    /* ---------------- GREETING ---------------- */
  
    const openers = [
      "Hey",
      "Hey there",
      "Just a small thought for you",
      "In case you need this",
      "A gentle reminder",
      "Something warm for you"
    ];
  
    const rawName = (req.query.name || "").trim();
    const name =
      rawName.length >= 2 && /^[a-zA-Z\s]+$/.test(rawName)
        ? escapeHTML(rawName)
        : null;
  
    const opener = openers[Math.floor(Math.random() * openers.length)];
    const greeting = name ? `${opener}, ${name}` : opener;
  
    /* ---------------- TIME MODE ---------------- */
  
    const hour = new Date().getHours();
    const isNight = hour >= 19 || hour < 6;
  
    const subText = isNight
      ? "Hope today treated you kindly 🌙"
      : "Have a gentle day 🌸";
  
    /* ---------------- AFFIRMATIONS ---------------- */
  
    const normalAffirmations = [
      "You handled today better than you think.",
      "You don’t need to have everything figured out.",
      "You’re allowed to move at your own pace.",
      "Some days surviving is already enough.",
      "You’re doing fine. Breathe.",
      "You bring calm into places without trying.",
      "You’re not behind. You’re human.",
      "You’re allowed to rest without guilt.",
      "You matter, even on quiet days.",
      "You’re learning, and that counts.",
      "Reminder: you’re doing great… even if your brain says otherwise.",
      "You survived today. That’s already impressive.",
      "Not every day needs a glow-up. Some days just need snacks.",
      "You don’t need to fix everything today.",
      "You’re still lovable on low-energy days."
    ];
  
    const pickupAffirmations = [
      "You have a smile that feels like a peaceful hill morning.",
      "Talking to you feels calm, like evening tea after a long day.",
      "You make silence feel comfortable, not awkward.",
      "You have a warmth people naturally trust.",
      "You feel like someone worth knowing slowly.",
      "You’re effortlessly easy to like.",
      "You have a quiet charm that stays with people.",
      "You make ordinary moments feel nicer.",
      "You feel like home in a soft, unexplainable way.",
      "You’re the kind of person people remember fondly.",
  
      // 🇳🇵 Nepali-vibe
      "You remind me of quiet places that feel safe.",
      "You have a calm energy that stays with people.",
      "You make ordinary moments feel meaningful.",
      "You have the kind of smile that doesn’t need reasons.",
      "You feel like calm after chaos.",
      "You feel like a gentle pause in a busy day.",
      "You have a quiet magic about you."
    ];
  
    const showPickup = req.query.pickup !== "false";
    const pool = showPickup
      ? [...normalAffirmations, ...pickupAffirmations]
      : normalAffirmations;
  
    const message = pool[Math.floor(Math.random() * pool.length)];
  
    /* ==================================================
       📱 JSON MODE (for Android / apps)
       ================================================== */
  
    if (req.query.format === "json") {
      res.setHeader("Content-Type", "application/json");
  
      return res.status(200).json({
        greeting,
        message,
        isNight,
        pickupEnabled: showPickup
      });
    }
  
    /* ==================================================
       🌐 HTML MODE (browser / sharing)
       ================================================== */
  
    res.setHeader("Content-Type", "text/html");
  
    const background = isNight
      ? "linear-gradient(135deg, #1c1c2b, #2c2c44)"
      : "linear-gradient(135deg, #fff0f6, #ffe3ec)";
  
    const cardBg = isNight ? "#26263d" : "#ffffff";
    const textColor = isNight ? "#f5c2e7" : "#d63384";
  
    res.status(200).send(`
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>A gentle thought</title>
        </head>
  
        <body style="
          margin:0;
          font-family: system-ui, -apple-system;
          background:${background};
          display:flex;
          align-items:center;
          justify-content:center;
          min-height:100vh;
        ">
  
          <div style="
            background:${cardBg};
            padding:28px;
            border-radius:18px;
            max-width:420px;
            text-align:center;
            box-shadow:0 12px 30px rgba(0,0,0,0.15);
            color:${textColor};
            font-size:20px;
            line-height:1.5;
          ">
  
            <div style="font-weight:600; margin-bottom:14px;">
              ${greeting}
            </div>
  
            <div>${message}</div>
  
            <div style="
              margin-top:18px;
              font-size:13px;
              color:${isNight ? "#bbb" : "#999"};
            ">
              ${subText}
            </div>
  
            <button
              onclick="navigator.share
                ? navigator.share({ title:'A gentle thought', url:window.location.href })
                : alert('Copy the link and share 💗')"
              style="
                margin-top:18px;
                padding:10px 18px;
                border-radius:14px;
                border:none;
                background:${isNight ? "#3a3a5c" : "#ffd6e7"};
                color:${isNight ? "#f5c2e7" : "#a61e4d"};
                font-size:14px;
                cursor:pointer;
              "
            >
              Share with someone 🌷
            </button>
  
            <button
              onclick="window.location.href='/api/create'"
              style="
                margin-top:16px;
                padding:12px 18px;
                border-radius:16px;
                border:none;
                background:${isNight ? "#2f2f48" : "#ffe3ec"};
                color:${isNight ? "#f5c2e7" : "#a61e4d"};
                font-size:15px;
                cursor:pointer;
                width:100%;
              "
            >
              ✨ Create your own affirmation link
            </button>
  
          </div>
        </body>
      </html>
    `);
  }
  