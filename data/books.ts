export interface Book {
  title: string
  url: string
  image: string
  category?: string
}

export const books: Book[] = [
  { title: "Release It!", url: "https://www.amazon.in/Release-Design-Deploy-Production-Ready-Software-ebook/dp/B079YWMY2V", image: "/images/books/release-it.jpg", category: "Engineering" },
  { title: "Crossing the Chasm", url: "https://www.amazon.in/Crossing-Chasm-3rd-Disruptive-Mainstream/dp/0062292986", image: "/images/books/crossing-the-chasm.jpg", category: "Strategy" },
  { title: "The Innovator's Dilemma", url: "https://www.amazon.in/Innovators-Dilemma-Technologies-Management-Innovation/dp/142219602X", image: "/images/books/innovators-dilemma.jpg", category: "Strategy" },
  { title: "Working Effectively with Legacy Code", url: "https://www.amazon.in/Working-Effectively-Legacy-Robert-Martin/dp/0131177052", image: "/images/books/legacy-code.jpg", category: "Engineering" },
  { title: "Thinking, Fast and Slow", url: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555", image: "/images/books/thinking-fast-slow.jpg", category: "Thinking" },
  { title: "Dreaming in Code", url: "https://www.amazon.in/Dreaming-Code-Programmers-Transcendent-Software/dp/1400082463", image: "/images/books/dreaming-in-code.jpg", category: "Engineering" },
  { title: "Extreme Programming Explained", url: "https://www.amazon.in/Extreme-Programming-Explained-Embrace-Change/dp/0201616416", image: "/images/books/xp-explained.jpg", category: "Engineering" },
  { title: "The Beautiful Tree", url: "https://www.amazon.in/Beautiful-Tree-Personal-Educating-Themsleves/dp/1939709121", image: "/images/books/beautiful-tree.jpg", category: "Social Development" },
  { title: "Domain-Driven Design", url: "https://www.amazon.in/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215", image: "/images/books/ddd.jpg", category: "Engineering" },
  { title: "User Stories Applied", url: "https://www.amazon.in/User-Stories-Applied-Development-Signature/dp/0321205685", image: "/images/books/user-stories.jpg", category: "Engineering" },
  { title: "Factfulness", url: "https://www.amazon.in/Factfulness-Reasons-Wrong-Things-Better/dp/1473637465", image: "/images/books/factfulness.jpg", category: "Thinking" },
  { title: "In Service of the Republic", url: "https://www.amazon.in/Service-Republic-Science-Economic-Policy/dp/0670093327", image: "/images/books/service-of-republic.jpg", category: "Social Development" },
  { title: "Deep Work", url: "https://www.amazon.in/Deep-Work-Focused-Success-Distracted/dp/0349413681", image: "/images/books/deep-work.jpg", category: "Productivity" },
  { title: "Clean Code", url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882", image: "/images/books/clean-code.jpg", category: "Engineering" },
  { title: "Out of Crisis", url: "https://www.amazon.in/Out-Crisis-Press-Edwards-Deming/dp/0262541157", image: "/images/books/out-of-crisis.jpg", category: "Management" },
  { title: "Incerto", url: "https://www.amazon.in/Incerto-Deluxe-Randomness-Procrustes-Antifragile/dp/198481981X", image: "/images/books/incerto.jpg", category: "Thinking" },
  { title: "Refactoring", url: "https://www.amazon.in/Refactoring-Improving-Existing-Addison-wesley-Signature/dp/0134757599", image: "/images/books/refactoring.jpg", category: "Engineering" },
  { title: "JavaScript: The Good Parts", url: "https://www.amazon.in/Javascript-Good-Parts-D-Crockford/dp/0596517742", image: "/images/books/js-good-parts.jpg", category: "Engineering" },
  { title: "Peopleware", url: "https://www.amazon.in/Peopleware-Productive-Projects-Tom-DeMarco/dp/0932633439", image: "/images/books/peopleware.jpg", category: "Management" },
  { title: "Last Among Equals", url: "https://www.amazon.in/Last-Among-Equals-Politics-Villages/dp/9390679664", image: "/images/books/last-among-equals.jpg", category: "Social Development" },
  { title: "Geek Heresy", url: "https://www.amazon.in/Geek-Heresy-Kentaro-Toyama/dp/161039528X", image: "/images/books/geek-heresy.jpg", category: "Social Development" },
  { title: "ReWork", url: "https://www.amazon.in/ReWork-Change-Way-Work-Forever/dp/0091929784", image: "/images/books/rework.jpg", category: "Management" },
  { title: "Hackers and Painters", url: "https://www.amazon.in/Hackers-Painters-Big-Ideas-Computer/dp/9350230399", image: "/images/books/hackers-painters.jpg", category: "Engineering" },
  { title: "Flow", url: "https://www.amazon.com/Flow-Psychology-Experience-Perennial-Classics/dp/0061339202", image: "/images/books/flow.jpg", category: "Thinking" },
  { title: "Design Patterns", url: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612", image: "/images/books/design-patterns.jpg", category: "Engineering" },
  { title: "Poor Economics", url: "https://www.amazon.in/Poor-Economics-Rethinking-Poverty-Ways/dp/8184002807", image: "/images/books/poor-economics.jpg", category: "Social Development" },
  { title: "Jamkhed", url: "https://www.amazon.in/Jamkhed-Comprehensive-Rural-Health-Project-ebook/dp/B00B7KGZ9M", image: "/images/books/jamkhed.jpg", category: "Social Development" },
  { title: "The Machine That Changed the World", url: "https://www.amazon.in/Machine-That-Changed-World-Revolutionizing/dp/0743299795", image: "/images/books/machine-changed-world.jpg", category: "Management" },
  { title: "The Digital Doctor", url: "https://www.amazon.in/Digital-Doctor-Hope-Medicines-Computer/dp/1260019608", image: "/images/books/digital-doctor.jpg", category: "Health Tech" },
  { title: "Everybody Loves a Good Drought", url: "https://www.amazon.in/Everybody-Loves-Good-Drought-Sainath/dp/0140259848", image: "/images/books/good-drought.jpg", category: "Social Development" },
  { title: "Mountains Beyond Mountains", url: "https://www.amazon.in/Mountains-Beyond-Quest-Farmer-Would/dp/0812973011", image: "/images/books/mountains.jpg", category: "Social Development" },
  { title: "The Broken Ladder", url: "https://www.amazon.in/Broken-Ladder-Paradox-Potential-Billion/dp/8184007620", image: "/images/books/broken-ladder.jpg", category: "Social Development" },
  { title: "Continuous Delivery", url: "https://www.amazon.in/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912", image: "/images/books/continuous-delivery.jpg", category: "Engineering" },
  { title: "The Design of Everyday Things", url: "https://www.amazon.in/Design-Everyday-Things-Don-Norman/dp/0465050654", image: "/images/books/design-everyday.jpg", category: "Design" },
  { title: "Introduction to Machine Learning", url: "https://www.amazon.in/Introduction-Machine-Learning-Andreas-Mueller/dp/1449369413", image: "/images/books/intro-ml.jpg", category: "Engineering" },
  { title: "Patterns of Enterprise Application Architecture", url: "https://www.amazon.in/Patterns-Enterprise-Application-Architecture-Martin/dp/8131794024", image: "/images/books/peaa.jpg", category: "Engineering" },
  { title: "Effective Java", url: "https://www.amazon.in/Effective-Java-Joshua-Bloch-ebook/dp/B078H61SCH", image: "/images/books/effective-java.jpg", category: "Engineering" },
  { title: "High Performance Browser Networking", url: "https://www.amazon.in/High-Performance-Browser-Networking-Grigorik/dp/9351104710", image: "/images/books/hpbn.jpg", category: "Engineering" },
  { title: "The Pragmatic Programmer", url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/", image: "/images/books/pragmatic-programmer.jpg", category: "Engineering" },
]
