export const userDB = [
  {
    // id: 1,
    firstName: 'Esteban',
    lastName: 'Tasseler',
    address: '23 Prairie Rose Road',
    email: 'etasseler0@is.gd',
    password: 'secret',
    status: 'unverified',
    isAdmin: false,
  },
  {
    // id: 2,
    firstName: 'Itachi',
    lastName: 'Uchiha',
    email: 'uchiha.itachi@anbu.org',
    address: 'Hidden-leaf village, Konoha',
    password: 'secret',
    status: 'unverified',
    isAdmin: false,
  },
  {
    // id: 3,
    firstName: 'Desmond',
    lastName: 'Edem',
    email: 'meetdesmond.edem@gmail.com',
    password: 'secret',
    address: '12 McNeil Street, Sabo-Yaba, Lagos',
    status: 'verified',
    isAdmin: true,
  },
];

export const loanDB = [
  {
    // id: 1,
    user: 'uchiha.itachi@anbu.org',
    createdOn: Date(),
    status: 'approved',
    repaid: false,
    tenor: 3,
    amount: 20000.00,
    paymentInstallment: 7000,
    balance: 21000.0,
    interest: 1000,
  },
  {
    // id: 2,
    user: 'meetdesmond.edem@gmail.com',
    createdOn: Date(),
    status: 'approved',
    repaid: false,
    tenor: 6,
    amount: 100000.00,
    paymentInstallment: 17500,
    balance: 105000,
    interest: 5000,
  },
];

export const repaymentDB = [
  {
    // id: 1,
    loanId: 1,
    createdOn: 'April 25, 2019 1:32 AM',
    amount: '20000',
    monthlyInstallments: 7000,
    paidAmount: 7000,
    balance: 14000,
  },
];
