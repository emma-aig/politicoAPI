// Object with default Values
const party = [
  {
    id: 1,
    name: "Citizen Party of Nigeria",
    hqAddress: "Plot 12 CBN road, Abuja",
    logoURL: "pictures/logo1233.jpg",
  }];

// Delete a political party
exports.deleteParty = (req, res) => {
  const partyInfo = party.find(p => p.id === Number(req.params.id));
  if (!partyInfo) return res.status(404).send("The political party you are trying to delete does not exist");

  // Delete the record
  const index = party.indexOf(partyInfo);
  party.splice(index, 1);
  res.status(200).send("Political Party Deleted");
  return 0;
};
