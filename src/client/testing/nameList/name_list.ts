export class NameList {
	names: any = [
		'Iron Man 3',
		'Frozen',
		'Despicable Me 2',
		'Fast & Furious 6'
	];
	get(): string[] {
		return this.names;
	}
}
