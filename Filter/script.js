const container = document.getElementById('container');
const conversationsContainer = document.getElementById(
  'conversations-container'
);
const searchbar = document.getElementById('searchbar');
const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('#open-btn');

const users = [
  {
    image:
      'https://pbs.twimg.com/profile_images/1594274868387889154/BGjP25UN_400x400.jpg',
    name: 'Catalin Pit',
    username: '@catalinmpit',
    id: 'user-1',
  },
  {
    image:
      'https://pbs.twimg.com/profile_images/1440624750808625171/7kSNddJC_400x400.jpg',
    name: 'Florin Pop',
    username: '@florinpop1705',
    id: 'user-2',
  },
  {
    image:
      'https://pbs.twimg.com/profile_images/1213428127684272129/6chyGoDb_400x400.jpg',
    name: 'Adrian Lica',
    username: '@adrianlica20',
    id: 'user-3',
  },
  {
    image:
      'https://pbs.twimg.com/profile_images/1626676110325866527/a-IevhoC_400x400.jpg',
    name: 'Richard Berude',
    username: '@ImRichardB1',
    id: 'user-4',
  },
];

users.forEach(user => {
  const card = document.createElement('li');
  card.innerHTML = `<label for="${user.id}" class="user-card flex items-center gap-2 p-3 rounded-lg transition hover:cursor-pointer hover:bg-pink-50">
        <img class="w-11 aspect-square rounded-full object-cover flex-none" src="${user.image}">
        <div class="flex flex-col">
            <span class="font-semibold text-[0.7rem]">${user.name}</span>
            <span class="text-[0.6rem]">${user.username}</span>
        </div>
        <input type="checkbox" name="${user.id}" id="${user.id}" class="ml-auto">
    </label>`;
  conversationsContainer.appendChild(card);
});

function filterUsers() {
  let cards = document.querySelectorAll('.user-card');
  let searchQuery = searchbar.value;
  for (let i = 0; i < cards.length; i++) {
    if (users[i].name.toLowerCase().includes(searchQuery.toLowerCase())) {
      cards[i].classList.remove('hidden');
    } else {
      cards[i].classList.add('hidden');
    }
  }
}

closeBtn.addEventListener('click', () => {
  container.classList.add('opacity-0', 'scale-0');
  openBtn.classList.add('opacity-100', 'scale-100');
});

openBtn.addEventListener('click', () => {
  container.classList.remove('opacity-0', 'scale-0');
  openBtn.classList.remove('opacity-100', 'scale-100');
});
