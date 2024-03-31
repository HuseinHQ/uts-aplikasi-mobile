export type dummyDataType = {
  id: string;
  title: string;
  releaseYear: number;
  author: string;
  image: string;
};

const dummyData: dummyDataType[] = [
  {
    id: '1',
    title: 'Yoru Ni Kakeru',
    releaseYear: 2019,
    author: 'Yoasobi',
    image: require('../../assets/song_1.png'),
  },
  {
    id: '2',
    title: 'Tabun',
    releaseYear: 2021,
    author: 'Yoasobi',
    image: require('../../assets/song_2.png'),
  },
  {
    id: '3',
    title: 'Ano Yume Wo Nazotte',
    releaseYear: 2021,
    author: 'Yoasobi',
    image: require('../../assets/song_3.png'),
  },
  {
    id: '4',
    title: 'Haruka',
    releaseYear: 2022,
    author: 'Yoasobi',
    image: require('../../assets/song_4.png'),
  },
  {
    id: '5',
    title: 'Idol',
    releaseYear: 2023,
    author: 'Yoasobi',
    image: require('../../assets/song_5.png'),
  },
];

export default dummyData;
