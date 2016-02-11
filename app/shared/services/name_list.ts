export class NameList {
	isActive = false;
	names = ['Iron Man', 'Matrix', 'Border', 'DDLJ'];

	get(): string[] {
		return this.names;
	}
	add(value: string): void {
		this.names.push(value);
	}
}
