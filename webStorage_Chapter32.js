function getLocalStorage() {
    if (typeof localStorage=="object") {
        console.log("Has localStorage")
        return localStorage;
    }
    else if (typeof globalStorage=="object") {
        return globalStorage[location.host];
    }
    else{
        throw new Error("Local storage not avalaibal.");
    }
}

var storage=getLocalStorage();

storage.setItem("name","Nicholas");

storage.book="Professional JavaScript";

var name=storage.getItem("name");

var book=localStorage.book;

console.log(name);
console.log(book);