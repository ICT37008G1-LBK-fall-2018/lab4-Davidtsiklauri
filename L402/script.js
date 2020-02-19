
 
const students =  [ { id: 1, Name:'Giorgi' },
                    { id: 2, Name:'Giorgi' },
                    { id: 3, Name:'Saba' },
                    { id: 4, Name:'Tornike' },
                    { id: 5, Name:'Saba' },
                    { id: 6, Name:'Giorgi' }];


const studentsCounter = students.reduce( ( acc, curr ) => {
        curr.Name in acc ? acc[curr.Name]++ : acc[curr.Name] = 1;        
        return acc;  
}, {} )

console.log(studentsCounter);
