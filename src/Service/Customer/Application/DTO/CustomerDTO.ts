import CustomerTypeDTO from './CustomerTypeDTO';

export default interface CustomerDTO {
  id: number;
  publicKey: string;
  name: string;
  address: {
    addressLine1: string;
    streetNo: string;
    floor: string;
    postalCode: number;
    city: string;
  };
  oib: string;
  type: CustomerTypeDTO;
  customerHighLvl1: number;
  customerHighLvl2: number;
  customerHighLvl3: number;
  active: number;
  childs: CustomerDTO[];
}

// const a = {
//   id: 1,
//   customerHighLvl1: null,
//   customerHighLvl2: null,
//   customerHighLvl3: null,
//   balance: 0,
//   monthsCharge: 0,
//   paymentResponsible: 0,
//   externalKey1: null,
//   externalKey2: null,
//   active: null,
//   location: null,
//   children: [],
//   customerInfo: {
//     customerId: 1,
//     publicKey: '1',
//     name: 'T-Com',
//     city: 'Zagreb',
//     postalCode: 10000,
//     addressLine1: 'Radnička cesta',
//     addressLine2: null,
//     streetNo: '21',
//     floor: null,
//     classSting: null,
//     oib: '81793146560',
//     externalCode1: null,
//     externalCode2: null,
//     userId: null,
//     language: null,
//   },
// };
