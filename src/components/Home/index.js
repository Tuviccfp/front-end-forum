import * as React from "react";
import Container from "../shared/Container";
import ListAsksComponent from "../ListAsks";
import { getAllAsks } from "../shared/hooks/getAllAsks";
import ListCategoryComponent from "../ListCategory";
import { getAllCategorys } from "../shared/hooks/getAllCategory";

export default function Home() {
    const [data, setData] = React.useState([]);
    const [dataCategory, setDataCategory] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await getAllAsks();
            const responseCategory = await getAllCategorys();
            setData(response);
            setDataCategory(responseCategory);
        }
        fetchData();
    }, [data, dataCategory]);
    console.log(dataCategory);
    return (
        <Container>
            <div>
                <ListCategoryComponent props={dataCategory}/>
            </div>
            <div>
                <p>Fórum dedicado para pessoas que tem interesse na área da programação, tire suas dúvidas ou faça networking, fique a vontade!</p>
                <ul>
                    <li>Crie uma conta e participe da comunidade</li>
                    <li>O fórum é open-source, fique a vontade para mandar uma melhoria.</li>
                    <li>Por padrão o site utiliza Cookies. <a>Clique aqui para saber mais</a></li>
                    <li>Por favor mantenha o respeito com os membros da comunidade. Em caso report excessivos, sua conta será excluída.</li>
                </ul>
            </div>
            {/*<div style={{ width: "50%"}}>*/}
            {/*    {data.map((item, index) => (*/}
            {/*        <ListAsksComponent key={index} data={item} />*/}
            {/*    ))}*/}
            {/*</div>*/}
        </Container>
    )
}