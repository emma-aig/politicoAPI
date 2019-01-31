// Object with default Values
const party = [
  {
    id: 1,
    name: "Citizen Party of Nigeria",
    hqAddress: "Plot 12 CBN road, Abuja",
    logoURL: "pictures/logo1233.jpg",
  }];

// Update a political party
exports.updateParty = (req, res) => {
  const partyInfo = party.find(p => p.id === Number(req.params.id));
  if (!partyInfo) return res.status(404).send("The political party you are trying to edit does not exist");

  // Update the record
  partyInfo.name = req.body.name;
  res.status(200).send(partyInfo);
  return 0;
};
