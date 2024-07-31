import { Component, OnInit } from '@angular/core';
// import { skillsService } from '../Services/skill.service';
import { Skill} from '../models/skills.model'
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent{
  skills: Skill [] = [
    { name: 'AWS', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Docker', categories: ['Information Technology Institute (ITI)'] },
    { name: 'Operating Systems', categories: ['Information Technology Institute (ITI)'] },
    { name: 'Process Management', categories: ['Information Technology Institute (ITI)'] },
    { name: 'Cyber Security', categories: ['INGAZ'] },
    { name: 'Digital Security', categories: ['INGAZ'] },
    { name: 'SEO', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Frontend Development', categories: ['AMIT Learning'] },
    { name: 'AJAX', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'ASP.NET', categories: ['AMIT Learning'] },
    { name: 'Laravel', categories: ['AMIT Learning'] },
    { name: 'IT Infrastructure Management', categories: ['AMIT Learning'] },
    { name: 'REST APIs', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'UI Design', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Web Development', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'API Development', categories: ['Information Technology Institute (ITI)'] },
    { name: 'Business Requirements', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Responsive Design', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'React.js', categories: ['AMIT Learning'] },
    { name: 'Git', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Arduino', categories: ['Cairo University'] },
    { name: 'C++', categories: ['Information Technology Institute (ITI)'] },
    { name: 'Python', categories: ['Cairo University'] },
    { name: 'PHP', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'SQL', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Bootstrap', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Software Engineering', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Databases', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Data Analysis', categories: ['Cairo University'] },
    { name: 'Machine Learning & Deep Learning', categories: ['Cairo University'] },
    { name: 'Object-Oriented Programming', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Angular', categories: ['Information Technology Institute (ITI)'] },
    { name: 'JavaScript', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'CSS', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'HTML5', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] },
    { name: 'Problem Solving', categories: ['Information Technology Institute (ITI)'] },
    { name: 'Presentations', categories: ['AMIT Learning'] },
    { name: 'Leadership', categories: ['AMIT Learning'] },
    { name: 'Soft Skills', categories: ['Information Technology Institute (ITI)', 'AMIT Learning'] }
      ];

 

 
}
