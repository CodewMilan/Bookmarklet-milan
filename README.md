# 🌪 Ultimate Meme Chaos Bookmarklet

Bring **pure, unhinged chaos** to any website with this cursed bookmarklet. Every 5 seconds, a random meme pops up **and** a random meme sound blasts from your speakers. Nobody asked for this. You're doing this because you can.

## 🔥 Features
- Spawns a new meme image every 5 seconds.
- Plays a random meme sound with each spawn.
- Memes appear at random positions and spin for extra nonsense.
- Works on **any** webpage (except super-restricted ones like YouTube Studio or browser settings).

## 🚀 How to Use

1. **Copy the Bookmarklet Code**  
   scroll down to grab the code.

2. **Create a New Bookmark**  
   - In your browser, right-click the bookmarks bar → “Add page”  
   - Name it something dumb like `💀 MEME CHAOS`
   - Paste the code into the **URL** field

3. **Open Any Website**  
   Click the bookmark and watch (and hear) the chaos begin.

---

## 📜 The Chaos Code

```javascript
javascript:(function(){
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

  setInterval(() => {
    // Add meme image
    const img = document.createElement('img');
    img.src = memes[Math.floor(Math.random() * memes.length)];
    img.style.position = 'fixed';
    img.style.top = Math.random() * window.innerHeight + 'px';
    img.style.left = Math.random() * window.innerWidth + 'px';
    img.style.width = '200px';
    img.style.zIndex = 9999;
    img.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
    document.body.appendChild(img);

    // Play meme sound
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.play();
  }, 2000);
})();
