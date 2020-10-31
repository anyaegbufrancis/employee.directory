import React, {useContext} from "react"
import DataAreaContext from "../util/context"
import "../styles/rendersearch.css";

//search component that calls a search handler
const FindEmployee = () => {
  
    const thisContext = useContext(DataAreaContext);
    //console.log(thisContext)

    return (
        <div className="container search-container">
        <form>
          <input className="search" type="search" placeholder="Search by Name or Email Address.."
          onChange={thisSearch => thisContext.handleSearchChange(thisSearch)}
          />
        </form>
      </div>
    );
}
export default FindEmployee;



