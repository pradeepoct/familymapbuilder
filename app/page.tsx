"use client";
import {useMemo,useState} from "react";
import {Plus,Users,Search,Download,Heart,GitBranch,Trash2} from "lucide-react";
type Person={id:number;name:string;relationship:string};
export default function Home(){
 const [people,setPeople]=useState<Person[]>([{id:1,name:"You",relationship:"Start person"}]);
 const [name,setName]=useState(""); const [query,setQuery]=useState("");
 const add=(relationship:string)=>{const n=name.trim()||"New family member";setPeople(p=>[...p,{id:Date.now(),name:n,relationship}]);setName("")};
 const visible=useMemo(()=>people.filter(p=>p.name.toLowerCase().includes(query.toLowerCase())),[people,query]);
 return <main>
 <nav><a className="brand" href="/">FamilyMapBuilder</a><div><a href="#how">How it works</a><a href="#features">Features</a><a href="#builder" className="navcta">Start building</a></div></nav>
 <section className="hero"><div><p className="eyebrow">FREE ONLINE FAMILY TREE BUILDER</p><h1>Build your family tree without complicated software.</h1><p>Create a visual family map in minutes. Start with one person, then add parents, children, siblings and partners with simple actions.</p><a className="primary" href="#builder">Start your family tree <GitBranch size={18}/></a><small>No credit card required for the builder.</small></div><aside><Users size={44}/><h2>Start with one person</h2><p>Your family map grows naturally as you add relationships.</p></aside></section>
 <section id="builder" className="builder"><header><div><p className="eyebrow">INTERACTIVE FAMILY MAP</p><h2>Build your tree</h2></div><button disabled title="Export is part of the next milestone"><Download size={18}/> Export soon</button></header>
 <div className="controls"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Family member name"/><button className="primary" onClick={()=>add("Family member")}><Plus size={18}/> Add person</button></div>
 <div className="relationships"><button onClick={()=>add("Parent")}>Add parent</button><button onClick={()=>add("Sibling")}>Add sibling</button><button onClick={()=>add("Partner")}>Add partner</button><button onClick={()=>add("Child")}>Add child</button></div>
 <div className="search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search family members"/></div>
 <div className="tree">{visible.map(p=><article className="person" key={p.id}><div className="avatar">{p.name[0]?.toUpperCase()}</div><strong>{p.name}</strong><span>{p.relationship}</span>{p.id!==1&&<button aria-label={"Remove "+p.name} onClick={()=>setPeople(x=>x.filter(i=>i.id!==p.id))}><Trash2 size={15}/></button>}</article>)}</div>
 <p className="tip"><Heart size={17}/> Enter a name once, then choose the relationship you want to add.</p></section>
 <section id="features" className="features"><article><Users size={26}/><h3>Easy to understand</h3><p>Relationship-based actions keep family tree creation simple.</p></article><article><Search size={26}/><h3>Quick search</h3><p>Find people quickly as larger family maps grow.</p></article><article><GitBranch size={26}/><h3>Built to expand</h3><p>The foundation supports profiles, photos, sharing and richer relationship visualization.</p></article></section>
 <section id="how" className="how"><p className="eyebrow">HOW IT WORKS</p><h2>Three simple steps</h2><ol><li><b>1</b><span><strong>Start with yourself</strong><br/>Create the first person in your family map.</span></li><li><b>2</b><span><strong>Add relatives</strong><br/>Choose parent, sibling, partner or child.</span></li><li><b>3</b><span><strong>Grow the story</strong><br/>Continue adding people and connections.</span></li></ol></section>
 <footer>© 2026 FamilyMapBuilder · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></footer>
 </main>
}