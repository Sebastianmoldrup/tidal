export function Navigation() {
  const btn =
    'bg-[#ffcb05] py-2 px-4 hover:cursor-pointer shadow-xl rounded-md text-md grid place-content-center';
  return (
    <nav class='mx-4 my-2 flex justify-between'>
      <h1 class='rounded-3xl px-4 py-2 text-xl font-semibold shadow-xl'>
        Pokemon
      </h1>
      <ul class='flex gap-6'>
        <li class={btn}>
          <a href='/' class='m-0 p-0'>
            Pokedex
          </a>
        </li>
        <li class={btn}>
          <a href='/search' class='m-0 p-0'>
            Search
          </a>
        </li>
        <li class={btn}>
          <a href='favorite' class='m-0 p-0'>
            Favorites
          </a>
        </li>
      </ul>
    </nav>
  );
}
