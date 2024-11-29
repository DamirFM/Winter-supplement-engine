function engine(input) {
  const {
    id,
    numberOfChildren,
    familyComposition,
    familyUnitInPayForDecember,
  } = input;
  // Eligibility check
  if (!familyUnitInPayForDecember) {
    return {
      id,
      isEligible: false,
      baseAmount: 0.0,
      childrenAmount: 0.0,
      supplementAmount: 0.0,
    };
  }
  // Base amounts for each family type
  const familyPayment = {
    single: 60.0,
    couple: 120.0,
  };
  // Additional payment for children
  const childrenPayment = 20.0;
  // Calculation
  const baseAmount = familyPayment[familyComposition];
  const childrenAmount = numberOfChildren * childrenPayment;
  const supplementAmount = baseAmount + childrenAmount;
  return {
    id, // ID from input
    isEligible: true, // Eligibility, equal to "familyUnitInPayForDecember"
    baseAmount, // Base amount calculated from family composition
    childrenAmount, // Additional amount for children
    supplementAmount, // Total amount
  };
}
export default engine;
