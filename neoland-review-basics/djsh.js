const users = [
    {
      name: 'Manolo el del bombo',
      favoritesSounds: {
        waves: { format: 'mp3', volume: 50 },
        rain: { format: 'ogg', volume: 60 },
        firecamp: { format: 'mp3', volume: 80 },
      },
    },
    {
      name: 'Mortadelo',
      favoritesSounds: {
        waves: { format: 'mp3', volume: 30 },
        shower: { format: 'ogg', volume: 55 },
        train: { format: 'mp3', volume: 60 },
      },
    },
    {
      name: 'Super Lopez',
      favoritesSounds: {
        shower: { format: 'mp3', volume: 50 },
        train: { format: 'ogg', volume: 60 },
        firecamp: { format: 'mp3', volume: 80 },
      },
    },
    {
      name: 'El culebra',
      favoritesSounds: {
        waves: { format: 'mp3', volume: 67 },
        wind: { format: 'ogg', volume: 35 },
        firecamp: { format: 'mp3', volume: 60 },
      },
    },
  ];
  
  const soundCount = {};
  
  for (const user of users) {
    for (const sound in user.favoritesSounds) {
        console.log(sound)
      if (soundCount[sound] === undefined) {
        soundCount[sound] = 1;
      } else {
        soundCount[sound]++;
      }
    }
  }
  console.log(soundCount)
  
  const finalCount = [];
  
  for (const sound in soundCount) {
    finalCount.push({ sound: sound, count: soundCount[sound] });
  }
  
  console.log(finalCount);
  