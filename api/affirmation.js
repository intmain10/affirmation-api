
export default function handler(req, res) {
    /* ---------------- GREETING LOGIC ---------------- */

    const openers = [
        "Hey",
        "Hey there",
        "Just a small thought for you",
        "In case you need this",
        "A gentle reminder",
        "Something warm for you"
    ];

    const name = req.query.name;
    const opener = openers[Math.floor(Math.random() * openers.length)];

    const greeting = name ? `${opener}, ${name}` : opener;

    /* ---------------- TIME MODE ---------------- */

    const hour = new Date().getHours();
    const isNight = hour >= 19 || hour < 6;

    const background = isNight
        ? "linear-gradient(135deg, #1c1c2b, #2c2c44)"
        : "linear-gradient(135deg, #fff0f6, #ffe3ec)";

    const cardBg = isNight ? "#26263d" : "#ffffff";
    const textColor = isNight ? "#f5c2e7" : "#d63384";
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
        "You’re learning, and that counts."
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
        "Someone out there feels lucky to know you.",
        "You have a presence that feels comforting.",
        "You deserve love that feels easy, not confusing.",
        "You make ordinary moments feel nicer.",
        "You’re the kind of person people remember fondly.",
        "You’re not too much. You’re just right.",
        "You deserve consistency, not mixed signals.",
        "You have a way of making people feel heard.",
        "You’re the calm in someone’s chaos.",
        "You deserve care, even when you say you’re fine.",

        "You don’t need to earn affection. You already deserve it.",
        "You have a warmth that can’t be faked.",
        "You’re easy to care about.",
        "You bring peace into spaces without trying.",
        "You deserve someone who chooses you clearly.",
        "You have a beautiful emotional depth.",
        "You’re the kind of person love feels safe with.",
        "You deserve gentle mornings and peaceful nights.",
        "You matter more than you realize to the right people.",
        "You’re someone worth showing up for.",

        // 😄 Light humour
        "Reminder: you’re doing great… even if your brain says otherwise.",
        "You survived today. That’s already impressive.",
        "You’re allowed to rest. Productivity can wait.",
        "Not every day needs a glow-up. Some days just need snacks.",
        "You’re cooler than you think. Yes, really.",
        "Your overthinking brain can chill for five minutes.",
        "You don’t need to fix everything today.",
        "You’re allowed to have lazy moments. Humans invented them.",
        "You’re doing better than your inner critic claims.",
        "You’re not dramatic. You’re just expressive.",

        "You don’t need to be perfect to be appreciated.",
        "Some days you shine, some days you nap. Balance.",
        "You’re not behind. You’re just human.",
        "You don’t need motivation today. You need kindness.",
        "Your effort still counts, even when it feels small.",
        "You’re allowed to say no without a long explanation.",
        "You don’t need to impress anyone today.",
        "You’re allowed to log off mentally.",
        "You’re still lovable on low-energy days.",
        "You’re doing fine. Breathe.",

        // 😉 Soft pickup / playful warmth
        "If kindness had a face, it would look a bit like you.",
        "You have a smile that makes days lighter.",
        "Talking to you always feels easy.",
        "You’re effortlessly charming. That’s rare.",
        "You make people feel comfortable being themselves.",
        "You have a vibe that’s hard to forget.",
        "You’re the kind of person people want to keep around.",
        "You have a quiet confidence that’s attractive.",
        "You make conversations better just by being in them.",
        "You’re someone worth getting to know slowly.",

        "You have a presence that lingers in a good way.",
        "You make small moments feel special.",
        "You’re naturally easy to like.",
        "You have a warmth people feel immediately.",
        "You’re the kind of person silence feels comfortable with.",
        "You’re not trying too hard, and that’s what makes it nice.",
        "You have an energy people gravitate toward.",
        "You make people smile without trying.",
        "You’re quietly captivating.",
        "You’re someone a good day would choose.",

        // 🇳🇵 Nepali-style soft pickup lines
        "You have the kind of smile that feels like a peaceful hill morning.",
        "Talking to you feels calm, like evening tea after a long day.",
        "You remind me of quiet places that feel safe.",
        "You have a warmth that feels very familiar.",
        "Being around you feels simple in a good way.",
        "You make silence feel comfortable, not awkward.",
        "You have a gentle kind of beauty.",
        "You feel like someone I could talk to for hours.",
        "You have the kind of presence that makes days lighter.",
        "You feel like home in a soft, unexplainable way.",

        "You don’t try too hard, and that’s what makes you special.",
        "You have a calm energy that stays with people.",
        "You feel like a good conversation waiting to happen.",
        "You make ordinary moments feel meaningful.",
        "You have the kind of smile that doesn’t need reasons.",
        "You feel like someone who understands without many words.",
        "You have a peaceful kind of charm.",
        "You’re the kind of person people feel safe opening up to.",
        "You bring warmth without even trying.",
        "You feel like a quiet happiness.",

        "You have the kind of vibe that feels respectful and kind.",
        "You make simple things feel nice.",
        "You feel like someone worth knowing slowly.",
        "You have a softness that’s rare.",
        "You make the world feel less rushed.",
        "You feel like calm after chaos.",
        "You have the kind of presence people remember.",
        "You’re easy to like, naturally.",
        "You feel like a gentle pause in a busy day.",
        "You have a quiet magic about you."
    ];

    const showPickup = req.query.pickup !== "false";

    const pool = showPickup
        ? [...normalAffirmations, ...pickupAffirmations]
        : normalAffirmations;

    const message = pool[Math.floor(Math.random() * pool.length)];

    /* ---------------- RESPONSE ---------------- */

    res.setHeader("Content-Type", "text/html");

    res.status(200).send(`
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>A gentle thought</title>
        </head>
  
        <body style="
          margin:0;
          font-family: system-ui, -apple-system;
          background: ${background};
          display:flex;
          align-items:center;
          justify-content:center;
          height:100vh;
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
  
            <div>
              ${message}
            </div>
  
            <div style="
              margin-top:18px;
              font-size:13px;
              color:${isNight ? "#bbb" : "#999"};
            ">
              ${subText}
            </div>

            <button
  onclick="window.location.href='/api/create'"
  style="
    margin-top:10px;
    padding:8px 14px;
    border-radius:12px;
    border:none;
    background:transparent;
    color:#999;
    font-size:13px;
    cursor:pointer;
  "
>
  Make your own ✨
</button>

  
            <button
              onclick="navigator.share ? navigator.share({ title: 'A gentle thought', url: window.location.href }) : alert('Copy the link and share 💗')"
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


  
          </div>
  
        </body>
      </html>
    `);
}
