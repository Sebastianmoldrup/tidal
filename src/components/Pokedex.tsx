import Dropdown from './Dropdown';
import { loadAmount } from '../utils/signals';

export default function Pokedex() {
  const getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${''}`;
  };

  return (
    <div>
      <div>Pokedex</div>
      <div>
        <button onClick={() => getPokemon()}>Load more</button>
        <Dropdown />
      </div>
    </div>
  );
}
