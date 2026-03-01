import { Article } from "@/lib/notion"

export interface LocalArticle extends Article {
  content: string
}

export const localArticles: LocalArticle[] = [
  {
    id: "local-1",
    title: "Taking stock of the state of in-house lightweight data analysis",
    slug: "taking-stock-of-the-state-of-in-house-lightweight-data-analysis-1",
    description: "Affordable technology is available, but there are other issues to be tackled to allow for in-house data analysis in nonprofits",
    category: "Data & Analytics",
    tags: ["social-sector", "technology"],
    date: "2021-10-13",
    coverImage: null,
    author: "Vivek Singh",
    featured: false,
    published: true,
    content: `Nonprofit projects are adopting software and data systems for monitoring and tracking purposes. These are done through pre-developed dashboards and reports. But in this article, we look at whether organizations are doing data ad-hoc data analysis to gain insights about their work, what determines the success, and inherent challenges of nonprofits in analyzing the data in-house.

In-house data analysis in nonprofits is traditionally been done by using tools like SPSS, Excel, Stata, and R. There are trained public sector professionals who specialize in these tools. This approach fits projects that require research. Usually, this is done by someone who is not running the program but by a dedicated personnel/team. Let's call it heavyweight in-house data analysis and very few projects are required to do this.

But is there is a much wider need for in-house data analysis which can be done in few hours than few weeks?

1. People who run programs have questions and curiosity about their projects. Since they also have data, they want to query the data to get some rough answers to their questions. This is extremely important for the continuous improvement of the program.

2. When a project is completed, the software provider hands over dashboards and reports. Before the data is in place and the project is in full swing - it is very difficult to pin these down exactly. But when the data is in place (maybe due to lack of funds) the funds for software are exhausted.

Even when the best of the analytics and data warehousing tools are available, user-driven data analysis has a learning curve. Without the conceptual/intuitive understanding of entities/tables, relationships between them, grouping methods, drilling along dimensions, etc - there is a limit to how much one can do. Many tools allow the above using visual methods, but one still will have to tell it what it should do. The tool cannot do that by itself. Hence in my assessment, there is not that much scope for tools to help you further.

On the other hand, budgets are constrained hence paying a software provider to help with reports, dashboards on an ongoing basis is an expensive proposition.

Some organizations that have long-running programs have been able to learn and get better over time with data analysis. Shorter programs that run only for few months, do not provide the opportunity - hence unless one already has someone in-house who can do it, it doesn't materialize - given other responsibilities.

Secondly, what follows is that there should be some funds available (or not used upfront) so that the right type of dashboard, reports can be built at the right time.

Finally, economically speaking, one can argue that the value of such in-house ad-hoc analysis has not been recognized yet fully, or maybe the value isn't there (at least relatively speaking compared to other priorities). But if the value is there and once it is recognized an economic solution will emerge. Organizations will have in-house people to do the analysis, or have formal training in data analysis for their program people, or will have funds to hire technical support for such work. To a large extent, it is not a technology problem.`,
  },
  {
    id: "local-2",
    title: "Domain expertise doesn't travel from high-resource to a low-resource setup",
    slug: "domain-expertise-doesnt-travel-from-high-resource-to-a-low-resource-setup",
    description: "Lack of understand of the low resoiruce constraints is the underlying cause behind many poorly designed software. Low resource is its own cross-cutting domain requiring expertise in it.",
    category: "Insights",
    tags: ["social-sector", "technology"],
    date: "2021-11-09",
    coverImage: null,
    author: "Vivek Singh",
    featured: false,
    published: true,
    content: `In software development, it is well understood that product development requires knowledge of the domain in which the software will be used. People who have this knowledge are called subject matter (domain) experts or business analysts. For example, for developing a hospital system you require hospital administration understanding, or for a tax filing system tax-accounting knowledge.

But, is hospital administration in a regular metro city hospital the same as the hospital administration in a rural (i.e. rural, tier-3, tier-4 city) hospital? At a technical level, it may appear that both have patients, departments, doctors, similar processes e.g. for outpatient registration-&gt;queue-&gt;doctor-&gt;test-&gt;prescription-&gt;pharmacy-&gt;home. One may use this understanding and develop a hospital management system - but will it work in the rural hospitals. We argue that a domain expert not exposed to the rural hospitals - will bake numerous bad decisions into the product, making it an inappropriate solution eventually. This phenomenon applies to many domains.

You can read more about two other examples, recently in the news where this same phenomenon is in play.

a) COVID Vaccination system -

https://www.livemint.com/opinion/columns/the-challenges-of-our-vaccination-drive-s-final-stretch-11631122982430.html

The system developed a pull-based system i.e. citizens will take appointments/walk-in and take vaccines. But in a low resource setup, it works based on a push mechanism. Pushed by health workers. Secondly it the very basic mistake of assuming good internet.

b) Nutrition system to be used by AWW -

https://www.livemint.com/science/health/why-childcare-workers-are-suddenly-up-in-arms-11631117319254.html

(use reader mode in firefox). Same and wrong internet assumption. Too complex workflows in the app.

Examining this as a software practitioner, we see that although we have a domain expert among ourselves but the domain in itself is quite different when we switch context to a low resource setup. We cannot assume even the basic understanding of low resource setup since most domain experts (like many urban folks) have almost never set their foot in such places - for any meaningful length of time. It doesn't come very naturally to someone who is in a high-resource setup.

In essence, we are dealing with an orthogonal dimension (see the diagram below) - to the extent that each domain expertise needs to be further qualified into a high resource (being default) and low resource.

Broadly, the general low resource expertise consists of deeply understanding how the following factors impact the inner workings of the domain for which software is built. This is not an exhaustive list.

In software teams, we should strive to have domain experts who have low resource understanding to avoid having serious design mistakes in our solution.`,
  },
  {
    id: "local-3",
    title: "Evolution of public system from reporting systems to point-of-work systems",
    slug: "evolution-of-public-system-from-reporting-systems-to-point-of-work-systems",
    description: "Public software systems are dominated by reporting systems due to cost reasons and not due to lack of technical imagination. As a country/state economically develops, the reporting systems will get replaced by point-of-work systems.",
    category: "Insights",
    tags: ["social-sector", "technology"],
    date: "2021-11-22",
    coverImage: null,
    author: "Vivek Singh",
    featured: false,
    published: true,
    content: `In a reporting software system (unlike point of work), the users don't use it when they are providing services to their clients (citizens). They use them later on, periodically, to report data about their work. Intuitively we like the point of work system, but it is the reporting systems that have dominated.

Why do reporting systems dominate?

The success and dominance of dhis2, which is a reporting system, over the last 2 decades are because it understood three important aspects of technology for development. The first two have been understood well, the last one is appreciated much lesser.

1. No code &gt; Low code &gt;&gt; Programming - when it comes to distribution in LMICs. It pushes the cost down significantly, reduces project risk, requires less maintenance, and drives down the need to have developers available all the time.

2. Be a platform for both local tech communities, funders, and health organizations like WHO - making it easy for governments to get done.

3. Only reporting systems are feasible and point of work systems are not.

There is criticism of dhis2 based on what it offers as a user experience (not the user interface, which certainly can improve). The lament is that dhis2 is successful because of non-technical reasons. This is not true. The user experience offered by dhis2 is a natural outcome of the design of reporting systems. The real question is why point-of-work systems haven't succeeded.

Point of work and reporting system by example

Very simply, in such a system, the user does their work, and data gets generated and is useful for other purposes like reporting. Example of point of work system - a person doing vaccination of children is the user and the system offers workflow like - register, look up child, create a new immunization schedule, check due/overdue vaccines, give vaccine dose, so on. A reporting system on the other may be of one of the following types:

- At the end of the day report the number of jabs given, the number of children who came, missed jabs

- At the end of the day report child name, age, vaccine-given, etc.

The reporting systems can be quite sophisticated and can allow for longitudinal records, but essentially the design of such a system is to report and not to use previously reported data much, at least in ways that support the workflows of the user at the point of work.

Reasons reporting systems dominate in governmental systems

1. Point of work system requires a mobile device or a personal computer for each user. On the national/sub-national scale providing so many devices/computers to the users require a very large budget. Whereas with reporting system the users can use paper at their point of work and later use a common or public device/computer to report. Such implementations do decide the frequency of reporting based on the volume of data and availability/access of common/public computers.

2. The reporting of data from paper can be done by a data entry person as well (supporting several end service providers) - if everyone cannot be trained to use a computer or workloads.

3. A user who is once familiar with dhis2 can use the same product to report some other type of data for another program. Hence such users need less training subsequently.

In short reporting systems are very cost-effective.

Point of work systems will replace reporting systems with economic growth/development

As a country/state develops and can afford to spend more on technology, the reporting systems will have to give way to point of work systems. This is because the point of work systems can deliver significantly more value to all the users and stakeholders compared to a reporting system.

1. When software is used at the point of work, the user can become more effective and efficient - supported by features and data. They can provide better services to their clients (citizens) and provide feedback to the organization to improve the processes.

2. The quality of data generated is far superior because:

- Unlike in reporting where data moves from real-world to paper, then paper to the software system, in point of work it goes in straight.

- Data entry is quite mundane work and the users lose focus when they are entering data in bulk and they make mistakes.

Unlike reporting systems like dhis2 which can be developed once and used again and again, one will require many point-of-work systems for each domain-specific use case. This is likely to further elongate the life of reporting systems as it will be competing with all different quality of point-of-work systems.

Reporting systems will give way eventually, but they have served very well and they should get their due appreciation.`,
  },
  {
    id: "local-4",
    title: "Deployment Architecture for Low Resource Contexts",
    slug: "deployment-architecture-for-low-resource-contexts",
    description: "We often discover that PWAs and cloud-based solutions, though applicable sometimes, but are often wrongly applied to low-resource setups. Hence, we attempt to develop a simple thumb rule for choosing deployment architecture for low-resource environments - with their tradeoffs.",
    category: "Architecture",
    tags: ["social-sector", "technology"],
    date: "2021-12-07",
    coverImage: null,
    author: "Vivek Singh",
    featured: false,
    published: true,
    content: `Point of work and reporting systems is one way to classify the low resource systems

(LRS). It classifies the LRS based on the objective of such systems. LRS when considered from a technical implementation perspective, can be classified differently. In this article, we shall try to understand the key features of LRS - when considered technically.

Technical architectures of LRS make them different because of two main constraints - availability of Internet and technical complexity of deployment. These constraints restrict what we can offer to the users and where.

a) The user dimension can be split into single-user or multiple users applications.

b) Further, these users can use the system in the facility or in the field (on the move).

Let's cross these two dimensions and see an example of each type of LRS.

Single user in a facility

- Classic data entry application

Multiple users in a facility collaborating with each other

- Rural hospital system

Single user in the field

- Community health worker application

Multiple users in the field

collaborating with each other

- Large health camps or refuge camps

1. Single user in a facility

From an engineering standpoint, there aren't many interesting things about such systems. So let's jump to the rest three.

2. Multiple users in a facility collaborating with each other

Engineers who are used to developing software systems in high-resource environments have a very high probability of making mistakes here - based on our numerous discussions. The biggest illusion is that a progressive web app can be used because they provide higher availability of the application to the user despite poor internet. But the users need to collaborate with each other in real-time e.g. if the doctor orders a lab test, the pathologist should be able to view the order when the patient turns up in their department. Each of these two users having a PWA is not sufficient.

There are two options here.

a) Deploy the server on the premises of the hospital available to the users from LAN. This provides a great user experience but requires local technical support to deal with issues of network, server, power. At scale, with a lot of hospitals, this becomes quite an expensive proposition.

b) Use the service from the cloud, but each facility has two independent Internet connections. The higher the independence of these connections, the higher is the likelihood of Internet availability. We have not seen this tried out anywhere but seems like a good idea - and less resource-poor context can benefit from it.

3. Single user in the field

Offline mobile applications are now widely used in low-resource settings. In simple terms, each mobile device needs to keep ALL the data, for their work area, that the field user will require. Important again to highlight that offline applications are not typical PWAs - which can hold user-created data on the device and save when the internet is available. The issue with PWAs is that they do not hold all the data that the user needs - hence the application becomes useless in many use cases.

But there are certain issues with offline applications too.

a) At some point the volume of data even for a single work area becomes very large. This causes the first-time download of data to take a long time.

b) Management of data for clients moving from one work area to another is a tricky problem.

These are not insurmountable problems but they do require better engineering and user experience design to make it work. Even we in Avni have not fully tackled these.

4. Multiple users in the field collaborating with each other

Since this is the same as 2 but in the field. In 2, while technical operations are a challenge, in 4, deployment is also difficult. This requires multiple computing devices, having the applications and connected to each other. Given the technical complexity and place of technology in the hierarchy of requirements - such systems are not seen in the real world. Perhaps they may remain so.`,
  },
  {
    id: "local-5",
    title: "Making Gunak - enabling journey from access to healthcare to quality of healthcare",
    slug: "making-gunak-enabling-journey-from-access-to-healthcare-to-quality-of-healthcare",
    description: "Short note on Gunak software system used in health programs for improving the quality of health services and facilities at public hospitals and clinics",
    category: "Products",
    tags: ["social-sector", "technology"],
    date: "2022-03-07",
    coverImage: null,
    author: "Vivek Singh",
    featured: true,
    published: true,
    content: `The first objective of the National Rural Health Mission (now just National Health Mission) was to provide access to the public healthcare system over almost the last two decades. As this objective is getting met to a great extent, the focus in the last few years has evolved from access to quality of health care provided in these hospitals and clinics. We are not experts but as we understand this quality involves - assessment/measurement, training/mentoring to improve quality, and certification. The scope of the Gunak system is helping in assessment and certification.

Towards this, we* have been engaged with

in the development of Gunak for the last 5-6 years. Gunak is a software platform for various quality improvements programs run by the ministries of health (national and state) in India across the country.

The public healthcare system consists of various types of health facilities (clinics, hospitals) right from health and wellness centers (for every half a dozen villages) to medical colleges (which are tertiary hospitals, one or more in number in each state). NHSRC (part of the national MoH) has been working towards improving the quality of these health facilities. These quality improvements are related to the core functioning of the hospitals, focus areas of maternal and child health, and the cleanliness of facilities (under Swatcch Bharat).

Following are the key activities involved in this.

1. Development of very detailed checklists on which the health facilities can be measured. The checklists do vary by the level of facilities, programs, and sometimes by state. Some of the checklists are shared

- under the tools section. For a quick feel of these checklists please see the images below.

2. Conducting training for quality assessors who can be internal or external. External assessors can be state or national-level assessors.

3. Verify assessments done by assessors and provide certification reports to the facility administrators.

SAMPLE from KAYAKALP Checkpoints

Sample of NQAS Checkpoints

Broadly, the scope of the Gunak system is to allow for management of the checklists and performing assessments. For context, the Gunak system supports:

Technically the software system to support this must be able to do the following (apart from the regular functions of such a system):

which can be used by assessors to perform assessment while on the move within the premises of the hospital.

The mobile app allows for performing assessments without requiring the internet. Hospital buildings, the remoteness of some facilities, and the number of data points to be collected require the mobile app to work as efficiently as possible for the user.

The mobile app (

available from Playstore

) doesn't require any login, except when the user wants to submit their assessments. The assessor can perform a basic analysis of scores on the device itself and share a CSV format of the assessments via email or other channels. The ability to perform assessments without login is a win-win. The people operating the system do not have to issue login to everyone (as there are many assessors who may be doing internal assessments). Certain types of assessments require login as they may result in rewards or official certificates given to them.

Few screenshots of mobile app used by assessors

Web application to manage the checklists

Checklists are managed in two modes - bulk and corrections. Since a checklist could contain thousands of checkpoints entering them one by one is tedious and error-prone. Excel is a much better tool for this. Gunak supports importing checklists in excel form. Once checklists are imported into the system the Gunak provides the ability to edit them for making corrections, retiring them, adding new items.

Dashboard and reports

for various state and national stakeholders to understand and analyze the quality of health facilities, districts, states across various types of checklists.

Comparison of average and median scores of various departments for a state (demo data not actual)

for other systems to access the checklists and assessments done using them.

Almost all the data managed in Gunak is available via REST API for third-party systems to integrate with. The API documentation is available

. Gunak doesn't provide API for facilities because it integrates with the national registry for the same - hence for facilities, one must integrate with the national registry.

The software for Gunak is available here -

https://github.com/nhsrc

All the ideas about the domain and use cases came from specialists at NHSRC India. We have interacted very closely with (in no particular order) - Dr. J.N. Srivastava, Dr. Deepika Sharma, Dr. Nikhil Prakash, Dr. Rashmi Wadhwa, and Anand Yadav.

Folks at Samanvay have all worked in an *individual* capacity with NHSRC over the last 5-6 years.

The initial mobile app design was created by`,
  },
  {
    id: "local-6",
    title: "Measuring and scaling community engagement",
    slug: "measuring-and-scaling-community-engagement",
    description: "",
    category: "Insights",
    tags: ["social-sector", "technology"],
    date: "2022-03-23",
    coverImage: null,
    author: "Vivek Singh",
    featured: false,
    published: true,
    content: `The social programs in the domain of environment, water (like others) eventually aim to improve the lives of the communities in which they work. These programs aim to achieve this by working with governments and nonprofit providers. The last mile of the main stakeholders which is community members (or citizens) is difficult to bring into the intervention - as it increases the scale of effort required by a few orders of magnitude. This has been a challenge. The community engagement project described here is trying a simple technology-based idea to make a small headway in this direction. We have developed the solution but the idea itself came from the work of

. In the article, we try to explain the idea.

Let's say as a social organization wants to improve the condition in villages in the following areas:

...and other such topics of concern. While one may have some knowledge and beliefs about what a particular community's needs are - how does one find out what the community's top needs are and hence what to focus on and improve upon. Secondly, how do organizations reach more and more people about spreading awareness on these topics? For organizational activities related to information dissemination at scale, this is a challenge.

The idea being tried out is towards this is as follows.

One of the posters used in Karnataka

This creates the 3 major data points for each scan - which QR is scanned, when, and from where. This data (as explained in the technical section) allows for, people who created these QR codes, to understand the interest level in topics by village/block/district and over time. Based on this data community-based organizations can further engage with the communities on the topics of communities' interest - for better outcomes.

Conceptual Data Flow

Screenshot of dashboard

Conclusion and Possibilities

It is important to mention that, the content to which the QR codes link can be continuously be improved upon based on feedback and changing times - with no on-ground work required.

The project is currently rolled out by

in Rajashthan, Odhisha, and Karnataka. If you have similar requirements please get in touch with us, FES, Arghyam, or Vrutti.`,
  },
  {
    id: "local-7",
    title: "Factoring software codebase size and complexity is most important factor to consider when taking ownership of generic open source products",
    slug: "factoring-software-codebase-size-and-complexity-is-most-important-factor-to-consider-when-taking-ownership-of-generic-open-source-products",
    description: "Generic software solutions have very large codebases compared to custom solutions. Nonprofit organizations must factor in this when taking over ownership of such products.",
    category: "Architecture",
    tags: ["social-sector", "technology"],
    date: "2022-05-27",
    coverImage: null,
    author: "Vivek Singh",
    featured: false,
    published: true,
    content: `Since the time we have made Bahmni but more so with Avni, we get inquiries during our sales about customers wanting to own the software solution after the initial few years. This happens mostly with large nonprofits or when government entities are involved. Since these products are open source technically there is no restriction in taking the entire source code of the solution - without even asking the authors of the software. But in practice taking over open-source products is far more complex than it appears. In this article, we explain why this is so.

Bahmni, Avni, and other such products are generic in nature by design, so they can serve the purposes of multiple organizations with slightly different needs. We have written about the generic and specific nature of such software

what it technically means to use open source

. When considering such a solution from an ownership point of view one has to account for the complexity of ownership. These platforms are much larger in their codebase size compared to if the same solution was developed for one customer for the same use case. This is for two reasons:

1. Most customers of these products will not use all the features of the software. But there is usually no clean way to remove such unwanted code. Some components can be done away with but feature-wise removal of unnecessary code is quite difficult.

2. This is the more important reason. A generic software solution implements many things in an indirect manner. For example in the case of Avni usage for maternal and child health programs, one will not be able to find even the mention of the term pregnancy in the code, or any table called mother and so on. These are concepts implemented on top of generic entities like Subject, Encounters, Visits, and so on. For any specific customer, most of the generalization done in code is of little value. But more importantly, the code base is far more complex due to this necessary generalization.

Overall one may be owning the size of the codebase which is 5x to 10x larger in size compared to if one just developed a custom solution for oneself. For a software team that will maintain and enhance this software on their own - there is a lot of unnecessary complexity in the code without a corresponding value. The value of this complexity is only for the product team - because they want to solve the problems of multiple customers. Hence owning such a codebase requires a higher level of skills and team size, making it more expensive and not practical.

Surely for smaller generic open-source solutions some of these problems are easier to tackle - as even a generalized product code may not be so difficult to maintain.

This doesn't imply that one should develop one's own solution. We have discussed here why it is a

better idea to use open source products

why developing one's own solution is difficult

. Developing in-house poses risks and costs which are not obvious. But in generic products, there is a complexity-related tradeoff involved which one should be aware of.

We have a couple of suggestions to resolve this problem to some extent.

Custom Solution`,
  },
  {
    id: "local-8",
    title: "Product integration as a solution approach",
    slug: "product-integration-as-a-solution-approach",
    description: "Integrating multiple products offers a sustainable approach by not creating more software hence requiring more engineers and resources",
    category: "Architecture",
    tags: ["social-sector", "technology"],
    date: "2023-04-05",
    coverImage: null,
    author: "Vivek Singh",
    featured: false,
    published: true,
    content: `There are several projects that do not neatly fit into a single product's target domain. For example let's consider a project that requires beneficiary data management from the field (typical

use case), but also requires stock/inventory management of items distributed by the field workers. When creating technical solution for such a project there are following options:

In this article we will discuss these options so that we can make a decision.

Usually people who have this need approach a product maker (like Samanvay) and enquire whether the project's requirement fits their product. When there is a project, extending the scope of product can be quite tempting (because makers like to make things). The customers, in nonprofits, find it comforting too - that they can just use one product.

But mature product teams will avoid this route because:

The decision of what goes in the product is a subjective one and the product team is best placed to make that decision. The product teams must explain their rationale to the customers.

We have written a lot about this earlier

, where we give reasons for why in most cases for nonprofits this is not a good idea.

Before getting into this option, let us further detail our example. In our example project, let's say we have two set of users - field users and stock managers.  The field users use the mobile app while they provide service in the field and the stock managers use desktop based web interface.

Potentially, we can use two separate products and give it to each type of users respectively. But what happens when we want the field users to see/manipulate stock data? They can use both apps - field app and the stock management app. But what if the stock management app is not capable of working offline or it is too complex for the user to learn and use two apps. More importantly what if the field users workflows requires managing beneficiary and stock data in the same flow (e.g. fieldworker hands over certain medicines to the beneficiary while doing anaemia screening).

Integrating two products can solve these issues. The field users can capture/view data related to stocks in field app's regular workflows (e.g. filling a form) and let the integration component ensure that the stock management system is updated. But the idea in this approach is not to develop all the stock management screens in field app.

The benefit of this approach lies in reusability of the integration component. The integration component can be generalised to cater to more use cases where there is are similar requirements. This makes the approach sustainable for the development team - as they have to maintain less software and hence for the customer ecosystem too.

Another approach is to not do integration but develop a new user facing app that uses the API of both the products. This approach is useful if the use case is simple. But as the use case becomes complex one may find that one is duplicating the user interface of both the products into this new app.

At Samanvay we have experience of having used option 3 quite a lot. In fact one of the value proposition of

was that instead of re-developing everything into the product it integrated 3 different products - OpenMRS, OpenELIS, and Odoo. Similarly, we have also integrated Avni with Bahmni using the same idea.`,
  },
  {
    id: "local-9",
    title: "Planning for security testing of open source projects",
    slug: "planning-for-security-testing-of-open-source-projects",
    description: "Based on our experience of having gone through security testing of multiple open source projects - we are sharing how one can plan and prepare for it.",
    category: "Security",
    tags: ["social-sector", "technology"],
    date: "2023-06-15",
    coverImage: null,
    author: "Vivek Singh",
    featured: false,
    published: true,
    content: `Open source projects in social sector undergo security testing when they deal with a largish entity like government, who have security standards for what they will run in their data centre. Having gone through security testing for three projects now - Bahmni, Gunak and Avni, we see that there are many commonalities in the process, testing, issue types, and their resolution. These two write-ups (this is first) is aimed to help anyone going through such process. In this we discuss considerations for planning for security testing. That is, imagine when you have a software and the customer wants it to take it through security audit - for clearance.

Following are the main topics that one needs to think-about and plan for

Usually the scope of testing may be clear i.e. involving everything. But it maybe useful to work backwards from production environment to make a list of components that may be in/out of scope. This is quite useful in the following scenarios:

In case of software platforms the above decisions should be reflected in the deployed system. If the deployed system doesn't reflect the scope of testing - then it will like cause a lot of communication issues and perhaps wasted effort for both the teams.

This process should also help bring out questions like - look we are using Power BI but that is not something we can do anything about, so should it be even part of the testing? If such a component is not part of the testing then how should we one go about certifying them, requires discussion.

In social sector open source projects, funds are scarce and the temptation maybe to use one of the existing deployments to perform security testing on. But this may create bigger problems. It is important to setup the security test environment in such a way that there are no important systems in its blast radius.

About blast radius

When offering one's system for security testing, one must be pessimistic. For example - one should assume, whether likely or not, that the security testing team can find a SQL injection attack and execute any SQL on your database. Even if it is remotely possible for them to do this, then you must setup your security test environment to protect other important system from such an event. It may be important to consider the shared development environments as production environment of as well. If shared development environments are corrupted they can result in loss of days/weeks of productivity for entire team.

It would be ideal if you have an automated process and backups for setting up an environment as it is quite likely that your security testing team may come back to you to "reset" their test environment so that they can resume testing - since they have broken something and made the system un-testable.

Practical issues that I have seen happening here is that the security team can do is:

The team that is going for first/second time for security testing may have certain perceptions of the complete security testing process. The team that does security testing - does it daily. Their process is very clear to them. There is usually and naturally large process understanding mismatch between these two teams.

It is much better for the software team to get into as much detail as possible, right in the beginning to understand the process. The questions you can ask:

This is quite important part of security testing and issue fixing projects. While there are standards but application of standards has to be negotiated. This is because:

That is why relationships, consulting skills, negotiation approach, and above all collaborative process - matters a lot in such projects. It is in software team's interest to explain that issues or resources and time may come up even before security testing starts - as many a times the customer may also be going through this process for the first time.

In the next 1 or 2 article we will discuss the common (90%) of the issues that get reported and technical approach to solve them (in similar stack as ours).

05 September 2023

https://www.canva.com/p/templates/EAE-T26xHMo-internet-security-logo/`,
  },
  {
    id: "local-10",
    title: "Benefits and constraints of shared software teams",
    slug: "benefits-and-constraints-of-shared-software-teams",
    description: "Shared software team is quite a useful software delivery organisation model when the size of the projects are small. Shared teams are quite prevalent, but the downsides and tradeoffs are not well understood. Lack of awareness of these downsides can make the experience of the software teams as well as that of customers quite frustrating, unpleasant and failure even. Customers may even believe that their software team is not capable while the issues often are inherent to the model itself.",
    category: "Team Management",
    tags: ["social-sector", "technology"],
    date: "2023-09-20",
    coverImage: null,
    author: "Vivek Singh",
    featured: false,
    published: true,
    content: `If you as a customer want software developed, supported & maintained - but the size of your project is such that it doesn't require a full time person, let alone a software team of multiple people - then shared software team is an option for you. Some examples of where it can be commonly seen.

It is lot more common for smaller business customers and non-profits organisations. In my experience when in large business software projects - this was rarely seen.

When the software needs to be developed over disjointed periods of time, it may need technical support in an unpredictable manner (at any point in time). A shared software team can solve this problem.

As the name suggests there is a permanent software team that works on these multiple software projects and provides production support for them. While the projects start, stop, end, resume, etc - the team is always in place and busy working on some project or the other.

Such software teams are built around a theme. The theme could be a product (like Avni, Wordpress) or simple applications developed on common tech stack (like Ruby on Rails, Django, etc). This theme allows the team members to be able to switch across projects and still be quite productive.

Economically a shared team, helps the customers in not having to pay for software services when they have no work to be done while still having a team that they can depend on when they do have work. It is also a fit for the need of ongoing production support that can be provided by the team - on continuos basis.

The above is quite an intuitive idea and that is why shared teams are quite prevalent. But the downsides or tradeoffs are not quite obvious and well understood - at least it was not for me. Lack of awareness of these downsides can make the experience of the software teams as well as that of customers quite frustrating and unpleasant. Customers may even believe that their software team is not capable while the issues often are inherent to the model itself. The main goal of this article it to enumerate and explain these tradeoffs.

A shared software team technically works because of the familiarity with the codebases across projects. The familiarity come from uniformity due to - common approach, language, libraries, code pattern etc. The less uniform the code is, even on the same platform, lesser the number of projects the team will scale to. Standardisation is key. It could be enforced by the underlying platform (done quite well by Wordpress and web in general) or by the software team themselves.

https://www.canva.com/p/kanchanachitkhamma/`,
  },
]
