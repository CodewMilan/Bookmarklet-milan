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



    }, 2000);
  })();