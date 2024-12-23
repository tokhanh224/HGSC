import { FaArrowUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import { useState, useEffect } from "react";

const CustomScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // Hiển thị nút cuộn lên khi cuộn được 2/3 chiều cao trang
    if (scrollTop > scrollHeight / 3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <ScrollToTop
        smooth
        top="20"
        style={{
          backgroundColor: "rgb(137, 123, 149)",
          borderRadius: "50%",
          border: "none",
          padding: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          zIndex: "1000",
          position: "fixed",
          right: "20px",
          bottom: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s ease, background-color 0.3s ease",
        }}
        onClick={() => {
          document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <FaArrowUp
          style={{
            color: "#FFF",
            fontSize: "24px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </ScrollToTop>
    )
  );
};

export default CustomScrollToTop;
