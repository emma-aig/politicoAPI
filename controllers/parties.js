// Object with default Values
const party = [
  {
    id: 1,
    name: "Citizen Party of Nigeria",
    hqAddress: "Plot 12 CBN road, Abuja",
    logoURL: "pictures/logo1233.jpg",
  }];

// Get a specific political party record
module.exports.getParty = (req, res) => {
  const partyInfo = party.find(p => p.id === Number(req.params.id));
  if (!partyInfo) return res.status(404).send("No political party records found with the ID you specified");
  res.status(200).send(partyInfo);
  return 0;
};
