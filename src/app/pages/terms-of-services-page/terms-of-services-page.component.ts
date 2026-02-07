import { TermsPrivacySection } from './../../interfaces/terms-privacy-section';
import { Component, OnInit } from '@angular/core';
import { TermsPrivacyComponent } from '../../shared-components/terms-privacy/terms-privacy.component';
import { Note } from '../../interfaces/note.js';

@Component({
  selector: 'app-terms-of-services-page',
  templateUrl: './terms-of-services-page.component.html',
  styleUrls: ['./terms-of-services-page.component.css'],
  imports: [TermsPrivacyComponent],
})
export class TermsOfServicesPageComponent implements OnInit {
  icon: string;
  icon2: string;
  notice: Note;
  linkTo: string;
  array: TermsPrivacySection[];
  items1: string[];
  items2: string[];
  constructor() {
    this.icon = 'fa-solid fa-file-alt';
    this.icon2 = 'fa-times restriction-icon';
    this.notice = {
      desc: 'يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.',
      icon: 'fas fa-exclamation-triangle',
      imp: 'إشعار مهم',
    };
    this.linkTo = '/privacy-policy';
    this.array = [
      {
        number: 1,
        title: 'الموافقة على الشروط',
        desc: 'بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.',
      },
      {
        number: 2,
        title: 'رخصة الاستخدام',
        desc: 'يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.',
      },
      {
        number: 3,
        title: 'إخلاء المسؤولية',
        desc: 'المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.',
      },
      {
        number: 4,
        title: 'القيود',
        desc: 'في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.',
      },
      {
        number: 5,
        title: 'محتوى المستخدم',
        desc: 'إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.',
      },
      {
        number: 6,
        title: 'التعديلات',
        desc: 'قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.',
      },
      {
        number: 7,
        title: 'معلومات الاتصال',
        desc: 'إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا عبر البريد الإلكتروني.',
      },
    ];
    this.items1 = [
      'تعديل أو نسخ المواد',
      'استخدام المواد لأي غرض تجاري أو للعرض العام',
      'محاولة فك أو عكس هندسة أي برنامج على الموقع',
      'إزالة أي حقوق نشر أو علامات ملكية من المواد',
      'نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر',
    ];
    this.items2 = [
      'أن يكون تشهيرياً أو فاحشاً أو مسيئاً',
      'انتهاك حقوق الملكية الفكرية للآخرين',
      'احتواء فيروسات أو أكواد ضارة',
      'انتهاك أي قوانين أو لوائح معمول بها',
      'الإعلان عن منتجات أو خدمات غير مصرح بها',
    ];
  }
  ngOnInit() {}
}
