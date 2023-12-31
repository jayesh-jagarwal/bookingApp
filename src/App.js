import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import toggle from './icon/toggle.svg'
import account from './icon/account.svg'
import logo from './icon/logo.svg'
import star from './icon/star.svg'
import wishlist from './icon/wishlist.svg'
import check from './icon/check.svg'
import down from './icon/down.svg'
import adult from './icon/adult.svg'
import ques from './icon/ques.svg'
import stays from './icon/stays.svg'
import stay from './icon/stay.svg'
import flights from './icon/flight.svg'
import flightsH from './icon/hotel.svg'
import carR from './icon/carrental.svg'
import attractions from './icon/attractions.svg'
import airportT from './icon/airporttaxis.svg'
import './App.css';
import './Responsive.css'


const App = () => {

  // const [openDate, setOpenDate] = useState(false)
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection'
  //   }
  // ]);

  // const [openOptions, setOpenOptions] = useState(false);
  // const [options, setOptions] = useState({
  //   adult: 1,
  //   children: 0,
  //   room: 1,

  // })

  // const handleOption = (name, operation) => {
  //   setOptions((prev) => {
  //     return {
  //       ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
  //     }
  //   })
  // }
{
    return (
      <div className='main'>
        {/* header  */}
        <header className='container-fluid head-bar'>
          <nav className='nav1'>
            <div className='nav-item logo-w'>
              <a className='navbar-brand' href='#'>
                <img src={logo} className='logo' />
              </a>
            </div>
            <div className='btn-item'>
              <button className='btn btn-i text-white'>INR</button>
              <button className='btn btn-i '>
                <a className='l-g' href='#'>
                  <img className='lang-img' src="https://t-cf.bstatic.com/design-assets/assets/v3.94.0/images-flags/In@3x.png" />
                </a>
              </button>
              <button className='btn btn-i text-white'>
                <a className='i-a' href='#'>
                  <img src={ques} className='icon-ques' />
                </a>
              </button>
            </div>
            <div className='btn-item1'>
              <button className='btn btn-lyp text-white'>
                <a className='b-l' href='#'>
                  <span className='lyp'>List your property</span>
                </a>
              </button>
            </div>
            <div className='btn-item2'>
              <button className='btn btn-register '>
                <a className='b-r' href='#'>
                  <span className='register'>Register</span>
                </a>
              </button>
              <button className='btn btn-signin '>
                <a className='b-si' href='#'>
                  <span className='signin'>Sign in</span>
                </a>
              </button>
            </div>
            <div className='btn-item4'>
              <button className='btn btn-i text-white'>
                <a className='i-a' href='#'>
                  <img src={account} className='icon-account' />
                </a>
              </button>
              <button className='btn btn-i text-white'>
                <a className='i-a' href='#'>
                  <img src={toggle} className='icon-toggle' />
                </a>
              </button>
            </div>
          </nav>
          <nav className='nav2'>
            <div className='btn-item3'>
              <button className='btn btn-j rounded-pill border-white'>
                <span className='stays'>
                  <a className='b-st' href='#'>
                    <img src={stays} className='stays-img' />
                    <span className='nav-i'>Stays</span>
                  </a>
                </span>
              </button>
              <button className='btn btn-o rounded-pill'>
                <span className='flights'>
                  <a className='b-f' href='#'>
                    <img src={flights} className='flights-img' />
                    <span className='nav-i'>Flights</span>
                  </a>
                </span>
              </button>
              <button className='btn btn-o rounded-pill'>
                <span className='flightsH'>
                  <a className='b-h' href='#' >
                    <img src={flightsH} className='flightsH-img' />
                    <span className='nav-i'>Flight + Hotel</span>
                  </a>
                </span>
              </button>
              <button className='btn btn-o rounded-pill'>
                <span className='carR'>
                  <a className='b-c' href='#'>
                    <img src={carR} className='carR-img' />
                    <span className='nav-i'>Car rentals</span>
                  </a>
                </span>
              </button>
              <button className='btn btn-o rounded-pill'>
                <span className='attractions'>
                  <a className='b-a' href='#'>
                    <img src={attractions} className='attractions-img' />
                    <span className='nav-i'>Attractions</span>
                  </a>
                </span>
              </button>
              <button className='btn btn-o rounded-pill'>
                <span className='airportT'>
                  <a className='b-ai' href='#'>
                    <img src={airportT} className='airportT-img' />
                    <span className='nav-i'>Airport taxis</span>
                  </a>
                </span>
              </button>
            </div>
          </nav>
        </header>
        <section className='container-fluid banner'>
          <div className='main-item'>
            <div className='banner-i'>
              <img src='https://q-xx.bstatic.com/xdata/images/xphoto/2880x868/279346280.jpeg?k=1f5ef835475595e138026356cdf0664eafb17cc2fc5aa9d09d90407d7ca866a1&o=' className='banner-img' alt='#' />
              <div className='gradient-overlay'></div>
              <div className='content-item'>
                <div className='content-i'>
                  <h1 className='content-txt'>Howzat for a Perfect stay</h1>
                  <h5 className='content-txt2'>Search hotels, homes and much more</h5>
                  <div className='discover-m'>
                    <button className='btn btn-dm'>
                      <span className='dm-i'><a className='dm-o' href='#'>Discover more</a></span>
                    </button>
                  </div>
                  <div className='search-box'>
                    <div className='input-o'>
                      <div className='input-i'>
                        <input className='input-box' placeholder='Where are you going?' autoComplete='off' />
                        <span className='input-logo'>
                          <img src={stay} className='input-img' />
                        </span>
                      </div>
                    </div>
                    <div className='check-k'>
                      <div className='check-o'>
                        <div className='check-i'>
                          <span className='check-logo'><img src={check} className='check-img' /></span>
                          <button className='btn btn-checkin border-white'><span className='checkin'>Check-in Date</span>
                          </button>
                          <span className='dash'>—</span>
                          <button className='btn btn-checkin border-white'><span className='checkout'>Check-out Date</span>
                          </button>
                        </div>
                      </div>
                      <div className='room-o'>
                        <div className='room-i'>
                          <button className='btn btn-room border-white'>
                            <span className='adult'>
                              <img src={adult} className='adult-img' />
                              2 adults · 0 children · 1 room
                            </span>
                            <span className='down-logo'>
                              <img src={down} className='down-img' />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='search-o'>
                      <button className='btn search-btn'>
                        <span className='search-i'>Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        {/* <div className='goa'>
         <div className='goaContainer'>
           <div className='imgConatiner'>
             <img src="https://cf.bstatic.com/xdata/images/hotel/square600/474935720.webp?k=087e85c0f640580d5f87da04fe96a9db6d45d155087b653f268f801be19c8eb7&amp;o=" alt="Hotel Halcyon, Near Candolim Beach" width="248" height="248" class="f9671d49b1" data-testid="image"/>
           </div>
           <div className='imgContent'>
             <div className='imgHeader'>
              <h3>Hotel Halcyon, Near Candolim Beach
              </h3>
             </div>
           </div>
         </div>
      </div> */}
       
      </div>
      
    )
  }
}

export default App;






//                 <div className='headerSearch'>
//                   <div className='headerSearchContainer'>

//                     <div className="headerSearchItem">
//                       <span className='bedImg'>
//                         <img src={bed} className='stays-img' />
//                       </span>
//                       <input
//                         type="text"
//                         placeholder='Wher are u going?'
//                         className='headerSearchInput' />
//                     </div>
//                   </div>

//                   <div className='headerSearchContainer'>
//                     <div className='headerSearchItem'>

//                       <span className='calenderImg'>
//                         <img src={calender} className='stays-img' />
//                       </span>
//                       <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`}</span>
//                       {openDate && <DateRange
//                         editableDateInputs={true}
//                         onChange={item => setDate([item.selection])}
//                         moveRangeOnFirstSelection={false}
//                         ranges={date}
//                         className='date'
//                       />}
//                     </div>
//                   </div>

//                   <div className='headerSearchContainer'>
//                     <div className='headerSearchItem'>
//                       <span className='peopleImg'>
//                         <img src={people} className='stays-img' />
//                       </span>
//                       <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
//                       {openOptions && <div className="option">
//                         <div className="optionItem">
//                           <span className="optionText">Adult</span>
//                           <div className="optionCounter">
//                             <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
//                             <span className="optionCounterNumber">{options.adult}</span>
//                             <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
//                           </div>

//                         </div>
//                         <div className="optionItem">
//                           <span className="optionText">Children</span>
//                           <div className="optionCounter">
//                             <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
//                             <span className="optionCounterNumber">{options.children}</span>
//                             <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
//                           </div>

//                         </div>
//                         <div className="optionItem">
//                           <span className="optionText">Room</span>
//                           <div className="optionCounter">
//                             <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
//                             <span className="optionCounterNumber">{options.room}</span>
//                             <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
//                           </div>

//                         </div>
//                       </div>}
//                     </div>
//                   </div>
//                   <div className='headerSearchBtnContainer'>
//                     <div className='headerSearchItem'>
//                       <button className='headerBtn'>Search</button>
//                     </div>
//                   </div>

//                 </div>
//               </div>


// export default App;