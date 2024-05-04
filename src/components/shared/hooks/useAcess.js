import axios from "axios";
import Cookies from "js-cookie";

function saveStateAuth(sendData){

}

export async function UseRegister(formRegister, message) {
    try {
        const sendRegistration = await axios.post("http://192.168.0.109:8080/api/register/register-new-account", formRegister);
        if(sendRegistration.status === 200) {
            message += "Conta criada com sucesso!"
        }
    } catch (error) {
    }
}