import { table } from "app/components/Table";

type Props = {
licensePlate: string;
}

export function LicensePlate({ licensePlate }: Props){
	return <table.Data>{licensePlate}</table.Data>
}
