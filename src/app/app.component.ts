import { Component } from '@angular/core';
@Component({
    selector: 'modal-demo',
	template: `
	
<div class="container">
  
<div class="container-fluid" >
	<h2>Hey Assignment 12.1</h2>
	<div *ngFor="let li of (list|filterType) ">
	<div class="row">
	<div class="col-sm-4">{{li.name | uppercase}}</div><div class="col-sm-4">{{li.type}}</div>
	</div>
	</div>
</div>
</div>
`,
})

export class AppComponent{
	
	vars: boolean = false;
	list=[
	{ name: "abc", type: "private" },
	{ name: "xyz", type: "public" },
	{ name: "test", type: "private" },
	{ name: "Adom", type: "private" },
	{ name: "Mahesh", type: "public" },
	{ name: "Piyush", type: "public" }
	];

	constructor()
	{
		
	}
}
