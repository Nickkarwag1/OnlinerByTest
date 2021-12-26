import CatalogPage from "./catalogPage/catalogPage";

async function isPhonesPageOpened() {
  return CatalogPage.isOpened("Мобильные телефоны");
}

async function selectReleaseYear(year) {
  await CatalogPage.selectCheckBoxInSection("Дата выхода на рынок", year);
}

async function findPhones({ mark = "Apple", year = 2019 } = {}) {
  await CatalogPage.selectCheckBoxInSection("Производитель", mark);
  await selectReleaseYear(year);

  return CatalogPage.getAllItemTitles();
}

const PhonesPage = {
  isPhonesPageOpened,
  selectReleaseYear,
  findPhones,
  ...CatalogPage,
};
export default PhonesPage;
