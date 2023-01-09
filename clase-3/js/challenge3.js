const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Tiff"];

names.reduce((allNames, name) => {
  console.log(allNames)
  // const currCount = allNames[name] ?? 0; -> shorthand
  const currCount = (allNames[name] !== undefined && allNames[name] !== null) ? allNames[name] : 0
  return {
    ...allNames, 
    [name]: currCount + 1,
  };
}, {});