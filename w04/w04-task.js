/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Zach Wetsel",
    photo: "images/profile.png",
    favoriteFoods: [
        'Chinese Food',
        'Indian Food',
        'Thai Food',
        'Anything spicy'
    ],
    hobbies: [
        'Writing',
        'Hiking',
        'D&D',
        'Basketball'
    ],
    placesLived: [],
}
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Provo, UT',
        length: '5 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Iona, ID',
        length: '3 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Idaho Falls, ID',
        length: '8 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Burley, ID',
        length: '6 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Heber, UT',
        length: '5 years'
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})

