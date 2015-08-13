import React from 'react';
import { Chat } from './chat';

export class InfoClass extends React.Component {
	render() {
		return (
			<div className="row collapse room-info">
				<div className="small-12 columns">
					<hgroup className="row collapse">
						<div className="small-12 columns">
							<h1>{this.props.name}</h1>
							<h2>{this.props.desc}</h2>
						</div>

						<div className="tags small-12 columns">
							<span className="tutor">Prof. {this.props.desc}</span>
							<span className="interval">{this.props.hour}</span>
							<span className="delayed"></span>
						</div>
					</hgroup>
				</div>
			</div>
		)
	}
}

export class Content extends React.Component {
	render() {
		return (
			<section className="small-12 columns header-video background">

				<InfoClass 
					name="Aula ao Vivo - Regular" 
					desc="História - A Era Vargas: Tempo do Nacional Estatismo" 
					teacher="William Gabriel" 
					hour="Amanhã de 09:00 até 10:00"/>

				<div className="row collapse video-player">
					<div className="small-12 large-8 columns widescreen vimeo flex-video">
						<iframe 
						id="iframe-livestream" 
						src="http://new.livestream.com/accounts/807385/events/3444024/player?autoPlay=true&amp;amp;mute=false" 
						width="810" 
						height="350" 
						webkitallowfullscreen="" 
						mozallowfullscreen="" 
						allowfullscreen="">
						</iframe>
					</div>

					<div className="large-4 columns tabs-video-related hide-for-medium-down">
						<Chat />
					</div>
				</div>

			</section>
		)
	}
}