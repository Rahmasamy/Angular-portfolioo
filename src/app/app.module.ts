// src/app/app.module.ts
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { SkillsComponent } from './skills/skills.component';
// import {  skillsService } from './Services/skill.service';

// @NgModule({
//   declarations: [AppComponent, SkillsComponent],
//   imports: [BrowserModule],
//   providers: [skillsService],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}
// src/app/app.module.ts

// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common'; // Import CommonModule

// import { AppComponent } from './app.component';
// import { SkillsComponent } from './skills/skills.component';// Adjust path as needed

// @NgModule({
//   declarations: [
//     AppComponent,
//     SkillsComponent
//   ],
//   imports: [
//     BrowserModule,
//     CommonModule // Add CommonModule to imports
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
//   exports: [
//     SkillsComponent // Optionally export your component if used elsewhere
//   ]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SkillsModule } from './skills/skills.module'; // Import SkillsModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SkillsModule], // Import SkillsModule here if using SkillsComponent
  bootstrap: [AppComponent]
})
export class AppModule { }