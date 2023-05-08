const btnFollow = document.querySelector('.btn-follow');

let followers = document.getElementById('followers');
let following = document.getElementById('following');

let followersCount = 39;
let followingCount = 90;

btnFollow.addEventListener('click', (e) => {
  if (btnFollow.innerHTML === 'Follow') {
    followersCount++;
    followers.innerHTML = followersCount;
    btnFollow.innerHTML = `Following`;
  } else {
    followersCount--;
    followers.innerHTML = followersCount;
    btnFollow.innerHTML = `Follow`;
  }
});

function addUnfollow() {
  if (btnFollow.innerHTML === `Following`) {
    btnFollow.classList.add('unfollow');
    btnFollow.innerHTML = `Unfollow`;
  } else {
    btnFollow.classList.remove('unfollow');
  }
}

function removeUnfollow() {
  if (btnFollow.innerHTML === `Unfollow`) {
    btnFollow.classList.remove('unfollow');
    btnFollow.innerHTML = `Following`;
  }
}

btnFollow.addEventListener('mouseover', addUnfollow);
btnFollow.addEventListener('mouseout', removeUnfollow);
