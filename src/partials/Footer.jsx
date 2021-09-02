import { Layout} from 'antd';
import Social from './Social';
const { Footer } = Layout;

export default function FooterMain() {
    return (
        <Footer
            className="site-layout-background">
            <Social />
        </Footer>
    )
}