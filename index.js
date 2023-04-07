function superbowlWin(record) {
  let year = record.find(entry => entry.result === "W");
  return year ? year.year : undefined;
}
