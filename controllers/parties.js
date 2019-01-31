// Object with default Values
const party = [
  {
    id: 1,
    name: "Citizen Party of Nigeria",
    hqAddress: "Plot 12 CBN road, Abuja",
    logoURL: "pictures/logo1233.jpg",
  }];

// Create a political party.
exports.createParty = (req, res) => {
  if (req.body.name.length > 50) return res.status(400).send("Character is too long");
  const newParty = {
    id: party.length + 1,
    name: req.body.name,
    hqAddress: req.body.hqAddress,
    logoURL: req.body.logoURL,
  };
  party.push(newParty);
  res.status(200).send(newParty);
  return 0;
};
