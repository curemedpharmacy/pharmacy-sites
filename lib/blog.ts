// Blog article data + typed content blocks.
// Follows the same data-driven pattern as lib/services.ts.

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title?: string; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string; // ISO date
  readTime: string;
  image: string;
  imageAlt: string;
  content: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "stopping-antibiotics-early-vs-finishing-the-course",
    title:
      "Stopping Antibiotics Early Feels Responsible. It's Actually the Opposite.",
    excerpt:
      "For decades we were told to finish every pill. The randomized evidence now points the other way: the responsible course is usually the shortest effective one.",
    category: "Medication Support",
    author: "CureMed Pharmacy Team",
    publishedAt: "2025-09-02",
    readTime: "8 min read",
    image: "/images/blog/antibiotics-course-length.png",
    imageAlt:
      "A partially used blister pack of white antibiotic tablets beside an amber prescription pill bottle on a neutral clinical surface.",
    content: [
      {
        type: "paragraph",
        text: "For decades, patients and clinicians alike absorbed a single rule about antibiotics: finish every pill, even after you feel better, because stopping early breeds resistance. The instinct behind it is decent. But the science underneath it has quietly collapsed. The uncomfortable truth is that the \"responsible\" instinct to keep taking antibiotics longer is often the one driving the harm we were trying to prevent.",
      },
      {
        type: "paragraph",
        text: "The real question was never \"did you finish the bottle?\" It was \"was the bottle the right size in the first place?\"",
      },
      { type: "heading", text: "Where the \"finish the course\" rule came from" },
      {
        type: "paragraph",
        text: "The idea traces back to the dawn of the antibiotic era, when the concern was that undertreatment might leave surviving bacteria to regroup. It became gospel long before it was tested. What it was never based on was randomized evidence that longer courses actually prevent resistance. Over the past 25 years, that evidence has arrived — and it points the other way. More than 120 randomized controlled trials have now compared shorter versus longer courses for common bacterial infections, and short courses have proven non-inferior for community-acquired pneumonia, complicated urinary tract infection in women, gram-negative bloodstream infection, and skin and soft-tissue infection, provided the diagnosis is correct, the drug is appropriate, and the patient is improving (Lee et al., Clinical Microbiology and Infection, 2023).",
      },
      { type: "heading", text: "Every extra day carries a cost" },
      {
        type: "paragraph",
        text: "The reframing that matters is this: an antibiotic is not a vitamin you take until the bottle is empty. It is a drug with a dose-dependent downside. An umbrella review pooling 35 systematic reviews and 71 randomized trials found that each additional day of antibiotic therapy was associated with roughly a 4% increase in the odds of an adverse drug event (Curran et al., Clinical Microbiology and Infection, 2022). Longer courses mean more Clostridioides difficile infection, more disruption of the protective gut microbiota, more superinfection, and more selection pressure for resistant organisms — precisely the outcome the old mantra invoked. The 2025 Infectious Diseases Society of America guideline on complicated UTI states plainly that the risks of superinfection and resistance rise substantially with extended duration, and that reducing therapy to the shortest effective course is central to antibiotic stewardship (Trautner et al., IDSA, 2025).",
      },
      {
        type: "paragraph",
        text: "Resistance, in particular, is not primarily prevented by long courses; it is fed by them. A modelling study and meta-analysis estimated that a single additional day of treatment was associated with roughly a 7% absolute increase in the risk of carrying resistant gram-negative bacteria (Mo et al., PLoS Medicine, 2023). The prolonged antibiotic exposure that \"finishing the course\" was meant to justify is itself a driver of the resistant flora we fear.",
      },
      {
        type: "heading",
        text: "The evidence for \"shorter is better,\" infection by infection",
      },
      {
        type: "paragraph",
        text: "The shift is not a fringe position; it is increasingly the guideline-concordant one:",
      },
      {
        type: "list",
        items: [
          "Bloodstream infection: In the BALANCE trial, 7 days of antibiotics was non-inferior to 14 days for mortality in hospitalized, largely critically ill patients with bacteremia — overturning the traditional default of two weeks or longer (BALANCE Investigators, New England Journal of Medicine, 2025).",
          "Community-acquired pneumonia: An umbrella review found moderate-quality evidence that 5 days is clinically non-inferior to longer courses outside the ICU (Kuijpers et al., Lancet Infectious Diseases, 2025).",
          "COPD exacerbations: Shorter courses of 3–6 days were consistently non-inferior to longer ones, with similar or fewer adverse events (Kuijpers et al., Lancet Infectious Diseases, 2025).",
          "UTI in men: A randomized trial found 7 days non-inferior to 14 days for symptom resolution in afebrile men — a group long treated for two weeks or more by convention (Drekonja et al., JAMA, 2021).",
          "Osteomyelitis: Six weeks suffices in the absence of retained hardware, where far longer courses were once routine (Lee et al., Clinical Microbiology and Infection, 2023).",
        ],
      },
      {
        type: "paragraph",
        text: "Real-world data reinforce that longer is not safer. In an analysis of 4 million primary-care infection episodes in England, longer courses were no more effective than shorter ones at preventing infection-related hospitalization, and most such hospitalizations actually occurred among patients who had received the longer prescriptions (Palin et al., Clinical Infectious Diseases, 2021).",
      },
      { type: "heading", text: "So why does the old advice persist?" },
      {
        type: "paragraph",
        text: "Partly habit, partly a mismatch between what guidelines recommend and what gets prescribed. In English primary care, 80% or more of antibiotic courses for upper respiratory infections and acute bronchitis exceeded the recommended duration, amounting to roughly 1.3 million unnecessary antibiotic-days across the indications studied (Pouwels et al., BMJ, 2019). The default course is frequently too long before the patient ever opens the bottle — which is exactly why \"just finish it\" quietly perpetuates overuse.",
      },
      { type: "heading", text: "The important caveats" },
      {
        type: "paragraph",
        text: "None of this licenses patients to stop antibiotics whenever they feel better, and it does not mean \"shorter is always better.\" The trial evidence applies when the diagnosis is correct, the right drug is chosen, and the patient is clinically improving. Some infections still genuinely require prolonged therapy, and evidence is still thin or absent for certain populations — non-ventilator hospital-acquired pneumonia and medically complex patients among them (Kuijpers et al., Lancet Infectious Diseases, 2025). Short-course penicillin dosed three times daily for streptococcal pharyngitis, for instance, is not supported the way short-course cephalosporins are. The point is not for patients to self-shorten unilaterally, but for the prescribed duration to be as short as the evidence allows from the outset — and for patients to complete that appropriately short, individualized course.",
      },
      { type: "heading", text: "The bottom line" },
      {
        type: "paragraph",
        text: "The genuinely responsible act is not blindly finishing an arbitrarily long course. It is a prescriber choosing the shortest effective, guideline-concordant duration, and a patient completing exactly that. \"Finish every last pill\" was a well-meant rule built on an untested assumption. The evidence now says that when it comes to antibiotics, the responsible amount is usually less than we were taught — and treating longer \"just to be safe\" is the option that carries the real risk.",
      },
      {
        type: "callout",
        title: "Talk to your pharmacist",
        text: "This article is for general education and is not a substitute for personalized medical advice. Never start, stop, or change an antibiotic on your own — ask your prescriber or a CureMed pharmacist about the shortest effective course for your specific infection.",
      },
    ],
  },
  {
    slug: "weight-loss-injections-paterson-what-to-ask",
    title: "Weight Loss Injections in Paterson: What to Ask Before You Start",
    excerpt:
      "Weight-loss injections can produce meaningful, sustained results, but they are not right for everyone. Here are the questions to ask so you get safe, effective care.",
    category: "Weight Management",
    author: "CureMed Pharmacy Team",
    publishedAt: "2025-08-27",
    readTime: "9 min read",
    image: "/images/blog/weight-loss-injections-paterson.png",
    imageAlt:
      "A weekly GLP-1 weight-loss injection pen resting on a neutral clinical surface beside a measuring tape and a glass of water.",
    content: [
      {
        type: "paragraph",
        text: "Weight-loss injections have become one of the most talked-about options for people struggling with excess weight in Paterson and across New Jersey. These prescription medications can produce meaningful, sustained weight loss, but they are not right for everyone. If you are considering starting, going in with the right questions helps you get safe, effective care.",
      },
      { type: "heading", text: "What are weight-loss injections?" },
      {
        type: "paragraph",
        text: "The injectable medications approved for chronic weight management belong to a class called nutrient-stimulated hormone therapies. They mimic gut hormones that reduce appetite, increase fullness, and slow how quickly the stomach empties. The main options include:",
      },
      {
        type: "list",
        items: [
          "Semaglutide (Wegovy) – a once-weekly GLP-1 injection. In clinical trials, average total weight loss was roughly 15% over 68 weeks.",
          "Tirzepatide (Zepbound) – a once-weekly injection that works on two hormone receptors (GIP and GLP-1). Average weight loss reached approximately 15–21% over 72 weeks, the highest among current options.",
          "Liraglutide (Saxenda) – a once-daily GLP-1 injection with more modest average weight loss (around 5–8%).",
        ],
      },
      {
        type: "paragraph",
        text: "Ozempic and Mounjaro contain the same active ingredients (semaglutide and tirzepatide) but are FDA-approved for type 2 diabetes rather than weight loss; they are sometimes used off-label. Oral options also now exist, including oral semaglutide (Wegovy) and orforglipron (Foundayo).",
      },
      { type: "heading", text: "Am I a candidate?" },
      {
        type: "paragraph",
        text: "These medications are approved as an add-on to a reduced-calorie diet and increased physical activity for adults with:",
      },
      {
        type: "list",
        items: [
          "A body mass index (BMI) of 30 or higher (obesity), or",
          "A BMI of 27 or higher (overweight) plus a weight-related condition such as high blood pressure, type 2 diabetes, high cholesterol, obstructive sleep apnea, or heart disease.",
        ],
      },
      {
        type: "paragraph",
        text: "Major medical organizations, including the American College of Physicians, now list semaglutide and tirzepatide as first-line injectable choices for these patients.",
      },
      { type: "heading", text: "Questions to ask before you start" },
      {
        type: "paragraph",
        text: "1. Which medication is right for me, and why? Ask how your provider chose a specific drug based on your weight-loss goals, other health conditions, insurance coverage, and cost.",
      },
      {
        type: "paragraph",
        text: "2. Do I have any conditions that make these unsafe? Tell your provider if you or a family member has a history of medullary thyroid cancer or the genetic syndrome MEN2 — these are contraindications to GLP-1 and GIP/GLP-1 injections. Also disclose any history of pancreatitis, gallbladder disease, severe gastrointestinal disease or gastroparesis, kidney problems, eating disorders, or depression and suicidal thoughts.",
      },
      {
        type: "paragraph",
        text: "3. Could I be pregnant, or am I planning pregnancy? These medications are not used during pregnancy or breastfeeding. Because they can slow stomach emptying, they may also reduce the effectiveness of oral birth control, so a backup method may be recommended.",
      },
      {
        type: "paragraph",
        text: "4. What side effects should I expect? The most common effects are gastrointestinal — nausea, vomiting, diarrhea, and constipation. These are usually mild to moderate and often ease over time, especially when the dose is increased slowly. Ask what to do if side effects become hard to tolerate.",
      },
      {
        type: "paragraph",
        text: "5. How does the dose get adjusted? These drugs are started at a low dose and gradually increased over several months. Ask about the titration schedule, how injections are given, and how to store your pen.",
      },
      {
        type: "paragraph",
        text: "6. What follow-up and monitoring will I need? Expect regular visits to check your weight, blood pressure, heart rate, and response. If you have diabetes and take insulin or a sulfonylurea, your provider may lower those doses to avoid low blood sugar.",
      },
      {
        type: "paragraph",
        text: "7. What happens if the medication isn't working? A general benchmark is meaningful weight loss within the first few months. Ask what response is expected and when a change in strategy would be considered.",
      },
      {
        type: "paragraph",
        text: "8. What if I stop taking it? Obesity is a chronic condition, and weight regain is common after stopping. Ask about the long-term plan and whether the medication is intended for ongoing use.",
      },
      {
        type: "paragraph",
        text: "9. What are the warning signs to watch for? Seek care for severe or persistent abdominal pain (possible pancreatitis or gallbladder problems), signs of an allergic reaction, or new or worsening mood changes or thoughts of self-harm.",
      },
      { type: "heading", text: "Beware of unregulated \"weight-loss shots\"" },
      {
        type: "paragraph",
        text: "Some med spas and online sellers offer compounded or non-FDA-approved injectable products. Ask whether you are receiving an FDA-approved, brand-name medication prescribed and supervised by a licensed clinician. Avoid products of uncertain source, dose, or purity.",
      },
      { type: "heading", text: "The bottom line" },
      {
        type: "paragraph",
        text: "Weight-loss injections can be highly effective, but they work best as part of a supervised plan that includes nutrition, physical activity, and regular follow-up. Coming to your first appointment in Paterson with these questions helps you and your provider decide whether an injectable medication is a safe and worthwhile option for you.",
      },
      {
        type: "callout",
        text: "This article is for general education and is not a substitute for personalized medical advice. Talk with a qualified healthcare provider before starting any weight-loss medication.",
      },
    ],
  },
  {
    slug: "glp-1-medications-explained",
    title: "GLP-1 Medications Explained: What They Do and Who They're For",
    excerpt:
      "A clear, patient-friendly guide to how GLP-1 medications work, the conditions they treat, the options available, and how to know if one is right for you.",
    category: "Medication Support",
    author: "CureMed Pharmacy Team",
    publishedAt: "2025-06-02",
    readTime: "8 min read",
    image: "/images/blog/glp1-medications-explained.png",
    imageAlt:
      "A GLP-1 injection pen and medication vials arranged on a neutral surface with a stethoscope.",
    content: [
      { type: "heading", text: "What Are GLP-1 Medications?" },
      {
        type: "paragraph",
        text: "GLP-1 medications — also called GLP-1 receptor agonists — are a class of drugs that mimic a natural gut hormone called glucagon-like peptide-1 (GLP-1). After you eat, your body releases GLP-1 to help control blood sugar. These medications copy that effect, but in a stronger and longer-lasting way.",
      },
      {
        type: "paragraph",
        text: "GLP-1 medications were first approved in 2005 for type 2 diabetes. Since then, they have become some of the most widely prescribed treatments for both diabetes and obesity, with expanding uses across many other conditions.",
      },
      { type: "heading", text: "How Do GLP-1 Medications Work?" },
      {
        type: "paragraph",
        text: "GLP-1 medications work through several pathways at once:",
      },
      {
        type: "list",
        items: [
          "Increase insulin release: They signal the pancreas to produce more insulin when blood sugar is high, which helps lower blood sugar after meals.",
          "Reduce glucagon: They suppress glucagon, a hormone that raises blood sugar, reducing excess sugar production by the liver.",
          "Slow stomach emptying: They slow the rate at which food leaves the stomach, which reduces blood sugar spikes after eating and helps you feel full longer.",
          "Reduce appetite: They act on areas of the brain that control hunger and satiety, helping you eat less and feel satisfied sooner.",
        ],
      },
      {
        type: "callout",
        text: "Because these medications only increase insulin when blood sugar is elevated, they carry a low risk of causing dangerously low blood sugar (hypoglycemia) on their own.",
      },
      { type: "heading", text: "Who Are GLP-1 Medications For?" },
      {
        type: "paragraph",
        text: "GLP-1 medications are FDA-approved for several conditions:",
      },
      {
        type: "list",
        items: [
          "Type 2 diabetes: To improve blood sugar control as an add-on to diet and exercise. Several agents (semaglutide, dulaglutide, liraglutide, exenatide, lixisenatide, and tirzepatide) are approved for this use.",
          "Obesity and overweight: For long-term weight management in adults (and some adolescents aged 12 and older) with obesity, or overweight with at least one weight-related health condition such as high blood pressure, high cholesterol, or type 2 diabetes. Approved agents include semaglutide (Wegovy), tirzepatide (Zepbound), liraglutide (Saxenda), and orforglipron (Foundayo).",
          "Cardiovascular risk reduction: Semaglutide (Wegovy) is approved to reduce the risk of heart attack, stroke, and cardiovascular death in adults with obesity or overweight and established heart disease. Several diabetes-indicated GLP-1 agents also reduce cardiovascular risk in people with type 2 diabetes.",
          "Chronic kidney disease: Semaglutide (Ozempic) is approved to reduce the risk of kidney function decline and cardiovascular death in adults with type 2 diabetes and chronic kidney disease.",
          "Obstructive sleep apnea: Tirzepatide (Zepbound) is approved for moderate to severe obstructive sleep apnea in adults with obesity.",
          "Liver disease (MASH): Semaglutide (Wegovy) is approved under accelerated approval for metabolic dysfunction-associated steatohepatitis (MASH) with moderate to advanced liver scarring.",
        ],
      },
      { type: "heading", text: "What GLP-1 Medications Are Available?" },
      {
        type: "paragraph",
        text: "Several GLP-1 medications are currently available, differing in how they are taken and how often:",
      },
      {
        type: "list",
        items: [
          "Semaglutide (Ozempic): Weekly injection for type 2 diabetes, cardiovascular risk, and kidney disease.",
          "Semaglutide (Wegovy): Weekly injection or daily oral tablet for weight management, cardiovascular risk reduction, and MASH.",
          "Semaglutide (Rybelsus): Daily oral capsule for type 2 diabetes.",
          "Tirzepatide (Mounjaro): Weekly injection for type 2 diabetes. Tirzepatide is a \"dual agonist\" that activates both GLP-1 and GIP receptors.",
          "Tirzepatide (Zepbound): Weekly injection for weight management and obstructive sleep apnea.",
          "Liraglutide (Victoza/Saxenda): Daily injection for type 2 diabetes (Victoza) or weight management (Saxenda).",
          "Dulaglutide (Trulicity): Weekly injection for type 2 diabetes and cardiovascular risk reduction.",
          "Exenatide (Byetta/Bydureon): Twice-daily or weekly injection for type 2 diabetes.",
          "Orforglipron (Foundayo): Daily oral tablet for weight management — one of the newer oral GLP-1 options.",
        ],
      },
      { type: "heading", text: "What Results Can You Expect?" },
      {
        type: "paragraph",
        text: "GLP-1 medications have helped millions of people take control of their health. While everyone's journey is different, many patients experience:",
      },
      {
        type: "list",
        items: [
          "Better blood sugar control for people with type 2 diabetes",
          "Reduced appetite and fewer cravings, making it easier to eat less without feeling deprived",
          "Meaningful weight loss when combined with healthy lifestyle changes",
          "Additional health benefits, including improved heart health and protection for the kidneys in certain patients",
        ],
      },
      {
        type: "paragraph",
        text: "Many people begin noticing changes within the first few weeks, with the best results developing over several months as the medication is gradually increased to the right dose.",
      },
      { type: "heading", text: "Are There Any Side Effects?" },
      {
        type: "paragraph",
        text: "Like any medication, GLP-1 treatments can have side effects. The good news is that most are mild and improve as your body adjusts. The most common side effects include:",
      },
      {
        type: "list",
        items: [
          "Mild nausea",
          "Upset stomach",
          "Diarrhea or constipation",
          "Occasional vomiting",
          "Temporary stomach discomfort",
        ],
      },
      {
        type: "paragraph",
        text: "Starting with a low dose and increasing it slowly helps minimize these symptoms. These medications aren't right for everyone, which is why it's important to have a medical evaluation before starting treatment. Your provider will review your medical history, current medications, and health goals to determine whether a GLP-1 medication is a safe and effective option for you.",
      },
      { type: "heading", text: "The Future of Weight Management" },
      {
        type: "paragraph",
        text: "GLP-1 medications are changing the way we treat obesity and metabolic disease. Researchers continue to discover new benefits, and even more advanced treatments are being developed to help patients lose weight, improve overall health, and reduce the risk of chronic diseases.",
      },
      { type: "heading", text: "Is a GLP-1 Medication Right for You?" },
      {
        type: "paragraph",
        text: "If you've struggled to lose weight, manage type 2 diabetes, or improve your overall metabolic health, GLP-1 therapy may be worth exploring. Every patient is different. The best treatment plan starts with a personalized consultation where we review your medical history, discuss your goals, and recommend the option that's right for you.",
      },
      {
        type: "callout",
        title: "Ready to Take the Next Step?",
        text: "Don't guess whether a GLP-1 medication is right for you — get expert guidance from a healthcare provider. Schedule your consultation today to discuss your weight loss or diabetes management goals, learn about your treatment options, and receive a personalized care plan designed specifically for you.",
      },
    ],
  },
  {
    slug: "managing-glp-1-side-effects",
    title: "Managing GLP-1 Side Effects: A Pharmacist's Practical Guide",
    excerpt:
      "A practical, pharmacist-focused reference covering the most common GLP-1 side effects, titration strategy, red-flag symptoms, key drug interactions, and counseling points.",
    category: "Medication Support",
    author: "CureMed Pharmacy Team",
    publishedAt: "2025-06-18",
    readTime: "11 min read",
    image: "/images/blog/managing-glp1-side-effects.png",
    imageAlt:
      "A pharmacist in a white coat counseling a patient across a pharmacy counter.",
    content: [
      {
        type: "paragraph",
        text: "GLP-1 receptor agonists (GLP-1 RAs) — including semaglutide, tirzepatide, liraglutide, dulaglutide, and exenatide — are among the most widely prescribed medications for type 2 diabetes and obesity. While highly effective, an estimated 40% to 70% of patients experience gastrointestinal side effects, making pharmacist counseling essential for promoting adherence and ensuring patient safety.",
      },
      {
        type: "paragraph",
        text: "This guide covers the most common and clinically important side effects, practical management strategies, key drug interactions, and critical counseling points.",
      },
      { type: "heading", text: "Understanding Why Side Effects Occur" },
      {
        type: "paragraph",
        text: "GLP-1 RAs work partly by slowing gastric emptying and acting on brain centers that regulate appetite. These same mechanisms are responsible for most side effects. Importantly, side effects are dose-dependent — they are most common during initiation and dose escalation, and typically improve as the body adjusts.",
      },
      { type: "heading", text: "Gastrointestinal Side Effects: The Most Common Challenge" },
      {
        type: "paragraph",
        text: "GI symptoms are the primary reason patients discontinue GLP-1 therapy. Here is how to recognize and manage each one.",
      },
      {
        type: "callout",
        title: "Nausea",
        text: "The most frequent side effect, often worse in the morning or after prolonged fasting. Patients can get caught in a cycle: nausea leads to not eating, which worsens the nausea.",
      },
      {
        type: "list",
        items: [
          "Eat a small breakfast, then small meals every 3–4 hours",
          "Avoid fatty, fried, or overly sweet foods",
          "Stay well hydrated",
          "Try ginger or peppermint tea, or acupressure wristbands",
          "If medication is needed, prochlorperazine is preferred over ondansetron (which can worsen constipation)",
        ],
      },
      {
        type: "callout",
        title: "Vomiting",
        text: "More likely after large or high-fat meals. Counsel patients to stop eating at the first sign of fullness — appetite suppression from the medication means the stomach fills faster than expected. If persistent, hold or down-titrate the dose and re-escalate more slowly.",
      },
      {
        type: "callout",
        title: "Diarrhea",
        text: "Usually transient during dose changes. Encourage adequate fluid and electrolyte intake. Over-the-counter loperamide may be used for symptom relief. Monitor for signs of dehydration, especially in older adults or those on diuretics.",
      },
      {
        type: "callout",
        title: "Constipation",
        text: "Common, particularly with longer-acting agents. Recommend adequate hydration, dietary fiber (introduced gradually), and physical activity. Osmotic laxatives (e.g., polyethylene glycol) can be used if lifestyle measures are insufficient. Avoid recommending ondansetron for nausea in patients already experiencing constipation.",
      },
      { type: "heading", text: "The Golden Rule: Slow Dose Escalation" },
      {
        type: "paragraph",
        text: "Gradual dose titration is the single most effective strategy for preventing GI side effects. Key principles include:",
      },
      {
        type: "list",
        items: [
          "Always start at the lowest available dose",
          "Increase the dose no sooner than every 4 weeks (or longer if side effects persist)",
          "If a patient is tolerating a submaximal dose and achieving clinical goals, there may be no need to escalate further",
          "If treatment is interrupted for more than 2–3 consecutive doses, consider restarting at a lower dose and re-titrating",
          "During clinical trials, patients were allowed to remain at a given dose for up to 8 weeks to allow GI symptoms to resolve",
        ],
      },
      {
        type: "paragraph",
        text: "Standard titration schedules:",
      },
      {
        type: "list",
        items: [
          "Semaglutide (Wegovy): 0.25 mg → 0.5 mg → 1.0 mg → 1.7 mg → 2.4 mg weekly, each step lasting at least 4 weeks",
          "Liraglutide (Saxenda): 0.6 mg → 1.2 mg → 1.8 mg → 2.4 mg → 3.0 mg daily, each step lasting at least 1 week",
          "Tirzepatide (Mounjaro/Zepbound): 2.5 mg → 5 mg → 7.5 mg → 10 mg → 12.5 mg → 15 mg weekly, each step lasting at least 4 weeks",
        ],
      },
      { type: "heading", text: "Serious Side Effects: What to Watch For" },
      {
        type: "paragraph",
        text: "While rare, some side effects require prompt medical attention.",
      },
      {
        type: "callout",
        title: "Pancreatitis",
        text: "Postmarketing reports exist, though large clinical trials have not confirmed an increased risk. Counsel patients to report severe, persistent abdominal pain that radiates to the back, especially if accompanied by vomiting. Discontinue the GLP-1 RA if pancreatitis is suspected, and use with caution in patients with a history of pancreatitis.",
      },
      {
        type: "callout",
        title: "Gallbladder Disease",
        text: "GLP-1 RAs may increase the risk of cholelithiasis (gallstones) and cholecystitis, possibly through effects on gallbladder motility and bile acid composition. This risk is amplified by rapid weight loss. Counsel patients to report right upper quadrant abdominal pain, fever, or jaundice.",
      },
      {
        type: "callout",
        title: "Acute Kidney Injury",
        text: "Not a direct drug effect, but can result from dehydration caused by persistent nausea, vomiting, or diarrhea. Monitor renal function in patients with pre-existing kidney disease and emphasize the importance of fluid intake, especially during dose escalation.",
      },
      {
        type: "callout",
        title: "Diabetic Retinopathy Complications",
        text: "Reported with semaglutide (in the SUSTAIN-6 trial), possibly related to rapid blood sugar improvement rather than a direct drug effect. Patients with diabetes should have an eye exam before starting therapy if one has not been completed in the past 12 months.",
      },
      {
        type: "callout",
        title: "Thyroid Cancer Risk",
        text: "All GLP-1 RAs carry a boxed warning regarding the risk of thyroid C-cell tumors based on animal studies. GLP-1 RAs are contraindicated in patients with a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).",
      },
      { type: "heading", text: "Key Drug Interactions" },
      {
        type: "list",
        items: [
          "Oral contraceptives: Tirzepatide and oral semaglutide may reduce the effectiveness of oral birth control pills due to delayed gastric emptying. Recommend a backup or alternative contraceptive method, especially during the first 4 weeks after initiation and after dose increases.",
          "Levothyroxine: Oral semaglutide may alter levothyroxine absorption. Monitor thyroid function and adjust timing or dose as needed.",
          "Insulin and sulfonylureas: GLP-1 RAs increase the risk of hypoglycemia when combined with these agents. Proactively reduce insulin or sulfonylurea doses at initiation.",
          "DPP-4 inhibitors: Do not use GLP-1 RAs concurrently with DPP-4 inhibitors (e.g., sitagliptin, linagliptin), as both work through GLP-1 signaling and this combination has not been studied.",
          "Delayed gastric emptying: GLP-1 RAs may slow the absorption of oral medications that depend on rapid gastric transit. Monitor clinical response of co-administered oral drugs.",
        ],
      },
      { type: "heading", text: "Oral Semaglutide: Special Counseling Points" },
      {
        type: "paragraph",
        text: "Oral semaglutide (Rybelsus) requires specific instructions to ensure proper absorption:",
      },
      {
        type: "list",
        items: [
          "Take on an empty stomach first thing in the morning",
          "Swallow whole with no more than 4 ounces (120 mL) of plain water",
          "Wait at least 30 minutes before eating, drinking other beverages, or taking other oral medications",
          "Do not crush, chew, or split the tablet",
        ],
      },
      { type: "heading", text: "Injectable GLP-1 RAs: Injection Technique Tips" },
      {
        type: "list",
        items: [
          "Inject subcutaneously into the abdomen, thigh, or upper arm",
          "Rotate injection sites with each dose to minimize injection-site reactions",
          "Store unused pens in the refrigerator; once in use, most pens can be kept at room temperature for a limited time (check the specific product label)",
          "For weekly injections, the dose can be given on any day of the week — but encourage patients to choose a consistent day",
        ],
      },
      { type: "heading", text: "Weight Regain After Stopping Treatment" },
      {
        type: "paragraph",
        text: "Patients should understand from the outset that GLP-1 RAs treat obesity as a chronic condition, similar to how blood pressure medications treat hypertension. Discontinuation typically leads to weight regain of approximately one-half to two-thirds of the lost weight within one year, along with reversal of cardiometabolic improvements.",
      },
      {
        type: "paragraph",
        text: "If discontinuation is necessary:",
      },
      {
        type: "list",
        items: [
          "Consider a gradual taper over at least 20 weeks rather than abrupt cessation",
          "Encourage regular physical activity (at least 60 minutes per day), self-monitoring of weight, and a diet emphasizing minimally processed, nutrient-dense foods",
          "Monitor weight closely; consider restarting medication if weight regain exceeds 5%",
        ],
      },
      { type: "heading", text: "Mental Health Monitoring" },
      {
        type: "paragraph",
        text: "The FDA recommends monitoring for mood changes, emerging or worsening depression, or suicidal thoughts during GLP-1 RA therapy, although neither the FDA nor the European Medicines Agency has confirmed a causal association at this time.",
      },
      { type: "heading", text: "Quick Reference: When to Contact the Prescriber" },
      {
        type: "list",
        items: [
          "Severe or persistent nausea and vomiting unresponsive to dietary changes and antiemetics",
          "Signs of pancreatitis (severe abdominal pain radiating to the back)",
          "Signs of gallbladder disease (right upper quadrant pain, fever, jaundice)",
          "Signs of dehydration or decreased urine output",
          "Symptoms of hypoglycemia, especially in patients on insulin or sulfonylureas",
          "Mood changes, depression, or suicidal ideation",
          "Any new lump or swelling in the neck (possible thyroid concern)",
        ],
      },
      {
        type: "callout",
        title: "Key Takeaways for Pharmacists",
        text: "Set expectations early: most GI side effects are transient and manageable. Slow titration is the best prevention strategy. Proactively review for drug interactions, especially with insulin, sulfonylureas, oral contraceptives, and levothyroxine. Educate patients that these are long-term medications — stopping usually leads to weight regain. Know the red flags: pancreatitis, gallbladder disease, dehydration, and thyroid concerns.",
      },
    ],
  },
  {
    slug: "back-to-school-immunizations-new-jersey",
    title: "Back-to-School Immunizations: New Jersey Requirements by Grade",
    excerpt:
      "A grade-by-grade breakdown of New Jersey's school immunization requirements, from preschool through 12th grade, plus recommended vaccines, exemptions, and tips for parents.",
    category: "Vaccines & Prevention",
    author: "CureMed Pharmacy Team",
    publishedAt: "2025-07-10",
    readTime: "9 min read",
    image: "/images/blog/back-to-school-immunizations-nj.png",
    imageAlt:
      "A cheerful child with a bandage on the arm giving a thumbs up beside a smiling healthcare professional.",
    content: [
      {
        type: "paragraph",
        text: "Getting your child ready for a new school year means more than buying supplies — it also means making sure their immunizations are up to date. In New Jersey, children must meet specific vaccine requirements to attend school. These requirements are set by the New Jersey Department of Health and apply to all public and private schools, as well as licensed child care and preschool programs.",
      },
      {
        type: "paragraph",
        text: "This guide breaks down what vaccines are needed at each stage, from preschool through high school graduation.",
      },
      { type: "heading", text: "Why Are School Immunizations Required?" },
      {
        type: "paragraph",
        text: "Vaccines protect your child and the entire school community from serious, preventable diseases like measles, whooping cough, and meningitis. New Jersey law requires proof of immunization for school attendance. Children who are not up to date may be excluded from school until they receive the required vaccines or provide an approved exemption.",
      },
      { type: "heading", text: "Preschool and Child Care (Ages 6 months through Pre-K)" },
      {
        type: "paragraph",
        text: "Children attending licensed child care centers or preschool programs in New Jersey need the following vaccines, with doses appropriate for their age:",
      },
      {
        type: "list",
        items: [
          "DTaP (diphtheria, tetanus, pertussis): 4 doses (ages 2, 4, 6, and 15–18 months)",
          "IPV (polio): 3 doses (ages 2, 4, and 6–18 months)",
          "MMR (measles, mumps, rubella): 1 dose (at 12–15 months)",
          "Varicella (chickenpox): 1 dose (at 12–15 months)",
          "Hepatitis B: 3 doses (birth, 1–2 months, 6–18 months)",
          "Hib (Haemophilus influenzae type b): Age-appropriate series (typically 3–4 doses)",
          "PCV (pneumococcal conjugate vaccine): Age-appropriate series (typically 4 doses)",
          "Influenza (flu): Required annually (between September 1 and December 31) for children ages 6 months through 59 months attending licensed child care or preschool. New Jersey is one of the few states that requires the flu vaccine for this age group.",
          "Hepatitis A: 2 doses (starting at 12 months)",
        ],
      },
      { type: "heading", text: "Kindergarten through Grade 5 (Ages 4–6 at Entry)" },
      {
        type: "paragraph",
        text: "Before entering kindergarten, children must have completed or be up to date on the following:",
      },
      {
        type: "list",
        items: [
          "DTaP: 5 doses (or 4 doses if the 4th dose was given on or after the 4th birthday)",
          "IPV (polio): 4 doses (or 3 doses if the 3rd dose was given on or after the 4th birthday)",
          "MMR: 2 doses (the first given on or after the 1st birthday)",
          "Varicella: 2 doses (the first given on or after the 1st birthday); a documented history of chickenpox disease, verified by a healthcare provider, is also accepted",
          "Hepatitis B: 3 doses (complete series)",
        ],
      },
      {
        type: "paragraph",
        text: "These are the most common \"catch-up\" vaccines needed before kindergarten. If your child attended preschool in New Jersey, they may already have most of these. Your pediatrician can review records and identify any gaps.",
      },
      { type: "heading", text: "Grade 6 (Ages 11–12): A Key Checkpoint" },
      {
        type: "paragraph",
        text: "Entering 6th grade is one of the most important immunization milestones. New Jersey requires the following additional vaccines:",
      },
      {
        type: "list",
        items: [
          "Tdap (tetanus, diphtheria, pertussis booster): 1 dose, required on or after the 10th birthday. This replaces the childhood DTaP series with an adolescent booster.",
          "Meningococcal ACWY (MenACWY): 1 dose, required on or after the 10th birthday. This vaccine protects against four types of bacterial meningitis.",
          "Varicella: Must have documentation of 2 doses (if not already completed for kindergarten entry) or provider-verified history of disease.",
        ],
      },
      { type: "heading", text: "Grade 12 (Ages 16–18): The Final Requirement" },
      {
        type: "paragraph",
        text: "Before entering 12th grade, students need:",
      },
      {
        type: "list",
        items: [
          "Meningococcal ACWY booster: 1 dose, given on or after the 16th birthday. If the first dose of MenACWY was given at age 16 or older, a booster is not required. This booster provides continued protection during the late teen years, when the risk of meningococcal disease increases — particularly for students planning to live in college dormitories.",
        ],
      },
      { type: "heading", text: "Recommended but Not Required by New Jersey" },
      {
        type: "paragraph",
        text: "The following vaccines are strongly recommended by the CDC and the American Academy of Pediatrics but are not currently mandated by New Jersey for school attendance:",
      },
      {
        type: "list",
        items: [
          "HPV (human papillomavirus): 2-dose series starting at age 11–12 (or 3 doses if started at age 15 or older). Protects against cancers caused by HPV, including cervical, throat, and other cancers.",
          "Meningococcal B (MenB): 2- or 3-dose series for teens and young adults ages 16–23, based on shared clinical decision-making with a healthcare provider. Particularly important for college-bound students.",
          "COVID-19: Recommended per current CDC guidance.",
          "Annual influenza: Recommended for all children 6 months and older, though only required by New Jersey for children in licensed child care/preschool.",
        ],
      },
      { type: "heading", text: "Exemptions" },
      {
        type: "paragraph",
        text: "New Jersey allows two types of exemptions from school vaccine requirements:",
      },
      {
        type: "list",
        items: [
          "Medical exemption: A written statement from a licensed physician explaining that a specific vaccine is medically contraindicated for the child.",
          "Religious exemption: A written statement explaining that immunization conflicts with the family's religious beliefs. New Jersey does not currently offer a personal belief or philosophical exemption.",
        ],
      },
      {
        type: "paragraph",
        text: "Children with exemptions may be excluded from school during outbreaks of vaccine-preventable diseases.",
      },
      { type: "heading", text: "Tips for Parents" },
      {
        type: "list",
        items: [
          "Start early. Don't wait until the week before school starts. Schedule vaccine appointments in the spring or early summer to avoid the back-to-school rush.",
          "Bring your records. Bring your child's immunization record (the yellow card or printout from your pediatrician) to every visit so it can be updated.",
          "Ask about catch-up schedules. If your child has missed doses, your pediatrician can create a catch-up plan. Multiple vaccines can often be given at the same visit.",
          "Keep copies. Schools will ask for a Universal Child Health Record form signed by your child's healthcare provider. Keep a copy for your own files.",
          "Check with your school. Contact your school's health office if you have questions about what is needed for your child's specific grade.",
        ],
      },
      { type: "heading", text: "Where to Get Vaccines" },
      {
        type: "list",
        items: [
          "Your child's pediatrician or family doctor",
          "Local health department clinics",
          "Retail pharmacies (for age-eligible children)",
          "Federally qualified health centers",
        ],
      },
      {
        type: "paragraph",
        text: "Many vaccines are covered by insurance, Medicaid, and the federal Vaccines for Children (VFC) program for uninsured or underinsured children.",
      },
      {
        type: "callout",
        title: "Important Note",
        text: "Immunization requirements can change. Always verify the most current requirements with the New Jersey Department of Health (nj.gov/health) or your child's school before the start of the school year.",
      },
    ],
  },
];

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
