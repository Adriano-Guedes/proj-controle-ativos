import axios from "axios";
import {toast} from "react-toastify";

export const handleError = (error: any) => {
    if(axios.isAxiosError(error)){
        var err = error.response;
        
        if(Array.isArray(err?.data.erros)){
            for(let val of err?.data.erros){
                toast.warning(val);
            }
        }else if(typeof err?.data.erros === 'object'){
            for(let e in err?.data.erros){
                toast.warning(err.data.erros[e][0]);
            }
        }else if (err?.data){
            toast.warning(err.data);
        }else if (err?.status == 401){
            toast.warning("Não autorizado");
            window.history.pushState({}, "LoginPage", "/login")
        }else if (err){
            toast.warning(err?.data);
        }
    }
};