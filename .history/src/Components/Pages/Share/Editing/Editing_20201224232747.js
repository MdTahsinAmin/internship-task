import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import businessOrders from '../../../../data/DummyData.json';
import {FaOpencart} from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import '../../../Style/Editing.css';
const Editing = () => {
    const [orders,setOrder] = useState(businessOrders);
    const [searchByName,setSearchByName] = useState('');
    const [exact,setExact] = useState({});
    const handleChange = (event) => {
         setSearchByName(event.target.value);
          
    }
    
    useEffect(()=>{ 
        order.find()
    },[searchByName])

    return (
     <section className='container'>
           <div className="row">
            <div className="col-md-6 mt-4">
                <Dropdown>
                    <Dropdown.Toggle variant="info btn-lg" id="dropdown-basic">
                    <span 
                        style={{fontSize:'20px',marginRight:'10px'}}>
                         <FaOpencart/>
                    </span>
                    <span className="badge badge-light">{orders.length}</span>
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
                  <div className="col-md-6 mt-4">
                  <input 
                    className='search-input' 
                    type="text"
                    name="searchName"
                    placeholder="Enter the id or name or email"
                    onChange={handleChange}/>

                  <Button 
                   className='btn btn-search'
                   variant="contained" 
                   color="primary"
                   >Search
                   </Button>
                  </div>
            </div> 
      </section>
    );
};

export default Editing;


/*

<div className='ml-5 pt-5'>
              <Dropdown>
                    <Dropdown.Toggle variant="info btn-lg" id="dropdown-basic">
                    <span style={{fontSize:'20px',marginRight:'10px'}}><FaOpencart/></span>
                    <span className="badge badge-light">{order.length}</span>
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
          <div className='d-flex justify-content-center'>
               <div>
                  <input className='search-input' type="text" placeholder="Enter the id or name or email"/>
                  <Button className='btn btn-search' variant="outlined" color="primary">Search</Button>
               </div>
           </div>
*/