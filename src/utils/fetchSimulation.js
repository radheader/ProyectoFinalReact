const fetchSimulation =(dataBase, time) => {
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            resolve(dataBase);
            rejact(new Error("error"))
        }, time)
    })
}

export default fetchSimulation;