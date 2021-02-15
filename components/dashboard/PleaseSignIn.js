import Signin from './Signin';
import { useUser } from './User';

function PleaseSignIn({ children }) {
    const me = useUser();
    // TODO Loading..
    if (!me) return <Signin />;
    return children;
}

export default PleaseSignIn;
