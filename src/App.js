
function Music({name,picture}) {
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
  );
}

const musicILike = [
  {
    name: 'LOVE DIVE',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIF.B5mMgnMIVK91Wu43ulfK9A%26pid%3DApi&f=1'
  },
  {
    name: 'SUMMER RAIN',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h9z1PXn--DIdhCoN_I_A-AHaEK%26pid%3DApi&f=1'
  },
  {
    name: 'TOMBOY',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.wlCh_3bbsweAIMv-lMwN6gHaEK%26pid%3DApi&f=1'
  },
  {
    name: 'Feel My Rhythm',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.H5lciFp7oxi3lyChSi3ksAHaHc%26pid%3DApi&f=1'
  },
  {
    name: 'O.O',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oi2fAKNtopR2kESnoBqbegHaHa%26pid%3DApi&f=1'
  }
];

function App() {
  return (
    <div>
      {musicILike.map(idol => <Music key={idol.name} name={idol.name} picture={idol.image}/>)}
    </div>
    );
  }

export default App;