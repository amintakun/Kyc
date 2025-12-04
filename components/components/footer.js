export default function footer() {
  return (
    <footer style={{ background:'#071014', color:'#9CA3AF', padding:'30px 20px', marginTop:40 }}>
      <div style={{ maxWidth:1100, margin:'0 auto', textAlign:'center' }}>
        © {new Date().getFullYear()} KYC Services — ارتباط در تلگرام: <a href="https://t.me/YOUR_TELEGRAM" style={{ color:'#F3BA2F' }}>@YOUR_TELEGRAM</a>
      </div>
    </footer>
  )
}
