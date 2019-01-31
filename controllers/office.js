// Object with default Values
const office = [{
  id: 1,
  type: "Federal",
  name: "Senate",
}];

// Create a political office.
exports.createOffice = (req, res) => {
// Check if name is more than 50 characters long
  if (req.body.name.length > 50) return res.send("Character is too long");
  const newOffice = {
    id: office.length + 1,
    type: req.body.type,
    name: req.body.name,
  };
  office.push(newOffice);
  res.status(200).send(newOffice);
  return 0;
};
