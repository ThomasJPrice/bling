import Link from "next/link"

export const NAVLINKS = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About Us',
    link: '/about'
  },
  {
    name: 'Challenges',
    link: '/challenges'
  },
  {
    name: 'FAQs',
    link: '/faqs'
  }
]

export const FAQS = [
  {
    question: "How does it work?",
    answer: <p>It's really simple - buy a challenge, create an account and link your Strava, and get running! When you have reached your target distance we will email you a certificate with your unique medal number on, and post your medal.</p>
  },
  {
    question: "How limited are the medals really?",
    answer: <p>The number of places on the challenge will determine how many medals are produced. Once the number is reached the design is retired. Your finishers' eCertificate will tell you which number medal you have. We promise that we will never repeat a medal design.</p>
  },
  {
    question: "Are the medals good quality?",
    answer: <p>Yes. We use a leading medal manufacturer who are experts in their field. In fact, they also make the medals for the TCS London Marathon. All of our medals are 95 percent recyclable, and our ribbons are produced with non-toxic inks. Our supplier is approved by SEDEX - the Supplier Ethical Data Exchange - which monitors ethical and responsible practices within industry. Each medal is quality checked before sending.</p>
  },
  {
    question: "How much is postage for my medal?",
    answer: <p>There's no hidden extras - your medal will be sent for FREE using Royal Mail 1st class in the UK. Non-UK delivery costs will incur a £5 post and packing fee.</p>
  },
  {
    question: "How long do I have to complete my challenge?",
    answer: <p>The item description will tell you how long you have. It could be anywhere from 3 months to a year, depending on the distance. You can start running from the moment you check out.</p>
  },
  {
    question: "Do I have to run for all of the distance?",
    answer: <p>We pull run data from Strava so if you have logged it as a run, it will count. If you want to walk, skate, swim, hop...it's up to you - just log it as a run so our system recognises it.</p>
  },
  {
    question: "Do I have to use Strava? What if I don't have an account?",
    answer: <p>We use Strava as in our experience it's the most accessible and reliable both in terms of tracking your activity and talking to our system. Strava allows you to manually enter data in when it doesn't pick up movement such as a treadmill or rowing machine, so you can make it all count. You can install and use Strava for free. Download the app from your app store.</p>
  },
  {
    question: "How do I log my runs?",
    answer: <p>You don't! Just record your runs on Strava as normal. Our system will talk to your Strava so eligible runs will automatically be counted. You can check your progress for runs you'll do in stages in <Link href='/me' className="text-primary font-medium">My Account</Link>.</p>
  },
  {
    question: "What if I run out of time for my challenge?",
    answer: <p>Please check carefully that you can commit to the challenge you're buying. As these events sell out quickly and we retire the medal design, we don't do refunds but if you are struggling to meet the deadline give us a shout and we may be able to extend your time.</p>
  },
  {
    question: "Why are some events 'pre-register'?",
    answer: <p>When demand is high we want to make sure you have the opportunity to get involved. Our medals are designed and made with care so to prevent a delay between you completing a challenge and receiving your medal, we sometimes delay the start date.</p>
  },
  {
    question: "How do I get in touch with you?",
    answer: <p>We love hearing from you - so drop us an email at <Link className="text-primary font-medium" href='mailto:hello@BLINGclub.co.uk.'>hello@BLINGclub.co.uk.</Link></p>
  }
]

export const ABOUTCONTENT = [
  <p>Our aim is to provide an affordable and motivational way to recognise your achievements.</p>,
  <p>As experienced runners ourselves we know how important motivation is when you are new to running, training for an event or just needing that extra push to lace up your trainers and get out of the door.</p>,
  <p>We carefully designed BLING to do just that - and to build a collection of limited edition quality medals.</p>,
  <p>All of our medals are unique to a particular event and retired when the numbers are reached, so you will be one of only a handful of owners of your particular medal.</p>,
  <p>So not only will your runs be recognised, you can build - and proudly display - your collection of unique medals.</p>,
  <p>We think running should be accessible to everyone, that's why we start our distances at 5k, and keep our prices sensible. And if you want to pound the pavements or treadmill it at home - it's up to you - it all counts.</p>,
  <p>New to running? So long as you log your activity as a run on Strava, any combination of walking and running will be logged.</p>,
  <p>We want to make the process as simple as possible - so no sending screenshots or uploading runs, just sync your Strava account when you create a profile. When you think you've run your distance, pop back to your account and click Check Activity and our system will recognise your eligible runs dated from when the challenge started. We'll then email your certificate containing your unique medal number, and send your medal in the post.</p>,
  <p>By keeping it simple and not adding the frills and optional add-ons, we can keep our prices affordable - meaning you can build your collection without breaking the bank.</p>,
  <p>BLING is about creating a club of runners - from those starting out to those with 1000s of miles under the belt, so follow us on Facebook and Instagram to know when the latest medals drop - and share your successes with the rest of the club!</p>
]


export const TERMS = `Welcome to blingclub.co.uk (the “Website”). 
These terms and conditions consist of:
(a) the general terms and conditions here and set out in Section A that apply to your access, browsing, use and participation in this Website (and by so doing you will be treated as having accepted these terms and conditions) as well as any other activity (including entering races and/or purchasing any merchandise) via the site (“General Terms”); and
(b) the terms and conditions set out in Section B that apply, in addition to the General Terms, if you would like to register for and participate in any races (“Race Terms”); and
(c) the terms and conditions set out in Section C that apply, in addition to the General Terms, to any order for or purchase of any merchandise via the Website (“Sales Terms”);
which are together referred to as the “Agreement”.
Please do not access or browse our Website if you do not accept the terms of the Agreement. They apply in addition to our Privacy Policy and Cookie Policy.
Section A - General Terms
Accessing our site
1.1 We do not charge for access to and use of our Website.
1.2 You may be required to register in order to access certain features on our Website. 1.3 We do not guarantee that our Website, or any content on it, will always be available or be uninterrupted. Access to our Website is permitted on a temporary basis. We may suspend, withdraw, discontinue or change all or any part of our Website without notice. We will not be liable to you if for any reason our Website is unavailable at any time or for any period.
1.4 You are responsible for making all arrangements necessary for you to have access to our Website. You are responsible for configuring your information technology, computer programs and platform in order to access our Website. You should use your own virus protection software.
Postings supplied by you
2.1 The Website may link to our Facebook page or other features on the Website which may provide some areas where you can post or exchange information, ideas and opinions as well as post photos and other materials. Such actions are collectively referred to as “Postings”. If you make use of this facility you must comply with the terms set out in this Agreement and any applicable terms (including any which may be imposed by the operators of Facebook).
2.2 The standards set out in this clause 2.2 apply to all Postings. You must comply with the spirit and the letter of the following standards. The standards apply to each part of any contribution as well as to its whole.
(i) Postings must:
Be accurate (where they state facts).
Be genuinely held (where they state opinions).
Comply with applicable law in the UK and in any country from which they are posted.
(ii) Postings must not:
Contain any material which is defamatory of any person.
Contain any material which is obscene, offensive, hateful or inflammatory.
Promote sexually explicit material.
Promote violence.
Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.
Infringe any copyright, database right or trademark of any other person.
Be likely to deceive any person.
Be made in breach of any legal duty owed to a third party, such as a contractual duty or a duty of confidence.
Promote any illegal activity.
Be threatening, abuse or invade another's privacy, or cause annoyance, inconvenience or needless anxiety.
Be likely to harass, upset, embarrass, alarm or annoy any other person.
Be used to impersonate any person, or to misrepresent your identity or affiliation with any person.
Give the impression that they emanate from us, if this is not the case.
Advocate, promote or assist any unlawful act such as (by way of example only) copyright infringement or computer misuse.
You warrant that all of your Postings do comply with the standards set out in this clause 2.2, and you will be liable to us and indemnify us for any breach of that warranty. If you are a consumer user, this means you will be responsible for any loss or damage we suffer as a result of your breach of warranty.
2.3 You hereby authorise us to copy and use and/or authorise others to use all or part of your Postings in any manner (including, without limitation, for the purposes of implementing or developing any idea that you may suggest or discuss), format, or medium that we or such other parties see fit throughout the world. You waive any moral rights.
2.4 We have the right to disclose your identity to anyone who alleges that your Posting may infringe their intellectual property rights or their right to privacy.
2.5 You must not misuse the Website by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to the Website, the server on which the Website is stored or any server, computer or database connected to the Website. You must not attack the Website via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you could commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will cooperate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use the Website will cease immediately.
Monitoring and moderating
3.1 Please be aware that we have no obligation to (and do not always exercise) editorial control over Postings or other information that users post to the Website and such information does not necessarily reflect our views.
3.2 Notwithstanding clause 3.1, we reserve the right to monitor and/or moderate all Postings and to remove all or part of any which we consider in our absolute discretion to be offensive or otherwise in breach of this Agreement. We may also make alterations to Postings at any time and at our discretion.
Complaints
4.1 If you have any complaint about any Posting or other content on our Website please contact us at hello@blingclub.co.uk.
4.2 Your complaint will be dealt with by our team in accordance with our internal moderation policy. A member of our team will use reasonable endeavors to respond to you although you should be aware that we receive, review, investigate and deal with complaints only during our normal business hours.
4.3 We reserve the right to terminate your registration and access to the Website if we suspect any misuse of our complaints procedure.
Intellectual Property Rights
5.1 We are the owner or the licensee of all intellectual property rights in and relating to:
our Website; and
the material (including all logos, text and graphics) published on the Website; and
the software used to operate our Website.
These works are protected by copyright and other intellectual property rights around the world. All such rights are reserved.
5.2 You may print off one copy, and may download extracts, of any page(s)) from our Website for your personal reference and you may draw the attention of others within your organisation to material posted on our Website.
5.3 You must not modify the paper or digital copies of any materials you have printed off or downloaded in accordance with clause 5.2 in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.
5.4 Our status (and that of any identified contributors) as the authors of material on our Website must always be acknowledged.
Content
6.1 The content on our Website is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our Website.
6.2 Although we make reasonable efforts to update the information on our Website, we make no representations, warranties or guarantees, whether expressed or implied, that the content on our Website is accurate, complete or up-to-date.
Disclaimer and liability
7.1 Nothing in the Agreement shall limit our liability for fraud or for death or personal injury caused by our negligence or in relation to any other liability which cannot be excluded or limited by law.
7.2 Subject to clause 7.1 and other than as stated in this clause 7 or the Sales Terms, all implied terms, conditions or warranties are hereby excluded to the fullest extent permitted by law.
7.4 Whilst we make every effort to ensure the availability and accuracy of our Website and any content, we do not warrant that the availability of our Website will be uninterrupted or that Website and any materials accessible via the Website will be error or omission free.
7.5 We do not accept any responsibility for any use made of the Website and we shall not be liable:
(i) in any circumstances for any loss of profits, loss of sales or revenue, loss of or damage to goodwill, loss of customers, loss in connection with third party claims, or any indirect, special or consequential loss (even if the party concerned has advised of the possibility of such loss);
(ii) for any failures, interruptions, delays or other matters of a similar nature arising out of circumstances beyond our reasonable control; and/or
(iii) for any other loss suffered in connection with the use of our Website or any content to the fullest extent that we may exclude or limit such liability under applicable law.
7.6 Subject to clauses 7.1 to 7.5 above, our liability under or in connection with the Agreement and the Website is limited to an amount equal to 100% of the amounts paid by you to us.
7.7 Different limits and exclusions apply if you purchase merchandise from our Website. Please refer to the sales terms.
Your personal information
8.1 Please see our Privacy and Cookie Policy for details of how we process your personal details and how we use cookies on the Website here.
Variations
9.1 We may revise the terms of the Agreement at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you. Some of the provisions contained in these terms and conditions may also be superseded by provisions or notices published elsewhere on our Website.
Linking to our Website
10.1 You may link to our home page or any other relevant page of our Website, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.
10.2 You must not establish a link from any website that is not owned by you.
10.3 Our Website must not be framed on any other site. We reserve the right to withdraw linking permission without notice.
General terms
11.1 If we fail, at any time, to insist upon strict performance of any of your obligations under any of the terms of the Agreement, or if we fail to exercise any of the rights or remedies to which we are entitled under the Agreement, this shall not constitute a waiver of such rights or remedies and shall not relieve you from compliance with such obligations.
11.2 We will not be liable to you for any breach of the Agreement that arises because of any circumstances which we cannot reasonably be expected to control.
11.3 No term of the Agreement is enforceable under the Contracts (Rights of Third Parties) Act 1999 by a person who is not a party to this agreement.
11.4 If there is a conflict or inconsistency between any provision contained in the these General Terms and the Race Terms and/or the Sales Terms, except where provided to the contrary, to the extent of the conflict or inconsistency the following order of precedence shall apply:
(i) if you are purchasing merchandise, the Sales Terms will take precedence; and
(ii) if you enter a challenge, clause 7 of these General Terms will prevail and any challenge Terms will take precedence over all other clauses of the General Terms.
Law
The Agreement is governed by English law. You agree to submit to the exclusive jurisdiction of the English courts provided that nothing in this clause will prevent us from taking any action in any court that has jurisdiction over you.
Contact
You may contact us at hello@blingclub.co.uk
Section B - Challenge Terms
Challenge entry
1.1 By entering a challenge you are agreeing to enter into the challenge and also agree to abide by these challenge Terms as well as the General Terms and the terms set out on the relevant challenge entry page of the Website.
1.2 Entries to challenge are non-transferable. Participation in the challenge is personal to you; you are strictly prohibited from swapping, selling or transferring or offering to sell, swap or transfer the place in the challenge .
1.3 To enter a challenge you must be 18 years of age or older on the date of the start of the challenge. 
1.4 Challenge entry closure is determined and announced when challenge participation reaches the stated capacity or a pre-set date. This will be stated on the Website entry page of the challenge in question.
Challenge entry fees and cancellation
2.1 You must pay the challenge entry fee at the time of entering the challenge .
2.2 All challenge entry fees are non-refundable, and cannot be deferred towards a future challenge , nor can an entry be transferred from one challenge to another. You do not have a right to change your mind since the challenge entry fee is charged in return for our entering you into the challenge. Your entry is completed as soon as you have completed the challenge entry process.
2.3 Participation is at your own risk
3.1 You are responsible for ensuring that you have undertaken any necessary preparation and training to enter and participate in any challenge. Entry and participation in challenges is at your own risk. Entrants declare that they are physically fit and capable of participating in this event and completing the distance they have nominated. They are not aware of any medical condition or impairment that will prevent participation in this event or will affect their health by participation.
3.2 Entrants acknowledge they will participate and complete their nominated distance in an exercise discipline chosen by them, at locations chosen by them and at their own risk.
3.3 Entrants accept that participation in an event is at their own risk and acknowledge that participation in any challenge can be physically strenuous. It is acknowledged that participation in the challenge will be physically demanding and the Participant is aware of the nature of the challenge and associated medical and physical risks involved. The organiser accepts no liability for any injury whilst the Particpant is taking part in a challenge. 
3.4 Entrants acknowledge that should they withdraw for a non-medical reason, the entry fee is non-refundable.
3.5 The Participant must only take part in a challenge where it is safe to do so. The Participant accepts all responsibility for any injury and incident that occurs due to taking the challenge. The Participant agrees to act in the best interest of their personal safety and that of the Public.
3.6 Upon challenge entry you confirm your acceptance of these terms, conditions and the disclaimer. By agreeing to these terms and conditions, entrants release event organisers, from all claims connected with participation. Entrants indemnify the event organiser, sponsors and employees involved in this event directly or indirectly against all liability for any and all injury, loss or damage connected with the entrant's participation.
3.7 The challenge Organiser reserves the right at any time to remove Participants from the challenge or prevent Participants participating in the challenge if in the Organiser's sole discretion, it considers such action necessary for safety reasons or the proper enjoyment of the challenge by other Participants or for any other reasonable reason. No refund of the Fee shall be made if the Participant has acted negligently, maliciously, with wilful misconduct or otherwise without due care and attention for the challenge or other participants, so as to cause his/her removal, from both challenges and website.
Challenge completion
4.1 You will be treated as having completed the challenge if you submit the required evidence of your completion of the race to us by the date specified on the challenge entry page of the Website through the Strava integration facility on our Website.
4.2 The Participant agrees to abide by all applicable laws, rules and regulations of the relevant sporting governing bodies and Local Laws that oversee the locality where the Participant takes the races. The Participant shall not be entitled to a refund of the Fees if he or she is disqualified from the challenge as a result of an infringement of these Conditions or any such rules and regulations. The Organiser is also entitled to impose challenge rules upon the Participant from time to time which will form part of these Conditions. The relevant rules and regulations may be obtained from the challenge website.
4.3 We will send challenge medals to each participant who provides the required evidence of completion in accordance with clause 4.1. Medals are sent by post within a reasonable time of the deadline for completing the challenge to the address provided by you during the challenge entry process. It is your responsibility to ensure that your address and any other details are correct and we will not be responsible or liable to you if these details are incorrect.
4.4 Should a medal not arrive due to circumstances outside of our control (e.g. lost mail) the participant will be entitled to their money back.
4.5 The deadline for completing each challenge and the submission of evidence in accordance with clause 4.1 is fixed and cannot be varied. If we do not receive your evidence by the date specified, you will not receive a medal.
4.6 Entrants acknowledge that the entry fee is for the space in the challenge and not to 'purchase' the race medal. The medal is a reward for all completing entrants.
5.0 Personal Information
5.1 Personal information we collect 
When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”. 
We collect Device Information using the following technologies: 
- “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org. 
- “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps. 
- “Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.
Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card number and email address). We refer to this information as “Order Information”. When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information. 
5.2 How do we use your personal information? 
We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to: 
- Communicate with you; 
- Screen our orders for potential risk or fraud; and 
- When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services. 
We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns). 
5.3 Sharing you personal Information 
We do not share your information with any third party. Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights. 
5.4 Behavioural advertising 
As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative's (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work. 
You can opt out of targeted advertising by using the links below: 
- Facebook: https://www.facebook.com/settings/?tab=ads 
- Google: https://www.google.com/settings/ads/anonymous 
- Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads 
Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance's opt-out portal at: http://optout.aboutads.info/. 
5.5 Do not track 
Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser. 
 5.6 Your rights 
If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below. 
Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States. 
5.7 Data retention 
When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information. 
5.8 Changes 
We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. 
5.9 Minors 
The Site is not intended for individuals under the age of 18 . 
5.10 Contact us 
For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at hello@blingclub.co.uk 
`

export const PRIVACY = `Welcome to BLING Club! Protecting your privacy and personal data is important to us. This Privacy Policy explains how we collect, use, and share your information, as well as your rights regarding your data.

1. Who We Are
BLING Club is operated by BLING Club, located in Bedfordshire, UK.

If you have any questions or concerns about this Privacy Policy or your data, you can contact us at:
📧 Email: hello@blingclub.co.uk

2. Information We Collect
We collect personal data when you use our website, sign up for an account, link your Strava account, or make a purchase. Below is a breakdown of the data we collect:

Account Information
When you create an account, we collect the following information:

First Name
Last Name
Email Address
Marketing Consent (optional)
If you sign in via Google OAuth, we collect any information that Google provides as part of your profile.

Strava Information
When you link your Strava account, we may collect the following information (if provided on your Strava profile):

Gender
City and Country
We also store challenge-related data, such as:

Run Distance
Strava Run ID
Date of Run
Shipping and Payment Information
When you make a purchase, we collect your shipping address and, if provided, your billing address.

All payment processing is securely handled by Stripe. We do not store or process your payment card details.

Cookies and Analytics
We use the following tools to improve our website and provide a better user experience:

Umami Analytics: A privacy-friendly tool that tracks website usage without storing personal information.
Session Cookies: Used for authentication via Supabase to keep you logged in.
3. How We Use Your Information
We use your information to:

Create and manage your account
Process orders and send medals
Track your challenge progress
Send marketing and transactional emails
Improve our website through analytics
4. Who We Share Your Information With
We do not sell your personal data to third parties. However, we share data with the following services to operate BLING Club:

- Service	Purpose	Location
- Supabase	Authentication and database	UK
- Stripe	Payment processing	Global (EU Compliant)
- Strava	Challenge tracking	Global
- Umami	Website analytics	EU
- Resend	Marketing and transactional emails	Global
We ensure that all third-party providers we work with are GDPR-compliant.

5. Cookies and Tracking
We use the following cookies on our website:

Session Cookies for authentication (via Supabase).
Umami Analytics to track website usage without collecting personal information.
We do not use third-party advertising cookies or intrusive tracking mechanisms.

6. How Long We Keep Your Data
We retain your data until you request account deletion.

If you want to delete your account or request that your data be removed, please email us at hello@blingclub.co.uk.

Once your account is deleted, all associated data will be permanently removed from our systems.

7. Your Rights
As a user, you have the following rights regarding your personal data:
✅ Access: You can request a copy of the data we hold about you.
✅ Correction: You can update your personal information at any time.
✅ Deletion: You can request that your data be deleted by emailing hello@blingclub.co.uk.
✅ Withdraw Consent: You can unsubscribe from marketing emails at any time by clicking the unsubscribe link at the bottom of our emails.
✅ Data Portability: You can request that your data be provided in a portable format.

8. Data Security
We take data security seriously. We implement the following measures to protect your information:

Passwords are securely encrypted using Supabase Auth.
Payment information is processed securely via Stripe.
We use HTTPS to encrypt all data transmitted between your browser and our website.
In the event of a data breach, we will notify affected users in accordance with applicable laws.

9. Data Transfers
We primarily store and process your data within the UK and EU.
Our hosting provider, Vercel, and authentication service, Supabase, both comply with GDPR regulations.

10. Marketing Communications
We use Resend to send marketing and transactional emails.

You can opt-in to receive marketing emails during the sign-up process. You can also unsubscribe at any time by clicking the unsubscribe link at the bottom of our emails.

11. Age Restrictions
Our website is not intended for children under the age of 13. If you are under 13, please do not use our service.

12. Contact Us
If you have any questions about this Privacy Policy or want to exercise your rights, please contact us at:
📧 Email: hello@blingclub.co.uk

13. Changes to This Privacy Policy
We may update this Privacy Policy from time to time. We will notify users of significant changes via email or through our website.

The latest version will always be available at blingclub.co.uk/privacy.`