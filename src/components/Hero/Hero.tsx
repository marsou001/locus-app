import styled from "styled-components";

const Header = styled.header`
    font-size: 0.8rem;
    padding: 70px 0;
    p:first-child {
        color: #adafbf;
    }
    p {
        margin: 0;
        line-height: 1.4rem;
    }
`;

const Container = styled.div`
    width: 40%;
    margin: auto;
`;

const H1 = styled.h1`
    color: #253136;
    font-size: 2.9rem;
    font-family: Lora;
    font-weight: bold;
    margin: 0;
    margin-bottom: 10px;
`;

function Hero() {
    return (
        <Header>
            <Container>
                <p>Smart city &amp; Big data application</p>
                <H1>Locus Mobile App</H1>
                <p>
                    We are facing an era, when it's getting more and more
                    important to address environment concerns such as climate
                    change, pollution or overpopulation. By 2050, more than 60%
                    of the world's population is expected to live in cities.
                    With a new approach to the information systems and
                    communication technologies we can increase sustainability.
                    These solutions could be beneficial for both the public, the
                    government, and the environment.
                </p>
            </Container>
        </Header>
    );
}

export default Hero;
