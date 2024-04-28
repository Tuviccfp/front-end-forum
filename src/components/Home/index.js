import * as React from "react";
import Container from "../shared/Container";
import ListAsksComponent from "../ListAsks";
import { getAllAsks } from "../shared/hooks/getAllAsks";

export default function Home() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await getAllAsks();
            setData(response);
        }
        fetchData();
    }, []);
    console.log(data);
    return (
        <Container>
            {data.map((item, index) => (
                <ListAsksComponent key={index} data={item} />
            ))}
        </Container>
    )
}