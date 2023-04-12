// use local storage to manage store applied id
const addToDb = id => {
    let appliedJobList = {}

    //get the shopping cart from local storage
    const storedList = localStorage.getItem('applied-list')
    if (storedList) {
        appliedJobList = JSON.parse(storedList)
    }

    // add quantity
    const quantity = appliedJobList[id]
    if (quantity) {
        const newQuantity = quantity + 1
        appliedJobList[id] = newQuantity
    } else {
        appliedJobList[id] = 1
    }
    localStorage.setItem('applied-list', JSON.stringify(appliedJobList))
}

// getting data from local storage
const getStoredId = () => {
    let appliedJobList = {}

    //get the id from local storage
    const storedList = localStorage.getItem('applied-list')
    if (storedList) {
        appliedJobList = JSON.parse(storedList)
    }
    return appliedJobList
}
export { addToDb, getStoredId }