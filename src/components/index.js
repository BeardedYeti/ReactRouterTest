import MainMenu from './ui/MainMenu'

export const Left = ({ children }) =>
	<div className="page">
		<MainMenu className="main-menu"/>
		{children}
	</div>

export const Right = ({ children }) =>
	<div className="page">
		{children}
		<MainMenu className="main-menu"/>
	</div>

export const Error404 = ({ location }) =>
    <div>
        <h1>Error404 resource not found</h1>
        <p>Could not find {location.pathname}</p>
    </div>
