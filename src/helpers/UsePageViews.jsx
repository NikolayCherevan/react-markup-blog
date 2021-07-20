import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    HashRouter
} from "react-router-dom";
function usePageViews(props) {
let location = useLocation();
    return location.pathname
}

export default usePageViews; 