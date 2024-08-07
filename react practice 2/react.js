const Container = document.getElementById("root");
const root =  ReactDOM.createRoot(Container);


const Button = (props) => {
    return(
        <div>
            <button style={{width:props.width, height: "60px", background: props.bg, color: "black"}}>
                {props.Text}
            </button>
        </div>
    )
}

const First = () => {
    return(
        <Button
        Text = "Click me"
        width = "100px"
        bg = "grey"
        />
    )
};

const Second = () => {
    return(
        <Button
        Text = "Subscribed to"
        width = "100px"
        bg = "yellow"
        />
    )
};

const Third = () => {
    return(
        <Button
            Text = "Like me"
            width = "150px"
            bg = "blue"
        />
    )
};







const App = () => {
    return(
        <div>
            <First/>
            <Second/>
            <Third/>
        </div>
    )
}


root.render(<App/>);