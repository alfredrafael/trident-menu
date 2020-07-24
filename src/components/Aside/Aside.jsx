import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './aside.css';




const Aside = () => {
return(
    <React.Fragment>
    

    <aside 
        className='col' 
        style={{
            float: 'right', 
            textAlign: 'center',
            marginTop: '-25%',
            borderTopLeftRadius: '15px', 
            borderTopRightRadius: '15px'
        }}>

{/*  
<ul class="social-icons icon-circle list-unstyled list-inline"
    style={{display: 'flex', justifyContent: 'space-between', paddingTop: '3.4%'}}
> 
    <li> <a href="#"><i style={{backgroundColor: 'black'}} class="fa fa-twitter"></i></a></li>
    <li> <a href="#"><i style={{backgroundColor: 'black'}} class="fa fa-facebook"></i></a></li> 
    <li> <a href="#"><i style={{backgroundColor: 'black'}} class="fa fa-instagram"></i></a></li> 
</ul>

*/}


    <h3>Make a reservation!</h3>
    <img 
        src='https://support.opentable.com/resource/1590622564000/OTCommunity_Assets/modal/OpenTable_logo_fullcolor.png'
        style={{
            maxWidth: '70%'
        }}
    />




    </aside>


    </React.Fragment>
)}

export default Aside

// <script type='text/javascript' src='//www.opentable.com/widget/reservation/loader?rid=412810&type=standard&theme=standard&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website'></script>


// <link href="http://www.opentable.com/ism/feed_alt.css" rel="stylesheet" type="text/css" />
// <div id="OT_searchWrapperAll">
// <script type="text/javascript" src="http://www.opentable.com/ism/?rid=1234,1107"></script>
// <noscript id="OT_noscript">
// <a href="http://www.opentable.com/single.aspx?rid=1234&restref=1234&rtype=ism">Reserve Now
// for Restaurant A on OpenTable.com</a>
// <a href="http://www.opentable.com/single.aspx?rid=1107&restref=1107&rtype=ism">Reserve Now
// for Restaurant B on OpenTable.com</a>
// </noscript>
// <div id="OT_logo">
// <a href="http://www.opentable.com/home.aspx?rtype=ism" title="Powered By OpenTable">
// <img src="http://www.opentable.com/img/buttons/Otlogo.gif" id="OT_imglogo" alt="Restaurant
// Management Software" /></a>
// </div>
// </div>