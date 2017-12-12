const db = require('./db');
const models = require('./db/models');
const Species = models.Species;

db
  .sync()
  .then(() => {
    return Species.bulkCreate([
      {
        name: 'Orangutan',
        image: 'none',
        genus: 'Pongo',
        family: 'Hominidae (Great Apes)',
        kingdom: 'Animalia (Animal)',
        phylum: 'Chordata (Vertebrate)',
        class: 'Mammalia (Mammal)',
        order: 'Primates'
      },
      {
        name: 'Tiger',
        image: 'none',
        genus: 'Panthera',
        family: 'Felidae (Cat)',
        kingdom: 'Animalia (Animal)',
        phylum: 'Chordata (Vertebrate)',
        class: 'Mammalia (Mammal)',
        order: 'Carnivora (Carnivore)'
      }
    ]);
  })
  .then(() => console.log('done seeding'));
