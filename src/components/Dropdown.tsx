import { isOpen, loadAmount } from '../utils/signals';

export default function Dropdown() {
  return (
    <div>
      <button
        class='inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='button'
        onClick={() => (isOpen.value = !isOpen.value)}
      >
        Dropdown button{' '}
        <svg
          class='ml-2 h-4 w-4'
          aria-hidden='true'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
      </button>

      <div
        class={`z-10 ${
          isOpen.value ? '' : 'hidden'
        } w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
      >
        <ul
          class='py-2 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownDefaultButton'
        >
          <li>
            <a
              href='#'
              class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => (loadAmount.value = 25)}
            >
              25
            </a>
          </li>
          <li>
            <a
              href='#'
              class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => (loadAmount.value = 50)}
            >
              50
            </a>
          </li>
          <li>
            <a
              href='#'
              class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => (loadAmount.value = 75)}
            >
              75
            </a>
          </li>
          <li>
            <a
              href='#'
              class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => (loadAmount.value = 100)}
            >
              100
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
