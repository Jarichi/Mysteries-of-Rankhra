function hasOrganisationType(frontmatterType) {
  if (!frontmatterType) {
    return false;
  }

  if (Array.isArray(frontmatterType)) {
    return frontmatterType.some((item) =>
      hasOrganisationType(String(item || ""))
    );
  }

  const value = String(frontmatterType).toLowerCase();
  return value.includes("organisation") || value.includes("organization");
}

function buildDisplayPath(filePath) {
  return filePath.replace(/\.md$/i, "");
}

async function selectOrganisation(tp, campaign) {
  const files = tp.app.vault.getMarkdownFiles();
  const campaignPrefix = campaign ? `Campaigns/${campaign}/` : "Campaigns/";
  const seenValues = new Set();
  const candidates = [];

  for (const file of files) {
    const isWorldOrganisation = file.path.startsWith("World Notes/Organisations/");
    const isInCampaign = file.path.startsWith(campaignPrefix);

    if (!isWorldOrganisation && !isInCampaign) {
      continue;
    }

    const cache = tp.app.metadataCache.getFileCache(file);
    const type = cache?.frontmatter?.type;
    const includeFile = isWorldOrganisation || hasOrganisationType(type);

    if (!includeFile) {
      continue;
    }

    const value = `[[${file.basename}]]`;
    if (seenValues.has(value)) {
      continue;
    }

    seenValues.add(value);
    candidates.push({
      display: buildDisplayPath(file.path),
      value,
    });
  }

  if (candidates.length === 0) {
    return "";
  }

  candidates.sort((a, b) => a.display.localeCompare(b.display));

  const displayOptions = ["(none)", ...candidates.map((item) => item.display)];
  const valueOptions = ["", ...candidates.map((item) => item.value)];

  const selected = await tp.system.suggester(
    displayOptions,
    valueOptions,
    false,
    "Select organisation (optional)"
  );

  return selected || "";
}

module.exports = selectOrganisation;