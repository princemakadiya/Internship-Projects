// // // // import React from "react";


// // // // const SlotM = (props) => { 
   
// // // //     let {x,y,z} = props

// // // //    if ( (x===y) && (y===z) ){
// // // //     return (
// // // //         <>
// // // //           <div className="slot_inner">
// // // //             <h1>
// // // //               {x}{y}{z}
// // // //             </h1>
// // // //             <br/>
// // // //             <h1> This is Matching. </h1>
// // // //             <hr />
// // // //           </div>
// // // //         </>
// // // //       );
// // // //     }else{
// // // //         return (
// // // //             <>
// // // //               <div className="slot_inner">

// // // //                 <h1>
// // // //                   {x}{y}{z}
// // // //                 </h1>
// // // //                 <br/>
// // // //                 <h1> This is Not Matching. </h1>
// // // //                 <hr />

// // // //               </div>
// // // //             </>
// // // //           );
// // // //     }
// // // // }

// // // // const App= () => {
// // // //     return( 
// // // //     <>    
// // // //     <h1 className="heading_style"> Welcome to <br/> <span style={{fontWeight:'bold',color:'blueviolet',backgroundColor:'white'}}>Slot machine Game</span> </h1>

// // // //     <div className="slotmachine">
// // // //         <SlotM x='😃' y='😃' z='😃' />
// // // //         <hr/>
// // // //         <SlotM x='🤷‍♀️' y='😃' z='😃' />
// // // //         <hr/>
// // // //         <SlotM x='😃' y='😃' z='🎉' />
// // // //         <hr/>
// // // //         <SlotM x='👍' y='👍' z='👍' />
// // // //         <hr/>

// // // //     </div>
   

// // // //      </>
// // // //     )
// // // // }
// // // // export default App;



// // // //----------------- 2nd task --------------------------------


// // // import React, { useState } from 'react';

// // // const App = () =>{

// // //     const [fullname , setfullName] = useState({
// // //       fname:"",
// // //       lname:"",
// // //       email:"",
// // //       phone:"",

// // //     });

// // //     const onSubmits = (event) =>{
// // //       event.preventDefault();
// // //     };

// // //     const inputEvent = (event) =>{
// // //       console.log(event.target.value)
// // //       console.log(event.target.name)

// // //       // const value = event.target.value;
// // //       // const name = event.target.name;

// // //       const [value,name] = event.target;

// // //       setfullName((preValue)=>{

// // //           return {
// // //             ...preValue
// // //             [name]=value,
// // //           }



// // //   //       if(name==='fname'){
// // //   //        return{ 
// // //   //           fname:value,
// // //   //           email:preValue.email,
// // //   //           phone:preValue.phone,
// // //   //           lname:preValue.lname,
// // //   //        }
// // //   //        }else if(name==='lname'){
// // //   //         return{ 
// // //   //            fname:preValue.fname,
// // //   //           email:preValue.email,
// // //   //           phone:preValue.phone,
// // //   //            lname:value,
// // //   //       };
// // //   //     }else if(name==='email'){
// // //   //       return{ 
// // //   //          fname:preValue.fname,
// // //   //         email:value,
// // //   //         phone:preValue.phone,
// // //   //          lname:preValue.lname,
// // //   //     };
// // //   //   }else if(name==='phone'){
// // //   //     return{ 
// // //   //        fname:preValue.fname,
// // //   //       email:preValue.email,
// // //   //       phone:value,
// // //   //        lname:preValue.lname,
// // //   //   };
// // //   // };
      
// // //     })

// // //     return(
 
// // //       <>
// // //       <div className="main_div">
// // //          <form onSubmit={onSubmits}>
// // //            <div>
// // //              <h1>
// // //                 Hello {fullname.fname} {fullname.lname}
// // //              </h1>
// // //              <p>{fullname.email}</p>
// // //              <p>{fullname.phone}</p>
// // //              <input
// // //                 type="text"
// // //                 placeholder="Enter Your Name"
// // //                 name='fname'
// // //                 onChange={inputEvent}
// // //                 value={fullname.fname}
// // //                 />
// // //              <br />
// // //              <input
// // //                 type="text"
// // //                 placeholder="Enter Your Last Name"
// // //                 name='lname'
// // //                 onChange={inputEvent}
// // //                 value={fullname.lname}
// // //              />
// // //              <input
// // //                 type="Email"
// // //                 placeholder="Enter Your Email"
// // //                 name='email'
// // //                 onChange={inputEvent}
// // //                 value={fullname.email}
// // //              />
// // //              <input
// // //                 type="number"
// // //                 placeholder="Enter Your contact Detail"
// // //                 name='phone'
// // //                 onChange={inputEvent}
// // //                 value={fullname.phone}
// // //              />
// // //              <button type="submit">Submit Me </button>
// // //            </div>
// // //         </form>
// // //       </div>
// // //     </>

// // //     )
// // // }
// // // }
// // // export default App;



// // //--------------------- To Do App ------------------

// // import { clear } from '@testing-library/user-event/dist/clear';
// // import React, { useState } from 'react';

// // const App = () => {

// //   const[inputlist,setinputlist] = useState();
// //   const[items,setitems]=useState([]);

// //   const itemEvents = (event) =>{
// //     setinputlist(event.target.value);
// //   };
// //   const listofitem = () =>{
// //     setitems((olditems)=>{
// //         return [...olditems,inputlist];


// //     });  

// //   };

// //   return(

// //     <>
// //     <div className="main_div">
// //       <div className="center_div">
// //       <br/>
// //         <h1> TODO List </h1>
// //         <br />
// //         <input className='inputarea' type="text" placeholder="Add a Items" onChange={itemEvents} />
// //         <button onClick={listofitem}> + </button>
// //         <ol>
// //           {
// //             items.map((itemval)=>{
// //               <i class="fa fa-times" area-aria-hidden="true" />
// //               return <li> {itemval} </li>

// //             })
// //           } 
// //         </ol>
// //       </div>
// //     </div>


// //     </>

// //   )

// // }

// // // export default App;




// // //======================== Google keep clone =======================



// // import React,{ useState} from "react";
// // import Header from "./Header";
// // import Footer from "./Footer";
// // import Creatnote from "./Creatnote";
// // import Note from "./Note";


// // const App = () =>{

// //     const [additem, setAddItem] = useState([]); 

// //     const addNote = (note) => {

// //       setAddItem((prevData)=>{
// //         return [...prevData,note]

// //       })  
// //     }



// //     return (<>


// //     <Header/>
// //     <Creatnote passNote={addNote}/>
// //     <Note/>
// //     {additem.map((val, index)=> {
// //       return (
// //         <Note
// //         key={index}
// //         id={index}
// //         Title={val.titles}
// //         Content={val.contents}
// //       />);
// //     })}
// //     <Footer/>

// //     </>
// //     );

// // };

// // export default App;













// //=================================================================================


// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import About from "./about";
// import menu from "./menu";
// import Search from "./search";

// const App = () =>{
//   const Name = () => {
//     return <h1> Hello, I am a Name Page </h1>;
//   };
//   return (
//       <>
//        <menu />
//        <Switch>
//          <Route exact path="/" component={() => <About name="About" />} />
//          <Route
//            exact
//            path="/service"
//            render ={() => <Service name="Service" />}
//            />
//          <Route exact path="/search" component={Search} />
//        </Switch>
//     </>

//     );
// };


//======================pics world app=============================


// import React from "react";
// import Search from "./picsworld";

// const App=()=>{
//     return(
//         <>
//         <Search/>
//         </>
//     )
// };

// export default App;


//==========================================================================


// import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


// const App = () => {
//   return (
//       <div className="container">
//         <h1 className="text-center"> Welcome </h1>
//         <br/>
//         <button className="btn btn-outline-success">welcome to my web</button>
//       </div>
//   );
// };
// export default App;






//====================== Dash Board ==============================================



import React from "react";
import Statwise from "./dashboard";
import setBreadcrumbItems from "./table"

const App = () => {
    return (
        <>
        <setBreadcrumbItems/>
        </>
    );
}

export default App;