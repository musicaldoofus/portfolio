import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { P } from '../../atoms/Text';
import Button from '../../atoms/Button';
import Footer from '../../molecules/Footer';
import { TweenLite } from 'gsap';
import nameLogo from '../../../media/svg/name-logo-expanded.svg';
import { ReactComponent as GitHubLogo } from '../../../media/svg/github-mark.svg';
import { ReactComponent as LinkedInLogo } from '../../../media/svg/linkedin-bug.svg';
import chevron from '../../../media/svg/chevron-basic-white.svg';
import './Nav.css';

const NavLink = React.forwardRef(({to, href, children, label}, ref) => {
	if (href) return (
		<a className="nav-link" ref={ref} href={href} target="_blank" rel="noopener noreferrer">
			<div>
				{children}
			</div>
		</a>
	);
	const isActive = window.location.pathname.indexOf(to) > -1;
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
		this.nameLogoRef = React.createRef();
		this.chevronButtonRef = React.createRef();
		this.aboutRef = React.createRef();
		this.resumeRef = React.createRef();
		this.workRef = React.createRef();
		this.githubRef = React.createRef();
		this.linkedInRef = React.createRef();
		this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
		this.updateColor = this.updateColor.bind(this);
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
		// console.log('<Nav> update', prevProps, this.props);
		this.updateColor();
	}
	
	updateColor() {
		const ghPath = this.githubRef.current.childNodes[2];
		const liCircle = this.linkedInRef.current.childNodes[2].childNodes[0];
		TweenLite.to(ghPath, 0.6, {fill: this.props.colorFocus.hexDk});
		TweenLite.to(liCircle, 0.6, {fill: this.props.colorFocus.hexDk});
		this.props.updateColor();
	}
	
	shouldComponentUpdate(prevProps) {
		return prevProps.location !== this.props.location;
	}
	
	componentDidMount() {
		this.updateColor();
	}
	
	render() {
		const navLinks = (
			<div className="nav-links">
				<NavLink ref={this.aboutRef} to="/about"/>
				<NavLink ref={this.resumeRef} to="/resume"/>
				<NavLink ref={this.workRef} to="/work"/>
				<NavLink href="https://github.com/musicaldoofus" label="Github">
					<GitHubLogo ref={this.githubRef}/>
				</NavLink>
				<NavLink href="https://www.linkedin.com/in/burnstrainingdesign/" label="LinkedIn">
					<LinkedInLogo ref={this.linkedInRef}/>
				</NavLink>
			</div>
		);
		return (
			<nav name="navigation bar" role="navigation" id="nav-bar" className={`nav-bar ${this.state.isCollapsed ? 'collapsed' : 'expanded'}`}>
				<div>
					<Link to="/">
						<img alt="Michael Burns logo" ref={this.nameLogoRef} src={nameLogo}/>
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
				</div>
				{navLinks}
				<Footer/>
			</nav>
		);
	}
}

const NavWithRouter = withRouter(Nav);

export default NavWithRouter;