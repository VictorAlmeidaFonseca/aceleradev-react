const compareFunction = (a, b) => {
    return +(a.name > b.name) || +(a.name === b.name) -1
}

export {
    compareFunction
}