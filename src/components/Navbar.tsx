import {Card, Tab, Tabs} from "@paljs/ui";
import Home from "pages/home";
import About from "pages/about";
import Basic from "components/Basic";


const HeadNav = () => (
    <Card>
        <Tabs>
            <Tab title="🏠Home">
                <Basic>
                    <Home />
                </Basic>
            </Tab>
            <Tab title="✌About">
                <About/>
            </Tab>
            <Tab title="Tab 3">
                <h1>Content 3</h1>
            </Tab>
        </Tabs>
    </Card>
)

export default HeadNav;
