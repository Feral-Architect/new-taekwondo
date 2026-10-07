/* ==========================================================================
   Segamat Taekwondo & Martial Arts Centre
   --------------------------------------------------------------------------
   SINGLE SOURCE OF TRUTH.
   Every word, phone number, time slot, image path and link on the website
   lives in this file. index.html contains structure only - no content is
   hard-coded there. To update the website, edit this file only.

   Languages: en (default) / zh / ms
   ========================================================================== */

(function () {
  "use strict";

  var SITE = {};

  /* ======================================================================
     1. LANGUAGE-NEUTRAL FACTS  (never translated)
     ====================================================================== */

  SITE.brand = {
    name: "Segamat Taekwondo & Martial Arts Centre",
    legal: "Kelab Taekwondo SGT (Ta-WTF)",
    reg: "JR0025462-H",
    crest: "assets/img/crest.png"
  };

  /* Images ------------------------------------------------------------- */
  SITE.assets = {
    heroPortrait: "assets/img/hero-sparring-yellow.png",   /* phones  (9:16)  */
    heroLandscape: "assets/img/hero-sparring-wide-yellow.png", /* tablets/desktop (16:9) */
    venue: "assets/img/dojo-hall.jpg"
  };

  /* Contact people ----------------------------------------------------- */
  /* `wa` is the international WhatsApp number used for wa.me links.
     Master Fung 012-7151 017  ->  60 12-7151 017  ->  60127151017
     Sir Wong    011-6410 0112 ->  60 11-6410 0112 ->  601164100112      */
  SITE.contacts = [
    {
      id: "master-fung",
      name: "Master Fung",
      phone: "012-7151 017",
      tel: "+60127151017",
      wa: "60127151017",
      photo: "assets/img/instructor-a-yellow.png",
      roleKey: "master",
      bioKey: "master"
    },
    {
      id: "sir-wong",
      name: "Sir Wong",
      phone: "011-6410 0112",
      tel: "+601164100112",
      wa: "601164100112",
      photo: "assets/img/instructor-b.jpg",
      roleKey: "instructor",
      bioKey: "instructor"
    }
  ];

  /* Weekly class schedule ---------------------------------------------- */
  /* Times are stored in 24h form and rendered per language.              */
  SITE.schedule = [
    {
      dayKey: "thursday",
      slots: [
        { start: "17:00", end: "18:30", typeKey: "basic" },
        { start: "19:00", end: "20:30", typeKey: "poomsae" }
      ]
    },
    {
      dayKey: "friday",
      slots: [
        { start: "17:00", end: "18:30", typeKey: "basic" },
        { start: "19:00", end: "20:30", typeKey: "sparring" }
      ]
    },
    {
      dayKey: "saturday",
      slots: [
        { start: "09:00", end: "10:00", typeKey: "toddler" },
        { start: "10:30", end: "12:00", typeKey: "sparring" },
        { start: "13:00", end: "14:30", typeKey: "basic" },
        { start: "17:00", end: "19:00", typeKey: "senior" },
        { start: "19:00", end: "21:00", typeKey: "bakatPoomsae" }
      ]
    },
    {
      dayKey: "sunday",
      slots: [
        { start: "09:00", end: "10:00", typeKey: "toddler" },
        { start: "10:30", end: "12:00", typeKey: "poomsae" },
        { start: "13:00", end: "14:30", typeKey: "basic" },
        { start: "13:00", end: "14:30", typeKey: "sjkcKasap" },
        { start: "15:30", end: "17:00", typeKey: "sjkcJementah" },
        { start: "18:00", end: "21:00", typeKey: "bakatSparring" }
      ]
    }
  ];

  /* Programme cards ----------------------------------------------------- */
  SITE.programs = [
    { id: "toddler", img: "assets/img/program-toddler.jpg", accent: "amber" },
    { id: "basic", img: "assets/img/program-basic.jpg", accent: "azure" },
    { id: "poomsae", img: "assets/img/program-poomsae.jpg", accent: "jade" },
    { id: "sparring", img: "assets/img/program-sparring.jpg", accent: "crimson" },
    { id: "senior", img: "assets/img/program-blackbelt.jpg", accent: "violet" },
    { id: "school", img: "assets/img/program-school.jpg", accent: "slate" }
  ];

  /* Feature strip ------------------------------------------------------- */
  SITE.featureIcons = ["age", "tracks", "senior", "school", "days", "chat"];

  /* Venue --------------------------------------------------------------- */
  /* `addressLines` is rendered only when it has entries. Add the full
     street address here and it appears on the website automatically.     */
  SITE.venue = {
    floor: "Tingkat 3",
    building: "Pusat Latihan Seni Bela Diri",
    addressLines: [],                       /* e.g. ["No. 12, Jalan Genuang", "85000 Segamat, Johor"] */
    mapQuery: "Segamat Taekwondo & Martial Arts Centre, Segamat, Johor",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent("Segamat Taekwondo & Martial Arts Centre, Segamat, Johor"),
    social: [
      { id: "facebook", url: "https://www.facebook.com/search/top?q=Segamat%20Taekwondo%20%26%20Martial%20Arts%20Centre" },
      { id: "instagram", url: "https://www.instagram.com/explore/search/keyword/?q=segamat%20taekwondo" }
    ]
  };

  /* WhatsApp pre-filled messages (per language, built at render time) ---- */
  SITE.waMessageKeys = {
    general: "waGeneral",
    master: "waMaster",
    instructor: "waInstructor"
  };

  /* Languages ----------------------------------------------------------- */
  SITE.languages = [
    { code: "en", label: "English", short: "EN", htmlLang: "en" },
    { code: "zh", label: "中文", short: "中文", htmlLang: "zh-Hans" },
    { code: "ms", label: "Bahasa Melayu", short: "BM", htmlLang: "ms" }
  ];
  SITE.defaultLanguage = "en";

  /* ======================================================================
     2. TRANSLATED COPY
     ====================================================================== */

  SITE.i18n = {};

  /* ---------------------------------------------------------------- EN --- */
  SITE.i18n.en = {
    meta: {
      title: "Segamat Taekwondo & Martial Arts Centre | Taekwondo Classes in Segamat, Johor",
      description: "Taekwondo and martial arts classes in Segamat, Johor for ages 4 and up. Toddler, Basic, Poomsae and Sparring classes, plus Senior & Black Belt training. Enrol on WhatsApp."
    },
    nav: {
      about: "Why us",
      programs: "Programmes",
      schedule: "Schedule",
      instructors: "Instructors",
      venue: "Venue",
      faq: "FAQ",
      contact: "Contact",
      menu: "Menu",
      close: "Close menu",
      language: "Language",
      skip: "Skip to content"
    },
    hero: {
      eyebrow: "Segamat, Johor · Kelab Taekwondo SGT (Ta-WTF)",
      title: "Discipline. Power. Respect.",
      subtitle: "Taekwondo and martial arts training in Segamat for ages 4 and up — toddlers, children, teenagers and adults, from white belt to black belt.",
      primary: "Enrol on WhatsApp",
      secondary: "See class schedule",
      badgeAge: "Ages 4+",
      badgeDays: "4 training days a week",
      scroll: "Scroll to explore"
    },
    about: {
      eyebrow: "Why train with us",
      title: "A dojang built on discipline and respect",
      lead: "From a child's first punch to a black belt's last pattern, every class at our centre follows the same promise: clear structure, patient coaching and a strict code of conduct inside and outside the dojang.",
      features: [
        { title: "Ages 4 and up", text: "Toddler classes welcome children from 4 to 7 years old, with junior and adult classes running alongside them." },
        { title: "Three training tracks", text: "Basic, Poomsae and Sparring — so every student trains the fundamentals, the forms and the fight." },
        { title: "Senior & Black Belt class", text: "A dedicated Saturday session for senior grades and black belts who want sharper technique and conditioning." },
        { title: "School programmes", text: "Weekly taekwondo sessions delivered at SJKC Kasap and SJKC Jementah." },
        { title: "Four training days", text: "Thursday, Friday, Saturday and Sunday, with morning and evening slots to fit school and work." },
        { title: "Two instructors on WhatsApp", text: "Both instructors are reachable directly on WhatsApp for enrolment and class enquiries." }
      ]
    },
    programs: {
      eyebrow: "Programmes",
      title: "Find the right class",
      lead: "Every programme below runs on the weekly schedule. Pick the one that matches your age and grade, then message us on WhatsApp to enrol.",
      cta: "Ask about this class",
      items: {
        toddler: {
          title: "Toddler Class",
          tag: "4–7 years",
          text: "A playful, movement-first introduction to taekwondo. Children learn listening, balance and basic technique through games and short drills.",
          when: "Saturday & Sunday · 9:00–10:00am"
        },
        basic: {
          title: "Basic Class",
          tag: "All grades",
          text: "Stances, blocks, punches and kicks — the foundation every belt level is built on. The right starting point for new students.",
          when: "Thursday & Friday · 5:00–6:30pm · Saturday & Sunday · 1:00–2:30pm"
        },
        poomsae: {
          title: "Poomsae",
          tag: "Patterns & forms",
          text: "Form training that builds precision, balance, breathing and focus. Poomsae is a core part of every grading.",
          when: "Thursday · 7:00–8:30pm · Sunday · 10:30am–12:00pm"
        },
        sparring: {
          title: "Sparring",
          tag: "Yellow belt & above",
          text: "Controlled, supervised sparring in full protective gear. Students who are yellow belt and above are encouraged to attend.",
          when: "Friday · 7:00–8:30pm · Saturday · 10:30am–12:00pm"
        },
        senior: {
          title: "Senior & Black Belt",
          tag: "Advanced",
          text: "Technical refinement, power and conditioning for senior grades and black belts, plus preparation for the next grading.",
          when: "Saturday · 5:00–7:00pm"
        },
        school: {
          title: "School Programmes",
          tag: "Partner schools",
          text: "Taekwondo is taught on site at our partner Chinese primary schools, so students can train right after school.",
          when: "Sunday · SJKC Kasap 1:00–2:30pm · SJKC Jementah 3:30–5:00pm"
        }
      }
    },
    schedule: {
      eyebrow: "Weekly class schedule",
      title: "When we train",
      lead: "Four training days, morning and evening. Arrive 10 minutes early so you are changed and ready before class starts.",
      notesTitle: "Good to know",
      notes: [
        "Students who are yellow belt and above are encouraged to attend sparring or poomsae class.",
        "Please bring along sparring gear for sparring class.",
        "Sharing sparring gear is not allowed due to hygiene purposes."
      ],
      infoTitle: "For more info",
      whatsappOnly: "WhatsApp only",
      classTypes: {
        toddler: "Toddler (4–7yo)",
        basic: "Basic",
        poomsae: "Poomsae",
        sparring: "Sparring",
        senior: "Senior & Black Belt",
        bakatPoomsae: "Bakat Poomsae",
        bakatSparring: "Bakat Sparring",
        sjkcKasap: "SJKC KASAP",
        sjkcJementah: "SJKC JEMENTAH"
      },
      days: {
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday"
      }
    },
    instructors: {
      eyebrow: "Your instructors",
      title: "The people who will teach you",
      lead: "Both instructors are contactable directly on WhatsApp. Choose either number — they will guide you through enrolment.",
      roles: {
        master: "Master Instructor",
        instructor: "Instructor"
      },
      bios: {
        master: "Message Master Fung on WhatsApp for enrolment, class information and general enquiries about the centre.",
        instructor: "Message Sir Wong on WhatsApp for enrolment, class information and general enquiries about the centre."
      },
      call: "Call",
      whatsapp: "WhatsApp"
    },
    venue: {
      eyebrow: "Training venue",
      title: "Where we train",
      lead: "Our training hall sits on the third floor of the martial arts centre in Segamat, Johor. Parents are welcome to wait on site during class.",
      floorLabel: "Floor",
      buildingLabel: "Building",
      addressLabel: "Address",
      map: "Open in Google Maps",
      hoursLabel: "Training days",
      hoursValue: "Thursday, Friday, Saturday & Sunday",
      followLabel: "Follow us",
      socialNames: { facebook: "Facebook", instagram: "Instagram" }
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions parents ask us",
      items: [
        { q: "What age can my child start?", a: "From 4 years old. Our Toddler class is designed for children aged 4 to 7 and runs on Saturday and Sunday mornings." },
        { q: "What should we wear to the first class?", a: "Comfortable sportswear is fine for the first lesson. Ask your instructor about the dobok (uniform) once you have enrolled." },
        { q: "Do we need our own sparring gear?", a: "Yes for sparring class. Students who are yellow belt and above are encouraged to attend sparring, and sharing sparring gear is not allowed for hygiene reasons." },
        { q: "How do we pay the monthly fee?", a: "All payments are made by online transfer, and the student's name must be included in the payment remarks. Fees are due within the first week of each month." },
        { q: "How will we know if a class is cancelled?", a: "Any cancellation is announced in the club WhatsApp group, so please join it after enrolling." }
      ]
    },
    terms: {
      eyebrow: "Terms & conditions",
      title: "The house rules",
      lead: "These conditions apply to every student of the centre.",
      items: [
        "Training fees must be paid within the first week of each month. Membership and training lessons will be terminated if payment is overdue for 2 months.",
        "All payments must be made via online transfer. Please include the student's name in the payment remarks for reference.",
        "Notice will be informed in the WhatsApp group if a training lesson is cancelled.",
        "The Taekwondo club reserves the right to suspend or terminate a student's training membership if the student is found to be misbehaving or involved in fighting outside the dojang."
      ],
      regLabel: "Registration no."
    },
    contact: {
      eyebrow: "Get started",
      title: "Ready to step into the dojang?",
      lead: "Send us a message on WhatsApp with the student's name and age, and we will recommend the right class. Both numbers below reach an instructor directly.",
      waGeneral: "Hi, I would like to know more about taekwondo classes at Segamat Taekwondo & Martial Arts Centre.",
      waMaster: "Hi Master Fung, I would like to enquire about taekwondo classes at Segamat Taekwondo & Martial Arts Centre.",
      waInstructor: "Hi Sir Wong, I would like to enquire about taekwondo classes at Segamat Taekwondo & Martial Arts Centre.",
      callLabel: "Call",
      waLabel: "WhatsApp",
      footnote: "Messages are answered on WhatsApp only."
    },
    footer: {
      tagline: "Taekwondo and martial arts training in Segamat, Johor.",
      quickLinks: "Explore",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      backToTop: "Back to top",
      copyright: "Tey Jia Long - 凿山见水， 凿夜见光， 凿穿旧世， 凿石开疆"
    },
    whatsappFab: {
      label: "Chat on WhatsApp",
      title: "Message an instructor",
      close: "Close"
    },
    common: {
      tapToCall: "Tap to call",
      newTab: "opens in a new tab"
    }
  };

  /* ---------------------------------------------------------------- ZH --- */
  SITE.i18n.zh = {
    meta: {
      title: "昔加末跆拳道与武术中心 | 柔佛昔加末跆拳道课程",
      description: "柔佛昔加末跆拳道与武术训练中心，4 岁起收生。设有幼儿班、基础班、品势班、对打班，以及高级与黑带班。可通过 WhatsApp 报名。"
    },
    nav: {
      about: "优势",
      programs: "课程",
      schedule: "课程表",
      instructors: "教练",
      venue: "场地",
      faq: "常见问题",
      contact: "联系我们",
      menu: "菜单",
      close: "关闭菜单",
      language: "语言",
      skip: "跳到主要内容"
    },
    hero: {
      eyebrow: "柔佛昔加末 · Kelab Taekwondo SGT (Ta-WTF)",
      title: "纪律 · 力量 · 尊重",
      subtitle: "昔加末跆拳道与武术训练中心，4 岁起收生 —— 幼儿、儿童、青少年与成人，从白带到黑带。",
      primary: "WhatsApp 报名",
      secondary: "查看课程表",
      badgeAge: "4 岁以上",
      badgeDays: "每周 4 天训练",
      scroll: "向下滑动了解"
    },
    about: {
      eyebrow: "为什么选择我们",
      title: "以纪律与尊重为本的道场",
      lead: "从孩子的第一拳到黑带的最后一套品势，本中心的每一堂课都遵循同一个承诺：结构清晰、教练耐心，道场内外的行为守则一律严格执行。",
      features: [
        { title: "4 岁即可开始", text: "幼儿班招收 4 至 7 岁的孩子，同时设有儿童班与成人班。" },
        { title: "三大训练方向", text: "基础、品势、对打 —— 让每位学员同时练好基本功、套路与实战。" },
        { title: "高级与黑带班", text: "每周六设有专属课时，为高级学员与黑带提供更精细的技术与体能训练。" },
        { title: "学校合作课程", text: "每周在 SJKC Kasap 与 SJKC Jementah 两所华小开课。" },
        { title: "每周四天训练", text: "星期四、五、六、日，设有上午与傍晚时段，配合上学与上班时间。" },
        { title: "两位教练 WhatsApp 直连", text: "两位教练均可通过 WhatsApp 直接联系，处理报名与课程咨询。" }
      ]
    },
    programs: {
      eyebrow: "课程项目",
      title: "找到适合你的班",
      lead: "以下每项课程都排在每周课程表内。选好符合你年龄与段位的班，再用 WhatsApp 联系我们报名。",
      cta: "咨询这个班",
      items: {
        toddler: {
          title: "幼儿班",
          tag: "4–7 岁",
          text: "以游戏与身体活动为主的跆拳道入门课。孩子在游戏中学习听从指令、平衡感与基本动作。",
          when: "星期六、日 · 上午 9:00–10:00"
        },
        basic: {
          title: "基础班",
          tag: "各级别",
          text: "马步、格挡、冲拳、踢腿 —— 所有段位都建立在这些基本功之上。新学员的最佳起点。",
          when: "星期四、五 · 下午 5:00–6:30 · 星期六、日 · 下午 1:00–2:30"
        },
        poomsae: {
          title: "品势班",
          tag: "套路 / 型",
          text: "品势训练能提升动作精准度、平衡、呼吸与专注力，是每次升级考试的核心内容。",
          when: "星期四 · 晚上 7:00–8:30 · 星期日 · 上午 10:30–12:00"
        },
        sparring: {
          title: "对打班",
          tag: "黄带及以上",
          text: "在完整护具与教练监督下进行有控制的实战对打。鼓励黄带及以上学员参加。",
          when: "星期五 · 晚上 7:00–8:30 · 星期六 · 上午 10:30–12:00"
        },
        senior: {
          title: "高级与黑带班",
          tag: "进阶",
          text: "为高级学员与黑带而设的技术打磨、力量与体能训练，同时为下一次升级考试做准备。",
          when: "星期六 · 下午 5:00–7:00"
        },
        school: {
          title: "学校合作课程",
          tag: "合作学校",
          text: "在合作华小校内授课，学生放学后即可直接参加训练。",
          when: "星期日 · SJKC Kasap 下午 1:00–2:30 · SJKC Jementah 下午 3:30–5:00"
        }
      }
    },
    schedule: {
      eyebrow: "每周课程表",
      title: "上课时间",
      lead: "每周四天训练，分上午与傍晚时段。请提前 10 分钟到场，以便在开课前换好道服。",
      notesTitle: "注意事项",
      notes: [
        "黄带及以上学员，鼓励参加对打班或品势班。",
        "参加对打班请自备护具。",
        "基于卫生理由，不允许共用护具。"
      ],
      infoTitle: "更多信息",
      whatsappOnly: "仅限 WhatsApp",
      classTypes: {
        toddler: "幼儿班（4–7 岁）",
        basic: "基础班",
        poomsae: "品势班",
        sparring: "对打班",
        senior: "高级与黑带班",
        bakatPoomsae: "Bakat 品势班",
        bakatSparring: "Bakat 对打班",
        sjkcKasap: "SJKC KASAP",
        sjkcJementah: "SJKC JEMENTAH"
      },
      days: {
        thursday: "星期四",
        friday: "星期五",
        saturday: "星期六",
        sunday: "星期日"
      }
    },
    instructors: {
      eyebrow: "教练团队",
      title: "教你的人",
      lead: "两位教练都可直接通过 WhatsApp 联系。任选一个号码，他们会协助你完成报名。",
      roles: {
        master: "总教练",
        instructor: "教练"
      },
      bios: {
        master: "可通过 WhatsApp 联系 Master Fung，咨询报名、课程信息及本中心的一般事务。",
        instructor: "可通过 WhatsApp 联系 Sir Wong，咨询报名、课程信息及本中心的一般事务。"
      },
      call: "拨打电话",
      whatsapp: "WhatsApp"
    },
    venue: {
      eyebrow: "训练场地",
      title: "我们在哪里训练",
      lead: "训练厅位于柔佛昔加末武术中心的三楼。上课期间家长可在场内等候。",
      floorLabel: "楼层",
      buildingLabel: "场地名称",
      addressLabel: "地址",
      map: "在 Google 地图中打开",
      hoursLabel: "训练日",
      hoursValue: "星期四、五、六、日",
      followLabel: "关注我们",
      socialNames: { facebook: "Facebook", instagram: "Instagram" }
    },
    faq: {
      eyebrow: "常见问题",
      title: "家长常问的问题",
      items: [
        { q: "孩子几岁可以开始学？", a: "4 岁起即可。幼儿班专为 4 至 7 岁的孩子设计，上课时间为星期六与星期日上午。" },
        { q: "第一堂课要穿什么？", a: "第一堂课穿舒适的运动服即可。报名后可向教练咨询道服（dobok）事宜。" },
        { q: "需要自备对打护具吗？", a: "参加对打班需要。我们鼓励黄带及以上学员参加对打班，且基于卫生理由不允许共用护具。" },
        { q: "月费怎么缴？", a: "所有费用通过线上转账缴付，并须在转账备注中填写学员姓名。月费须在每月第一周内缴清。" },
        { q: "如何得知课程取消？", a: "课程取消会在本中心的 WhatsApp 群组中通知，请在报名后加入群组。" }
      ]
    },
    terms: {
      eyebrow: "条款与须知",
      title: "本中心规则",
      lead: "以下条款适用于本中心所有学员。",
      items: [
        "训练费须在每月第一周内缴清。若欠费达 2 个月，会籍与训练课程将被终止。",
        "所有费用须通过线上转账缴付，并请在转账备注中填写学员姓名以便核对。",
        "若课程取消，将在 WhatsApp 群组中通知。",
        "若学员行为不当，或在道场以外参与打斗，本跆拳道会保留暂停或终止其训练会籍的权利。"
      ],
      regLabel: "注册编号"
    },
    contact: {
      eyebrow: "立即开始",
      title: "准备好踏进道场了吗？",
      lead: "请在 WhatsApp 告诉我们学员的姓名与年龄，我们会推荐合适的班。以下两个号码都能直接联系到教练。",
      waGeneral: "你好，我想了解昔加末跆拳道与武术中心的课程。",
      waMaster: "Master Fung 你好，我想咨询昔加末跆拳道与武术中心的课程。",
      waInstructor: "Sir Wong 你好，我想咨询昔加末跆拳道与武术中心的课程。",
      callLabel: "拨打电话",
      waLabel: "WhatsApp",
      footnote: "我们仅通过 WhatsApp 回复信息。"
    },
    footer: {
      tagline: "柔佛昔加末跆拳道与武术训练。",
      quickLinks: "快速导航",
      contactTitle: "联系方式",
      rights: "版权所有。",
      backToTop: "回到顶部",
      copyright: "Tey Jia Long - 凿山见水， 凿夜见光， 凿穿旧世， 凿石开疆"
    },
    whatsappFab: {
      label: "WhatsApp 咨询",
      title: "联系教练",
      close: "关闭"
    },
    common: {
      tapToCall: "点击拨打",
      newTab: "在新标签页打开"
    }
  };

  /* ---------------------------------------------------------------- MS --- */
  SITE.i18n.ms = {
    meta: {
      title: "Segamat Taekwondo & Martial Arts Centre | Kelas Taekwondo di Segamat, Johor",
      description: "Kelas taekwondo dan seni bela diri di Segamat, Johor untuk usia 4 tahun ke atas. Kelas Tadika, Asas, Poomsae dan Sparring, serta kelas Senior & Tali Pinggang Hitam. Daftar melalui WhatsApp."
    },
    nav: {
      about: "Kelebihan",
      programs: "Program",
      schedule: "Jadual",
      instructors: "Jurulatih",
      venue: "Lokasi",
      faq: "Soalan Lazim",
      contact: "Hubungi",
      menu: "Menu",
      close: "Tutup menu",
      language: "Bahasa",
      skip: "Lompat ke kandungan"
    },
    hero: {
      eyebrow: "Segamat, Johor · Kelab Taekwondo SGT (Ta-WTF)",
      title: "Disiplin. Kuasa. Hormat.",
      subtitle: "Latihan taekwondo dan seni bela diri di Segamat untuk usia 4 tahun ke atas — kanak-kanak kecil, remaja dan dewasa, dari tali pinggang putih hingga hitam.",
      primary: "Daftar melalui WhatsApp",
      secondary: "Lihat jadual kelas",
      badgeAge: "Usia 4 tahun ke atas",
      badgeDays: "4 hari latihan seminggu",
      scroll: "Tatal ke bawah"
    },
    about: {
      eyebrow: "Mengapa belajar dengan kami",
      title: "Dojang yang dibina atas disiplin dan hormat",
      lead: "Dari tumbukan pertama seorang anak hingga poomsae terakhir seorang tali pinggang hitam, setiap kelas di pusat kami mengikut janji yang sama: struktur yang jelas, bimbingan yang sabar dan tatatertib yang tegas di dalam dan di luar dojang.",
      features: [
        { title: "Usia 4 tahun ke atas", text: "Kelas Tadika menerima kanak-kanak berusia 4 hingga 7 tahun, di samping kelas junior dan kelas dewasa." },
        { title: "Tiga landasan latihan", text: "Asas, Poomsae dan Sparring — supaya setiap pelajar menguasai teknik asas, formasi dan pertempuran." },
        { title: "Kelas Senior & Tali Pinggang Hitam", text: "Sesi khas pada hari Sabtu untuk gred senior dan tali pinggang hitam yang mahukan teknik dan kecergasan lebih tajam." },
        { title: "Program sekolah", text: "Sesi taekwondo mingguan diadakan di SJKC Kasap dan SJKC Jementah." },
        { title: "Empat hari latihan", text: "Khamis, Jumaat, Sabtu dan Ahad, dengan slot pagi dan petang untuk menyesuaikan waktu sekolah dan kerja." },
        { title: "Dua jurulatih di WhatsApp", text: "Kedua-dua jurulatih boleh dihubungi terus melalui WhatsApp untuk pendaftaran dan pertanyaan kelas." }
      ]
    },
    programs: {
      eyebrow: "Program",
      title: "Pilih kelas yang sesuai",
      lead: "Setiap program di bawah dijalankan mengikut jadual mingguan. Pilih yang sepadan dengan umur dan gred anda, kemudian hubungi kami di WhatsApp untuk mendaftar.",
      cta: "Tanya tentang kelas ini",
      items: {
        toddler: {
          title: "Kelas Tadika",
          tag: "4–7 tahun",
          text: "Pengenalan taekwondo yang menyeronokkan dan berasaskan pergerakan. Kanak-kanak belajar mendengar arahan, keseimbangan dan teknik asas melalui permainan dan latihan pendek.",
          when: "Sabtu & Ahad · 9:00–10:00 pagi"
        },
        basic: {
          title: "Kelas Asas",
          tag: "Semua gred",
          text: "Kuda-kuda, elakan, tumbukan dan tendangan — asas yang membina setiap gred. Titik permulaan terbaik untuk pelajar baharu.",
          when: "Khamis & Jumaat · 5:00–6:30 petang · Sabtu & Ahad · 1:00–2:30 petang"
        },
        poomsae: {
          title: "Poomsae",
          tag: "Formasi",
          text: "Latihan formasi yang membina ketepatan, keseimbangan, pernafasan dan tumpuan. Poomsae ialah teras setiap ujian naik gred.",
          when: "Khamis · 7:00–8:30 malam · Ahad · 10:30 pagi–12:00 tengah hari"
        },
        sparring: {
          title: "Sparring",
          tag: "Tali pinggang kuning ke atas",
          text: "Sparring terkawal di bawah pengawasan, dengan peralatan perlindungan penuh. Pelajar tali pinggang kuning ke atas digalakkan hadir.",
          when: "Jumaat · 7:00–8:30 malam · Sabtu · 10:30 pagi–12:00 tengah hari"
        },
        senior: {
          title: "Senior & Tali Pinggang Hitam",
          tag: "Lanjutan",
          text: "Penambahbaikan teknik, kuasa dan kecergasan untuk gred senior dan tali pinggang hitam, serta persediaan untuk ujian naik gred seterusnya.",
          when: "Sabtu · 5:00–7:00 petang"
        },
        school: {
          title: "Program Sekolah",
          tag: "Sekolah rakan",
          text: "Taekwondo diajar di dalam kampus sekolah rendah Cina rakan kami, jadi pelajar boleh terus berlatih selepas waktu sekolah.",
          when: "Ahad · SJKC Kasap 1:00–2:30 petang · SJKC Jementah 3:30–5:00 petang"
        }
      }
    },
    schedule: {
      eyebrow: "Jadual kelas mingguan",
      title: "Waktu kami berlatih",
      lead: "Empat hari latihan, sesi pagi dan petang. Sila datang 10 minit lebih awal supaya anda sudah bersalin pakaian sebelum kelas bermula.",
      notesTitle: "Perlu diketahui",
      notes: [
        "Pelajar tali pinggang kuning ke atas digalakkan menghadiri kelas sparring atau poomsae.",
        "Sila bawa peralatan sparring sendiri untuk kelas sparring.",
        "Berkongsi peralatan sparring tidak dibenarkan atas sebab kebersihan."
      ],
      infoTitle: "Maklumat lanjut",
      whatsappOnly: "WhatsApp sahaja",
      classTypes: {
        toddler: "Tadika (4–7 tahun)",
        basic: "Asas",
        poomsae: "Poomsae",
        sparring: "Sparring",
        senior: "Senior & Tali Pinggang Hitam",
        bakatPoomsae: "Bakat Poomsae",
        bakatSparring: "Bakat Sparring",
        sjkcKasap: "SJKC KASAP",
        sjkcJementah: "SJKC JEMENTAH"
      },
      days: {
        thursday: "Khamis",
        friday: "Jumaat",
        saturday: "Sabtu",
        sunday: "Ahad"
      }
    },
    instructors: {
      eyebrow: "Jurulatih kami",
      title: "Mereka yang akan mengajar anda",
      lead: "Kedua-dua jurulatih boleh dihubungi terus melalui WhatsApp. Pilih mana-mana nombor — mereka akan membantu anda mendaftar.",
      roles: {
        master: "Jurulatih Utama",
        instructor: "Jurulatih"
      },
      bios: {
        master: "Hantar mesej kepada Master Fung di WhatsApp untuk pendaftaran, maklumat kelas dan pertanyaan umum tentang pusat ini.",
        instructor: "Hantar mesej kepada Sir Wong di WhatsApp untuk pendaftaran, maklumat kelas dan pertanyaan umum tentang pusat ini."
      },
      call: "Panggil",
      whatsapp: "WhatsApp"
    },
    venue: {
      eyebrow: "Tempat latihan",
      title: "Di mana kami berlatih",
      lead: "Dewan latihan kami terletak di tingkat tiga pusat seni bela diri di Segamat, Johor. Ibu bapa dialu-alukan menunggu di premis semasa kelas.",
      floorLabel: "Tingkat",
      buildingLabel: "Bangunan",
      addressLabel: "Alamat",
      map: "Buka dalam Google Maps",
      hoursLabel: "Hari latihan",
      hoursValue: "Khamis, Jumaat, Sabtu & Ahad",
      followLabel: "Ikuti kami",
      socialNames: { facebook: "Facebook", instagram: "Instagram" }
    },
    faq: {
      eyebrow: "Soalan lazim",
      title: "Soalan yang sering ditanya ibu bapa",
      items: [
        { q: "Pada usia berapa anak saya boleh mula?", a: "Dari usia 4 tahun. Kelas Tadika kami direka untuk kanak-kanak berusia 4 hingga 7 tahun dan dijalankan pada pagi Sabtu dan Ahad." },
        { q: "Apa yang perlu dipakai untuk kelas pertama?", a: "Pakaian sukan yang selesa memadai untuk pelajaran pertama. Tanya jurulatih anda tentang dobok (pakaian seragam) selepas mendaftar." },
        { q: "Perlukah kami membeli peralatan sparring sendiri?", a: "Ya untuk kelas sparring. Pelajar tali pinggang kuning ke atas digalakkan hadir, dan berkongsi peralatan sparring tidak dibenarkan atas sebab kebersihan." },
        { q: "Bagaimana bayaran bulanan dibuat?", a: "Semua bayaran dibuat melalui pemindahan dalam talian, dan nama pelajar mesti dinyatakan dalam ruangan catatan bayaran. Bayaran perlu dijelaskan dalam minggu pertama setiap bulan." },
        { q: "Bagaimana kami tahu jika kelas dibatalkan?", a: "Sebarang pembatalan akan dimaklumkan dalam kumpulan WhatsApp kelab, jadi sila sertai kumpulan itu selepas mendaftar." }
      ]
    },
    terms: {
      eyebrow: "Terma & syarat",
      title: "Peraturan pusat",
      lead: "Syarat-syarat ini terpakai kepada setiap pelajar pusat ini.",
      items: [
        "Bayaran latihan mesti dijelaskan dalam minggu pertama setiap bulan. Keahlian dan pelajaran latihan akan ditamatkan jika bayaran tertunggak selama 2 bulan.",
        "Semua bayaran mesti dibuat melalui pemindahan dalam talian. Sila sertakan nama pelajar dalam catatan bayaran untuk rujukan.",
        "Makluman akan diberikan dalam kumpulan WhatsApp jika sesuatu pelajaran latihan dibatalkan.",
        "Kelab Taekwondo berhak menggantung atau menamatkan keahlian latihan pelajar jika pelajar didapati berkelakuan tidak senonoh atau terlibat dalam pergaduhan di luar dojang."
      ],
      regLabel: "No. pendaftaran"
    },
    contact: {
      eyebrow: "Mula sekarang",
      title: "Sedia melangkah ke dalam dojang?",
      lead: "Hantar mesej kepada kami di WhatsApp dengan nama dan umur pelajar, dan kami akan mencadangkan kelas yang sesuai. Kedua-dua nombor di bawah terus kepada jurulatih.",
      waGeneral: "Hai, saya ingin mengetahui lebih lanjut tentang kelas taekwondo di Segamat Taekwondo & Martial Arts Centre.",
      waMaster: "Hai Master Fung, saya ingin bertanya tentang kelas taekwondo di Segamat Taekwondo & Martial Arts Centre.",
      waInstructor: "Hai Sir Wong, saya ingin bertanya tentang kelas taekwondo di Segamat Taekwondo & Martial Arts Centre.",
      callLabel: "Panggil",
      waLabel: "WhatsApp",
      footnote: "Mesej dijawab melalui WhatsApp sahaja."
    },
    footer: {
      tagline: "Latihan taekwondo dan seni bela diri di Segamat, Johor.",
      quickLinks: "Jelajah",
      contactTitle: "Hubungi",
      rights: "Hak cipta terpelihara.",
      backToTop: "Kembali ke atas",
      copyright: "Tey Jia Long - 凿山见水， 凿夜见光， 凿穿旧世， 凿石开疆"
    },
    whatsappFab: {
      label: "Sembang di WhatsApp",
      title: "Mesej jurulatih",
      close: "Tutup"
    },
    common: {
      tapToCall: "Ketik untuk panggil",
      newTab: "dibuka dalam tab baharu"
    }
  };

  window.SITE = SITE;
})();
