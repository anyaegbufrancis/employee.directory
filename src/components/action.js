import React, {useState, useEffect} from "react";
import API from "../util/api";
import DataAreaContext from "../util/context"
import FindEmployee from "./search"
import { EmployeesContainer } from "./presentation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';

//Main page function
const EmployeeLogic = () => {
  //Declare and initialize the store
      const [employeeInitial, setEmployeeData] = useState({
        employees: [],
        thisSort: [],
        isLoading: false,
        error: "",
      });
    

   //Input Handler. Receives input, changes them to lower case and return an array of matching 
   //first name and/or last names cmompared to the input. Updates the store with the return data for presentation
      const handleSearchChange = event => {
        const filter = event.target.value;
        console.log(employeeInitial)
        const sortedEmployees = employeeInitial.employees.filter(item => {
          let first = item.name.first.toLowerCase();
          let last = item.name.last.toLowerCase();
          let email = item.email.toLowerCase()
          return ((first.indexOf(filter.toLowerCase())) !== -1 || 
                  (last.indexOf(filter.toLowerCase())) !== -1 ||
                  (email.indexOf(filter.toLowerCase())) !== -1);
        });
    
        setEmployeeData({ 
        ...employeeInitial, 
        thisSort:sortedEmployees });
      };


      //Using useEffect to call the API async function once
      useEffect(() => {
        setEmployeeData({
          ...employeeInitial,
          isLoading: true
       })       
        
        API
        .fetchEmployees()        
        .then(results => {          
          setEmployeeData({
            ...employeeInitial,
            isLoading: false,
            employees: results.data.results,
            thisSort: results.data.results
          });
        })
        .catch( error => {
          setEmployeeData({
            ...employeeInitial,
            error: error,
          });
        });
      }, []);
      
    //Instantiate provider context and render 'high-level' logic blocks
      return ( <DataAreaContext.Provider  value={{ employeeInitial, handleSearchChange }} >              
          <FindEmployee />
          {
            employeeInitial.isLoading ? 
            <>
            <FontAwesomeIcon icon="spinner" className="load" />
           <p className="loading" style={{ color: 'green'}}>Loading Employees...</p> </> :
           employeeInitial.error ?
           <>
           <FontAwesomeIcon icon="exclamation-triangle" className="fail" />
           <p className="error" style={{ color: 'red'}}>Network Error! Try Again...</p> </> :
           employeeInitial.thisSort.length > 0 ?
           <EmployeesContainer /> :
           <>
           <FontAwesomeIcon icon="exclamation-circle" className="no" />
           <p className="none" style={{ color: 'red'}}>No Matching Search Found</p></>
          }
                   
        </DataAreaContext.Provider>
      );
    }
    
    export default EmployeeLogic;