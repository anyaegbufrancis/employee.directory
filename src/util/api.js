import axios from "axios"

const url = "https://randomuser.me/api/?results=100&nat=us"

export default { 
    fetchEmployees: async function() {    

        return (await axios 
        .get(url))
}
}