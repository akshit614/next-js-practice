//IN next we can't use states as these are client side components 
// SO how can we add a loader in our application
// that we create a loading page for other components that can handle expensive operations

export default function loading() {
    return (
        <div>
            Loading...
        </div>
    )
}