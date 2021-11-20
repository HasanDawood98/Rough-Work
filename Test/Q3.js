const obj =
{
    parent_name: 'Father',
    child1: 'Sumair'
}

const arr = ["Hamza","Shahbaz","Jahanzaib","Junaid","Tabish","Ahtisham","Asghar"]

arr.forEach((element, index) => {

    obj[`child${index+2}`]=element
    
});

console.log('Object =\n' ,obj)