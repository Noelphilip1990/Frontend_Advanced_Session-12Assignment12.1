import { Pipe } from '@angular/core';
@Pipe({
	name: 'filterType'
})

export class CustomPipe
{
	
	public transform(filter):any[]
	{
		let list: any[]=[];
		
		for (let i = 0; i < filter.length; i++) {
			if(filter[i].type=="public")
			{
				var obj = { name: filter[i].name, type: filter[i].type };
				list.push(obj);
			}
		}
		return list;
	}
	constructor(){}
}