export default function handler(req, res) {
    const affirmations = [
      // 🌸 Human, conversational
  "Hey, just saying… you handled today better than you think.",
  "You don’t need to have it all figured out. Really.",
  "Some days surviving is already an achievement. Today counts.",
  "You’re allowed to feel tired without feeling guilty.",
  "You make sense, even on days you doubt yourself.",
  "You’re doing your best with what you have right now.",
  "You don’t owe the world perfection.",
  "It’s okay if today was a bit slow. You’re still moving.",
  "You have a way of making things feel calmer.",
  "You’re more thoughtful than you give yourself credit for.",

  "You don’t need permission to be proud of yourself.",
  "Even on quiet days, you matter.",
  "You’re allowed to take breaks without explaining.",
  "You’re not late in life. You’re just on your own timing.",
  "You’re learning. That counts as progress.",
  "You bring a softness that people notice.",
  "You’re stronger than yesterday, even if only a little.",
  "You’re allowed to change your mind.",
  "You have a good heart. That shows.",
  "You don’t need to rush. Life isn’t chasing you.",

  // 🔥 Warm / heart-moment
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
  
    const name = req.query.name || "Hey there";
    const msg = affirmations[Math.floor(Math.random() * affirmations.length)];
  
    res.setHeader("Content-Type", "text/html");
  
    res.status(200).send(`
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Affirmation</title>
        </head>
        <body style="
          margin:0;
          font-family: system-ui, -apple-system;
          background: linear-gradient(135deg, #fff0f6, #ffe3ec);
          display:flex;
          align-items:center;
          justify-content:center;
          height:100vh;
        ">
          <div style="
            background:#fff;
            padding:28px;
            border-radius:16px;
            max-width:420px;
            text-align:center;
            box-shadow:0 10px 30px rgba(0,0,0,0.08);
            color:#d63384;
            font-size:20px;
            line-height:1.5;
          ">
            <strong>${name}</strong>,<br/><br/>
            ${msg}
            <div style="
              margin-top:18px;
              font-size:13px;
              color:#999;
            ">
              Refresh for another thought 🌸
            </div>
          </div>
        </body>
      </html>
    `);
  }
  
