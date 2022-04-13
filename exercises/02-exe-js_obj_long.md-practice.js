

const user = {name: 'Klaus',
              id: 10
            };
const user2 = { name: 'Paul',
                id: 100
            };

const book1 = {
                title: 'The Catcher in the Rye',
                author: 'J.D Salinger',
                isbn: '0316769487',
                category: 'Classic Literature'
                };
            
 const book2 = {
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                isbn: '0446310786',
                category: 'Classic Literature'
                };
        
const book3 = {
                title: 'The art of war',
                author: 'Sun Tzu',
                isbn: '78698670',
                category: 'education'
};

user.books =[book1, book2];

//console.log(user);


const library = {};

library.user = [user, user2];


//console.log('this is the library object', library);

library.user.books = [book3];

console.log(library.user);






                



