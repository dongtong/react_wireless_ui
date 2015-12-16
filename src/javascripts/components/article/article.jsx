'use strict';

import React from 'react';

// {
// 	parts: [
// 		{
// 			title: '第一部分',
// 			chapters: [
// 				{
// 					title: '第一章',
// 					sections: [
// 						{
// 							title: '1.1 节',
// 							content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute'
// 						},{
// 							title: '1.2 节',
// 							content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute'
// 						}
// 					]
// 				}
// 			]
// 		}
// 	]
// }

class Article extends React.Component {

	renderSections(sections) {
		return (sections.map((section, index) => {
			return (
				<section key={"section_" + index}>
					<h3>{section.title}</h3>
					<p>{section.content}</p>
				</section>
			)
		}));
	}

	renderChapters(chapters) {
		return (chapters.map((chapter, index) => {
			return (
				<section key={"chapter_" + index}>
					<h2>{chapter.title}</h2>
					{this.renderSections(chapter.sections)}
				</section>
			)
		}));
	}

	renderParts() {
		return (this.props.parts.map((part, index) => {
			return (
				<article className="weui_article" key={"part_" + index}>
					<h1>{part.title}</h1>
					{this.renderChapters(part.chapters)}
				</article>
			)
		}));
	}

	render() {
		let pageTitleStyle = {
			textAlign: 'center',
    	fontSize: '34px',
    	color: '#DE7C23',
    	fontWeight: 400,
    	margin: '0 15%'
		};

		return (
			<div className="page article">
				<div className="hd">
					<h1 style={pageTitleStyle}>{this.props.pageTitle}</h1>
				</div>
				<div className="bd">
					{this.renderParts()}
				</div>
			</div>
		);
	}
}

export {Article}