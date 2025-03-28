import {render} from './render.js';
import Sort from './view/sort.js';
import Filters from './view/filters.js';
import MainPresenter from './presenter/main-presenter.js';

const siteHeaderFiltersElement = document.querySelector('.trip-controls__filters');
const siteBodySortElement = document.querySelector('.trip-events');

render(new Filters(), siteHeaderFiltersElement);
render(new Sort(), siteBodySortElement);

const mainPresenter = new MainPresenter({container: siteBodySortElement});
mainPresenter.init();
