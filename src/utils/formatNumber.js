//Convert number to USD format with $

export const formatNumber = (number) => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
