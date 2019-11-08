import MainLayout from '../layouts/MainLayout'
import React, { useState } from 'react'


const HomePage = () => {

    const [behind] = useState('../static/images/images4.jpg')
    const [glasses] = useState('../static/images/magnifying.jpg')

    return (
        <div>
            <MainLayout>
            </MainLayout>
            <div className="moveback">
                <div className="layoutBackground">
                    <img className="behindground" src={behind}></img>
                </div>
                <div className="SearchRow">
                    
                        <div className="borderbox">
                            <img className="magnifyingstyle" src={glasses}></img>
                            <input className="input-Search" type="text" placeholder="Find Something" ></input>
                        </div>
                        <button className="buttonsearch">Search</button>
                   
                </div>

            </div>
            <div className="message">
                <div className="layoutmessage">
                    <h2>Storage</h2>
                    <h5>Keep your product data</h5>
                    <h5>Into the database</h5>
                </div>
                <div className="linecenter"></div>
                <div className="layoutmessage">
                    <h2>Accessible</h2>
                    <h5>The product Information</h5>
                    <h5>Can be easily</h5>
                    <h5>accessed by anyone</h5>
                </div>
            </div>
            <div className="allcontent">
                <div className="linecontent"></div>
                <br></br><br></br>
                <div className="layoutHotPro">
                    <div className="hot">Hot</div>
                    <div className="Products">Products</div>
                </div>
            </div>

            <style jsx>{`
            h5{
                margin:0px;
            }
            .Products{
                font-size:30px;
                margin:0px 0px 0px 15px ;
                font-weight: bold;
            }
            .hot{
                font-size:30px;
                font-weight: bold;
                color:orange;
            }
            .layoutHotPro{
                display:flex;
                flex-direction:row;
            }

            .linecontent{
                display:flex;
                width:100%;
                box-shadow:rgba(0,0,0,0.5) 0px 10px 0px 1px ; 
            }
            
            .allcontent{
                display:flex;
                flex-direction:column;
                margin:30px 5% 0px 5% ;
            }

            .linecenter{
                display:flex;
                align-items:center;
                margin:18px 10px 0px 0px ;
                height:90px;
                box-shadow:rgba(0,0,0,0.5) 0px 10px 0px 1px ; 
            }

            .magnifyingstyle{
                width:30px;
                height:30px;
                margin:0px 0px 0px 10px ;
            }
            .borderbox{
                display:flex;
                align-items:center;
                margin:0px 10px 0px 0px ;
                border:2px;
                border-radius:15px;
                height:50px; 
                box-shadow:rgba(0,0,0,0.3) 0px 1px 4px 1px ;
                

            }
            .SearchRow{
                display:flex;
                justify-content:center;
                align-items:center;
            }
            
            .layoutmessage{
                display:flex;
                flex-direction:column;
                justify-content:top;
                align-items:center;
                margin:0px 20px 0px 20px ;
            }
            .message{
                display:flex;
                flex-direction:row;
                justify-content: center;
                margin:10px 0px 0px 0px ;


            }
            .layoutsearch{
                flex-direction:row;
                margin-bottom:3px;
            }
            
            .moveback{
                margin-top:3px;
            }

            .layoutBackground{
                display: flex;
                flex-direction:column;
                justify-content: flex-end;
                align-items:center;
            }
                
            .behindground{
                background-size:auto;
                width:100%;
            }
            .input-Search{
                height:30px;
                width:300px;
                border-radius:10px;
                box-shadow:rgba(255,255,255,0.9) 0px 0px 50px;
                margin:5px;
                padding:0px 0px 0px 0px;
                border:None;
                font-size:20px;
    
                 }
            .buttonsearch{
                background-color:#20DBDB;
                height:50px;
                width:90px;
                border-radius:15px; 
                border:0px;
                color:white;
                font-size:20px;
            }
            
        `}</style>

        </div >

    )
}

export default HomePage;