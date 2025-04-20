# 🌪 Ultimate Meme Chaos Bookmarklet (Toggle Edition)

Bring **pure, unhinged chaos** to any website with this cursed bookmarklet. Every 5 seconds, a random meme appears **and** a random meme sound blasts from your speakers. But now, you can actually stop it with a big red panic button 🛑.

---

## 🔥 Features
- Spawns a new meme image every 5 seconds.
- Plays a random meme sound with each spawn.
- Memes appear at random positions and spin for dramatic effect.
- Floating **Toggle Button** to start/stop chaos at will.
- Works on almost any website (just not super-secure internal pages).

---

## 🚀 How to Use

1. **Copy the Bookmarklet Code**  
   Click [here](#the-chaos-code) or scroll down to grab the full code.

2. **Create a New Bookmark**  
   - In your browser, right-click the bookmarks bar → “Add page”
   - Name it something like `🧨 CHAOS MODE`
   - Paste the code into the **URL** field

3. **Click to Launch the Chaos**  
   - Visit any website
   - Click your bookmark
   - Watch and listen to the madness
   - Click the “🌀 Stop Meme Chaos” button in the bottom-right corner when it’s just too much to handle 😵‍💫

---

## 📜 The Chaos Code

```javascript
javascript:(function(){
  if (window.__memeChaosRunning) {
    window.__memeChaosRunning = false;
    clearInterval(window.__memeChaosInterval);
    document.getElementById('meme-chaos-toggle')?.remove();
    console.log('💤 Meme chaos stopped.');
    return;
  }

  window.__memeChaosRunning = true;

  const memes = [
    'https://i.imgflip.com/30b1gx.jpg',
    'https://i.imgflip.com/1bij.jpg',
    'https://i.imgflip.com/3si4.jpg',
    'https://i.imgflip.com/4t0m5.jpg',
    'https://i.imgflip.com/26am.jpg',
    'https://i.imgflip.com/1ur9b0.jpg'
  ];

  const sounds = [
    'https://www.myinstants.com/media/sounds/vine-boom.mp3',
    'https://www.myinstants.com/media/sounds/windows-xp-error.mp3',
    'https://www.myinstants.com/media/sounds/roblox-death-sound.mp3',
    'https://www.myinstants.com/media/sounds/mlg-airhorn.mp3',
    'https://www.myinstants.com/media/sounds/oof_1.mp3'
  ];

  // Create toggle button
  const button = document.createElement('button');
  button.id = 'meme-chaos-toggle';
  button.innerText = '🌀 Stop Meme Chaos';
  Object.assign(button.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 10000,
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
    boxShadow: '0 0 10px rgba(0,0,0,0.4)'
  });

  button.onclick = () => {
    window.__memeChaosRunning = false;
    clearInterval(window.__memeChaosInterval);
    button.remove();
    console.log('💤 Meme chaos stopped.');
  };

  document.body.appendChild(button);

  // Start chaos loop
  window.__memeChaosInterval = setInterval(() => {
    if (!window.__memeChaosRunning) return;

    const img = document.createElement('img');
    img.src = memes[Math.floor(Math.random() * memes.length)];
    img.style.position = 'fixed';
    img.style.top = Math.random() * window.innerHeight + 'px';
    img.style.left = Math.random() * window.innerWidth + 'px';
    img.style.width = '200px';
    img.style.zIndex = 9999;
    img.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
    document.body.appendChild(img);

    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.play();
  }, 5000);

  console.log('🔥 Meme chaos started!');
})();
