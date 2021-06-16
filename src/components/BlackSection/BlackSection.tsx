import styled from "styled-components";
import phone from "../../images/phone.png";
import dots from "../../images/dots.png";
import iconHealthcare from "../../images/icon-healthcare.png";
import iconTransportation from "../../images/icon-transportation.png";
import iconGovernment from "../../images/icon-government.png";
import researchMarketStats from "../../images/research-market-stats.png";
import Stepper from "react-stepper-horizontal";

const steps = [
    {
        id: 1,
        title: "Collecting",
        text: "The various types of sensors collecting live data from all over the city, and sending them towards the cleaning process",
    },
    {
        id: 2,
        title: "Cleaning",
        text: "The gathered raw data is getting cleaned and organized automatically, to give a foundation to the machine learning algorithms",
    },
    {
        id: 3,
        title: "Learning",
        text: "The prepared data is used by the algorithms, to learn the patterns and identify the possible anomalies",
    },
    {
        id: 4,
        title: "Predicting",
        text: "With enough data and learning, the algorithms could predict possible, regularly occuring environmentl changes",
    },
];

const cards = [
    {
        id: 1,
        image: iconHealthcare,
        title: "Healthcare",
        text: "Reducing pollution, maximizing public safety and the overall quality of life, are just a couple of examples, how the healthcare system can benefit from these solutions",
    },
    {
        id: 2,
        image: iconTransportation,
        title: "Transportation",
        text: "By analyzing the incoming data and traffic jams, the transportation network could make improvements to reach a more optimized route system",
    },
    {
        id: 3,
        image: iconGovernment,
        title: "Government",
        text: "This live data feed gives the government sector a better chance to improve operations, maintenance and future city planning, in order to elevate the urban life",
    },
];

const Container = styled.section`
    color: #b6b9ba;
    background-color: #121b1f;
    margin-top: 200px;
    border-radius: 600px;
`;

const Dots = styled.div`
    margin: 90px 0;
`;

const Paragraph = styled.div`
    width: 40%;
    margin: auto;
`;

const TextContainer = styled.div`
    text-align: left;
    margin-bottom: 40px;
    padding-left: 150px;
`;

const Text = styled.div`
    width: 50%;
    h1 {
        color: #fff;
        font-size: 2.6rem;
        font-family: Nora;
        font-weight: bold;
        margin: 0;
    }
    p {
        line-height: 1.8rem;
    }
`;

const Stats = styled.div``;

const Steps = styled.div`
    width: 1300px;
    padding-left: 20px;
`;

const StepsDescriptions = styled.div`
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding-left: 150px;
`;

const Cards = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    margin-top: 60px;
`;

const Card = styled.div`
    background-color: #fff;
    width: 250px;
    padding: 15px;
    border-radius: 9px;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);
    h1 {
        color: #1B282D;
    }
    p {
        color: #BDC0CD;
    }
`;

const Picture = styled.img`
    transform: translateY(-100px) scale(1.6);
`;

function BlackSection() {
    return (
        <Container>
            <div>
                <Picture src={phone} alt="" />
            </div>
            <Paragraph>
                <p>
                    With the Locus application, you are able to see the live
                    environmental data of your city, provided by sensors. You
                    can monitor the various environment attributes and get real
                    time notifications about the possible dangers. The
                    application provides a direct connection between the public
                    and the information system of the city.
                </p>
            </Paragraph>
            <Dots>
                <img src={dots} alt="" />
            </Dots>
            <TextContainer>
                <Text>
                    <p style={{ marginBottom: 10 }}>
                        City development - Smart Cities and Big Data
                    </p>
                    <h1>Research Materials</h1>
                    <p>
                        The machine learning and big data solutions could be one
                        approach to improve and optimize the life in cities. A
                        smart city is usually an urban area that uses various
                        types of electronic data, collected by (mostly) sensors.
                        With that information, the government can manage assets
                        and resources in an efficient and sustainable way to
                        maximize the healthy growth of the city.
                    </p>
                </Text>
                <Stats>
                    <img src={researchMarketStats} alt="" />
                </Stats>
            </TextContainer>
            <TextContainer>
                <Text>
                    <h1>How can this be helpful?</h1>
                    <p>
                        The sensors across the city, are collecting live data.
                        Later on, the data will get structures in order for the
                        machine learning algorithm. This algorithm identifies
                        patterns and learns from them. With more data, the
                        accuracy of predictions will be higher too. It would be
                        capable of predicting possible anomalies and
                        environmental changes. Beside that, the government could
                        get a clear view of the life and development in the
                        city.
                    </p>
                </Text>
            </TextContainer>
            <Steps>
                <div style={{ width: 1400 }}>
                    <Stepper
                        steps={[
                            { title: "Step One" },
                            { title: "Step Two" },
                            { title: "Step Three" },
                            { title: "Step Four" },
                        ]}
                        activeStep={0}
                        activeColor="#4DE7BE"
                        activeTitleColor="#757575"
                        defaultColor="transparent"
                        activeBorderColor="#ff0000"
                        defaultBorderWidth={5}
                    />
                </div>
                <StepsDescriptions>
                    {steps.map(({ id, title, text }) => (
                        <div key={id}>
                            <h1>{title}</h1>
                            <p style={{ width: "70%" }}>{text}</p>
                        </div>
                    ))}
                </StepsDescriptions>
            </Steps>
            <Cards>
                {cards.map(({ id,image, title, text }) => (
                    <Card key={id} style={{ transform: id === 2 ? 'translateY(20px)' : ''}}>
                        <img src={image} alt='' />
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </Card>
                ))}
            </Cards>
        </Container>
    );
}

export default BlackSection;
