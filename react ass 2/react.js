const Container = document.getElementById("root");
const root =  ReactDOM.createRoot(Container);


const Text = () => {
    return(
        <>
            <p style={{color: "grey", fontFamily: "sans-serif", fontSize: "12px", margin: "20px 20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br/><br/><span style={{color: "aquamarine", fontWeight: "900"}}>Read More</span></p>
        </>
    )
}

const Image = (props)=>{
    return(
        <div style={{width: "100%", height: "100%"}}>
            
            <img src={props.img} style={{width: "100%", height: "100%"}}></img>
        </div>
    )
}

const Section = ()=>{
    return(
        <div style={{width: "100%", height: "83%", backgroundColor: "white", boxShadow: "1px 9px 82px -41px lightgrey"}}>

            <div style={{width: "100%", height: "50%", display: "flex"}}>
                <div style={{width: "34%", height: "100%", display: "flex", alignItems: "center"}}>
                    <Text/>
                </div>
                <div style={{width: "34%", height: "100%",}}>
                    <Image img="../img/beach img.jpg"/>
                </div>
                <div style={{width: "34%", height: "100%", display: "flex", alignItems: "center"}}>
                    <Text/>
                </div>
            </div>
            <div style={{width: "100%", height: "50%", display: "flex"}}>
                <div style={{width: "34%", height: "100%", backgroundColor: "red"}}><Image img="../img/beach img2.jpg"/></div>
                <div style={{width: "34%", height: "100%", display: "flex", alignItems: "center"}}>
                    <Text/>
                </div>
                <div style={{width: "34%", height: "100%", backgroundColor: "green"}}><Image img="../img/beach img3.jpg"/></div>
            </div>
        </div>
    )
}

const Body =()=>{
    return(
        <div style={{width: "60%", height: "80%",}}>

            <span style={{lineHeight: "15px", fontFamily: "sans-serif", fontSize: "13px", color: "grey"}}><h1>Our Journal</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></span>

            <Section/>

        </div>
    )
}





const App = () => {
    return(
        <div style={{width: "100vw", height: "100vh", display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
           <Body/> 
        </div>
    )
}


root.render(<App/>);