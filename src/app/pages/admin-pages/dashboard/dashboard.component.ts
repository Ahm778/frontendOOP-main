import { Component, AfterViewInit, OnInit } from '@angular/core';
import { 
  NgxChartsModule,
  PieChartModule,
  BarChartModule,
  LineChartModule,
  GaugeModule,
  HeatMapModule,
  BubbleChartModule,
  TreeMapModule
} from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NgxChartsModule,
    PieChartModule,
    BarChartModule,
    LineChartModule,
    GaugeModule,
    HeatMapModule,
    BubbleChartModule,
    TreeMapModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  // ============ DASHBOARD METRICS ============
  totalParticipants = 342;
  totalSessions = 28;
  totalTrainers = 14;
  totalBudget = 58600;
  totalBudgetAllocated = 75000;
  maxSessions = 40;
  currentMonth = new Date().toLocaleString('default', { month: 'long' });
  currentYear = new Date().getFullYear();
  
  // ============ COLOR SCHEMES ============
  readonly greenColorScheme = {
    name: 'green',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      '#2F855A', // Primary green (dark)
      '#38A169', // Secondary green
      '#48BB78', // Medium green
      '#68D391', // Light green
      '#9AE6B4', // Very light green
      '#B7791F', // Accent gold
      '#2C5282'  // Contrast blue
    ]
  };
  
  readonly budgetColorScheme = {
    ...this.greenColorScheme,
    domain: [
      '#2F855A', 
      '#38A169', 
      '#48BB78',
      '#B7791F'
    ]
  };
  
  // ============ GENDER DISTRIBUTION ============
  genderDistribution = [
    { 
      name: 'Hommes', 
      value: 198,
      extra: { percentage: '58%' },
      color: '#2C5282' // Using blue for contrast
    },
    { 
      name: 'Femmes', 
      value: 144,
      extra: { percentage: '42%' },
      color: '#2F855A' // Primary green
    }
  ];
  
  // ============ SESSIONS BY DOMAIN ============
  sessionsPerDomain = [
    { 
      name: 'Informatique', 
      value: 12,
      color: '#2F855A'
    },
    { 
      name: 'Finance', 
      value: 7,
      color: '#38A169'
    },
    { 
      name: 'Management', 
      value: 5,
      color: '#48BB78'
    },
    { 
      name: 'Ressources Humaines', 
      value: 4,
      color: '#68D391'
    }
  ];
  
  // ============ TRAINER STATISTICS ============
  trainerTypeRatio = [
    { 
      name: 'Interne', 
      value: 9,
      color: '#38A169'
    },
    { 
      name: 'Externe', 
      value: 5,
      color: '#B7791F'
    }
  ];
  
  topTrainers = [
    { 
      name: 'Amine Ben Salah', 
      value: 8,
      color: '#2F855A',
      sessions: [
        { name: 'Dev Web', count: 3 },
        { name: 'Base de données', count: 2 },
        { name: 'Sécurité', count: 3 }
      ]
    },
    { 
      name: 'Khaled Marzouki', 
      value: 6,
      color: '#38A169',
      sessions: [
        { name: 'Comptabilité', count: 3 },
        { name: 'Fiscalité', count: 3 }
      ]
    },
    { 
      name: 'Fatma Kefi', 
      value: 5,
      color: '#48BB78',
      sessions: [
        { name: 'Leadership', count: 2 },
        { name: 'Gestion de projet', count: 3 }
      ]
    },
    { 
      name: 'Salma Trabelsi', 
      value: 4,
      color: '#68D391',
      sessions: [
        { name: 'Communication', count: 2 },
        { name: 'Rédaction', count: 2 }
      ]
    }
  ];
  
  // ============ PARTICIPANT ENGAGEMENT ============
  engagementData = [
    {
      name: 'Salma Trabelsi',
      series: [
        { name: 'Informatique', value: 3 },
        { name: 'Management', value: 1 },
        { name: 'Finance', value: 0 },
        { name: 'Communication', value: 2 }
      ]
    },
    {
      name: 'Nidhal Gharbi',
      series: [
        { name: 'Informatique', value: 2 },
        { name: 'Management', value: 1 },
        { name: 'Finance', value: 0 },
        { name: 'Communication', value: 1 }
      ]
    },
    {
      name: 'Yasmine Bousselmi',
      series: [
        { name: 'Informatique', value: 1 },
        { name: 'Management', value: 2 },
        { name: 'Finance', value: 0 },
        { name: 'Communication', value: 1 }
      ]
    },
    {
      name: 'Mohamed Ali',
      series: [
        { name: 'Informatique', value: 3 },
        { name: 'Management', value: 0 },
        { name: 'Finance', value: 1 },
        { name: 'Communication', value: 0 }
      ]
    }
  ];
  
  // ============ BUDGET ALLOCATION ============
  sessionBudgetChart = [
    {
      name: 'Informatique',
      series: [ 
        { 
          name: 'Développement Web', 
          x: 5, 
          y: 12500, 
          r: 25,
          info: '5 sessions - 12,500 TND'
        },
        { 
          name: 'Sécurité Informatique', 
          x: 3, 
          y: 8500, 
          r: 18,
          info: '3 sessions - 8,500 TND'
        },
        { 
          name: 'Intelligence Artificielle', 
          x: 4, 
          y: 15000, 
          r: 22,
          info: '4 sessions - 15,000 TND'
        }
      ]
    },
    {
      name: 'Finance',
      series: [
        { 
          name: 'Comptabilité Avancée', 
          x: 4, 
          y: 9000, 
          r: 20,
          info: '4 sessions - 9,000 TND'
        },
        { 
          name: 'Fiscalité Internationale', 
          x: 3, 
          y: 7500, 
          r: 17,
          info: '3 sessions - 7,500 TND'
        }
      ]
    },
    {
      name: 'Management',
      series: [
        { 
          name: 'Leadership Stratégique', 
          x: 3, 
          y: 6500, 
          r: 16,
          info: '3 sessions - 6,500 TND'
        },
        { 
          name: 'Gestion de Projet Agile', 
          x: 4, 
          y: 8000, 
          r: 19,
          info: '4 sessions - 8,000 TND'
        }
      ]
    }
  ];
  
  // ============ TRAINING TIMELINE ============
  timelineData = [
    {
      name: 'Informatique',
      series: [
        { 
          name: 'Développement Web', 
          value: new Date(2025, 3, 1),
          end: new Date(2025, 3, 5)
        },
        { 
          name: 'Base de Données', 
          value: new Date(2025, 3, 15),
          end: new Date(2025, 3, 19)
        },
        { 
          name: 'Sécurité Informatique', 
          value: new Date(2025, 4, 1),
          end: new Date(2025, 4, 5)
        }
      ]
    },
    {
      name: 'Management',
      series: [
        { 
          name: 'Leadership', 
          value: new Date(2025, 2, 10),
          end: new Date(2025, 2, 14)
        },
        { 
          name: 'Gestion de Projet', 
          value: new Date(2025, 3, 20),
          end: new Date(2025, 3, 24)
        }
      ]
    },
    {
      name: 'Finance',
      series: [
        { 
          name: 'Comptabilité', 
          value: new Date(2025, 1, 5),
          end: new Date(2025, 1, 9)
        },
        { 
          name: 'Analyse Financière', 
          value: new Date(2025, 4, 10),
          end: new Date(2025, 4, 14)
        }
      ]
    }
  ];
  
  // ============ CHART CONFIGURATIONS ============
  pieChartConfig = {
    animations: true,
    showLegend: false,
    showLabels: true,
    doughnut: false,
    arcWidth: 0.25,
    colorScheme: this.greenColorScheme
  };
  
  barChartConfig = {
    animations: true,
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    showXAxisLabel: true,
    showYAxisLabel: true,
    colorScheme: this.greenColorScheme
  };
  
  heatMapConfig = {
    animations: true,
    showXAxis: true,
    showYAxis: true,
    gradient: true,
    showLegend: true,
    colorScheme: {
      domain: ['#f0fff4', '#c6f6d5', '#9ae6b4', '#68d391', '#48bb78', '#38a169', '#2f855a']
    }
  };
  
  bubbleChartConfig = {
    animations: true,
    showXAxis: true,
    showYAxis: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    colorScheme: this.budgetColorScheme
  };
  
  // ============ HELPER METHODS ============
  getInternalTrainersPercentage(): number {
    const total = this.trainerTypeRatio.reduce((sum, item) => sum + item.value, 0);
    return Math.round((this.trainerTypeRatio[0].value / total) * 100);
  }
  
  getColor(name: string): string {
    const colorMap: {[key: string]: string} = {
      'Hommes': '#2C5282',
      'Femmes': '#2F855A',
      'Interne': '#38A169',
      'Externe': '#B7791F',
      'Informatique': '#2F855A',
      'Finance': '#38A169',
      'Management': '#48BB78',
      'Ressources Humaines': '#68D391'
    };
    return colorMap[name] || '#A0AEC0';
  }
  
  formatSessions(value: number): string {
    return `${value} session${value !== 1 ? 's' : ''}`;
  }
  
  formatBudget(value: number): string {
    return `${value.toLocaleString()} TND`;
  }
  
  get usedBudgetPercentage(): number {
    return Math.round((this.totalBudget / this.totalBudgetAllocated) * 100);
  }
  
  // ============ ANIMATION METHODS ============
  animateValue(element: HTMLElement, start: number, end: number, duration: number): void {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start).toString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // ============ LIFECYCLE HOOKS ============
  ngOnInit(): void {
    // Initialize any data fetches here
  }
  
  ngAfterViewInit(): void {
    // Animate counters after view initialization
    const counters = [
      { id: 'participant-counter', value: this.totalParticipants },
      { id: 'session-counter', value: this.totalSessions },
      { id: 'trainer-counter', value: this.totalTrainers },
      { id: 'budget-counter', value: this.totalBudget }
    ];
    
    counters.forEach(counter => {
      const element = document.getElementById(counter.id);
      if (element) {
        this.animateValue(element, 0, counter.value, 2000);
      }
    });
  }
  
  // ============ TOOLTIP TEMPLATES ============
  getTooltipTemplate(data: any): string {
    if (data.series) {
      // Bubble chart tooltip
      return `
        <div class="bubble-tooltip">
          <h4>${data.series}</h4>
          <p>Sessions: ${data.x}</p>
          <p>Budget: ${this.formatBudget(data.y)}</p>
          <p>Domaine: ${data.name}</p>
        </div>
      `;
    } else if (data.data && data.data.extra) {
      // Pie chart tooltip with percentage
      return `
        <div class="pie-tooltip">
          <h4>${data.data.name}</h4>
          <p>Participants: ${data.data.value}</p>
          <p>${data.data.extra.percentage} du total</p>
        </div>
      `;
    } else {
      // Default tooltip
      return `
        <div class="default-tooltip">
          <h4>${data.name}</h4>
          <p>Valeur: ${data.value}</p>
        </div>
      `;
    }
  }
}