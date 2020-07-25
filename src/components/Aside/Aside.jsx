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
            // borderTopLeftRadius: '15px', 
            // borderTopRightRadius: '15px',
            border: '1px solid grey',
            borderRadius: '15px',

            height: '100vh',
        }}>

<br/>


<div 
style={{
    background: '#7a1f1f',
    width: '100%',
    color: 'white',
    borderRadius: '5px',
}}>
    <h6 className="curbside-msg"><strong>PATIO DINNING <br/> WAITLIST</strong></h6>
</div>


<div className="openTable-logo">
<a href="https://www.opentable.com/r/trident-booksellers-and-cafe-boston-2">
<hr/>

    <img 
        src='https://www.alfredorafael.com/wp-content/uploads/2020/07/AlfredoOpenTable1.png'
        style={{
            maxWidth: '110%',
            marginLeft: '-2.1%',
        }}
    />
    <hr/>
</a>
</div>



<div 
style={{
    background: '#7a1f1f',
    width: '100%',
    color: 'white',
    borderRadius: '5px',
}}>
    <h6 className="curbside-msg"><strong>CURBSIDE PICK-UP AVAILABLE</strong></h6>
</div>





<div className="">
    <hr/>
    <img 
        src='https://www.tridentbookscafe.com/sites/tridentbookscafe.com/files/pictures/Curbside%202.png'
        style={{
            maxWidth: '110%',
            marginLeft: '-5%',
        }}
    />
    <hr/>
</div>




</aside>


    </React.Fragment>
)}

export default Aside
