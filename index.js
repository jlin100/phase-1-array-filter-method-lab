// Code your solution here

function findMatching(drivers, string) {
    const names = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
    return names;
}

function fuzzyMatch(drivers, string) {
    const names = drivers.filter(driver => driver.startsWith(string));
    return names;
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers, string) {
      const names = drivers.filter(driver => driver.name === string);
      return names;
  }