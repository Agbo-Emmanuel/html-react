const Container = document.getElementById("root");
const root =  ReactDOM.createRoot(Container);




const Box = (props)=>{
    return(
        <div style={{width: "65%", height: "13%",border: props.border1, borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center"}}>

            <div style={{width: "30%", height: "100%", border: props.border2,borderRadius: "15px",display: "flex", alignItems: "center", justifyContent: "center"}}> 
                <div style={{width: "90%", height: "90%",backgroundColor: props.bg,borderRadius: "15px",display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <h1 style={{color: "white", fontSize: "40px", fontFamily: "sans-serif"}}>{props.h1}</h1>
                </div>
            </div>

            <div style={{width: "70%", height: "100%",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}> 
                <p style={{color: props.color, fontFamily: "calibri", fontWeight: "600"}}>{props.text}<br/>{props.text2}</p>
            </div>

        </div>
    )
};

const Firstbox = ()=>{
    return(
        <>
            <Box 
                color= "orange"
                text= "Establish client objectives"
                text2= "during the discovery session"
                h1= "01"
                border1= "3px solid orange"
                border2= "3px solid orange"
                bg= "orange"
            />
        </>
    )
}
const Secondbox = ()=>{
    return(
        <>
            <Box
                color= "green"
                text= "Create compelling"
                text2= "website content"
                h1= "02"
                border1= "3px solid green"
                border2= "3px solid green"
                bg= "green"
            />
        </>
    )
}
const Thirdbox = ()=>{
    return(
        <>
            <Box
                color= "aqua"
                text= "Design a results"
                text2= "based website"
                h1= "03"
                border1= "3px solid aqua"
                border2= "3px solid aqua"
                bg= "aqua"
            />
        </>
    )
}
const Fourthbox = ()=>{
    return(
        <>
            <Box
                color= "blue"
                text= "Develop a"
                text2= "responsive website"
                h1= "04"
                border1= "3px solid blue"
                border2= "3px solid blue"
                bg= "blue"
            />
        </>
    )
}
const Fifthbox = ()=>{
    return(
        <>
            <Box
                color= "purple"
                text= "Test your website"
                text2= "to make sure it works"
                h1= "05"
                border1= "2px solid purple"
                border2= "2px solid purple"
                bg= "purple"
            />
        </>
    )
}

const Text = ()=>{
    return(
        <div style={{width: "80%",height: "12%",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "flex-end",lineHeight: "0.5px"}}>
            <h1 style={{fontFamily: "Arial", fontSize: "23px"}}>What are the 5 Steps Every</h1> 
            <h1 style={{fontFamily: "Arial", fontSize: "23px"}}> Website Design Process Needs? </h1> 
        </div>
    )
};


const Body = ()=>{
    return(
        <div style={{width: "40%", height: "100%", display: "flex",flexDirection: "column", alignItems: "flex-start", gap: "20px"}}>
            <Text/>
            <Firstbox/>
            <Secondbox/>
            <Thirdbox/>
            <Fourthbox/>
            <Fifthbox/>
        </div>
    )
};



const App = () => {
    return(
        <div style={{width: "100vw", height: "100vh",backgroundColor: "rgb(246, 245, 245)", display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Body/>
        </div>
    )
};


root.render(<App/>);