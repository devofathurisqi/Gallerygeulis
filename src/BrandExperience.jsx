import React from 'react';
import {ArrowUpRight,ArrowDown,Flower2,Sparkles,Heart,MoveRight} from 'lucide-react';
import {brand} from './config';
import {Picture} from './ui';

const laraya=brand.slug==='laraya';

export function BrandMark(){
 return <a className={`brand-mark ${laraya?'laraya-mark':'gallery-mark'}`} href="/" aria-label={`Beranda ${brand.name}`}>
  <img src={brand.logo} alt={`Logo ${brand.name}`} width={laraya?190:72} height={laraya?158:72}/>
  {!laraya&&<span><strong>Gallery<span>Geulis</span></strong><small>HIJAB & EVERYDAY FASHION</small></span>}
 </a>;
}

export function BrandHero(){
 if(laraya)return <section className="brand-hero laraya-hero">
  <div className="laraya-hero-copy">
   <div className="eyebrow"><span className="tiny-star">✦</span> LARAYA · EVERYDAY</div>
   <h1>Indah dalam<br/>Setiap <em>Momen.</em></h1>
   <p>Ada keindahan dalam hal sederhana.<br/>Hijab pilihan untuk menemani setiap langkahmu.</p>
   <a className="btn btn-dark" href="#koleksi">Temukan koleksimu <ArrowUpRight size={18}/></a>
   <a className="hero-story-link" href="#cerita">Sebuah cerita tentang keindahan <MoveRight size={16}/></a>
   <div className="laraya-shades" aria-label="Palet LARAYA: ivory, champagne, dusty rose, mocha"><i/><i/><i/><i/><span>Soft shades. Timeless stories.</span></div>
  </div>
  <div className="laraya-hero-visual">
   <div className="laraya-photo"><Picture src={brand.heroMain} alt="Pilihan Pashmina Modal Viscose untuk keseharian" priority sizes="(max-width:700px) 90vw, 48vw"/><div className="photo-overlay"><span>THE EVERYDAY COLLECTION</span><strong>Lembut dalam setiap cerita.</strong></div></div>
   <span className="hero-orbit" aria-hidden="true">✦</span>
   <span className="vertical-note">ELEGANCE IN EVERY MOMENT</span>
   <a href="#koleksi" className="floating-edit"><Picture src={brand.heroDetail} alt="Pashmina Printed Viscose" sizes="140px"/><span>THE PRINT EDIT<em>Detail yang bermakna.</em><ArrowUpRight size={18}/></span></a>
  </div>
  <div className="hero-footnote"><span>01 / LARAYA EVERYDAY</span><a href="#pilihan">Jelajahi perlahan <ArrowDown size={14}/></a></div>
 </section>;
 return <section className="brand-hero gallery-hero">
  <div className="petal petal-one" aria-hidden="true"><Flower2/></div><div className="petal petal-two" aria-hidden="true"><Flower2/></div>
  <div className="gallery-hero-copy">
   <span className="hero-label"><Flower2 size={15}/> A LITTLE GLOW, EVERY DAY</span>
   <h1>Geulis dari hati.<br/><em>Glowing</em><br/>setiap hari<span className="headline-flower">✿</span></h1>
   <p>Hijab lembut, blouse cantik, dan detail manis.<br/>Temukan pilihan yang bikin kamu merasa jadi diri sendiri.</p>
   <div className="hero-ctas"><a className="btn btn-dark" href="#koleksi">Cari cantikmu <ArrowUpRight size={19}/></a><a className="hero-text-cta" href="#pilihan">Pilihan Geulis <ArrowRightIcon/></a></div>
   <div className="gallery-signoff"><span className="little-bloom">✿</span><span>Geulis-Glowing-Modis<small>Three little words. A whole lot of you.</small></span></div>
  </div>
  <div className="gallery-hero-visual">
   <span className="curved-note">THE GALLERYGEULIS EDIT</span>
   <div className="gallery-main-photo"><Picture src={brand.heroMain} alt="Bow Embroidered Shirt Blouse dalam warna lembut" priority sizes="(max-width:700px) 66vw, 30vw"/></div>
   <div className="gallery-detail-photo"><Picture src={brand.heroDetail} alt="Detail Embroidered Denim Blouse" priority sizes="(max-width:700px) 32vw, 17vw"/><span>little details,<br/><em>lovely days.</em></span></div>
   <div className="gallery-roundel"><Flower2 size={25}/><span>SOFT LOOKS<br/>HAPPY YOU</span></div>
   <span className="photo-index">01 — YOUR EVERYDAY FAVORITES</span>
  </div>
 </section>;
}

function ArrowRightIcon(){return <MoveRight size={17}/>}

export function BrandStory(){
 return <section id="cerita" className={`brand-story wrap ${laraya?'laraya-story':'gallery-story'}`}>
  <div className="brand-story-photo"><Picture src={brand.storyImage} alt={laraya?'Detail koleksi hijab LARAYA':'Embroidered Collar Blouse GalleryGeulis'} sizes="(max-width:700px) 90vw, 40vw"/><span className="story-photo-note">{laraya?'Designed for your moments.':'a little detail, a lovely feeling.'}</span></div>
  <div className="brand-story-copy"><div className="eyebrow">{laraya?'THE STORY OF LARAYA':'WITH LOVE, GALLERYGEULIS'}</div>
   <h2>{laraya?<>Dari sebuah cerita,<br/>untuk setiap<br/><em>momen berharga.</em></>:<>Cantik itu,<br/>saat kamu merasa<br/><em>seperti dirimu.</em></>}</h2>
   <p>{laraya?'LARAYA lahir dari cerita sederhana tentang cinta, keluarga, dan impian. Terinspirasi dari nama anak-anak, kami hadir untuk menemani setiap muslimah dalam kesehariannya.':'Ada hari yang sederhana, ada momen yang istimewa. GalleryGeulis menemanimu lewat hijab pilihan, blouse dengan detail manis, dan warna yang mudah kamu cintai.'}</p>
   <p>{laraya?'Kami ingin setiap pilihan terasa nyaman, elegan, dan bermakna. Sebab keindahan bukan hanya tentang apa yang dikenakan, tetapi juga bagaimana kamu menjalani setiap momen.':'Padu-padankan hijab favorit dan atasan yang kamu suka. Pilih perlahan, tanyakan detailnya, dan temukan gayamu bersama kami.'}</p>
   <a className="text-link" href="#koleksi">{laraya?'Temukan cerita gayamu':'Kenali koleksi kami'} <ArrowUpRight size={17}/></a>
   <span className="brand-signature">{brand.tagline}</span>
  </div>
 </section>;
}

export function BrandRibbon(){return <div className="brand-ribbon"><span>{laraya?'INDAH DALAM SETIAP MOMEN':'GEULIS · GLOWING · MODIS'}</span>{laraya?<Sparkles size={19}/>:<Flower2 size={19}/>}<span>{laraya?'ELEGANCE IN EVERY MOMENT':'HIJAB & EVERYDAY FASHION'}</span>{laraya?<Sparkles size={19}/>:<Flower2 size={19}/>}<span>{laraya?'LARAYA · EVERYDAY':'A LITTLE GLOW, EVERY DAY'}</span></div>}
