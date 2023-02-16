import Header from "../../components/Header/Header";
import { ErrorContainer } from "./styles";

export default function ErrorPage() {


    return (
        <>
            <Header />
            <ErrorContainer>
                <h1>Endereço invalido </h1>
            </ErrorContainer>
        </>
    )
}