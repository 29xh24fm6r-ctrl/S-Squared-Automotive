export type VehicleType = "Cars" | "SUVs" | "Trucks";

export interface Vehicle {
  name: string;
  trim: string;
  year: number;
  miles: number;
  price: number;
  badge: string;
  body: string;
  type: VehicleType;
  fuel: string;
  drive: string;
  trans: string;
  tag: string;
}

export const vehicles: Vehicle[] = [
  { name: "Chevrolet Silverado", trim: "1500 LT Crew Cab 4WD", year: 2021, miles: 38410, price: 34995, badge: "Just In", body: "Truck", type: "Trucks", fuel: "Gas", drive: "4WD", trans: "Automatic", tag: "truck" },
  { name: "Honda Accord", trim: "Sport 1.5T Sedan", year: 2022, miles: 29750, price: 26480, badge: "Certified", body: "Sedan", type: "Cars", fuel: "Gas", drive: "FWD", trans: "CVT", tag: "sedan" },
  { name: "Jeep Grand Cherokee", trim: "Limited 4x4", year: 2020, miles: 44120, price: 28900, badge: "Hot", body: "SUV", type: "SUVs", fuel: "Gas", drive: "4x4", trans: "Automatic", tag: "SUV" },
  { name: "Toyota RAV4", trim: "XLE Premium AWD", year: 2022, miles: 31205, price: 29750, badge: "Low Miles", body: "SUV", type: "SUVs", fuel: "Gas", drive: "AWD", trans: "Automatic", tag: "SUV" },
  { name: "Ford F-150", trim: "XLT SuperCrew 4WD", year: 2021, miles: 41880, price: 36250, badge: "Just In", body: "Truck", type: "Trucks", fuel: "Gas", drive: "4WD", trans: "Automatic", tag: "truck" },
  { name: "BMW 3 Series", trim: "330i xDrive", year: 2021, miles: 27640, price: 31900, badge: "Certified", body: "Sedan", type: "Cars", fuel: "Gas", drive: "AWD", trans: "Automatic", tag: "sedan" },
  { name: "Tesla Model 3", trim: "Long Range AWD", year: 2022, miles: 24980, price: 33450, badge: "Electric", body: "Sedan", type: "Cars", fuel: "Electric", drive: "AWD", trans: "Single-Speed", tag: "sedan" },
  { name: "Nissan Altima", trim: "SV 2.5", year: 2021, miles: 36700, price: 21980, badge: "Value", body: "Sedan", type: "Cars", fuel: "Gas", drive: "FWD", trans: "CVT", tag: "sedan" },
  { name: "GMC Sierra 1500", trim: "Elevation Double Cab", year: 2020, miles: 49220, price: 33900, badge: "Hot", body: "Truck", type: "Trucks", fuel: "Gas", drive: "4WD", trans: "Automatic", tag: "truck" },
  { name: "Hyundai Tucson", trim: "SEL AWD", year: 2022, miles: 28140, price: 25650, badge: "Low Miles", body: "SUV", type: "SUVs", fuel: "Gas", drive: "AWD", trans: "Automatic", tag: "SUV" },
  { name: "Honda Civic", trim: "EX Hatchback", year: 2022, miles: 22300, price: 24480, badge: "Certified", body: "Sedan", type: "Cars", fuel: "Gas", drive: "FWD", trans: "CVT", tag: "sedan" },
  { name: "Ford Explorer", trim: "XLT 4WD", year: 2021, miles: 39990, price: 30900, badge: "Just In", body: "SUV", type: "SUVs", fuel: "Gas", drive: "4WD", trans: "Automatic", tag: "SUV" },
];

export const featuredVehicles = vehicles.slice(0, 6);

export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export function formatPrice(n: number): string {
  return "$" + formatNumber(n);
}
