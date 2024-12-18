import { IRouter, RouteableComponent } from '@aurelia/router-lite';
import { resolve } from 'aurelia';
export class Calendar {
  // Propriétés de base
  private readonly router: IRouter = resolve(IRouter);
  public currentDate: Date = new Date();
  public selectedView: string = 'month'; // Valeurs possibles : 'month', 'week', 'day'
  public daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public hoursOfDay: string[] = ['08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00'];

  // Méthode pour générer les jours du mois
  public getMonthDays(): string[][] {
    const days: string[][] = [];
    const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    
    let currentDay = firstDayOfMonth;
    let week: string[] = [];

    // Remplir les semaines
    while (currentDay <= lastDayOfMonth) {
      week.push(currentDay.getDate().toString());
      
      if (currentDay.getDay() === 6) { // Si c'est samedi
        days.push(week);
        week = [];  // Nouvelle semaine
      }
      
      currentDay = new Date(currentDay.setDate(currentDay.getDate() + 1)); // Passer au jour suivant
    }
    
    if (week.length > 0) {
      days.push(week); // Ajouter la dernière semaine si elle existe
    }
    
    return days;
  }

  // Méthodes pour changer de vue
  public changeView(view: string) {
    this.selectedView = view;
  }

  // Méthodes pour naviguer dans le mois
  public goToPreviousMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
  }
  
  public goToNextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
  }

  // Retourner les jours de la semaine pour la vue "week"
  public getWeekDays(): string[] {
    const startOfWeek = this.getStartOfWeek(this.currentDate);
    const weekDays: string[] = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(day.toLocaleDateString('en-US', { weekday: 'short' })); 
    }

    return weekDays;
  }

  public getWeekEvents(): { hour: string, description: string }[] {
    return [
      { hour: '08:00 - 09:00', description: 'course' },
      { hour: '09:00 - 10:00', description: 'course' },
      { hour: '10:00 - 11:00', description: 'course' },
      { hour: '11:00 - 12:00', description: 'course' },
      { hour: '13:00 - 14:00', description: 'course' },
      { hour: '14:00 - 15:00', description: 'course' },
      { hour: '15:00 - 16:00', description: 'course' }
    ];
  }
  
  public getDayEvents(): { time: string, description: string }[] {
    return [
      { time: '08:00 - 09:00', description: 'Programmation course' },
      { time: '09:00 - 10:00', description: 'Programmation course' },
      { time: '10:00 - 11:00', description: 'REIS course' },
      { time: '11:00 - 12:00', description: 'REIS course' },
      { time: '13:00 - 14:00', description: 'Project brainstorming' },
      { time: '14:00 - 15:00', description: 'Project brainstorming' },
      { time: '15:00 - 16:00', description: 'Databse course' }
    ];
  }

  // Méthode pour générer le titre de la semaine 
  public getWeekTitle(): string {
    const startOfWeek = this.getStartOfWeek(this.currentDate);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // 7 jours de la semaine

    // Formater les dates sous la forme 
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    const startFormatted = startOfWeek.toLocaleDateString('en-US', options);  
    const endFormatted = endOfWeek.toLocaleDateString('en-US', options);      

    return `${startFormatted} - ${endFormatted}`;
  }

  // Retourner une vue par jour 
  public getDayView() {
    const day = this.currentDate.getDate();
    return `Day View for ${day}`;
  }

  // Retourner une vue par semaine 
  public getWeekView() {
    const startOfWeek = this.getStartOfWeek(this.currentDate);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // 7 jours de la semaine
    return `Week View: ${startOfWeek.toLocaleDateString('en-US')} - ${endOfWeek.toLocaleDateString('en-US')}`;  // Changement en 'en-US'
  }
  

  
  private getStartOfWeek(date: Date): Date {
    const startOfWeek = new Date(date);
    const dayOfWeek = startOfWeek.getDay();
    startOfWeek.setDate(date.getDate() - dayOfWeek); 
    return startOfWeek;
  }

    // Method for Navbar clicks
    onLogoClick(){
      this.router.load('menu')
    }
}
