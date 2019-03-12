import { SkillModel } from '@app/shared/models/skill/skill-model';

export const SKILLS: SkillModel[] = [
  {
    category: 'Language',
    icon: 'code',
    images: [
      { name: 'c', src: 'assets/img/c.png' },
      { name: 'css 3', src: 'assets/img/css.png' },
      { name: 'html 5', src: 'assets/img/html.png' },
      { name: 'javascript', src: 'assets/img/js.jpg' },
    ]
  },
  {
    category: 'web development',
    icon: 'world',
    images: [
      { name: 'css 3', src: 'assets/img/css.png' },
      { name: 'html 5', src: 'assets/img/html.png' },
      { name: 'angular', src: 'assets/img/angular.png' },
      
      { name: 'javascript', src: 'assets/img/js.jpg' },
      
      
      { name: 'bootstrap', src: 'assets/img/bootstrap.png' },
      { name: 'uikit', src: 'assets/img/uikit.png' },
      { name: 'sass', src: 'assets/img/sass.png' },
    ]
  },
  {
    category: 'mobile app development',
    icon: 'phone',
    images: [
      { name: 'ionic', src: 'assets/img/ionic.png' },
    ]
  }
]


