const categoriesList = document.querySelectorAll('ul#categories > li.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
