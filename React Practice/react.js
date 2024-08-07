const root = ReactDOM.createRoot(document.getElementById("root"));



const Login = ()=>{
    return(
        <div style={{
            width: "100%",
            height: "auto !important",
            background: "linear-gradient(rgba(0, 0, 0, 0.600),rgba(0, 0, 0, 0.525)),url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/178e4fc2-1a07-4c74-9da3-aaeaaaac5da8/NG-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
        }}>



            <header style={{width: "100%", height: "70px", backgroundColor: "transparent",display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
            
                <img src="./img/netflix.png" style={{width: "11%", height: "150px", margin: "0px 40px"}}></img>

            </header>

            <section style={{
                width: "30%",
                height: "550px",
                backgroundColor: "rgba(0, 0, 0, 0.711)",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                gap: "25px",
            }}>

                <div style={{width: "70%", height: "50px", marginTop: "30px"}}>
                    <h1 style={{color: "white", fontFamily: "Arial"}}>Sign In</h1>
                </div>

                <div style={{width: "70%", height: "98px", borderRadius: "3px", border: "none", display: "flex", flexDirection: "column", gap: "15px"}}>
                    <input type="email" placeholder="Email or phone number" style={{width: "95%", height: "50%", borderRadius: "3px", border: "none",paddingInlineStart: "10px", outline: "none"}}></input>
                    <input type="password" placeholder="Password" style={{width: "95%", height: "50%", borderRadius: "3px", border: "none",paddingInlineStart: "10px", outline: "none"}}></input>
                </div>

                <div style={{width: "70%", height: "98px", borderRadius: "3px", border: "none", display: "flex", flexDirection: "column", gap: "10px"}}>
                    <div style={{width: "100%", height: "40px", borderRadius: "3px", border: "none", backgroundColor: "red", color: "white", fontFamily: "Arial", fontSize: "14px", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center"}}>Sign In</div>

                    <div style={{width: "100%", height: "30px", borderRadius: "3px", border: "none", color: "grey",display: "flex", justifyContent: "space-between"}}>
                        <span style={{width: "60%",display: "flex", alignItems: "center"}}><input type="checkbox"></input><p style={{fontSize: "10px", fontFamily: "sans-serif"}}>Remember me</p></span>
                        <p style={{fontSize: "10px", fontFamily: "sans-serif"}}>Need Help?</p>
                    </div>
                </div>

                <div style={{width: "70%", height: "100px",}}>
                    <p style={{color: "grey", fontFamily: "sans-serif", fontSize: "13px", fontWeight: "400"}}>New to Netflix? <span style={{color: "white",}}>Sign up now.</span></p>
                    <p style={{color: "grey", fontFamily: "sans-serif", fontSize: "10px"}}>This page is protected by Google reCAPTCHA to<br></br> ensure you're not a bot.<span style={{color: "blue"}}>  Learn more.</span></p>
                </div>

            </section>

            <footer style={{width: "100%", height: "150px", backgroundColor: "rgba(0, 0, 0, 0.711)", marginTop: "70px", display: "flex", justifyContent: "center", alignItems: "center", gap: "20px"}}>
                <article style={{width: "15%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center",lineHeight: "5px"}}>
                    <p style={{color: "grey", fontSize: "13px", fontFamily: "sans-serif",}}>Questions?Contact us</p>
                    <p style={{color: "grey", fontSize: "13px", fontFamily: "sans-serif",}}>FAQ</p>
                    <p style={{color: "grey", fontSize: "13px", fontFamily: "sans-serif",}}>Cookie Preference</p>
                </article>

                <article style={{width: "15%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center",lineHeight: "5px"}}>
                    <p style={{color: "grey", fontSize: "13px", fontFamily: "sans-serif",}}>Help Center</p>
                    <p style={{color: "grey", fontSize: "13px", fontFamily: "sans-serif",}}>Corporate Information</p>
                </article>

                <article style={{width: "15%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center",lineHeight: "5px"}}>
                    <p style={{color: "grey", fontSize: "13px", fontFamily: "sans-serif",}}>Term of use</p>
                </article>

                <article style={{width: "15%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center",lineHeight: "5px"}}>
                    <p style={{color: "grey", fontSize: "13px", fontFamily: "sans-serif",}}>Privacy</p>
                </article>
            </footer>

        </div>
    )
}





const App = () => {
    return (
        <div>
            <Login></Login>
        </div>
    );
}

root.render(<App />)