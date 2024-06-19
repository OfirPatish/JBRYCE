exports.seasonsName = (englishName) => {
  switch (englishName) {
    case "January":
    case "February":
    case "March":
      return "חורף";
    case "April":
    case "May":
    case "June":
      return "אביב";
    case "July":
    case "August":
    case "September":
      return "קיץ";
    case "October":
    case "November":
    case "December":
      return "סתיו";
    default:
      return "Unknown month";
  }
};
