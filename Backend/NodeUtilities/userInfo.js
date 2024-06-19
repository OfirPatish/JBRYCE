exports.formatUserInfo = function (name, lastName, city, friend) {
  if (name && lastName && city && friend) {
    return `<hr>Hello ${name} ${lastName}, we saw you live in ${city}, can you pick up ${friend}?`;
  }
  return "";
};
