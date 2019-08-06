import React from 'react';
import { withRouter } from 'react-router-dom';

import View from 'containers/View';
import Link from 'components/Link';
import Button from 'components/Button';
import Image from 'components/Image';
import Grid from 'components/Grid';
import GridChild from 'components/GridChild';

import breakpoints from 'helpers/constants/breakpoints.mjs';

const testImage = require('assets/img/image.jpg');
const testGraphic = require('assets/gfx/graphic.svg');

const FORM_SECTION_ID = 'FormArea';

const submit = event => {
	event.preventDefault();

	const FEEDBACK = document.createElement('div');
	FEEDBACK.classList.add('form-feedback');
	FEEDBACK.innerText = 'Submitted';
	document.querySelector(`#${FORM_SECTION_ID}`).appendChild(FEEDBACK);
};

const styleFullWidth = {
	width: '100%'
};

const exampleChildren = [
	{ word: 'Wham', bgc: '#E4572E' },
	{ word: 'Boom', bgc: '#76B041' },
	{ word: 'Sploosh', bgc: '#FFC914' }
];

const ExamplesView = () => (
	<View title="Humblebee Boilerplate — Examples View">
		<section style={styleFullWidth}>
			<h1>Examples View</h1>
			<div>
				<p>
					Thanks for using the Humblebee Boilerplate, installed through the{' '}
					<Link href="https://bitbucket.org/humblebee/humblebee-web-starter/">
						Humblebee Web Starter
					</Link>{' '}
					package.
				</p>
			</div>

			<Grid
				maxWidth="1440px"
				rowGap={40}
				columnGap={10}
				style={{ backgroundColor: '#2E282A' }}
				childPadding="30px"
				margins="60px auto"
			>
				<GridChild style={{ backgroundColor: '#17BEBB' }}>
					<h1>Grid & GridChild example</h1>
					<h2>
						This and h1 tag are both a part of the same GridChild. This grid is 6 columns and 4
						columns on mobile.
					</h2>
				</GridChild>
				{exampleChildren.map((soundEffect, index) => {
					return (
						<GridChild
							key={index}
							style={{ backgroundColor: soundEffect.bgc }}
							columnSpan={[
								{ start: 1 },
								{
									break: breakpoints.maxMobile,
									columns: 4,
									start: index % 2 === 0 ? 1 : 3
								}
							]}
						>
							<h1>{soundEffect.word}</h1>
							columnSpan: [ &#123; start: 1 &#125;, &#123; break: breakpoints.maxMobile, columns: 4,
							start: {index % 2 === 0 ? 1 : 3}
							&#125; ]
						</GridChild>
					);
				})}
			</Grid>

			<div id="FormArea">
				<form name="user-form" id="Form">
					<h2>Form example</h2>
					<input type="text" name="firstName" placeholder="First Name" />
					<input type="text" name="lastName" placeholder="Last Name" />
					<input type="text" name="email" placeholder="Email" />
					<input type="password" name="password" placeholder="Password" />
					<button type="submit" onClick={submit}>
						Submit
					</button>
				</form>
			</div>

			<Button>Button</Button>

			<Image src={testImage} caption="Image alt text and title as caption" />
			<Image src={testGraphic} caption="Image alt text and title as caption" />
		</section>
	</View>
);

export default withRouter(ExamplesView);
