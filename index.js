// Write your solution here!
// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = (name) => {
    cats.push(name)
}
const destructivelyPrependCat = (name) => {
    cats.unshift(name)
}
const destructivelyRemoveFirstCat = () => {
    cats.shift()
}

const destructivelyRemoveLastCat = () => {
    cats.pop()
}

const appendCat = (name) => {
    return [...cats, name]
}

const prependCat = (name) => {
    return [name, ...cats]
}

const removeLastCat = () => {
     const catsCpy = [...cats]
    catsCpy.pop()
    return catsCpy
}
const removeFirstCat = () => {
     const catsCpy = [...cats]
    catsCpy.shift()
    return catsCpy
}