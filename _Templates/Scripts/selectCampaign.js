function getFolderName(path) {
  const parts = path.split("/");
  return parts[parts.length - 1];
}

async function getCampaignOptions(tp) {
  const root = "Campaigns";
  const options = [];

  let rootFolders = [];
  try {
    const listed = await tp.app.vault.adapter.list(root);
    rootFolders = listed.folders || [];
  } catch (error) {
    return options;
  }

  for (const folderPath of rootFolders) {
    const folderName = getFolderName(folderPath);

    if (folderName.toLowerCase() === "oneshots") {
      try {
        const oneShots = await tp.app.vault.adapter.list(folderPath);
        const oneShotFolders = oneShots.folders || [];

        if (oneShotFolders.length === 0) {
          options.push(folderName);
          continue;
        }

        for (const oneShotPath of oneShotFolders) {
          const oneShotName = getFolderName(oneShotPath);
          options.push(`${folderName}/${oneShotName}`);
        }
      } catch (error) {
        options.push(folderName);
      }
      continue;
    }

    options.push(folderName);
  }

  return options.sort((a, b) => a.localeCompare(b));
}

async function selectCampaign(tp) {
  const inferredCampaign = tp.user.getThisCampaign(tp);
  const options = await getCampaignOptions(tp);

  if (options.length === 0) {
    return inferredCampaign;
  }

  const fallbackCampaign = options.includes(inferredCampaign)
    ? inferredCampaign
    : options[0];

  const orderedOptions = [...options];
  const inferredIndex = orderedOptions.indexOf(fallbackCampaign);
  if (inferredIndex > 0) {
    orderedOptions.splice(inferredIndex, 1);
    orderedOptions.unshift(fallbackCampaign);
  }

  const selected = await tp.system.suggester(
    orderedOptions,
    orderedOptions,
    false,
    "Select campaign"
  );

  return selected || fallbackCampaign;
}

module.exports = selectCampaign;