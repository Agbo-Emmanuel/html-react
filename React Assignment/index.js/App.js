const Container = document.getElementById("root");
const root =  ReactDOM.createRoot(Container);

const Header = () => {
  return(
    <div style = {{
      width : "100vw",
      height : "550px",
      backgroundColor : "lightGrey",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
    
      <div style={{
        width: "50%",
        height: "80%",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "15px",
        justifyContent: "space-around",
        
      }}>

        <section style={{
          width: "95%",
          height: "20%",
          display: "flex",
          }}> 

          <div style={{width: "60%", height: "100%", display: "flex",}}>
            
            <div style={{width: "45%", height: "100%",backgroundColor: "Blue", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center",}}>
              <div style={{width: "25%", height: "40%", backgroundColor: "lightGrey", borderRadius: "50%", display: "flex",justifyContent: "center", alignItems: "center",}}>
                <img src="./img/play.png" style={{width: "70%", height: "70%",}}></img>
              </div>
            </div>
            <div style={{width: "50%", height: "100%", paddingInline: "15px", display: "flex", alignItems: "center",}}>

              <span style={{lineHeight: "6px",}}>
                <h2 style={{fontFamily: "Arial", fontSize: "15px",}}>First video</h2><p style={{fontFamily: "Arial",color: "grey", fontSize: "10px",}}>Video description</p>
              </span>
           
            </div>
          </div>

          <div style={{width: "40%", height: "100%", display: "flex", justifyContent: "flex-end",}}>
            <div style={{width: "20%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center",}}>
            <img src= "./img/love.png" style={{width: "60%", height: "33%",}}></img>
            </div>
          </div>
          
        </section>

  
        <section style={{
          width: "95%",
          height: "20%",
          display: "flex",
          }}> 

          <div style={{width: "60%", height: "100%", display: "flex",}}>
            
            <div style={{width: "45%", height: "100%",backgroundColor: "Red", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center",}}>
              <div style={{width: "25%", height: "40%", backgroundColor: "lightGrey", borderRadius: "50%", display: "flex",justifyContent: "center", alignItems: "center",}}>
                <img src="./img/play.png" style={{width: "70%", height: "70%",}}></img>
              </div>
            </div>
            <div style={{width: "50%", height: "100%", paddingInline: "15px", display: "flex", alignItems: "center",}}>

              <span style={{lineHeight: "6px",}}>
                <h2 style={{fontFamily: "Arial", fontSize: "15px",}}>Second video</h2><p style={{fontFamily: "Arial",color: "grey", fontSize: "10px",}}>Video description</p>
              </span>
           
            </div>
          </div>

          <div style={{width: "40%", height: "100%", display: "flex", justifyContent: "flex-end",}}>
            <div style={{width: "20%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center",}}>
            <img src= "./img/love.png" style={{width: "60%", height: "33%",}}></img>
            </div>
          </div>
          
        </section>



        <section style={{
          width: "95%",
          height: "20%",
          display: "flex",
          }}> 

          <div style={{width: "60%", height: "100%", display: "flex",}}>
            
            <div style={{width: "45%", height: "100%",backgroundColor: "green", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center",}}>
              <div style={{width: "25%", height: "40%", backgroundColor: "lightGrey", borderRadius: "50%", display: "flex",justifyContent: "center", alignItems: "center",}}>
                <img src="./img/play.png" style={{width: "70%", height: "70%",}}></img>
              </div>
            </div>
            <div style={{width: "50%", height: "100%", paddingInline: "15px", display: "flex", alignItems: "center",}}>

              <span style={{lineHeight: "6px",}}>
                <h2 style={{fontFamily: "Arial", fontSize: "15px",}}>Third video</h2><p style={{fontFamily: "Arial",color: "grey", fontSize: "10px",}}>Video description</p>
              </span>
           
            </div>
          </div>

          <div style={{width: "40%", height: "100%", display: "flex", justifyContent: "flex-end",}}>
            <div style={{width: "20%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center",}}>
            <img src= "./img/love.png" style={{width: "60%", height: "33%",}}></img>
            </div>
          </div>
          
        </section>


        

      </div>

    </div>
  )
}




  const MyApp = () => {

    return(
      <div>
        <Header></Header>
        {/* <p>Hello World</p> */}
       </div>
       
    );


      
  }
  root.render ( <MyApp />)





