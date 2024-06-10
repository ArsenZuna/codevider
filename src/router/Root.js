import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import DogsPage from "../pages/DogsPage";
import CatsPage from "../pages/CatsPage";
import BirdsPage from "../pages/BirdsPage";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>,
		errorElement: <><h1>404 Not Found</h1></>
	},
	{
		path: '/dogs',
		element: <DogsPage/>,
		errorElement: <><h1>404 Not Found</h1></>
	},
	{
		path: '/cats',
		element: <CatsPage/>,
		errorElement: <><h1>404 Not Found</h1></>
	},
	{
		path: '/birds',
		element: <BirdsPage/>,
		errorElement: <><h1>404 Not Found</h1></>
	}
])

const Root = () => {
	return (
		<RouterProvider router={router}/>
	)
}
export default Root;