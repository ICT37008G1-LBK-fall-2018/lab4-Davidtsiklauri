
function differntNames(studentList, Name) {

    let count = 0;

    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].Name == Name) {
            count++;




        }
    }
    return count;
}

var newObject =
    [{ id: 1, Name:'Giorgi' },
    { id: 2, Name:'Giorgi' },
    { id: 3, Name:'Saba' },
    { id: 4, Name:'Tornike' },
    { id: 5, Name:'Saba' },
    { id: 6, Name:'Giorgi' }];

alert(differntNames(newObject, 'Giorgi'));
