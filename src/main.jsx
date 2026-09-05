import React,{useEffect,useMemo,useState}from"react";
import{createRoot}from"react-dom/client";
import{ArrowUpRight,Github,Linkedin,Mail,Phone,Moon,Sun,Menu,X,Download,Copy,Check,ExternalLink}from"lucide-react";
import"./styles.css";

const projects=[
{title:"Online Attendance Portal",cat:"Java",tech:["Java","Servlet","JSP","HTML","CSS","JavaScript","Bootstrap","MySQL"],desc:"A web-based student attendance management application developed using JSP, Servlets and MySQL.",features:["Secure login","Attendance management","Real-time data handling","Responsive UI"],github:"https://github.com/lakshaysharma870/online-attendance-portal"},
{title:"Customer Churn Analysis & Customer Intelligence",cat:"ML",tech:["Python","Pandas","NumPy","Scikit-learn"],desc:"A customer analytics project focused on churn analysis and customer intelligence. Project-specific results are intentionally not claimed without verified repository information.",features:["Data analysis","Data processing","Feature engineering","Model evaluation"],github:"https://github.com/lakshaysharma870/customer-churn-analysis-and-customer-intelligence"},
{title:"AI-Powered Multi-Tool Chatbot",cat:"GenAI",tech:["Python","LangGraph","LangChain","Streamlit","ChromaDB","Cohere Embeddings","SQLite"],desc:"An AI-powered chatbot combining multi-tool interaction with Retrieval-Augmented Generation and semantic retrieval.",features:["RAG","Semantic retrieval","Web search tool","Calculator tool","Conversation history"],github:null},
{title:"AI Restaurant Assistant",cat:"Automation",tech:["n8n","WhatsApp","Gemini API"],desc:"An AI-powered restaurant assistant for automating common customer queries through WhatsApp.",features:["Menu information","Restaurant timings","Reservations","FAQs","Webhooks","Simple memory"],github:null}
];

const skills={
"Programming Languages":["C","Java","Python","SQL"],
"Web Development":["HTML5","CSS3","JavaScript","Servlet","JSP","Bootstrap"],
"Databases":["MySQL","PostgreSQL","SQLite"],
"Libraries & Frameworks":["Pandas","NumPy","Scikit-learn","OpenCV","TensorFlow","FastAPI","REST APIs","Matplotlib","Seaborn"],
"Generative AI":["LLMs","LangChain","LangGraph","RAG","Prompt Engineering","Context Engineering","AWS Bedrock","Embeddings"],
"Machine Learning":["Machine Learning","Deep Learning","NLP","Classification","Regression","Feature Engineering","Model Evaluation"],
"Cloud & Tools":["AWS","EC2","IAM","EBS","VPC","n8n","VS Code","Apache NetBeans"]
};

const nav=["Home","About","Skills","Projects","Experience","Education","Certifications","Contact"];

function App(){
 const[dark,setDark]=useState(true),[mobile,setMobile]=useState(false),[filter,setFilter]=useState("All"),[copied,setCopied]=useState(false);
 useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light"},[dark]);
 const visible=useMemo(()=>filter==="All"?projects:projects.filter(p=>p.cat===filter),[filter]);
 const copyEmail=async()=>{try{await navigator.clipboard.writeText("lakshaysharma2399@gmail.com");setCopied(true);setTimeout(()=>setCopied(false),1600)}catch{}};
 return <div>
 <header className="nav"><div className="navin">
   <a className="brand" href="#home">Lakshy<span>.</span></a>
   <button className="mobileBtn" aria-label="Toggle navigation" onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</button>
   <nav className={mobile?"open":""}>{nav.map(n=><a key={n} href={"#"+n.toLowerCase()} onClick={()=>setMobile(false)}>{n}</a>)}<button className="theme" aria-label="Toggle dark mode" onClick={()=>setDark(!dark)}>{dark?<Sun/>:<Moon/>}</button></nav>
 </div></header>

 <main>
 <section id="home" className="hero"><div className="heroText">
   <div className="eyebrow">JAVA • AI/ML • GENERATIVE AI</div>
   <h1>Hi, I'm <span>Lakshy Kumar</span></h1>
   <h2>Java Developer <b>|</b> AI/ML Enthusiast</h2>
   <p>I build web applications and AI-powered solutions using Java, Python, modern web technologies, and Generative AI tools.</p>
   <div className="actions"><a className="btn primary" href="#projects">View My Projects <ArrowUpRight/></a><a className="btn secondary" href="/resume.pdf" download>Download Resume <Download/></a></div>
   <div className="social"><a href="https://github.com/lakshaysharma870" target="_blank" rel="noreferrer"><Github/>GitHub</a><a href="https://www.linkedin.com/in/lakshy-kumar" target="_blank" rel="noreferrer"><Linkedin/>LinkedIn</a><a href="mailto:lakshaysharma2399@gmail.com"><Mail/>Email</a></div>
 </div><div className="codeCard"><div className="codebar"><i/><i/><i/><span>lakshy.java</span></div><pre>{`public class Lakshy {
  String role = "Java Developer";
  String focus = "AI / ML";
  String mindset = "Build & Learn";
}`}</pre><div className="codeFoot"><span>Java</span><span>Python</span><span>GenAI</span></div></div></section>

 <Section id="about" kicker="ABOUT" title="Building with purpose."><div className="about"><div className="aboutMark">LK</div><div><p>I'm an MCA student and aspiring software developer with a strong interest in Java, Python, software development, AI/ML and Generative AI.</p><p>I have completed my BCA and am pursuing MCA at ABES Engineering College. I learn by building practical applications, including web applications, customer analytics and AI-powered assistants.</p></div></div></Section>

 <section id="skills" className="tinted"><div className="wrap"><SectionHeading kicker="SKILLS" title="Tools I build with."/><div className="skillGrid">{Object.entries(skills).map(([group,items])=><article className="skillCard" key={group}><h3>{group}</h3><div className="chips">{items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></div></section>

 <section id="projects"><div className="wrap"><SectionHeading kicker="PROJECTS" title="Selected work."/><div className="filters">{["All","Java","ML","GenAI","Automation"].map(x=><button className={filter===x?"active":""} key={x} onClick={()=>setFilter(x)}>{x}</button>)}</div><div className="projectGrid">{visible.map((p,i)=><article className="project" key={p.title}><div className="projectTop"><span className="number">0{i+1}</span><span className="tag">{p.cat}</span></div><h3>{p.title}</h3><p>{p.desc}</p><div className="features">{p.features.map(f=><span key={f}>✓ {f}</span>)}</div><div className="tech">{p.tech.map(t=><span key={t}>{t}</span>)}</div>{p.github&&<a className="projectLink" href={p.github} target="_blank" rel="noreferrer">View on GitHub <ExternalLink/></a>}</article>)}</div></div></section>

 <section id="experience" className="tinted"><div className="wrap"><SectionHeading kicker="EXPERIENCE" title="Learning through real work."/><div className="timeline"><div className="dot"/><article><span className="date">FEB 2026 — MAY 2026</span><h3>AI/ML Intern</h3><h4>ConsultIT Technologies Pvt Ltd</h4><p>Worked and trained in Machine Learning, Deep Learning, NLP and Computer Vision applications using Python, TensorFlow, Scikit-learn, OpenCV and Pandas, with exposure to AI/ML model development and data processing.</p></article></div></div></section>

 <section id="education"><div className="wrap"><SectionHeading kicker="EDUCATION" title="Academic foundation."/><div className="eduGrid">{[
 ["Master of Computer Application","ABES Engineering College","2024 — 2026"],
 ["Bachelor of Computer Application","S.D. College of Management Studies","2021 — 2024"],
 ["Senior Secondary Education (XII)","Lala Jagdish Prasad Saraswati Vidya Mandir Inter College","2021"],
 ["Secondary Education (X)","Lala Jagdish Prasad Saraswati Vidya Mandir Inter College","2019"]
 ].map(x=><article className="edu" key={x[0]}><span>{x[2]}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>

 <section id="certifications" className="tinted"><div className="wrap"><SectionHeading kicker="CERTIFICATION" title="Continuous learning."/><article className="cert"><div className="certIcon">PY</div><div><h3>Python Essentials 1 & 2</h3><p>Cisco Networking Academy / OpenEDG Python Institute</p></div></article></div></section>

 <section className="resume"><div><div className="eyebrow">RESUME</div><h2>Want to know more about me?</h2><p>Download my resume to explore my education, technical skills, projects and experience.</p></div><a className="btn primary" href="/resume.pdf" download>Download Resume <Download/></a></section>

 <section id="contact"><div className="wrap"><SectionHeading kicker="CONTACT" title="Let's connect."/><div className="contactGrid"><div className="contactInfo"><p>Have an opportunity, project or just want to say hello? Reach out through any of the channels below.</p><div className="contactRow"><Mail/><div><small>Email</small><a href="mailto:lakshaysharma2399@gmail.com">lakshaysharma2399@gmail.com</a></div><button onClick={copyEmail} aria-label="Copy email">{copied?<Check/>:<Copy/>}</button></div><div className="contactRow"><Phone/><div><small>Phone</small><a href="tel:+917820012368">+91 7820012368</a></div></div><div className="contactRow"><Linkedin/><div><small>LinkedIn</small><a href="https://www.linkedin.com/in/lakshy-kumar" target="_blank" rel="noreferrer">linkedin.com/in/lakshy-kumar</a></div></div><div className="contactRow"><Github/><div><small>GitHub</small><a href="https://github.com/lakshaysharma870" target="_blank" rel="noreferrer">github.com/lakshaysharma870</a></div></div></div><form onSubmit={e=>{e.preventDefault();alert("The form is structured for Formspree/EmailJS integration. It is not connected yet.")}}><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label><label>Message<textarea required rows="5" placeholder="Tell me about the opportunity..."/></label><button className="btn primary" type="submit">Send Message <ArrowUpRight/></button></form></div></div></section>
 </main>
 <footer><div>Lakshy Kumar</div><span>Java Developer | AI/ML Enthusiast</span><small>© 2026 Lakshy Kumar. All rights reserved.</small></footer>
 </div>
}
function Section({id,kicker,title,children}){return <section id={id}><div className="wrap"><SectionHeading kicker={kicker} title={title}/>{children}</div></section>}
function SectionHeading({kicker,title}){return <div className="heading"><span>{kicker}</span><h2>{title}</h2></div>}
createRoot(document.getElementById("root")).render(<App/>);