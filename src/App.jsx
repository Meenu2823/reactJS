import './App.css'

function App() {
  

  return (
    <>
      <nav>
        <ul style={{"listStyle":"none","display":"flex"}}>
            <li style={{"color": " #7A1755","fontWeight": "bold","fontSize": "x-large"}}>explor<span style={{"color":" #275154"}}>er</span></li>
            <li style={{"marginLeft": "70%"}}><a href="#3">Home</a></li>
            <li><a href="#1">BikeRentals</a></li>
            <li><a href="#2">Restaurants</a></li>
        </ul>
    </nav>
    <div className="ad" style={{"height":"500%","width":"100%"}}>
        <div style={{"marginLeft":"5%"}}>
        <p className="sub">WELCOME TO EXPLORER</p>
        <h1> Your Adventure</h1>
        <h1>Travel Expert in</h1>
        <h1>the <span style={{"fontWeight": "bold"}}>SOUTH</span></h1>
        <div className="menu">
        <form action="get" style={{"marginTop":"5%"}}>
            <select style={{"width":"600px","height": "60px","color":"gray","paddingLeft":"1%","borderStyle":"solid","borderWidth":"3px","border-color": "rgb(186, 186, 186)"}}>
                <option value="None">Choose</option>
            </select>
            <br/><button type="button" style={{"backgroundColor":" #7A1755","color":"white","width":"160px","marginTop":"2%","height":"40px","border":"0px"}}>EXPLORE</button>
        </form>
       </div>
       </div>
    </div>
    <h3>Destinations</h3>
    <p className="sub" style={{"marginLeft": "4%"}}>Just for you.Because you and your bike are special to us!</p>
    <div style={{"display": "flex","height": "500%","marginTop":"3%","marginLeft": "9%"}}>
        <div style={{"height": "100%","width": "29%"}}>
            <img src="images/Pollachi.jpg" alt="" height="50%" width="100%" />
            <p style={{"fontSize":"30px","fontFamily":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","fontWeight": "lighter","marginTop": "1%","marginBottom": "2%"}}>Never Ending Paddy Fields and Narrow Roads</p>
            <b style={{"fontSize":"15px","fontFamily":"Arial, Helvetica, sans-serif"}}>Pollachi</b>
            <p style={{"marginBottom":"0%","fontSize":"large"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <br/><button type="button" style={{"backgroundColor":" #7A1755","color":"white","width":"160px","marginTop":"0%","height":"40px","border":"0px"}}>READ MORE</button>
        </div>
        <div style={{"height": "100%","width": "29%","marginLeft":"2%"}}>
            <img src="images/Thanjavur.jpg" alt="" height="50%" width="100%" />
            <p style={{"fontSize":"30px","fontFamily":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","fontWeight": "lighter","marginTop": "1%","marginBottom": "2%"}}>Small Ride across town in mid summer heat</p>
            <b style={{"fontSize":"15px","fontFamily":"Arial, Helvetica, sans-serif"}}>Thanjavur</b>
            <p style={{"marginBottom":"0%","fontSize":"large"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <br/><button type="button" style={{"backgroundColor":" #7A1755","color":"white","width":"160px","marginTop":"0%","height":"40px","border":"0px"}}>READ MORE</button>
        </div>
        <div style={{"height": "100%","width": "29%","marginLeft":"2%"}}>
            <img src="images/Chidambaram.jpg" alt="" height="50%" width="100%" />
            <p style={{"fontSize":"30px","fontFamily":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","fontWeight": "lighter","marginTop": "1%","marginBottom": "2%"}}>Catching a Short Break at the Lotus Pond</p>
            <b style={{"fontSize":"15px","fontFamily":"Arial, Helvetica, sans-serif"}}>Chidambaran</b>
            <p style={{"marginBottom":"0%","fontSize":"large"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <br/><button type="button" style={{"backgroundColor":" #7A1755","color":"white","width":"160px","marginTop":"0%","height":"40px","border":"0px"}}>READ MORE</button>
        </div>
    </div>


    <div style={{"display": "flex","height": "500%","marginTop":"3%","margin-left": "9%"}}>
        <div style={{"height": "100%","width": "29%"}}>
            <img src="images/Masinagudi.jpg" alt="" height="50%" width="100%" />
            <p style={{"fontSize":"30px","fontFamily":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","fontWeight": "lighter","marginTop": "1%","marginBottom": "2%"}}>Road Trip enroute the mountains and forests</p>
            <b style={{"fontSize":"15px","fontFamily":"Arial, Helvetica, sans-serif"}}>Masinagudi</b>
            <p style={{"marginBottom":"0%","fontSize":"large"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <br/><button type="button" style={{"backgroundColor":" #7A1755","color":"white","width":"160px","marginTop":"0%","height":"40px","border":"0px"}}>READ MORE</button>
        </div>
        <div style={{"height": "100%","width": "29%","marginLeft":"2%"}}>
            <img src="images/Kumbakkonam.jpg" alt="" height="50%" width="100%" />
            <p style={{"fontSize":"30px","fontFamily":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","fontWeight": "lighter","marginTop": "1%","marginBottom": "2%"}}>Fall in love with the divine agraharams</p>
            <b style={{"fontSize":"15px","fontFamily":"Arial, Helvetica, sans-serif"}}>Kumbakkonam</b>
            <p style={{"marginBottom":"0%","fontSize":"large"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <br/><button type="button" style={{"backgroundColor":" #7A1755","color":"white","width":"160px","marginTop":"0%","height":"40px","border":"0px"}}>READ MORE</button>
        </div>
        <div style={{"height": "100%","width": "29%","marginLeft":"2%"}}>
            <img src="images/Tirunelveli.jpg" alt="" height="50%" width="100%" />
            <p style={{"fontSize":"30px","fontFamily":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","fontWeight": "lighter","marginTop": "1%","marginBottom": "2%"}}>Catching a Short Break at the Lotus Pond</p>
            <b style={{"fontSize":"15px","fontFamily":"Arial, Helvetica, sans-serif"}}>Tirunelveli</b>
            <p style={{"marginBottom":"0%","fontSize":"large"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <br/><button type="button" style={{"backgroundColor":" #7A1755","color":"white","width":"160px","marginTop":"0%","height":"40px","border":"0px"}}>READ MORE</button>
        </div>
    </div>
    <div style={{"height":"500%","marginTop":"4%","backgroundColor":" #F7F7F7","textAlign":"left","alignContent":"center"}}>
    <h3 style={{"marginLeft":"35%"}}>Contact Us</h3>
    <p className="sub" style={{"marginLeft":"30%"}}>Our Sales Team will reach out to you ASAP!</p>
    <form action="get" style={{"marginLeft":"35%","marginTop":"2%"}}>
        
        <strong style={{"fontFamily":"Arial, Helvetica, sans-serif"}}>Name</strong><br/>
        <input type="text" style={{"width":"491px","height":"53px","borderStyle":"solid","borderWidth":"3px","borderColor":"rgb(186, 186, 186)","backgroundColor":" #F7F7F7","marginBottom":"3%"}} />
        <br/>
        <strong style={{"fontFamily":"Arial, Helvetica, sans-serif"}}>Your Home Town</strong><br/>
        <select style={{"width":"500px","height":"60px","color":"gray","backgroundColor":" #F7F7F7","paddingLeft":"1%","borderStyle":"solid","borderWidth":"3px","borderColor":"rgb(186, 186, 186)","marginBottom":"3%"}}>
            <option value="None">Choose</option>
        </select><br/>
        <strong style={{"fontFamily":"Arial, Helvetica, sans-serif"}}>Where would you like to go?</strong><br/>
        <select style={{"width":"500px","height":"60px","color":"gray","backgroundColor":" #F7F7F7","paddingLeft":"1%","borderStyle":"solid","borderWidth":"3px","borderColor":"rgb(186, 186, 186)","marginBottom":"3%"}}>
            <option value="None">Choose</option>
        </select><br/>
        <strong style={{"fontFamily":"Arial, Helvetica, sans-serif"}}>Contact Number</strong><br/>
        <input type="text" style={{"width":"491px","height":"53px","borderStyle":"solid","borderWidth":"3px","borderColor":"rgb(186, 186, 186)","backgroundColor":" #F7F7F7","marginBottom":"3%"}}/>
        <br/>
        <br/><button type="button" style={{"backgroundColor":" #7A1755","color":"white","width":"160px","marginBottom":"5%","height":"40px","border":"0px"}}>SUBMIT INTEREST</button>
    </form>
    </div>
    </>
  )
}

export default App
