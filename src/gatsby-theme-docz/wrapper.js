import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import icon from './favicon.png'; 

const Wrapper = ({ children }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon"
            type="image/png"
            href={icon}
        />
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper;