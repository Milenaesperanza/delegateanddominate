import vipSeatBg from "../assets/vip-seat.png";

export default function VipSeat() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        backgroundImage: `url(${vipSeatBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      >
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/ZZPPijOKNcbAqg2iFtxK"
          title="VIP Seat Form"
          style={{
            width: "100%",
            minHeight: "100vh",
            border: "none",
            display: "block",
            background: "transparent",
          }}
        />
      </div>
    </main>
  );
}
