import React from 'react';
import Header from "./Header";


const Layout = ({children}) => {
	return (
		<div className="d-flex flex-column">
			<Header/>
			<div className="d-flex justify-content-center align-items-center">
				{children}
			</div>
		</div>

	);
};

export default Layout;
