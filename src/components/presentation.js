import React, { useContext } from "react";
import DataAreaContext from "../util/context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
import "../styles/presentation.css"
  
  //main employee presentation area. Dummy area that takes in data from context
  export function EmployeesContainer () { 
    const thisContext = useContext(DataAreaContext).employeeInitial.thisSort
    
    //Date of birth generation section
    function birthDate(a) {
      const hold = (a).substr(0,10)
      const date = hold.split("-")
      return (date[2]+"-"+date[1]+"-"+date[0])
    }
    
    //main card render section 
    return (
            <div className="container main">
              <div className="row">
                {(thisContext).map(({  login, name, picture, email, phone, dob  }) => (    
                    <div className="card" key={login.uuid} id = {login.uuid} loading="lazy">
                      <div id="github">
                        <h4 className="git">{name.first} {name.last}</h4>
                      </div>  
                      <div className="card-body" id="pictures">
                        <a>
                          <img src={picture.large} />
                        </a>
                      </div>  
                      <div className="col align-self-center" id="flags1">
                        <h4 className="data"><FontAwesomeIcon icon="envelope" className="a" />{email}</h4>
                        <h4 className="data"><FontAwesomeIcon icon="phone" className="a" />{phone}</h4>
                        <h4 className="data"><FontAwesomeIcon icon="calendar-check" className="a" />{birthDate(dob.date)}</h4>
                    </div>
                    </div>
                    ))}
                  </div>
              </div>
                )
    }