export class Calendar {
    // Propriétés de base
    public currentDate: Date = new Date();
    public selectedView: string = 'month'; // Valeurs possibles : 'month', 'week', 'day'
    public daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
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
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    }
  
    public goToNextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    }
  
    // Retourner une vue par jour (simplifiée)
    public getDayView() {
      const day = this.currentDate.getDate();
      return `Day View for ${day}`;
    }
  
    // Retourner une vue par semaine (simplifiée)
    public getWeekView() {
      const startOfWeek = this.getStartOfWeek(this.currentDate);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6); // 7 jours de la semaine
      return `Week View: ${startOfWeek.toDateString()} - ${endOfWeek.toDateString()}`;
    }
  
    private getStartOfWeek(date: Date): Date {
      const startOfWeek = new Date(date);
      const dayOfWeek = startOfWeek.getDay();
      startOfWeek.setDate(date.getDate() - dayOfWeek); // Réinitialiser à dimanche
      return startOfWeek;
    }
  }
  