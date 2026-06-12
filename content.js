/*
  CUSTOMIZE EVERYTHING HERE.
  You do not need to touch index.html unless you want to change the structure.
  You do not need to touch style.css unless you want to change the design deeply.
*/

const SITE_CONTENT = {
  // Main details
  personName: "jasoomy",
  pageTitle: "Happy Birthday, jasoomy",
  brandText: "For jasoomy",
  eyebrow: "A luxury little birthday surprise ⋆⭒˚.⋆",
  heroMessage:
    "لانك احن واهم شخص في حياتي اهديك هالمفاجئه الي اصلا قليل بحقك يا اغلى من كل شي و يا احلى صدفه ونصيب كل عام وانت بخير يا ويه الخير احبك ",

  // Date format: YYYY-MM-DDTHH:MM:SS
  // Example: "2026-11-20T00:00:00"
  birthdayDate: "2026-11-20T00:00:00",

  // Main photo. Replace the file inside assets, or change the filename here.
  mainPhoto: "assets/main-photo.svg",

  // Floating notes beside the main photo
  noteOne: "HAPPY BIRTHDAY (˶>⩊<˶)",
  noteTwo: "حبيبي الي كبر 🥹",

  // Theme colors. Use any HEX color.
colors: {
  accent: "#2563eb",
  accentTwo: "#cbd5e1",
  accentThree: "#38bdf8"
},

  // Letter section
  letterTitle: "From the heart",
  letterBody:
    "الى حبيب قلبي ورفيق دربي, الى من كان دخوله الى حياتي نعمة اشكر الله عليها كل ما رأيت ابتسامتك وكل ما سمعت ذلك الصوت الحنون الذي ينبض قلبي بسعاده عند سماعه, و الى من جعل من حياتي مكان اجمل وربما ادفئ قليلا. كل عام وانت حبيبي وسندي ورفيق عمري حتى المشيب, اسال الله ان يجمعني بك فالدنيا و الاخره وان يكتب لنا السعاده معا لانك يا جاسم تستحق هذه السعاده وتستحق ان تاخذ لقب حبيب قلبي وتوأم روحي حتى الفظ اخر انفاسي. وجدت فيك مالم اجده في اي شخص آخر, وجدت الامان والرااااحة التامه ووجدت شخصا استطيع ان اكون على طبيعتي معه بدون تصنع او حذر, اسعدتني كما لم يسعدني احد من قبل والاهم من هذا كله انك جعلتني اشعر كيف يكون شعور الشخص المحبوب وجعلتني ارى كيف هي الطريقه الصحيحه للحب. احبك احبك احبك و سأظل احبك الى ان ينتهي وقتنا معا. عسى ربي يديمك لي ولا يحرمني منك يا احلى شي صار لي  ",
  secretNote:
    "احبك كتكوتي هيهي :)",

  // Reasons cards
  reasonsTitle: "شنو احب فيك",
  reasons: [
    {
      title: "حنانك",
      text: "فديت حنيتك وقلبك والله ابوسك يا احن ريال فحياتي والطف روح قابلتها"
    },
    {
      title: "ضحكتك",
      text: "احب اسمع ضحكتك بشكل ماتتخيله يوم اسمعها احس بسعادها عساني مانحرم منها ودوم اسمعها"
    },
    {
      title: "مواساتك",
      text: "الطريقه الي تواسيني فيها يوم اكون متضايقه او اصيح احب شعور الامان وياك واني اقدر الجأ لك يوم اكون فهالحاله..."
    },
    {
      title: "اهتمامك",
      text: "شكثر تهتم فيني وتهتم في تفاصيل بسيطه حتى انا ما انتبه لها هالشي يخليني احس انك تحبني ويخليني احبك اكثر كل ما  اسمع منك تفصيل يديد"
    },
    {
      title: "نظراتك",
      text: "يوم تطالعني بحب ويوم تطالعني وانا اضحك ويوم تتأملني لاني اساسا احب عيونك ونظراتك"
    },
    {
      title: "طيبتك والتزامك",
      text: "قلبك وايد واااايد طيب بشكل لدرجه قلبي يعورني يوم ازعلك لان ادري هالقلب الطيب مايستاهل جي, والتزامك وتحملك حق المسؤوليه يخليني صج اتاكد اني اخترت الشخص الصحححح"
    }
  ],

  // Timeline section
   timeline: [
    {
      date: "The beginning",
      title: "When I first knew you were different",
      text: "there was something about you that felt different, something deep down in me felt like this is gonna be something special..."
    },
    {
      date: "confession",
      title: "first i love you",
      text: "i can not forget the first time you told me you loved its one of the most memories that i will cherish forever, your tone and voice when you said it and how nervous you sounded honestly made my heart melt."
    },
    {
      date: "Today",
      title: "Your birthday",
      text: "im so grateful and thankful that you were born in this world this time of us both living so i can meet my soulmate i love you so much and cant wait to spend the rest of my life with you ♡"
    }
  ],

  memoryQuiz: [
    {
      question: "Who said I love you first?",
      options: [
        "Me",
        "You",
        "We both said it at the same time"
      ],
      correctIndex: 1
    },
    {
      question: "What am I to you?",
      options: [
        "Just someone",
        "Your headache",
        "Your favorite person"
      ],
      correctIndex: 2
    },
    {
      question: "What should you choose forever?",
      options: [
        "Me",
        "Also me",
        "Still me"
      ],
      correctIndex: 0
    }
  ],
  // Gallery. Replace image files inside assets, or change the filenames here.
  gallery: [
    {
      image: "assets/memory-1.svg",
      caption: "A favorite little memory"
    },
    {
      image: "assets/memory-2.svg",
      caption: "A day worth keeping"
    },
    {
      image: "assets/memory-3.svg",
      caption: "This one still makes me smile"
    },
    {
      image: "assets/memory-4.svg",
      caption: "Main character moment"
    },
    {
      image: "assets/memory-5.svg",
      caption: "Soft, happy, unforgettable"
    },
    {
      image: "assets/memory-6.svg",
      caption: "Proof that good days exist"
    }
  ],

  // Final wish
  wishTitle: "امنيتي لسنتك اليديده ♡",
  wishBody:
    "اتمنى لك سنه حلوه وياي طبعا, اتمنى اكون لك كل شي تتمناه يارب واكون مصدر امان وملجأ لك نفس ما انت مصدر امان بالنسبه لي, وايد احبك ووايد اموت عليك وميته عليك يالسوسه, عسى ربي يديمك لك طول العمر يارب وعسى ايامك وسنينك كلها وياي والله يطول بعمرك يارب 100 واكثر بعد كل عام وانت بخير جسومي يازوجي وحبيبي وكل شي احبه"
};
