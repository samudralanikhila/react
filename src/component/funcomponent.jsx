import './app.css'

const FunctionalComponent = () => {
    return (
        <div>
            <div className="fun1">
                <h2>This is created using functional Component</h2>
                <p>This is done using external CSS</p>
                <p style={{color:"blue"}}>This is done using inline CSS</p>
            </div>
        </div>
    )
}
export default FunctionalComponent;