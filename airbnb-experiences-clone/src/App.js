import logo from './logo.svg';
import './App.css';
import data from './data';
import Card from './Card';
const cards = data.map(item =>
  <Card
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    country={item.location}
    title={item.title}
    price={item.price}
    description={item.description} />
)
function App() {
  return (cards);
}

export default App;
