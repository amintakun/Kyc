import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{
      background: '#0B0E11',
      borderBottom: '1px solid rgba(255,255,255,0.03)',
      padding: '12px 20px',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ color: '#F3BA2F', fontWeight: 800 }}>KYC Services</div>
        <div style={{ display: 'flex', gap: 14 }}>
          <Link href="/"><a style={{ color: '#E6E6E6', textDecoration: 'none' }}>خانه</a></Link>
          <Link href="/services"><a style={{ color: '#E6E6E6', textDecoration: 'none' }}>خدمات</a></Link>
          <Link href="/contact"><a style={{ color: '#E6E6E6', textDecoration: 'none' }}>تماس با ما</a></Link>
        </div>
      </div>
    </nav>
  )
}
