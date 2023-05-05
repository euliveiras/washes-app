// >> telefone, nome, id do veículo (pode ter mais de um caminhão)

interface DriverProps {
name: String;
id: String[];

}

export class Driver {
	private _props: DriverProps;
	constructor(props: DriverProps){
		this._props = props
	}
}
