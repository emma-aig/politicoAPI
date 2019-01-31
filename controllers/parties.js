// Object with default Values
const party = [
  {
    id: 1,
    name: "Citizen Party of Nigeria",
    hqAddress: "Plot 12 CBN road, Abuja",
    logoURL: "pictures/logo1233.jpg",
  }];

// Get all political parties records
exports.getParties = (req, res) => {
  party.forEach((partyVar) => {
    if (partyVar.name === "") return res.status(404).send("No political parties found");
    res.status(200).send(party);
    return 0;
  });
};
