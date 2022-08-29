import moment from 'moment';

export const getTodayDate = () => {
  const today = new Date();
  const date = today.setDate(today.getDate());
  const defaultValue = new Date(date).toISOString().split('T')[0];
  return defaultValue;
};

export const getFirstDayOfMonth = (date: any) =>
  new Date(date.getFullYear(), date.getMonth(), 1);

const getDisplayableValues = (
  inputs: any,
  resultTab1: number[],
  resultTab2: number[]
) => {
  const R = inputs.donePercentage / 100;
  let i;
  for (i = 0; i < resultTab1.length; i++)
    if (resultTab1[i] > R) {
      i--;
      break;
    }

  const highlightIdx = i;
  const totalNbOfMonths = resultTab1.length;
  const nbOfMonthsLeft = totalNbOfMonths - highlightIdx;

  const tableData: any[][] = [
    [
      // 'Date',
      ...Array.from({ length: totalNbOfMonths }).map((_el, idx) =>
        moment(inputs.inputDataDate).add(
          idx - inputs.nbOfMonthsPassed + 1,
          'months'
        )
      ),
    ],
    [
      // "Pourcentage d'avancement par mois",
      ...resultTab1.map((el) => (el * 100).toFixed(2) + '%'),
    ],
    [
      // "Pourcentage d'avancement cumulé",
      ...resultTab2.map((el) => (el * 100).toFixed(2) + '%'),
    ],
  ];

  return {
    tableData,
    highlightIdx: highlightIdx /* + 1*/, // FOR THE FIRST ROW THAT DOESN'T CONTAIN VALUES
    nbOfRemainingMonths: nbOfMonthsLeft - 1,
    estimatedEndDate: moment(inputs.inputDataDate).add(
      nbOfMonthsLeft - 1,
      'months'
    ),
    isInitialState: false,
  };
};

// D/nbOfMonthsPassed: "10"
// R/donePercentage: "50"
// mu: "0"
// sig: "0"

export const calculateOutputs = (inputs: any) => {
  inputs.mu = +inputs.mu;
  inputs.sig = +inputs.sig;
  inputs.nbOfMonthsPassed = +inputs.nbOfMonthsPassed;
  inputs.donePercentage = +inputs.donePercentage;

  let D = inputs.nbOfMonthsPassed;
  let R = inputs.donePercentage / 100;
  let m = D;
  let sig = m * inputs.mu;
  let mu = m * inputs.sig;

  const tab0: number[] = [];
  const tab1: number[] = [];
  const tab2: number[] = [];
  const tab3: number[] = [];

  for (let j = D; j <= 1000; j++) {
    let i;
    m = j;

    for (i = 0; i <= m - 1; i++) {
      sig = m * inputs.mu;
      mu = m * inputs.sig;
      tab0[i] = -(((m - 1) * 5) / 2) + 5 * i;
      tab1[i] =
        (1 / (sig * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * ((tab0[i] - mu) / sig) ** 2);
    }

    tab2[0] = tab1[0];

    for (i = 0; i <= m - 2; i++) {
      tab2[i + 1] = tab2[i] + tab1[i + 1];
    }

    for (i = 0; i <= m - 1; i++) {
      tab3[i] = tab2[i] / tab2[m - 1];
      if (R < tab3[i]) break;
    }

    if (i === D) break;
  }

  for (let i = 0; i <= m - 1; i++) {
    sig = m * inputs.mu;
    mu = m * inputs.sig;
    tab0[i] = -(((m - 1) * 5) / 2) + 5 * i;
    tab1[i] =
      (1 / (sig * Math.sqrt(2 * Math.PI))) *
      Math.exp(-0.5 * ((tab0[i] - mu) / sig) ** 2);
  }

  tab2[0] = tab1[0];

  for (let i = 0; i <= m - 2; i++) {
    tab2[i + 1] = tab2[i] + tab1[i + 1];
  }

  for (let i = 0; i <= m - 1; i++) {
    tab3[i] = tab2[i] / tab2[m - 1];
  }

  let resultTab1: number[] = [];
  let resultTab2: number[] = [];

  for (let i = 0; i <= m - 1; i++) {
    resultTab1[i] = tab3[i];
    resultTab2[i] = tab1[i] / tab2[m - 1];
  }

  return getDisplayableValues(inputs, resultTab1, resultTab2 /*m - D*/);
};

const getSigmoidDisplayableValues = (
  resultTab1: number[],
  resultTab2: number[]
) => {
  const totalNbOfMonths = resultTab1.length;

  const tableData: any[][] = [
    [
      // 'Date',
      ...Array.from({ length: totalNbOfMonths }).map((_el, idx) => idx + 1),
    ],
    [
      // "Pourcentage d'avancement par mois",
      ...resultTab1.map((el) => (el * 100).toFixed(2) + '%'),
    ],
    [
      // "Pourcentage d'avancement cumulé",
      ...resultTab2.map((el) => (el * 100).toFixed(2) + '%'),
    ],
  ];

  return {
    tableData,
    isInitialState: false,
    highlightIdx: -2, // TO NOT HIGHLIGHT ANY
  };
};

export const calculateSigmoidOutputs = (inputs: any) => {
  inputs.mu = +inputs.mu;
  inputs.sig = +inputs.sig;
  inputs.nbOfMonthsPassed = +inputs.nbOfMonthsPassed;

  let m = inputs.nbOfMonthsPassed; // RATHER, NUMBER OF TOTAL MONTHS
  let sig = m * inputs.mu;
  let mu = m * inputs.sig;

  const tab0: number[] = [];
  const tab1: number[] = [];
  const tab2: number[] = [];
  const tab3: number[] = [];

  for (let i = 0; i <= m - 1; i++) {
    tab0[i] = -(((m - 1) * 5) / 2) + 5 * i;
    tab1[i] =
      (1 / (sig * Math.sqrt(2 * Math.PI))) *
      Math.exp(-0.5 * ((tab0[i] - mu) / sig) ** 2);
  }

  tab2[0] = tab1[0];

  for (let i = 0; i <= m - 2; i++) {
    tab2[i + 1] = tab2[i] + tab1[i + 1];
  }

  for (let i = 0; i <= m - 1; i++) {
    tab3[i] = tab2[i] / tab2[m - 1];
  }

  let resultTab1: number[] = [];
  let resultTab2: number[] = [];

  for (let i = 0; i <= m - 1; i++) {
    resultTab1[i] = tab3[i];
    resultTab2[i] = tab1[i] / tab2[m - 1];
  }

  return getSigmoidDisplayableValues(resultTab1, resultTab2);
};
