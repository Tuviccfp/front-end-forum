import axios from "axios";
import Cookies from "js-cookie";

function saveStateAuth(sendData){
    if(sendData !== null) {
        const {acessToken, ExpiresIn } = sendData.data;
        Cookies.set("acessToken", acessToken, {
            expires: ExpiresIn, 
            path: "/",
            domain: "http://192.168.0.101:8080",
            secure: true,
            sameSite: "None"
        });
    }
}
export async function UseLogin(formLogin) {
    try {
        const sendData = await axios.post("http://192.168.0.109:8080/api/register/login", formLogin);
            saveStateAuth(sendData);
            setTimeout(() => {
                console.log("Você está logado");
                const teste = Cookies.get("acessToken");
                console.log("Linha 44" + teste);
            }, 3000)
    } catch (error) {
        console.log(error.message);
    }
}