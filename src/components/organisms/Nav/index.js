import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { P } from '../../atoms/Text';
import Button from '../../atoms/Button';
import { TweenMax, TweenLite } from 'gsap';
import { ReactComponent as ReactNameLogo } from '../../../media/svg/name-logo-expanded.svg';
import chevron from '../../../media/svg/chevron-basic-white.svg';
import './Nav.css';

const NavLink = React.forwardRef(({to, href, children, label}, ref) => {
	if (href) return (
		<a ref={ref} href={href} target="_blank" rel="noopener noreferrer">
			<div>
				<P><span>{label}</span></P>
			</div>
		</a>
	);
	const isActive = window.location.pathname.indexOf(to) > -1;
	// console.log(`${isActive} for ${to}`);
	return (
		<Link ref={ref} to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
			<div><P><span>{to}</span></P></div>
		</Link>
	);
})

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			isCollapsed: false
		};
		this.chevronButtonRef = React.createRef();
		this.aboutRef = React.createRef();
		this.resumeRef = React.createRef();
		this.workRef = React.createRef();
		this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
	}
	
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	
	handleToggleCollapse() {
		// const btn = this.chevronButtonRef.current;
		// const btnPosX = btn.getBoundingClientRect().x;
		// TweenLite.to(this.chevronButtonRef.current, 0.6, {x: btnPosX -100});
	}
	
	componentDidUpdate(prevProps) {
		console.log('<Nav> update', prevProps, this.props);
	}
	
	shouldComponentUpdate(prevProps) {
		return prevProps.location !== this.props.location;
	}
	
	render() {
		return (
			<nav name="navigation bar" role="navigation" id="nav-bar" className={`nav-bar ${this.state.isCollapsed ? 'collapsed' : 'expanded'}`}>
				<div>
					<Link to="/">
						<ReactNameLogo/>
					</Link>
					<div className="collapse-btn">
						<Button
							ref={this.chevronButtonRef}
							className={`sm accent-${this.props.colorFocus.label}-dk ${this.state.isCollapsed ? 'collapsed' : 'expanded'}`}
							onClick={this.handleToggleCollapse}
						>
							<img src={chevron} alt="Toggle the navbar collapsed or expanded"/>
						</Button>
					</div>
					<hr/>
				</div>
				<div className="nav-links">
					<NavLink ref={this.aboutRef} to="/about"/>
					<NavLink ref={this.resumeRef} to="/resume"/>
					<NavLink ref={this.workRef} to="/work"/>
					<NavLink href="https://github.com/musicaldoofus" label="Github"/>
					<NavLink href="https://www.linkedin.com/in/burnstrainingdesign/" label="LinkedIn"/>
				</div>
				<footer role="contentinfo">
					<div>
						<P>Copyright 2019</P>
					</div>
				</footer>
			</nav>
		);
	}
}

const NavWithRouter = withRouter(Nav);

export default NavWithRouter;