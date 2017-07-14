'use strict';

/* eslint no-undef: 0 */
/* eslint new-cap: 0 */
/* eslint comma-dangle: 0 */

db.shows.deleteMany({
  name: {
    $in: ['The Simpsons', 'Game of Thrones', 'Vikings']
  }
});

db.shows.insertMany([{
  _id: ObjectId('5968e362dede238a591766c8'),
  created: new Date(),
  name: 'The Simpsons',
  description: 'The satiric adventures of a working-class family in the misfit city of Springfield.',
  picture_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
}, {
  _id: ObjectId('5967db7e535a33178c03a7eb'),
  created: new Date(),
  name: 'Game of Thrones',
  description: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
  picture_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
}, {
  _id: ObjectId('5968e379dede238a591766ca'),
  created: new Date(),
  name: 'Vikings',
  description: 'The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.',
  picture_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_.jpg'
}]);

db.episodes.deleteMany({
  _id: {
    $in: [ObjectId('5968e5badede238a591766ce'), ObjectId('5968e5d1dede238a591766cf'),
      ObjectId('5968e57edede238a591766cb'), ObjectId('5968e58adede238a591766cd')]
  }
});

db.episodes.insertMany([{
  _id: ObjectId('5968e5badede238a591766ce'),
  created: new Date(),
  title: 'Simpsons Roasting on an Open Fire',
  description: 'When Homer receives no holiday bonus, he hopes to make extra money by becoming a Mall Santa, in an attempt to bring the family a happy holiday.',
  duration: 30,
  season: 1,
  episode: 1,
  picture_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg',
  show: ObjectId('5968e362dede238a591766c8')
}, {
  _id: ObjectId('5968e5d1dede238a591766cf'),
  created: new Date(),
  title: 'Bart the Genius',
  description: 'Bart ends up at a school for gifted children after cheating on an IQ test.',
  duration: 30,
  season: 1,
  episode: 2,
  picture_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4OTI5MDM0OV5BMl5BanBnXkFtZTgwNTE1NjQ2MjE@._V1_.jpg',
  show: ObjectId('5968e362dede238a591766c8')
}]);

db.episodes.insertMany([{
  _id: ObjectId('5968e57edede238a591766cb'),
  created: new Date(),
  title: 'Winter Is Coming',
  description: 'Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon\'s place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.',
  duration: 62,
  season: 1,
  episode: 1,
  picture_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5MDU3OTkzMF5BMl5BanBnXkFtZTcwOTc0ODg5NA@@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
  show: ObjectId('5967db7e535a33178c03a7eb')
}, {
  _id: ObjectId('5968e58adede238a591766cd'),
  created: new Date(),
  title: 'The Wars to Come ',
  description: 'Cersei and Jaime adjust to a world without Tywin. Tyrion and Varys arrive at Pentos. In Meereen, a new enemy emerges. Jon is caught between two kings.',
  duration: 53,
  season: 5,
  episode: 1,
  picture_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQ0ODQyMl5BMl5BanBnXkFtZTgwMDczODYyNDE@._V1_SY1000_CR0,0,1411,1000_AL_.jpg',
  show: ObjectId('5967db7e535a33178c03a7eb')
}]);

