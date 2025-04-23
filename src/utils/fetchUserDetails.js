import { toast } from "react-toastify"
import { getUserDetails } from "../common/SummaryApi"
import Cookies from 'js-cookie'
export const fetchUserDetails = async () => {
    try {
        const token = Cookies.get('token')
        if(!token){
            return toast.error('Please Log in')
        }
        const response = await fetch(`${getUserDetails.api}`,{
           method : getUserDetails.method,
           headers:{
            'Authorization' : `Bearer ${token}`
           },
           credentials: 'include'
        })
        const result = await response.json()
        if(result.success){
            return result.message
        }
    } catch (error) {
        toast.error('Something went wrong')
    }
}