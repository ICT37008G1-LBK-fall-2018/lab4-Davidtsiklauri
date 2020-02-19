const students =  [ { id: 1, Name:'Giorgi',  gpa: 2.0 },
                    { id: 2, Name:'Giorgi' , gpa: 3.5},
                    { id: 3, Name:'Saba' ,   gpa: 2.3},
                    { id: 4, Name:'Tornike' , gpa: 1.0},
                    { id: 5, Name:'Saba' , gpa: 4.0},
                    { id: 6, Name:'Giorgi' , gpa: 2.0}];


function getAvarageGpa( students , gpa = 2 ) {
     if( typeof gpa !== 'number' || !Array.isArray( students ) ) {
           throw new Error('invalid arguments')
     } else {
           return students.filter( student => student.gpa === gpa );
     }
};

console.log(getAvarageGpa(students, 2));