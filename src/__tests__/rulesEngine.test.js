import engine from "../rulesEngine";

test("Case #1. Eligibility test. 'Not eligible'", () => {
  const input = {
    id: "2",
    numberOfChildren: 0,
    familyComposition: "single",
    familyUnitInPayForDecember: false,
  };

  const expected = {
    id: "2",
    isEligible: false,
    baseAmount: 0.0,
    childrenAmount: 0.0,
    supplementAmount: 0.0,
  };

  expect(engine(input)).toEqual(expected);
});

test("Case #2. Eligibility test. 'Negative numbers of children, invalid family composition types'", () => {
  const input = {
    id: "2",
    numberOfChildren: -1,
    familyComposition: 1,
    familyUnitInPayForDecember: "false",
  };

  const expected = {
    id: "2",
    isEligible: false,
    baseAmount: 0.0,
    childrenAmount: 0.0,
    supplementAmount: 0.0,
  };

  expect(engine(input)).toEqual(expected);
});

test("Case #3. Calculation for a Single person with no dependent children", () => {
  const input = {
    id: "1",
    numberOfChildren: 0,
    familyComposition: "single",
    familyUnitInPayForDecember: true,
  };

  const expected = {
    id: "1",
    isEligible: true,
    baseAmount: 60.0,
    childrenAmount: 0.0,
    supplementAmount: 60.0,
  };

  expect(engine(input)).toEqual(expected);
});

test("Case #4. Calculation for a Childless couple", () => {
  const input = {
    id: "2",
    numberOfChildren: 0,
    familyComposition: "couple",
    familyUnitInPayForDecember: true,
  };

  const expected = {
    id: "2",
    isEligible: true,
    baseAmount: 120.0,
    childrenAmount: 0.0,
    supplementAmount: 120.0,
  };

  expect(engine(input)).toEqual(expected);
});

test("Case #5. Calculation for a Single-parent family with dependent children", () => {
  const input = {
    id: "2",
    numberOfChildren: 1,
    familyComposition: "couple",
    familyUnitInPayForDecember: true,
  };

  const expected = {
    id: "2",
    isEligible: true,
    baseAmount: 120.0,
    childrenAmount: 20.0,
    supplementAmount: 140.0,
  };

  expect(engine(input)).toEqual(expected);
});

test("Case #6. Calculation for a Two-parent family with dependent children", () => {
  const input = {
    id: "2",
    numberOfChildren: 1,
    familyComposition: "couple",
    familyUnitInPayForDecember: true,
  };

  const expected = {
    id: "2",
    isEligible: true,
    baseAmount: 120.0,
    childrenAmount: 20.0,
    supplementAmount: 140.0,
  };

  expect(engine(input)).toEqual(expected);
});

test("Case #7. Calculation for a Two-parent family with no dependent children", () => {
  const input = {
    id: "2",
    numberOfChildren: 0,
    familyComposition: "couple",
    familyUnitInPayForDecember: true,
  };

  const expected = {
    id: "2",
    isEligible: true,
    baseAmount: 120.0,
    childrenAmount: 0.0,
    supplementAmount: 120.0,
  };

  expect(engine(input)).toEqual(expected);
});

test("Case #8. Calculation for a Two-parent family with multiple children", () => {
  const input = {
    id: "3",
    numberOfChildren: 3,
    familyComposition: "couple",
    familyUnitInPayForDecember: true,
  };

  const expected = {
    id: "3",
    isEligible: true,
    baseAmount: 120.0,
    childrenAmount: 60.0,
    supplementAmount: 180.0,
  };

  expect(engine(input)).toEqual(expected);
});
