import { Component } from '@angular/core';
import { project } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects :project [] = [
  {title:"Library web site",img:"http://media.architecturaldigest.com/photos/55f1e22c302ba71f301830e6/master/pass/dam-images-travel-2015-university-libraries-stunning-university-libraries-05.jpg",para:"Library web site using vanialla js",githuplink:"https://github.com/Rahmasamy/libraryWebSite",demo:"https://rahmasamylibrarywebsite.netlify.app/"}
  ,{title:"Reasturant Website",img:"https://showbest.com/wp-content/uploads/2021/06/Stephan-Simmons-CB3.jpg",para:"Resturant website using React js",githuplink:"https://github.com/Rahmasamy/resturant",demo:"https://rahmasamy-resturant.netlify.app/"}
  ,{title:"Admin Dahboard using reactjs",img:"https://themewagon.com/wp-content/uploads/2022/05/screencapture-technext-github-io-darkpan-2022-05-10-09_44_07-1.png",para:"Admin dashoard using react js with beautiful charts!",githuplink:"https://github.com/Rahmasamy/React-Admin-Dashboard-master",demo:"https://admin-dashboard-2740f.web.app/"},
  {title:"Full stack Ecommerce React with Strapi",img:"https://image.freepik.com/free-photo/beautiful-woman-holding-colorful-shopping-bags-isolated-blue_97712-3074.jpg",para:"React Ecommerce With strapi backend",githuplink:"https://github.com/Rahmasamy/E-commerce-latest",demo:"https://candid-griffin-22b64d.netlify.app/"},
  {title:"chesse cake cofee",img:"https://images.creativemarket.com/0.1.0/ps/2306726/1360/906/m1/fpnw/wm1/qfjnuxki5k2nodcqzlogapxn58dowph78nlac4o2fyzc6rfoyfebbmu6u4ch5mr8-.jpg?1487669081&s=74849c64fc4e0f1bd214cf00128db440",para:"chesses cake cofee project with html,css,js",githuplink:"https://github.com/Rahmasamy/cheeseCakeProject",demo:"https://rahmasamy-cheesecakeweb.netlify.app/"},
  {title:"Ecommerce with native js",img:"https://jooinn.com/images/photo-of-a-woman-holding-shopping-bags-2.jpg",para:"Ecommerce website with html,css,js",githuplink:"https://github.com/Rahmasamy/Ecommerce-website",demo:"https://adorable-faun-c30aa9.netlify.app/"}
 ]
}
