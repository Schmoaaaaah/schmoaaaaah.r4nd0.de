import {Card, Tab, Tabs} from "@paljs/ui";
import Home from "pages/home";
import About from "pages/about";
import Link from 'next/link'


const HeadNav = () => (
    <Card status="Primary">
        <Tabs>
            <Link href="/" passHref>
                <Tab title="🏠Home"/>
            </Link>
            <Link href="/about" passHref>
                <Tab title="✌About"/>
            </Link>
            <Link href="/programming" passHref>
                <Tab title="Tab 3"/>
            </Link>
        </Tabs>
    </Card>
)

export default HeadNav;
