const students =  [ { id: 1, Name:'Giorgi' },
                    { id: 2, Name:'Giorgi' },
                    { id: 3, Name:'Saba' },
                    { id: 4, Name:'Tornike' },
                    { id: 5, Name:'Saba' },
                    { id: 6, Name:'Giorgi' }];


const uniqueNames = new Map();

students.map( ( student ) => {
    uniqueNames.set( student.Name, student );
} )

console.log( [...uniqueNames.values()] );

