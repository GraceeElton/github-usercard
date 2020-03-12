/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:




<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


function gitCard (data){
  const 
        newCards = document.createElement('div'),
        image = document.createElement('img'),
        cardInfo = document.createElement('div'),
        name = document.createElement('h3'),
        username = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        gitLink = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p');

  //content

  image.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = data.username;
  location.textContent = `Location: ${data.location}`;
  // profile.textContent = `Profile: ${data.name}`;
  gitLink.textContent = `Profile: ${data.html_url}`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent  = `Bio: ${data.bio}`;
2
  //append shit 
  newCards.append(image);
  newCards.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(username);
  cardInfo.append(location);
  cardInfo.append(profile);
  cardInfo.append(gitLink);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);

  //classed 

  newCards.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

return newCards;
  
}

//my card

const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/GraceeElton')
.then(response => {
  console.log(response);
  cards.append(gitCard(response.data));
})
.catch(error => {
  console.log("the data was not returned", error);
})

//followers cards

const followersArray = [ 
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];


const entry = document.querySelector('.cards');

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then(response => {
      console.log(response);
      cards.append(gitCard(response.data));
    })
    .catch(error => {
      console.log("the data was not returned", error);
    });
});






















