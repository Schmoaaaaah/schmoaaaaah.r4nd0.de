import {Card, CardBody, CardFooter, CardHeader, Col, Container, Row} from "@paljs/ui";

const home = () => (
    <Container>
        <Row>
            <Col>
                <Card>
                    <CardBody>
                        <img src="/pictures/world.gif" className="rounded-circle" alt="my picture"/>
                    </CardBody>
                </Card>
            </Col>
            <Col className="">
                <Card className="text-left">
                    <CardHeader id="">Hey <strong id="haupttitel">!</strong></CardHeader>
                    <CardBody>
                        <p>It's me <strong id="haupttitel">Schmoaaaaah</strong> maybe you also know me
                            as <strong id="haupttitel">Noah</strong>.</p>
                        <p>So you found my website. Nice👌<span id="intelectuelspin">👌</span>.</p>
                        <p>Please take a look at everything there is some <strong id="haupttitel">Cool</strong><span
                            id="darkmode">🕶</span> Stuff around</p>
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted">Have I mentioned I like <strong
                            id="haupttitel">this</strong> font?</small>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    </Container>
)

export default home;