let list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

function getFirstPython(list1) {
    let name = "";
    if (list1.some(person => person.language === "Python"))
        name = list1.find(person => person.language ==="Python").firstName + ", " + list1.find(person => person.language === "Python").country
    else
        name = "There will be no Python developers";
    return name
}
// норм решение
// function getFirstPython(list) {
//     const dev = list.find(x => x.language === "Python")
//     return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
// }


console.log(getFirstPython(list1))