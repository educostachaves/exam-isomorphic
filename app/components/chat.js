import React from 'react';

export class Chat extends React.Component {
	render() {
		return (
			<div>
	      <div className="row collapse">
	        <div className="large-12 columns">
	          <dl className="tabs template-2 row collapse text-center" data-tab="" data-equalizer="">
	            <dd className="small-6 columns active" data-equalizer-watch="">
	            	<a href="#">Fale com o professor</a>
	            </dd>
	            <dd className="small-6 columns">
	            	<a href="#">Material de Apoio</a>
	            </dd>
	          </dl>
	        </div>
	      </div>
	      <div className="row collapse">
	        <div className="tabs-content template-2 large-12 columns">
	          <p>Chat</p>
	        </div>
	      </div>
    	</div>
		)
	}
}