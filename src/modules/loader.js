import {
    cardContainer, searchBtn, countryInp, allCountriesbtn, Americasbtn, Asiabtn,
    Africabtn, Europebtn, cardSection } from './DomValues.js';
import loadCountries from './populate.js';
import searchandFind from './popupwindow.js';
import { addLike } from './submitLikes.js';
import { mobileMenu, hideMenu}from './mobile.js';
import { addComment, getCommentData } from './submitComment.js';

const loadOnPage = () => {
    window.addEventListener('load', () => {
        mobileMenu();
        loadCountries('allcountries');
      });
      
      allCountriesbtn.addEventListener('click', () => {
        hideMenu();
        loadCountries('allcountries');
      });
      
      Europebtn.addEventListener('click', () => {
        hideMenu();
        loadCountries('Europe');
      });
      
      Africabtn.addEventListener('click', () => {
        hideMenu();
        loadCountries('Africa');
      });
      
      Asiabtn.addEventListener('click', () => {
        hideMenu();
        loadCountries('Asia');
      });
      
      Americasbtn.addEventListener('click', () => {
        hideMenu();
        loadCountries('Americas');
      });
      
      searchBtn.addEventListener('click', (e) => {
        hideMenu();
        searchandFind(countryInp.value, e);
        window.scroll();
      });
      
      cardContainer.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.className === 'commentBtn') {
          searchandFind(e.target.id, e);
          
        }
      
        if (e.target.id === 'remove') {
          loadCountries('allcountries');
        }
      
        if (e.target.className === 'fa-regular fa-heart fa-2xl') {
          addLike(e.target.id);
          let likeValue = Number(e.target.parentElement.children[1].innerHTML);
          e.target.parentElement.children[1].innerHTML = likeValue + 1;
        }
      
        if (e.target.className === 'commentBtn submit-comment') {
          addComment(e.target);
          const container = cardSection.children[0].children[2].children[0].children[1];
          
          console.log(container);
        const one = document.createElement('div');
        setTimeout(async ()=>{ const temp = await getCommentData(e.target.id)
        
          temp.forEach(element => {
            const two = document.createElement('div');
            two.innerHTML = element.creation_date + element.username + element.comment;
            // container.appendChild(element.creation_date);
            one.appendChild(two);
          });
        }, 100); 
        container.appendChild(one); 
        }
      });
}

export default loadOnPage;

  