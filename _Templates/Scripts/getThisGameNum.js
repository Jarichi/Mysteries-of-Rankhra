function getThisGameNum(tp, campaign) {
  const thisCampaign = campaign || tp.user.getThisCampaign(tp);
  let numOfGames = app.plugins.plugins.dataview.api
    .pages(`"Campaigns/${thisCampaign}"`)
    .where((page) => {
      if (page.type === "session") {
        if (page.campaign === thisCampaign) {
          return true;
        }
      }
    }).length;
  numOfGames = JSON.stringify(numOfGames + 1);
  while (numOfGames.length < 3) {
    numOfGames = "0" + numOfGames;
  }
  return numOfGames;
}
module.exports = getThisGameNum;
