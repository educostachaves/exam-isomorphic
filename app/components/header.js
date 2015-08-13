import React from 'react';

export class Header extends React.Component {

	render () {
		return (
			<div className="new-nav-menu contain-to-grid fixed template1">
		    <nav className="top-bar template1" role="menu" data-topbar>
		      <div className="icon-search">
		        <a id="header-search" href="/Search">
		        	<img src="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVGNTAxN0FGQjA3QjExRTRBMzEwQUEwNDRENTIxMjk0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVGNTAxN0IwQjA3QjExRTRBMzEwQUEwNDRENTIxMjk0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUY1MDE3QURCMDdCMTFFNEEzMTBBQTA0NEQ1MjEyOTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUY1MDE3QUVCMDdCMTFFNEEzMTBBQTA0NEQ1MjEyOTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAXABcDAREAAhEBAxEB/8QAXAABAQEBAAAAAAAAAAAAAAAABwgGCgEBAAAAAAAAAAAAAAAAAAAAABAAAQQDAAIDAQEBAAAAAAAABgIDBAUBBwgAEhETCSEUFREBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6rAUAm/ofPJtwbhKC9nlBguKRHRGhg8qvgmh2XRBN9PFbTcW47YUsKckLkFpNTSXKKjXJZqodUyy86zJdkrV4G6Ifzo1UFwHifkGddcp7jqGlzBkkAiAkdAr6wYxl+PRbW1hZ2tkHHYjaSE4TMS7DTYITn7GJCHE4+QUNTdDH24OTyba42BV7W/REd2uK3eo5U57/lw+htSukQvcAbs9tzMpFFZndBhMZ7K/uzWy2XM59858Au/OYgrwvVE7kElfbqtx8o3ZCAk41MV/nn3YK8TW9prDadGw/lMi0ETsNsIbyJicKwifiQw76uo+Mhb2xtjA+owcm2Tsglqw8IDqmTdERDcyExoNfAip+VZznPy5IlSHMpajx2krfkvrQ00hbi0pyEHcokdxqnjTc3URYKWzD2yyPo/tSPr5hCFkEQOL5d6fhAz9aHFtZIbQCq65x1vHrlE2WpCsYXhXgMHRGpuStwH4GN7ZJhoR381XzJWpbsW2uvUvQ8Or+55ua6B3AwRD55ZUSJWXMuxk4l1uXvbK2sr/AL4A4Scp8X6nuBcr6m3NfbMkN2yGNfM9sdHSDAQhXi23G20iwRsG9qwKzv8ALas/W85XS5yM49kLSr++ATjw7V86VUgWF5NV0L+VfQtST0sqVTE8IrpuV6Yrg20QveeL4dq7BseSbGA7NzPn5m4QGow8668iKha1h//Z" />
		        </a>
		      </div>
		      <ul className="title-area">
		        <li className="name">
		          <a href="//descomplica.com.br">
		          	<img src="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhCNUI0QkIzQjA2MTExRTQ4MTEzREYzNjFBQkE1OTdCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhCNUI0QkI0QjA2MTExRTQ4MTEzREYzNjFBQkE1OTdCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEI1QjRCQjFCMDYxMTFFNDgxMTNERjM2MUFCQTU5N0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEI1QjRCQjJCMDYxMTFFNDgxMTNERjM2MUFCQTU5N0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEB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" className="logo" width="123" height="37" data-src=""/>
		          </a>
		        </li>
		        <li className="toggle-topbar menu-icon"><a href="#">&nbsp;</a></li>
		      </ul>
		      <section className="top-bar-section" role="list">
		        
		        <div id="user-log-info">
		          <div className="right user-area logged small-text-left">
		            <div className="profile">
		              <span className="avatar-bg">&nbps;</span>
		              <div className="user-data">
		                <span id="user-name" className="user-name">Olá, keppelen.as@gmail.com</span>
		              </div>
		              <a id="pricingPlan-header" href="//descomplica.com.br/assinatura" className="button radius">Assine Já!</a>
		            </div>
		          </div>
		        </div>


		        <ul className="right">
		          <li className="icon-search">
		            <a id="header-search" href="//descomplica.com.br/busca">
		            	<img src="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVGNTAxN0FGQjA3QjExRTRBMzEwQUEwNDRENTIxMjk0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVGNTAxN0IwQjA3QjExRTRBMzEwQUEwNDRENTIxMjk0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUY1MDE3QURCMDdCMTFFNEEzMTBBQTA0NEQ1MjEyOTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUY1MDE3QUVCMDdCMTFFNEEzMTBBQTA0NEQ1MjEyOTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAXABcDAREAAhEBAxEB/8QAXAABAQEBAAAAAAAAAAAAAAAABwgGCgEBAAAAAAAAAAAAAAAAAAAAABAAAQQDAAIDAQEBAAAAAAAABgIDBAUBBwgAEhETCSEUFREBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6rAUAm/ofPJtwbhKC9nlBguKRHRGhg8qvgmh2XRBN9PFbTcW47YUsKckLkFpNTSXKKjXJZqodUyy86zJdkrV4G6Ifzo1UFwHifkGddcp7jqGlzBkkAiAkdAr6wYxl+PRbW1hZ2tkHHYjaSE4TMS7DTYITn7GJCHE4+QUNTdDH24OTyba42BV7W/REd2uK3eo5U57/lw+htSukQvcAbs9tzMpFFZndBhMZ7K/uzWy2XM59858Au/OYgrwvVE7kElfbqtx8o3ZCAk41MV/nn3YK8TW9prDadGw/lMi0ETsNsIbyJicKwifiQw76uo+Mhb2xtjA+owcm2Tsglqw8IDqmTdERDcyExoNfAip+VZznPy5IlSHMpajx2krfkvrQ00hbi0pyEHcokdxqnjTc3URYKWzD2yyPo/tSPr5hCFkEQOL5d6fhAz9aHFtZIbQCq65x1vHrlE2WpCsYXhXgMHRGpuStwH4GN7ZJhoR381XzJWpbsW2uvUvQ8Or+55ua6B3AwRD55ZUSJWXMuxk4l1uXvbK2sr/AL4A4Scp8X6nuBcr6m3NfbMkN2yGNfM9sdHSDAQhXi23G20iwRsG9qwKzv8ALas/W85XS5yM49kLSr++ATjw7V86VUgWF5NV0L+VfQtST0sqVTE8IrpuV6Yrg20QveeL4dq7BseSbGA7NzPn5m4QGow8668iKha1h//Z" />
		            </a>
		          </li>
		          <li className="has-dropdown" aria-haspopup="true">
		            <a href="#">Disciplinas</a>
		            <ul className="dropdown">
		              <li>
		                <div className="list-items">
		                  <ul id="discipline-header">
		                    <li><a id="header-biology" href="//descomplica.com.br/biologia">Biologia</a>
		                    </li>
		                  </ul>
		                </div>
		              </li>
		            </ul>
		          </li>
		          <li className="divider"></li>
		          <li className="has-dropdown" aria-haspopup="true">
		            <a href="#">Cursos extras</a>
		            <ul className="dropdown">
		              <li>
		                <div className="list-items">
		                  <ul>
		                    <li><a id="header-nitro" href="//descomplica.com.br/cursos/nitro">Nitro</a>
		                    </li>
		                  </ul>
		                </div>
		              </li>
		            </ul>
		          </li>
		          <li className="divider"></li>
		          <li className="has-dropdown" aria-haspopup="true">
		            <a href="#">Estude agora</a>
		            <ul className="dropdown">
		              <li>
		                <div className="list-items">
		                  <ul id="service-header">
		                    <li><a id="header-live-class" href="//ao-vivo.descomplica.com.br/aula-ao-vivo/regular">Aula ao Vivo</a>
		                    </li>
		                  </ul>
		                </div>
		              </li>
		            </ul>
		          </li>
		        </ul>
		        
		      </section>
		    </nav>
		  </div>
		);
	}

}