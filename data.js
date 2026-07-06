/* ============================================================
   FIREBASE CONFIG — fill in before deploying
   Create a free project at https://console.firebase.google.com
   Enable Firestore Database (start in test mode is fine for internal use).
   Paste your config object below — same config goes in both
   index.html (exam) and admin.html (dashboard) since they share data.js.
   ============================================================ */
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const FIRESTORE_COLLECTION = "sem_exam2_submissions";

/* Owner's WhatsApp number for direct report sharing — country code + number, no + no spaces */
const OWNER_WHATSAPP_NUMBER = "91XXXXXXXXXX";

/* Admin panel passcode — change this before sharing the admin link */
const ADMIN_PASSCODE = "propbillion2026";

/* Exam timing */
const EXAM_DURATION_SECONDS = 50 * 60; // 50 minutes
const PASS_THRESHOLD = 80;   // marks out of 100 → Go-Live
const CONDITIONAL_THRESHOLD = 60; // marks out of 100 → Conditional

/* ============================================================
   QUESTION BANK — 30 scenario-based reasoning questions
   Each option is deliberately long and each carries its own
   reasoning so a candidate can never argue "why is this wrong".
   ============================================================ */
const QUESTIONS = [

{
tag:"MMS / Negotiation",
q:"Aap ek MMS call par ho. Customer ne budget bata diya hai jo project ke starting price se 15 lakh kam hai, lekin uski profession aur tone se lagta hai ki wo genuinely serious buyer hai aur sirf is project ke baare mein enquiry kar raha hai kyunki usne kisi rishtedaar se suna hai. Call abhi 90 second mein hai aur aapke paas 3-4 minute hi bache hain is call ko lock karne ke liye. Aapko decide karna hai ki is moment par sabse sahi move kya hai jo relationship bhi na tode aur time bhi waste na kare.",
opts:[
"Turant bata do ki yeh budget is project mein possible nahi hai aur call polite tarike se close kar do, taaki aapka time kisi aur hot lead par lag sake — kyunki MMS ka core hi yeh hai ki time sabse mehnga asset hai aur mismatch leads par zyada der nahi rukna chahiye.",
"Budget gap ko turant point out na karke, uska end-use samajhne ke liye 1-2 qualifying sawaal aur poochho (ready ya under-construction chalega, kya kisi choti configuration ya nearby micro-market mein flexibility hai), phir ek honest alternate suggest karo aur visit ka pivot lo — taaki value dikhe bina rejection ke.",
"Budget ka topic hi avoid kar do aur seedha visit book karne ki koshish karo bina kuch clarify kiye, is umeed mein ki site par jaake customer khud hi adjust kar lega jab wo actual flat dekh lega aur emotionally attach ho jayega.",
"Customer ko turant bata do ki 'main aapke liye special discount arrange karwa dunga', taaki wo interested rahe aur visit ke liye maan jaye, chahe aisa koi discount abhi decided na ho."
],
correct:1,
reasons:[
"Galat hai — yeh MMS ka galat interpretation hai. MMS time bachane ke liye hai, par bina qualify kiye hi reject kar dena ek genuinely serious lead ko turant chhod dena hai. Objection library ke hisaab se budget gap ek 'clarify' karne wala point hai, reject karne wala nahi.",
"Sahi hai — yeh exactly MMS ka BANT-lite qualify step hai (30-120 sec window) jahan end-use aur flexibility clarify hoti hai, uske baad honest alternate + visit-ask hota hai. Isse relationship bhi nahi tootta aur time bhi protect hota hai — yehi program ka core design hai.",
"Galat hai — bina qualify kiye visit book karna 'achhi baat' hai jo booking nahi karwati. Agar budget genuinely mismatch hai aur visit par bhi resolve nahi hota, to customer ka aur candidate dono ka time waste hota hai aur trust girta hai jab site par mismatch expose hota hai.",
"Galat hai — yeh ek fake promise hai jo bina decide kiye di ja rahi hai. Negotiation Mastery framework mein clearly mana kiya gaya hai ki customer ke pehle hi discount offer karna value gira deta hai, aur agar baad mein discount na mile to yeh trust-kill aur RERA-adjacent honesty issue banta hai."
]
},

{
tag:"Objection Handling",
q:"Ek customer call par gussa hai kyunki usne pehle kisi doosre broker se bura experience liya tha — usse jhooti timeline di gayi thi aur possession late hua tha. Ab wo aapse baat karte waqt bar-bar keh raha hai 'aap log sab yehi karte ho, jhoot bolte ho'. Aapko is call ko is tarah handle karna hai ki trust reset ho aur call visit-ask tak pahunche.",
opts:[
"Turant defend karo aur bolo 'Sir hum aise nahi hain, hum genuine hain', phir jaldi se apna pitch shuru kar do taaki customer ka gussa topic se hat jaye aur wo project ki baat sunne lage.",
"Pehle uski frustration ko genuinely acknowledge karo (ACER ka 'A') bina defensive hue, phir clarify karo ki uska exact concern kya tha (timeline ya communication), phir apne process mein transparency kaise hai wo honestly explain karo (educate), aur phir ek chhota low-pressure next-step (jaise ek genuine RERA-verified possession date dikhana) offer karo.",
"Customer ko turant bata do ki uska purana broker galat tha aur uski company ka naam bhi pooch lo taaki aap prove kar sako ki aap alag ho aur wo company kitni bekaar hai.",
"Call ko politely wahi khatam kar do kyunki aisa gussa customer 'difficult' category mein aata hai aur usme time invest karna sahi nahi hai, energy hot leads ke liye bachani chahiye."
],
correct:1,
reasons:[
"Galat hai — turant defend karna aur pitch shuru karna ACER ke 'Acknowledge' step ko skip karta hai. Customer psychology section kehta hai defensive hona trust build nahi karta; pehle emotion ko space dena zaroori hai.",
"Sahi hai — yeh poora ACER sequence hai: Acknowledge (defensive na hokar sunna), Clarify (real concern samajhna), Educate (apni transparency dikhana), Redirect (chhota genuine next-step). Yeh exactly is scenario ke liye design kiya gaya framework hai.",
"Galat hai — doosre broker ki burai karna unprofessional hai aur culture-first policy (respect sabke saath) ke against hai. Yeh customer ka trust nahi, balki aapki professionalism par sawaal khada karta hai.",
"Galat hai — 'Objection Survivor' aur customer psychology dono kehte hain ki objection/gussa interest ka hi ek roop hai jab customer abhi bhi baat kar raha hai. Usse turant chhod dena ek recoverable lead ko permanently khona hai."
]
},

{
tag:"Relationship Framework",
q:"Ek naya candidate apni pehli hi call mein customer se hometown aur family poochne ke bajaye seedha pricing aur discount ki baat shuru kar deta hai, yeh soch kar ki 'jitna jaldi number bataunga utni jaldi decision aayega'. Call ke end mein customer 'soch ke batata hoon' bolke chala jaata hai. Iss situation ka sabse accurate root-cause analysis kya hai program ke framework ke hisaab se?",
opts:[
"Candidate ne sahi kiya, kyunki customer time bachana chahte hain aur pricing jaldi dena hi efficient hai — problem sirf itni thi ki price thoda zyada bata diya gaya, jo negotiate karke theek ho sakta tha.",
"Candidate ne FAMILIAR → TRUSTED → INFLUENTIAL → BUSINESS sequence ko skip kar diya aur seedha 'Business' stage par pahunch gaya bina trust banaye. Customer psychology ke hisaab se yeh candidate desperate aur transactional laga, isliye customer ne genuine interest hone ke bawajood 'soch ke batata hoon' jaisa safe exit le liya.",
"Customer ka hi problem tha ki wo commit nahi karna chahta tha, candidate ki approach se koi farak nahi padta — kyunki real estate mein log hamesha soch ke batate hain, yeh normal hai.",
"Candidate ko chahiye tha ki wo aur zyada aggressively discount push karta, taaki customer ko lage ki deal abhi hi lock karni chahiye warna miss ho jayegi."
],
correct:1,
reasons:[
"Galat hai — yeh galat diagnosis hai. Problem price ka number nahi tha, balki sequence skip karna tha. Framework clearly kehta hai ki pehli call mein hi pricing thopna 'desperate aur transactional' lagta hai, regardless of the number.",
"Sahi hai — yeh exact document ka core theme hai: 'Jo pehle hi din pricing/offer pe kood jaata hai wo desperate aur transactional lagta hai — aur convert nahi karta.' Rapport na banne se trust nahi bana, isliye customer ne exit le liya.",
"Galat hai — yeh customer ko blame karke apni galti chhupana hai. 'Soch ke batata hoon' ek stall hai jo tab aata hai jab pehle relationship establish nahi hui hoti; ACER pivot ('tentative weekend rakh lo, no pressure') se isko handle kiya ja sakta hai, jo yahan try hi nahi hua.",
"Galat hai — Negotiation Mastery framework directly mana karta hai discount ko pressure tool ki tarah use karne se pehle value build kiye — aur yeh common mistake section mein explicitly listed hai."
]
},

{
tag:"Tagging & Handover",
q:"Ek investor customer engaged hai aur usne 2 alag configurations mein interest dikhaya hai, lekin abhi tak clearly nahi bataya ki final budget kya hai — wo bas bol raha hai 'dekhte hain jo best rahega'. Aapko is customer ko CRM mein sahi status tag karna hai aur Sales Manager ko verbally handover bhi karna hai. Sabse accurate approach kaunsa hai?",
opts:[
"CRM mein 'Closed' tag kar do kyunki customer engaged lag raha hai aur handover ke time SM ko bol do 'yeh customer ready hai, bas paperwork baaki hai' — taaki SM confidently aage badh sake bina zyada detail ke.",
"CRM mein 'Engaged' status tag karo (kyunki interest confirm hai par commitment abhi nahi), notes mein dono configurations aur unclear budget clearly likho, aur SM ko handover karte waqt bridge + elevate + positive tagging formula follow karo — jaise 'Sir yeh [Customer] hain, 2 configs explore kar rahe hain, budget flexibility abhi discuss honi baaki hai, serious investor hain.'",
"CRM update karne ki jaldi mat karo, shaam ko sab leads ek saath update kar lena behtar hai taaki din ke beech mein calling se time na jaye.",
"SM ko customer ki poori conversation word-by-word dobara sunao taaki SM ko full context mil sake aur koi detail miss na ho.",
],
correct:1,
reasons:[
"Galat hai — 'Closed' tag karna galat aur premature hai jab commitment hua hi nahi. Galat CRM tagging ka matlab hai koi bhi lead utha kar galat context ke saath aage badhega — yeh CRM Mastery section ke against hai.",
"Sahi hai — yeh CRM tagging aur verbal tagging dono ko sahi combine karta hai: accurate status ('Engaged', not overstated), complete honest notes, aur handover formula (bridge, elevate senior, positively tag customer) jo document mein specifically diya gaya hai.",
"Galat hai — CRM Mastery section explicitly kehta hai 'baad mein update kar dunga' sabse mehngi aadat hai kyunki shaam tak details bhool jaati hain. Same-day, ideally turant update non-negotiable hai.",
"Galat hai — Handover ki common mistake yahi hai: senior ke saamne info word-by-word dobara dohrana. Customer bore hota hai aur lagta hai 'kuch note hi nahi kiya'. Crisp 2-line positioning sahi tareeka hai."
]
},

{
tag:"Square Feet Mastery / RERA",
q:"Ek customer brochure dekh kar confuse ho gaya hai kyunki brochure mein '950 sq.ft' likha hai lekin jab usne floor plan mein rooms measure kiye to usko laga ghar chhota hai. Wo pooch raha hai 'yeh 950 sq.ft kaisा hai, ghar to chhota lag raha hai'. Aapko is confusion ko honestly aur clearly resolve karna hai.",
opts:[
"Customer ko bata do ki uski calculation galat hai aur brochure ka number hi final hai, kyunki builder ne official measurement diya hai aur usse challenge karna sahi nahi hai.",
"Explain karo ki 950 sq.ft saleable/super built-up area hai jisme lobby, lift, stairs jaisa common area share bhi shamil hota hai — jabki uska actual usable carpet area (jo RERA ke baad official measure hai) usse kam hoga, aur yeh number transparently bata do taaki customer ko sahi picture mile.",
"Topic ko halke se avoid kar do aur customer ka dhyan floor plan ki design aur lifestyle features par le jao, taaki sq.ft wala confusion khud hi peeche chhoot jaye.",
"Customer ko bol do ki '950 sq.ft carpet hi hai', taaki uska confusion turant khatam ho jaye aur wo aage ki baat pe focus kare — chahe actual carpet kam ho."
],
correct:1,
reasons:[
"Galat hai — customer ki calculation ko bina explain kiye galat bolna disrespectful hai aur asli confusion (saleable vs carpet ka difference) ko resolve nahi karta.",
"Sahi hai — yeh exactly Sq.Ft Mastery section ka honest framework hai: saleable = built-up + common area share, aur RERA ke baad carpet hi official basis hai. Transparency se hi customer ka confusion genuinely resolve hota hai aur trust banta hai.",
"Galat hai — topic avoid karna temporary hai; customer ko jab baad mein (site visit ya documents mein) asli carpet pata chalega, tab trust poori tarah toot jayega kyunki usse pehle bataya hi nahi gaya.",
"Galat hai — yeh document mein explicitly 'fraud + instant trust-kill' bataya gaya hai. Saleable ko carpet bolna sirf ek chhoti galti nahi, ek compliance aur ethics violation hai."
]
},

{
tag:"Construction & Spec Selling",
q:"Ek customer competitor ke ek RCC-based project se price compare kar raha hai jo aapke Mivan-technology wale project se sasta hai. Wo pooch raha hai 'yeh mehnga kyun hai jab wahan same 2BHK sasta mil raha hai'. Aapko price ko honestly justify karna hai bina competitor ki burai kiye.",
opts:[
"Bol do ki competitor ka project 'ghatiya quality' ka hai aur unka builder trustworthy nahi hai, taaki customer competitor se door ho jaye aur aapke project ki taraf aaye.",
"Turant discount offer kar do taaki price gap kam lage aur customer decision jaldi le le.",
"Mivan technology ka customer-benefit explain karo — seamless walls, kam cracks, uniform quality, faster aur stronger construction — aur site par ja kar ek tile/fitting touch karwa kar 'feel' bhi karwao, taaki price difference specification aur quality ke through justify ho, competitor ki burai kiye bina.",
"Customer ko keh do ki price fix hai aur usme koi flexibility nahi, is topic par aage baat na badhao."
],
correct:2,
reasons:[
"Galat hai — Culture-First Policy mein 'Respect' sabke saath hai, aur competitor ki burai karna unprofessional hai. Value apne product ki strength se dikhani hai, doosre ko neecha dikha kar nahi.",
"Galat hai — Negotiation Mastery ka core principle hai 'Value Before Price'. Turant discount dena value ko establish kiye bina hi price ki ladai mein utar jaana hai, jo trust aur margin dono kharab karta hai.",
"Sahi hai — yeh exactly Construction & Specification Mastery ka approach hai: spec-selling drill se benefit ko customer-language mein convert karna, aur field secret ke hisaab se touch+see se 'feel' karwana, jisse price naturally justify hota hai bina competitor ko target kiye.",
"Galat hai — price ko bina explain kiye 'fix hai' bol dena ek missed opportunity hai value build karne ki. Negotiation sequence mein pehle value dikhana zaroori hai, price defend karna baad mein aata hai."
]
},

{
tag:"Negotiation",
q:"Site visit se pehle hi, phone par customer keh raha hai 'pehle best price bata do, tabhi visit ke liye aaunga, warna time waste hoga'. Aapko decide karna hai ki is pressure ko kaise handle karna hai bina customer ko khona aur bina premature discount diye.",
opts:[
"Customer ki demand maan kar phone par hi ek approx best price bata do, taaki wo visit ke liye maan jaye — kyunki agar aap nahi bataoge to customer kisi aur broker ke paas chala jayega.",
"Politely defer karo: 'Sir pehle dekh lo, value samajh aaye, phir best number nikaalte hain' — is tarah rate ki baat visit ke baad tak defer karo, jabki customer ko yeh bhi assure karo ki visit ke baad genuine best price milegi.",
"Customer se seedha bol do ki agar wo visit nahi karega to aap uski help nahi kar sakte, aur call end kar do.",
"Ek bahut high price bata do taaki jab actual discount diya jaye to wo bada lage — is tarah customer ko 'jeetne' ka feeling milega."
,
],
correct:1,
reasons:[
"Galat hai — Negotiation Mastery ka pehla step hai 'Defer price' — pehli baar mein rate par na uljhna. Phone par hi price de dena value build hone se pehle hi negotiation shuru kar deta hai, jisse aage discount pressure aur badhta hai.",
"Sahi hai — yeh exactly document ka locked negotiation sequence hai: defer price karo, lekin customer ko chhodo mat, use assure karo ki visit ke baad honest best number milega. Yeh dono cheezein balance karta hai — customer retain bhi hota hai aur value bhi build hone ka mauka milta hai.",
"Galat hai — yeh customer ko turant chhod dena hai, jabki objection ek interest ka signal hai jise ACER se handle kiya jaana chahiye, reject nahi.",
"Galat hai — yeh ek manipulative tactic hai jo honesty aur culture-first policy ke against hai. RERA aur trust dono ke liye risky hai, aur agar customer ko baad mein pata chale to trust permanently toot sakta hai."
]
},

{
tag:"Closing System",
q:"Site visit ke exit-walk (walkout-to-car) window mein, customer chup-chap chal raha hai aur kuch keh nahi raha. Yeh document ke hisaab se sabse high-value, sabse under-trained moment hai. Is moment mein candidate ko kya karna chahiye?",
opts:[
"Chup rehna aur customer ke gaadi tak pahunchne ka wait karna, kyunki agar customer kuch nahi bol raha to usse disturb nahi karna chahiye.",
"Ek warm line se conversation start karo jo cues padhe (jaise 'Sir kaisa laga overall?'), phir ek interest-trigger dena (chhoti story ya observation), aur phir ek soft next-step lock karna (jaise 'main aapko details WhatsApp kar deta hoon aur do din mein follow-up karta hoon') — is poore window ko ek soft-close opportunity ki tarah treat karna.",
"Customer se seedha pooch lena 'aap book kar rahe ho ya nahi, abhi decide kar lo', taaki clear jawaab mil jaye.",
"Customer ko ek bada discount offer kar dena taaki wo turant khushi se book kar de, kyunki wo already site dekh chuka hai."
],
correct:1,
reasons:[
"Galat hai — Field Secret specifically kehta hai ki exit/walkout window 'sabse under-trained, sabse high-value moment' hai jahan customer relaxed hota hai aur guard down hota hai — ise silently guzarne dena ek bada missed opportunity hai.",
"Sahi hai — yeh exactly document mein diya gaya exit-walk drill hai: warm line + interest-trigger + soft next-step. Yeh moment ki naturalness ko use karta hai bina pressure banaye.",
"Galat hai — yeh ek hard, premature close hai jo abhi visit khatam hote hi customer par pressure daal deta hai. Closing principles kehte hain ask ke baad chup rehna chahiye, par yeh us softness ko skip karke seedha hard-ask bana deta hai.",
"Galat hai — Negotiation Mastery framework mein pehle value build karna hai, price/discount push nahi. Ek site visit dekhne ke baad turant discount push karna value ko undermine karta hai."
]
},

{
tag:"RERA Compliance",
q:"Ek customer specifically pooch raha hai 'kya mujhe guarantee hai ki 2 saal mein property ki value double ho jayegi, jaisa mere ek dost ne bola tha kisi doosre broker se'. Aapko is situation mein RERA-compliant aur honest response dena hai.",
opts:[
"Customer ki baat ko confirm kar do aur bol do 'haan bilkul, 2 saal mein double ho jayegi', kyunki customer already excited hai aur usse disappoint nahi karna chahiye.",
"Clearly bata do ki koi bhi guarantee/assured-return type claim nahi diya ja sakta — yeh RERA-risky hai — lekin location ki growth story, infra development, aur past appreciation trends (illustrative examples ke saath, 'ho sakta hai' ki tarah, 'guaranteed' nahi) honestly share karo.",
"Topic ko avoid kar do aur turant subject badal do taaki aapko jhooth na bolna pade aur na hi customer ko disappoint karna pade.",
"Customer ko bol do ki uska dost galat tha aur uska doosra broker fraud tha, taaki customer sirf aap par bharosa kare."
],
correct:1,
reasons:[
"Galat hai — RERA Mastery Module explicitly mana karta hai 'assured/guaranteed return' type claims, chahe customer khud expect kar raha ho. Yeh galat confirmation compliance violation hai aur deployment gate mein automatic-fail category mein aata hai.",
"Sahi hai — yeh exact honest framework hai: guarantee nahi denа, par illustrative growth story (infra, location, past trends) 'ho sakta hai' ki tarah share karna. Storytelling section mein bhi yehi differentiate kiya gaya hai — 'Past mein hua / ho sakta hai theek hai; guaranteed nahi.'",
"Galat hai — topic avoid karna customer ke genuine sawaal ko unanswered chhod deta hai aur trust building ka mauka gawa deta hai. Honest, clear jawaab dena hi sahi approach hai.",
"Galat hai — doosre broker ko 'fraud' bol dena bina verify kiye ek unprofessional aur baseless claim hai, jo Culture-First Policy (respect, honesty) ke against hai."
]
},

{
tag:"Storytelling (SPARK)",
q:"Ek investor customer keh raha hai 'stories sunke time waste hota hai, mujhe sirf numbers chahiye — rental yield aur appreciation'. Aapko decide karna hai ki kya storytelling approach yahan bhi use karni chahiye ya nahi, aur kaise.",
opts:[
"Storytelling completely chhod do kyunki customer ne specifically mana kiya hai, aur sirf raw numbers (rental yield %, past appreciation %) bata do bina kisi context ke.",
"SPARK framework ko adapt karo — ek chhoti, numbers-anchored real example do (jaise 'ek investor ne 2 flat liye, EMI lagbhag rent se cover hua, appreciation upar se') jisme setting-problem-action-result-kicker sab ho lekin format factual aur crisp ho, taaki customer ki 'numbers-first' preference bhi respect ho aur imagination bhi trigger ho.",
"Customer ko bol do ki bina story sune usse project samajh hi nahi aayega, aur zabardasti lambi kahani sunao.",
"Guaranteed rental yield aur guaranteed appreciation percentage bata do taaki customer numbers se turant convince ho jaye."
],
correct:1,
reasons:[
"Galat hai — sirf raw numbers bina kisi anchor ke customer ke dimaag mein utna stick nahi karte. Customer Psychology section kehta hai facts verify hote hain par kahaniyan feel hoti hain — dono ka balance behtar hai, sirf numbers nahi.",
"Sahi hai — yeh SPARK framework ka smart adaptation hai jo customer ki preference (numbers-first) ko bhi respect karta hai aur story ka emotional-imagination benefit bhi retain karta hai — jaisa Investment story-bank example mein diya gaya hai.",
"Galat hai — customer ne explicitly bataya hai ki lambi kahani se usse time waste lagta hai; usse ignore karke zabardasti lambi story sunana rapport todta hai, listen-first principle (60% sunna) ke against hai.",
"Galat hai — 'guaranteed' rental yield ya appreciation bolna RERA-risky hai. Story bank mein clearly likha hai: 'guaranteed' return jaisi claims trust kills jab na ho, aur compliance risk hain."
]
},

{
tag:"WhatsApp Sales",
q:"Aapne ek lead ko 3 din pehle floor plan bheja tha aur customer ne sirf 'ok' reply kiya, uske baad se chat dead hai. Aapko is dead chat ko revive karna hai document ke WhatsApp framework ke hisaab se.",
opts:[
"Wahi floor plan dobara bhej do bina kisi naye message ke, taaki customer ko yaad aa jaye.",
"Ek value-carrying follow-up bhejo jisme koi genuine update ho (jaise 'Sir update — is config mein kuch units bachi hain, weekend slot rakh lun? 20 min mein decision-clarity aa jayegi') jo ek question/CTA ke saath khatam ho, na ki sirf reminder ho.",
"Roz raat ko ek follow-up message bhej do jab tak reply na aaye, chahe koi naya update na ho, taaki chat top par rahe.",
"Customer ko call kar ke seedha pooch lo 'aapne reply kyun nahi kiya', taaki jaldi jawaab mil jaye."
],
correct:1,
reasons:[
"Galat hai — Last-message science ke hisaab se same content dobara bhejna koi naya value nahi deta; customer usi tarah ignore karega jaise pehli baar kiya.",
"Sahi hai — yeh exactly document ka 'Last-message science' aur 'Follow-up (value)' template hai — genuine update + question/CTA ke saath khatam hona chahiye, dry reminder nahi. Yeh customer ko reply karne ka reason deta hai.",
"Galat hai — Message timing principle kehta hai 'Aadhi raat nahi' aur bina genuine content ke roz message bhejna spam jaisa lagta hai, jo Customer Psychology section mein specifically mana kiya gaya hai ('customer un brokers ko bhool jaata hai jo sirf ok aur dry forwards bhejte hain').",
"Galat hai — customer ko directly confront karna ('reply kyun nahi kiya') defensive aur unprofessional lagta hai; relationship-first tone ke against hai."
]
},

{
tag:"CRM Discipline",
q:"Ek candidate din bhar mein 45 calls karta hai lekin CRM update 'shaam ko ek saath kar lunga' bolke tal deta hai, yeh soch kar ki isse calling volume zyada ho payegi. Evening review mein trainer ko yeh pattern dikhta hai. Iska sabse accurate assessment kya hai?",
opts:[
"Yeh sahi strategy hai kyunki calling volume hi sabse important metric hai, CRM baad mein bhi update ho sakta hai bina kisi nuksan ke.",
"Yeh ek high-risk habit hai — CRM Mastery section explicitly kehta hai 'baad mein update kar dunga' sabse mehngi aadat hai kyunki shaam tak aadhi details bhool jaati hain, jisse leads ka context kharab hota hai aur follow-up quality girti hai — is habit ko turant correct karna chahiye chahe usse calling volume thodi kam bhi ho.",
"Yeh koi issue nahi hai jab tak candidate apna calling target hit kar raha hai, CRM sirf ek formality hai jo reporting ke liye hoti hai.",
"Trainer ko is baare mein kuch nahi kehna chahiye kyunki candidate khud decide kar sakta hai apna time kaise manage karna hai."
],
correct:1,
reasons:[
"Galat hai — yeh ek false trade-off hai. CRM Mastery aur Daily Operating Rhythm dono explicitly same-day (turant ideally) update ko non-negotiable batate hain, na ki calling volume ke against ek choice.",
"Sahi hai — document specifically is exact habit ko 'sabse mehngi aadat' ki tarah flag karta hai. Volume achha hai, par bina accurate CRM ke wo volume follow-up mein convert nahi hota, aur agar candidate chhutti par ho to koi bhi lead continue nahi kar sakta.",
"Galat hai — Field Secret section explicitly kehta hai ki clean CRM hi ek SEM ko 'reliable' banata hai aur promotions dilata hai; ise sirf formality samajhna galat framing hai.",
"Galat hai — Trainer Ownership Model ke hisaab se pehle 30 dino mein candidate ki discipline (including CRM) poori tarah trainer ki zimmedari hai; correction dena zaroori hai, chhod dena nahi."
]
},

{
tag:"Voice & Energy Management",
q:"Din ke doosre calling block (2:40-4:30) mein ek candidate ki energy gir rahi hai aur uski awaaz flat sunayi de rahi hai, jisse consecutive 3 calls mein customer disinterested lag rahe hain. Voice Modulation Mastery ke framework ke hisaab se sabse sahi immediate correction kya hai?",
opts:[
"Candidate ko break de do aur agle din tak calling na karne do, taaki wo poori tarah rest kar sake.",
"Candidate ko khada hokar ya halki walk karte hue calls karne ko kaho, aur ek chhota voice-reset (breathing/smile-speak) karwao — kyunki calling ek 'seated chore' nahi, ek 'performance activity' hai jisme energy aur posture directly voice quality par asar dalte hain.",
"Candidate ko keh do ki fake energy dikhaye, chahe andar se tired ho, kyunki customer ko fake energy bhi real lagti hai agar acting achhi ho.",
"Kuch mat karo, kyunki energy ka girna normal hai aur din ke doosre half mein sabki energy kam ho jaati hai, isse calls par koi asar nahi padta.",
],
correct:1,
reasons:[
"Galat hai — poore din calling rokna ek overreaction hai jab issue sirf posture/energy-reset se fix ho sakta hai; yeh calling volume ko bina zaroorat ke kam kar deta hai.",
"Sahi hai — yeh exactly Calling Environment Framework ka principle hai: 'Calling ek performance activity hai, seated chore nahi. Energy gir-ti hai toh khade ho kar ya halki walk karte hue call karwao.' Yeh immediate, practical aur document-backed fix hai.",
"Galat hai — 'fake' energy ki baat kahin nahi ki gayi; framework genuine energy-reset techniques (breathing, smile-speak, posture) sikhata hai, acting nahi.",
"Galat hai — document specifically warn karta hai ki bina warmup/energy-reset ki calls 'flat, low-energy aur unclear' hoti hain aur 'best leads par waste' ho jaati hain — energy drop ko ignore karna risky hai."
]
},

{
tag:"Grooming & Trust",
q:"Ek candidate ka morning grooming audit fail ho gaya hai (unironed shirt, unpolished shoes) lekin usi din uska ek important client visit bhi scheduled hai jo already confirm ho chuka hai. Trainer ko decide karna hai ki kya karna hai.",
opts:[
"Grooming issue ko ignore kar do kyunki client visit already confirm hai aur usse cancel karna ya postpone karna zyada nuksaan karega business ke liye.",
"Policy follow karo: grooming audit fail = no client contact till fixed. Candidate ko turant grooming fix karne ka time do (agar time hai) ya us visit ke liye kisi aur groomed team member/senior ko involve karo, kyunki 'customer pehli 7 second mein bharosa decide karta hai' aur grooming wahi pehla bharosa hai.",
"Candidate ko client ke saamne hi grooming ke baare mein bol do taaki client ko pata chale ki company discipline maintain karti hai.",
"Grooming audit ko sirf training days ke liye rakho, real client visits ke din yeh rule apply nahi hona chahiye kyunki wahan result zyada important hai appearance se.",
],
correct:1,
reasons:[
"Galat hai — Grooming Program mein clearly likha hai 'fail = no client contact till fixed', bina exception ke — is rule ko sirf isliye tod dena ki visit confirm hai, poore program ki integrity ko kamzor karta hai.",
"Sahi hai — yeh exact policy hai jo document mein di gayi hai, aur uska reasoning bhi diya gaya hai (7-second trust). Practical solution bhi wahi hai jo grooming ko fix karna ya alternate arrangement karna — result aur standard dono maintain karta hai.",
"Galat hai — client ke saamne internal grooming issue discuss karna unprofessional hai aur customer ka trust hi kam karega, badhayega nahi.",
"Galat hai — yeh rule ka poora purpose hi 'client-facing moments' ke liye hai; usse sirf training days tak limit karna is rule ki asli mansha ke against hai."
]
},

{
tag:"Full Journey / Weakest Link",
q:"Ek candidate calling, rapport, aur objection handling mein bahut strong hai (consistently 5/5), lekin jab bhi customer ko Sales Manager ko handover karta hai, customer ka interest thoda kam ho jaata hai aur kabhi-kabhi deal wahin slow ho jaata hai. Is pattern ka sabse accurate diagnosis kya hai?",
opts:[
"Candidate ka overall performance bahut achha hai, isliye handover ka chhota issue ignore kiya ja sakta hai — strong calling aur rapport hi deployment ke liye kaafi hain.",
"Yeh exactly 'weakest link' problem hai jo Customer Journey Drill Framework mein describe ki gayi hai — 'ek chain apni weakest link jitni hi strong hoti hai'. Yahan handover formula (bridge, elevate senior, positive tag, reassure continuity) weak hai, jisse customer ko 'pass-on' feel hota hai instead of 'upgrade'. Isko specifically 50+ tagging/handover roleplays se target karna chahiye, baaki skills ko top-up karne ke bajaye.",
"Sales Manager ka issue hai, candidate ka nahi — SM ko apni approach improve karni chahiye, candidate ko kuch alag karne ki zaroorat nahi.",
"Candidate ko handover karna hi band kar dena chahiye aur khud hi deal close karne ki koshish karni chahiye, SM ko beech mein na laaye.",
],
correct:1,
reasons:[
"Galat hai — 'A chain is as strong as its weakest link' principle explicitly kehta hai ki ek weak link poori chain ko tod sakta hai, chahe baaki links kitne bhi strong ho. Isko ignore karna deployment readiness ko risk mein daalta hai.",
"Sahi hai — yeh document ke Customer Journey Drill Framework aur Tagging & Handover Mastery section ka exact application hai. Specific, targeted roleplay drilling hi is gap ko close karega, generic overall praise nahi.",
"Galat hai — jabki SM ki bhi role hoti hai, document specifically candidate ki responsibility batata hai ki wo 'positive tag' aur 'bridge+elevate' formula sahi se execute kare taaki customer ko upgrade feel ho, chahe SM koi bhi ho.",
"Galat hai — Customer Handover ek core, mandatory drill hai (16 micro-skills mein se ek); ise skip karna ek zaroori sales-cycle step ko avoid karna hai, problem solve karna nahi."
]
},

{
tag:"Deployment Readiness Gates",
q:"Ek candidate ka Day 29 assessment mein har gate 4/5 ya usse upar hai, sirf 'Negotiation & Closing' gate 3/5 par hai. Baaki sab kuch (grooming, communication, product knowledge, culture) strong hai. Deployment Readiness Checklist ke hisaab se sahi decision kya honi chahiye?",
opts:[
"Automatically 'Not Certified' kar do aur poori 30-day training dobara se shuru karwao, kyunki koi bhi gate 4 se kam hai to deploy nahi karna chahiye.",
"'Conditional Deploy' karo — senior shadow ke saath deploy karo aur 1-week ke andar specifically Negotiation & Closing par re-test lo, jaisa document mein defined hai ki '1-2 gates at 3/5 → conditional deploy with senior shadow + 1-week re-test'.",
"Sab gates already strong hain isliye 3/5 wale gate ko ignore kar do aur bina kisi condition ke poori tarah 'Go-Live' certify kar do.",
"Candidate ko turant deploy kar do bina kisi shadow ya re-test ke, kyunki 4 gates already strong hain aur ek weak gate se koi farak nahi padta real-world performance mein.",
],
correct:1,
reasons:[
"Galat hai — poori training dobara shuru karwana ek overcorrection hai. Document specifically 'conditional deploy' ka intermediate path deta hai jab sirf 1-2 gates borderline (3/5) hon, poora re-loop 3+ weak gates ya compliance/culture fail ke liye hai.",
"Sahi hai — yeh exact decision rule hai jo Deployment Readiness Checklist mein diya gaya hai. Ek borderline gate ke liye conditional deploy + targeted re-test sabse balanced approach hai — na overreact, na ignore.",
"Galat hai — bina kisi condition ke poori tarah certify karna ek real gap (negotiation weakness) ko ignore karta hai, jo deployment ke baad multi-crore client-facing situations mein expensive galti ban sakta hai.",
"Galat hai — bina shadow/re-test ke deploy karna document ke apne rule ke against hai; senior shadow specifically is liye hai ki weak area par real-world exposure ke saath support mile."
]
},

{
tag:"Compliance Auto-Fail",
q:"Trainer ko pata chalta hai ki ek candidate ne apni ek live call mein customer ko bola 'yeh area mein 2 saal mein price definitely double ho jayega, main guarantee karta hoon'. Baaki sab metrics (communication, closing, product knowledge) is candidate ke bahut strong hain (sab 4-5/5). Deployment decision kya hona chahiye?",
opts:[
"Kyunki baaki sab scores bahut strong hain, is ek incident ko warning dekar chhod do aur candidate ko normally certify kar do.",
"Compliance violation (false/guaranteed-return promise) automatic fail hai, regardless of skill scores — jaisa Deployment Readiness Checklist mein explicitly likha hai: 'Compliance violation ya culture breach = automatic fail regardless of skill scores'. Candidate ko re-loop karna chahiye specifically RERA/honesty module par, chahe baaki skills kitne bhi strong ho.",
"Sirf candidate ke Negotiation score ko thoda kam kar do (jaise 5 se 3), baaki sab same rakho, aur overall average nikal ke decide karo.",
"Is incident ko chhupa do kyunki isse candidate ka confidence toot sakta hai aur owner ko bhi zyada worry karne ki zaroorat nahi hai.",
],
correct:1,
reasons:[
"Galat hai — yeh document ke apne explicit rule ke against hai. 'Automatic fail regardless of skill scores' ka matlab hai ki koi bhi warning-only approach yahan insufficient hai, chahe baaki performance kitna bhi accha ho.",
"Sahi hai — yeh exact locked rule hai. RERA Mastery Module aur Deployment Gates dono is tarah ke false promise/guaranteed-return claims ko severe compliance risk maante hain jo firm ki licence aur reputation risk karta hai — isliye automatic fail, averaging nahi.",
"Galat hai — averaging ek compliance violation ko baaki skills ke saath 'dilute' kar deta hai, jabki document specifically kehta hai ki yeh ek alag, non-negotiable category hai jo skill scores se independent hai.",
"Galat hai — chhupana Culture-First Policy (honesty, ownership) ke bilkul against hai aur Owner Reporting System ka poora purpose hi hai ki aisi risks owner ko turant, transparently dikhein."
]
},

{
tag:"Money Motivation & Culture",
q:"Ek trainee training ke Day 10 ke aas-paas demotivated lag raha hai aur keh raha hai 'itni mehnat kyun karun, itna commission milega bhi ya nahi pata nahi'. Trainer ko Money Motivation Framework ke hisaab se is conversation ko kaise approach karna chahiye?",
opts:[
"Turant bade numbers ka lalach do (jaise 'lakhon kama sakte ho'), bina kisi real example ke, taaki trainee turant motivate ho jaye.",
"Ek real, concrete example se samjhao ki ek single booking ka incentive impact kya hota hai, career growth path (Telecaller → SEM → Team Lead → Manager) dikhao, aur ise 'greed nahi, professional ambition' ki tarah frame karo — jaise document mein diya gaya hai: 'Jitna better banunga, utna zyada kamaunga.'",
"Trainee ko keh do ki agar usse motivation nahi hai to training chhod de, kyunki program sirf serious logon ke liye hai.",
"Money ki baat hi avoid karo kyunki yeh ek sensitive topic hai aur trainer ko sirf skill par focus karna chahiye, motivation candidate ka apna kaam hai.",
],
correct:1,
reasons:[
"Galat hai — bina real example ke sirf bade numbers ka lalach dena vague motivation hai, jabki document specifically 'real example se samjhao' bolta hai, generic lalach nahi.",
"Sahi hai — yeh exactly Money Motivation Framework hai: real example (1 booking ka impact), career growth path, aur ise professional ambition ki tarah frame karna, greed nahi. Yeh document ka locked approach hai.",
"Galat hai — turant nikaal dene ki dhamki dena Culture-First Policy ke against hai jo respect aur coachability ko priority deta hai; demotivation ek addressable moment hai, disqualification trigger nahi.",
"Galat hai — Money Motivation Framework ek dedicated section hai jo specifically batata hai ki money conversation avoid nahi karni, balki healthy ambition ki tarah address karni chahiye."
]
},

{
tag:"Trainer Ownership Model",
q:"Ek trainee Sunday shadow day par ek senior Team Leader ke saath tha jo apna khud ka alag negotiation style use karta hai jo trainer ke sikhaye gaye 'value before price' approach se thoda different hai. Trainee confuse hoke Monday ko trainer se pooch raha hai 'TL alag tarike se karte hain, main kiska follow karun?'. Trainer Ownership Model ke hisaab se sahi response kya hai?",
opts:[
"Trainee ko bol do ki TL galat hain aur unka style follow na kare, taaki confusion turant khatam ho jaye.",
"Trainee ko yaad dilao ki pehle 30 dino mein wo trainer ke method par train ho raha hai — Sunday shadow ka purpose sirf observe karna hai, floor-gossip ya conflicting styles adopt karna nahi. Usse encourage karo ki abhi apne core framework par focus kare aur deployment ke baad exposure ke through apni style develop kare.",
"Trainee ko dono styles ek saath mix karke use karne ko bolo, jo bhi customer ke saamne better lage.",
"Is confusion ko ignore kar do kyunki trainee ko khud hi apna raasta dhoondhna chahiye, trainer ka role sirf skills sikhana hai, mindset clarity dena nahi.",
],
correct:1,
reasons:[
"Galat hai — TL ki personal criticism karna unprofessional hai aur Culture-First Policy (respect seniors ke saath) ke against hai; conflict create karta hai jahan clarity chahiye thi.",
"Sahi hai — yeh exactly Trainer Ownership Model ka principle hai: 'Trainee ko Team Leaders, sales teams ya doosre employees ke positive/negative influence se minimize rakho... 30 din candidate mentally neutral aur coachable rahe.' Trainer Tip section specifically Sunday shadow ke context mein yehi guidance deta hai.",
"Galat hai — do alag frameworks ko bina structure ke mix karna trainee ko aur zyada confuse karega; 30 dino ka poora purpose hi ek consistent, structured method establish karna hai.",
"Galat hai — Trainer Ownership Model explicitly kehta hai ki mindset, discipline aur performance sab trainer ki zimmedari hai pehle 30 dino mein — is confusion ko address karna trainer ka hi kaam hai."
]
},

{
tag:"Self-Learning Framework",
q:"Ek candidate ek project ke bare mein ek specific technical sawaal (jaise ek particular clause ya approval status) ka jawaab nahi jaanta aur seedha trainer ke paas bhaag ke pooch leta hai bina khud kuch try kiye. Self-Learning Framework ke hisaab se sahi process kya hona chahiye tha?",
opts:[
"Trainer ke paas seedha jaana hi sahi hai, kyunki trainer hi sabse fast aur accurate source hai jawaab ka.",
"Pehle khud project docs, RERA site, ya builder team se sahi sawaal poochh kar answer dhoondne ki koshish karni chahiye thi (how to find answers), aur agar phir bhi stuck ho to problem ko likh kar 3 possible solutions sochne chahiye the, best chunkar test karna chahiye tha — trainer ke paas last resort ki tarah jaana chahiye, pehla step nahi.",
"Candidate ko sawaal hi nahi poochna chahiye tha, kyunki curiosity sirf Day 1 ke liye encourage ki jaati hai.",
"AI tool se seedha jawaab le lena chahiye tha aur usse bina verify kiye customer ko bata dena chahiye tha, kyunki AI fast hai.",
],
correct:1,
reasons:[
"Galat hai — Self-Learning Framework ka poora purpose hi hai 'independent thinking' develop karna taaki deployment ke baad trainee har sawaal ke liye trainer/TL/manager par depend na kare. Seedha trainer ke paas jaana is goal ke against hai.",
"Sahi hai — yeh exactly document ka self-learning process hai: how to find answers (project docs, RERA site, builder team), phir how to solve (likho, 3 solutions socho, best chuno, test karo). Trainer last resort hai, pehla step nahi.",
"Galat hai — Daily 'new questions' habit specifically Day 1 se shuru hoke 'badhte hue' hai — curiosity poore program mein encourage ki jaati hai, sirf Day 1 tak limit nahi.",
"Galat hai — AI Enablement Module explicitly warn karta hai: 'AI hallucinate karta hai — har factual cheez (price, RERA, possession) official source se confirm karo. AI prep ke liye hai, final truth ke liye nahi.' Bina verify kiye customer ko batana risky hai."
]
},

{
tag:"Daily Rhythm Discipline",
q:"Ek din calling target zyada hone ki wajah se ek candidate voice warmup skip karke seedha calling shuru kar deta hai, yeh soch kar ki '15 minute bachaunga to zyada calls kar paunga'. Trainer ko is decision ka assessment karna hai.",
opts:[
"Yeh ek smart time-management decision hai, kyunki 15 extra minute se 2-3 extra calls ho sakti hain, jo overall target ke liye better hai.",
"Yeh ek counter-productive decision hai — document specifically warn karta hai ki 'bina warmup ki pehli 10 calls flat, low-energy aur unclear hoti hain — yahi calls best leads par waste ho jaati hain.' 15 minute bachana lekin usse zyada value (best leads) khona ek bura trade hai; warmup ko non-negotiable rakhna chahiye.",
"Warmup sirf Day 1 ke fresher ke liye zaroori hai, experienced candidates ise skip kar sakte hain.",
"Candidate ko boht bada mistake maan kar us din ki saari calling cancel kar deni chahiye as punishment.",
],
correct:1,
reasons:[
"Galat hai — yeh short-term thinking hai jo call quality par long-term nuksaan ignore karta hai. Time bachana calls ki quality girne se zyada mehnga pad sakta hai agar best leads flat calls mein waste ho jayein.",
"Sahi hai — yeh exactly document ki warning hai jo Voice Modulation Mastery section mein di gayi hai. Warmup mandatory isliye hai kyunki uska impact sabse important calls (din ki pehli calls, jo aksar best leads hoti hain) par sabse zyada padta hai.",
"Galat hai — document mein warmup 'har din calling se pehle MANDATORY' bataya gaya hai, bina kisi experience-based exception ke — yeh sabke liye same hai.",
"Galat hai — poori calling cancel karna ek overreaction hai; sahi correction hai ki agle din se warmup restore kiya jaye, punishment culture-first approach (respectfully fix karna, sharminda na karna) ke against hai."
]
},

{
tag:"Confidence Development",
q:"Ek candidate ne ek tough objection ko achhe se handle kiya aur visit bhi lock ki. Trainer ko iske baad kaisa feedback dena chahiye Confidence Development System ke hisaab se?",
opts:[
"Sirf generic praise do jaise 'bahut achha kiya, great job!' bina specific detail ke, taaki candidate ka mood achha rahe.",
"Us specific win ko naam se identify karo — jaise 'dekha, objection ke baad bhi tumne visit lock ki' — taaki candidate ko concrete evidence mile apni improvement ka, na ki sirf generic tareef.",
"Kuch mat bolo, kyunki achha performance khud-ba-khud candidate ko pata chal jayega bina kisi feedback ke.",
"Candidate ko bata do ki yeh ek fluke tha aur agli baar utna achha nahi ho sakta, taaki wo overconfident na ho jaye.",
],
correct:1,
reasons:[
"Galat hai — Coach Note specifically kehta hai 'Confidence reps se build karo, khali praise se nahi.' Generic praise ('great job') specific evidence nahi deta jo real confidence banata hai.",
"Sahi hai — yeh exact method hai jo document mein diya gaya hai: 'Har successful rep ke baad us specific win ko NAME karo... Real evidence se confidence pakka hota hai, hawa-hawai tareef se nahi.'",
"Galat hai — Confidence Development System ek measurable, active process hai (win journaling, public mini-pitch, etc.) — silent rehna is active reinforcement process ko skip karta hai.",
"Galat hai — yeh candidate ki genuine achievement ko undermine karta hai aur unnecessarily negative hai; Culture-First Policy positive, respectful reinforcement ko encourage karta hai, achievements ko discount karna nahi."
]
},

{
tag:"Owner Reporting System",
q:"Ek candidate ke skill scores (voice, calling, objection handling) sab consistently 4-5/5 hain, lekin uska 'Attitude & Culture Score' pichle 3 din se dheere-dheere 4 se 3 aur ab 2 tak gir raha hai — chhoti-chhoti disrespectful comments senior team members ke baare mein. Trainer ko yeh kaise report karna chahiye?",
opts:[
"Kyunki skill scores strong hain, attitude ke chhote fluctuations ko report mein highlight na karo, sirf overall positive summary do taaki owner ka focus achhi cheezon par rahe.",
"Attitude & Culture Score ko clearly declining trend ke saath owner report mein flag karo, kyunki document specifically kehta hai 'Attitude & Culture Score ko number par lena zaroori hai — skill toh dikh jaata hai, par attitude problems jaldi nahi dikhte aur deployment ke baad mehnga padte hain. Owner ko early signal chahiye.'",
"Attitude score ko manually 4 kar do taaki overall average achha dikhe aur owner ko extra worry na ho.",
"Is issue ko trainer khud hi handle kar le, bina owner ko bataye, kyunki yeh ek 'training-level' issue hai jo owner-level nahi hai.",
],
correct:1,
reasons:[
"Galat hai — sirf positive summary dena ek real, early-stage risk ko chhupana hai. Owner Reporting System ka poora purpose hi hai ki owner ko risk jaldi pakadne dena, na ki sirf achhi khabar dena.",
"Sahi hai — yeh document ka exact reasoning hai jo Owner Reporting section mein diya gaya hai. Attitude problems skill se zyada important hain track karne ke liye kyunki wo late-stage mein zyada costly hote hain — early, honest flagging hi sahi approach hai.",
"Galat hai — score manipulate karna reporting system ki poori integrity todta hai aur khud ek honesty/culture violation hai — jo ironically usi 'Attitude & Culture' category mein aata hai jise chhupaya ja raha hai.",
"Galat hai — Daily Owner Report format specifically 'Attitude & Culture Score' ko owner-visible 6 scores mein se ek banata hai; ise trainer-level pe hi rok lena system design ke against hai."
]
},

{
tag:"Mock Calls & Drills",
q:"Trainer ek Tier 3 (difficult) mock call kar raha hai jisme customer persona 'rude/short-tempered' hai. Candidate mock ke dauraan thoda flustered ho jaata hai aur ek moment mein customer ki baat kaat deta hai. Is mock ke baad trainer ko feedback kaise dena chahiye 'How to run a drill' method ke hisaab se?",
opts:[
"Sirf yeh bata do ki 'yeh galat tha' aur mock khatam kar do, agle candidate ki taraf badh jao.",
"1 cheez achhi thi + 2 fixes do (jaise 'tumne composed rehne ki koshish achhi ki, par customer ki baat kaat na karo aur ACER ke Acknowledge step ko pehle poora karo'), phir wahi rep dobara karwao fix ke saath, aur rubric par 1-5 score karo.",
"10-12 cheezein ek saath point out karo taaki candidate ko sab kuch ek baar mein pata chal jaye aur wo sab kuch ek saath improve kar sake.",
"Candidate ko bata do ki wo abhi is level ke liye ready nahi hai aur Tier 3 mocks se hata kar sirf Tier 1 mocks par wapas bhej do.",
],
correct:1,
reasons:[
"Galat hai — 'How to run a drill' method mein specifically 'Correct' step hai: 1 achhi cheez + 2 fixes, phir wahi rep dobara, sirf 'galat tha' bolna is structured correction process ko skip karta hai.",
"Sahi hai — yeh exact universal drill method hai jo document mein diya gaya hai: Correct (1 good + 2 fixes) → Rep dobara with fix → Score (1-5, file karo). Yeh feedback ko actionable aur immediately-practiced banata hai.",
"Galat hai — Trainer Tip explicitly warn karta hai: 'Ek baar mein sirf 2 cheezein theek karwao. Ek saath 10 corrections doge toh sudhaar zero hoga — overload se brain freeze hota hai.'",
"Galat hai — ek mock mein flustered hona normal learning curve hai; turant Tier 3 se hata dena progressive difficulty design (jo Day 16-30 ke liye specifically banaya gaya hai) ko premature judgment se todta hai."
]
},

{
tag:"Recording Analysis / Video Feedback",
q:"Ek candidate apni recorded call sunne se hichkichata hai aur kehta hai 'mujhe pata hai maine kya bola, sunne ki zaroorat nahi'. Trainer ko Recording Analysis & Video Feedback System ke hisaab se is resistance ko kaise handle karna chahiye?",
opts:[
"Candidate ki baat maan lo aur usse recordings sunne se exempt kar do, kyunki agar usse zaroorat nahi lagti to force karna sahi nahi hai.",
"Explain karo ki 'Log apni galti tab nahi maante jab koi BATATA hai, par turant maan lete hain jab khud DEKHTE hain' — aur ek specific before/after example (jaise Day 1 video vs recent mock) dikhao taaki candidate khud apna transformation evidence dekhe, jo verbal feedback se zyada powerful hai.",
"Candidate ko bol do ki yeh mandatory hai bina kisi reasoning ke, aur agar nahi sunega to uska score kaat diya jayega.",
"Kisi aur candidate ki recording sunwa do jo bahut achhi hai, taaki apni khud ki recording sunne ki zaroorat na pade.",
],
correct:1,
reasons:[
"Galat hai — Homework System aur Recording Analysis dono explicitly daily practice hain ('candidate roz apni 2-3 calls khud sunega'); exempt karna is core mechanism ko hi hata deta hai jo self-improvement drive karta hai.",
"Sahi hai — yeh exact Customer Psychology reasoning hai jo document mein diya gaya hai, aur before/after video approach specifically 'Video Feedback' section mein describe kiya gaya hai jo resistance ko evidence se break karta hai, force se nahi.",
"Galat hai — sirf mandate karna bina reasoning ke resistance ko address nahi karta; document specifically evidence-based approach recommend karta hai jo candidate ko khud convince kare, threat se nahi.",
"Galat hai — doosre ki recording sunna candidate ki apni specific patterns aur fillers ko identify karne mein help nahi karta; self-awareness sirf apni khud ki recording se aati hai."
]
},

{
tag:"Field Training SOP",
q:"Field day par ek under-construction site par candidates hain aur ek area mein safety helmet zone hai. Ek candidate jaldi mein bina helmet ke us area mein customer ko dikhane ke liye ja raha hai kyunki customer waiting hai. Field Training SOP ke hisaab se sahi approach kya hai?",
opts:[
"Customer ko wait na karwane ke liye candidate ko turant helmet zone mein bina helmet jaane do, kyunki customer experience sabse important hai.",
"Safety norms strictly follow karo (helmet zones), chahe usse thoda time lage ya customer thoda wait kare — jaisa document explicitly kehta hai: 'Safety negotiable nahi.' Customer ko bhi politely bata do ki safety protocol follow karna zaroori hai, jo actually professionalism dikhata hai.",
"Candidate ko decide karne do khud, kyunki har candidate apni risk-tolerance samajhta hai.",
"Helmet zone rule ko sirf construction workers ke liye samjho, sales candidates ke liye zaroori nahi.",
],
correct:1,
reasons:[
"Galat hai — Field Training SOP mein explicitly likha hai 'safety norms follow karo (helmet zones)... Safety negotiable nahi.' Customer wait ka concern safety se upar nahi rakha ja sakta.",
"Sahi hai — yeh exact document ka rule hai. Safety compromise na karna hi sahi hai, aur customer ko yeh dikhana ki company protocols follow karti hai actually ek trust-building signal hai, weakness nahi.",
"Galat hai — Field Day SOP mein trainer ki responsibility hai ki 'under-construction area mein candidates ko supervise karo' — yeh individual candidate ke discretion par nahi chhoda gaya hai.",
"Galat hai — helmet zones site-wide safety rule hote hain jo har visitor (sales candidates included) par apply hote hain; specifically construction workers tak limit karna galat assumption hai."
]
},

{
tag:"Sunday Deployment SOP",
q:"Ek Sunday, jab trainer weekly-off par hai, ek candidate ke paas koi customer nahi hai shadow karne ke liye kyunki us din footfall kam hai. Sunday SOP ke hisaab se candidate ko us waqt kya karna chahiye?",
opts:[
"Kuch na karo aur simply wait karo agle customer ke aane tak, kyunki bina customer ke koi productive kaam nahi ho sakta.",
"'When customers NOT available' section follow karo: calling continue karo (practice volume), mock practice pairs mein karo, assignments complete karo (cheat sheets, cost-sheet drills, story memorization), aur recorded/senior calls observe kar ke notes lo.",
"Ghar chale jao kyunki trainer bhi off par hai, isliye din ko half-day treat kiya ja sakta hai.",
"Doston ke saath casual baatcheet karo office mein, kyunki customer na hone se din 'free' ban jaata hai.",
],
correct:1,
reasons:[
"Galat hai — Sunday SOP specifically ek fallback list deta hai jab customers available na hon; wait karna ek missed productive-time opportunity hai.",
"Sahi hai — yeh exact 'When customers NOT available' list hai jo document mein di gayi hai. Sunday peak footfall day hai but jab customer na ho tab bhi structured productivity maintain karni hai.",
"Galat hai — Sunday specifically 'peak footfall = sabse bada exposure day' bataya gaya hai; candidates ke liye yeh training day hai, trainer ka off hona candidate ke commitment ko kam nahi karta.",
"Galat hai — yeh Trainer Ownership Model ke discipline principle ke against hai; Sunday report mein specifically calls/visits/learnings track hone hain, casual time nahi."
]
},

{
tag:"AI Enablement",
q:"Ek candidate ne AI tool se ek customer ke liye objection-response draft banaya, aur usse bina kisi change ke seedha copy-paste karke customer ko WhatsApp kar diya. Trainer ko is practice ka assessment karna hai AI Enablement Module ke hisaab se.",
opts:[
"Yeh perfectly fine hai, kyunki AI ka output already achha likha hota hai aur usme kuch change karne ki zaroorat nahi.",
"Yeh galat practice hai — document specifically kehta hai AI draft banaye, par 'phir use apne words mein adapt kare (copy-paste nahi)' aur factual cheezein (price, RERA, possession) verify karni chahiye. Trainer ko check karna chahiye ki output 'human' aur honest hai, bina blind copy-paste ke.",
"AI se koi bhi content banana hi galat hai, candidates ko AI use hi nahi karna chahiye.",
"Sirf tab problem hai jab AI galat information de, agar information sahi hai to copy-paste karna theek hai.",
],
correct:1,
reasons:[
"Galat hai — AI drill section explicitly mana karta hai 'copy-paste nahi'; candidate ko output apne words mein adapt karna hai, chahe AI ka content achha bhi ho, kyunki genuine personal touch aur verification zaroori hai.",
"Sahi hai — yeh exact document ka locked guidance hai (AI drill aur Common Mistake section dono): AI output ko adapt karo, factual details verify karo, blind-forward mat karo.",
"Galat hai — AI Enablement Module poora encourage karta hai AI ko 'super-assistant' ki tarah use karna; poora avoid karna is genuine productivity tool ka fayda na uthana hai.",
"Galat hai — yeh sirf factual-correctness ko address karta hai, par 'apne words mein adapt karna' ek alag, equally important requirement hai — taaki communication genuinely candidate ki apni aur natural lage, generic AI-tone na lage."
]
},

{
tag:"Location Mastery",
q:"Ek customer pooch raha hai 'yeh location kaisi hai, connectivity kaisi hai?' Candidate distance batata hai kilometre mein — 'Hinjewadi 18 km hai, airport 32 km hai' — aur customer thoda confuse aur unimpressed lagta hai. Location Mastery System ke hisaab se yeh response kyun weak thi aur behtar approach kya hai?",
opts:[
"Response bilkul sahi thi, kilometre ek accurate aur professional unit hai distance batane ke liye, customer ko khud calculate kar lena chahiye ki kitna time lagega.",
"Distance ko kilometre ke bajaye minutes mein batana chahiye tha (jaise 'Hinjewadi 15 min', 'airport 25 min'), kyunki Location Mastery System explicitly kehta hai 'customer time mein sochta hai, kilometre mein nahi' — aur poori narrative bhi connectivity → employment → lifestyle → future growth ek story ki tarah flow honi chahiye thi, sirf ek number ki tarah nahi.",
"Candidate ko location ke baare mein kuch bhi nahi batana chahiye tha kyunki yeh Sales Manager ka kaam hai, calling stage par nahi.",
"Kilometre ke saath thoda zyada precise number dena chahiye tha, jaise '18.3 km', taaki customer ko lage ki candidate ko exact details pata hain."
],
correct:1,
reasons:[
"Galat hai — document specifically is exact practice (km mein batana) ko sub-optimal maanta hai; Pro Tip section clearly kehta hai time-based framing zyada relatable hai kyunki customer apni daily life mein commute time mein sochta hai, distance mein nahi.",
"Sahi hai — yeh exact Location Mastery System ka Pro Tip hai. Minutes format zyada relatable hai, aur 60-second location pitch drill bhi specifically ek narrative flow (connectivity → employment → lifestyle → future growth, ek story ke saath) sikhata hai, isolated numbers nahi.",
"Galat hai — Location Mastery ek core Customer Journey Drill hai jo calling aur site-visit dono stages mein candidate ki hi responsibility hai; ise SM tak defer karna ek core skill-gap ko avoid karna hai.",
"Galat hai — extra precision (18.3 km) asal problem ko solve nahi karta; problem unit ka hai (km vs minutes), precision ka nahi. Customer ko phir bhi khud calculate karna padega ki actual commute time kya hoga."
]
},

{
tag:"Communication Development",
q:"Ek candidate customer se baat karte waqt bar-bar 'bhai' aur 'boss' jaise informal words use kar raha hai, yeh soch kar ki isse customer ke saath jaldi comfort ban jayega aur baat casual/friendly lagegi. Communication Development Program ke professional language rules ke hisaab se is approach ka assessment kya hai?",
opts:[
"Yeh sahi approach hai kyunki informal language se rapport jaldi banta hai aur customer ko lagta hai candidate genuine aur down-to-earth hai.",
"Yeh galat hai — Professional language rules mein explicitly likha hai 'Slang/over-familiarity avoid karo (bhai, boss customer ke saath nahi)'. Rapport banane ka sahi tareeka hai Sir/Ma'am, please/thank you jaise professional greetings ke saath genuine personal interest dikhana (hometown, family, profession poochna), na ki informal slang use karna.",
"Yeh sirf tab galat hai jab customer khud formal ho; agar customer khud casual bol raha hai to 'bhai/boss' bolna theek hai.",
"Candidate ko is baare mein kuch bhi change karne ki zaroorat nahi hai jab tak deal close ho rahi hai — language style se result par koi farak nahi padta."
],
correct:1,
reasons:[
"Galat hai — yeh document ke explicit professional language rule ke against hai. Rapport aur informality do alag cheezein hain — rapport genuine interest se banta hai, slang se professional image kamzor hoti hai, khaas taur par multi-crore decisions ke context mein.",
"Sahi hai — yeh exact rule hai jo Communication Development Program mein diya gaya hai. Warmth 'mirroring' (pace/energy match karna) se aata hai, informal slang se nahi — dono alag concepts hain jo document mein clearly differentiate kiye gaye hain.",
"Galat hai — professional language rule customer ke apne tone se independent hai; candidate ko hamesha Sir/Ma'am aur professional register maintain karna hai regardless of customer's casualness, taaki multi-crore decision ke liye appropriate trust-signal bane.",
"Galat hai — Grooming section ki tarah hi, pehli impression aur ongoing professional tone dono trust build karte hain. Language style directly customer ke perception ko affect karta hai ki candidate kitna credible/trustworthy hai."
]
}

];
