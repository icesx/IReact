import Children from './children'
function Parent() {
    const changedName = (name) => {
        console.log(`parent get name ${name}`)
    }
    return (
        <Children event={changedName} />
    )
}
export default Parent