import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@angular/core';

import { Course, CourseCode } from '../app.interfaces';
import { fakeCourseCodes, fakeCourses } from './fake-data';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor() {}

  public generateId(): string {
    return uuidv4();
  }

  public getCourses(): Promise<Course[]> {
    return new Promise((resolve, reject) => {
      // ============ initialize fake api ============ //
      resolve(fakeCourses);
      // =============== end fake api ================ //
    });
  }

  public getCourse(id: string): Promise<Course> {
    return new Promise((resolve, reject) => {
      // ============ initialize fake api ============ //
      if (id) {
        const selectedCourse: Course = fakeCourses.find((course) => course.id === id);
        if (selectedCourse) {
          resolve(selectedCourse);
        } else {
          reject();
        }
      } else {
        reject();
      }
      // =============== end fake api ================ //
    });
  }

  public saveCourse(course: Course): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // ============ initialize fake api ============ //
      fakeCourses.push(course);
      resolve();
      // =============== end fake api ================ //
    });
  }

  public updateCourse(course: Course): Promise<any> {
    return new Promise((resolve, reject) => {
      const uuid = course.id;
      // ============ initialize fake api ============ //
      this.getCourses().then(
        (storedCourses) => {
          const courseIndex = storedCourses.findIndex((c) => c.id === uuid);
          fakeCourses[courseIndex] = { ...fakeCourses[courseIndex], ...course };
          resolve();
        },
        () => reject()
      );
      // =============== end fake api ================ //
    });
  }

  public removeCourse(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      // ============ initialize fake api ============ //
      this.getCourses().then((storedCourses) => {
        const courseIndex = storedCourses.findIndex((c) => c.id === id);
        storedCourses.splice(courseIndex, 1);
        resolve();
      });
      // =============== end fake api ================ //
    });
  }

  public getCourseCodes(): Promise<CourseCode[]> {
    return new Promise((resolve, reject) => {
      // ============ initialize fake api ============ //
      resolve(fakeCourseCodes);
      // =============== end fake api ================ //
    });
  }
}
