import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ background:'#0B0E11', color:'#E6E6E6', minHeight:'100vh', fontFamily:'sans-serif' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'28px 18px' }}>
        {/* Hero / banner */}
        <section style={{ display:'flex', gap:20, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap' }}>
          <div style={{ flex:'1 1 420px' }}>
            <h1 style={{ color:'#F3BA2F', fontSize:34, margin:0 }}>خدمات احراز هویت بین‌المللی (KYC)</h1>
            <p style={{ color:'#C9C9C9', marginTop:10 }}>
              احراز هویت برای صرافی‌ها و پلتفرم‌های فریلنسری — سریع، امن، پشتیبانی تلگرام.
            </p>
            <a href="https://t.me/YOUR_TELEGRAM" style={{
              display:'inline-block', marginTop:16, padding:'10px 16px', background:'#F3BA2F', color:'#0B0E11', borderRadius:10, fontWeight:700, textDecoration:'none'
            }}>ارتباط در تلگرام</a>
          </div>
          <div style={{ flex:'0 1 320px', textAlign:'center' }}>
            {/* Banner placeholder */}
            <div style={{ background:'#0F1316', borderRadius:12, padding:18 }}>
              <img src="/banner-placeholder.png" alt="banner" style={{ width:'100%', height:160, objectFit:'cover', borderRadius:8 }} />
            </div>
          </div>
        </section>

        {/* Section: Exchanges */}
        <section style={{ marginTop:36 }}>
          <h2 style={{ color:'#F3BA2F', marginBottom:12 }}>صرافی‌ها</h2>
          <div style={{ display:'flex', gap:18, flexWrap:'wrap' }}>
            {[
              {key:'binance', name:'Binance', desc:'احراز هویت سریع و امن'},
              {key:'kucoin', name:'KuCoin', desc:'رفع محدودیت حساب'},
              {key:'mexc', name:'MEXC', desc:'دسترسی کامل و سریع'}
            ].map(s => (
              <div key={s.key} style={{
                width: 320, background:'#0F1316', borderRadius:12, padding:18, border:'1px solid rgba(255,255,255,0.03)'
              }}>
                <img src={`/${s.key}.svg`} alt={s.name} style={{ width:72, height:72, objectFit:'contain' }} />
                <h3 style={{ color:'#F3BA2F', marginTop:12 }}>{s.name}</h3>
                <p style={{ color:'#C9C9C9' }}>{s.desc}</p>
                <a href="/services" style={{ display:'inline-block', marginTop:10, padding:'8px 12px', background:'#F3BA2F', color:'#0B0E11', borderRadius:8, textDecoration:'none', fontWeight:700 }}>مشاهده و سفارش</a>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Gift-card / other categories */}
        <section style={{ marginTop:36 }}>
          <h2 style={{ color:'#F3BA2F', marginBottom:12 }}>دسته‌بندی‌ها</h2>
          <div style={{ display:'flex', gap:18, flexWrap:'wrap' }}>
            {[
              {key:'netflix', name:'Netflix', img:'/netflix.svg'},
              {key:'google', name:'Google Play', img:'/googleplay.svg'},
              {key:'steam', name:'Steam', img:'/steam-placeholder.svg'}
            ].map(c => (
              <div key={c.key} style={{ width:260, background:'#0F1316', borderRadius:12, padding:14 }}>
                <img src={c.img} alt={c.name} style={{ width:64, height:64, objectFit:'contain' }} />
                <h4 style={{ color:'#fff', marginTop:10 }}>{c.name}</h4>
                <p style={{ color:'#BFC3C6', fontSize:14 }}>خرید و تحویل سریع</p>
                <a href="/services" style={{ display:'inline-block', marginTop:8, padding:'8px 12px', background:'#F3BA2F', color:'#0B0E11', borderRadius:8, textDecoration:'none', fontWeight:700 }}>مشاهده</a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

<img src="/images/binance.svg" alt="Binance" width="200" />

