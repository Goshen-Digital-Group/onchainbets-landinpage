// components/OnChainBetsLogo.jsx
export default function OnChainBetsLogo({ className = "", alt = "ONCHAINBETS" }) {
  return (
    <img
      src="/onchainbet-small-white-02.svg" // ✅ Points to public/logo-2-02.svg
      alt={alt}
      className={`inline-block align-middle h-[15em] w-auto ${className}`}
      style={{ height: '1em', width: 'auto' }}
    />
  );
}
