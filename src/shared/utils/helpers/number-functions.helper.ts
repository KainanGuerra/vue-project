export const NumberFormatter = {
    formatToDecimal(number: number | undefined) {
      if(!number) return 0;
        if (isNaN(number)) {
          return 'Invalid input: not a number';
        }
        if (Number.isInteger(number)) {
          return number.toFixed(2);
        } else {
          return number.toString();
        }
    },
    roundDecimal(decimalValue: number) {
      if (isNaN(decimalValue)) {
        return 0;
      }

      const roundedValue = Math.floor(decimalValue) + 0.90;

      return roundedValue.toFixed(2);
    
      return roundedValue;
    }
}