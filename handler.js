'use strict';

function calculateValues(){
  let data = {
    summary: {
      grm: 10,
      costPerUnit: 100000,
      capRate: 0.06,
      cashOnCash: 0.04,
      dscr: 1.2,
      appreciation: 0.02,
      depreciation: 0.02,
      amortization: 0.02,
      unleveragedIRR: 10,
      leveragedIRR: 10
    },
    healthCheck: {
      totalExpenses: 0.4,
      annualRepairs: 100000,
      vacancyLoss: 0.04,
      insurance: 1.2,
      kBRehabs: 3000
    }
  }
  return data;
}

module.exports.calc = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: calculateValues(),
      input: event,
    }),
  };
};
