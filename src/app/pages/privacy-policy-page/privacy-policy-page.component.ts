import { Component, OnInit } from '@angular/core';
import { TermsPrivacyComponent } from '../../shared-components/terms-privacy/terms-privacy.component';
import { TermsPrivacySection } from '../../interfaces/terms-privacy-section.js';
import { Note } from '../../interfaces/note.js';

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.css'],
  imports: [TermsPrivacyComponent],
})
export class PrivacyPolicyPageComponent implements OnInit {
  icon: string;
  icon2: string;
  notice: Note;
  linkTo: string;
  array: TermsPrivacySection[];
  items1: string[];
  items2: string[];
  items3: string[];
  constructor() {
    this.icon = 'fa-solid fa-lock';
    this.icon2 = 'fa-circle-check  check-icon';
    this.notice = {
      desc: 'نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه',
      icon: 'fas fa-shield-halved',
      imp: 'خصوصيتك تهمنا',
    };
    this.linkTo = '/terms-of-services';
    this.array = [
      {
        number: 1,
        title: 'مقدمة',
        desc: 'مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.',
      },
      {
        number: 2,
        title: 'المعلومات التي نجمعها',
        desc: '',
      },
      {
        number: 3,
        title: 'كيف نستخدم معلوماتك',
        desc: '',
      },
      {
        number: 4,
        title: 'ملفات تعريف الارتباط',
        desc: 'نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.',
      },
      {
        number: 5,
        title: 'أمان البيانات',
        desc: 'لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.',
      },
      {
        number: 6,
        title: 'حقوقك',
        desc: '',
      },
      {
        number: 7,
        title: 'تواصل معنا',
        desc: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:',
      },
    ];
    this.items1 = [
      'بيانات الهوية: تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.',
      'بيانات الاتصال: تشمل عنوان البريد الإلكتروني.',
      'البيانات التقنية: تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.',
      'بيانات الاستخدام: تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.',
    ];
    this.items2 = [
      'لتقديم خدمتنا والحفاظ عليها',
      'لإخطارك بالتغييرات في خدمتنا',
      'لتقديم دعم العملاء',
      'لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا',
      'لمراقبة استخدام خدمتنا',
      'لاكتشاف ومنع ومعالجة المشاكل التقنية',
    ];
    this.items3 = [
      'طلب الوصول إلى بياناتك الشخصية',
      'طلب تصحيح بياناتك الشخصية',
      'طلب مسح بياناتك الشخصية',
      'الاعتراض على معالجة بياناتك الشخصية',
      'طلب تقييد معالجة بياناتك الشخصية',
      'الحق في سحب الموافقة',
    ];
  }
  ngOnInit() {}
}
