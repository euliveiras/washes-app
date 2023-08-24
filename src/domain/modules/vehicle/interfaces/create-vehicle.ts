export type CreateVehicleProps = {
    licensePlate: string;
    vehicleType: "Extra leve" | "Leve" | "Vuc" | "Toco" | "Truck" | "Bitruck" | "Carreta";
    driver?: {
        name: string;
        phones?: string[];
        organizationId?: string;
    };
};
