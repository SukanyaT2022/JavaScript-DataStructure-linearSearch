//linear search array

arrFriends = ['cat', 'logan', 'henry','hat', 'Hogan', 'carry','mike', 'summer', 'winter', 'jan']
// while loop we donot know how many we need to repeat untill satify
// for for loop when we know exactly how many time we have to repeat

var searchName = 'henry'
var found = 'no'
for(i=0; i<arrFriends.length; i++){
    if (searchName === arrFriends[i]){
        //we tried to find henry inn array
dafound = 'yes'
//once we found the search so no pint to continue search so we break
break

    }
}
//if search still can not find  for peson not found
//we put out side the loop so final result show instead not not found not found and found
//below if only show final rsult instead of show 10 times.
//that why it 's call linear search.
if (found === 'no'){
    document.write('Person not found')
}


