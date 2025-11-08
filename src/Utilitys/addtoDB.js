const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("read-list");

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }

    else {
        return [];
    }
}

const addToStoredDB = (id) => {

    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        
        alert("This book is already in your read list.");
    }

    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("read-list", data);
    }
}

export { addToStoredDB, getStoredBook };

