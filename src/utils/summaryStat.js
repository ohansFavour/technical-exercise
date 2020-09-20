const summaryStat = (users) => {
  // How many team members there are in total
  const numTeamMembers = users.length;

  // When the last user was added to the team
  const dateArray = users.map((el) => el.created_at);
  const maxDate = dateArray.reduce((a, b) => (a > b ? a : b));

  // How many total users were invited
  const numInvited = users.reduce((acc, el) => {
    return acc + el.stats.invited_users_count;
  }, 0);

  // How many total published campaigns
  const numPublishedCam = users.reduce((acc, el) => {
    if (!el.stats.published_campaigns_count) {
      return acc;
    }
    return acc + el.stats.published_campaigns_count;
  }, 0);

  // Returned Object
  return {
    numTeamMembers: {
      title: "Number of Team Members",
      value: numTeamMembers,
    },
    maxDate: {
      title: "Last User Added At",
      value: maxDate,
    },
    numInvited: {
      title: "Number of Invited Users",
      value: numInvited,
    },
    numPublishedCam: {
      title: "Number of Publish Campaigns",
      value: numPublishedCam,
    },
  };
};

export default summaryStat;
